function Controller() {
    var schaltflaeche = document.getElementById('ok');
    schaltflaeche.addEventListener('click',() => {
        this.handleOk();
});
}