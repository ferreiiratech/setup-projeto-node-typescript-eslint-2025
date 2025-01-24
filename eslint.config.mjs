import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */

const configs = [
  {
    files: ['**/*.{js,mjs,cjs,ts}']
  },
  {
    languageOptions: {
      globals: globals.node
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      semi: ['error', 'never'],
      '@typescript-eslint/no-unused-vars': [
        'error',
			  {
          argsIgnorePattern: '^_'
        },
		  ],
		  quotes: ['error', 'single'],
		  eqeqeq: ['error', 'always'],
		  indent: ['error', 2],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true, minProperties: 1 
          },
          ObjectPattern: {
            multiline: true, minProperties: 1 
          },
          ImportDeclaration: {
            multiline: true, minProperties: 3 
          },
          ExportDeclaration: {
            multiline: true, minProperties: 2 
          },
        },
      ],
      'newline-per-chained-call': ['error', {
        ignoreChainWithDepth: 3
      }]
	  },
  },
]

export default configs