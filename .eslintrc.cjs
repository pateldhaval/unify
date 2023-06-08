// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2020: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 0,
		'@typescript-eslint/no-var-requires': 0,
		'no-undef': 0,
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true
			}
		]
	}
};
