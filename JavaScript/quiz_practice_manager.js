/**
 * Менеджер тестов и практических заданий
 * Обеспечивает правильное отображение тестов и практик для каждого урока
 */

// Инициализация при загрузке документа
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Запуск менеджера тестов и практик');
  
  // Сохраняем оригинальные функции
  const originalLoadLesson = window.loadLesson;
  
  // Заменяем функцию загрузки урока
  if (typeof window.loadLesson === 'function') {
    window.loadLesson = function(lessonId, courseType) {
      console.log(`Загрузка урока ${lessonId}, тип курса: ${courseType}`);
      
      // Вызываем оригинальную функцию
      if (originalLoadLesson) {
        originalLoadLesson.apply(this, arguments);
      }
      
      // С небольшой задержкой загружаем правильные тесты и практики
      setTimeout(() => {
        loadCorrectTestsAndPractices(lessonId);
      }, 500);
    };
  }
  
  // Настройка обработчиков событий
  setupEventListeners();
  
  // Проверяем, если урок уже загружен
  const currentLessonId = getCurrentLessonId();
  if (currentLessonId) {
    console.log(`При загрузке страницы обнаружен активный урок: ${currentLessonId}`);
    setTimeout(() => {
      loadCorrectTestsAndPractices(currentLessonId);
    }, 1000);
  }
});

