import { readFileSync } from 'fs'
import { createServer, Server } from 'http'
import MagicString from 'magic-string'
import type { AddressInfo } from 'net'
import { resolve } from 'path'
import type { Plugin, RollupOptions } from 'rollup'
import { WebSocketServer } from 'ws'

export type ReloadConfig = {
  port: number
  host: string
}

export const autoReload = (init: Partial<ReloadConfig> = {}): Plugin => {
  const config = {
    port: 0,
    host: 'localhost',
    ...init,
  }

  let watch = false
  let httpServer: Server = undefined
  let webSocketServer: WebSocketServer = undefined

  return {
    name: 'Rollup-Plugin-Auto-Reload',

    async options(options: RollupOptions) {
      watch = !!options.watch
    },

    async buildStart() {
      if (watch && !httpServer) {
        httpServer = createServer().listen(config.port)
        webSocketServer = new WebSocketServer({ server: httpServer })
      }
    },

    async buildEnd() {
      if (watch) {
        setTimeout(() => webSocketServer?.clients.forEach(socket => socket.send('RELOAD')))
      }
    },

    async closeWatcher() {
      webSocketServer?.close()
      httpServer?.close()
    },

    async transform(code, module) {
      if (watch && httpServer && this.getModuleInfo(module).isEntry) {
        const address = httpServer.address() as AddressInfo
        const path = resolve(__dirname, 'client.js')
        const supplement = readFileSync(path).toString()
          .replaceAll('HOST', config.host)
          .replaceAll('PORT', address.port.toString())

        return {
          code: supplement + code,
          map: new MagicString(supplement + code).generateMap({ source: 'client.js', includeContent: true }),
        }
      } else {
        return {
          code,
          map: this.getCombinedSourcemap(),
        }
      }
    },
  }
}
