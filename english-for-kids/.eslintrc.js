module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    'jsx-quotes': [1, 'prefer-double'],
    "react/self-closing-comp": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": "off",
    "import/prefer-default-export": "off"
  },
};
