import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default [
  stylistic.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ['**/*.{js,ts,tsx}'],
  },
  {
    ignores: ['dist/'],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@stylistic/semi': 'off',
      '@stylistic/eol-last': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': 'off',
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/no-multiple-empty-lines': ['warn', { max: 2 }],
      '@stylistic/brace-style': 'off',
      '@stylistic/max-len': ['warn', { code: 120 }],
    },
  },
];
