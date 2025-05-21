/**
 * Модуль авторизации для образовательной платформы
 */

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  console.log('Инициализация модуля авторизации...');
  
  // Проверяем, авторизован ли пользователь
  const checkAuth = function() {
    // Проверяем наличие данных пользователя в localStorage
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    // Элементы для управления отображением состояния авторизации
    const loginButton = document.getElementById('btn-log');
    const profileButton = document.querySelector('.user-profile-btn');
    
    if (userData && userData.uid) {
      // Пользователь авторизован
      console.log('Пользователь авторизован:', userData.email);
      
      // Скрываем кнопку входа и показываем кнопку профиля
      if (loginButton) {
        loginButton.style.display = 'none';
      }
      
      if (profileButton) {
        profileButton.style.display = 'block';
      }
    } else {
      // Пользователь не авторизован
      console.log('Пользователь не авторизован');
      
      // Показываем кнопку входа и скрываем кнопку профиля
      if (loginButton) {
        loginButton.style.display = 'block';
      }
      
      if (profileButton) {
        profileButton.style.display = 'none';
      }
    }
  };
  
  // Выполняем проверку авторизации при загрузке страницы
  checkAuth();
  
  // Экспортируем функцию для использования в других файлах
  window.checkAuth = checkAuth;
  
  console.log('Модуль авторизации инициализирован');
});
