import typescript from '@rollup/plugin-typescript'
import { RollupOptions } from 'rollup'
import dts from 'rollup-plugin-dts'

const configuration: RollupOptions[] = [
  {
    input: 'src/plugin.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/module.mjs',
        format: 'es',
        sourcemap: true,
      },
    ],
    external: [
      'fs',
      'http',
      'magic-string',
      'path',
      'rollup',
      'ws',
    ],
    plugins: [
      typescript(),
    ],
  },
  {
    input: 'src/client.ts',
    output: {
      file: 'dist/client.js',
      format: 'es',
      sourcemap: false,
    },
    plugins: [
      typescript(),
    ],
  },
  {
    input: 'src/plugin.ts',
    output: {
      file: 'dist/index.d.ts',
    },
    plugins: [
      dts(),
    ],
  },
]

export default configuration
