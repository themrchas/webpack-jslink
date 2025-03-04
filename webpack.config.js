const path = require('path')

module.exports = {
    entry: './src/viewTabs.js',
    output: {
        filename: 'viewTabsBundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|otf)$/,
                type: 'asset/resource'
            }
        ]
    }
};
