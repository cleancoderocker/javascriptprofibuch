function erstellePerson(name, vorname) {
    return {
        name: name,
        vorname: vorname
    }
}
var erstelleMustermann = erstellePerson.bind(null, 'Mustermann');
var max = erstelleMustermann('Max');
console.log(max); // { name: 'Mustermann', vorname: 'Max' }
var moritz = erstelleMustermann('Moritz');
console.log(moritz); // { name: 'Mustermann', vorname: 'Moritz' }