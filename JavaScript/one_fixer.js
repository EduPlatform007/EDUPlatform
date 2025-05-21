/**
 * ЕДИНЫЙ скрипт для исправления тестов и практик на всех курсах
 * Блокирует все другие скрипты и обеспечивает правильное отображение
 */

// Немедленно выполняем блокировку других скриптов
(function() {
  // Блокируем forceLoadQuizPractice из других скриптов
  window._originalForceLoadQuizPractice = window.forceLoadQuizPractice;
  window.forceLoadQuizPractice = function() {
    console.log("Предыдущая версия forceLoadQuizPractice заблокирована");
    return false;
  };
  
  // Блокируем insertQuiz из других скриптов
  window._originalInsertQuiz = window.insertQuiz;
  window.insertQuiz = function() {
    console.log("Предыдущая версия insertQuiz заблокирована");
    return false;
  };
  
  // Блокируем insertPractice из других скриптов
  window._originalInsertPractice = window.insertPractice;
  window.insertPractice = function() {
    console.log("Предыдущая версия insertPractice заблокирована");
    return false;
  };
  
  console.log("🔒 Другие скрипты фиксации заблокированы");
})();

// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log("🚀 Запуск ЕДИНОГО исправления для тестов и практик");
  
  // Сохраняем оригинальную функцию loadLesson
  window._originalLoadLesson = window.loadLesson;
  
  // Перехватываем функцию загрузки урока
  if (typeof window.loadLesson === 'function') {
    window.loadLesson = function(lessonId, courseType) {
      console.log(`Загрузка урока ${lessonId}`);
      
      // Вызываем оригинальную функцию
      if (window._originalLoadLesson) {
        window._originalLoadLesson.apply(this, arguments);
      }
      
      // Загружаем правильные тесты и практики с задержкой
      setTimeout(() => {
        loadCorrectContent(lessonId);
      }, 500);
    };
  }
  
  // Настройка обработчиков событий
  setupEventListeners();
  
  // Проверяем и загружаем стили
  addStyles();
  
  // Загружаем текущий урок, если он уже открыт
  const currentLessonId = getCurrentLessonId();
  if (currentLessonId) {
    console.log(`При загрузке страницы обнаружен активный урок: ${currentLessonId}`);
    setTimeout(() => {
      loadCorrectContent(currentLessonId);
    }, 800);
  }
});

// Получение текущего ID урока
function getCurrentLessonId() {
  // Попытка получить ID из локального хранилища
  const storedId = localStorage.getItem('lastOpenedLesson');
  if (storedId) {
    return parseInt(storedId);
  }
  
  // Попытка получить ID из активного элемента списка уроков
  const activeLesson = document.querySelector('.lesson-list li.active');
  if (activeLesson && activeLesson.getAttribute('data-lesson')) {
    return parseInt(activeLesson.getAttribute('data-lesson'));
  }
  
  // По умолчанию возвращаем 1
  return 1;
}

// Настройка обработчиков событий
function setupEventListeners() {
  // Обработчик события загрузки урока
  document.addEventListener('lessonLoaded', function(event) {
    const lessonId = event.detail?.lessonId || getCurrentLessonId();
    console.log(`Событие lessonLoaded: урок ${lessonId}`);
    
    setTimeout(() => {
      loadCorrectContent(lessonId);
      // Фиксим кнопки и обратную связь
      fixQuizButtons();
      fixPracticeFeedback();
      fixCompleteButton();
    }, 500);
  });
  
  // Обработчик клика на элементы списка уроков
  document.querySelectorAll('.lesson-list li').forEach(item => {
    item.addEventListener('click', function() {
      const lessonId = this.getAttribute('data-lesson');
      if (lessonId) {
        console.log(`Клик на элементе списка уроков: ${lessonId}`);
        localStorage.setItem('lastOpenedLesson', lessonId);
      }
    });
  });
}

// Определение информации о текущем курсе
function detectCourseInfo() {
  let courseType, courseLanguage;
  
  // Проверяем наличие метатегов
  const courseTypeMeta = document.querySelector('meta[name="course-type"]');
  const courseLangMeta = document.querySelector('meta[name="course-language"]');
  
  if (courseTypeMeta && courseLangMeta) {
    courseType = courseTypeMeta.getAttribute('content');
    courseLanguage = courseLangMeta.getAttribute('content');
    console.log(`Из метатегов: курс ${courseType}, язык ${courseLanguage}`);
  } else {
    // Определяем тип курса по URL
    const path = window.location.pathname.toLowerCase();
    
    if (path.includes('python')) {
      courseType = 'python';
    } else if (path.includes('database')) {
      courseType = 'database';
    } else {
      courseType = 'html_css';
    }
    
    // Определяем язык курса
    courseLanguage = path.includes('rus') ? 'ru' : 'kz';
    console.log(`Из URL: курс ${courseType}, язык ${courseLanguage}`);
  }
  
  return {
    type: courseType,
    language: courseLanguage,
    fullName: `${courseType}_${courseLanguage}`
  };
}

