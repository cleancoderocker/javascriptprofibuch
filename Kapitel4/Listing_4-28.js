const tags = ['heavy', 'sludge', 'stoner'];
const moreTags = ['psychedelic', 'spacerock'];
const allTags = ['desertrock', ...tags, ...moreTags, 'punk'];
console.log(allTags);
// Ausgabe: ["desertrock", "heavy", "sludge",
// "stoner", "psychedelic", "spacerock", "punk"]
