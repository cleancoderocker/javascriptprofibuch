'use strict';
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    timeout: 8000,
                    reporter: 'spec',
                    captureFile: 'results.txt',
                    require: 'coverage/blanket'
                },
                src: ['test/**/*.js']
            },
            coverage: {
                options: {
                    reporter: 'html-cov',
                    quiet: true,
                    captureFile: 'coverage.html'
                },
                src: ['test/**/*.js']
            }
        }
    });
    grunt.registerTask('default', 'mochaTest');
};
