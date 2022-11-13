module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:jsx-a11y/recommended',
  ],

  overrides: ['no-unused-vars'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  'prettier/prettier': [
    'error',
    {
      trailingComma: 'es5',
      singleQuote: true,
      printWidth: 100,
      tabWidth: 4,
      semi: true,
      endOfLine: 'auto',
    },
  ],
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {},
};
