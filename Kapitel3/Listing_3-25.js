function extend(ziel, quelle) {
    ziel = ziel || {};
    for(var eigenschaft in quelle) {
        if(quelle.hasOwnProperty(eigenschaft)) {
            ziel[eigenschaft] = quelle[eigenschaft];
        }
    }
    return ziel;
}