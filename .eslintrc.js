module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
};
