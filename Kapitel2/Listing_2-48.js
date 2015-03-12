var interpreten = [
    {
        name: "Nick Cave",
        alben: [
            {
                titel: "Push the Sky Away"
            },
            {
                titel: "No more shall we part"
            }
        ]
    },
    {
        name: "Ben Harper",
        alben: [
            {
                titel: "Live from Mars"
            },
            {
                titel: "The Will to Live"
            }
        ]
    }
];
var albenAnzahl = 0;
for(var i=0, l=interpreten.length; i<l; i++) {
    albenAnzahl += interpreten[i].alben.length;
}
console.log(albenAnzahl);