'use strict';
// grunt jenkins-install-jobs: install or update jobs
// grunt jenkins-backup-jobs: backup or update jobs
// grunt jenkins-verify-jobs: look for changes
module.exports = grunt => {
  grunt.initConfig({
    jenkins: {
      serverAddress: 'http://localhost:8081//',
      netrcMachine: 'localhost',
      netrcLocation: './.netrc'
    }
  });
  grunt.loadNpmTasks('grunt-jenkins');
};
