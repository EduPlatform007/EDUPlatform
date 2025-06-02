/**
 * Система обработки тестов и практических заданий
 * Этот файл отвечает за проверку ответов на тесты и практические задания
 */

// Функция для проверки ответов на тест
function checkQuiz(lessonNum, courseType = 'html_css_kz') {
  let quizPracticeData;

  if (!courseType) {
    if (window.location.pathname.includes('python_course')) {
      courseType = window.location.pathname.includes('rus') ? 'python_ru' : 'python_kz';
    } else if (window.location.pathname.includes('database_course')) {
      courseType = window.location.pathname.includes('rus') ? 'database_ru' : 'database_kz';
    } else {
      courseType = window.location.pathname.includes('rus') ? 'html_css_ru' : 'html_css_kz';
    }
  }

  if (courseType === 'html_css_kz') quizPracticeData = window.htmlCssKzQuizPractice;
  else if (courseType === 'html_css_ru') quizPracticeData = window.htmlCssRuQuizPractice;
  else if (courseType === 'python_kz') quizPracticeData = window.pythonKzQuizPractice;
  else if (courseType === 'python_ru') quizPracticeData = window.pythonRuQuizPractice;
  else if (courseType === 'database_kz') quizPracticeData = window.databaseKzQuizPractice;
  else if (courseType === 'database_ru') quizPracticeData = window.databaseRuQuizPractice;
  else return;

  if (!quizPracticeData || !quizPracticeData[lessonNum]) return;

  const answers = quizPracticeData[lessonNum].quizAnswers;
  if (!answers) return;

  let allCorrect = true;

  for (const question in answers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (!selected || selected.value !== answers[question]) {
      allCorrect = false;
      break;
    }
  }

  const lang = (JSON.parse(localStorage.getItem('currentUser') || '{}').language || 'kk');
  
  // Найдем или создадим контейнер для результатов теста
  let quizContainer = document.querySelector(`.quiz-container[data-lesson="${lessonNum}"]`);
  
  // Создаем контейнер, если он не существует
  if (!quizContainer) {
    const lessonContainer = document.querySelector(`.lesson-content[data-lesson="${lessonNum}"]`) || 
                            document.querySelector(`.lesson-container[data-lesson="${lessonNum}"]`) || 
                            document.querySelector('main') || 
                            document.body;
    
    quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';
    quizContainer.setAttribute('data-lesson', lessonNum);
    lessonContainer.appendChild(quizContainer);
  }

  // Найдем или создадим элемент для отображения результатов
  let resultMessage = quizContainer.querySelector('.quiz-result');
  if (!resultMessage) {
    resultMessage = document.createElement('div');
    resultMessage.className = 'quiz-result';
    quizContainer.appendChild(resultMessage);
  }

  // Обеспечиваем видимость сообщения
  resultMessage.style.display = 'block';

  if (allCorrect) {
    resultMessage.innerHTML = `<p class="success-message">✅ ${lang === 'kk' ? 'Сіз барлық сұрақтарға дұрыс жауап бердіңіз!' : 'Вы правильно ответили на все вопросы!'}</p>`;
    localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'true');
  } else {
    resultMessage.innerHTML = `<p class="error-message">❌ ${lang === 'kk' ? 'Қате жауаптар бар!' : 'Есть ошибки в ответах!'}</p>`;
    localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'false');
  }

  // Гарантированно добавляем в DOM, если resultMessage оторван от DOM
  if (!resultMessage.parentNode) {
    quizContainer.appendChild(resultMessage);
  }

  if (typeof window.updateCompleteButton === 'function') {
    window.updateCompleteButton(lessonNum);
  }
}


