import { autoReload } from 'rollup-plugin-auto-reload'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
  },
  plugins: [
    autoReload(),
  ],
}
