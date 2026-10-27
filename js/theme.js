const root = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
  root.setAttribute('data-bs-theme', 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('theme-toggle');

  const updateButtonText = () => {
    if (root.getAttribute('data-bs-theme') === 'dark') {
      themeButton.textContent = 'Светлая тема';
    } else {
      themeButton.textContent = 'Тёмная тема';
    }
  };

  updateButtonText();

  themeButton.addEventListener('click', () => {
    if (root.getAttribute('data-bs-theme') === 'dark') {
      root.removeAttribute('data-bs-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    updateButtonText();
  });
});
