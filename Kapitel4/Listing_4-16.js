function Controller() {
  var that = this;
  var button = document.getElementById('ok');
  button.addEventListener('click', function() {
    // Funktioniert nicht: this bezieht sich auf das DOM-Element
    // this.handleClick();
    // Funktioniert: that bezieht sich auf die Controller-Instanz
    that.handleClick();
  });
}
