/**
 * Сверхпростое решение для отображения тестов и практик
 * Максимально прямолинейный код без сложной логики
 */

// Запуск после полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Запуск супер-простого фиксера');
  
  // Определяем тип курса
  let courseType, courseLanguage;
  
  // Из метатегов
  const typeTag = document.querySelector('meta[name="course-type"]');
  const langTag = document.querySelector('meta[name="course-language"]');
  
  if (typeTag && langTag) {
    courseType = typeTag.getAttribute('content');
    courseLanguage = langTag.getAttribute('content');
  } else {
    // Из URL
    const url = window.location.href.toLowerCase();
    
    if (url.includes('python')) {
      courseType = 'python';
    } else if (url.includes('database')) {
      courseType = 'database';
    } else {
      courseType = 'html_css';
    }
    
    courseLanguage = url.includes('rus') ? 'ru' : 'kz';
  }
  
  console.log(`Определен курс: ${courseType}, язык: ${courseLanguage}`);
  
  // Задержка для гарантированной загрузки DOM
  setTimeout(function() {
    loadContent(getCurrentLessonId(), courseType, courseLanguage);
  }, 500);
  
  // Отслеживаем клики по урокам
  document.querySelectorAll('.lesson-list li').forEach(item => {
    item.addEventListener('click', function() {
      const lessonId = this.getAttribute('data-lesson');
      if (lessonId) {
        localStorage.setItem('lastOpenedLesson', lessonId);
        
        // Загружаем содержимое с задержкой
        setTimeout(function() {
          loadContent(parseInt(lessonId), courseType, courseLanguage);
        }, 1000);
      }
    });
  });
});

// Получение текущего урока
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
  
  // По умолчанию
  return 1;
}

// Загрузка содержимого для урока
function loadContent(lessonId, courseType, courseLanguage) {
  console.log(`Загрузка содержимого для урока ${lessonId}`);
  
  // Очищаем предыдущее содержимое
  removePrevious();
  
  // Восстанавливаем кнопку завершения урока
  ensureCompletionButton();
  
  // Полное имя типа курса
  const fullCourseType = `${courseType}_${courseLanguage}`;
  
  // Проверяем доступность данных
  let dataSource;
  
  // Пробуем разные варианты имен переменных с данными
  if (window.pythonRuQuizPractice && courseType === 'python' && courseLanguage === 'ru') {
    dataSource = window.pythonRuQuizPractice;
  } else if (window.databaseRuQuizPractice && courseType === 'database' && courseLanguage === 'ru') {
    dataSource = window.databaseRuQuizPractice;
  } else if (window.htmlCssRuQuizPractice && courseType === 'html_css' && courseLanguage === 'ru') {
    dataSource = window.htmlCssRuQuizPractice;
  } else {
    // Если данные не найдены, пробуем загрузить скрипт
    const scriptSrc = `JavaScript/couses_data/${fullCourseType}_quiz_practice.js`;
    console.log(`Попытка загрузить: ${scriptSrc}`);
    
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.onload = function() {
      // Проверяем снова после загрузки
      if (window.pythonRuQuizPractice && courseType === 'python' && courseLanguage === 'ru') {
        displayContent(window.pythonRuQuizPractice, lessonId, courseType, courseLanguage);
      } else if (window.databaseRuQuizPractice && courseType === 'database' && courseLanguage === 'ru') {
        displayContent(window.databaseRuQuizPractice, lessonId, courseType, courseLanguage);
      } else if (window.htmlCssRuQuizPractice && courseType === 'html_css' && courseLanguage === 'ru') {
        displayContent(window.htmlCssRuQuizPractice, lessonId, courseType, courseLanguage);
      }
    };
    document.body.appendChild(script);
    return;
  }
  
  // Отображаем содержимое, если данные найдены
  if (dataSource) {
    displayContent(dataSource, lessonId, courseType, courseLanguage);
  }
}

// Удаление предыдущего содержимого
function removePrevious() {
  // Удаляем все контейнеры тестов
  document.querySelectorAll('.quiz-container').forEach(el => el.remove());
  
  // Удаляем все контейнеры практик
  document.querySelectorAll('.practice-container').forEach(el => el.remove());
  
  // Удаляем все секции тестов и практик
  document.querySelectorAll('.quiz-section, .practice-section').forEach(el => el.remove());
  
  // Удаляем все контейнеры для разных уровней тестов
  document.querySelectorAll('.level-container').forEach(el => el.remove());
  
  // Удаляем общий контейнер, если есть
  const container = document.getElementById('quiz-practice-container');
  if (container) {
    container.remove();
  }
}

