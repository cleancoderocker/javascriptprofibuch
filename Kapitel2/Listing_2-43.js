var interpreten = [
    {
        name: "Nick Cave"
    },
    {
        name: "Ben Harper"
    }
];
var namen = interpreten.map(function(interpret, index, interpreten) {
    return interpret.name;
});
console.log(namen); // ['Nick Cave', 'Ben Harper']