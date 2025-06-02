/**
 * Специальный скрипт для исправления проблем с дублированием и отображением тестов/практик
 * Работает для всех типов курсов: HTML/CSS, Python, Database
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('Инициализация улучшенного обработчика курсов...');
  
  // ========== ОСНОВНЫЕ ФУНКЦИИ ==========
  
  // Определение текущего курса и языка
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
      
      language = path.includes('rus') || document.documentElement.lang === 'ru' ? 'ru' : 'kk';
      console.log(`Информация из URL: тип=${courseType}, язык=${language}`);
    }
    
    // Сохраняем информацию о курсе в localStorage
    const fullCourseType = `${courseType}_${language === 'ru' ? 'ru' : 'kz'}`;
    localStorage.setItem('currentCourseType', fullCourseType);
    
    return {
      type: courseType,
      language: language,
      fullType: fullCourseType
    };
  }
  
  // Полная очистка всех тестов и практик на странице
  function cleanupAllTestsAndPractices() {
    console.log('Очистка всех тестов и практик на странице...');
    
    // Удаляем все контейнеры тестов и практик
    document.querySelectorAll('.quiz-container, .practice-container').forEach(el => el.remove());
    
    // Удаляем все секции тестов и практик
    document.querySelectorAll('.quiz-section, .practice-section').forEach(el => el.remove());
    
    // Очищаем контейнер quiz-practice-container, если он есть
    const quizPracticeContainer = document.getElementById('quiz-practice-container');
    if (quizPracticeContainer) {
      quizPracticeContainer.innerHTML = '';
    }
    
    console.log('Очистка завершена');
  }
  
  // Добавление правильного контейнера для тестов и практик
  function ensureQuizPracticeContainer() {
    let container = document.getElementById('quiz-practice-container');
    
    if (!container) {
      // Ищем место для вставки
      const lessonData = document.getElementById('lesson-data');
      const lessonContent = document.getElementById('lesson-content');
      const lessonActions = document.querySelector('.lesson-actions');
      
      // Создаем контейнер
      container = document.createElement('div');
      container.id = 'quiz-practice-container';
      
      // Вставляем в правильное место
      if (lessonData) {
        lessonData.appendChild(container);
      } else if (lessonActions) {
        lessonContent.insertBefore(container, lessonActions);
      } else if (lessonContent) {
        lessonContent.appendChild(container);
      } else {
        // Если ничего не нашли, добавляем в конец main
        document.querySelector('main').appendChild(container);
      }
    }
    
    return container;
  }
  
  // Добавление стилей для тестов и практик
  function addQuizPracticeStyles() {
    // Проверяем, добавлены ли стили
    if (document.querySelector('#quiz-practice-styles')) {
      return;
    }
    
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
      
      .partial-success-message {
        color: #FF9800;
        font-weight: bold;
        padding: 10px;
        background-color: rgba(255, 152, 0, 0.1);
        border-radius: 4px;
      }
    `;
    
    document.head.appendChild(style);
  }
  
  // Проверка и исправление ссылок на скрипты
  function checkRequiredScripts() {
    const requiredScripts = [
      { path: 'JavaScript/quiz_practice_system.js', id: 'quiz-practice-system' },
      { path: 'JavaScript/quiz_practice_loader.js', id: 'quiz-practice-loader' },
      { path: 'JavaScript/course_type_handler.js', id: 'course-type-handler' }
    ];
    
    const courseInfo = detectCourseInfo();
    requiredScripts.push({
      path: `JavaScript/couses_data/${courseInfo.fullType}_quiz_practice.js`,
      id: `${courseInfo.fullType}-quiz-practice`
    });
    
    // Проверяем и добавляем отсутствующие скрипты
    requiredScripts.forEach(script => {
      if (!document.getElementById(script.id) && !document.querySelector(`script[src="${script.path}"]`)) {
        const scriptEl = document.createElement('script');
        scriptEl.id = script.id;
        scriptEl.src = script.path;
        document.body.appendChild(scriptEl);
        console.log(`Добавлен скрипт: ${script.path}`);
      }
    });
  }
  
  // Инициализация отображения тестов и практик для конкретного урока
  function initTestsAndPracticesForLesson(lessonId) {
    const courseInfo = detectCourseInfo();
    console.log(`Инициализация тестов и практик для урока ${lessonId}, курс: ${courseInfo.fullType}`);
    
    // Очищаем все существующие тесты и практики
    cleanupAllTestsAndPractices();
    
    // Проверяем и добавляем стили и скрипты
    addQuizPracticeStyles();
    checkRequiredScripts();
    
    // Обеспечиваем наличие контейнера
    ensureQuizPracticeContainer();
    
    // Используем правильную функцию для загрузки тестов и практик
    setTimeout(() => {
      // Проверяем наличие улучшенной функции
      if (typeof window.forceLoadQuizPractice === 'function') {
        window.forceLoadQuizPractice(lessonId, courseInfo.fullType);
      } else if (typeof window.insertQuizPractice === 'function') {
        window.insertQuizPractice(lessonId, courseInfo.fullType);
      } else {
        console.error('Не найдены функции для загрузки тестов и практик!');
      }
    }, 500);
  }
  
  // ========== ОБРАБОТЧИКИ СОБЫТИЙ ==========
  
  // Обработчик события загрузки урока
  function setupLessonEventHandlers() {
    // Обработчик события lessonLoaded
    document.addEventListener('lessonLoaded', function(event) {
      const lessonId = event.detail?.lessonId || parseInt(localStorage.getItem('lastOpenedLesson')) || 1;
      console.log(`Событие lessonLoaded для урока ${lessonId}`);
      initTestsAndPracticesForLesson(lessonId);
    });
    
    // Обработчик событий клика на элементы списка уроков
    document.querySelectorAll('.lesson-list li').forEach(item => {
      item.addEventListener('click', function() {
        const lessonId = this.getAttribute('data-lesson');
        if (lessonId) {
          setTimeout(() => {
            initTestsAndPracticesForLesson(parseInt(lessonId));
          }, 500);
        }
      });
    });
    
    // Если урок уже загружен, инициализируем тесты и практики
    const currentLessonNum = parseInt(localStorage.getItem('lastOpenedLesson'));
    if (currentLessonNum && document.getElementById('loaded-lesson').style.display !== 'none') {
      initTestsAndPracticesForLesson(currentLessonNum);
    }
  }
  
  // ========== ИНИЦИАЛИЗАЦИЯ ==========
  
  // Определяем информацию о курсе при загрузке
  const courseInfo = detectCourseInfo();
  console.log(`Курс определен: ${courseInfo.fullType}`);
  
  // Настраиваем обработчики событий
  setupLessonEventHandlers();
  
  // Периодически проверяем и исправляем тесты и практики
  setInterval(() => {
    const currentLessonNum = parseInt(localStorage.getItem('lastOpenedLesson'));
    if (currentLessonNum && document.getElementById('loaded-lesson').style.display !== 'none') {
      // Проверяем, есть ли тесты и практики
      const quizContainer = document.querySelector(`.quiz-container[data-lesson="${currentLessonNum}"]`);
      const practiceContainer = document.querySelector(`.practice-container[data-lesson="${currentLessonNum}"]`);
      
      // Если нет ни тестов, ни практик, пытаемся их загрузить
      if (!quizContainer && !practiceContainer) {
        console.log(`Тесты и практики не найдены для урока ${currentLessonNum}, пробуем загрузить...`);
        initTestsAndPracticesForLesson(currentLessonNum);
      }
    }
  }, 3000);
  
  console.log('Улучшенный обработчик курсов инициализирован');
});
