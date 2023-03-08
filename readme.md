# Rollup Auto Reload Plugin

[![npm](https://img.shields.io/npm/v/rollup-plugin-auto-reload.svg)](https://npmjs.com/package/rollup-plugin-auto-reload)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build](https://github.com/pmwmedia/rollup-plugin-auto-reload/actions/workflows/build.yaml/badge.svg)](https://github.com/pmwmedia/rollup-plugin-auto-reload/actions/workflows/build.yaml)

This rollup plugin automatically reloads the web page when rollup is running in watch mode and any changes are made on bundles. It works on any server as well as on the local file system.

## Install

```bash
npm i --save-dev rollup-plugin-auto-reload
```

```bash
yarn add --dev rollup-plugin-auto-reload
```

## Options

| Option    | Values                            | Default     |
|-----------|-----------------------------------|-------------|
| `host`    | host name or IP address as string | `localhost` |
| `port`    | any number between 0 - 65,535     | `0`         |

### Host

The host can be any legal host name or IP address. If you run your server and client on the same machine, you can keep the default value `localhost`.

### Port

The port can be any legal port number between 0 - 65,535. If the port is set to `0`, a random available port will be used.

## Getting Started

1. Install the plugin:

```bash
npm i --save-dev rollup-plugin-auto-reload
```

```bash
yarn add --dev rollup-plugin-auto-reload
```

2. Add the plugin in your `rollup.config.js` or `rollup.config.ts`:

```javascript
import { autoReload } from "rollup-plugin-auto-reload"

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "iife",
  },
  plugins: [
    autoReload({ /* place your options here */ })
  ],
}
```

## Example

You can find a fully working minimal example project in the [demo folder](https://github.com/pmwmedia/rollup-plugin-auto-reload/tree/main/demo).
