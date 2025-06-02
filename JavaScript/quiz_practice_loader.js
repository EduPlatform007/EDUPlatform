
// Функция для вставки тестов и практических заданий в урок

// Функция для определения типа курса
function detectCourseType() {
  // Проверяем URL страницы
  const path = window.location.pathname.toLowerCase();
  const isRussian = path.includes('_rus') || path.includes('rus.');
  
  if (path.includes('python')) {
    return isRussian ? 'python_ru' : 'python_kz';
  } else if (path.includes('database')) {
    return isRussian ? 'database_ru' : 'database_kz';
  } else {
    // По умолчанию HTML/CSS курс
    return isRussian ? 'html_css_ru' : 'html_css_kz';
  }
}

function insertQuizPractice(lessonId, courseType) {
  console.log('🚀 insertQuizPractice() вызван с параметрами:', { lessonId, courseType });

  // Проверим все глобальные объекты с данными
  console.log('⚡ ДИАГНОСТИКА ОБЪЕКТОВ:');
  console.log('htmlCssRuQuizPractice существует:', window.htmlCssRuQuizPractice ? 'ДА' : 'НЕТ');
  if (window.htmlCssRuQuizPractice) {
    console.log('Содержимое объекта:', window.htmlCssRuQuizPractice);
    console.log('Количество уроков:', Object.keys(window.htmlCssRuQuizPractice).length);
    console.log('Доступные уроки:', Object.keys(window.htmlCssRuQuizPractice));
  }
  console.log('htmlCssKzQuizPractice существует:', window.htmlCssKzQuizPractice ? 'ДА' : 'НЕТ');
  if (window.htmlCssKzQuizPractice) {
    console.log('Количество уроков KZ:', Object.keys(window.htmlCssKzQuizPractice).length);
  }
  
  // Добавляем дополнительную отладку для первого урока русской версии
  if ((lessonId == 1 || lessonId == '1') && courseType === 'html_css_ru') {
    console.log('⚡ ДИАГНОСТИКА ПЕРВОГО УРОКА РУССКОЙ ВЕРСИИ:');
    if (window.htmlCssRuQuizPractice) {
      console.log('Данные для ключа "1":', window.htmlCssRuQuizPractice['1']);
      console.log('Данные для ключа 1:', window.htmlCssRuQuizPractice[1]);
      
      if (window.htmlCssRuQuizPractice['1']) {
        console.log('Тестовые вопросы для ключа "1":', window.htmlCssRuQuizPractice['1'].quizQuestions);
        console.log('Ответы на тест для ключа "1":', window.htmlCssRuQuizPractice['1'].quizAnswers);
      }
      
      if (window.htmlCssRuQuizPractice[1]) {
        console.log('Тестовые вопросы для ключа 1:', window.htmlCssRuQuizPractice[1].quizQuestions);
        console.log('Ответы на тест для ключа 1:', window.htmlCssRuQuizPractice[1].quizAnswers);
      }
    }
  }

  if (!courseType) {
    courseType = detectCourseType();
    console.log('📦 Автоматически определен courseType:', courseType);
  }

  const globalDataKey = {
    'html_css_kz': 'htmlCssKzQuizPractice',
    'html_css_ru': 'htmlCssRuQuizPractice',
    'python_kz': 'pythonKzQuizPractice',
    'python_ru': 'pythonRuQuizPractice',
    'database_kz': 'databaseKzQuizPractice',
    'database_ru': 'databaseRuQuizPractice'
  }[courseType];

  console.log('🔎 Проверка глобального объекта:', globalDataKey, window[globalDataKey]);

  console.log(`📘 Данные по уроку ${lessonId}:`, window[globalDataKey]?.[lessonId]);

  // Если тип курса не передан, определяем его автоматически
  if (!courseType) {
    // Проверяем URL и определяем тип курса
    courseType = detectCourseType();
    console.log(`Автоопределен тип курса: ${courseType}`);
  }
  console.log(`Запуск функции insertQuizPractice для урока ${lessonId}, курс: ${courseType}`);
  
  // Проверяем, не были ли уже добавлены тесты или практические задания для этого урока
  const existingQuizContainer = document.querySelector(`.quiz-container[data-lesson="${lessonId}"]`);
  const existingPracticeSection = document.querySelector(`.practice-section button[data-lesson="${lessonId}"]`);
  
  if (existingQuizContainer || existingPracticeSection) {
    console.log(`Тесты или практические задания для урока ${lessonId} уже добавлены`);
    return;
  }
  
  // Определяем источник данных в зависимости от типа курса
  let quizPracticeData;
  
  if (courseType === 'html_css_kz') {
    quizPracticeData = window.htmlCssKzQuizPractice;
  } else if (courseType === 'python_kz') {
    quizPracticeData = window.pythonKzQuizPractice;
  } else if (courseType === 'database_kz') {
    quizPracticeData = window.databaseKzQuizPractice;
  } else if (courseType === 'database_ru') {
    quizPracticeData = window.databaseRuQuizPractice;
  } else if (courseType === 'python_ru') {
    quizPracticeData = window.pythonRuQuizPractice;
  } else if (courseType === 'html_css_ru') {
    quizPracticeData = window.htmlCssRuQuizPractice;
  } else {
    console.error(`Неизвестный тип курса: ${courseType}`);
    return;
  }
  
  // Проверяем, есть ли тесты и практические задания для этого урока
  console.log(`[DEBUG] Проверяем данные для курса ${courseType}, урок ${lessonId}`);
  // 👇 Гарантируем, что переменная window.имя существует
if (courseType === 'html_css_ru') {
  window.htmlCssRuQuizPractice = window.htmlCssRuQuizPractice || {};
  quizPracticeData = window.htmlCssRuQuizPractice;
} else if (courseType === 'python_ru') {
  window.pythonRuQuizPractice = window.pythonRuQuizPractice || {};
  quizPracticeData = window.pythonRuQuizPractice;
} else if (courseType === 'database_ru') {
  window.databaseRuQuizPractice = window.databaseRuQuizPractice || {};
  quizPracticeData = window.databaseRuQuizPractice;
} else if (courseType === 'html_css_kz') {
  window.htmlCssKzQuizPractice = window.htmlCssKzQuizPractice || {};
  quizPracticeData = window.htmlCssKzQuizPractice;
} else if (courseType === 'python_kz') {
  window.pythonKzQuizPractice = window.pythonKzQuizPractice || {};
  quizPracticeData = window.pythonKzQuizPractice;
} else if (courseType === 'database_kz') {
  window.databaseKzQuizPractice = window.databaseKzQuizPractice || {};
  quizPracticeData = window.databaseKzQuizPractice;
} else {
  console.error(`Неизвестный тип курса: ${courseType}`);
  return;
}

  // Проверяем наличие данных
  if (!quizPracticeData) {
    console.error(`Данные для курса ${courseType} не найдены. Проверьте, что файл с данными загружен.`);
    
    // Попытка автоматически создать пустой объект, если данных нет
    if (courseType === 'html_css_ru') {
      window.htmlCssRuQuizPractice = window.htmlCssRuQuizPractice || {};
      quizPracticeData = window.htmlCssRuQuizPractice;
    } else if (courseType === 'python_ru') {
      window.pythonRuQuizPractice = window.pythonRuQuizPractice || {};
      quizPracticeData = window.pythonRuQuizPractice;
    } else if (courseType === 'database_ru') {
      window.databaseRuQuizPractice = window.databaseRuQuizPractice || {};
      quizPracticeData = window.databaseRuQuizPractice;
    } else {
      return;
    }
  }
  
  // Проверяем наличие данных для конкретного урока
  
  // Специальная обработка для первого урока в русской версии - проверяем до проверки наличия данных
  if ((lessonId == 1 || lessonId == '1') && courseType === 'html_css_ru') {
    console.log('Специальная обработка для первого урока в русской версии');
    
    // Добавляем тестовые данные напрямую в объект данных
  
  }
  
  // Продолжаем обычную проверку
  if (!quizPracticeData[lessonId]) {
    console.warn(`Данные для урока ${lessonId} курса ${courseType} не найдены.`);
    console.log('Содержимое объекта с данными:', quizPracticeData);
    
    // Дополнительная проверка для первого урока в русской версии
    if ((lessonId == 1 || lessonId == '1') && courseType === 'html_css_ru') {
      
      // Если данные не найдены, создаем их
      console.log('Создаем полноценные данные для первого урока');
      quizPracticeData[lessonId] = {
        practiceTask: `
          <p>Напишите HTML код, показанный ниже. Этот код формирует основную структуру простого HTML документа:</p>
          <ol>
            <li>Напишите DOCTYPE декларацию</li>
            <li>Добавьте теги html, head и body</li>
            <li>Внутри тега head добавьте тег title с текстом "Моя первая страница"</li>
            <li>Внутри тега body добавьте тег h1 с текстом "Привет, мир!"</li>
            <li>После тега h1 добавьте тег p с текстом "Это моя первая HTML страница"</li>
          </ol>
        `,
        practiceAnswer: `<!DOCTYPE html>
<html>
  <head>
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Привет, мир!</h1>
    <p>Это моя первая HTML страница</p>
  </body>
</html>`
      };
      
      // Добавляем данные и в другие ключи для надежности
      quizPracticeData['1'] = quizPracticeData[lessonId];
      quizPracticeData[1] = quizPracticeData[lessonId];
      
      console.log('Созданы данные для первого урока:', quizPracticeData[lessonId]);
      return;
    }
    
    // Для отладки: проверяем, есть ли данные для других уроков
    console.log(`Проверка данных для курса ${courseType}:`);
    for (let key in quizPracticeData) {
      if (quizPracticeData.hasOwnProperty(key)) {
        console.log(`- Урок ${key}: ${quizPracticeData[key] ? 'Данные есть' : 'Данных нет'}`);
      }
    }
    
    // Если данные для урока не найдены, просто выходим из функции
    console.error(`Данные для урока ${lessonId} не найдены. Загрузите необходимые данные в html_css_ru_quiz_practice.js.`);
    return;
  }
  
  // Используем стандартную логику загрузки данных для всех уроков
  // Убираем специальную обработку для первого урока
  
  let quizPractice = quizPracticeData[lessonId];
  
  console.log(`Загружены данные для урока ${lessonId}:`, quizPractice);
  
  console.log(`Данные для урока ${lessonId}:`, quizPractice);
  console.log('Проверка наличия тестовых вопросов:', quizPractice?.quizQuestions);
  console.log('Проверка наличия ответов на тест:', quizPractice?.quizAnswers);
  console.log('Проверка наличия практического задания:', quizPractice?.practiceTask?.substring(0, 50) + '...');
  console.log('Проверка наличия ответа на практику:', quizPractice?.practiceAnswer?.substring(0, 50) + '...');
  
  const lessonContent = document.getElementById('lesson-data');
  if (!lessonContent) {
    console.error(`Контейнер для урока не найден`);
    return;
  }
  
  // Если это 9-й урок, вставляем все три уровня тестов и практическое задание
  else {
    // Для всех уроков всегда показываем и тесты, и практические задания
    // для всех курсов независимо от языка
    // Раньше была особая логика для русских курсов, но сейчас она отключена
    // Настройки для всех типов курсов
    const shouldShowTest = true;
    const shouldShowPractice = true;
    
    if (quizPractice && quizPractice.quizQuestions && quizPractice.quizQuestions.length > 0 && shouldShowTest) {
      console.log(`Вставляем тест для урока ${lessonId}, курс ${courseType}`);
      if (quizPractice.quizQuestions && quizPractice.quizAnswers) {
        console.log(`Тест для урока ${lessonId}:`, quizPractice.quizQuestions);
        
        // Проверяем, что вопросы существуют и их больше 0
        if (quizPractice.quizQuestions.length > 0) {
          // Создаем раздел для теста
          const quizSection = document.createElement('section');
          quizSection.className = 'quiz-section';
          
          // Добавляем заголовок теста
          const quizTitle = document.createElement('h3');
          quizTitle.textContent = 'Тест';
          quizSection.appendChild(quizTitle);
          
          // Создаем контейнер для теста
          const quizContainer = document.createElement('div');
          quizContainer.className = 'quiz-container';
          quizContainer.setAttribute('data-lesson', lessonId);
          
          // Добавляем информационные блоки перед группами вопросов по уровням сложности
        // Стили для информационных блоков
        const difficultyStyleId = 'difficulty-levels-style';
        if (!document.getElementById(difficultyStyleId)) {
          const style = document.createElement('style');
          style.id = difficultyStyleId;
          style.textContent = `
            .difficulty-level-info {
              margin: 15px 0;
              padding: 10px;
              border-radius: 5px;
              font-size: 14px;
              font-weight: bold;
              text-align: center;
            }
            .easy-level-info {
              background-color: rgba(76, 175, 80, 0.2);
              border-left: 4px solid #4CAF50;
            }
            .medium-level-info {
              background-color: rgba(255, 152, 0, 0.2);
              border-left: 4px solid #FF9800;
            }
            .hard-level-info {
              background-color: rgba(244, 67, 54, 0.2);
              border-left: 4px solid #F44336;
            }
          `;
          document.head.appendChild(style);
        }
        
        // Добавляем вопросы
        quizPractice.quizQuestions.forEach((question, index) => {
          // === 🌐 Определяем язык и номер урока
          const lang = (JSON.parse(localStorage.getItem('currentUser') || '{}').language || 'kk').toLowerCase();
          const isKZ = lang.includes('kk') || lang.includes('kz') || lang.includes('kaz');
        
          // === 🔔 Добавляем надписи ТОЛЬКО в 9 уроке
          if (lessonId === 9 && (index === 0 || index === 5 || index === 10)) {
            const levelLabel = document.createElement('div');
            levelLabel.className = 'difficulty-label';
            levelLabel.textContent =
              index === 0  ? (isKZ ? '🟢 Оңай сұрақтар (1–5)'      : '🟢 Легкие вопросы (1–5)') :
              index === 5  ? (isKZ ? '🟠 Орташа сұрақтар (6–10)'   : '🟠 Средние вопросы (6–10)') :
              index === 10 ? (isKZ ? '🔴 Қиын сұрақтар (11–15)'    : '🔴 Сложные вопросы (11–15)') : '';
            quizContainer.appendChild(levelLabel);
          }
        
          // === СОЗДАНИЕ ВОПРОСА ===
          const questionId = `q${index + 1}`;
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
        
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `${questionId}_${optionValue}`;
            input.name = questionId;
            input.value = optionValue;
            
            // Добавляем дополнительные атрибуты для русской версии
            if (courseType === 'html_css_ru' && question.correctAnswer) {
              // Добавляем атрибут данных для отладки
              input.dataset.correctAnswer = question.correctAnswer;
              console.log(`Добавлен атрибут correctAnswer=${question.correctAnswer} для вопроса ${questionId}`);
            }
        
            const label = document.createElement('label');
            label.htmlFor = `${questionId}_${optionValue}`;
            label.textContent = option;
        
            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            optionsDiv.appendChild(optionDiv);
          });
        
          questionDiv.appendChild(optionsDiv);
          quizContainer.appendChild(questionDiv);
        });
        
        
        const style = document.createElement('style');
        style.textContent = `
          .difficulty-label {
            font-weight: bold;
            margin-top: 20px;
            margin-bottom: 10px;
            padding: 8px 12px;
            border-left: 4px solid #2196f3;
            background-color: #e3f2fd;
            border-radius: 4px;
          }
        `;
        document.head.appendChild(style);
                
          
          // Добавляем кнопку проверки
          const checkButton = document.createElement('button');
          checkButton.className = 'quiz-submit-btn';
          checkButton.textContent = 'Тексеру';
          checkButton.setAttribute('data-lesson', lessonId);
          checkButton.onclick = function() {
            checkQuiz(lessonId, courseType);
            window.checkQuiz = checkQuiz;

          };
          quizContainer.appendChild(checkButton);
          
          // Добавляем контейнер для результата
          const resultDiv = document.createElement('div');
          resultDiv.className = 'quiz-result';
          quizContainer.appendChild(resultDiv);
          
          // Добавляем тест в раздел
          quizSection.appendChild(quizContainer);
          
          // Добавляем раздел в урок
          lessonContent.appendChild(quizSection);
        } else {
          console.error(`Вопросы для теста в уроке ${lessonId} не найдены или пусты`);
        }
      } else {
        console.error(`Тест или ответы для урока ${lessonId} не найдены`);
      }
    } 
    // Вставляем практическое задание, если оно есть в данных
    // Используем переменную shouldShowPractice    // Добавляем практическое задание, если оно есть
    if (quizPractice && quizPractice.practiceTask && shouldShowPractice) {
      console.log(`Вставляем практическое задание для урока ${lessonId}`);
      console.log('Содержимое практического задания:', quizPractice.practiceTask.substring(0, 100) + '...');
      console.log(`Практическое задание для урока ${lessonId}:`, quizPractice.practiceTask);
        
        // Создаем раздел для практического задания
        const practiceSection = document.createElement('section');
        practiceSection.className = 'practice-section';
        
        // Добавляем заголовок практического задания с учетом языка
        const practiceTitle = document.createElement('h3');
        // Получаем текущий язык
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const lang = userData.language || 'kk';
        // Устанавливаем текст заголовка в зависимости от языка
        practiceTitle.textContent = lang === 'ru' ? 'Практическое задание' : 'Практикалық тапсырма';
        practiceSection.appendChild(practiceTitle);
        
        // Добавляем описание задания
        const practiceTask = document.createElement('div');
        practiceTask.className = 'practice-task';
        practiceTask.innerHTML = quizPractice.practiceTask;
        practiceSection.appendChild(practiceTask);
        
        // Добавляем поле для ввода кода
        const codeTextarea = document.createElement('textarea');
        codeTextarea.className = 'practice-code';
        codeTextarea.id = `practice-code-${lessonId}`;
        codeTextarea.rows = 10;
        codeTextarea.placeholder = 'Кодты осында жазыңыз';
        practiceSection.appendChild(codeTextarea);
        
        // Добавляем кнопку проверки
        const checkButton = document.createElement('button');
        checkButton.className = 'practice-submit-btn';
        checkButton.textContent = 'Тексеру';
        checkButton.setAttribute('data-lesson', lessonId);
        
        // Добавляем обработчик события с логированием
        checkButton.onclick = function() {
          console.log(`Нажата кнопка проверки для урока ${lessonId}, тип курса: ${courseType}`);
          
          // Проверяем, что функция checkPractice существует
          if (typeof window.checkPractice === 'function') {
            window.checkPractice(lessonId, courseType);
          } else {
            console.error('Функция checkPractice не найдена!');
            alert('Ошибка: Функция проверки не найдена. Пожалуйста, обновите страницу.');
          }
        };
        practiceSection.appendChild(checkButton);
        
        // Добавляем контейнер для результата
        const resultDiv = document.createElement('div');
        resultDiv.className = 'practice-result';
        practiceSection.appendChild(resultDiv);
        
        // Добавляем практическое задание в урок
        lessonContent.appendChild(practiceSection);
    }
  }
  

  // Обновляем состояние существующей кнопки завершения урока
  updateCompleteButton(lessonId);
}

