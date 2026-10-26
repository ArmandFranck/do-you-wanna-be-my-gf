const envelope = document.querySelector('#envelope');
const card = document.querySelector('#card');
const noButton = document.querySelector('#noBtn');
const yesButton = document.querySelector('#yesBtn');
const celebration = document.querySelector('#celebration');

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  envelope.setAttribute('aria-expanded', 'true');
  window.setTimeout(() => {
    card.classList.add('show');
    card.setAttribute('aria-hidden', 'false');
  }, 220);
});

function dodgeNoButton(event) {
  event.preventDefault();
  const margin = 12;
  const x = margin + Math.random() * Math.max(1, window.innerWidth - noButton.offsetWidth - margin * 2);
  const y = margin + Math.random() * Math.max(1, window.innerHeight - noButton.offsetHeight - margin * 2);
  noButton.style.position = 'fixed';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
  noButton.style.zIndex = '20';
}

noButton.addEventListener('pointerenter', dodgeNoButton);
noButton.addEventListener('touchstart', dodgeNoButton, {passive: false});
noButton.addEventListener('click', event => event.preventDefault());

yesButton.addEventListener('click', () => {
  celebration.hidden = false;
  noButton.hidden = true;
  yesButton.hidden = true;
});
