const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './.storybook/tsconfig.json',
        },
      },
    ],
  });
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/assets/fonts'),
          to: 'assets/fonts',
        },
        {
          from: path.resolve(__dirname, '../src/assets/icons'),
          to: 'assets/icons',
        },
      ],
    }),
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
