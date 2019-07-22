const path = require('path')

module.exports = {
  resolve: {
    alias: {
      'styled-components': path.join(
        __dirname,
        '../node_modules/styled-components'
      ),
      'styled-system': path.join(__dirname, '../node_modules/styled-system'),
      'prop-types': path.join(__dirname, '../node_modules/prop-types'),
      '@babel/runtime': path.join(__dirname, '../node_modules/@babel/runtime'),
      '@lessondesk/schoolbus': path.join(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader'
      }
    ],

  }
}