// Основная функция загрузки правильного контента
function loadCorrectContent(lessonId) {
  // Очищаем все предыдущие элементы
  cleanupAllElements();
  
  // Восстанавливаем кнопку завершения урока
  ensureCompletionButton();
  
  // Определяем информацию о курсе
  const courseInfo = detectCourseInfo();
  
  // Загружаем данные курса
  loadCourseData(courseInfo, function(courseData) {
    if (!courseData || !courseData[lessonId]) {
      console.error(`Данные для урока ${lessonId} не найдены`);
      return;
    }
    
    const lessonData = courseData[lessonId];
    console.log(`Загружены данные для урока ${lessonId}, курс ${courseInfo.fullName}`);
    
    // Стандартное правило: чётные уроки - тесты, нечётные - практика
    if (lessonId % 2 === 0) {
      // Чётный урок - показываем тест
      if (lessonData.quizQuestions && lessonData.quizAnswers) {
        console.log(`Урок ${lessonId}: добавление теста`);
        insertQuiz(lessonId, courseInfo, lessonData);
      } else if (lessonData.practiceTask && lessonData.practiceAnswer) {
        console.log(`Урок ${lessonId}: нет теста, добавление практики`);
        insertPractice(lessonId, courseInfo, lessonData);
      }
    } else if (lessonId === 9 && courseInfo.type === 'python') {
      // Особый случай: урок 9 в Python курсе
      console.log(`Урок 9 Python: добавление многоуровневого теста и практики`);
      if (lessonData.quizQuestionsEasy) {
        insertMultiLevelQuiz(lessonId, courseInfo, lessonData);
      }
      if (lessonData.practiceTask) {
        insertPractice(lessonId, courseInfo, lessonData);
      }
    } else {
      // Нечётный урок - показываем практику
      if (lessonData.practiceTask && lessonData.practiceAnswer) {
        console.log(`Урок ${lessonId}: добавление практики`);
        insertPractice(lessonId, courseInfo, lessonData);
      } else if (lessonData.quizQuestions && lessonData.quizAnswers) {
        console.log(`Урок ${lessonId}: нет практики, добавление теста`);
        insertQuiz(lessonId, courseInfo, lessonData);
      }
    }
  });
}

// Загрузка данных курса
function loadCourseData(courseInfo, callback) {
  console.log(`Загрузка данных для курса: ${courseInfo.fullName}`);
  
  // Возможные имена переменных для данных
  const variableOptions = [
    `${courseInfo.type}${courseInfo.language.toUpperCase()}QuizPractice`,
    `${courseInfo.type}RuQuizPractice`,
    `${courseInfo.type}${courseInfo.language}QuizPractice`,
    `${courseInfo.fullName}QuizPractice`
  ];
  
  // Проверяем, загружены ли уже данные
  for (const varName of variableOptions) {
    if (window[varName]) {
      console.log(`Найдены загруженные данные: ${varName}`);
      callback(window[varName]);
      return;
    }
  }
  
  // Если данные не загружены, пробуем загрузить файл
  const fileName = `${courseInfo.type}_${courseInfo.language}_quiz_practice.js`;
  const script = document.createElement('script');
  script.src = `JavaScript/couses_data/${fileName}`;
  
  script.onload = function() {
    console.log(`Файл ${fileName} загружен`);
    
    // Проверяем, загрузились ли данные
    for (const varName of variableOptions) {
      if (window[varName]) {
        console.log(`Найдены данные в переменной ${varName}`);
        callback(window[varName]);
        return;
      }
    }
    
    console.error(`Не удалось найти данные после загрузки файла ${fileName}`);
    callback(null);
  };
  
  script.onerror = function() {
    console.error(`Ошибка загрузки файла ${fileName}`);
    callback(null);
  };
  
  document.body.appendChild(script);
}

