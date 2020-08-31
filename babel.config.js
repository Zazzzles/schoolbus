module.exports = api => {
  const isTest = api.env('test')

  if(isTest) {
    return {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-react'
      ],

      plugins: [
        'require-context-hook',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread'
      ]
    }
  }

  return {
    'presets': ['@lessondesk/babel-preset'],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      'babel-plugin-styled-components'
    ]
  }
}
