var bestOfStonerrock = ['Kyuss', 'QOTSA', 'Unida', 'Vista Chino'];
var platz1 = bestOfStonerrock[0];
var platz2 = bestOfStonerrock[1];
var platz3 = bestOfStonerrock[2];
var platz4 = bestOfStonerrock[3];
console.log(platz1);
console.log(platz2);
console.log(platz3);
console.log(platz4);

var [platz1, platz2, platz3, platz4] = bestOfStonerrock;

bestOfStonerrock = [platz1, platz2, platz3, platz4];

var [erster, ...rest] = bestOfStonerrock;
console.log(erster);
console.log(rest);

var [platz1, platz2, platz3, platz4, platz5] = bestOfStonerrock;
console.log(platz5);

var koordinaten = [
    [2,3,4],
    [5,6,7],
    [8,9,10]
]

var [
    [x1,y1,z1],
    [x2,y2,z2],
    [x3,y3,z3]
    ] = koordinaten;



function getBestOfStonerrock() {
    return ['Kyuss', 'QOTSA', 'Unida', 'Vista Chino'];
}

var [platz1, platz2, platz3, platz4] = getBestOfStonerrock();