// Очистка всех элементов тестов и практик
function cleanupAllElements() {
  // Удаляем все контейнеры тестов
  document.querySelectorAll('.quiz-container').forEach(el => {
    el.remove();
  });
  
  // Удаляем все контейнеры практик
  document.querySelectorAll('.practice-container').forEach(el => {
    el.remove();
  });
  
  // Удаляем все секции тестов и практик
  document.querySelectorAll('.quiz-section, .practice-section').forEach(el => {
    el.remove();
  });
  
  // Удаляем все контейнеры уровней
  document.querySelectorAll('.level-container').forEach(el => {
    el.remove();
  });
  
  // Удаляем основной контейнер для тестов и практик
  const container = document.getElementById('quiz-practice-container');
  if (container) {
    container.innerHTML = '';
  }
}

// Восстановление кнопки завершения урока
function ensureCompletionButton() {
  const lessonActions = document.querySelector('.lesson-actions');
  if (!lessonActions) return;
  
  // Проверяем наличие кнопки
  if (!lessonActions.querySelector('.complete-btn')) {
    console.log('Восстановление кнопки завершения урока');
    
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Урок завершен';
    
    // Добавляем обработчик
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

// Вставка теста
function insertQuiz(lessonId, courseInfo, lessonData) {
  // Находим или создаем контейнер для контента
  const container = getOrCreateContentContainer();
  
  // Создаем секцию для теста
  const section = document.createElement('section');
  section.className = 'quiz-section';
  
  // Заголовок
  const title = document.createElement('h3');
  title.textContent = 'Тест';
  section.appendChild(title);
  
  // Контейнер для теста
  const quizContainer = document.createElement('div');
  quizContainer.className = 'quiz-container';
  quizContainer.setAttribute('data-lesson', lessonId);
  
  // Добавляем вопросы
  lessonData.quizQuestions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    
    // Текст вопроса
    const questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.textContent = `${index + 1}. ${question.text}`;
    questionDiv.appendChild(questionText);
    
    // Варианты ответов
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
  
  // Кнопка проверки
  const submitButton = document.createElement('button');
  submitButton.className = 'quiz-submit-btn';
  submitButton.setAttribute('data-lesson', lessonId);
  submitButton.textContent = 'Проверить';
  quizContainer.appendChild(submitButton);
  
  // Место для результата
  const resultDiv = document.createElement('div');
  resultDiv.className = 'quiz-result';
  quizContainer.appendChild(resultDiv);
  
  // Добавляем обработчик для кнопки
  submitButton.addEventListener('click', function() {
    if (typeof window.checkQuiz === 'function') {
      window.checkQuiz(lessonId, courseInfo.type);
    } else {
      console.error('Функция checkQuiz не найдена');
      alert('Функция проверки теста недоступна');
    }
  });
  
  section.appendChild(quizContainer);
  container.appendChild(section);
}

// Вставка многоуровневого теста (для урока 9 Python)
function insertMultiLevelQuiz(lessonId, courseInfo, lessonData) {
  // Находим или создаем контейнер для контента
  const container = getOrCreateContentContainer();
  
  // Создаем секцию для теста
  const section = document.createElement('section');
  section.className = 'quiz-section';
  
  // Заголовок
  const title = document.createElement('h3');
  title.textContent = 'Многоуровневый тест';
  section.appendChild(title);
  
  // Создаем контейнеры для каждого уровня
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
    
    // Контейнер для теста
    const quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';
    quizContainer.setAttribute('data-lesson', lessonId);
    quizContainer.setAttribute('data-level', level.level);
    
    // Добавляем вопросы
    level.questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'quiz-question';
      
      // Текст вопроса
      const questionText = document.createElement('p');
      questionText.className = 'question-text';
      questionText.textContent = `${index + 1}. ${question.text}`;
      questionDiv.appendChild(questionText);
      
      // Варианты ответов
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
    
    // Кнопка проверки
    const submitButton = document.createElement('button');
    submitButton.className = 'quiz-submit-btn';
    submitButton.setAttribute('data-lesson', lessonId);
    submitButton.setAttribute('data-level', level.level);
    submitButton.textContent = 'Проверить';
    quizContainer.appendChild(submitButton);
    
    // Место для результата
    const resultDiv = document.createElement('div');
    resultDiv.className = 'quiz-result';
    resultDiv.setAttribute('data-level', level.level);
    quizContainer.appendChild(resultDiv);
    
    // Добавляем обработчик для кнопки
    submitButton.addEventListener('click', function() {
      if (typeof window.checkQuiz === 'function') {
        window.checkQuiz(lessonId, courseInfo.type, level.level);
      } else {
        console.error('Функция checkQuiz не найдена');
        alert('Функция проверки теста недоступна');
      }
    });
    
    levelContainer.appendChild(quizContainer);
    section.appendChild(levelContainer);
  });
  
  container.appendChild(section);
}

