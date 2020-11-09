const sharedPlugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-optional-chaining',
  'babel-plugin-styled-components'
]


const runtimePlugins = [['@babel/plugin-transform-runtime', {version: '7.9.2', helpers: true}]]

const setPresets = moduleValue => [
    ['@babel/preset-react', {modules: moduleValue}],
    ['@babel/preset-env', {modules: moduleValue}],
  ]

module.exports = {
  env: {
    development: {
      presets: setPresets(process.env.BABEL_MODULE || false),
      plugins: [...sharedPlugins, ...runtimePlugins]
    },
    production: {
      presets: setPresets(false),
      plugins: [...sharedPlugins, ...runtimePlugins]
    },
    test: {
      presets: setPresets('commonjs'),
      plugins: [...sharedPlugins]
    }
  }
}
