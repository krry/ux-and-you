(function () {
  var hints,
      hint,
      controlFadeTimer;

  // find the controls in the DOM
  hint = document.querySelector('.hint');
  // hints = document.querySelectorAll('.hint');
  // hint = hints[0];

  // wire them to reveal when a user hovers over them
  hint.addEventListener('mouseover', revealControls, false);

  // if the user isn't using their mouse, fade the controls out
  controlFadeTimer = setInterval(function () {
    if ()
    hint.classList.add('out');
  }, 8000);

  function revealControls () {
    hint.classList.remove('out');
  }

})();
