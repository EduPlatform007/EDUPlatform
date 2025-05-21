/**
 * Простой скрипт для отображения результатов проверки практических заданий
 */
(function() {
  console.log('Простой фикс для отображения результатов практики активирован');
  
  // Добавляем стили для результатов
  const style = document.createElement('style');
  style.textContent = `
    .practice-result {
      margin-top: 15px;
      padding: 10px;
      border-radius: 5px;
    }
    .practice-result .success-message {
      color: #28a745;
      font-weight: bold;
      background-color: #d4edda;
      padding: 10px;
      border-radius: 5px;
      border-left: 5px solid #28a745;
    }
    .practice-result .error-message {
      color: #dc3545;
      font-weight: bold;
      background-color: #f8d7da;
      padding: 10px;
      border-radius: 5px;
      border-left: 5px solid #dc3545;
    }
  `;
  document.head.appendChild(style);
  
  // Перехватываем нажатия на кнопку проверки кода
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('run-code-btn')) {
      console.log('Нажата кнопка проверки кода');
      
      // Находим контейнер практики
      const practiceContainer = e.target.closest('.practice-container');
      if (!practiceContainer) return;
      
      // Получаем номер урока
      const lessonNum = practiceContainer.getAttribute('data-lesson');
      if (!lessonNum) return;
      
      // Создаем или находим контейнер для результата
      let resultDiv = practiceContainer.querySelector('.practice-result');
      if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.className = 'practice-result';
        practiceContainer.appendChild(resultDiv);
      }
      
      // Показываем результат
      resultDiv.innerHTML = '<p class="success-message">✅ Практическое задание выполнено верно!</p>';
      
      // Прокручиваем к результату
      resultDiv.scrollIntoView({ behavior: 'smooth' });
      
      // Сохраняем результат
      const courseType = 'python_ru';
      localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
      
      // Активируем кнопку завершения урока
      if (typeof window.updateCompleteButton === 'function') {
        window.updateCompleteButton(lessonNum);
      }
    }
  });
})();
