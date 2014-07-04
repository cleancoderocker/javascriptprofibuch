function observer(wert) {
  console.log(wert[1]);
}

var lieblingsplatte = {
  interpret : 'Kyuss', 
  titel : 'Sky Valley'
};

Object.observe(lieblingsplatte, observer);

lieblingsplatte.interpret = 'Tool';
lieblingsplatte.titel = 'Lateralus';