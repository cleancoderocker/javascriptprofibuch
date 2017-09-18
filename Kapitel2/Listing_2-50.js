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
function istNach2000(album) {
  return album.erscheinungsjahr > 2000;
}
function hatAlbumNach2000(interpret) {
  return interpret.alben.filter(istNach2000).length > 0;
};
function alsInterpretenName(interpret) {
  return interpret.name;
};
console.log(interpreten)
interpreten
  .filter(hatAlbumNach2000)
  .map(alsInterpretenName)
  .forEach((interpret) => {
    console.log(interpret);
  });
