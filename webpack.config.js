const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
        fallback: {
            "fs": false,
            "crypto": false,
            "path": false,
        },
    }
};