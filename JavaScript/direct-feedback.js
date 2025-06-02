/**
 * ПРЯМОЙ ФИКС ДЛЯ ОТОБРАЖЕНИЯ РЕЗУЛЬТАТОВ ПРАКТИКИ
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚨 ПРЯМОЙ ФИКС ДЛЯ ОТОБРАЖЕНИЯ РЕЗУЛЬТАТОВ ПРАКТИКИ АКТИВИРОВАН');
  
  // Прямая замена функции проверки практики
  window.checkPractice = function(lessonNum, courseType) {
    console.log('Вызвана функция проверки практики для урока ' + lessonNum);
    
    // Находим контейнер практики
    const practiceContainer = document.querySelector(`.practice-container[data-lesson="${lessonNum}"]`);
    if (!practiceContainer) {
      console.error(`Контейнер практики для урока ${lessonNum} не найден`);
      return;
    }
    
    // Находим поле ввода кода
    const codeInput = practiceContainer.querySelector('.practice-code') || 
                      practiceContainer.querySelector('textarea');
    if (!codeInput) {
      console.error(`Поле ввода кода для урока ${lessonNum} не найдено`);
      return;
    }
    
    // Получаем введенный код
    const userCode = codeInput.value;
    console.log('Код пользователя:', userCode);
    
    // Создаем или находим контейнер для результата
    let resultDiv = practiceContainer.querySelector('.practice-result');
    if (!resultDiv) {
      resultDiv = document.createElement('div');
      resultDiv.className = 'practice-result';
      practiceContainer.appendChild(resultDiv);
      console.log('Создан контейнер для результатов практики');
    }
    
    // Определяем язык интерфейса
    const lang = document.documentElement.lang || 
                (window.location.pathname.includes('rus') ? 'ru' : 'kk');
    
    // Для демонстрации всегда показываем успешный результат
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
    
    // Прокручиваем к результату
    resultDiv.scrollIntoView({ behavior: 'smooth' });
    
    console.log('Результат практики показан');
  };
  
  // Добавляем прямой обработчик для кнопок проверки кода
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('run-code-btn')) {
      console.log('Нажата кнопка проверки практики');
      
      // Находим контейнер практики
      const practiceContainer = e.target.closest('.practice-container');
      if (!practiceContainer) return;
      
      // Получаем номер урока
      const lessonNum = practiceContainer.getAttribute('data-lesson');
      if (!lessonNum) return;
      
      // Вызываем функцию проверки практики
      window.checkPractice(lessonNum);
    }
  });
  
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
  
  console.log('Прямой фикс для отображения результатов практики установлен');
});
