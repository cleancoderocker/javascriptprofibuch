var alben = [
    {
        titel: "Push the Sky Away",
        interpret: "Nick Cave",
        erscheinungsjahr: 2013
    },
    {
        titel: "No more shall we part",
        interpret: "Nick Cave",
        erscheinungsjahr: 2001
    },
    {
        titel: "Live from Mars",
        interpret: "Ben Harper",
        erscheinungsjahr: 2003
    },
    {
        titel: "The Will to Live",
        interpret: "Ben Harper",
        erscheinungsjahr: 1997
    }
];
var vor2000 = alben.filter(function(album, index, alben) {
    return album.erscheinungsjahr < 2000;
});