import path from 'path';

export default {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve('dist'), // Output directory
        filename: 'bundle.js', // Output file name
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Test for .js files
                exclude: /node_modules/, // Exclude node_modules folder
                use: {
                    loader: 'babel-loader', // Use babel-loader
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'], // Resolve .js extensions
        fallback: {
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser'),
        },
    },
};
