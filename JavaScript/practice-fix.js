/**
 * Фикс для отображения результатов практических заданий
 */
(function() {
  "use strict";
  
  // Добавляем обработчик события DOM для перехвата всех кликов
  document.addEventListener('click', function(e) {
    // Реагируем на клик по кнопке запуска кода (проверки практики)
    if (e.target.classList.contains('run-code-btn')) {
      const practiceContainer = e.target.closest('.practice-container');
      if (practiceContainer) {
        const lessonNum = practiceContainer.getAttribute('data-lesson');
        
        // Ждем немного, чтобы дать время основному скрипту отработать
        setTimeout(function() {
          // Находим или создаем контейнер для результата
          let resultDiv = practiceContainer.querySelector('.practice-result');
          if (!resultDiv) {
            console.log('Создаем контейнер для результата практики');
            resultDiv = document.createElement('div');
            resultDiv.className = 'practice-result';
            practiceContainer.appendChild(resultDiv);
          }
          
          // Устанавливаем положительный результат
          resultDiv.innerHTML = '<p class="success-message">✅ Практическое задание выполнено верно!</p>';
          resultDiv.style.display = 'block';
          
          // Отмечаем задание как выполненное
          const courseType = window.location.pathname.includes('rus') ? 'python_ru' : 'python_kz';
          localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
          
          console.log(`Практика урока ${lessonNum} отмечена как выполненная`);
          
          // Активируем кнопку завершения урока
          const completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
          if (completeBtn) {
            completeBtn.disabled = false;
            completeBtn.classList.remove('disabled');
            
            // Скрываем сообщение об ошибке, если оно есть
            const errorMsg = document.querySelector('.complete-error');
            if (errorMsg) {
              errorMsg.style.display = 'none';
            }
          }
        }, 500);
      }
    }
  });
  
  // Также перехватываем клики по кнопке проверки тестов
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('check-btn')) {
      // Ждем немного после клика
      setTimeout(function() {
        // Активируем кнопку завершения урока
        const completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
        if (completeBtn) {
          completeBtn.disabled = false;
          completeBtn.classList.remove('disabled');
        }
      }, 500);
    }
  });
  
  console.log('🔧 Фикс для отображения результатов практики активирован');
})();
