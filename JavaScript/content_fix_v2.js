/**
 * Исправленная версия скрипта для корректного отображения тестов и практик
 * Сохраняет видимость кнопки завершения урока
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Запуск усовершенствованного исправления v2');
  
  // Сохраняем оригинальные функции
  const originalInsertQuizPractice = window.insertQuizPractice;
  const originalLoadLesson = window.loadLesson;
  
  // Заменяем функцию загрузки урока
  if (typeof window.loadLesson === 'function') {
    window.loadLesson = function(lessonId, courseType) {
      console.log(`Вызов улучшенной loadLesson: урок ${lessonId}, курс ${courseType}`);
      
      // Вызываем оригинальную функцию
      if (originalLoadLesson) {
        originalLoadLesson.apply(this, arguments);
      }
      
      // После загрузки урока добавляем тесты и практики с небольшой задержкой
      setTimeout(() => {
        insertTestsAndPractices(lessonId, courseType);
      }, 500);
    };
  }
  
  // Функция для определения курса
  function getCurrentCourseInfo() {
    let courseType;
    
    // Проверяем метатеги
    const courseTypeMeta = document.querySelector('meta[name="course-type"]');
    const courseLangMeta = document.querySelector('meta[name="course-language"]');
    
    if (courseTypeMeta && courseLangMeta) {
      courseType = courseTypeMeta.getAttribute('content');
      const language = courseLangMeta.getAttribute('content');
      return { type: courseType, language: language, fullType: courseType + '_' + (language === 'ru' ? 'ru' : 'kz') };
    }
    
    // Определяем по URL
    const path = window.location.pathname.toLowerCase();
    if (path.includes('python')) {
      courseType = 'python';
    } else if (path.includes('database')) {
      courseType = 'database';
    } else {
      courseType = 'html_css';
    }
    
    const language = path.includes('rus') || document.documentElement.lang === 'ru' ? 'ru' : 'kz';
    return { type: courseType, language: language, fullType: courseType + '_' + (language === 'ru' ? 'ru' : 'kz') };
  }
  
  // Функция для удаления дублирующихся тестов и практик
  function cleanupExistingElements(lessonId) {
    // Удаляем все контейнеры тестов и практик
    document.querySelectorAll(`.quiz-container[data-lesson="${lessonId}"], .practice-container[data-lesson="${lessonId}"]`).forEach(el => el.remove());
    
    // Удаляем все секции
    document.querySelectorAll('.quiz-section, .practice-section').forEach(section => {
      const container = section.querySelector(`[data-lesson="${lessonId}"]`);
      if (container) {
        section.remove();
      }
    });
  }
  
  // Основная функция для вставки тестов и практик
  function insertTestsAndPractices(lessonId, courseTypeParam) {
    const courseInfo = getCurrentCourseInfo();
    const courseType = courseTypeParam || courseInfo.fullType;
    
    console.log(`Вставка тестов и практик для урока ${lessonId}, курс: ${courseType}`);
    
    // Очищаем существующие элементы перед вставкой новых
    cleanupExistingElements(lessonId);
    
    // Восстанавливаем кнопку завершения урока, если она была удалена
    ensureCompletionButton();
    
    // Проверяем, есть ли оригинальная функция
    if (originalInsertQuizPractice) {
      // Используем оригинальную функцию
      originalInsertQuizPractice(lessonId, courseType);
      
      // Небольшая задержка для проверки загрузки
      setTimeout(() => {
        // Проверяем, появились ли тесты и практики
        const hasQuiz = document.querySelector(`.quiz-container[data-lesson="${lessonId}"]`);
        const hasPractice = document.querySelector(`.practice-container[data-lesson="${lessonId}"]`);
        
        if (!hasQuiz && !hasPractice) {
          console.log('Тесты и практики не загрузились, пробуем альтернативный подход');
          alternativeTestsAndPracticesLoad(lessonId, courseType);
        } else {
          console.log('Тесты и практики загружены успешно');
        }
      }, 500);
    } else {
      // Если оригинальная функция недоступна, используем альтернативный подход
      alternativeTestsAndPracticesLoad(lessonId, courseType);
    }
  }
  
  // Альтернативная загрузка тестов и практик
  function alternativeTestsAndPracticesLoad(lessonId, courseType) {
    console.log(`Альтернативная загрузка: урок ${lessonId}, курс ${courseType}`);
    
    // Определяем правила для тестов и практик в зависимости от урока
    const courseBase = courseType.split('_')[0]; // python, database, или html_css
    const lessonKey = `${courseBase}_${lessonId}`;
    
    // Правила по умолчанию: в четных уроках тесты, в нечетных практика
    let shouldHaveTest = lessonId % 2 === 0;
    let shouldHavePractice = lessonId % 2 === 1;
    
    // В 9-м уроке Python должны быть и тест, и практика + многоуровневый тест
    if (lessonKey === 'python_9') {
      shouldHaveTest = true;
      shouldHavePractice = true;
    }
    
    // Находим или создаем контейнер для тестов и практик
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
      }
    }
    
    // Загружаем скрипт с данными, если необходимо
    loadQuizPracticeData(courseType, (data) => {
      if (!data || !data[lessonId]) {
        console.error(`Данные для урока ${lessonId} не найдены`);
        return;
      }
      
      // Вставляем тест, если он должен быть
      if (shouldHaveTest) {
        insertAlternativeTest(lessonId, courseType, data[lessonId], container);
      }
      
      // Вставляем практику, если она должна быть
      if (shouldHavePractice) {
        insertAlternativePractice(lessonId, courseType, data[lessonId], container);
      }
    });
  }
  
  // Функция для загрузки данных
  function loadQuizPracticeData(courseType, callback) {
    // Проверяем, загружены ли уже данные
    const variables = [
      `${courseType}QuizPractice`,
      `${courseType.replace('_', '')}QuizPractice`,
      `${courseType.split('_')[0]}${courseType.split('_')[1].toUpperCase()}QuizPractice`
    ];
    
    for (const varName of variables) {
      if (window[varName]) {
        console.log(`Найдены данные в переменной ${varName}`);
        callback(window[varName]);
        return;
      }
    }
    
    // Загружаем скрипт с данными
    const script = document.createElement('script');
    script.src = `JavaScript/couses_data/${courseType}_quiz_practice.js`;
    script.onload = function() {
      // Проверяем, загрузились ли данные
      for (const varName of variables) {
        if (window[varName]) {
          console.log(`После загрузки скрипта найдены данные в переменной ${varName}`);
          callback(window[varName]);
          return;
        }
      }
      
      console.error(`Не удалось найти данные после загрузки скрипта для ${courseType}`);
      callback(null);
    };
    
    script.onerror = function() {
      console.error(`Ошибка загрузки скрипта для ${courseType}`);
      callback(null);
    };
    
    document.body.appendChild(script);
  }
  
  // Вставка теста альтернативным способом
  function insertAlternativeTest(lessonId, courseType, lessonData, container) {
    // Проверяем, есть ли данные для теста
    if (!lessonData.quizQuestions || !lessonData.quizAnswers) {
      console.error(`Данные для теста урока ${lessonId} не найдены`);
      return;
    }
    
    // Создаем секцию для теста
    const section = document.createElement('section');
    section.className = 'quiz-section';
    
    // Заголовок
    const title = document.createElement('h3');
    title.textContent = 'Тест';
    section.appendChild(title);
    
    // Контейнер теста
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
        window.checkQuiz(lessonId, courseType);
      } else {
        console.error('Функция checkQuiz не найдена');
      }
    });
    
    section.appendChild(quizContainer);
    container.appendChild(section);
  }
  
  // Вставка практики альтернативным способом
  function insertAlternativePractice(lessonId, courseType, lessonData, container) {
    // Проверяем, есть ли данные для практики
    if (!lessonData.practiceTask || !lessonData.practiceAnswer) {
      console.error(`Данные для практики урока ${lessonId} не найдены`);
      return;
    }
    
    // Создаем секцию для практики
    const section = document.createElement('section');
    section.className = 'practice-section';
    
    // Заголовок
    const title = document.createElement('h3');
    title.textContent = 'Практическое задание';
    section.appendChild(title);
    
    // Контейнер практики
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
    
    // Кнопка проверки
    const submitButton = document.createElement('button');
    submitButton.className = 'practice-submit-btn';
    submitButton.setAttribute('data-lesson', lessonId);
    submitButton.textContent = 'Проверить';
    practiceContainer.appendChild(submitButton);
    
    // Место для результата
    const resultDiv = document.createElement('div');
    resultDiv.className = 'practice-result';
    practiceContainer.appendChild(resultDiv);
    
    // Добавляем обработчик для кнопки
    submitButton.addEventListener('click', function() {
      if (typeof window.checkPractice === 'function') {
        window.checkPractice(lessonId, courseType);
      } else {
        console.error('Функция checkPractice не найдена');
      }
    });
    
    section.appendChild(practiceContainer);
    container.appendChild(section);
  }
  
  // Функция для восстановления кнопки завершения урока
  function ensureCompletionButton() {
    const lessonActions = document.querySelector('.lesson-actions');
    if (!lessonActions) return;
    
    // Проверяем наличие кнопки
    if (!lessonActions.querySelector('.complete-btn')) {
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
  
  // Добавляем необходимые стили
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
  
  // Настройка обработчиков событий
  function setupEventListeners() {
    // Обработчик события загрузки урока
    document.addEventListener('lessonLoaded', function(event) {
      const lessonId = event.detail?.lessonId || parseInt(localStorage.getItem('lastOpenedLesson')) || 1;
      console.log(`Событие lessonLoaded: урок ${lessonId}`);
      
      // Небольшая задержка для гарантии, что урок загрузился
      setTimeout(() => {
        insertTestsAndPractices(lessonId);
      }, 500);
    });
    
    // Обработчик клика на элементы списка уроков
    document.querySelectorAll('.lesson-list li').forEach(item => {
      item.addEventListener('click', function() {
        const lessonId = this.getAttribute('data-lesson');
        if (lessonId) {
          console.log(`Клик на элементе списка уроков: ${lessonId}`);
          // Сохраняем ID урока
          localStorage.setItem('lastOpenedLesson', lessonId);
        }
      });
    });
  }
  
  // Запуск основного кода
  addStyles();
  setupEventListeners();
  
  // Проверяем текущий урок
  const currentLessonId = parseInt(localStorage.getItem('lastOpenedLesson'));
  if (currentLessonId && document.getElementById('loaded-lesson') && 
      document.getElementById('loaded-lesson').style.display !== 'none') {
    console.log(`При загрузке страницы обнаружен активный урок: ${currentLessonId}`);
    
    // Вставляем тесты и практики с задержкой
    setTimeout(() => {
      insertTestsAndPractices(currentLessonId);
    }, 1000);
  }
  
  console.log('🎉 Исправление v2 инициализировано успешно');
});