// Вставка практического задания
function insertPractice(lessonId, courseInfo, lessonData) {
  // Находим или создаем контейнер для контента
  const container = getOrCreateContentContainer();
  
  // Создаем секцию для практики
  const section = document.createElement('section');
  section.className = 'practice-section';
  
  // Заголовок
  const title = document.createElement('h3');
  title.textContent = 'Практическое задание';
  section.appendChild(title);
  
  // Контейнер для практики
  const practiceContainer = document.createElement('div');
  practiceContainer.className = 'practice-container';
  practiceContainer.setAttribute('data-lesson', lessonId);
  
  // Задание
  const taskDiv = document.createElement('div');
  taskDiv.className = 'practice-task';
  taskDiv.innerHTML = lessonData.practiceTask;
  practiceContainer.appendChild(taskDiv);
  
  // Поле для ввода кода
  const textarea = document.createElement('textarea');
  textarea.className = 'practice-code';
  textarea.setAttribute('placeholder', 'Введите ваш код здесь...');
  textarea.setAttribute('rows', '10');
  practiceContainer.appendChild(textarea);
  
  // Кнопки управления
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'practice-buttons';
  
  // Кнопка проверки
  const submitButton = document.createElement('button');
  submitButton.className = 'practice-submit-btn';
  submitButton.setAttribute('data-lesson', lessonId);
  submitButton.textContent = 'Проверить';
  buttonsDiv.appendChild(submitButton);
  
  // Кнопка запуска (если нужна)
  const runButton = document.createElement('button');
  runButton.className = 'practice-run-btn';
  runButton.setAttribute('data-lesson', lessonId);
  runButton.textContent = 'Запустить';
  buttonsDiv.appendChild(runButton);
  
  practiceContainer.appendChild(buttonsDiv);
  
  // Место для результата
  const resultDiv = document.createElement('div');
  resultDiv.className = 'practice-result';
  practiceContainer.appendChild(resultDiv);
  
  // Добавляем обработчики для кнопок
  submitButton.addEventListener('click', function() {
    if (typeof window.checkPractice === 'function') {
      window.checkPractice(lessonId, courseInfo.type);
    } else {
      console.error('Функция checkPractice не найдена');
      alert('Функция проверки практики недоступна');
    }
  });
  
  runButton.addEventListener('click', function() {
    if (typeof window.runCode === 'function') {
      window.runCode(lessonId, courseInfo.type);
    } else {
      console.error('Функция runCode не найдена');
      alert('Функция запуска кода недоступна');
    }
  });
  
  section.appendChild(practiceContainer);
  container.appendChild(section);
}

