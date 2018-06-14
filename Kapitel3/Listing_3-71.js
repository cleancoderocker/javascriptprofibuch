const ValidatorModule =
  ValidatorModule ||
  (function() {
    // private Variable
    let format = 'HTML5';
    // öffentliche API
    return {
      // öffentliche Funktion
      validate: function() {
        console.log('Validierung gestartet: ' + format);
      }
    };
  })();
ValidatorModule.validate(); // Ausgabe: HTML5
ValidatorModule.format = 'SGML';
ValidatorModule.validate(); // Ausgabe: HTML5
