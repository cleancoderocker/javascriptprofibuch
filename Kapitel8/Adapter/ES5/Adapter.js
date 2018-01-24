(function() {
    Logger = {
        log: function(message) {
            console.log(message);
        },
        warn: function(message) {
            console.warn(message);
        },
        error: function(message) {
            console.error(message);
        }
    }

    NewLogger = {
        reportLog: function(message) {
            console.log(new Date() + ': ' + message);
        },
        reportWarn: function(message) {
            console.warn(new Date() + ': ' + message);
        },
        reportError: function(message) {
            console.error(new Date() + ': ' + message);
        }
    }

    var logger = Logger;
    logger.log('Programm gestartet');

    // Funktioniert nicht
    // logger = NewLogger;
    // logger.log('Programm gestartet');

    // Adapter
    function LoggerAdapter(logger) {
        return {
            log: function(message) {
                logger.reportLog(message);
            },
            warn: function(message) {
                logger.reportWarn(message);
            },
            error: function(message) {
                logger.reportError(message);
            }
        }
    }
    // Funktioniert über Adapter
    logger = new LoggerAdapter(NewLogger);
    logger.log('Programm gestartet');

    // First Class Functions
    logger = Logger;
    Logger.log = function(message) {
        NewLogger.reportLog(message);
    }
    Logger.warn = function(message) {
        NewLogger.reportWarn(message);
    }
    Logger.error = function(message) {
        NewLogger.reportError(message);
    }
    // Funktioniert wegen First Class Functions
    logger.log('Programm gestartet');
})();