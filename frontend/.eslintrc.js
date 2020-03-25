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
    'max-len': ['error', { code: 120, ignoreUrls: true }],
  },
};
