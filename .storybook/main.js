module.exports = {
  stories: ['../src/**/*.stories.@(js|md|mdx)'],
  addons: [
    '@storybook/addon-docs/preset',
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
  ]
}