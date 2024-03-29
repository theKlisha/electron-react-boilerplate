const path = require('path')

module.exports = {
	target: 'electron-renderer',
	entry: {
		renderer: './src/renderer.tsx',
	},
	output: {
		filename: '[name].js',
		path: path.resolve('build')
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
		alias: {
			src: path.resolve('src/'),
			assets: path.resolve('src/assets/'),
			styles: path.resolve('src/styles/')
		}
	},
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'file-loader',
					options: { name: 'assets/[name].[hash:8].[ext]' }
				}
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'file-loader',
					options: { name: 'assets/[name].[hash:8].[ext]' }
				}
			},
			{
				test: /\.(scss|sass)$/,
				exclude: /(node_modules)/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(ts|tsx)?$/,
				exclude: /(node_modules)/,
				use: ['ts-loader']
			}
		]
	},
	devtool: 'eval-source-map'
}
