/* Funktioniert nur in ES6 */
var tags = ['heavy', 'sludge', 'stoner'];
var mehrTags = ['psychedelic', 'spacerock'];
var alleTags = ['desertrock', ...tags, ...mehrTags, 'punk'];
console.log(alleTags);