const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const fileSize = require('rollup-plugin-filesize')
const css = require('rollup-plugin-css-porter')

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    css(),
    commonjs(),
    resolve({
      dedupe: ['react', 'react-dom', 'styled-system', 'styled-components'],
    }),
    fileSize()
  ],
  external: [
    "@lessondesk/material-icons",
    "formik",
    "prop-types",
    "react",
    'react-dom',
    'styled-system',
    "styled-components"
  ]
}
