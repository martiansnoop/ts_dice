// Karma configuration
// Generated on Sun Jun 28 2015 15:22:35 GMT-0700 (PDT)
var webpack = require("webpack");

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "./test",


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["mocha"],


        // list of files / patterns to load in the browser
        files: [
            "ts/**/*.ts",
            "ts/**/*.tsx"
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "ts/**/*.ts": ["webpack"],
            "ts/**/*.tsx": ["webpack"]
        },


        // test results reporter to use
        // possible values: "dots", "progress"
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["mocha"],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["Chrome"],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
            module: {
                loaders: [
                    {test: /\.tsx?$/, loader: "ts-loader"}
                ]
            },
            resolve: {
                extensions: ["", ".ts", ".js"]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    React: "react",
                    ReactDOM: "react-dom"
                })
            ]
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        plugins: [
            require("karma-webpack"),
            require("karma-mocha"),
            require("karma-chrome-launcher"),
            require("karma-mocha-reporter"),
            require("karma-spec-reporter")
        ]
    })
};
