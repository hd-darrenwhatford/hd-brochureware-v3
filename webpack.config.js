const env = process.env.NODE_ENV
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: {
                source: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/html-template.html',
        })
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        // Set filename of bundle if production or development mode is used with hash on the end
        filename: env === 'production' ? '[name].bundle.min.js?[contenthash:8]' : '[name].bundle.js?[contenthash:8]'
    }
}
