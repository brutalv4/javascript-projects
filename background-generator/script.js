const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');
const btn = document.querySelector('button');

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  btn.style.background = `linear-gradient(to right, ${color2.value}, ${color1.value})`;
  css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

function randomize() {
  const rnd = () => Math.floor(Math.random() * 255);

  color1.value = toHex(rnd(), rnd(), rnd());
  color2.value = toHex(rnd(), rnd(), rnd());

  setGradient();
}

btn.addEventListener('click', randomize);

function toHex(r, g, b) {
  return [r, g, b].reduce((hex, i) => {
    const h = i.toString(16);
    return (hex += h.length === 1 ? h + h : h);
  }, '#');
}

function onBodyLoad() {
  const currentGradient = getComputedStyle(body, null).getPropertyValue(
    'background-image'
  );

  const [c1, c2] = [
    ...currentGradient.matchAll(
      /rgba?\(([0-9]{1,3}),\s([0-9]{1,3}),\s([0-9]{1,3})\)/g
    ),
  ];

  color1.value = toHex(+c1[1], +c1[2], +c1[3]);
  color2.value = toHex(+c2[1], +c2[2], +c2[3]);

  setGradient();
}

body.onload = onBodyLoad;
