const Validator = {};
Validator.format = 'HTML5';
Validator.validate = function() {
  console.log('Validierung gestartet: ' + this.format);
};
Validator.validate();
Validator.validate = function() {};
Validator.format = 'SGML';
