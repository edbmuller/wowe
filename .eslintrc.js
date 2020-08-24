module.exports = {
	'root': true,
	'env': {
		'browser': true,
		'node': true,
		'es2020': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	'parserOptions': {
		'ecmaVersion': 11,
		'sourceType': 'module'
	},
	'rules': {
		'no-console': 1,
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
