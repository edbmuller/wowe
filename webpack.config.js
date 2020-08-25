const path = require('path'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
	OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
	BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
	StylelintPlugin = require('stylelint-webpack-plugin'),
	SvgSpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'bundle.js',
	},
	mode: 'development',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,	// step3: Inject a style element into the DOM
					'css-loader',	// step 2: Turns css into a js string into bundle.js
					'sass-loader',	// step 1: Convert scss into css
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
				options: {
					// The loader transforms required images into SVG symbols, more info https://www.npmjs.com/package/svg-sprite-loader#extract-configuration
					extract: true,
					spriteFilename: './svg/svg.sprite.svg'
				}
			}
		],
	},
	plugins: [
		new StylelintPlugin({
			emitError: true,
			emitWarnings: true,
		}),
		new MiniCssExtractPlugin({ filename: '../style.css' }),
		new SvgSpriteLoaderPlugin(),
		new BrowserSyncPlugin({
			files: '**/*.php',
			proxy: 'http://localhost/wowe/public/'
		}),
	],
	optimization: {
		minimizer: [new UglifyJSPlugin(), new OptimizeCssAssetsPlugin()],
	},
};
