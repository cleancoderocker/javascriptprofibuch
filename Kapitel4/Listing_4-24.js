function tagsZuKuenstlerHinzufuegen(kuenstler, ...tags) {
    tags.forEach(function(tag) {
        console.log(kuenstler + " " + tag);
        kuenstler.tagHinzufuegen(tag);
    });
}