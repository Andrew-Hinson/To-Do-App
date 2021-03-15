const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
    externals: {
          moment: 'moment',
          Chart: 'Chart'
    },
    externalsPresets: {
      node: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
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
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource', //fonts
          },
        ],
      },
}
