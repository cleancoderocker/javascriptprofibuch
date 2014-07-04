(function() {
    // Achtung: funktioniert nicht in allen Laufzeitumgebungen, funktioniert beispielsweise in Firefox
    try {
        throw new RangeError();
    } catch (error if error instanceof TypeError) {
        console.log("TypeError");
    } catch (error if error instanceof RangeError) {
        console.log("RangeError");
    }
})();

