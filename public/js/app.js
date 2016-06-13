(function () {

  // find the controls in the DOM
  var hint = document.querySelector('.hint');

  // wire them to reveal when a user hovers over them
  document.body.addEventListener('mouseover', revealControls, false);

  // if the user isn't using their mouse, fade the controls out
  setInterval(function () {
    hint.classList.add('out');
  }, 4000);

  function revealControls () {
    hint.classList.remove('out');
  }

})();
