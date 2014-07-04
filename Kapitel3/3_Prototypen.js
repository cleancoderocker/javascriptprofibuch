var instrument = {
  spielen: function() {
    return this.sound;
  }, 
  sound: 'Schrimm Schramm'
}

var gitarre = Object.create(instrument);
gitarre.sound = "Zupf Zupf";

var egitarre = Object.create(gitarre);
egitarre.sound = "Ziiiing Zaaaang";

instrument.spielen(); // Schrimm Schramm
gitarre.spielen(); // Zupf Zupf
egitarre.spielen(); // Ziiiing Zaaaang




var egitarre = Object.create(gitarre);
egitarre.spielen = function() {
  return gitarre.spielen() + '!!!!';
};
egitarre.sound = "Ziiiing Zaaaang";

egitarre.spielen(); // Zupf Zupf!!!!




var egitarre = Object.create(gitarre);
egitarre.spielen = function() {
  return gitarre.spielen.call(this) + '!!!!';
};
egitarre.sound = "Ziiiing Zaaaang";

egitarre.spielen(); // Zupf Zupf!!!!