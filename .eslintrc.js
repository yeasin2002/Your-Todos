module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],

  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react'],
  rules: {
    'react/prop-types': 0,

    'react/jsx-uses-react': 0,
    'react/jsx-uses-vars': 0,
  },
};
