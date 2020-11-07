let level = 0;
const gamePattern = [];
const userPattern = [];

const buttonColours = ['red', 'blue', 'green', 'yellow'];

const playSound = (name) => {
  const sound = new Audio(`sounds/${name}.mp3`);
  sound.play();
};

const animatePress = (currentColour) => {
  const btn = $(`#${currentColour}`);
  btn.addClass('pressed') && setTimeout(() => btn.removeClass('pressed'), 100);
};

const nextSequence = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);

  $(`#${randomChosenColour}`)
    .animate({ opacity: 0 }, 200)
    .animate({ opacity: 1 }, 200);

  level++;
  $('#level-title').html(`Level ${level}`);
};

const pressButton = ({ target: { id: userChosenColour } }) => {
  playSound(userChosenColour);
  animatePress(userChosenColour);

  if (gameIsGoing()) {
    const idx = userPattern.push(userChosenColour) - 1;
    if (userPattern[idx] !== gamePattern[idx]) {
      endGame();
    } else if (gamePattern.length === userPattern.length) {
      setTimeout(nextSequence, 1000);
      userPattern.length = 0;
    }
  }
};

const gameIsGoing = () => level > 0;

const resetState = () => {
  level = 0;
  gamePattern.length = 0;
  userPattern.length = 0;
};

const endGame = () => {
  const body = $(document.body);
  body.addClass('game-over') &&
    setTimeout(() => body.removeClass('game-over'), 200);

  playSound('wrong');
  $('#level-title').html(`Game Over, Press Any Key to Restart`);
  resetState();
};

$('.btn').on('click', pressButton);
$(document).on('keydown', () => {
  if (!gameIsGoing()) {
    nextSequence();
  }
});
