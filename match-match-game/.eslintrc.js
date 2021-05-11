module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-plusplus': 'off',
    'no-console': 'warn',
    'max-len': ['warn', { code: 120 }],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    '@typescript-eslint/indent': [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
  },
};
