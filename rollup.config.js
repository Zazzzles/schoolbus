const css = require('rollup-plugin-css-only')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

module.exports = {
  input: 'src/css-imports.js',
  plugins: [
    nodeResolve(),
    css({ output: 'dist/index.css' }),
  ],
}