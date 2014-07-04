(function() {
    var ganzzahl = 4;
    var fließkommazahl = 4.4;
    var string = 'Hallo';
    var boolean = true;

    var ganzzahlObjekt = new Number(4);
    var fließkommazahlObjekt = new Number(4.4);
    var stringObjekt = new String('Hallo');
    var booleanObjekt = new Boolean(true);

    console.log(typeof ganzzahl);
    console.log(typeof ganzzahlObjekt);
    console.log(typeof fließkommazahl);
    console.log(typeof fließkommazahlObjekt);
    console.log(typeof string);
    console.log(typeof stringObjekt);
    console.log(typeof boolean);
    console.log(typeof booleanObjekt);

    console.log(ganzzahl === ganzzahlObjekt);
})();

