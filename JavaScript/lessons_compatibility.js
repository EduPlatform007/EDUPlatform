/**
 * Файл для обеспечения совместимости между системами переводов и функциями курсов
 * Устанавливает мосты между разными системами для обеспечения бесперебойной работы
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Инициализация системы совместимости курсов и переводов');
  
  // Улучшение совместимости с системой загрузки уроков
  setupLessonLoadingCompatibility();
  
  // Патч для системы видео, чтобы правильно отображать соответствующие языку версии
  patchVideoSystem();
  
  console.log('Система совместимости курсов и переводов инициализирована');
});

/**
 * Настройка совместимости с загрузкой уроков
 */
function setupLessonLoadingCompatibility() {
  console.log('Настройка совместимости загрузки уроков');
  
  // Если функция loadLesson существует
  if (typeof window.loadLesson === 'function') {
    console.log('Улучшение функции loadLesson');
    
    const originalLoadLesson = window.loadLesson;
    
    window.loadLesson = function(num, courseType) {
      console.log(`Вызов улучшенной loadLesson: урок ${num}, тип курса ${courseType || 'по умолчанию'}`);
      
      try {
        // Сохраняем информацию о текущем уроке
        localStorage.setItem('lastOpenedLesson', num);
        if (courseType) {
          localStorage.setItem('lastOpenedCourse', courseType);
        }
        
        // Вызываем оригинальную функцию
        originalLoadLesson.apply(this, arguments);
        
        // После загрузки урока делаем его перевод, если нужно
        setTimeout(function() {
          const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
          const currentLang = userData.language || localStorage.getItem('language') || 'kk';
          
          if (typeof window.setLanguage === 'function' && !window._isTranslating) {
            window._isTranslating = true;
            try {
              window.setLanguage(currentLang);
            } finally {
              window._isTranslating = false;
            }
          }
        }, 500); // Даем время на загрузку
        
      } catch (error) {
        console.error('Ошибка в улучшенной loadLesson:', error);
        // Если что-то пошло не так, вызываем оригинальную функцию
        originalLoadLesson(num, courseType);
      }
    };
  }
}

/**
 * Патч для системы видео
 */
function patchVideoSystem() {
  console.log('Применение патча для системы видео');
  
  // Если функция updateVideos существует
  if (typeof window.updateVideos === 'function') {
    console.log('Улучшение функции updateVideos');
    
    const originalUpdateVideos = window.updateVideos;
    
    window.updateVideos = function(lang) {
      console.log(`Патч updateVideos вызван с языком: ${lang}`);
      
      try {
        // Если язык не указан, используем текущий
        if (!lang) {
          const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
          lang = userData.language || localStorage.getItem('language') || 'kk';
        }
        
        // Находим все видео на странице
        const videoWrappers = document.querySelectorAll('.video-wrapper');
        
        if (videoWrappers.length > 0) {
          console.log(`Найдено ${videoWrappers.length} видео для обновления`);
          
          videoWrappers.forEach(function(wrapper) {
            // Проверяем data-video-ru и data-video-kk атрибуты
            const ruVideoId = wrapper.getAttribute('data-video-ru');
            const kkVideoId = wrapper.getAttribute('data-video-kk');
            
            if (ruVideoId && kkVideoId) {
              const currentVideoId = lang === 'ru' ? ruVideoId : kkVideoId;
              
              // Обновляем iframe с правильным видео
              const iframe = wrapper.querySelector('iframe');
              if (iframe) {
                const newSrc = `https://www.youtube.com/embed/${currentVideoId}`;
                if (iframe.src !== newSrc) {
                  iframe.src = newSrc;
                  console.log(`Обновлено видео на ${currentVideoId}`);
                }
              }
            }
          });
          
          return true;
        }
        
        // Если нет видео или что-то пошло не так, вызываем оригинальную функцию
        return originalUpdateVideos(lang);
        
      } catch (error) {
        console.error('Ошибка в патче updateVideos:', error);
        // В случае ошибки, пытаемся вызвать оригинальную функцию
        return originalUpdateVideos(lang);
      }
    };
  }
}

// Экспортируем функции для использования в других скриптах
window.setupLessonLoadingCompatibility = setupLessonLoadingCompatibility;
window.patchVideoSystem = patchVideoSystem; 