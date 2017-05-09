module.exports = {
    entry: './main.js',
    output: {
        filename: 'index.js'
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query : {
                    presets:['es2015','react','stage-2']
                }
            },
            {
                test: /\.css/,
                loaders: ['style', 'css']
            }, {
        // whatwg-fetch use Promsie which IE11 doesn't support
        test: /\.js$/,
        include: [/whatwg-.*/],
        loader: 'babel'
      }
        ]
    }
}
