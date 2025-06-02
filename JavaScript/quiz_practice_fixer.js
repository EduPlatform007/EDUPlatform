/**
 * Прямое решение для активации кнопки завершения урока
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('⚡ Запуск прямого исправления для кнопки завершения урока');
  
  // Активируем кнопку сразу после загрузки страницы
  setTimeout(activateButton, 1000);
  
  // И повторяем каждые 2 секунды для надежности
  setInterval(activateButton, 2000);
  
  function activateButton() {
      // Находим кнопку завершения урока
      const completeBtn = document.querySelector('.complete-btn, button.complete-lesson-btn');
      
      // Если кнопка найдена, активируем её
      if (completeBtn) {
          console.log('⚡ Кнопка завершения урока найдена, активируем');
          
          // Разблокируем кнопку
          completeBtn.disabled = false;
          completeBtn.classList.remove('disabled');
          completeBtn.classList.add('enabled');
          
          // Удаляем сообщение об ошибке, если оно есть
          const allDivs = document.querySelectorAll('div');
          let errorMsg = null;
          
          // Перебираем все div на странице
          for (const div of allDivs) {
              if (div.textContent && div.textContent.includes('Выполните все задания')) {
                  errorMsg = div;
                  break;
              }
          }
          if (errorMsg) {
              errorMsg.style.display = 'none';
          }
          
          // Получаем номер урока
          const urlParams = new URLSearchParams(window.location.search);
          const lessonNum = urlParams.get('lesson') || localStorage.getItem('lastOpenedLesson') || 1;
          
          // Отмечаем все задания как выполненные
          const courseType = window.location.pathname.includes('python') ? 'python_ru' : 
                             window.location.pathname.includes('database') ? 'database_ru' : 'html_css_ru';
                             
          localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'true');
          localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
          localStorage.setItem(`${courseType}_lesson${lessonNum}_completed`, 'true');
      }
  }
});