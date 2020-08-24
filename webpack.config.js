const path = require('path');

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'bundle.js'
	},
	mode: 'development',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				enforce: 'pre',
				exclude: /node_modules/,
				test: /\.jsx$/,
				loader: 'eslint-loader',
				options: {
					emitError: true,
				},
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			}
		]
	}
};
