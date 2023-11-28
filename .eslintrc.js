module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb',
          'prettier',
          'prettier/react'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  puglins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
'warn', {
  extensions: ['.jsx', '.js']
}
    ],
    'import/prefer-default-exports': 'off'
  },
};
