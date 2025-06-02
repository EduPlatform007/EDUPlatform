/**
 * Фикс для отображения результатов проверки практических заданий
 */
(function() {
  "use strict";
  
  console.log('🔧 Фикс для отображения результатов практики активирован');
  
  // Добавляем обработчик для кнопок проверки кода
  document.addEventListener('click', function(e) {
    // Если нажата кнопка проверки практики
    if (e.target.classList.contains('run-code-btn')) {
      console.log('Нажата кнопка проверки практики');
      
      // Находим контейнер практики
      const practiceContainer = e.target.closest('.practice-container');
      if (!practiceContainer) return;
      
      // Получаем номер урока
      const lessonNum = practiceContainer.getAttribute('data-lesson');
      if (!lessonNum) return;
      
      // Получаем введенный код
      const codeInput = practiceContainer.querySelector('.practice-code, textarea');
      if (!codeInput) return;
      
      const userCode = codeInput.value;
      console.log('Код пользователя:', userCode);
      
      // Получаем правильный ответ из данных
      let correctAnswer = '';
      try {
        // Определяем тип курса
        const courseType = window.location.pathname.includes('rus') ? 
          (window.location.pathname.includes('python') ? 'python_ru' : 
          (window.location.pathname.includes('database') ? 'database_ru' : 'html_css_ru')) : 
          (window.location.pathname.includes('python') ? 'python_kz' : 
          (window.location.pathname.includes('database') ? 'database_kz' : 'html_css_kz'));
        
        // Получаем данные для текущего урока
        let quizPracticeData;
        if (courseType === 'python_ru' && window.python_ru_quiz_practice) {
          quizPracticeData = window.python_ru_quiz_practice;
        } else if (courseType === 'python_kz' && window.python_kz_quiz_practice) {
          quizPracticeData = window.python_kz_quiz_practice;
        } else if (courseType === 'database_ru' && window.database_ru_quiz_practice) {
          quizPracticeData = window.database_ru_quiz_practice;
        } else if (courseType === 'database_kz' && window.database_kz_quiz_practice) {
          quizPracticeData = window.database_kz_quiz_practice;
        } else if (courseType === 'html_css_ru' && window.html_css_ru_quiz_practice) {
          quizPracticeData = window.html_css_ru_quiz_practice;
        } else if (courseType === 'html_css_kz' && window.html_css_kz_quiz_practice) {
          quizPracticeData = window.html_css_kz_quiz_practice;
        }
        
        if (quizPracticeData && quizPracticeData['lesson' + lessonNum] && quizPracticeData['lesson' + lessonNum].practiceAnswer) {
          correctAnswer = quizPracticeData['lesson' + lessonNum].practiceAnswer;
          console.log('Правильный ответ:', correctAnswer);
        } else {
          console.warn('Ответ на практику не найден для урока ' + lessonNum);
        }
      } catch (e) {
        console.error('Ошибка при получении ответа на практику:', e);
      }
      
      // Создаем или находим контейнер для результата
      let resultDiv = practiceContainer.querySelector('.practice-result');
      if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.className = 'practice-result';
        practiceContainer.appendChild(resultDiv);
        console.log('Создан контейнер для результатов практики');
      }
      
      // Сравниваем код пользователя с правильным
      const isCorrect = compareCodes(userCode, correctAnswer);
      console.log('Результат проверки:', isCorrect);
      
      // Показываем результат
      const lang = window.location.pathname.includes('rus') ? 'ru' : 'kk';
      if (isCorrect) {
        resultDiv.innerHTML = `<p class="success-message">
          ✅ ${lang === 'ru' ? 'Практическое задание выполнено верно!' : 'Практикалық тапсырма дұрыс орындалды!'}</p>`;
        
        // Сохраняем результат
        const currentCourse = localStorage.getItem('lastOpenedCourse') || 
                             localStorage.getItem('currentCourseType') || 
                             courseType || 'html';
        localStorage.setItem(`${currentCourse}_lesson${lessonNum}_practice`, 'true');
        
        // Обновляем состояние кнопки завершения урока
        if (typeof window.updateCompleteButton === 'function') {
          window.updateCompleteButton(lessonNum);
        }
      } else {
        resultDiv.innerHTML = `<p class="error-message">
          ❌ ${lang === 'ru' ? 'В коде есть ошибки. Попробуйте еще раз.' : 'Кодта қателер бар. Қайталап көріңіз.'}</p>`;
        
        // Удаляем информацию о выполнении практики
        const currentCourse = localStorage.getItem('lastOpenedCourse') || 
                             localStorage.getItem('currentCourseType') || 
                             courseType || 'html';
        localStorage.removeItem(`${currentCourse}_lesson${lessonNum}_practice`);
      }
      
      // Прокручиваем к результату
      resultDiv.scrollIntoView({ behavior: 'smooth' });
    }
  });

})();
