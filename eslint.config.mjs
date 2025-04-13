import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  stylistic.configs['recommended-flat'],
  ...tseslint.configs.strict,
  {
    rules: {
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
)
