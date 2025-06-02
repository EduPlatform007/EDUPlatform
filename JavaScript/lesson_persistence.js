/**
 * Модуль для сохранения и восстановления состояния текущего урока при обновлении страницы
 * 
 * ВАЖНОЕ ИЗМЕНЕНИЕ: Модуль больше не занимается переводом контента, 
 * а только сохраняет и восстанавливает состояние уроков.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Предотвращаем множественную инициализацию
  if (window._lessonPersistenceInitialized) return;
  window._lessonPersistenceInitialized = true;
  
  console.log('Инициализация системы сохранения состояния уроков');
  
  // Через небольшую задержку восстанавливаем последний открытый урок
  setTimeout(() => {
    try {
      // Получаем информацию о последнем открытом уроке
      const lastLesson = localStorage.getItem('lastOpenedLesson');
      const lastCourse = localStorage.getItem('lastOpenedCourse');
      
      // Определяем тип текущего курса по URL
      let currentCourseType = 'html';
      if (window.location.pathname.includes('python_course')) {
        currentCourseType = 'python';
      } else if (window.location.pathname.includes('database_course')) {
        currentCourseType = 'database';
      }
      
      // Только если мы на той же странице курса, что и последний открытый урок
      if (lastLesson && lastCourse && lastCourse === currentCourseType) {
        console.log(`Восстанавливаем последний открытый урок: ${lastLesson}, тип курса: ${currentCourseType}`);
        
        // Удаляем устаревший флаг
        localStorage.removeItem("openLessonAfterReload");
        
        // Активируем соответствующий элемент в сайдбаре
        const lessonLinks = document.querySelectorAll('.lesson-link, .lesson-item a');
        lessonLinks.forEach(link => {
          if (link.getAttribute('data-lesson') === lastLesson) {
            const lessonItem = link.closest('.lesson-item') || link.parentElement;
            if (lessonItem) {
              lessonItem.classList.add('active');
            }
          } else {
            const lessonItem = link.closest('.lesson-item') || link.parentElement;
            if (lessonItem) {
              lessonItem.classList.remove('active');
            }
          }
        });
        
        // Запускаем загрузку урока без изменения языка
        setTimeout(() => {
          if (typeof loadLesson === 'function') {
            loadLesson(parseInt(lastLesson), currentCourseType);
          } else if (typeof window.loadLesson === 'function') {
            window.loadLesson(parseInt(lastLesson), currentCourseType);
          }
        }, 600);
      }
    } catch (error) {
      console.error('Ошибка при восстановлении последнего урока:', error);
    }
  }, 1200);
  
  // Перехватываем клики на элементы уроков для сохранения состояния
  document.addEventListener('click', function(event) {
    const lessonLink = event.target.closest('.lesson-link, .lesson-item a');
    if (lessonLink && lessonLink.hasAttribute('data-lesson')) {
      const lessonNum = lessonLink.getAttribute('data-lesson');
      
      // Определяем тип текущего курса
      let currentCourseType = 'html';
      if (window.location.pathname.includes('python_course')) {
        currentCourseType = 'python';
      } else if (window.location.pathname.includes('database_course')) {
        currentCourseType = 'database';
      }
      
      // Сохраняем информацию о выбранном уроке
      localStorage.setItem('lastOpenedLesson', lessonNum);
      localStorage.setItem('lastOpenedCourse', currentCourseType);
      
      console.log(`Сохранен выбор урока: ${lessonNum}, тип курса: ${currentCourseType}`);
    }
  });
});

// Улучшенная функция loadLesson с сохранением состояния
if (typeof window.originalLoadLesson !== 'function' && typeof window.loadLesson === 'function') {
  window.originalLoadLesson = window.loadLesson;
  
  window.loadLesson = function(num, courseType) {
    // Сохраняем информацию о текущем уроке
    localStorage.setItem('lastOpenedLesson', num);
    if (courseType) {
      localStorage.setItem('lastOpenedCourse', courseType);
    }
    
    // Вызываем оригинальную функцию
    window.originalLoadLesson.apply(this, arguments);
    
    console.log(`Сохранён переход к уроку ${num}, тип курса: ${courseType}`);
  };
} 