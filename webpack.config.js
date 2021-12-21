module.exports = {
    module: {
        rules: [
            // es6 / React
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
                resolve: {
                    extensions: ['.js', '.jsx']
                }
            }
        ]
    }    
}

