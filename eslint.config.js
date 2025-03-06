import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: ['**/*.{js,ts,tsx}']
  },
  {
    ignores: ['dist/']
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      '@stylistic/semi': 'off', 
      '@stylistic/eol-last': ['error', 'always'], 
      '@typescript-eslint/no-unused-vars': 'off', 
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/no-multiple-empty-lines': ['warn', { max: 2 }],
      '@stylistic/brace-style': 'off', 
      '@stylistic/max-len': ['warn', { code: 120 }],
      'import/newline-after-import': 'off', 
      'import/prefer-default-export': 'off', 
      'no-undef': 'off', 
      'no-const-assign': 'error', 
      'space-infix-ops': 'off', 
      'no-extra-semi': 'off', 
      'prefer-const': 'off', 
      'no-spaced-func': 'off',
      'func-call-spacing': 'off'
    }
  }
]