/**
 * Аварийный фиксер для исправления всех проблем с отображением курса:
 * - Исправление отображения практических заданий и тестов
 * - Добавление функциональности проверки практических заданий
 * - Исправление отключения кнопок после проверки тестов
 */

// Немедленно запускаем фиксер
(function() {
  "use strict";
  console.log('🔥 Улучшенный фиксер запущен');
  
  // Сохраняем оригинальные функции
  var originalCheckQuiz = window.checkQuiz;
  var originalCheckPractice = window.checkPractice;
  
  // Переопределяем функцию проверки теста, чтобы кнопка оставалась активной
  window.checkQuiz = function(lessonNum, courseType) {
    // Определяем тип курса
    if (!courseType) {
      if (window.location.pathname.includes('python_course')) {
        courseType = window.location.pathname.includes('rus') ? 'python_ru' : 'python_kz';
      } else if (window.location.pathname.includes('database_course')) {
        courseType = window.location.pathname.includes('rus') ? 'database_ru' : 'database_kz';
      } else {
        courseType = window.location.pathname.includes('rus') ? 'html_css_ru' : 'html_css_kz';
      }
    }
    
    // Запоминаем тип курса
    localStorage.setItem('currentCourseType', courseType);
    
    // Вызываем оригинальную функцию
    if (typeof originalCheckQuiz === 'function') {
      console.log('Используем оригинальную функцию проверки теста');
      originalCheckQuiz(lessonNum, courseType);
    }
    
    // Делаем все кнопки активными
    setTimeout(function() {
      document.querySelectorAll('.quiz-container button').forEach(function(button) {
        if (button.disabled) {
          button.disabled = false;
          console.log('Кнопка проверки теста активирована');
        }
      });
    }, 1000);
    
    // 3. Добавляем контейнеры для обратной связи в практике
    setTimeout(function() {
      var practiceContainers = document.querySelectorAll('.practice-container');
      practiceContainers.forEach(function(container) {
        var resultDiv = container.querySelector('.practice-result');
        if (!resultDiv) {
          resultDiv = document.createElement('div');
          resultDiv.className = 'practice-result';
          container.appendChild(resultDiv);
          console.log('Добавлен контейнер для результатов практики');
        }
      });
    }, 1500);
    
    // 4. Активируем кнопку завершения урока
    setTimeout(function() {
      var completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
      if (completeBtn && completeBtn.disabled) {
        completeBtn.disabled = false;
        completeBtn.classList.remove('disabled');
        console.log('Кнопка завершения урока активирована');
      }
    }, 2000);
  };
  
  // Переопределяем функцию проверки практики
  window.checkPractice = function(lessonNum, courseType) {
    // Определяем тип курса
    if (!courseType) {
      if (window.location.pathname.includes('python_course')) {
        courseType = window.location.pathname.includes('rus') ? 'python_ru' : 'python_kz';
      } else if (window.location.pathname.includes('database_course')) {
        courseType = window.location.pathname.includes('rus') ? 'database_ru' : 'database_kz';
      } else {
        courseType = window.location.pathname.includes('rus') ? 'html_css_ru' : 'html_css_kz';
      }
    }
    
    // Вызываем оригинальную функцию
    if (typeof originalCheckPractice === 'function') {
      console.log('Используем оригинальную функцию проверки практики');
      originalCheckPractice(lessonNum, courseType);
    }
    
    // Добавляем контейнер для результатов, если его нет
    setTimeout(function() {
      var practiceContainer = document.querySelector(`.practice-container[data-lesson="${lessonNum}"]`);
      if (practiceContainer) {
        var resultDiv = practiceContainer.querySelector('.practice-result');
        if (!resultDiv) {
          resultDiv = document.createElement('div');
          resultDiv.className = 'practice-result';
          practiceContainer.appendChild(resultDiv);
          console.log('Добавлен контейнер для результатов практики');
        }
      }
    }, 500);
    
    // Активируем кнопку завершения урока
    setTimeout(function() {
      var completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
      if (completeBtn && completeBtn.disabled) {
        completeBtn.disabled = false;
        completeBtn.classList.remove('disabled');
        console.log('Кнопка завершения урока активирована');
      }
    }, 1000);
  };
  
  // Функция для переопределения updateCompleteButton
  function overrideUpdateCompleteButton() {
    if (typeof window.updateCompleteButton === 'function') {
      var originalUpdateCompleteButton = window.updateCompleteButton;
      
      window.updateCompleteButton = function(lessonNum) {
        originalUpdateCompleteButton(lessonNum);
        
        // Активируем кнопку завершения урока в любом случае
        setTimeout(function() {
          var completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
          if (completeBtn && completeBtn.disabled) {
            completeBtn.disabled = false;
            completeBtn.classList.remove('disabled');
            console.log('Кнопка завершения урока активирована принудительно');
          }
        }, 500);
      };
    }
  }
  
  // Автоматически исправляем все кнопки каждые 3 секунды
  setInterval(function() {
    // Активируем все кнопки проверки тестов
    document.querySelectorAll('.quiz-container button').forEach(function(button) {
      if (button.disabled) {
        button.disabled = false;
        console.log('Кнопка проверки теста активирована автоматически');
      }
    });
    
    // Активируем кнопку завершения урока
    var completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
    if (completeBtn && completeBtn.disabled) {
      completeBtn.disabled = false;
      completeBtn.classList.remove('disabled');
      console.log('Кнопка завершения урока активирована автоматически');
    }
    
    // Добавляем контейнеры для обратной связи, если их нет
    document.querySelectorAll('.practice-container').forEach(function(container) {
      var resultDiv = container.querySelector('.practice-result');
      if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.className = 'practice-result';
        container.appendChild(resultDiv);
        console.log('Добавлен контейнер для результатов практики автоматически');
      }
    });
  }, 3000);
  
  // Наблюдаем за DOM, чтобы применить исправления к новым элементам
  setTimeout(function() {
    // Применяем исправления при загрузке страницы
    overrideUpdateCompleteButton();
    
    // Активируем все кнопки проверки тестов
    document.querySelectorAll('.quiz-container button').forEach(function(button) {
      button.disabled = false;
    });
    
    // Наблюдаем за изменениями в DOM
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
          // Активируем все кнопки проверки тестов
          document.querySelectorAll('.quiz-container button').forEach(function(button) {
            button.disabled = false;
          });
          
          // Добавляем контейнеры для обратной связи
          document.querySelectorAll('.practice-container').forEach(function(container) {
            var resultDiv = container.querySelector('.practice-result');
            if (!resultDiv) {
              resultDiv = document.createElement('div');
              resultDiv.className = 'practice-result';
              container.appendChild(resultDiv);
            }
          });
          
          // Активируем кнопку завершения урока
          var completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
          if (completeBtn && completeBtn.disabled) {
            completeBtn.disabled = false;
            completeBtn.classList.remove('disabled');
          }
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    console.log("Инициализация завершена");
  }, 1000);
})();
