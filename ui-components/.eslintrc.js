module.exports = {
  plugins: ['react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    project: './.storybook/tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'off',
      "react/jsx-props-no-spreading": "off",
      'react/require-default-props': [1, { 'ignoreFunctionalComponents': true}],
      'react/default-props-match-prop-types': [2, {'allowRequiredDefaults': true}],
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/indent': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-nested-ternary': 'off',
      'no-undef': 'off',
      'no-shadow': 'off',
      'react/jsx-filename-extension' : 'off'
  },
};
