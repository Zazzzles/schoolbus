const path = require('path')

module.exports = async ({ config }) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      'styled-components': path.join(
        __dirname,
        '../node_modules/styled-components'
      ),
        'styled-system': path.join(__dirname, '../node_modules/styled-system'),
    'prop-types': path.join(__dirname, '../node_modules/prop-types'),
    '@lessondesk/material-icons': path.join(__dirname, '../node_modules/@lessondesk/material-icons/'),
    '@babel/runtime': path.join(__dirname, '../node_modules/@babel/runtime'),
    '@lessondesk/schoolbus': path.join(__dirname, '../src'),
    }
  }

  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );

  // NOTE: Let babel compile @lessondesk/material-icons by overriding excludes rule
  config.module.rules[0].exclude = function (modulePath) {
    return /node_modules/.test(modulePath) &&
      !/node_modules\/@lessondesk\/material-icons/.test(modulePath);
  }

  return config
};
