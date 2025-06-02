/**
 * ФИНАЛЬНОЕ решение для исправления загрузки тестов и практик в курсах
 * Этот скрипт заменяет все предыдущие и обеспечивает загрузку только нужных элементов
 */

// Немедленно отключаем все ранее созданные скрипты
(function() {
  // Отключаем все старые обработчики событий
  if (window.originalLoadLesson) {
    window.loadLesson = window.originalLoadLesson;
  }
  
  // Блокируем работу quiz_practice_fixer и других старых скриптов
  window.forceLoadQuizPractice = function() {
    console.log("Старая версия forceLoadQuizPractice заблокирована");
    return false;
  };
  
  console.log("🚀 Запуск финального исправления тестов и практик");
})();

// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  // Сохраняем оригинальную функцию loadLesson
  window.originalLoadLesson = window.loadLesson;
  
  // Перехватываем функцию загрузки урока
  if (typeof window.loadLesson === 'function') {
    window.loadLesson = function(lessonId, courseType) {
      console.log(`Загрузка урока ${lessonId}`);
      
      // Вызываем оригинальную функцию
      if (window.originalLoadLesson) {
        window.originalLoadLesson.apply(this, arguments);
      }
      
      // Загружаем правильные тесты и практики с задержкой
      setTimeout(() => {
        loadTestsAndPractices(lessonId);
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
      loadTestsAndPractices(currentLessonId);
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
      loadTestsAndPractices(lessonId);
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

// Основная функция загрузки тестов и практик
function loadTestsAndPractices(lessonId) {
  // Полностью очищаем предыдущие тесты и практики
  cleanupAllPreviousElements();
  
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
    
    // Определяем, что показывать для этого урока
    let showQuiz = false;
    let showPractice = false;
    
    // Проверяем наличие теста и практики
    const hasQuiz = hasValidQuiz(lessonData, lessonId, courseInfo);
    const hasPractice = hasValidPractice(lessonData);
    
    // Правило: для обычных уроков показываем только один элемент
    // - В четных уроках показываем тесты
    // - В нечетных уроках показываем практики
    if (lessonId !== 9 || courseInfo.type !== 'python') {
      if (lessonId % 2 === 0 && hasQuiz) {
        showQuiz = true;
      } else if (lessonId % 2 === 1 && hasPractice) {
        showPractice = true;
      } else if (hasQuiz) {
        showQuiz = true;
      } else if (hasPractice) {
        showPractice = true;
      }
    } else {
      // Специальный случай: урок 9 в Python курсе показывает и тест, и практику
      showQuiz = hasQuiz;
      showPractice = hasPractice;
    }
    
    console.log(`Урок ${lessonId}: показать тест=${showQuiz}, показать практику=${showPractice}`);
    
    // Создаем контейнер для элементов
    const container = getOrCreateContentContainer();
    
    // Вставляем тест, если нужно
    if (showQuiz) {
      insertQuiz(lessonId, courseInfo, lessonData, container);
    }
    
    // Вставляем практику, если нужно
    if (showPractice) {
      insertPractice(lessonId, courseInfo, lessonData, container);
    }
  });
}

// Функция для проверки наличия валидного теста
function hasValidQuiz(lessonData, lessonId, courseInfo) {
  // Обычный тест
  if (lessonData.quizQuestions && lessonData.quizAnswers) {
    return true;
  }
  
  // Многоуровневый тест для 9-го урока Python
  if (lessonId === 9 && courseInfo.type === 'python') {
    return (lessonData.quizQuestionsEasy && lessonData.quizAnswersEasy &&
            lessonData.quizQuestionsMedium && lessonData.quizAnswersMedium &&
            lessonData.quizQuestionsHard && lessonData.quizAnswersHard);
  }
  
  return false;
}

// Функция для проверки наличия валидной практики
function hasValidPractice(lessonData) {
  return (lessonData.practiceTask && lessonData.practiceAnswer);
}

// Загрузка данных курса
function loadCourseData(courseInfo, callback) {
  console.log(`Загрузка данных для курса: ${courseInfo.fullName}`);
  
  // Возможные имена переменных и файлы для данных курса
  const variableOptions = [
    `${courseInfo.type}${courseInfo.language.toUpperCase()}QuizPractice`,
    `${courseInfo.type}RuQuizPractice`,
    `${courseInfo.type}${courseInfo.language}QuizPractice`,
    `${courseInfo.fullName}QuizPractice`
  ];
  
  const fileOptions = [
    `${courseInfo.type}_${courseInfo.language}_quiz_practice.js`,
    `${courseInfo.fullName}_quiz_practice.js`
  ];
  
  // Проверяем, загружены ли уже данные
  for (const varName of variableOptions) {
    if (window[varName]) {
      console.log(`Найдены загруженные данные: ${varName}`);
      callback(window[varName]);
      return;
    }
  }
  
  // Загружаем данные из файла
  let loadAttempts = 0;
  let maxAttempts = fileOptions.length;
  
  function loadNextFile(index) {
    if (index >= fileOptions.length) {
      console.error("Не удалось загрузить данные курса после всех попыток");
      callback(null);
      return;
    }
    
    const fileName = fileOptions[index];
    const script = document.createElement('script');
    script.src = `JavaScript/couses_data/${fileName}`;
    
    script.onload = function() {
      console.log(`Файл ${fileName} загружен успешно`);
      
      // Проверяем, появились ли нужные данные
      for (const varName of variableOptions) {
        if (window[varName]) {
          console.log(`Найдены данные в переменной ${varName}`);
          callback(window[varName]);
          return;
        }
      }
      
      // Если не нашли данные, пробуем следующий файл
      loadNextFile(index + 1);
    };
    
    script.onerror = function() {
      console.warn(`Ошибка загрузки файла ${fileName}`);
      loadNextFile(index + 1);
    };
    
    document.body.appendChild(script);
  }
  
  // Начинаем загрузку файлов
  loadNextFile(0);
}

// Очистка всех предыдущих элементов
function cleanupAllPreviousElements() {
  console.log("Полная очистка тестов и практик");
  
  // Удаляем все контейнеры тестов и практик
  document.querySelectorAll('.quiz-container, .practice-container').forEach(el => {
    console.log(`Удаление контейнера: ${el.className}`);
    el.remove();
  });
  
  // Удаляем все секции с тестами и практиками
  document.querySelectorAll('.quiz-section, .practice-section').forEach(section => {
    console.log(`Удаление секции: ${section.className}`);
    section.remove();
  });
  
  // Удаляем все контейнеры уровней для многоуровневых тестов
  document.querySelectorAll('.level-container').forEach(el => {
    console.log(`Удаление контейнера уровня: ${el.className}`);
    el.remove();
  });
  
  // Удаляем специальный контейнер для тестов и практик, если он есть
  const container = document.getElementById('quiz-practice-container');
  if (container) {
    console.log("Удаление основного контейнера для тестов и практик");
    container.remove();
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
function insertQuiz(lessonId, courseInfo, lessonData, container) {
  console.log(`Вставка теста для урока ${lessonId}`);
  
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
      const quizContainer = createQuizContainer(lessonId, level.questions, courseInfo, index + 1);
      levelContainer.appendChild(quizContainer);
      
      section.appendChild(levelContainer);
    });
  } else {
    // Обычный тест с одним уровнем
    const quizContainer = createQuizContainer(lessonId, lessonData.quizQuestions, courseInfo);
    section.appendChild(quizContainer);
  }
  
  container.appendChild(section);
}

// Создание контейнера для теста
function createQuizContainer(lessonId, questions, courseInfo, levelIndex = 0) {
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
      window.checkQuiz(lessonId, courseInfo.type, levelIndex);
    } else {
      console.error('Функция checkQuiz не найдена');
      alert('Не удалось проверить тест. Функция проверки недоступна.');
    }
  });
  
  return quizContainer;
}

// Вставка практического задания
function insertPractice(lessonId, courseInfo, lessonData, container) {
  console.log(`Вставка практики для урока ${lessonId}`);
  
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
      alert('Не удалось проверить практику. Функция проверки недоступна.');
    }
  });
  
  runButton.addEventListener('click', function() {
    if (typeof window.runCode === 'function') {
      window.runCode(lessonId, courseInfo.type);
    } else {
      console.error('Функция runCode не найдена');
      alert('Не удалось запустить код. Функция запуска недоступна.');
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
  } else {
    // Очищаем контейнер
    container.innerHTML = '';
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
