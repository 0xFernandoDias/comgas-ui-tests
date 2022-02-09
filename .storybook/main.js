module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@chakra-ui/storybook-addon'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
