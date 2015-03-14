/* Funktioniert nur in ES6 */
function tagsZuKuenstlerHinzufuegen(kuenstler) {
    var tags = Array.prototype.slice.call(
        arguments, 1
    );
    tags.forEach(function(tag) {
        console.log(kuenstler + " " + tag);
        kuenstler.tagHinzufuegen(tag);
    });
// weitere Logik hier
}
tagsZuKuenstlerHinzufuegen('Kylesa', 'heavy', 'sludge', 'stoner');
tagsZuKuenstlerHinzufuegen('Kyuss', 'heavy', 'stoner');
tagsZuKuenstlerHinzufuegen('Monster Magnet', 'psychedelic', 'spacerock');