'use strict';
/*eslint no-process-env:0*/

// Test specific configuration
// ===========================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://localhost/angular-test'
    },
    sequelize: {
        uri: 'sqlite://',
        options: {
            logging: false,
            storage: 'test.sqlite',
            define: {
                timestamps: false
            }
        }
    },
    port: '9001',
};