// Получение или создание контейнера для контента
function getOrCreateContentContainer() {
  let container = document.getElementById('quiz-practice-container');
  
  if (!container) {
    container = document.createElement('div');
    container.id = 'quiz-practice-container';
    
    // Пытаемся найти место для вставки
    const lessonData = document.getElementById('lesson-data');
    const lessonContent = document.getElementById('lesson-content');
    const lessonActions = document.querySelector('.lesson-actions');
    
    if (lessonData) {
      lessonData.appendChild(container);
    } else if (lessonActions && lessonContent) {
      lessonContent.insertBefore(container, lessonActions);
    } else if (lessonContent) {
      lessonContent.appendChild(container);
    } else {
      // Если не нашли подходящее место, добавляем перед концом body
      document.body.appendChild(container);
    }
  }
  
  return container;
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

// Функция для исправления кнопок теста
function fixQuizButtons() {
  console.log('🔧 Фиксим кнопки теста...');
  
  // Находим все кнопки проверки теста
  const checkButtons = document.querySelectorAll('.quiz-container button, .check-btn');
  
  checkButtons.forEach(button => {
    // Активируем кнопку, если она отключена
    if (button.disabled) {
      button.disabled = false;
      console.log('✅ Кнопка теста активирована');
    }
    
    // Переопределяем обработчик кнопки, сохраняя старый
    const originalOnclick = button.onclick;
    
    button.onclick = function(event) {
      // Вызываем оригинальный обработчик
      if (typeof originalOnclick === 'function') {
        originalOnclick.call(this, event);
      }
      
      // Активируем кнопку после проверки
      setTimeout(() => {
        if (this.disabled) {
          this.disabled = false;
          console.log('✅ Кнопка теста активирована после проверки');
        }
      }, 100);
    };
  });
}

// Функция для исправления обратной связи для практических заданий
function fixPracticeFeedback() {
  console.log('🔧 Фиксим обратную связь для практики...');
  
  // Находим все контейнеры практик
  const practiceContainers = document.querySelectorAll('.practice-container');
  
  practiceContainers.forEach(container => {
    const lessonId = container.getAttribute('data-lesson');
    if (!lessonId) return;
    
    // Проверяем наличие контейнера для результата
    let resultDiv = container.querySelector('.practice-result');
    if (!resultDiv) {
      // Создаем контейнер для результата
      resultDiv = document.createElement('div');
      resultDiv.className = 'practice-result';
      container.appendChild(resultDiv);
      console.log(`✅ Создан контейнер результата для практики в уроке ${lessonId}`);
    }
    
    // Находим текстовое поле для кода
    const codeInput = container.querySelector('textarea, .practice-code');
    if (!codeInput) {
      console.log(`❌ Текстовое поле для кода не найдено в уроке ${lessonId}`);
      return;
    }
    
    // Находим кнопку проверки
    const checkButton = container.querySelector('button, .practice-submit-btn');
    if (checkButton) {
      // Переопределяем обработчик
      const originalOnclick = checkButton.onclick;
      
      checkButton.onclick = function(event) {
        // Определяем тип курса
        let courseType;
        if (window.location.pathname.includes('python_course')) {
          courseType = window.location.pathname.includes('rus') ? 'python_ru' : 'python_kz';
        } else if (window.location.pathname.includes('database_course')) {
          courseType = window.location.pathname.includes('rus') ? 'database_ru' : 'database_kz';
        } else {
          courseType = window.location.pathname.includes('rus') ? 'html_css_ru' : 'html_css_kz';
        }
        
        // Вызываем оригинальный обработчик
        if (typeof originalOnclick === 'function') {
          originalOnclick.call(this, event);
        }
        
        // Если результат пустой, пытаемся сами проверить код
        setTimeout(() => {
          if (!resultDiv.innerHTML.trim()) {
            if (window.checkPractice) {
              window.checkPractice(lessonId, courseType);
              console.log(`✅ Выполнена проверка практики для урока ${lessonId}`);
            }
          }
        }, 100);
      };
      
      console.log(`✅ Обработчик кнопки проверки практики переопределен в уроке ${lessonId}`);
    }
  });
}

// Функция для исправления кнопки завершения урока
function fixCompleteButton() {
  console.log('🔧 Фиксим кнопку завершения урока...');
  
  // Находим кнопку завершения урока
  const completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
  if (!completeBtn) {
    console.log('❌ Кнопка завершения урока не найдена');
    return;
  }
  
  // Получаем номер урока
  const lessonId = completeBtn.getAttribute('data-lesson') || getCurrentLessonId();
  
  // Определяем тип курса
  let courseType;
  if (window.location.pathname.includes('python_course')) {
    courseType = window.location.pathname.includes('rus') ? 'python_ru' : 'python_kz';
  } else if (window.location.pathname.includes('database_course')) {
    courseType = window.location.pathname.includes('rus') ? 'database_ru' : 'database_kz';
  } else {
    courseType = window.location.pathname.includes('rus') ? 'html_css_ru' : 'html_css_kz';
  }
  
  // Сохраняем тип курса
  localStorage.setItem('currentCourseType', courseType);
  localStorage.setItem('lastOpenedCourse', courseType);
  
  // Активируем кнопку, если она отключена
  if (completeBtn.disabled || completeBtn.classList.contains('disabled')) {
    // Проверяем, завершен ли урок
    if (window.isLessonCompleted && window.isLessonCompleted(lessonId)) {
      completeBtn.disabled = false;
      completeBtn.classList.remove('disabled');
      console.log(`✅ Кнопка завершения урока ${lessonId} активирована`);
    }
  }
  
  // Переопределяем обработчик
  const originalOnclick = completeBtn.onclick;
  
  completeBtn.onclick = function(event) {
    // Вызываем оригинальный обработчик
    if (typeof originalOnclick === 'function') {
      originalOnclick.call(this, event);
    } else if (window.completeLesson) {
      window.completeLesson(lessonId);
    }
    console.log(`✅ Завершен урок ${lessonId}`);
  };
  
  console.log(`✅ Обработчик кнопки завершения урока переопределен для урока ${lessonId}`);
}
