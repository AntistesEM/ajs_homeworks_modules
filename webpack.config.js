const path = require('path'); // Node.js модуль для разрешения путей файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',  // Точка входа
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,  // маска для имени файла
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]  // какой загрузчик использовать
			},

			{
				test: /\.js$/,  // маска для имени файла
				exclude: '/node_modules/',  // исключаем папку
				loader: 'babel-loader'  // какой загрузчик использовать
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Homeworks: modules',  // заголовок сайта
			template: "./src/index.html",
			filename: "main.html"
		}),

		new MiniCssExtractPlugin(),
	],
	devServer: {
		historyApiFallback: {
			index: '/main.html', // имя вашего HTML файла
		},
	},
};