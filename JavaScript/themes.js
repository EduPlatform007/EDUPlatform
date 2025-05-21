/**
 * Скрипт для управления темами (светлая/темная)
 */

document.addEventListener('DOMContentLoaded', function() {
  // Получаем элемент переключателя темы
  const themeSwitch = document.getElementById('theme-switch');
  const themeIcon = document.getElementById('theme-icon');
  
  // Проверяем сохраненную тему в localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Применяем сохраненную тему
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Обновляем иконку в соответствии с текущей темой
  updateThemeIcon(savedTheme);
  
  // Добавляем обработчик события для переключения темы
  if (themeSwitch) {
    themeSwitch.addEventListener('click', function() {
      // Получаем текущую тему
      const currentTheme = document.documentElement.getAttribute('data-theme');
      
      // Определяем новую тему
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      // Применяем новую тему
      document.documentElement.setAttribute('data-theme', newTheme);
      
      // Сохраняем тему в localStorage
      localStorage.setItem('theme', newTheme);
      
      // Обновляем иконку
      updateThemeIcon(newTheme);
    });
  }
  
  // Функция для обновления иконки в соответствии с темой
  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    
    if (theme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }
});
