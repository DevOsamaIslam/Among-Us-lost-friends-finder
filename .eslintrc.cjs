module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    quotes: [
      'error',
      'single'
    ],
    'prefer-arrow-callback': 'error',
    'no-multiple-empty-lines': 'error',
    indent: ['error', 2],
    semi: ['error', 'never']
  }
}