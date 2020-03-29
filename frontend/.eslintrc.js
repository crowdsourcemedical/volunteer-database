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
    'no-console': 'off',
    'no-shadow': 'off',
    'no-return-assign': [2, 'except-parens'],
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};
