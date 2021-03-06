//Webpack basic config with file loading, babel, and css.
module.exports = {
    // Source of file you're developing on.
    entry: "./src/App.js",
    //All JS files bundled to Ouput 
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        //Loaders for CSS/Images/Babel for ES6 & React
        loaders: [
                    { test: /\.css$/, loader: "style!css" },
                    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
                    { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
                    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
                    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
                    { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
                    { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, 
                      loader: 'babel', 
                      query: {
                        presets: ['react', 'es2015']
                    }
                }
        ]
    }
};