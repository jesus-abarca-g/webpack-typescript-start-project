const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '/src/scripts/app.ts'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, '/dist') 
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test:/\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development', // hot module reload
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
                
             }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            filename: './index.html',
            title: 'My Page Title',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: '[id].css',
          }),
          new CopyPlugin([
            {
              from: 'src/images',
              to: 'images/[name].[ext]',
              toType: 'template',
              ignore: ['\.DS_Store*', 'README'],
            },
          ]),
          new CopyPlugin([
            {
              from: 'src/fonts',
              to: 'fonts/[name].[ext]',
              toType: 'template',
              ignore: ['\.DS_Store*','README'],
            },
          ]),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        host: 'localhost',
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        open: true,
        port: 4200
      }
};