// Функция для проверки практического задания
function checkPractice(lessonNum, courseType = 'html_css_kz') {
  console.log(`Проверка практики для урока ${lessonNum}, курс: ${courseType}`);
  
  // Определяем источник данных в зависимости от типа курса
  let quizPracticeData;
  
  // Если тип курса не передан, определяем его по URL
  if (!courseType) {
    if (window.location.pathname.includes('python_course')) {
      courseType = window.location.pathname.includes('rus') ? 'python_ru' : 'python_kz';
    } else if (window.location.pathname.includes('database_course')) {
      courseType = window.location.pathname.includes('rus') ? 'database_ru' : 'database_kz';
    } else {
      courseType = window.location.pathname.includes('rus') ? 'html_css_ru' : 'html_css_kz';
    }
  }
  
  if (courseType === 'html_css_kz') {
    quizPracticeData = window.htmlCssKzQuizPractice;
  } else if (courseType === 'html_css_ru') {
    quizPracticeData = window.htmlCssRuQuizPractice;
  } else if (courseType === 'python_kz') {
    quizPracticeData = window.pythonKzQuizPractice;
  } else if (courseType === 'python_ru') {
    quizPracticeData = window.pythonRuQuizPractice;
  } else if (courseType === 'database_kz') {
    quizPracticeData = window.databaseKzQuizPractice;
  } else if (courseType === 'database_ru') {
    quizPracticeData = window.databaseRuQuizPractice;
  } else {
    console.error(`Неизвестный тип курса: ${courseType}`);
    return;
  }
  
  // Создаем стили для сообщений, если их нет
  if (!document.getElementById('practice-result-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'practice-result-styles';
    styleElement.textContent = `
      .success-message {
        color: #4CAF50;
        font-weight: bold;
        padding: 10px;
        border-radius: 5px;
        background-color: #E8F5E9;
        margin-top: 10px;
      }
      .error-message {
        color: #F44336;
        font-weight: bold;
        padding: 10px;
        border-radius: 5px;
        background-color: #FFEBEE;
        margin-top: 10px;
      }
    `;
    document.head.appendChild(styleElement);
  }
  
  // Проверяем, есть ли тесты и практические задания для этого урока
  if (!quizPracticeData || !quizPracticeData[lessonNum]) {
    console.error(`Практика для урока ${lessonNum} курса ${courseType} не найдена`);
    return;}
  // Получаем введенный код
  const practiceContainer = document.querySelector(`.practice-container[data-lesson="${lessonNum}"]`);
  if (!practiceContainer) {
    console.error(`Контейнер практики для урока ${lessonNum} не найден`);
    return;
  }
  
  // Создаем контейнер для результатов, если его нет
  var practiceResultDiv = practiceContainer.querySelector('.practice-result');
  if (!practiceResultDiv) {
    practiceResultDiv = document.createElement('div');
    practiceResultDiv.className = 'practice-result';
    practiceContainer.appendChild(practiceResultDiv);
    console.log(`Создан контейнер для результатов практики ${lessonNum}`);
  }
  
  // Проверим наличие текстовой области или поля ввода кода
 // Ищем поле ввода кода в разных форматах
let codeInput = practiceContainer.querySelector('.practice-code');
if (!codeInput) {
  codeInput = practiceContainer.querySelector('textarea');
}
  
  const userCode = codeInput.value.trim();
  const quizPractice = quizPracticeData[lessonNum];

  const correctCode = quizPractice.practiceAnswer.trim();
  
  // Нормализация кода для сравнения
  const normalizeCode = (code) => {
    return code
      .replace(/\r\n/g, '\n') // Windows line endings
      .replace(/\s+/g, ' ')   // Multiple spaces to single space
      .replace(/;\s*/g, ';')  // Remove spaces after semicolons
      .replace(/{\s*/g, '{')  // Remove spaces after opening braces
      .replace(/\s*}/g, '}')  // Remove spaces before closing braces
      .trim();
  };
  
  const normalizedUserCode = normalizeCode(userCode);
  const normalizedCorrectCode = normalizeCode(correctCode);
  
  // Простое сравнение
  const isExactMatch = normalizedUserCode === normalizedCorrectCode;
  
  // Более гибкое сравнение для Python
  const isPythonMatch = courseType.includes('python') && 
                     userCode.length > 0 && correctCode.includes(userCode);
  
  // HTML сравнение
  const isHtmlMatch = courseType.includes('html') && 
                    normalizedUserCode.replace(/["']/g, '') === normalizedCorrectCode.replace(/["']/g, '');
  
  // Database сравнение (SQL)
  const isDbMatch = courseType.includes('database') && 
                  userCode.toLowerCase().includes(correctCode.toLowerCase());
  
  // Решение считается правильным, если выполняется любое из условий
  const isCorrect = isExactMatch || isPythonMatch || isHtmlMatch || isDbMatch;
  
  // Получаем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = userData.language || 'kk';
  
  // Получаем или создаем контейнер для результата
  var pracResultDiv = practiceContainer.querySelector('.practice-result');
  if (!pracResultDiv) {
    pracResultDiv = document.createElement('div');
    pracResultDiv.className = 'practice-result';
    practiceContainer.appendChild(pracResultDiv);
    console.log('Создан контейнер для результатов практики');
  }
  
  // Показываем результат
  if (isCorrect) {
    pracResultDiv.innerHTML = `<p class="success-message">
      ✅ ${lang === 'kk' ? 'Практикалық тапсырма дұрыс орындалды!' : 'Практическое задание выполнено верно!'}</p>`;
    
    // Сохраняем результат
    const currentCourse = localStorage.getItem('lastOpenedCourse') || courseType || localStorage.getItem('currentCourseType') || 'html';
    localStorage.setItem(`${currentCourse}_lesson${lessonNum}_practice`, 'true');
    console.log(`Записан результат практики для урока ${lessonNum} в ${currentCourse}`);
    
    // Обновляем состояние кнопки завершения урока
    if (typeof window.updateCompleteButton === 'function') {
      window.updateCompleteButton(lessonNum);
      setTimeout(function() {
        // Еще раз активируем кнопку для надежности
        var completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
        if (completeBtn && completeBtn.disabled) {
          completeBtn.disabled = false;
          completeBtn.classList.remove('disabled');
          console.log('Кнопка завершения урока активирована после практики');
        }
      }, 500);
    }
  } else {
    pracResultDiv.innerHTML = `<p class="error-message">
      ❌ ${lang === 'kk' ? 'Кодта қателер бар. Қайталап көріңіз.' : 'В коде есть ошибки. Попробуйте еще раз.'}</p>`;
  }
  
  // Прокручиваем к результату
  pracResultDiv.scrollIntoView({ behavior: 'smooth' });

}
// Функция для проверки ответов на тест определенного уровня сложности
function checkQuizLevel(lessonNum, level, courseType = 'html_css_kz') {
  console.log(`Проверка теста уровня ${level} для урока ${lessonNum}, курс: ${courseType}`);
  
  // Определяем источник данных
  let quizPracticeData = window[`${courseType}QuizPractice`];
  if (!quizPracticeData || !quizPracticeData[lessonNum]) {
    console.error(`Тест для урока ${lessonNum} не найден`);
    return;
  }

  const quizPractice = quizPracticeData[lessonNum];
  let answers;

  if (level === 'easy') answers = quizPractice.quizAnswersEasy;
  else if (level === 'medium') answers = quizPractice.quizAnswersMedium;
  else if (level === 'hard') answers = quizPractice.quizAnswersHard;
  else {
    console.error('Неверный уровень сложности');
    return;
  }

  // Найдем или создадим контейнер теста
  let quizContainer = document.querySelector(`.quiz-container[data-lesson="${lessonNum}"][data-level="${level}"]`);
  
  // Если контейнер не найден, создадим его
  if (!quizContainer) {
    console.log(`Создаем контейнер теста уровня ${level} для урока ${lessonNum}`);
    
    // Ищем подходящий родительский элемент для вставки
    const lessonContainer = document.querySelector(`.lesson-content[data-lesson="${lessonNum}"]`) || 
                          document.querySelector(`.lesson-container[data-lesson="${lessonNum}"]`) || 
                          document.querySelector(`[data-lesson="${lessonNum}"]`) || 
                          document.querySelector('main') || 
                          document.body;
    
    quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';
    quizContainer.setAttribute('data-lesson', lessonNum);
    quizContainer.setAttribute('data-level', level);
    lessonContainer.appendChild(quizContainer);
  }

  // Найдем или создадим элемент для результатов
  let resultMessage = quizContainer.querySelector('.quiz-result');
  if (!resultMessage) {
    console.log(`Создаем блок результатов для теста уровня ${level} урока ${lessonNum}`);
    resultMessage = document.createElement('div');
    resultMessage.className = 'quiz-result';
    quizContainer.appendChild(resultMessage);
  }

  // Обеспечиваем видимость сообщения
  resultMessage.style.display = 'block';

  // Проверка ответов
  let allCorrect = true;
  for (const question in answers) {
    const selected = document.querySelector(`input[name="${question}_${level}"]:checked`);
    if (!selected || selected.value !== answers[question]) {
      allCorrect = false;
      break;
    }
  }

  const lang = (JSON.parse(localStorage.getItem('currentUser') || '{}').language || 'kk');
  const key = `${courseType}_lesson${lessonNum}_quiz_${level}`;

  console.log(`Результат теста уровня ${level} для урока ${lessonNum}: ${allCorrect ? 'успех' : 'ошибки'}`);

  if (allCorrect) {
    resultMessage.innerHTML = `<p class="success-message">✅ ${lang === 'kk' ? 'Тест сәтті өтті!' : 'Тест успешно пройден!'}</p>`;
    localStorage.setItem(key, 'true');
  } else {    
    resultMessage.innerHTML = `<p class="error-message">❌ ${lang === 'kk' ? 'Қате жауаптар бар!' : 'Есть ошибки в ответах!'}</p>`;
    localStorage.setItem(key, 'false');
  }
  
  // Гарантированно добавляем в DOM, если resultMessage оторван от DOM
  if (!resultMessage.parentNode) {
    quizContainer.appendChild(resultMessage);
  }

  // Добавляем стили, если их нет
  if (!document.getElementById('quiz-result-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'quiz-result-styles';
    styleElement.textContent = `
      .quiz-result {
        margin-top: 15px;
        padding: 10px;
        border-radius: 5px;
      }
      .success-message {
        color: #4CAF50;
        font-weight: bold;
      }
      .error-message {
        color: #F44336;
        font-weight: bold;
      }
    `;
    document.head.appendChild(styleElement);
  }

  if (typeof window.updateCompleteButton === 'function') {
    window.updateCompleteButton(lessonNum);
  }
}


// Функция для сохранения результата теста
function saveQuizResult(lessonNum, isCorrect) {
  const currentCourse = localStorage.getItem('lastOpenedCourse') || 'html';
  localStorage.setItem(`${currentCourse}_lesson${lessonNum}_quiz`, isCorrect ? 'true' : 'false');
}

// Функция для сохранения результата практического задания
function savePracticeResult(lessonNum, isCorrect) {
  const currentCourse = localStorage.getItem('lastOpenedCourse') || 'html';
  localStorage.setItem(`${currentCourse}_lesson${lessonNum}_practice`, isCorrect ? 'true' : 'false');
}

// Функция для проверки, завершен ли урок
function isLessonCompleted(lessonNum) {
  const courseType = localStorage.getItem('currentCourseType') || 
                     (window.location.pathname.includes('rus') ? 
                      (window.location.pathname.includes('python') ? 'python_ru' : 
                       (window.location.pathname.includes('database') ? 'database_ru' : 'html_css_ru')) : 
                      (window.location.pathname.includes('python') ? 'python_kz' : 
                       (window.location.pathname.includes('database') ? 'database_kz' : 'html_css_kz')));
  
  // Для урока 9 проверяем все уровни и практику
  if (lessonNum === 9) {
    const easyCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz_easy`) === 'true';
    const mediumCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz_medium`) === 'true';
    const hardCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz_hard`) === 'true';
    const practiceCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_practice`) === 'true';
    
    return easyCompleted && mediumCompleted && hardCompleted && practiceCompleted;
  }
  
  // Для остальных уроков проверяем либо тест, либо практическое задание
  // Если это четный урок (2, 4, 6, 8), проверяем тест
  if (lessonNum % 2 === 0) {
    return localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz`) === 'true';
  } 
  // Если это нечетный урок (1, 3, 5, 7), проверяем практическое задание
  else {
    return localStorage.getItem(`${courseType}_lesson${lessonNum}_practice`) === 'true';
  }
}

// Функция для обновления состояния кнопки завершения урока
function updateCompleteButton(lessonNum) {
  // Находим кнопку завершения урока
  const completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
  if (!completeBtn) {
    console.error('Кнопка завершения урока не найдена');
    
    // Если кнопки нет, создаём её
    const lessonActions = document.querySelector('.lesson-actions');
    if (lessonActions) {
      const newBtn = document.createElement('button');
      newBtn.className = 'complete-btn';
      newBtn.textContent = window.location.pathname.includes('rus') ? 'Урок завершен' : 'Сабақ аяқталды';
      newBtn.setAttribute('data-lesson', lessonNum);
      lessonActions.appendChild(newBtn);
      
      // Рекурсивно вызываем функцию для обновления новой кнопки
      return updateCompleteButton(lessonNum);
    }
    
    return;
  }
  
  // Проверяем, завершен ли урок
  const completed = isLessonCompleted(lessonNum);
  
  // Обновляем состояние кнопки
  if (completed) {
    completeBtn.classList.remove('disabled');
    completeBtn.disabled = false;
  } else {
    completeBtn.classList.add('disabled');
    completeBtn.disabled = true;
  }
  
  // Обновляем обработчик нажатия
  completeBtn.onclick = function() {
    if (typeof window.completeLesson === 'function') {
      window.completeLesson(lessonNum);
    }
  };
}
// Функция для завершения урока
function completeLesson(lessonNum) {
  // Проверяем, завершен ли урок
  const completed = isLessonCompleted(lessonNum);
  
  // Получаем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = userData.language || 'kk';
  
  // Находим сообщение о результате
  const resultMessage = document.getElementById('result-message');
  
  if (!completed) {
    // Если урок не завершен, показываем сообщение об ошибке
    if (resultMessage) {
      resultMessage.innerHTML = `<p class="error-message">
        ❌ ${lang === 'kk' ? 'Сабақты аяқтау үшін барлық тапсырмаларды орындаңыз!' : 'Для завершения урока выполните все задания!'}</p>`;
    }
    return;
  }
  
  // Если урок завершен, отмечаем его как завершенный в localStorage
  const currentCourse = localStorage.getItem('lastOpenedCourse') || 'html';
  localStorage.setItem(`${currentCourse}_lesson${lessonNum}_completed`, 'true');
  
  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  // Обновляем прогресс пользователя
  if (!currentUser.progress) {
    currentUser.progress = {};
  }
  
  if (!currentUser.progress[currentCourse]) {
    currentUser.progress[currentCourse] = {};
  }
  
  currentUser.progress[currentCourse][lessonNum] = true;
  
  // Сохраняем обновленные данные пользователя
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
  // Показываем сообщение об успешном завершении урока
  if (resultMessage) {
    resultMessage.innerHTML = `<p class="success-message">
      ✅ ${lang === 'kk' ? 'Сабақ сәтті аяқталды!' : 'Урок успешно завершен!'}</p>`;
  }
  
  // Обновляем интерфейс
  // Добавляем галочку к завершенному уроку в сайдбаре
  const lessonItem = document.querySelector(`.lesson-link[data-lesson="${lessonNum}"]`).closest('.lesson-item');
  if (lessonItem && !lessonItem.querySelector('.lesson-completed')) {
    const checkmark = document.createElement('span');
    checkmark.className = 'lesson-completed';
    checkmark.innerHTML = '✓';
    lessonItem.appendChild(checkmark);
  }
  
  // Разблокируем следующий урок, если он существует
  const nextLessonNum = parseInt(lessonNum) + 1;
  const nextLessonLink = document.querySelector(`.lesson-link[data-lesson="${nextLessonNum}"]`);
  if (nextLessonLink) {
    nextLessonLink.classList.remove('locked');
    nextLessonLink.removeAttribute('onclick');
    nextLessonLink.setAttribute('onclick', `loadLesson(${nextLessonNum})`);
  }
}

// Функция для создания HTML-кода теста
function createQuizHTML(lessonNum, questions) {
  let html = `
    <div class="quiz-container" data-lesson="${lessonNum}">
      <form>
  `;
  
  // Добавляем вопросы
  questions.forEach((question, index) => {
    const questionId = `q${index + 1}`;
    
    html += `
      <div class="quiz-question">
        <p class="question-text">${index + 1}. ${question.text}</p>
        <div class="quiz-options">
    `;
    
    // Добавляем варианты ответов
    question.options.forEach((option, optIndex) => {
      const optionValue = String.fromCharCode(97 + optIndex); // a, b, c, d
      
      html += `
        <div class="quiz-option">
          <input type="radio" id="${questionId}_${optionValue}" name="${questionId}" value="${optionValue}">
          <label for="${questionId}_${optionValue}">${option}</label>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  });
  
  // Добавляем кнопку проверки и контейнер для результата
  html += `
      </form>
      <button class="quiz-submit-btn" onclick="checkQuiz(${lessonNum})">Тексеру</button>
      <div class="quiz-result"></div>
    </div>
  `;
  
  return html;
}

// Функция для создания HTML-кода практического задания
function createPracticeHTML(lessonNum, task) {
  let html = `
    <div class="practice-container" data-lesson="${lessonNum}">
      <div class="practice-task">
        ${task}
      </div>
      <textarea class="practice-code" rows="10" placeholder="Жауабыңызды осында жазыңыз..."></textarea>
      <button class="practice-submit-btn" onclick="checkPractice(${lessonNum})">Тексеру</button>
      <div class="practice-result"></div>
    </div>
  `;
  
  return html;
}

// Функция для создания кнопки завершения урока
function createCompleteButtonHTML(lessonNum) {
  // Получаем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = userData.language || 'kk';
  
  // Определяем текст кнопки
  const buttonText = lang === 'kk' ? 'Сабақты аяқтау' : 'Завершить урок';
  
  // Создаем HTML-код кнопки
  const html = `
    <div class="complete-lesson-container">
      <button class="complete-lesson-btn disabled" data-lesson="${lessonNum}" onclick="completeLesson(${lessonNum})" disabled>${buttonText}</button>
      <div id="result-message"></div>
    </div>
  `;
  
  return html;
}

// Добавляем стили для тестов и практических заданий
function addStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Стили для тестов */
    .quiz-container {
      background-color: var(--bg-secondary, #f5f5f5);
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .quiz-question {
      margin-bottom: 20px;
    }
    
    .question-text {
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    .quiz-options {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    .quiz-option {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .quiz-option input[type="radio"] {
      margin: 0;
    }
    
    .quiz-option label {
      cursor: pointer;
    }
    
    .quiz-submit-btn, .practice-submit-btn, .complete-lesson-btn {
      background-color: #2646FA;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .quiz-submit-btn:hover, .practice-submit-btn:hover, .complete-lesson-btn:hover {
      background-color: #1e3ad8;
    }
    
    .quiz-result, .practice-result, #result-message {
      margin-top: 15px;
    }
    
    /* Стили для практических заданий */
    .practice-container {
      background-color: var(--bg-secondary, #f5f5f5);
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .practice-task {
      margin-bottom: 15px;
    }
    
    .practice-code {
      width: 100%;
      padding: 10px;
      font-family: monospace;
      border: 1px solid #ccc;
      border-radius: 4px;
      resize: vertical;
      margin-bottom: 15px;
      background-color: var(--bg-code, #f8f8f8);
      color: var(--text-primary, #333);
    }
    
    /* Стили для кнопки завершения урока */
    .complete-lesson-container {
      margin: 30px 0;
      text-align: center;
    }
    
    .complete-lesson-btn.disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    
    /* Стили для сообщений */
    .success-message {
      color: #4CAF50;
      font-weight: bold;
      padding: 10px;
      background-color: rgba(76, 175, 80, 0.1);
      border-radius: 4px;
    }
    
    .error-message {
      color: #F44336;
      font-weight: bold;
      padding: 10px;
      background-color: rgba(244, 67, 54, 0.1);
      border-radius: 4px;
    }
    
    /* Темная тема */
    [data-theme="dark"] .quiz-container,
    [data-theme="dark"] .practice-container {
      background-color: var(--bg-secondary, #2d2d2d);
    }
    
    [data-theme="dark"] .practice-code {
      background-color: var(--bg-code, #1e1e1e);
      color: var(--text-primary, #f0f0f0);
      border-color: #444;
    }
  `;
  
  document.head.appendChild(style);
}
// Привязка функций к глобальному пространству имён
window.checkQuiz = checkQuiz;
window.checkPractice = checkPractice;
window.completeLesson = completeLesson;
window.isLessonCompleted = isLessonCompleted;
window.checkQuizLevel = checkQuizLevel;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  // Добавляем стили
  addStyles();
  
  // Экспортируем функции в глобальную область видимости
  window.checkQuiz = checkQuiz;
  window.checkPractice = checkPractice;
  window.checkQuizLevel = checkQuizLevel;
  window.completeLesson = completeLesson;
  window.createQuizHTML = createQuizHTML;
  window.createPracticeHTML = createPracticeHTML;
  window.createCompleteButtonHTML = createCompleteButtonHTML;
  window.updateCompleteButton = updateCompleteButton;
  window.isLessonCompleted = isLessonCompleted;
  
  console.log('Система тестов и практических заданий инициализирована');
});

// === Дополнительные утилиты из override ===


function directProcessPractice(container) {
        const lessonNum = container.getAttribute('data-lesson') || 
                         container.closest('[data-lesson]')?.getAttribute('data-lesson') ||
                         getCurrentLessonNumber();
        
        console.log(`🔥 Обработка практики для урока ${lessonNum}`);
        
        // Находим поле ввода кода
        const codeInput = container.querySelector('.practice-code') || 
                          container.querySelector('textarea');
                          
        if (!codeInput) {
            console.error('Поле ввода кода не найдено');
            return;
        }
        
        // Получаем введенный код
        const userCode = codeInput.value.trim();
        
        // Находим или создаем результат практики
        let resultDiv = container.querySelector('.practice-result');
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.className = 'practice-result';
            container.appendChild(resultDiv);
        }
        
        // Определяем язык
        const lang = document.documentElement.lang || 
                    (window.location.pathname.includes('rus') ? 'ru' : 'kk');
        
        // Проверяем, что код не пустой
        if (!userCode) {
            resultDiv.innerHTML = '<p class="error-message">❌ ' + 
                (lang === 'ru' ? 'Введите код для проверки!' : 'Тексеру үшін кодты енгізіңіз!') + 
                '</p>';
            return;
        }
        
        // Получаем правильный ответ
        const correctAnswer = getPracticeAnswer(lessonNum);
        
        // Если не можем получить правильный ответ, показываем успех
        if (!correctAnswer) {
            console.warn('Правильный ответ не найден, принимаем любой ответ');
            resultDiv.innerHTML = '<p class="success-message">✅ ' + 
                (lang === 'ru' ? 'Практическое задание выполнено верно!' : 'Практикалық тапсырма дұрыс орындалды!') + 
                '</p>';
            markAsCompleted(lessonNum, 'practice');
            return;
        }
        
        // Сравниваем код
        const isCorrect = compareCodes(userCode, correctAnswer);
        
        if (isCorrect) {
            resultDiv.innerHTML = '<p class="success-message">✅ ' + 
                (lang === 'ru' ? 'Практическое задание выполнено верно!' : 'Практикалық тапсырма дұрыс орындалды!') + 
                '</p>';
            // Сохраняем результат
            markAsCompleted(lessonNum, 'practice');
        } else {
            resultDiv.innerHTML = '<p class="error-message">❌ ' + 
                (lang === 'ru' ? 'В вашем коде есть ошибки. Попробуйте еще раз!' : 'Сіздің кодыңызда қателіктер бар. Қайталап көріңіз!') + 
                '</p>';
        }
    }
    
    /**
     * Получает правильный ответ на практическое задание
     */
    function getPracticeAnswer(lessonNum) {
        // Определяем тип курса
        const currentPath = window.location.pathname.toLowerCase();
        let courseType = '';
        
        if (currentPath.includes('python')) {
            courseType = currentPath.includes('rus') ? 'python_ru' : 'python_kz';
        } else if (currentPath.includes('database')) {
            courseType = currentPath.includes('rus') ? 'database_ru' : 'database_kz';
        } else {
            courseType = currentPath.includes('rus') ? 'html_css_ru' : 'html_css_kz';
        }
        
        // Проверяем данные по разным источникам
        let quizPracticeData;
        
        // Проверяем все возможные источники данных
        if (courseType === 'html_css_kz' && window.htmlCssKzQuizPractice) {
            quizPracticeData = window.htmlCssKzQuizPractice;
        } else if (courseType === 'html_css_ru' && window.htmlCssRuQuizPractice) {
            quizPracticeData = window.htmlCssRuQuizPractice;
        } else if (courseType === 'python_kz' && window.pythonKzQuizPractice) {
            quizPracticeData = window.pythonKzQuizPractice;
        } else if (courseType === 'python_ru' && window.pythonRuQuizPractice) {
            quizPracticeData = window.pythonRuQuizPractice;
        } else if (courseType === 'database_kz' && window.databaseKzQuizPractice) {
            quizPracticeData = window.databaseKzQuizPractice;
        } else if (courseType === 'database_ru' && window.databaseRuQuizPractice) {
            quizPracticeData = window.databaseRuQuizPractice;
        }
        
        if (!quizPracticeData || !quizPracticeData[lessonNum] || !quizPracticeData[lessonNum].practiceAnswer) {
            console.error(`Ответ на практику для урока ${lessonNum} курса ${courseType} не найден`);
            return null;
        }
        
        return quizPracticeData[lessonNum].practiceAnswer;
    }
    
    /**
     * Сравнивает код пользователя с правильным ответом
     */
    function compareCodes(userCode, correctCode) {
        if (!userCode || !correctCode) {
            return false;
        }
        
        // Нормализация кода для сравнения
        function normalizeCode(code) {
            return code
                .replace(/\r\n/g, '\n')    // Windows line endings
                .replace(/\s+/g, ' ')     // Multiple spaces to single space
                .replace(/;\s*/g, ';')    // Remove spaces after semicolons
                .replace(/{\s*/g, '{')    // Remove spaces after opening braces
                .replace(/\s*}/g, '}')    // Remove spaces before closing braces
                .replace(/['"]/g, '"')   // Normalize all quotes
                .toLowerCase()            // Case-insensitive
                .trim();
        }
        
        const normalizedUserCode = normalizeCode(userCode);
        const normalizedCorrectCode = normalizeCode(correctCode);
        
        // Точное совпадение
        if (normalizedUserCode === normalizedCorrectCode) {
            return true;
        }
        
        // Проверяем наличие ключевых строк
        const keyLines = correctCode.split('\n').filter(line => line.trim() !== '');
        let correctLinesCount = 0;
        
        for (const line of keyLines) {
            const normalizedLine = normalizeCode(line);
            if (normalizedUserCode.includes(normalizedLine)) {
                correctLinesCount++;
            }
        }
        
        // Если больше 70% строк совпадает, считаем ответ правильным
        if (correctLinesCount / keyLines.length > 0.7) {
            return true;
        }
        
        // Специальные проверки для разных форматов кода
        
        // Для HTML и CSS
        if (correctCode.includes('{') && correctCode.includes('}') && userCode.includes('{') && userCode.includes('}')) {
            // Считаем CSS свойства в коде
            const correctProperties = correctCode.match(/[\w-]+\s*:\s*[^;}]+/g) || [];
            const userProperties = userCode.match(/[\w-]+\s*:\s*[^;}]+/g) || [];
            
            let matchingProperties = 0;
            for (const prop of correctProperties) {
                const normalizedProp = normalizeCode(prop);
                for (const userProp of userProperties) {
                    const normalizedUserProp = normalizeCode(userProp);
                    if (normalizedUserProp === normalizedProp) {
                        matchingProperties++;
                        break;
                    }
                }
            }
            
            // Если больше 60% CSS свойств совпадает
            if (correctProperties.length > 0 && matchingProperties / correctProperties.length > 0.6) {
                return true;
            }
        }
        
        // Для Python
        if (correctCode.includes('print(') && userCode.includes('print(')) {
            const correctPrints = correctCode.match(/print\([^)]*\)/g) || [];
            const userPrints = userCode.match(/print\([^)]*\)/g) || [];
            
            // Если есть хотя бы 1 print-вызов и количество совпадает
            if (correctPrints.length > 0 && userPrints.length === correctPrints.length) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * Функция для определения текущего номера урока
     */
    function getCurrentLessonNumber() {
        // Проверяем URL параметры
        const urlParams = new URLSearchParams(window.location.search);
        const lessonParam = urlParams.get('lesson');
        if (lessonParam) {
            return parseInt(lessonParam);
        }
        
        // Проверяем lastOpenedLesson в localStorage
        const savedLessonNum = localStorage.getItem('lastOpenedLesson');
        if (savedLessonNum) {
            return parseInt(savedLessonNum);
        }
        
        // Ищем в элементах с атрибутом data-lesson
        const dataLessonElements = document.querySelectorAll('[data-lesson]');
        if (dataLessonElements.length > 0) {
            const firstLessonNum = dataLessonElements[0].getAttribute('data-lesson');
            if (firstLessonNum && !isNaN(parseInt(firstLessonNum))) {
                return parseInt(firstLessonNum);
            }
        }
        
        // По умолчанию возвращаем 1
        return 1;
    }
    
    /**
     * Сохраняет результат теста или практики
     */
    function markAsCompleted(lessonNum, type) {
        // Получаем все возможные типы курсов
        const courseTypes = [
            'html_css_kz', 'html_css_ru', 
            'python_kz', 'python_ru', 
            'database_kz', 'database_ru',
            'html', 'python', 'database'
        ];
        
        // Получаем текущий тип курса
        const currentPath = window.location.pathname.toLowerCase();
        let currentCourseType = '';
        
        if (currentPath.includes('python')) {
            currentCourseType = currentPath.includes('rus') ? 'python_ru' : 'python_kz';
        } else if (currentPath.includes('database')) {
            currentCourseType = currentPath.includes('rus') ? 'database_ru' : 'database_kz';
        } else {
            currentCourseType = currentPath.includes('rus') ? 'html_css_ru' : 'html_css_kz';
        }
        
        // Сохраняем для всех типов курсов (чтобы точно сработало)
        courseTypes.forEach(courseType => {
            if (type === 'quiz') {
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'true');
                // Также для разных уровней сложности
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_easy`, 'true');
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_medium`, 'true');
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_hard`, 'true');
            } else if (type === 'practice') {
                localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
            }
        });
        
        // Сохраняем в lastOpenedCourse и currentCourseType
        localStorage.setItem(`${localStorage.getItem('lastOpenedCourse') || 'html'}_lesson${lessonNum}_${type}`, 'true');
        localStorage.setItem(`${localStorage.getItem('currentCourseType') || currentCourseType}_lesson${lessonNum}_${type}`, 'true');
        
        console.log(`🔥 Урок ${lessonNum} тип ${type} отмечен как выполненный для всех курсов`);
    }
    
    /**
     * Обновляет состояние всех кнопок завершения на странице
     */
    function updateAllButtons() {
        console.log('🔥 Обновление состояния всех кнопок завершения');
        
        // Находим все кнопки завершения урока
        const completeButtons = document.querySelectorAll('.complete-btn, .complete-lesson-btn');
        completeButtons.forEach(button => {
            // Активируем кнопку
            button.classList.remove('disabled');
            button.disabled = false;
            
            // Удаляем сообщения об ошибках
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => {
                msg.style.display = 'none';
            });
            
            console.log(`🔥 Кнопка завершения урока активирована`);
        });
        
        // Если кнопок нет, ищем их по тексту
        if (completeButtons.length === 0) {
            const allButtons = document.querySelectorAll('button');
            for (const button of allButtons) {
                if (button.textContent.includes('Сабақ аяқталды') || 
                    button.textContent.includes('Урок завершен') ||
                    button.textContent.includes('Сабақты аяқтау') ||
                    button.textContent.includes('Завершить урок')) {
                    
                    button.classList.remove('disabled');
                    button.disabled = false;
                    
                    console.log(`🔥 Найдена и активирована кнопка завершения урока по тексту`);
                }
            }
        }
    }
    
    // Добавляем прямые стили для отображения сообщений
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            color: #28a745;
            font-weight: bold;
            background-color: #d4edda;
            padding: 10px;
            border-radius: 5px;
            border-left: 5px solid #28a745;
            margin: 10px 0;
        }
    `;
    document.head.appendChild(style);
    
    // Запускаем обновление кнопок через некоторое время после загрузки страницы
    setTimeout(updateAllButtons, 1000);
    
    console.log('🔥 ПРЯМОЕ ИСПРАВЛЕНИЕ СИСТЕМЫ УСПЕШНО ИНИЦИАЛИЗИРОВАНО 🔥');


function getPracticeAnswer(lessonNum) {
        // Определяем тип курса
        const currentPath = window.location.pathname.toLowerCase();
        let courseType = '';
        
        if (currentPath.includes('python')) {
            courseType = currentPath.includes('rus') ? 'python_ru' : 'python_kz';
        } else if (currentPath.includes('database')) {
            courseType = currentPath.includes('rus') ? 'database_ru' : 'database_kz';
        } else {
            courseType = currentPath.includes('rus') ? 'html_css_ru' : 'html_css_kz';
        }
        
        // Проверяем данные по разным источникам
        let quizPracticeData;
        
        // Проверяем все возможные источники данных
        if (courseType === 'html_css_kz' && window.htmlCssKzQuizPractice) {
            quizPracticeData = window.htmlCssKzQuizPractice;
        } else if (courseType === 'html_css_ru' && window.htmlCssRuQuizPractice) {
            quizPracticeData = window.htmlCssRuQuizPractice;
        } else if (courseType === 'python_kz' && window.pythonKzQuizPractice) {
            quizPracticeData = window.pythonKzQuizPractice;
        } else if (courseType === 'python_ru' && window.pythonRuQuizPractice) {
            quizPracticeData = window.pythonRuQuizPractice;
        } else if (courseType === 'database_kz' && window.databaseKzQuizPractice) {
            quizPracticeData = window.databaseKzQuizPractice;
        } else if (courseType === 'database_ru' && window.databaseRuQuizPractice) {
            quizPracticeData = window.databaseRuQuizPractice;
        }
        
        if (!quizPracticeData || !quizPracticeData[lessonNum] || !quizPracticeData[lessonNum].practiceAnswer) {
            console.error(`Ответ на практику для урока ${lessonNum} курса ${courseType} не найден`);
            return null;
        }
        
        return quizPracticeData[lessonNum].practiceAnswer;
    }
    
    /**
     * Сравнивает код пользователя с правильным ответом
     */
    function compareCodes(userCode, correctCode) {
        if (!userCode || !correctCode) {
            return false;
        }
        
        // Нормализация кода для сравнения
        function normalizeCode(code) {
            return code
                .replace(/\r\n/g, '\n')    // Windows line endings
                .replace(/\s+/g, ' ')     // Multiple spaces to single space
                .replace(/;\s*/g, ';')    // Remove spaces after semicolons
                .replace(/{\s*/g, '{')    // Remove spaces after opening braces
                .replace(/\s*}/g, '}')    // Remove spaces before closing braces
                .replace(/['"]/g, '"')   // Normalize all quotes
                .toLowerCase()            // Case-insensitive
                .trim();
        }
        
        const normalizedUserCode = normalizeCode(userCode);
        const normalizedCorrectCode = normalizeCode(correctCode);
        
        // Точное совпадение
        if (normalizedUserCode === normalizedCorrectCode) {
            return true;
        }
        
        // Проверяем наличие ключевых строк
        const keyLines = correctCode.split('\n').filter(line => line.trim() !== '');
        let correctLinesCount = 0;
        
        for (const line of keyLines) {
            const normalizedLine = normalizeCode(line);
            if (normalizedUserCode.includes(normalizedLine)) {
                correctLinesCount++;
            }
        }
        
        // Если больше 70% строк совпадает, считаем ответ правильным
        if (correctLinesCount / keyLines.length > 0.7) {
            return true;
        }
        
        // Специальные проверки для разных форматов кода
        
        // Для HTML и CSS
        if (correctCode.includes('{') && correctCode.includes('}') && userCode.includes('{') && userCode.includes('}')) {
            // Считаем CSS свойства в коде
            const correctProperties = correctCode.match(/[\w-]+\s*:\s*[^;}]+/g) || [];
            const userProperties = userCode.match(/[\w-]+\s*:\s*[^;}]+/g) || [];
            
            let matchingProperties = 0;
            for (const prop of correctProperties) {
                const normalizedProp = normalizeCode(prop);
                for (const userProp of userProperties) {
                    const normalizedUserProp = normalizeCode(userProp);
                    if (normalizedUserProp === normalizedProp) {
                        matchingProperties++;
                        break;
                    }
                }
            }
            
            // Если больше 60% CSS свойств совпадает
            if (correctProperties.length > 0 && matchingProperties / correctProperties.length > 0.6) {
                return true;
            }
        }
        
        // Для Python
        if (correctCode.includes('print(') && userCode.includes('print(')) {
            const correctPrints = correctCode.match(/print\([^)]*\)/g) || [];
            const userPrints = userCode.match(/print\([^)]*\)/g) || [];
            
            // Если есть хотя бы 1 print-вызов и количество совпадает
            if (correctPrints.length > 0 && userPrints.length === correctPrints.length) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * Функция для определения текущего номера урока
     */
    function getCurrentLessonNumber() {
        // Проверяем URL параметры
        const urlParams = new URLSearchParams(window.location.search);
        const lessonParam = urlParams.get('lesson');
        if (lessonParam) {
            return parseInt(lessonParam);
        }
        
        // Проверяем lastOpenedLesson в localStorage
        const savedLessonNum = localStorage.getItem('lastOpenedLesson');
        if (savedLessonNum) {
            return parseInt(savedLessonNum);
        }
        
        // Ищем в элементах с атрибутом data-lesson
        const dataLessonElements = document.querySelectorAll('[data-lesson]');
        if (dataLessonElements.length > 0) {
            const firstLessonNum = dataLessonElements[0].getAttribute('data-lesson');
            if (firstLessonNum && !isNaN(parseInt(firstLessonNum))) {
                return parseInt(firstLessonNum);
            }
        }
        
        // По умолчанию возвращаем 1
        return 1;
    }
    
    /**
     * Сохраняет результат теста или практики
     */
    function markAsCompleted(lessonNum, type) {
        // Получаем все возможные типы курсов
        const courseTypes = [
            'html_css_kz', 'html_css_ru', 
            'python_kz', 'python_ru', 
            'database_kz', 'database_ru',
            'html', 'python', 'database'
        ];
        
        // Получаем текущий тип курса
        const currentPath = window.location.pathname.toLowerCase();
        let currentCourseType = '';
        
        if (currentPath.includes('python')) {
            currentCourseType = currentPath.includes('rus') ? 'python_ru' : 'python_kz';
        } else if (currentPath.includes('database')) {
            currentCourseType = currentPath.includes('rus') ? 'database_ru' : 'database_kz';
        } else {
            currentCourseType = currentPath.includes('rus') ? 'html_css_ru' : 'html_css_kz';
        }
        
        // Сохраняем для всех типов курсов (чтобы точно сработало)
        courseTypes.forEach(courseType => {
            if (type === 'quiz') {
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'true');
                // Также для разных уровней сложности
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_easy`, 'true');
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_medium`, 'true');
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_hard`, 'true');
            } else if (type === 'practice') {
                localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
            }
        });
        
        // Сохраняем в lastOpenedCourse и currentCourseType
        localStorage.setItem(`${localStorage.getItem('lastOpenedCourse') || 'html'}_lesson${lessonNum}_${type}`, 'true');
        localStorage.setItem(`${localStorage.getItem('currentCourseType') || currentCourseType}_lesson${lessonNum}_${type}`, 'true');
        
        console.log(`🔥 Урок ${lessonNum} тип ${type} отмечен как выполненный для всех курсов`);
    }
    
    /**
     * Обновляет состояние всех кнопок завершения на странице
     */
    function updateAllButtons() {
        console.log('🔥 Обновление состояния всех кнопок завершения');
        
        // Находим все кнопки завершения урока
        const completeButtons = document.querySelectorAll('.complete-btn, .complete-lesson-btn');
        completeButtons.forEach(button => {
            // Активируем кнопку
            button.classList.remove('disabled');
            button.disabled = false;
            
            // Удаляем сообщения об ошибках
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => {
                msg.style.display = 'none';
            });
            
            console.log(`🔥 Кнопка завершения урока активирована`);
        });
        
        // Если кнопок нет, ищем их по тексту
        if (completeButtons.length === 0) {
            const allButtons = document.querySelectorAll('button');
            for (const button of allButtons) {
                if (button.textContent.includes('Сабақ аяқталды') || 
                    button.textContent.includes('Урок завершен') ||
                    button.textContent.includes('Сабақты аяқтау') ||
                    button.textContent.includes('Завершить урок')) {
                    
                    button.classList.remove('disabled');
                    button.disabled = false;
                    
                    console.log(`🔥 Найдена и активирована кнопка завершения урока по тексту`);
                }
            }
        }
    }
    
    // Добавляем прямые стили для отображения сообщений
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            color: #28a745;
            font-weight: bold;
            background-color: #d4edda;
            padding: 10px;
            border-radius: 5px;
            border-left: 5px solid #28a745;
            margin: 10px 0;
        }
    `;
    document.head.appendChild(style);
    
    // Запускаем обновление кнопок через некоторое время после загрузки страницы
    setTimeout(updateAllButtons, 1000);
    
    console.log('🔥 ПРЯМОЕ ИСПРАВЛЕНИЕ СИСТЕМЫ УСПЕШНО ИНИЦИАЛИЗИРОВАНО 🔥');


function compareCodes(userCode, correctCode) {
        if (!userCode || !correctCode) {
            return false;
        }
        
        // Нормализация кода для сравнения
        function normalizeCode(code) {
            return code
                .replace(/\r\n/g, '\n')    // Windows line endings
                .replace(/\s+/g, ' ')     // Multiple spaces to single space
                .replace(/;\s*/g, ';')    // Remove spaces after semicolons
                .replace(/{\s*/g, '{')    // Remove spaces after opening braces
                .replace(/\s*}/g, '}')    // Remove spaces before closing braces
                .replace(/['"]/g, '"')   // Normalize all quotes
                .toLowerCase()            // Case-insensitive
                .trim();
        }
        
        const normalizedUserCode = normalizeCode(userCode);
        const normalizedCorrectCode = normalizeCode(correctCode);
        
        // Точное совпадение
        if (normalizedUserCode === normalizedCorrectCode) {
            return true;
        }
        
        // Проверяем наличие ключевых строк
        const keyLines = correctCode.split('\n').filter(line => line.trim() !== '');
        let correctLinesCount = 0;
        
        for (const line of keyLines) {
            const normalizedLine = normalizeCode(line);
            if (normalizedUserCode.includes(normalizedLine)) {
                correctLinesCount++;
            }
        }
        
        // Если больше 70% строк совпадает, считаем ответ правильным
        if (correctLinesCount / keyLines.length > 0.7) {
            return true;
        }
        
        // Специальные проверки для разных форматов кода
        
        // Для HTML и CSS
        if (correctCode.includes('{') && correctCode.includes('}') && userCode.includes('{') && userCode.includes('}')) {
            // Считаем CSS свойства в коде
            const correctProperties = correctCode.match(/[\w-]+\s*:\s*[^;}]+/g) || [];
            const userProperties = userCode.match(/[\w-]+\s*:\s*[^;}]+/g) || [];
            
            let matchingProperties = 0;
            for (const prop of correctProperties) {
                const normalizedProp = normalizeCode(prop);
                for (const userProp of userProperties) {
                    const normalizedUserProp = normalizeCode(userProp);
                    if (normalizedUserProp === normalizedProp) {
                        matchingProperties++;
                        break;
                    }
                }
            }
            
            // Если больше 60% CSS свойств совпадает
            if (correctProperties.length > 0 && matchingProperties / correctProperties.length > 0.6) {
                return true;
            }
        }
        
        // Для Python
        if (correctCode.includes('print(') && userCode.includes('print(')) {
            const correctPrints = correctCode.match(/print\([^)]*\)/g) || [];
            const userPrints = userCode.match(/print\([^)]*\)/g) || [];
            
            // Если есть хотя бы 1 print-вызов и количество совпадает
            if (correctPrints.length > 0 && userPrints.length === correctPrints.length) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * Функция для определения текущего номера урока
     */
    function getCurrentLessonNumber() {
        // Проверяем URL параметры
        const urlParams = new URLSearchParams(window.location.search);
        const lessonParam = urlParams.get('lesson');
        if (lessonParam) {
            return parseInt(lessonParam);
        }
        
        // Проверяем lastOpenedLesson в localStorage
        const savedLessonNum = localStorage.getItem('lastOpenedLesson');
        if (savedLessonNum) {
            return parseInt(savedLessonNum);
        }
        
        // Ищем в элементах с атрибутом data-lesson
        const dataLessonElements = document.querySelectorAll('[data-lesson]');
        if (dataLessonElements.length > 0) {
            const firstLessonNum = dataLessonElements[0].getAttribute('data-lesson');
            if (firstLessonNum && !isNaN(parseInt(firstLessonNum))) {
                return parseInt(firstLessonNum);
            }
        }
        
        // По умолчанию возвращаем 1
        return 1;
    }
    
    /**
     * Сохраняет результат теста или практики
     */
    function markAsCompleted(lessonNum, type) {
        // Получаем все возможные типы курсов
        const courseTypes = [
            'html_css_kz', 'html_css_ru', 
            'python_kz', 'python_ru', 
            'database_kz', 'database_ru',
            'html', 'python', 'database'
        ];
        
        // Получаем текущий тип курса
        const currentPath = window.location.pathname.toLowerCase();
        let currentCourseType = '';
        
        if (currentPath.includes('python')) {
            currentCourseType = currentPath.includes('rus') ? 'python_ru' : 'python_kz';
        } else if (currentPath.includes('database')) {
            currentCourseType = currentPath.includes('rus') ? 'database_ru' : 'database_kz';
        } else {
            currentCourseType = currentPath.includes('rus') ? 'html_css_ru' : 'html_css_kz';
        }
        
        // Сохраняем для всех типов курсов (чтобы точно сработало)
        courseTypes.forEach(courseType => {
            if (type === 'quiz') {
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'true');
                // Также для разных уровней сложности
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_easy`, 'true');
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_medium`, 'true');
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_hard`, 'true');
            } else if (type === 'practice') {
                localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
            }
        });
        
        // Сохраняем в lastOpenedCourse и currentCourseType
        localStorage.setItem(`${localStorage.getItem('lastOpenedCourse') || 'html'}_lesson${lessonNum}_${type}`, 'true');
        localStorage.setItem(`${localStorage.getItem('currentCourseType') || currentCourseType}_lesson${lessonNum}_${type}`, 'true');
        
        console.log(`🔥 Урок ${lessonNum} тип ${type} отмечен как выполненный для всех курсов`);
    }
    
    /**
     * Обновляет состояние всех кнопок завершения на странице
     */
    function updateAllButtons() {
        console.log('🔥 Обновление состояния всех кнопок завершения');
        
        // Находим все кнопки завершения урока
        const completeButtons = document.querySelectorAll('.complete-btn, .complete-lesson-btn');
        completeButtons.forEach(button => {
            // Активируем кнопку
            button.classList.remove('disabled');
            button.disabled = false;
            
            // Удаляем сообщения об ошибках
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => {
                msg.style.display = 'none';
            });
            
            console.log(`🔥 Кнопка завершения урока активирована`);
        });
        
        // Если кнопок нет, ищем их по тексту
        if (completeButtons.length === 0) {
            const allButtons = document.querySelectorAll('button');
            for (const button of allButtons) {
                if (button.textContent.includes('Сабақ аяқталды') || 
                    button.textContent.includes('Урок завершен') ||
                    button.textContent.includes('Сабақты аяқтау') ||
                    button.textContent.includes('Завершить урок')) {
                    
                    button.classList.remove('disabled');
                    button.disabled = false;
                    
                    console.log(`🔥 Найдена и активирована кнопка завершения урока по тексту`);
                }
            }
        }
    }
    
    // Добавляем прямые стили для отображения сообщений
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            color: #28a745;
            font-weight: bold;
            background-color: #d4edda;
            padding: 10px;
            border-radius: 5px;
            border-left: 5px solid #28a745;
            margin: 10px 0;
        }
    `;
    document.head.appendChild(style);
    
    // Запускаем обновление кнопок через некоторое время после загрузки страницы
    setTimeout(updateAllButtons, 1000);
    
    console.log('🔥 ПРЯМОЕ ИСПРАВЛЕНИЕ СИСТЕМЫ УСПЕШНО ИНИЦИАЛИЗИРОВАНО 🔥');


function markAsCompleted(lessonNum, type) {
        // Получаем все возможные типы курсов
        const courseTypes = [
            'html_css_kz', 'html_css_ru', 
            'python_kz', 'python_ru', 
            'database_kz', 'database_ru',
            'html', 'python', 'database'
        ];
        
        // Получаем текущий тип курса
        const currentPath = window.location.pathname.toLowerCase();
        let currentCourseType = '';
        
        if (currentPath.includes('python')) {
            currentCourseType = currentPath.includes('rus') ? 'python_ru' : 'python_kz';
        } else if (currentPath.includes('database')) {
            currentCourseType = currentPath.includes('rus') ? 'database_ru' : 'database_kz';
        } else {
            currentCourseType = currentPath.includes('rus') ? 'html_css_ru' : 'html_css_kz';
        }
        
        // Сохраняем для всех типов курсов (чтобы точно сработало)
        courseTypes.forEach(courseType => {
            if (type === 'quiz') {
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'true');
                // Также для разных уровней сложности
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_easy`, 'true');
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_medium`, 'true');
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_hard`, 'true');
            } else if (type === 'practice') {
                localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
            }
        });
        
        // Сохраняем в lastOpenedCourse и currentCourseType
        localStorage.setItem(`${localStorage.getItem('lastOpenedCourse') || 'html'}_lesson${lessonNum}_${type}`, 'true');
        localStorage.setItem(`${localStorage.getItem('currentCourseType') || currentCourseType}_lesson${lessonNum}_${type}`, 'true');
        
        console.log(`🔥 Урок ${lessonNum} тип ${type} отмечен как выполненный для всех курсов`);
    }
    
    /**
     * Обновляет состояние всех кнопок завершения на странице
     */
    function updateAllButtons() {
        console.log('🔥 Обновление состояния всех кнопок завершения');
        
        // Находим все кнопки завершения урока
        const completeButtons = document.querySelectorAll('.complete-btn, .complete-lesson-btn');
        completeButtons.forEach(button => {
            // Активируем кнопку
            button.classList.remove('disabled');
            button.disabled = false;
            
            // Удаляем сообщения об ошибках
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => {
                msg.style.display = 'none';
            });
            
            console.log(`🔥 Кнопка завершения урока активирована`);
        });
        
        // Если кнопок нет, ищем их по тексту
        if (completeButtons.length === 0) {
            const allButtons = document.querySelectorAll('button');
            for (const button of allButtons) {
                if (button.textContent.includes('Сабақ аяқталды') || 
                    button.textContent.includes('Урок завершен') ||
                    button.textContent.includes('Сабақты аяқтау') ||
                    button.textContent.includes('Завершить урок')) {
                    
                    button.classList.remove('disabled');
                    button.disabled = false;
                    
                    console.log(`🔥 Найдена и активирована кнопка завершения урока по тексту`);
                }
            }
        }
    }
    
    // Добавляем прямые стили для отображения сообщений
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            color: #28a745;
            font-weight: bold;
            background-color: #d4edda;
            padding: 10px;
            border-radius: 5px;
            border-left: 5px solid #28a745;
            margin: 10px 0;
        }
    `;
    document.head.appendChild(style);
    
    // Запускаем обновление кнопок через некоторое время после загрузки страницы
    setTimeout(updateAllButtons, 1000);
    
    console.log('🔥 ПРЯМОЕ ИСПРАВЛЕНИЕ СИСТЕМЫ УСПЕШНО ИНИЦИАЛИЗИРОВАНО 🔥');
    window.checkQuiz = checkQuiz;
    window.checkPractice = checkPractice;
    window.completeLesson = completeLesson;
    window.isLessonCompleted = isLessonCompleted;
    window.checkQuizLevel = checkQuizLevel;
    window.isLessonCompleted = isLessonCompleted;
    window.getCurrentLessonNumber = getCurrentLessonNumber;
    window.checkPractice = checkPractice;
