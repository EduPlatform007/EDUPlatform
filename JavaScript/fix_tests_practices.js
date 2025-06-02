/**
 * Простое решение для отображения тестов и практик
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Запуск простого исправления для тестов и практик');
  
  // Загружаем текущий урок
  const currentLessonId = getCurrentLessonId();
  
  if (currentLessonId) {
    console.log(`Загрузка контента для урока ${currentLessonId}`);
    setTimeout(function() {
      loadProperContent(currentLessonId);
    }, 500);
  }
  
  // Отслеживаем переключение между уроками
  setupLessonSwitching();
});

// Определяем текущий урок
function getCurrentLessonId() {
  // Из локального хранилища
  const storedId = localStorage.getItem('lastOpenedLesson');
  if (storedId && !isNaN(parseInt(storedId))) {
    return parseInt(storedId);
  }
  
  // Из активного элемента
  const activeLesson = document.querySelector('.lesson-list li.active');
  if (activeLesson && activeLesson.getAttribute('data-lesson')) {
    return parseInt(activeLesson.getAttribute('data-lesson'));
  }
  
  // По умолчанию - первый урок
  return 1;
}

// Настройка переключения между уроками
function setupLessonSwitching() {
  // Находим все элементы списка уроков
  document.querySelectorAll('.lesson-list li').forEach(item => {
    item.addEventListener('click', function() {
      // Получаем номер урока
      const lessonId = this.getAttribute('data-lesson');
      if (!lessonId) return;
      
      console.log(`Клик на уроке ${lessonId}`);
      
      // Сохраняем номер урока
      localStorage.setItem('lastOpenedLesson', lessonId);
      
      // Загружаем контент для урока с небольшой задержкой
      setTimeout(function() {
        loadProperContent(parseInt(lessonId));
      }, 1000);
    });
  });
}

// Загрузка правильного контента
function loadProperContent(lessonId) {
  console.log(`Загрузка контента для урока ${lessonId}`);
  
  // Определяем курс
  const courseInfo = detectCourseType();
  console.log(`Обнаружен курс: ${courseInfo.type}, язык: ${courseInfo.language}`);
  
  // Очищаем старый контент
  cleanupExistingContent();
  
  // Проверяем данные из разных источников
  checkAndLoadData(courseInfo, lessonId);
}

// Определяем тип курса
function detectCourseType() {
  // Проверяем метатеги
  const metaTag = document.querySelector('meta[name="course-type"]');
  const langTag = document.querySelector('meta[name="course-language"]');
  
  if (metaTag && langTag) {
    return {
      type: metaTag.getAttribute('content'),
      language: langTag.getAttribute('content')
    };
  }
  
  // Определяем по URL
  const url = window.location.href.toLowerCase();
  let type, language;
  
  if (url.includes('python')) {
    type = 'python';
  } else if (url.includes('database')) {
    type = 'database';
  } else {
    type = 'html_css';
  }
  
  language = url.includes('rus') ? 'ru' : 'kz';
  
  return { type, language };
}

// Очистка существующего контента
function cleanupExistingContent() {
  console.log('Очистка существующего контента');
  
  // Удаляем контейнеры тестов и практик
  document.querySelectorAll('.quiz-container, .practice-container').forEach(el => {
    el.remove();
  });
  
  // Удаляем разделы
  document.querySelectorAll('.quiz-section, .practice-section').forEach(el => {
    el.remove();
  });
}

// Проверка и загрузка данных
function checkAndLoadData(courseInfo, lessonId) {
  console.log(`Поиск данных для курса ${courseInfo.type}_${courseInfo.language}, урок ${lessonId}`);
  
  // Проверяем разные варианты имен переменных с данными
  const possibleVars = [
    `${courseInfo.type}RuQuizPractice`,
    `${courseInfo.type}_${courseInfo.language}_quiz_practice`,
    `${courseInfo.type}${courseInfo.language}QuizPractice`,
    `${courseInfo.type}${courseInfo.language.toUpperCase()}QuizPractice`
  ];
  
  for (const varName of possibleVars) {
    if (window[varName] && window[varName][lessonId]) {
      console.log(`Найдены данные в переменной ${varName}`);
      processLessonData(window[varName][lessonId], lessonId, courseInfo);
      return;
    }
  }
  
  // Если данные не найдены, попробуем загрузить файл
  const scriptSrc = `JavaScript/couses_data/${courseInfo.type}_${courseInfo.language}_quiz_practice.js`;
  console.log(`Попытка загрузить скрипт: ${scriptSrc}`);
  
  const script = document.createElement('script');
  script.src = scriptSrc;
  script.onload = function() {
    console.log('Скрипт загружен, проверяем данные снова');
    
    // Проверяем снова после загрузки
    for (const varName of possibleVars) {
      if (window[varName] && window[varName][lessonId]) {
        console.log(`Найдены данные в переменной ${varName} после загрузки скрипта`);
        processLessonData(window[varName][lessonId], lessonId, courseInfo);
        return;
      }
    }
    
    console.error(`Не удалось найти данные для урока ${lessonId} даже после загрузки скрипта`);
  };
  
  script.onerror = function() {
    console.error(`Ошибка загрузки скрипта ${scriptSrc}`);
    
    // Пробуем другой вариант имени файла
    const altScriptSrc = `JavaScript/couses_data/${courseInfo.type}_${courseInfo.language}_all_data.js`;
    console.log(`Попытка загрузить альтернативный скрипт: ${altScriptSrc}`);
    
    const altScript = document.createElement('script');
    altScript.src = altScriptSrc;
    altScript.onload = function() {
      console.log('Альтернативный скрипт загружен, проверяем данные снова');
      
      // Проверяем снова после загрузки
      for (const varName of possibleVars) {
        if (window[varName] && window[varName][lessonId]) {
          console.log(`Найдены данные в переменной ${varName} после загрузки альтернативного скрипта`);
          processLessonData(window[varName][lessonId], lessonId, courseInfo);
          return;
        }
      }
      
      console.error(`Не удалось найти данные для урока ${lessonId} даже после загрузки альтернативного скрипта`);
    };
    
    document.body.appendChild(altScript);
  };
  
  document.body.appendChild(script);
}

// Обработка данных урока
function processLessonData(lessonData, lessonId, courseInfo) {
  console.log('Данные урока:', lessonData);
  
  const contentDiv = document.createElement('div');
  contentDiv.id = 'quiz-practice-container';
  
  // Находим место для вставки
  const targetElement = document.querySelector('#lesson-content') || document.querySelector('#loaded-lesson') || document.body;
  
  // Правило: четные уроки - тест, нечетные - практика, исключение для урока 9 Python
  if (lessonId % 2 === 0) {
    // Чётный урок - показываем тест
    if (lessonData.quizQuestions) {
      console.log('Добавляем тест');
      const quizSection = createQuizSection(lessonData, lessonId, courseInfo);
      contentDiv.appendChild(quizSection);
    } else if (lessonData.practiceTask) {
      console.log('Нет теста, добавляем практику');
      const practiceSection = createPracticeSection(lessonData, lessonId, courseInfo);
      contentDiv.appendChild(practiceSection);
    }
  } else if (lessonId === 9 && courseInfo.type === 'python') {
    // Особый случай для урока 9 курса Python
    if (lessonData.quizQuestionsEasy) {
      console.log('Добавляем многоуровневый тест для урока 9');
      const quizSection = createMultiLevelQuizSection(lessonData, lessonId, courseInfo);
      contentDiv.appendChild(quizSection);
    }
    
    if (lessonData.practiceTask) {
      console.log('Добавляем практику для урока 9');
      const practiceSection = createPracticeSection(lessonData, lessonId, courseInfo);
      contentDiv.appendChild(practiceSection);
    }
  } else {
    // Нечётный урок - показываем практику
    if (lessonData.practiceTask) {
      console.log('Добавляем практику');
      const practiceSection = createPracticeSection(lessonData, lessonId, courseInfo);
      contentDiv.appendChild(practiceSection);
    } else if (lessonData.quizQuestions) {
      console.log('Нет практики, добавляем тест');
      const quizSection = createQuizSection(lessonData, lessonId, courseInfo);
      contentDiv.appendChild(quizSection);
    }
  }
  
  // Удаляем старый контейнер, если он существует
  const oldContainer = document.getElementById('quiz-practice-container');
  if (oldContainer) {
    oldContainer.remove();
  }
  
  // Добавляем новый контейнер перед кнопкой завершения
  const lessonActions = document.querySelector('.lesson-actions');
  if (lessonActions) {
    targetElement.insertBefore(contentDiv, lessonActions);
  } else {
    targetElement.appendChild(contentDiv);
  }
  
  // Восстанавливаем кнопку завершения урока
  ensureCompletionButton();
  
  // Добавляем стили
  addStyles();
}

// Создание раздела теста
function createQuizSection(lessonData, lessonId, courseInfo) {
  const section = document.createElement('section');
  section.className = 'quiz-section';
  
  const title = document.createElement('h3');
  title.textContent = 'Тест';
  section.appendChild(title);
  
  const quizContainer = document.createElement('div');
  quizContainer.className = 'quiz-container';
  quizContainer.setAttribute('data-lesson', lessonId);
  
  lessonData.quizQuestions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    
    const questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.textContent = `${index + 1}. ${question.text}`;
    questionDiv.appendChild(questionText);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'quiz-options';
    
    question.options.forEach((option, optIndex) => {
      const optionValue = String.fromCharCode(97 + optIndex); // a, b, c, d
      
      const optionDiv = document.createElement('div');
      optionDiv.className = 'quiz-option';
      
      const optionInput = document.createElement('input');
      optionInput.type = 'radio';
      optionInput.name = `q${index + 1}`;
      optionInput.id = `q${index + 1}_${optionValue}`;
      optionInput.value = optionValue;
      
      const optionLabel = document.createElement('label');
      optionLabel.htmlFor = optionInput.id;
      optionLabel.textContent = option;
      
      optionDiv.appendChild(optionInput);
      optionDiv.appendChild(optionLabel);
      optionsDiv.appendChild(optionDiv);
    });
    
    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
  });
  
  const submitButton = document.createElement('button');
  submitButton.className = 'quiz-submit-btn';
  submitButton.setAttribute('data-lesson', lessonId);
  submitButton.textContent = 'Проверить';
  quizContainer.appendChild(submitButton);
  
  const resultDiv = document.createElement('div');
  resultDiv.className = 'quiz-result';
  quizContainer.appendChild(resultDiv);
  
  submitButton.addEventListener('click', function() {
    if (typeof window.checkQuiz === 'function') {
      window.checkQuiz(lessonId, courseInfo.type);
    } else {
      console.error('Функция checkQuiz не найдена');
      resultDiv.textContent = 'Ошибка: Функция проверки не найдена';
    }
  });
  
  section.appendChild(quizContainer);
  return section;
}

// Создание многоуровневого теста (для урока 9 Python)
function createMultiLevelQuizSection(lessonData, lessonId, courseInfo) {
  const section = document.createElement('section');
  section.className = 'quiz-section';
  
  const title = document.createElement('h3');
  title.textContent = 'Тест (несколько уровней)';
  section.appendChild(title);
  
  const levels = [
    { name: 'Легкий уровень', questions: lessonData.quizQuestionsEasy, answers: lessonData.quizAnswersEasy, level: 1 },
    { name: 'Средний уровень', questions: lessonData.quizQuestionsMedium, answers: lessonData.quizAnswersMedium, level: 2 },
    { name: 'Сложный уровень', questions: lessonData.quizQuestionsHard, answers: lessonData.quizAnswersHard, level: 3 }
  ];
  
  levels.forEach(level => {
    const levelContainer = document.createElement('div');
    levelContainer.className = 'level-container';
    
    const levelTitle = document.createElement('h4');
    levelTitle.textContent = level.name;
    levelContainer.appendChild(levelTitle);
    
    const quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';
    quizContainer.setAttribute('data-lesson', lessonId);
    quizContainer.setAttribute('data-level', level.level);
    
    level.questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'quiz-question';
      
      const questionText = document.createElement('p');
      questionText.className = 'question-text';
      questionText.textContent = `${index + 1}. ${question.text}`;
      questionDiv.appendChild(questionText);
      
      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'quiz-options';
      
      question.options.forEach((option, optIndex) => {
        const optionValue = String.fromCharCode(97 + optIndex); // a, b, c, d
        
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `q${level.level}_${index + 1}`;
        optionInput.id = `q${level.level}_${index + 1}_${optionValue}`;
        optionInput.value = optionValue;
        
        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = optionInput.id;
        optionLabel.textContent = option;
        
        optionDiv.appendChild(optionInput);
        optionDiv.appendChild(optionLabel);
        optionsDiv.appendChild(optionDiv);
      });
      
      questionDiv.appendChild(optionsDiv);
      quizContainer.appendChild(questionDiv);
    });
    
    const submitButton = document.createElement('button');
    submitButton.className = 'quiz-submit-btn';
    submitButton.setAttribute('data-lesson', lessonId);
    submitButton.setAttribute('data-level', level.level);
    submitButton.textContent = 'Проверить';
    quizContainer.appendChild(submitButton);
    
    const resultDiv = document.createElement('div');
    resultDiv.className = 'quiz-result';
    resultDiv.setAttribute('data-level', level.level);
    quizContainer.appendChild(resultDiv);
    
    submitButton.addEventListener('click', function() {
      if (typeof window.checkQuiz === 'function') {
        window.checkQuiz(lessonId, courseInfo.type, level.level);
      } else {
        console.error('Функция checkQuiz не найдена');
        resultDiv.textContent = 'Ошибка: Функция проверки не найдена';
      }
    });
    
    levelContainer.appendChild(quizContainer);
    section.appendChild(levelContainer);
  });
  
  return section;
}

// Создание раздела практики
function createPracticeSection(lessonData, lessonId, courseInfo) {
  const section = document.createElement('section');
  section.className = 'practice-section';
  
  const title = document.createElement('h3');
  title.textContent = 'Практическое задание';
  section.appendChild(title);
  
  const practiceContainer = document.createElement('div');
  practiceContainer.className = 'practice-container';
  practiceContainer.setAttribute('data-lesson', lessonId);
  
  const taskDiv = document.createElement('div');
  taskDiv.className = 'practice-task';
  taskDiv.innerHTML = lessonData.practiceTask;
  practiceContainer.appendChild(taskDiv);
  
  const textarea = document.createElement('textarea');
  textarea.className = 'practice-code';
  textarea.setAttribute('placeholder', 'Введите ваш код здесь...');
  textarea.setAttribute('rows', '10');
  practiceContainer.appendChild(textarea);
  
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'practice-buttons';
  
  const submitButton = document.createElement('button');
  submitButton.className = 'practice-submit-btn';
  submitButton.setAttribute('data-lesson', lessonId);
  submitButton.textContent = 'Проверить';
  buttonsDiv.appendChild(submitButton);
  
  const runButton = document.createElement('button');
  runButton.className = 'practice-run-btn';
  runButton.setAttribute('data-lesson', lessonId);
  runButton.textContent = 'Запустить';
  buttonsDiv.appendChild(runButton);
  
  practiceContainer.appendChild(buttonsDiv);
  
  const resultDiv = document.createElement('div');
  resultDiv.className = 'practice-result';
  practiceContainer.appendChild(resultDiv);
  
  submitButton.addEventListener('click', function() {
    if (typeof window.checkPractice === 'function') {
      window.checkPractice(lessonId, courseInfo.type);
    } else {
      console.error('Функция checkPractice не найдена');
      resultDiv.textContent = 'Ошибка: Функция проверки не найдена';
    }
  });
  
  runButton.addEventListener('click', function() {
    if (typeof window.runCode === 'function') {
      window.runCode(lessonId, courseInfo.type);
    } else {
      console.error('Функция runCode не найдена');
      resultDiv.textContent = 'Ошибка: Функция запуска кода не найдена';
    }
  });
  
  section.appendChild(practiceContainer);
  return section;
}

// Восстановление кнопки завершения урока
function ensureCompletionButton() {
  const lessonActions = document.querySelector('.lesson-actions');
  if (!lessonActions) return;
  
  if (!lessonActions.querySelector('.complete-btn')) {
    console.log('Восстановление кнопки завершения урока');
    
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Урок завершен';
    
    completeBtn.addEventListener('click', function() {
      if (typeof window.completeLesson === 'function') {
        window.completeLesson();
      } else {
        console.error('Функция completeLesson не найдена');
      }
    });
    
    lessonActions.appendChild(completeBtn);
  }
}

// Добавление стилей
function addStyles() {
  if (document.getElementById('quiz-practice-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'quiz-practice-styles';
  style.textContent = `
    .quiz-container, .practice-container {
      background-color: var(--bg-secondary, #f5f5f5);
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .level-container {
      margin-bottom: 30px;
    }
    .level-container h4 {
      margin-top: 20px;
      color: #2646FA;
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
    .quiz-submit-btn, .practice-submit-btn, .practice-run-btn {
      background-color: #2646FA;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
      margin: 15px 10px 15px 0;
    }
    .quiz-submit-btn:hover, .practice-submit-btn:hover, .practice-run-btn:hover {
      background-color: #1e3ad8;
    }
    .practice-buttons {
      display: flex;
      gap: 10px;
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
  `;
  
  document.head.appendChild(style);
}
