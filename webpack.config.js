const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                            
                    //     }
                    // },
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
                
                // ExtractTextPlugin.extract({ 
                //     fallback:'style-loader',
                //     use:['css-loader','sass-loader'],
                // })


                // test: /\.css$/,
                // use: [
                //   {
                //     loader: MiniCssExtractPlugin.loader,
                //     options: {
                //       // you can specify a publicPath here
                //       // by default it uses publicPath in webpackOptions.output
                //       publicPath: '../',
                //       hmr: process.env.NODE_ENV === 'development',
                //     },
                //   },
                //   'css-loader',
                // ],
             }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './index.html',
            title: 'Enla de Ayuda por La Paz',
            // customvalue: '<span>holamundo</span>',
            template: './src/index.html',
        }),
        // new ExtractTextPlugin({filename:'./app.bundle.css'}),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        host: 'grunt.local.lan',
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 4200
      }
};