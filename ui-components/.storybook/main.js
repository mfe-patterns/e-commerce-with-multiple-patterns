const path = require('path');

module.exports = {
  stories: ['../src/**/*/*.stories.@(tsx|jsx|mdx)'],
  core: {
    builder: 'webpack5',
  },
  typescript: {
    // also valid 'react-docgen-typescript' | false
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async (config, { configType }) => {
    const srcDir = path.resolve(__dirname, '..', 'src');
    const nodeModules = path.resolve(__dirname, '..', 'node_modules');

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      srcDir,
      nodeModules,
    ];

    return config;
  },
};
