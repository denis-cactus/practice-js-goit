// theme-switcher.js
const themeToggleButton = document.getElementById('themeToggle');

// Функція для застосування теми
function applyTheme(theme) {
  document.body.classList.remove('theme-light', 'theme-dark'); // Видаляємо обидві теми
  document.body.classList.add(theme); // Додаємо обрану тему
  localStorage.setItem('theme', theme); // Зберігаємо вибір в localStorage
}

// Перевірка, яка тема була збережена, і застосування її
function checkTheme() {
  const savedTheme = localStorage.getItem('theme') || 'theme-light'; // За замовчуванням світла тема
  applyTheme(savedTheme);
}

// Перемикання теми по кліку на кнопку
themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('theme-light')
    ? 'theme-light'
    : 'theme-dark';
  const newTheme =
    currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light';
  applyTheme(newTheme);
});

// Перевіряємо та застосовуємо тему при завантаженні сторінки
document.addEventListener('DOMContentLoaded', checkTheme);
