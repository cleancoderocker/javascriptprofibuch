var ValidatorModule =
  ValidatorModule ||
  (function() {
    let format = 'HTML5';
    // private Methode
    function validate() {
      console.log('Validierung gestartet: ' + format);
      validationFinished();
    }
    // private Methode
    function validationFinished() {
      console.log('Validierung beendet: ' + format);
    }
    // öffentliche API
    return {
      // öffentliche Referenz auf private Methode
      validate: validate
    };
  })();
ValidatorModule.validate();
