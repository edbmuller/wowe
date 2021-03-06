module.exports = {
	'root': true,
	'env': {
		'browser': true,
		'node': true,
		'es2020': true
	},
	'extends': [
		// 	Preset of configurations, see docs for more info
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	'parserOptions': {
		'ecmaVersion': 11,
		'sourceType': 'module'
	},
	'rules': {
		'linebreak-style': 0,
		'no-console': 1,
		'indent': [
			'error',
			'tab'
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
