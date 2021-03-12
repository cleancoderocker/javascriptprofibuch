function Controller() {
  const button = document.getElementById('ok');
  button.addEventListener('click', () => {
    this.handleClick();
  });
}
