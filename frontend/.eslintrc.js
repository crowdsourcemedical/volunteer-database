module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ['react-app', 'airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
