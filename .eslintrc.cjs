module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    quotes: [
      'warn',
      'single'
    ],
    'prefer-arrow-callback': 'warn',
    'no-multiple-empty-lines': 'warn',
    indent: ['warn', 2],
    semi: ['warn', 'never'],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}