// Функция для создания HTML-кода теста с учетом уровня сложности
function createQuizHTML(lessonId, questions, level = '') {
  // Получаем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = userData.language || 'kk';
  
  // Начинаем создавать HTML
  let html = `<div class="quiz-container" data-lesson="${lessonId}" data-level="${level}">`;
  
  // Проверяем, что вопросы существуют и их больше 0
  if (!questions || questions.length === 0) {
    html += `<p>Тест не найден</p></div>`;
    return html;
  }
  
  // Добавляем вопросы
  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    
    // Пропускаем некорректные вопросы
    if (!question || !question.text || !question.options || question.options.length === 0) {
      continue;
    }
    
    const questionId = level ? `q${index + 1}_${level}` : `q${index + 1}`;
    
    html += `<div class="quiz-question">
      <p class="question-text">${index + 1}. ${question.text}</p>
      <div class="quiz-options">`;
    
    // Добавляем варианты ответов
    for (let optIndex = 0; optIndex < question.options.length; optIndex++) {
      const option = question.options[optIndex];
      const optionValue = String.fromCharCode(97 + optIndex); // a, b, c, d
      
      html += `<div class="quiz-option">
        <input type="radio" id="${questionId}_${optionValue}" name="${questionId}" value="${optionValue}">
        <label for="${questionId}_${optionValue}">${option}</label>
      </div>`;
    }
    
    html += `</div></div>`;
  }
  
  // Добавляем кнопку проверки
  const checkButtonText = lang === 'kk' ? 'Тексеру' : 'Проверить';
  const checkFunction = level ? `checkQuizLevel(${lessonId}, '${level}')` : `checkQuiz(${lessonId})`;
  
  html += `<button class="quiz-submit-btn" data-lesson="${lessonId}" data-level="${level}" onclick="${checkFunction}">${checkButtonText}</button>
    <div class="quiz-result"></div>
  </div>`;
  
  return html;
}


