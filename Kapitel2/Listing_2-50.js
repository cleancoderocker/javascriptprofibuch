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
var albenAnzahl = interpreten.reduce(
    function(ergebnis, interpret, index, interpreten) {
        return ergebnis + interpret.alben.length;
    },
    0
);