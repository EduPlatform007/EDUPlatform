// Эта функция заменяет блоки видео в HTML-курсе, оставляя только одно видео для каждого урока
// Добавьте этот скрипт в ваш проект и вызовите функцию fixVideos() после загрузки страницы

function fixVideos() {
  // Находим все контейнеры с видео
  const videoContainers = document.querySelectorAll('.video-container');
  
  // Для каждого контейнера
  videoContainers.forEach(container => {
    // Находим первое видео (казахское)
    const firstVideo = container.querySelector('.video-kk');
    
    if (firstVideo) {
      // Удаляем класс video-kk, чтобы видео всегда отображалось
      firstVideo.classList.remove('video-kk');
      
      // Находим русское видео и удаляем его
      const russianVideo = container.querySelector('.video-ru');
      if (russianVideo) {
        russianVideo.remove();
      }
    }
  });
  
  console.log('Видео успешно исправлены - теперь для каждого урока отображается только одно видео');
}

// Также можно модифицировать функцию переключения языка, чтобы она не пыталась переключать видео
function modifyLanguageSwitcher() {
  // Проверяем, существует ли функция переключения языка
  if (typeof window.switchLanguage === 'function') {
    // Сохраняем оригинальную функцию
    const originalSwitchLanguage = window.switchLanguage;
    
    // Переопределяем функцию
    window.switchLanguage = function(lang) {
      // Вызываем оригинальную функцию
      originalSwitchLanguage(lang);
      
      // Убеждаемся, что все видео отображаются правильно
      fixVideos();
    };
    
    console.log('Функция переключения языка успешно модифицирована');
  }
}

// Вызываем функции после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  fixVideos();
  modifyLanguageSwitcher();
});
