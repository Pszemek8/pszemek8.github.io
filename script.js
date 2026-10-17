const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

// Otwieranie i zamykanie menu na telefonach.
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Zamknij menu' : 'Otwórz menu');
  menuButton.textContent = isOpen ? '✕' : '☰';
});

// Po kliknięciu w link menu zamyka się na małych ekranach.
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Otwórz menu');
    menuButton.textContent = '☰';
  });
});

// Automatycznie ustaw aktualny rok w stopce.
document.querySelector('#year').textContent = new Date().getFullYear();
