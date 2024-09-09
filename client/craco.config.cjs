/*const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

try {
    fs.mkdirSync('path/to/directory', { recursive: true });
    console.log('Directory created successfully!');
} catch (err) {
    console.error('Error creating directory:', err);
}
const directories = [
    'path/to/directory1',
    'path/to/directory2',
    // Add more directories as needed
];

directories.forEach((dir) => {
    try {
        fs.mkdirSync(path.resolve(__dirname, dir), { recursive: true });
        console.log(`Directory ${dir} created successfully!`);
    } catch (err) {
        console.error(`Error creating directory ${dir}:`, err);
    }
});

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        configure: {
            resolve: {
                fallback: {
                    buffer: require.resolve('buffer/'),
                    stream: require.resolve('stream-browserify'),
                    path: require.resolve('path-browserify'),
                    util: require.resolve('util/'),
                    os: require.resolve('os-browserify/browser'),
                    crypto: require.resolve('crypto-browserify'),
                    process: require.resolve('process/browser.js'),
                    vm: require.resolve('vm-browserify'),
                    fs: false, // Set fs to false
                },
            },
            plugins: [
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                    process: 'process/browser.js',
                }),
            ],
        },
    },
};
*/