const path = require('path');

module.exports = {
    entry: path.join(__dirname, './client/index.js'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './dist'),
    },
    mode: "development",
    node: {
        fs: "empty"
     },
    devtool: 'source-map',
    module: {
        rules: [
            {
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/,
            },
            {
                test: /\.css/i,
                use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.(svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ]
    }
};