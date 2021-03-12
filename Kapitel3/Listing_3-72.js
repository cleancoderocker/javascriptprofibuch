const ValidatorModule =
  ValidatorModule ||
  (function() {
    let format = 'HTML5';
    return {
      validate: function() {
        console.log('Validierung gestartet: ' + format);
        // Aufruf einer anderen Methode im selben Modul
        ValidatorModule.validationFinished();
      },
      validationFinished: function() {
        console.log('Validierung beendet: ' + format);
      }
    };
  })();
ValidatorModule.validate();
