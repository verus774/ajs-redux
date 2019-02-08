module.exports = {
    entry: './src/app/app.module.js',
    mode: 'development',
    devtool: 'eval-sourcemap',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    compact: false,
                    plugins: ['angularjs-annotate'],
                }
            },
            {
                test: /\.html$/,
                use: [{loader: 'html-loader', options: {minimize: true}}]
            },
            {
                test: /\.(png|jpg|woff)$/,
                loader: 'url-loader',
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            },
        ]
    },

};
