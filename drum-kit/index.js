const instrumentNamesByKeys = {
  a: 'tom-1',
  s: 'tom-2',
  d: 'tom-3',
  f: 'tom-4',
  j: 'snare',
  k: 'crash',
  l: 'kick',
};

function play(instrumentName) {
  if (instrumentName) {
    const instrument = new Audio(`sounds/${instrumentName}.mp3`);
    instrument.volume = 0.5;
    instrument.play();
    return true;
  }

  return false;
}

function animateButton(key) {
  const classes = document.querySelector(`.${key}`).classList;
  classes.add('pressed');
  setTimeout(() => classes.remove('pressed'), 100);
}

function handleClick({ target: { innerText: key } }) {
  play(instrumentNamesByKeys[key]) && animateButton(key);
}

function handleKeydown({ key }) {
  play(instrumentNamesByKeys[key]) && animateButton(key);
}

document
  .querySelectorAll('.drum')
  .forEach((btn) => btn.addEventListener('click', handleClick));

document.addEventListener('keydown', handleKeydown);
