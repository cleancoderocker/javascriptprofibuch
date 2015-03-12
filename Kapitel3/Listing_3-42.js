function berechneVolumen(box){
    var volumen = 0;
    if(implements(box, 'Box')) {
        volumen = box.getBreite() * box.getTiefe() * box.getHoehe();
    }
    return volumen;
}