'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.initConfig({
        qunit: {
            all: ['Testrunner.html']
        }
    });
    grunt.registerTask('default', 'qunit');
};
