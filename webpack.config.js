const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'production',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle-test.js',
    },
    resolve: {
        fallback: {
            "fs": false,
            "crypto": false,
            "path": false,
        },
    }
};
