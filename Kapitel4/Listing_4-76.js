var map = {};
map['Schlüssel 1'] = 'Wert 1';
map['Schlüssel 2'] = 'Wert 2';
for(var schluessel in map) {
    if(map.hasOwnProperty(schluessel)) {
        console.log(schluessel);
    }
};