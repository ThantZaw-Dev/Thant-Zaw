const path = require('path')

module.exports = {
    mode: 'development',
    entry:{
        bundle: path.resolve(__dirname,'src/index.js'),
        // library: "my-library",
        // libraryTarget: "umd" // exposes and know when to use module.exports or exports.
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
        
    },
    module: {
        rules:[
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}