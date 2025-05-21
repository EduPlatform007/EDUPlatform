/**
 * Универсальное решение для исправления проблем с отображением тестов и практик
 * во всех курсах (HTML/CSS, Python, Database)
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Запуск универсального исправления для тестов и практик');
  
  // ===== НАСТРОЙКИ =====
  // Определяем, какие тесты и практики должны быть в каждом уроке
  const lessonContentRules = {
    'default': { test: true, practice: false },  // По умолчанию в уроке только тест
    
    // Правила для Python
    'python_1': { test: false, practice: true },
    'python_2': { test: true, practice: false },
    'python_3': { test: false, practice: true },
    'python_4': { test: true, practice: false },
    'python_5': { test: false, practice: true },
    'python_6': { test: true, practice: false },
    'python_7': { test: false, practice: true },
    'python_8': { test: false, practice: true },
    'python_9': { test: true, practice: true, multiLevelTest: true }, // Урок с тремя уровнями тестов
    'python_10': { test: false, practice: true },
    
    // Правила для Database
    'database_1': { test: false, practice: true },
    'database_2': { test: true, practice: false },
    'database_3': { test: false, practice: true },
    'database_4': { test: true, practice: false },
    'database_5': { test: false, practice: true },
    'database_6': { test: true, practice: false },
    'database_7': { test: false, practice: true },
    'database_8': { test: false, practice: true },
    'database_9': { test: true, practice: false, multiLevelTest: true },
    'database_10': { test: false, practice: true },
    
    // Правила для HTML/CSS
    'html_css_1': { test: true, practice: false },
    'html_css_2': { test: false, practice: true },
    'html_css_3': { test: true, practice: false },
    'html_css_4': { test: false, practice: true },
    'html_css_5': { test: true, practice: false },
    'html_css_6': { test: false, practice: true },
    'html_css_7': { test: true, practice: false },
    'html_css_8': { test: false, practice: true },
    'html_css_9': { test: true, practice: false },
    'html_css_10': { test: false, practice: true }
  };
  
  // ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
  
  // Определение текущего курса по URL и метатегам
  function detectCourseInfo() {
    let courseType = '';
    let language = '';
    
    // Проверяем метатеги
    const courseTypeMeta = document.querySelector('meta[name="course-type"]');
    const courseLangMeta = document.querySelector('meta[name="course-language"]');
    
    if (courseTypeMeta && courseLangMeta) {
      courseType = courseTypeMeta.getAttribute('content');
      language = courseLangMeta.getAttribute('content');
      console.log(`Информация из метатегов: тип=${courseType}, язык=${language}`);
    } else {
      // Определяем по URL
      const path = window.location.pathname.toLowerCase();
      
      if (path.includes('python')) {
        courseType = 'python';
      } else if (path.includes('database')) {
        courseType = 'database';
      } else {
        courseType = 'html_css';
      }
      
      language = path.includes('rus') || document.documentElement.lang === 'ru' ? 'ru' : 'kz';
      console.log(`Информация из URL: тип=${courseType}, язык=${language}`);
    }
    
    // Формируем полный идентификатор курса
    const fullCourseType = `${courseType}_${language === 'ru' ? 'ru' : 'kz'}`;
    
    // Сохраняем информацию о курсе
    localStorage.setItem('currentCourseType', fullCourseType);
    window.currentCourseType = fullCourseType;
    
    return {
      type: courseType,
      language: language,
      fullType: fullCourseType
    };
  }
  
  // Загрузка данных для тестов и практик
  function loadQuizPracticeData(courseType, callback) {
    // Проверяем, загружены ли данные уже
    if (window[`${courseType}QuizPractice`]) {
      console.log(`Данные для ${courseType} уже загружены`);
      callback(window[`${courseType}QuizPractice`]);
      return;
    }
    
    // Проверяем альтернативные варианты переменных
    const alternativeNames = [
      `${courseType}QuizPractice`,
      `${courseType.replace('_', '')}QuizPractice`,
      `${courseType.split('_')[0]}${courseType.split('_')[1].toUpperCase()}QuizPractice`
    ];
    
    for (const name of alternativeNames) {
      if (window[name]) {
        console.log(`Найдены данные в переменной ${name}`);
        window[`${courseType}QuizPractice`] = window[name]; // Дублируем для единообразия
        callback(window[name]);
        return;
      }
    }
    
    // Если данные не найдены, пробуем загрузить скрипт
    console.log(`Данные для ${courseType} не найдены, пробуем загрузить скрипт...`);
    
    // Проверяем, загружен ли скрипт
    const scriptId = `${courseType}-quiz-practice-script`;
    if (document.getElementById(scriptId)) {
      console.log(`Скрипт ${scriptId} уже загружен, но данные не найдены`);
      callback(null);
      return;
    }
    
    // Загружаем скрипт
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `JavaScript/couses_data/${courseType}_quiz_practice.js`;
    script.onload = function() {
      console.log(`Скрипт ${courseType}_quiz_practice.js загружен`);
      
      // Проверяем, появились ли данные
      for (const name of alternativeNames) {
        if (window[name]) {
          console.log(`После загрузки скрипта найдены данные в переменной ${name}`);
          window[`${courseType}QuizPractice`] = window[name]; // Дублируем для единообразия
          callback(window[name]);
          return;
        }
      }
      
      console.error(`Данные не найдены даже после загрузки скрипта ${courseType}_quiz_practice.js`);
      callback(null);
    };
    
    script.onerror = function() {
      console.error(`Ошибка загрузки скрипта ${courseType}_quiz_practice.js`);
      callback(null);
    };
    
    document.body.appendChild(script);
  }
  
  // Полная очистка тестов и практик на странице
  function clearAllTestsAndPractices() {
    console.log('Очистка всех тестов и практик...');
    
    // Удаляем все контейнеры тестов и практик
    document.querySelectorAll('.quiz-container, .practice-container').forEach(el => {
      console.log(`Удаляю контейнер: ${el.className} [${el.getAttribute('data-lesson')}]`);
      el.remove();
    });
    
    // Удаляем все секции тестов и практик
    document.querySelectorAll('.quiz-section, .practice-section').forEach(el => {
      console.log(`Удаляю секцию: ${el.className}`);
      el.remove();
    });
    
    // Очищаем контейнер quiz-practice-container
    const container = document.getElementById('quiz-practice-container');
    if (container) {
      console.log('Очищаю основной контейнер quiz-practice-container');
      container.innerHTML = '';
    }
  }
  
  // Создание контейнера для тестов и практик, если он отсутствует
  function createQuizPracticeContainer() {
    // Проверяем, существует ли контейнер
    let container = document.getElementById('quiz-practice-container');
    if (container) {
      return container;
    }
    
    console.log('Создаю новый контейнер для тестов и практик');
    
    // Создаем контейнер
    container = document.createElement('div');
    container.id = 'quiz-practice-container';
    
    // Находим подходящее место для вставки контейнера
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
      // Если ничего подходящего не нашли, добавляем в main
      document.querySelector('main')?.appendChild(container);
    }
    
    return container;
  }
  
  // Добавление стилей для тестов и практик
  function addTestPracticeStyles() {
    // Проверяем, добавлены ли стили
    if (document.getElementById('quiz-practice-custom-styles')) {
      return;
    }
    
    console.log('Добавляю стили для тестов и практик');
    
    const style = document.createElement('style');
    style.id = 'quiz-practice-custom-styles';
    style.textContent = `
      .quiz-container, .practice-container {
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
      
      .quiz-submit-btn, .practice-submit-btn {
        background-color: #2646FA;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
        margin: 15px 0;
      }
      
      .quiz-submit-btn:hover, .practice-submit-btn:hover {
        background-color: #1e3ad8;
      }
      
      .practice-code {
        width: 100%;
        padding: 10px;
        font-family: monospace;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
        min-height: 150px;
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
        margin-top: 10px;
      }
      
      .error-message {
        color: #F44336;
        font-weight: bold;
        padding: 10px;
        background-color: rgba(244, 67, 54, 0.1);
        border-radius: 4px;
        margin-top: 10px;
      }
      
      .partial-success-message {
        color: #FF9800;
        font-weight: bold;
        padding: 10px;
        background-color: rgba(255, 152, 0, 0.1);
        border-radius: 4px;
        margin-top: 10px;
      }
      
      .test-level-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
        color: #333;
      }
    `;
    
    document.head.appendChild(style);
  }
  
  // Создание теста для урока
  function createTest(lessonId, courseType, quizPracticeData, level = '') {
    console.log(`Создаю тест для урока ${lessonId}, курс: ${courseType}, уровень: ${level || 'стандартный'}`);
    
    // Определяем ключи для доступа к данным
    const questionsKey = level ? `quizQuestions${level.charAt(0).toUpperCase() + level.slice(1)}` : 'quizQuestions';
    const answersKey = level ? `quizAnswers${level.charAt(0).toUpperCase() + level.slice(1)}` : 'quizAnswers';
    
    // Получаем данные для теста
    const lessonData = quizPracticeData[lessonId];
    if (!lessonData) {
      console.error(`Данные для урока ${lessonId} не найдены`);
      return null;
    }
    
    // Проверяем наличие вопросов и ответов
    const questions = lessonData[questionsKey];
    const answers = lessonData[answersKey];
    
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
      console.error(`Вопросы для урока ${lessonId} (уровень: ${level || 'стандартный'}) не найдены`);
      return null;
    }
    
    if (!answers) {
      console.error(`Ответы для урока ${lessonId} (уровень: ${level || 'стандартный'}) не найдены`);
      return null;
    }
    
    // Создаем секцию для теста
    const section = document.createElement('section');
    section.className = 'quiz-section';
    
    // Заголовок теста
    const title = document.createElement('h3');
    if (level) {
      let levelTitle = '';
      if (level === 'easy') levelTitle = 'Легкий уровень';
      else if (level === 'medium') levelTitle = 'Средний уровень';
      else if (level === 'hard') levelTitle = 'Сложный уровень';
      title.textContent = `Тест (${levelTitle})`;
    } else {
      title.textContent = 'Тест';
    }
    section.appendChild(title);
    
    // Создаем контейнер для теста
    const container = document.createElement('div');
    container.className = 'quiz-container';
    container.setAttribute('data-lesson', lessonId);
    if (level) {
      container.setAttribute('data-level', level);
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
        optionInput.name = level ? `q${index + 1}_${level}` : `q${index + 1}`;
        optionInput.id = level ? `q${index + 1}_${level}_${optionValue}` : `q${index + 1}_${optionValue}`;
        optionInput.value = optionValue;
        
        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = optionInput.id;
        optionLabel.textContent = option;
        
        optionDiv.appendChild(optionInput);
        optionDiv.appendChild(optionLabel);
        optionsDiv.appendChild(optionDiv);
      });
      
      questionDiv.appendChild(optionsDiv);
      container.appendChild(questionDiv);
    });
    
    // Кнопка проверки
    const submitBtn = document.createElement('button');
    submitBtn.className = 'quiz-submit-btn';
    submitBtn.setAttribute('data-lesson', lessonId);
    if (level) {
      submitBtn.setAttribute('data-level', level);
    }
    submitBtn.textContent = 'Проверить';
    
    // Добавляем обработчик клика
    submitBtn.addEventListener('click', function() {
      console.log(`Кнопка проверки теста нажата: урок ${lessonId}, уровень ${level || 'стандартный'}`);
      
      if (level && typeof window.checkQuizLevel === 'function') {
        window.checkQuizLevel(lessonId, level, courseType);
      } else if (typeof window.checkQuiz === 'function') {
        window.checkQuiz(lessonId, courseType);
      } else {
        console.error('Функция для проверки теста не найдена');
        alert('Ошибка: функция для проверки теста не найдена');
      }
    });
    
    container.appendChild(submitBtn);
    
    // Добавляем место для результата
    const resultDiv = document.createElement('div');
    resultDiv.className = 'quiz-result';
    container.appendChild(resultDiv);
    
    section.appendChild(container);
    return section;
  }
  
  // Создание практического задания для урока
  function createPractice(lessonId, courseType, quizPracticeData) {
    console.log(`Создаю практику для урока ${lessonId}, курс: ${courseType}`);
    
    // Получаем данные для практики
    const lessonData = quizPracticeData[lessonId];
    if (!lessonData) {
      console.error(`Данные для урока ${lessonId} не найдены`);
      return null;
    }
    
    // Проверяем наличие задания и ответа
    const practiceTask = lessonData.practiceTask;
    const practiceAnswer = lessonData.practiceAnswer;
    
    if (!practiceTask) {
      console.error(`Задание для урока ${lessonId} не найдено`);
      return null;
    }
    
    if (!practiceAnswer) {
      console.error(`Ответ для урока ${lessonId} не найден`);
      return null;
    }
    
    // Создаем секцию для практики
    const section = document.createElement('section');
    section.className = 'practice-section';
    
    // Заголовок практики
    const title = document.createElement('h3');
    title.textContent = 'Практическое задание';
    section.appendChild(title);
    
    // Создаем контейнер для практики
    const container = document.createElement('div');
    container.className = 'practice-container';
    container.setAttribute('data-lesson', lessonId);
    
    // Добавляем описание задания
    const taskDiv = document.createElement('div');
    taskDiv.className = 'practice-task';
    taskDiv.innerHTML = practiceTask;
    container.appendChild(taskDiv);
    
    // Добавляем поле для ввода кода
    const textarea = document.createElement('textarea');
    textarea.className = 'practice-code';
    textarea.setAttribute('placeholder', 'Введите ваш код здесь...');
    textarea.setAttribute('rows', '10');
    container.appendChild(textarea);
    
    // Кнопка проверки
    const submitBtn = document.createElement('button');
    submitBtn.className = 'practice-submit-btn';
    submitBtn.setAttribute('data-lesson', lessonId);
    submitBtn.textContent = 'Проверить';
    
    // Добавляем обработчик клика
    submitBtn.addEventListener('click', function() {
      console.log(`Кнопка проверки практики нажата: урок ${lessonId}`);
      
      if (typeof window.checkPractice === 'function') {
        window.checkPractice(lessonId, courseType);
      } else {
        console.error('Функция для проверки практики не найдена');
        alert('Ошибка: функция для проверки практики не найдена');
      }
    });
    
    container.appendChild(submitBtn);
    
    // Добавляем место для результата
    const resultDiv = document.createElement('div');
    resultDiv.className = 'practice-result';
    container.appendChild(resultDiv);
    
    section.appendChild(container);
    return section;
  }
  
  // Функция для загрузки тестов и практик для конкретного урока
  function loadTestsAndPracticesForLesson(lessonId) {
    console.log(`Загрузка тестов и практик для урока ${lessonId}...`);
    
    // Определяем текущий курс
    const courseInfo = detectCourseInfo();
    
    // Определяем, какие элементы должны быть для данного урока
    const ruleKey = `${courseInfo.type}_${lessonId}`;
    const rule = lessonContentRules[ruleKey] || lessonContentRules.default;
    
    console.log(`Правило для урока ${lessonId}: `, rule);
    
    // Очищаем существующие тесты и практики
    clearAllTestsAndPractices();
    
    // Создаем контейнер для тестов и практик
    const container = createQuizPracticeContainer();
    
    // Добавляем стили
    addTestPracticeStyles();
    
    // Загружаем данные для курса
    loadQuizPracticeData(courseInfo.fullType, function(quizPracticeData) {
      if (!quizPracticeData) {
        console.error(`Не удалось загрузить данные для курса ${courseInfo.fullType}`);
        return;
      }
      
      console.log(`Данные для курса ${courseInfo.fullType} загружены успешно:`, quizPracticeData);
      
      // Сначала добавляем тест
      if (rule.test) {
        if (rule.multiLevelTest) {
          // Для тестов с разными уровнями сложности
          const levels = ['easy', 'medium', 'hard'];
          
          levels.forEach(level => {
            const testSection = createTest(lessonId, courseInfo.fullType, quizPracticeData, level);
            if (testSection) {
              container.appendChild(testSection);
            }
          });
        } else {
          // Для обычных тестов
          const testSection = createTest(lessonId, courseInfo.fullType, quizPracticeData);
          if (testSection) {
            container.appendChild(testSection);
          }
        }
      }
      
      // Затем добавляем практику
      if (rule.practice) {
        const practiceSection = createPractice(lessonId, courseInfo.fullType, quizPracticeData);
        if (practiceSection) {
          container.appendChild(practiceSection);
        }
      }
      
      console.log(`Загрузка тестов и практик для урока ${lessonId} завершена`);
    });
  }
  
  // ===== ИНИЦИАЛИЗАЦИЯ =====
  
  // Функция для настройки обработчиков событий
  function setupEventHandlers() {
    // Обработчик события загрузки урока
    document.addEventListener('lessonLoaded', function(event) {
      const lessonId = event.detail?.lessonId || parseInt(localStorage.getItem('lastOpenedLesson')) || 1;
      console.log(`Событие lessonLoaded: урок ${lessonId}`);
      setTimeout(() => loadTestsAndPracticesForLesson(lessonId), 300);
    });
    
    // Обработчик клика на элементы списка уроков
    document.querySelectorAll('.lesson-list li').forEach(item => {
      const lessonId = item.getAttribute('data-lesson');
      if (lessonId) {
        item.addEventListener('click', function() {
          console.log(`Клик на уроке ${lessonId}`);
          setTimeout(() => loadTestsAndPracticesForLesson(parseInt(lessonId)), 300);
        });
      }
    });
    
    // Обработчик изменения URL (для Single Page Applications)
    window.addEventListener('popstate', function() {
      const lessonId = parseInt(localStorage.getItem('lastOpenedLesson'));
      if (lessonId) {
        console.log(`Изменение URL: загрузка урока ${lessonId}`);
        setTimeout(() => loadTestsAndPracticesForLesson(lessonId), 300);
      }
    });
  }
  
  // Проверка текущего урока при загрузке страницы
  function checkCurrentLesson() {
    const lessonId = parseInt(localStorage.getItem('lastOpenedLesson'));
    if (lessonId && document.getElementById('loaded-lesson') && document.getElementById('loaded-lesson').style.display !== 'none') {
      console.log(`При загрузке страницы обнаружен загруженный урок ${lessonId}`);
      loadTestsAndPracticesForLesson(lessonId);
    }
  }
  
  // Проверка необходимых скриптов
  function checkRequiredDependencies() {
    console.log('Проверка необходимых зависимостей...');
    
    // Проверяем наличие функций для проверки тестов и практик
    if (!window.checkQuiz || !window.checkPractice || !window.checkQuizLevel) {
      console.warn('Не найдены функции для проверки тестов и практик, загружаем резервные функции...');
      
      // Добавляем резервные функции
      window.checkQuiz = window.checkQuiz || function(lessonId, courseType) {
        console.log(`Резервная функция checkQuiz: урок ${lessonId}, курс ${courseType}`);
        alert('Проверка теста еще не реализована');
      };
      
      window.checkPractice = window.checkPractice || function(lessonId, courseType) {
        console.log(`Резервная функция checkPractice: урок ${lessonId}, курс ${courseType}`);
        alert('Проверка практики еще не реализована');
      };
      
      window.checkQuizLevel = window.checkQuizLevel || function(lessonId, level, courseType) {
        console.log(`Резервная функция checkQuizLevel: урок ${lessonId}, уровень ${level}, курс ${courseType}`);
        alert(`Проверка теста (уровень ${level}) еще не реализована`);
      };
    }
    
    // Загружаем скрипты, если они отсутствуют
    const requiredScripts = [
      { id: 'quiz-practice-system', src: 'JavaScript/quiz_practice_system.js' },
      { id: 'quiz-practice-loader', src: 'JavaScript/quiz_practice_loader.js' }
    ];
    
    requiredScripts.forEach(script => {
      if (!document.getElementById(script.id) && !document.querySelector(`script[src="${script.src}"]`)) {
        console.log(`Загружаем скрипт ${script.src}...`);
        const scriptTag = document.createElement('script');
        scriptTag.id = script.id;
        scriptTag.src = script.src;
        document.body.appendChild(scriptTag);
      }
    });
  }
  
  // Запуск основных функций
  checkRequiredDependencies();
  setupEventHandlers();
  checkCurrentLesson();
  
  // Устанавливаем периодическую проверку текущего урока
  setInterval(checkCurrentLesson, 2000);
  
  console.log('🎉 Универсальное исправление для тестов и практик инициализировано');
});
