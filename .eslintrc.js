module.exports = {
  root: true,
  plugins: ['sort-keys-custom-order', 'simple-import-sort', 'import', 'unused-imports'],
  extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier'],
  rules: {
    // アロー関数の使用を強制
    'func-style': ['error', 'expression'],
    // const の使用を強制
    'prefer-const': 'error',

    /* import 系 */
    // import 文はファイル先頭に書くことを強制
    'import/first': 'error',
    // デフォルトエクスポートを禁止
    'import/no-default-export': 'error',
    // インポート時に改行を強制
    'import/newline-after-import': 'error',
    // パッケージが同じ場合は 1 つの import にまとめる
    'import/no-duplicates': 'error',
    // インポート順序を強制
    'simple-import-sort/imports': 'error',
    // エクスポート順序を強制
    'simple-import-sort/exports': 'error',
    // 使用していないインポートを禁止
    'unused-imports/no-unused-imports': 'error',
  },
  overrides: [
    {
      files: ['pages/**/*.tsx', 'pages/api/**/*.ts', 'next.config.js'],
      rules: {
        // pages コンポーネントのデフォルトエクスポートを許可
        'import/no-default-export': 'off',
      },
    },
  ],
}
