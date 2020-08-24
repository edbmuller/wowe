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
				test: /\.jsx?$/,
				loader: 'babel-loader'
			}
		]
	}
};
