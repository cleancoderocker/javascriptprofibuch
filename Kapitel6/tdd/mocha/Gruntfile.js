'use strict';
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    timeout: 8000,
                    reporter: 'spec',
                    captureFile: 'results.txt'
                },
                src: ['test/**/*.js']
            }
        }
    });
    grunt.registerTask('default', 'mochaTest');
};
