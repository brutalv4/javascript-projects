const titleNode = document.querySelector('h1');
const img1node = document.querySelector('.img1');
const img2node = document.querySelector('.img2');

const rollTheDice = () => {
  const rnd = () => Math.floor(Math.random() * 6) + 1; // 1 - 6

  const num1 = rnd();
  const num2 = rnd();

  img1node.setAttribute('src', `images/dice${num1}.png`);
  img2node.setAttribute('src', `images/dice${num2}.png`);

  let title;
  switch (true) {
    case num1 > num2:
      title = '🚩 Player 1 Wins!';
      break;
    case num2 > num1:
      title = 'Player 2 Wins! 🚩';
      break;
    default:
      title = 'Draw!';
  }
  titleNode.innerHTML = title;
};

img1node.addEventListener('click', rollTheDice);
img2node.addEventListener('click', rollTheDice);
rollTheDice();
