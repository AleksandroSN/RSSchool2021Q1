module.exports = {
  // parser: "babel-eslint",
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-unused-vars': 'warn',
    strict: 'warn',
  },
};
