(function() {
    var interpreten = [
        {
            name: "Nick Cave",
            alben: [
                {
                    titel: "Push the Sky Away",
                    erscheinungsjahr: 2013
                },
                {
                    titel: "No more shall we part",
                    erscheinungsjahr: 2001
                }
            ]
        },
        {
            name: "Ben Harper",
            alben: [
                {
                    titel: "Live from Mars",
                    erscheinungsjahr: 2003
                },
                {
                    titel: "The Will to Live",
                    erscheinungsjahr: 1997
                }
            ]
        }
    ];

    function istNach2000(album) {
        return album.erscheinungsjahr > 2000;
    }
    function hatAlbumNach2000(interpret) {
        return interpret.alben.filter(istNach2000).length > 0;
    };
    function alsInterpretenName(interpret) {
        return interpret.name;
    };
    interpreten
        .filter(hatAlbumNach2000)
        .map(alsInterpretenName)
        .forEach(console.log);
})();