// Получаем текущий ID урока
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
  
  // Попытка получить ID из загруженного контента урока
  const loadedLesson = document.getElementById('loaded-lesson');
  if (loadedLesson && loadedLesson.getAttribute('data-lesson')) {
    return parseInt(loadedLesson.getAttribute('data-lesson'));
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
      loadCorrectTestsAndPractices(lessonId);
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

// Загрузка правильных тестов и практик для урока
function loadCorrectTestsAndPractices(lessonId) {
  lessonId = parseInt(lessonId);
  console.log(`Загрузка тестов и практик для урока ${lessonId}`);
  
  // Очищаем предыдущие элементы
  cleanupPreviousElements(lessonId);
  
  // Восстанавливаем кнопку завершения урока, если нужно
  ensureCompletionButton();
  
  // Загружаем данные курса
  window.courseDataLoader.loadCourseData(function(result) {
    if (!result || !result.data) {
      console.error('Не удалось загрузить данные курса');
      return;
    }
    
    const courseData = result.data;
    const courseInfo = result.courseInfo;
    console.log(`Данные курса загружены: ${result.variable}`);
    
    // Проверяем, есть ли данные для этого урока
    if (!courseData[lessonId]) {
      console.error(`Данные для урока ${lessonId} не найдены`);
      return;
    }
    
    // Получаем информацию о тестах и практиках для этого урока
    const lessonData = courseData[lessonId];
    
    // Проверяем, что есть в этом уроке - тест или практика или оба
    let hasQuiz = false;
    let hasPractice = false;
    
    // Проверяем для обычного урока
    if (lessonData.quizQuestions && lessonData.quizAnswers) {
      hasQuiz = true;
    }
    
    if (lessonData.practiceTask && lessonData.practiceAnswer) {
      hasPractice = true;
    }
    
    // Особая проверка для 9-го урока с многоуровневыми тестами
    if (lessonId === 9 && courseInfo.type === 'python') {
      if (lessonData.quizQuestionsEasy && lessonData.quizAnswersEasy &&
          lessonData.quizQuestionsMedium && lessonData.quizAnswersMedium &&
          lessonData.quizQuestionsHard && lessonData.quizAnswersHard) {
        hasQuiz = true;
      }
    }
    
    console.log(`Урок ${lessonId}: тест=${hasQuiz}, практика=${hasPractice}`);
    
    // Вставляем тест, если он есть в этом уроке
    if (hasQuiz) {
      insertQuiz(lessonId, courseInfo, lessonData);
    }
    
    // Вставляем практику, если она есть в этом уроке
    if (hasPractice) {
      insertPractice(lessonId, courseInfo, lessonData);
    }
  });
}

// Очистка предыдущих элементов
function cleanupPreviousElements(lessonId) {
  console.log(`Очистка старых элементов для урока ${lessonId}`);
  
  // Удаляем все контейнеры тестов и практик для этого урока
  document.querySelectorAll(`.quiz-container[data-lesson="${lessonId}"], .practice-container[data-lesson="${lessonId}"]`).forEach(el => {
    console.log(`Удаление контейнера: ${el.className}`);
    el.remove();
  });
  
  // Удаляем все секции с тестами и практиками
  document.querySelectorAll('.quiz-section, .practice-section').forEach(section => {
    if (section.querySelector(`.quiz-container[data-lesson="${lessonId}"], .practice-container[data-lesson="${lessonId}"]`)) {
      console.log(`Удаление секции: ${section.className}`);
      section.remove();
    }
  });
  
  // Удаляем все контейнеры уровней для многоуровневых тестов
  document.querySelectorAll('.level-container').forEach(el => {
    console.log(`Удаление контейнера уровня: ${el.className}`);
    el.remove();
  });
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
  console.log(`Вставка теста для урока ${lessonId}`);
  
  // Находим или создаем контейнер для тестов и практик
  let container = getOrCreateContentContainer();
  
  // Создаем секцию для теста
  const section = document.createElement('section');
  section.className = 'quiz-section';
  
  // Заголовок
  const title = document.createElement('h3');
  title.textContent = 'Тест';
  section.appendChild(title);
  
  // Особый случай: многоуровневый тест для урока 9
  if (lessonId === 9 && courseInfo.type === 'python' && 
      lessonData.quizQuestionsEasy && lessonData.quizQuestionsMedium && lessonData.quizQuestionsHard) {
    
    console.log('Создание многоуровневого теста для урока 9');
    
    // Создаем контейнеры для каждого уровня
    const levels = [
      { name: 'Легкий уровень', questions: lessonData.quizQuestionsEasy, answers: lessonData.quizAnswersEasy },
      { name: 'Средний уровень', questions: lessonData.quizQuestionsMedium, answers: lessonData.quizAnswersMedium },
      { name: 'Сложный уровень', questions: lessonData.quizQuestionsHard, answers: lessonData.quizAnswersHard }
    ];
    
    levels.forEach((level, index) => {
      const levelContainer = document.createElement('div');
      levelContainer.className = 'level-container';
      
      const levelTitle = document.createElement('h4');
      levelTitle.textContent = level.name;
      levelContainer.appendChild(levelTitle);
      
      // Контейнер для вопросов этого уровня
      const quizContainer = createQuizContainer(lessonId, level.questions, level.answers, courseInfo, index + 1);
      levelContainer.appendChild(quizContainer);
      
      section.appendChild(levelContainer);
    });
  } else {
    // Обычный тест с одним уровнем
    const quizContainer = createQuizContainer(lessonId, lessonData.quizQuestions, lessonData.quizAnswers, courseInfo);
    section.appendChild(quizContainer);
  }
  
  container.appendChild(section);
}

// Создание контейнера для теста
function createQuizContainer(lessonId, questions, answers, courseInfo, levelIndex = 0) {
  const quizContainer = document.createElement('div');
  quizContainer.className = 'quiz-container';
  quizContainer.setAttribute('data-lesson', lessonId);
  if (levelIndex > 0) {
    quizContainer.setAttribute('data-level', levelIndex);
  }
  
  // Добавляем вопросы
  questions.forEach((question, index) => {
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
      optionInput.name = levelIndex > 0 ? `q${levelIndex}_${index + 1}` : `q${index + 1}`;
      optionInput.id = levelIndex > 0 ? `q${levelIndex}_${index + 1}_${optionValue}` : `q${index + 1}_${optionValue}`;
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
  if (levelIndex > 0) {
    submitButton.setAttribute('data-level', levelIndex);
  }
  submitButton.textContent = 'Проверить';
  quizContainer.appendChild(submitButton);
  
  // Место для результата
  const resultDiv = document.createElement('div');
  resultDiv.className = 'quiz-result';
  if (levelIndex > 0) {
    resultDiv.setAttribute('data-level', levelIndex);
  }
  quizContainer.appendChild(resultDiv);
  
  // Добавляем обработчик для кнопки
  submitButton.addEventListener('click', function() {
    if (typeof window.checkQuiz === 'function') {
      window.checkQuiz(lessonId, courseInfo.fullName, levelIndex);
    } else {
      console.error('Функция checkQuiz не найдена');
    }
  });
  
  return quizContainer;
}

// Вставка практического задания
function insertPractice(lessonId, courseInfo, lessonData) {
  console.log(`Вставка практики для урока ${lessonId}`);
  
  // Находим или создаем контейнер для тестов и практик
  let container = getOrCreateContentContainer();
  
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
      window.checkPractice(lessonId, courseInfo.fullName);
    } else {
      console.error('Функция checkPractice не найдена');
    }
  });
  
  runButton.addEventListener('click', function() {
    if (typeof window.runCode === 'function') {
      window.runCode(lessonId, courseInfo.fullName);
    } else {
      console.error('Функция runCode не найдена');
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

// Запускаем добавление стилей
addStyles();
