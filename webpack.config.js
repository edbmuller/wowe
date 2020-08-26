const path = require('path'),
	UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	StylelintPlugin = require('stylelint-webpack-plugin'),
	OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
	Autoprefixer = require('autoprefixer'),
	BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
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
					{
						loader: 'postcss-loader',
						options: {
							plugins: [ Autoprefixer()],
						},
					},
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
				options: {
					// The loader transforms required images into SVG symbols, more info https://www.npmjs.com/package/svg-sprite-loader#extract-configuration
					extract: true,
					spriteFilename: './images/svg.sprite.svg'
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
							useRelativePath: true,
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 70,
							},
							optipng: {
								enabled: true
							},
							pngquant: {
								quality: [0.6, 0.9],
								// A speed higher thant 4 decrease quality
								speed: 4,
							},
							gifsicle: {
								interlaced: true,
								optimizationLevel: 2,
							},
							webp: {
								quality: 75,
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new StylelintPlugin({
			emitError: true,
			emitWarnings: true,
		}),
		new MiniCssExtractPlugin({ filename: '../style.css' }),
		new OptimizeCssAssetsPlugin({
			cssProcessorOptions: {
				map: {inline: false, annotation: true},
				discardComments: false,
			},
		}),
		new SvgSpriteLoaderPlugin(),
		new BrowserSyncPlugin({
			files: '**/*.php',
			proxy: 'http://localhost/wowe/public/'
		}),
	],
	optimization: {
		minimizer: [new UglifyJSPlugin()],
	},
};
