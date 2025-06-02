/**
 * Исправление для системы тестов и практик
 * Решает три оставшиеся проблемы:
 * 1. Обратная связь для практики
 * 2. Отображение 15 тестов для урока 9
 * 3. Кнопка завершения урока
 */

// Дополнительные стили
function addExtraStyles() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    /* Стили для мультиуровневого теста */
    .level-container {
      margin-bottom: 30px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 15px;
      background-color: rgba(255, 255, 255, 0.5);
    }
    
    .level-container h4 {
      color: #2646FA;
      margin-top: 0;
      margin-bottom: 15px;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 8px;
    }
    
    /* Улучшенная кнопка для проверки */
    .quiz-submit-btn, .practice-submit-btn, .practice-run-btn {
      margin-right: 10px;
      position: relative;
      overflow: hidden;
    }
    
    .quiz-submit-btn::after, .practice-submit-btn::after, .practice-run-btn::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      transition: left 0.3s ease;
    }
    
    .quiz-submit-btn:hover::after, .practice-submit-btn:hover::after, .practice-run-btn:hover::after {
      left: 0;
    }
    
    /* Стили для кнопки завершения урока */
    .complete-btn {
      display: inline-block;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
      margin-top: 20px;
    }
    
    .complete-btn:hover {
      background-color: #3e8e41;
      transform: translateY(-2px);
    }
    
    .complete-btn:active {
      transform: translateY(0);
    }
    
    .complete-btn.disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    
    /* Стили для успешного выполнения */
    .lesson-success {
      padding: 15px;
      background-color: rgba(76, 175, 80, 0.1);
      border-left: 4px solid #4CAF50;
      margin: 20px 0;
      border-radius: 0 4px 4px 0;
    }
  `;
  
  document.head.appendChild(styleElement);
}

// Улучшенный обработчик практики
function enhancedCheckPractice(lessonNum, courseType) {
  console.log(`Улучшенная проверка практики для урока ${lessonNum}, курс: ${courseType}`);

  // Определяем тип курса, если не передан
  if (!courseType) {
    courseType = window.detectActualCourseType ? window.detectActualCourseType() : 'html_css_kz';
  }
  
  // Получаем данные курса
  let quizPracticeData;
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
  
  // Проверяем наличие данных
  if (!quizPracticeData || !quizPracticeData[lessonNum]) {
    console.error(`Практика для урока ${lessonNum} курса ${courseType} не найдена`);
    return;
  }
  
  const lessonData = quizPracticeData[lessonNum];
  
  // Проверяем наличие практики
  if (!lessonData.practiceAnswer) {
    console.error(`Ответ на практику не найден для урока ${lessonNum} курса ${courseType}`);
    return;
  }
  
  // Получаем введенный код
  const practiceContainer = document.querySelector(`.practice-container[data-lesson="${lessonNum}"]`);
  if (!practiceContainer) {
    console.error(`Контейнер практики для урока ${lessonNum} не найден`);
    return;
  }
  
  const codeInput = practiceContainer.querySelector('.practice-code');
  if (!codeInput) {
    console.error(`Поле ввода кода не найдено`);
    return;
  }
  
  const userCode = codeInput.value.trim();
  const correctCode = lessonData.practiceAnswer.trim();
  
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
                     userCode.split('\n').length === correctCode.split('\n').length &&
                     userCode.split('\n').every((line, i) => {
                       const correctLine = correctCode.split('\n')[i];
                       // Игнорировать пробелы и комментарии при сравнении
                       return line.trim().replace(/\s+/g, ' ') === correctLine.trim().replace(/\s+/g, ' ') || 
                              (line.trim().startsWith('#') && correctLine.trim().startsWith('#'));
                     });
  
  // HTML сравнение
  const isHtmlMatch = courseType.includes('html') && 
                    normalizedUserCode.replace(/["']/g, '') === normalizedCorrectCode.replace(/["']/g, '');
  
  // Решение считается правильным, если выполняется любое из условий
  const isCorrect = isExactMatch || isPythonMatch || isHtmlMatch;
  
  // Получаем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = userData.language || 'kk';
  
  // Находим место для результата
  const resultContainer = practiceContainer.querySelector('.practice-result');
  if (!resultContainer) {
    console.error(`Контейнер для результата не найден`);
    return;
  }
  
  // Показываем результат
  if (isCorrect) {
    resultContainer.innerHTML = `<div class="success-message">
      ✅ ${lang === 'kk' ? 'Практикалық тапсырма дұрыс орындалды!' : 'Практическое задание выполнено верно!'}</div>`;
    
    // Сохраняем результат
    localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
    
    // Обновляем состояние кнопки завершения урока
    if (typeof window.updateCompleteButton === 'function') {
      window.updateCompleteButton(lessonNum);
    } else if (typeof window.isLessonCompleted === 'function') {
      const completed = window.isLessonCompleted(lessonNum);
      const completeBtn = document.querySelector('.complete-btn');
      if (completeBtn) {
        if (completed) {
          completeBtn.classList.remove('disabled');
          completeBtn.disabled = false;
        } else {
          completeBtn.classList.add('disabled');
          completeBtn.disabled = true;
        }
      }
    }
  } else {
    resultContainer.innerHTML = `<div class="error-message">
      ❌ ${lang === 'kk' ? 'Кодта қателер бар. Қайталап көріңіз.' : 'В коде есть ошибки. Попробуйте еще раз.'}</div>`;
  }
}

// Исправление для отображения многоуровневых тестов в 9 уроке
function fixLevelTests() {
  const lessonId = localStorage.getItem('lastOpenedLesson');
  if (lessonId !== '9') return;
  
  const courseType = window.detectActualCourseType ? window.detectActualCourseType() : null;
  if (!courseType) return;
  
  // Проверяем наличие контейнера для урока
  const lessonContent = document.getElementById('lesson-content');
  if (!lessonContent) return;
  
  console.log(`Исправление многоуровневых тестов для урока 9, курс: ${courseType}`);
  
  // Получаем данные курса
  let quizPracticeData;
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
  
  // Проверяем наличие данных
  if (!quizPracticeData || !quizPracticeData[9]) return;
  
  const lessonData = quizPracticeData[9];
  
  // Проверяем наличие многоуровневых тестов
  if (!lessonData.quizQuestionsEasy || !lessonData.quizAnswersEasy) return;
  
  // Проверяем, есть ли уже контейнер с уровнями
  if (document.querySelector('.level-container')) return;
  
  console.log('Добавляем многоуровневые тесты для урока 9');
  
  // Создаем контейнер для многоуровневых тестов
  const multiLevelContainer = document.createElement('div');
  multiLevelContainer.className = 'quiz-section';
  
  const heading = document.createElement('h3');
  heading.textContent = courseType.includes('ru') ? 'Многоуровневый тест' : 'Көп деңгейлі тест';
  multiLevelContainer.appendChild(heading);
  
  // Массив уровней
  const levels = [
    { name: courseType.includes('ru') ? 'Легкий уровень' : 'Жеңіл деңгей', 
      questions: lessonData.quizQuestionsEasy, 
      answers: lessonData.quizAnswersEasy, 
      level: 'easy' },
    { name: courseType.includes('ru') ? 'Средний уровень' : 'Орташа деңгей', 
      questions: lessonData.quizQuestionsMedium, 
      answers: lessonData.quizAnswersMedium, 
      level: 'medium' },
    { name: courseType.includes('ru') ? 'Сложный уровень' : 'Күрделі деңгей', 
      questions: lessonData.quizQuestionsHard, 
      answers: lessonData.quizAnswersHard, 
      level: 'hard' }
  ];
  
  // Создаем тесты для каждого уровня
  levels.forEach(level => {
    if (!level.questions) return;
    
    const levelContainer = document.createElement('div');
    levelContainer.className = 'level-container';
    
    const levelHeading = document.createElement('h4');
    levelHeading.textContent = level.name;
    levelContainer.appendChild(levelHeading);
    
    const quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';
    quizContainer.setAttribute('data-lesson', '9');
    quizContainer.setAttribute('data-level', level.level);
    
    // Добавляем вопросы
    level.questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'quiz-question';
      
      const questionP = document.createElement('p');
      questionP.className = 'question-text';
      questionP.textContent = `${index + 1}. ${question.text}`;
      questionDiv.appendChild(questionP);
      
      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'quiz-options';
      
      question.options.forEach((option, optIndex) => {
        const optionValue = String.fromCharCode(97 + optIndex); // a, b, c, d
        
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `q${level.level}_${index + 1}`;
        radio.id = `q${level.level}_${index + 1}_${optionValue}`;
        radio.value = optionValue;
        
        const label = document.createElement('label');
        label.htmlFor = radio.id;
        label.textContent = option;
        
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        optionsDiv.appendChild(optionDiv);
      });
      
      questionDiv.appendChild(optionsDiv);
      quizContainer.appendChild(questionDiv);
    });
    
    // Добавляем кнопку проверки
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'quiz-buttons';
    
    const submitButton = document.createElement('button');
    submitButton.className = 'quiz-submit-btn';
    submitButton.textContent = courseType.includes('ru') ? 'Проверить' : 'Тексеру';
    submitButton.setAttribute('data-lesson', '9');
    submitButton.setAttribute('data-level', level.level);
    
    submitButton.addEventListener('click', function() {
      if (typeof window.checkQuizLevel === 'function') {
        window.checkQuizLevel(9, level.level, courseType);
      } else {
        console.error('Функция checkQuizLevel не найдена');
      }
    });
    
    buttonDiv.appendChild(submitButton);
    quizContainer.appendChild(buttonDiv);
    
    // Добавляем место для результата
    const resultDiv = document.createElement('div');
    resultDiv.className = 'quiz-result';
    quizContainer.appendChild(resultDiv);
    
    levelContainer.appendChild(quizContainer);
    multiLevelContainer.appendChild(levelContainer);
  });
  
  // Добавляем контейнер к уроку
  const existingQuizSection = lessonContent.querySelector('.quiz-section');
  if (existingQuizSection) {
    lessonContent.replaceChild(multiLevelContainer, existingQuizSection);
  } else {
    // Ищем место для вставки
    const lessonActions = lessonContent.querySelector('.lesson-actions');
    if (lessonActions) {
      lessonContent.insertBefore(multiLevelContainer, lessonActions);
    } else {
      lessonContent.appendChild(multiLevelContainer);
    }
  }
}

// Исправление для кнопки завершения урока
function fixCompleteButton() {
  const lessonId = localStorage.getItem('lastOpenedLesson');
  if (!lessonId) return;
  
  const lessonNum = parseInt(lessonId);
  const courseType = window.detectActualCourseType ? window.detectActualCourseType() : null;
  if (!courseType) return;
  
  console.log(`Исправление кнопки завершения для урока ${lessonNum}, курс: ${courseType}`);
  
  // Проверяем наличие контейнера для урока
  const lessonContent = document.getElementById('lesson-content');
  if (!lessonContent) return;
  
  // Ищем существующую кнопку
  let completeBtn = document.querySelector('.complete-btn');
  
  // Если кнопки нет, создаем ее
  if (!completeBtn) {
    const lessonActions = lessonContent.querySelector('.lesson-actions');
    if (!lessonActions) {
      // Создаем контейнер для кнопки
      const actionsContainer = document.createElement('div');
      actionsContainer.className = 'lesson-actions';
      
      completeBtn = document.createElement('button');
      completeBtn.className = 'complete-btn';
      completeBtn.textContent = courseType.includes('ru') ? 'Урок завершен' : 'Сабақ аяқталды';
      completeBtn.setAttribute('data-lesson', lessonNum);
      
      actionsContainer.appendChild(completeBtn);
      lessonContent.appendChild(actionsContainer);
    } else {
      completeBtn = document.createElement('button');
      completeBtn.className = 'complete-btn';
      completeBtn.textContent = courseType.includes('ru') ? 'Урок завершен' : 'Сабақ аяқталды';
      completeBtn.setAttribute('data-lesson', lessonNum);
      
      lessonActions.appendChild(completeBtn);
    }
  }
  
  // Проверяем, завершен ли урок
  let completed = false;
  
  // Урок 9 - особый случай
  if (lessonNum === 9) {
    const easyCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz_easy`) === 'true';
    const mediumCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz_medium`) === 'true';
    const hardCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz_hard`) === 'true';
    const practiceCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_practice`) === 'true';
    
    // Если все уровни и практика завершены
    completed = easyCompleted && mediumCompleted && hardCompleted && practiceCompleted;
  } else if (lessonNum % 2 === 0) {
    // Четные уроки - тесты
    completed = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz`) === 'true';
  } else {
    // Нечетные уроки - практика
    completed = localStorage.getItem(`${courseType}_lesson${lessonNum}_practice`) === 'true';
  }
  
  // Обновляем состояние кнопки
  if (completed) {
    completeBtn.classList.remove('disabled');
    completeBtn.disabled = false;
  } else {
    completeBtn.classList.add('disabled');
    completeBtn.disabled = true;
  }
  
  // Добавляем обработчик события
  completeBtn.onclick = function() {
    if (!completed) {
      const resultMessage = document.getElementById('result-message') || document.createElement('div');
      resultMessage.id = 'result-message';
      
      // Получаем текущий язык
      const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const lang = userData.language || (courseType.includes('ru') ? 'ru' : 'kk');
      
      resultMessage.innerHTML = `<p class="error-message">
        ❌ ${lang === 'kk' ? 'Сабақты аяқтау үшін барлық тапсырмаларды орындаңыз!' : 'Для завершения урока выполните все задания!'}</p>`;
      
      if (!resultMessage.parentNode) {
        const lessonActions = document.querySelector('.lesson-actions');
        if (lessonActions) {
          lessonActions.appendChild(resultMessage);
        }
      }
      
      return;
    }
    
    // Вызываем функцию завершения урока
    if (typeof window.completeLesson === 'function') {
      window.completeLesson(lessonNum);
    } else {
      console.error('Функция completeLesson не найдена');
      
      // Отмечаем урок как завершенный в localStorage
      const completedLessons = JSON.parse(localStorage.getItem(`${courseType}_completedLessons`) || '[]');
      if (!completedLessons.includes(lessonNum)) {
        completedLessons.push(lessonNum);
        localStorage.setItem(`${courseType}_completedLessons`, JSON.stringify(completedLessons));
      }
      
      // Показываем сообщение об успешном завершении
      const resultMessage = document.getElementById('result-message') || document.createElement('div');
      resultMessage.id = 'result-message';
      
      // Получаем текущий язык
      const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const lang = userData.language || (courseType.includes('ru') ? 'ru' : 'kk');
      
      resultMessage.innerHTML = `<div class="success-message">
        ✅ ${lang === 'kk' ? 'Сабақ сәтті аяқталды!' : 'Урок успешно завершен!'}</div>`;
      
      if (!resultMessage.parentNode) {
        const lessonActions = document.querySelector('.lesson-actions');
        if (lessonActions) {
          lessonActions.appendChild(resultMessage);
        }
      }
    }
  };
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  console.log('Инициализация фиксов для тестов и практик');
  
  // Добавляем стили
  addExtraStyles();
  
  // Подменяем оригинальную функцию проверки практики
  if (typeof window.checkPractice === 'function') {
    const originalCheckPractice = window.checkPractice;
    window.checkPractice = function(lessonNum, courseType) {
      try {
        enhancedCheckPractice(lessonNum, courseType);
      } catch (error) {
        console.error('Ошибка в улучшенной проверке практики:', error);
        originalCheckPractice(lessonNum, courseType);
      }
    };
  }
  
  // Применяем фиксы
  setTimeout(() => {
    fixLevelTests();
    fixCompleteButton();
  }, 1000);
  
  // Отслеживаем изменение урока
  document.addEventListener('lessonLoaded', function() {
    console.log('Событие загрузки урока обнаружено, применяем фиксы');
    
    setTimeout(() => {
      fixLevelTests();
      fixCompleteButton();
    }, 1000);
  });
});
