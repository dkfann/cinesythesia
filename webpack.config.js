const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    fielanem: 'index.html',
    inject: 'body',
});

module.exports = {
    devtool: 'source-map',
    entry: [
        './app/index.js',
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                loader: 'style-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIndentName: '[name]__[local]___[hash:base64:5]',
                },
            },
            // {
            //   test: /\.css$/,
            //   loaders: [
            //     'style',
            //     'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'
            //   ]
            // },
        ]
    },
    plugins: [
        HTMLWebpackPluginConfig,
    ],
}