// Восстановление кнопки завершения урока
function ensureCompletionButton() {
  const lessonActions = document.querySelector('.lesson-actions');
  if (!lessonActions) return;
  
  if (!lessonActions.querySelector('.complete-btn')) {
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

// Отображение содержимого
function displayContent(dataSource, lessonId, courseType, courseLanguage) {
  // Проверяем наличие данных для урока
  if (!dataSource[lessonId]) {
    console.error(`Нет данных для урока ${lessonId}`);
    return;
  }
  
  console.log(`Данные для урока ${lessonId} найдены:`, dataSource[lessonId]);
  
  // Создаем контейнер
  const container = document.createElement('div');
  container.id = 'quiz-practice-container';
  container.className = 'quiz-practice-container';
  
  // Получаем данные урока
  const lessonData = dataSource[lessonId];
  
  // Решаем, что показывать: тест или практику
  let showTest = false;
  let showPractice = false;
  
  // Проверяем наличие теста и практики
  const hasTest = lessonData.quizQuestions && lessonData.quizAnswers;
  const hasPractice = lessonData.practiceTask && lessonData.practiceAnswer;
  
  // Особый случай для урока 9 курса Python - показываем и тест, и практику
  if (lessonId === 9 && courseType === 'python') {
    showTest = hasTest || (lessonData.quizQuestionsEasy && lessonData.quizAnswersEasy);
    showPractice = hasPractice;
  } else {
    // Стандартное правило: четные уроки - тесты, нечетные - практики
    if (lessonId % 2 === 0) {
      showTest = hasTest;
      showPractice = !hasTest && hasPractice;
    } else {
      showPractice = hasPractice;
      showTest = !hasPractice && hasTest;
    }
  }
  
  // Добавляем тест, если нужно
  if (showTest) {
    // Обычный тест
    if (hasTest) {
      addTest(container, lessonData, lessonId, courseType);
    }
    // Многоуровневый тест для урока 9
    else if (lessonId === 9 && courseType === 'python' && 
             lessonData.quizQuestionsEasy && lessonData.quizAnswersEasy) {
      addMultiLevelTest(container, lessonData, lessonId, courseType);
    }
  }
  
  // Добавляем практику, если нужно
  if (showPractice && hasPractice) {
    addPractice(container, lessonData, lessonId, courseType);
  }
  
  // Добавляем стили
  addStyles();
  
  // Находим место для вставки
  const lessonContent = document.getElementById('lesson-content');
  if (lessonContent) {
    // Проверяем наличие блока с действиями для урока
    const lessonActions = document.querySelector('.lesson-actions');
    
    // Если блок с действиями существует и является потомком lessonContent,
    // вставляем перед ним, иначе просто добавляем в конец
    if (lessonActions && lessonContent.contains(lessonActions)) {
      lessonContent.insertBefore(container, lessonActions);
    } else {
      lessonContent.appendChild(container);
    }
  } else {
    // Если не нашли lesson-content, ищем другие варианты
    const lessonData = document.getElementById('lesson-data');
    if (lessonData) {
      lessonData.appendChild(container);
    } else {
      // В крайнем случае добавляем в конец body
      document.body.appendChild(container);
    }
  }
}

// Добавление обычного теста
function addTest(container, lessonData, lessonId, courseType) {
  const section = document.createElement('section');
  section.className = 'quiz-section';
  
  const heading = document.createElement('h3');
  heading.textContent = 'Тест';
  section.appendChild(heading);
  
  const quizContainer = document.createElement('div');
  quizContainer.className = 'quiz-container';
  quizContainer.setAttribute('data-lesson', lessonId);
  
  // Добавляем вопросы
  lessonData.quizQuestions.forEach((question, index) => {
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
      radio.name = `q${index + 1}`;
      radio.id = `q${index + 1}_${optionValue}`;
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
  submitButton.textContent = 'Проверить';
  submitButton.setAttribute('data-lesson', lessonId);
  
  submitButton.addEventListener('click', function() {
    if (typeof window.checkQuiz === 'function') {
      window.checkQuiz(lessonId, courseType);
    } else {
      console.error('Функция checkQuiz не найдена');
      alert('Функция проверки теста не найдена');
    }
  });
  
  buttonDiv.appendChild(submitButton);
  quizContainer.appendChild(buttonDiv);
  
  // Добавляем место для результата
  const resultDiv = document.createElement('div');
  resultDiv.className = 'quiz-result';
  quizContainer.appendChild(resultDiv);
  
  section.appendChild(quizContainer);
  container.appendChild(section);
}

// Добавление многоуровневого теста
function addMultiLevelTest(container, lessonData, lessonId, courseType) {
  const section = document.createElement('section');
  section.className = 'quiz-section';
  
  const heading = document.createElement('h3');
  heading.textContent = 'Многоуровневый тест';
  section.appendChild(heading);
  
  const levels = [
    { name: 'Легкий уровень', questions: lessonData.quizQuestionsEasy, answers: lessonData.quizAnswersEasy, level: 1 },
    { name: 'Средний уровень', questions: lessonData.quizQuestionsMedium, answers: lessonData.quizAnswersMedium, level: 2 },
    { name: 'Сложный уровень', questions: lessonData.quizQuestionsHard, answers: lessonData.quizAnswersHard, level: 3 }
  ];
  
  levels.forEach(level => {
    if (!level.questions) return;
    
    const levelContainer = document.createElement('div');
    levelContainer.className = 'level-container';
    
    const levelHeading = document.createElement('h4');
    levelHeading.textContent = level.name;
    levelContainer.appendChild(levelHeading);
    
    const quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';
    quizContainer.setAttribute('data-lesson', lessonId);
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
    submitButton.textContent = 'Проверить';
    submitButton.setAttribute('data-lesson', lessonId);
    submitButton.setAttribute('data-level', level.level);
    
    submitButton.addEventListener('click', function() {
      if (typeof window.checkQuiz === 'function') {
        window.checkQuiz(lessonId, courseType, level.level);
      } else {
        console.error('Функция checkQuiz не найдена');
        alert('Функция проверки теста не найдена');
      }
    });
    
    buttonDiv.appendChild(submitButton);
    quizContainer.appendChild(buttonDiv);
    
    // Добавляем место для результата
    const resultDiv = document.createElement('div');
    resultDiv.className = 'quiz-result';
    resultDiv.setAttribute('data-level', level.level);
    quizContainer.appendChild(resultDiv);
    
    levelContainer.appendChild(quizContainer);
    section.appendChild(levelContainer);
  });
  
  container.appendChild(section);
}

// Добавление практики
function addPractice(container, lessonData, lessonId, courseType) {
  const section = document.createElement('section');
  section.className = 'practice-section';
  
  const heading = document.createElement('h3');
  heading.textContent = 'Практическое задание';
  section.appendChild(heading);
  
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
  
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'practice-buttons';
  
  const submitButton = document.createElement('button');
  submitButton.className = 'practice-submit-btn';
  submitButton.textContent = 'Проверить';
  submitButton.setAttribute('data-lesson', lessonId);
  
  submitButton.addEventListener('click', function() {
    if (typeof window.checkPractice === 'function') {
      window.checkPractice(lessonId, courseType);
    } else {
      console.error('Функция checkPractice не найдена');
      alert('Функция проверки практики не найдена');
    }
  });
  
  const runButton = document.createElement('button');
  runButton.className = 'practice-run-btn';
  runButton.textContent = 'Запустить';
  runButton.setAttribute('data-lesson', lessonId);
  
  runButton.addEventListener('click', function() {
    if (typeof window.runCode === 'function') {
      window.runCode(lessonId, courseType);
    } else {
      console.error('Функция runCode не найдена');
      alert('Функция запуска кода не найдена');
    }
  });
  
  buttonDiv.appendChild(submitButton);
  buttonDiv.appendChild(runButton);
  practiceContainer.appendChild(buttonDiv);
  
  const resultDiv = document.createElement('div');
  resultDiv.className = 'practice-result';
  practiceContainer.appendChild(resultDiv);
  
  section.appendChild(practiceContainer);
  container.appendChild(section);
}

// Добавление стилей
function addStyles() {
  if (document.getElementById('quiz-practice-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'quiz-practice-styles';
  style.textContent = `
    #quiz-practice-container {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .quiz-container, .practice-container {
      background-color: var(--bg-secondary, #f5f5f5);
      border-radius: 8px;
      padding: 20px;
      margin: 15px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .level-container {
      margin-bottom: 30px;
    }
    .level-container h4 {
      margin-top: 15px;
      margin-bottom: 10px;
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
