function Interpret(name) {
  this.name = name;
}

var kyuss = new Interpret('Kyuss');
var tool = new Interpret('Tool');
var monsterMagnet = new Interpret('Monster Magnet');
var benHarper = new Interpret('Ben Harper');

var anzahlAlben = new WeakMap();
anzahlAlben.set(kyuss, 4);
anzahlAlben.set(tool, 6);
anzahlAlben.set(monsterMagnet, 8);
anzahlAlben.set(benHarper, 9);

anzahlAlben.get(kyuss); // 4
anzahlAlben.get(tool); // 6
anzahlAlben.get(monsterMagnet); // 8
anzahlAlben.get(benHarper); // 9