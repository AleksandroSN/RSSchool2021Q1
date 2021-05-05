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
    'import/prefer-default-export': 'off',
    'operator-linebreak': 'off',
    'no-unused-vars': 'warn',
    'no-param-reassign': 0, //temp
    strict: 'warn',
  },
};
