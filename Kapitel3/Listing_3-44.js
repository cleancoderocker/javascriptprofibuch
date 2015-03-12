var Validator = Validator || {};
Validator.format = 'HTML5';
Validator.validiere = function() {
    console.log('Validierung gestartet: ' + this.format);
};
Validator.validiere();
Validator.validiere = function() {};
Validator.format = 'SGML';