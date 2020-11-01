const rollTheDice = () => {
  const rnd = () => Math.floor(Math.random() * 6) + 1; // 1 - 6

  const num1 = rnd();
  const num2 = rnd();

  $('.img1').attr('src', `images/dice${num1}.png`);
  $('.img2').attr('src', `images/dice${num2}.png`);

  if (num1 > num2) {
    $('h1').text('🚩 Player 1 Wins!');
  } else if (num2 > num1) {
    $('h1').text('Player 2 Wins! 🚩');
  } else {
    $('h1').text('Draw!');
  }
};

$('.img1').on('click', rollTheDice);
$('.img2').on('click', rollTheDice);
rollTheDice();
