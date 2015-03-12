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