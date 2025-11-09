import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        NodeJS: 'readonly',
        jest: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
      prettier,
    },
    rules: {
      // Node plugin rules are not compatible with flat config
      // 'node/no-unsupported-features/es-syntax': 'off',
      // 'node/no-missing-require': 'off',
      // 'node/no-missing-import': 'off',

      // Import plugin rules
      'import/no-unresolved': 'off',
      'import/named': 'warn',

      // Prettier
      'prettier/prettier': 'error',

      // Custom rules
      'no-unused-vars': 'warn',
      'no-console': ['error', { allow: ['warn'] }],
    },
  },
];
