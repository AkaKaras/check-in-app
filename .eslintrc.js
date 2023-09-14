module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint-config-prettier',
		'eslint:recommended',
		'plugin:react/recommended',
	],
	overrides: [
		{
			env: {
				jest: true,
				node: true,
			},
			files: ['.eslintrc.{js,cjs}', '**/*.spec.js', '**/*.spec.jsx'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'eslint-plugin-prettier',
		'react',
		'jsx-a11y',
		'import',
	],
	rules: {
		'linebreak-style': 'off',
		// Configure prettier
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				endOfLine: 'lf',
				singleQuote: true,
				tabWidth: 2,
				indentStyle: 'space',
				useTabs: true,
				trailingComma: 'es5',
			},
		],
		// Disallow the `any` type.
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		'react-hooks/exhaustive-deps': 'off',
		// Enforce the use of the shorthand syntax.
		'object-shorthand': 'error',
		'no-console': 'warn',
	},
};
