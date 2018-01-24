(function() {
    Logger = {
        log(message) {
            console.log(message);
        },
        warn(message) {
            console.warn(message);
        },
        error(message) {
            console.error(message);
        }
    }

    NewLogger = {
        reportLog(message) {
            console.log(new Date() + ': ' + message);
        },
        reportWarn(message) {
            console.warn(new Date() + ': ' + message);
        },
        reportError(message) {
            console.error(new Date() + ': ' + message);
        }
    }

    let logger = Logger;
    logger.log('Programm gestartet');

    // Funktioniert nicht
    // logger = NewLogger;
    // logger.log('Programm gestartet');

    // Adapter
    function LoggerAdapter(logger) {
        return {
            log(message) {
                logger.reportLog(message);
            },
            warn(message) {
                logger.reportWarn(message);
            },
            error(message) {
                logger.reportError(message);
            }
        }
    }
    // Funktioniert über Adapter
    logger = new LoggerAdapter(NewLogger);
    logger.log('Programm gestartet');

    // First Class Functions
    logger = Logger;
    Logger.log = (message) => {
        NewLogger.reportLog(message);
    }
    Logger.warn = (message) => {
        NewLogger.reportWarn(message);
    }
    Logger.error = (message) => {
        NewLogger.reportError(message);
    }
    // Funktioniert wegen First Class Functions
    logger.log('Programm gestartet');
})();