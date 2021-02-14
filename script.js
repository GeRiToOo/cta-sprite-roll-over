const main = document.querySelector('main');
const deer = document.querySelector('.deer');
const fox = document.querySelector('.fox');
const bunny = document.querySelector('.bunny');

deer.addEventListener('click', () => {
  if (deer.classList.contains('deerWakeUp')) {
    deer.classList.remove('deerWakeUp');
    deer.classList.add('deerStanding');
  } else if (deer.classList.contains('deerStanding')) {
    deer.classList.remove('deerStanding');
  } else {
    deer.classList.add('deerWakeUp');
  }
});

fox.addEventListener('click', () => {
  fox.classList.toggle('foxStanding');
});

bunny.addEventListener('click', () => {
  if (bunny.classList.contains('bunnyFront')) {
    bunny.classList.toggle('one');
  } else {
    bunny.classList.add('bunnyFront');
  }
});
