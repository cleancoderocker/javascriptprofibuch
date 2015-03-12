function Controller() {
    var that = this;
    var schaltflaeche = document.getElementById('ok');
    schaltflaeche.addEventListener('click', function() {
        that.handleOk(); // this bezieht sich auf das DOM-Element
    });
}