// Функция для сохранения результата теста с учетом уровня сложности
function saveQuizResult(lessonId, level, isCorrect) {
  const currentCourse = localStorage.getItem('lastOpenedCourse') || 'html';
  const key = level ? `${currentCourse}_lesson${lessonId}_quiz_${level}` : `${currentCourse}_lesson${lessonId}_quiz`;
  localStorage.setItem(key, isCorrect ? 'true' : 'false');
}


// Функция для обновления состояния кнопки завершения урока
function updateCompleteButton(lessonId) {
  // Находим существующую кнопку завершения урока
  const completeButton = document.querySelector('.complete-btn');
  if (!completeButton) {
    console.error('Кнопка завершения урока не найдена');
    return;
  }
  
  // Проверяем, завершен ли урок
  const completed = isLessonCompleted(lessonId);
  
  // Обновляем атрибуты кнопки
  if (completed) {
    completeButton.disabled = false;
    completeButton.classList.remove('disabled');
    completeButton.classList.add('enabled');
    completeButton.setAttribute('data-lesson', lessonId);
    
    // Обновляем обработчик события
    completeButton.onclick = function() {
      window.completeLesson(lessonId);
    };
  } else {
    completeButton.disabled = true;
    completeButton.classList.add('disabled');
    completeButton.classList.remove('enabled');
    completeButton.setAttribute('data-lesson', lessonId);
    
    // Обновляем обработчик события
    completeButton.onclick = function() {
      // Показываем сообщение о необходимости выполнить все задания
      const resultMessage = document.getElementById('result-message');
      if (resultMessage) {
        // Получаем текущий язык
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const lang = userData.language || 'kk';
        
        resultMessage.innerHTML = `<p class="error-message">
          ❌ ${lang === 'kk' ? 'Сабақты аяқтау үшін барлық тапсырмаларды орындаңыз!' : 'Для завершения урока выполните все задания!'}</p>`;
      }
    };
  }
}

// Добавляем функции в глобальную область видимости
window.insertQuizPractice = insertQuizPractice;
window.isLessonCompleted = isLessonCompleted;

// Добавляем обработчик события загрузки урока
document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, есть ли сохраненный номер урока
  const savedLessonId = localStorage.getItem('lastOpenedLesson');
  if (savedLessonId) {
    // Вставляем тесты и практические задания в урок
    setTimeout(() => {
      insertQuizPractice(parseInt(savedLessonId));
    }, 500);
  }
  
  // Добавляем обработчик события загрузки урока
  document.addEventListener('lessonLoaded', function() {
    // Получаем текущий номер урока
    const currentLessonId = localStorage.getItem('lastOpenedLesson');
    if (currentLessonId) {
      // Вставляем тесты и практические задания в урок
      insertQuizPractice(parseInt(currentLessonId));
    }
  });
});
window.insertQuizPractice = insertQuizPractice;
window.checkQuiz = checkQuiz;
window.completeLesson = completeLesson; 
