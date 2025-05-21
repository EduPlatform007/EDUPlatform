/**
 * Файл для вставки тестов и практических заданий в уроки
 */

// Функция для вставки тестов и практических заданий в урок
// Функция для вставки тестов и практических заданий в урок
function insertQuizPractice(lessonId, courseType = 'html_css_kz') {
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
  if (!quizPracticeData || !quizPracticeData[lessonId]) {
    console.error(`Тесты и практические задания для урока ${lessonId} курса ${courseType} не найдены`);
    return;
  }
  
  const quizPractice = quizPracticeData[lessonId];
  console.log(`Данные для урока ${lessonId}:`, quizPractice);
  
  const lessonContent = document.getElementById('lesson-data');
  if (!lessonContent) {
    console.error(`Контейнер для урока не найден`);
    return;
  }
  
  // Если это 9-й урок, вставляем все три уровня тестов и практическое задание
  if (lessonId === 9) {
    console.log(`Урок 9 - специальный, вставляем тесты трех уровней сложности`);
    
    // Вставляем легкие вопросы
    if (quizPractice.quizQuestionsEasy && quizPractice.quizAnswersEasy) {
      console.log(`Легкие вопросы для урока 9:`, quizPractice.quizQuestionsEasy);
      
      // Проверяем, что вопросы существуют и их больше 0
      if (quizPractice.quizQuestionsEasy.length > 0) {
        // Создаем раздел для теста
        const easyQuizSection = document.createElement('section');
        easyQuizSection.className = 'quiz-section';
        
        // Добавляем заголовок теста
        const quizTitle = document.createElement('h3');
        quizTitle.textContent = 'Тест: Жеңіл деңгей';
        easyQuizSection.appendChild(quizTitle);
        
        // Создаем контейнер для теста
        const quizContainer = document.createElement('div');
        quizContainer.className = 'quiz-container';
        quizContainer.setAttribute('data-lesson', lessonId);
        quizContainer.setAttribute('data-level', 'easy');
        
        // Добавляем вопросы
        quizPractice.quizQuestionsEasy.forEach((question, index) => {
          // Проверяем, что вопрос и варианты ответов существуют
          if (question && question.text && question.options && question.options.length > 0) {
            const questionId = `q${index + 1}_easy`;
            
            // Создаем контейнер для вопроса
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            
            // Добавляем текст вопроса
            const questionText = document.createElement('p');
            questionText.className = 'question-text';
            questionText.textContent = `${index + 1}. ${question.text}`;
            questionDiv.appendChild(questionText);
            
            // Создаем контейнер для вариантов ответов
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'quiz-options';
            
            // Добавляем варианты ответов
            question.options.forEach((option, optIndex) => {
              const optionValue = String.fromCharCode(97 + optIndex); // a, b, c, d
              
              const optionDiv = document.createElement('div');
              optionDiv.className = 'quiz-option';
              
              const input = document.createElement('input');
              input.type = 'radio';
              input.id = `${questionId}_${optionValue}`;
              input.name = questionId;
              input.value = optionValue;
              
              const label = document.createElement('label');
              label.htmlFor = `${questionId}_${optionValue}`;
              label.textContent = option;
              
              optionDiv.appendChild(input);
              optionDiv.appendChild(label);
              optionsDiv.appendChild(optionDiv);
            });
            
            questionDiv.appendChild(optionsDiv);
            quizContainer.appendChild(questionDiv);
          }
        });
        
        // Добавляем кнопку проверки
        const checkButton = document.createElement('button');
        checkButton.className = 'quiz-submit-btn';
        checkButton.textContent = 'Тексеру';
        checkButton.setAttribute('data-lesson', lessonId);
        checkButton.setAttribute('data-level', 'easy');
        checkButton.onclick = function() {
          window.checkQuizLevel(lessonId, 'easy', courseType);
        };
        quizContainer.appendChild(checkButton);
        
        // Добавляем стили для разных уровней сложности
        quizContainer.classList.add('easy-level');
        
        // Добавляем контейнер для результата
        const resultDiv = document.createElement('div');
        resultDiv.className = 'quiz-result';
        quizContainer.appendChild(resultDiv);
        
        // Добавляем тест в раздел
        easyQuizSection.appendChild(quizContainer);
        
        // Добавляем раздел в урок
        lessonContent.appendChild(easyQuizSection);
      } else {
        console.error(`Легкие вопросы для урока 9 не найдены или пусты`);
      }
    } else {
      console.error(`Легкие вопросы или ответы для урока 9 не найдены`);
    }
    
    // Вставляем средние вопросы
    if (quizPractice.quizQuestionsMedium && quizPractice.quizAnswersMedium) {
      console.log(`Средние вопросы для урока 9:`, quizPractice.quizQuestionsMedium);
      
      // Проверяем, что вопросы существуют и их больше 0
      if (quizPractice.quizQuestionsMedium.length > 0) {
        // Создаем раздел для теста
        const mediumQuizSection = document.createElement('section');
        mediumQuizSection.className = 'quiz-section';
        
        // Добавляем заголовок теста
        const quizTitle = document.createElement('h3');
        quizTitle.textContent = 'Тест: Орташа деңгей';
        mediumQuizSection.appendChild(quizTitle);
        
        // Создаем контейнер для теста
        const quizContainer = document.createElement('div');
        quizContainer.className = 'quiz-container';
        quizContainer.setAttribute('data-lesson', lessonId);
        quizContainer.setAttribute('data-level', 'medium');
        
        // Добавляем вопросы
        quizPractice.quizQuestionsMedium.forEach((question, index) => {
          // Проверяем, что вопрос и варианты ответов существуют
          if (question && question.text && question.options && question.options.length > 0) {
            const questionId = `q${index + 1}_medium`;
            
            // Создаем контейнер для вопроса
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            
            // Добавляем текст вопроса
            const questionText = document.createElement('p');
            questionText.className = 'question-text';
            questionText.textContent = `${index + 1}. ${question.text}`;
            questionDiv.appendChild(questionText);
            
            // Создаем контейнер для вариантов ответов
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'quiz-options';
            
            // Добавляем варианты ответов
            question.options.forEach((option, optIndex) => {
              const optionValue = String.fromCharCode(97 + optIndex); // a, b, c, d
              
              const optionDiv = document.createElement('div');
              optionDiv.className = 'quiz-option';
              
              const input = document.createElement('input');
              input.type = 'radio';
              input.id = `${questionId}_${optionValue}`;
              input.name = questionId;
              input.value = optionValue;
              
              const label = document.createElement('label');
              label.htmlFor = `${questionId}_${optionValue}`;
              label.textContent = option;
              
              optionDiv.appendChild(input);
              optionDiv.appendChild(label);
              optionsDiv.appendChild(optionDiv);
            });
            
            questionDiv.appendChild(optionsDiv);
            quizContainer.appendChild(questionDiv);
          }
        });
        
        // Добавляем кнопку проверки
        const checkButton = document.createElement('button');
        checkButton.className = 'quiz-submit-btn';
        checkButton.textContent = 'Тексеру';
        checkButton.setAttribute('data-lesson', lessonId);
        checkButton.setAttribute('data-level', 'medium');
        checkButton.onclick = function() {
          window.checkQuizLevel(lessonId, 'medium', courseType);
        };
        quizContainer.appendChild(checkButton);
        
        // Добавляем стили для разных уровней сложности
        quizContainer.classList.add('medium-level');
        
        // Добавляем контейнер для результата
        const resultDiv = document.createElement('div');
        resultDiv.className = 'quiz-result';
        quizContainer.appendChild(resultDiv);
        
        // Добавляем тест в раздел
        mediumQuizSection.appendChild(quizContainer);
        
        // Добавляем раздел в урок
        lessonContent.appendChild(mediumQuizSection);
      } else {
        console.error(`Средние вопросы для урока 9 не найдены или пусты`);
      }
    } else {
      console.error(`Средние вопросы или ответы для урока 9 не найдены`);
    }
    
    // Вставляем сложные вопросы
    if (quizPractice.quizQuestionsHard && quizPractice.quizAnswersHard) {
      console.log(`Сложные вопросы для урока 9:`, quizPractice.quizQuestionsHard);
      
      // Проверяем, что вопросы существуют и их больше 0
      if (quizPractice.quizQuestionsHard.length > 0) {
        // Создаем раздел для теста
        const hardQuizSection = document.createElement('section');
        hardQuizSection.className = 'quiz-section';
        
        // Добавляем заголовок теста
        const quizTitle = document.createElement('h3');
        quizTitle.textContent = 'Тест: Қиын деңгей';
        hardQuizSection.appendChild(quizTitle);
        
        // Создаем контейнер для теста
        const quizContainer = document.createElement('div');
        quizContainer.className = 'quiz-container';
        quizContainer.setAttribute('data-lesson', lessonId);
        quizContainer.setAttribute('data-level', 'hard');
        
        // Добавляем вопросы
        quizPractice.quizQuestionsHard.forEach((question, index) => {
          // Проверяем, что вопрос и варианты ответов существуют
          if (question && question.text && question.options && question.options.length > 0) {
            const questionId = `q${index + 1}_hard`;
            
            // Создаем контейнер для вопроса
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            
            // Добавляем текст вопроса
            const questionText = document.createElement('p');
            questionText.className = 'question-text';
            questionText.textContent = `${index + 1}. ${question.text}`;
            questionDiv.appendChild(questionText);
            
            // Создаем контейнер для вариантов ответов
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'quiz-options';
            
            // Добавляем варианты ответов
            question.options.forEach((option, optIndex) => {
              const optionValue = String.fromCharCode(97 + optIndex); // a, b, c, d
              
              const optionDiv = document.createElement('div');
              optionDiv.className = 'quiz-option';
              
              const input = document.createElement('input');
              input.type = 'radio';
              input.id = `${questionId}_${optionValue}`;
              input.name = questionId;
              input.value = optionValue;
              
              const label = document.createElement('label');
              label.htmlFor = `${questionId}_${optionValue}`;
              label.textContent = option;
              
              optionDiv.appendChild(input);
              optionDiv.appendChild(label);
              optionsDiv.appendChild(optionDiv);
            });
            
            questionDiv.appendChild(optionsDiv);
            quizContainer.appendChild(questionDiv);
          }
        });
        
        // Добавляем кнопку проверки
        const checkButton = document.createElement('button');
        checkButton.className = 'quiz-submit-btn';
        checkButton.textContent = 'Тексеру';
        checkButton.setAttribute('data-lesson', lessonId);
        checkButton.setAttribute('data-level', 'hard');
        checkButton.onclick = function() {
          window.checkQuizLevel(lessonId, 'hard', courseType);
        };
        quizContainer.appendChild(checkButton);
        
        // Добавляем стили для разных уровней сложности
        quizContainer.classList.add('hard-level');
        
        // Добавляем контейнер для результата
        const resultDiv = document.createElement('div');
        resultDiv.className = 'quiz-result';
        quizContainer.appendChild(resultDiv);
        
        // Добавляем тест в раздел
        hardQuizSection.appendChild(quizContainer);
        
        // Добавляем раздел в урок
        lessonContent.appendChild(hardQuizSection);
      } else {
        console.error(`Сложные вопросы для урока 9 не найдены или пусты`);
      }
    } else {
      console.error(`Сложные вопросы или ответы для урока 9 не найдены`);
    }
    
    // Добавляем практическое задание для 9-го урока
    if (quizPractice.practiceTask && quizPractice.practiceAnswer) {
      console.log(`Добавляем практическое задание для 9-го урока`);
      
      // Создаем раздел для практического задания
      const practiceSection = document.createElement('section');
      practiceSection.className = 'practice-section';
      
      // Добавляем заголовок практического задания
      const practiceTitle = document.createElement('h3');
      practiceTitle.textContent = 'Практикалық тапсырма';
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
      checkButton.onclick = function() {
        window.checkPractice(lessonId, courseType);
      };
      practiceSection.appendChild(checkButton);
      
      // Добавляем контейнер для результата
      const resultDiv = document.createElement('div');
      resultDiv.className = 'practice-result';
      practiceSection.appendChild(resultDiv);
      
      // Добавляем практическое задание в урок
      lessonContent.appendChild(practiceSection);
    }
  } else {
    // Для остальных уроков вставляем либо тест, либо практическое задание
    // Вставляем тест, если он есть в данных
    if (quizPractice.quizQuestions && quizPractice.quizQuestions.length > 0) {
      console.log(`Урок ${lessonId} - четный, вставляем тест`);
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
          
          // Добавляем вопросы
          quizPractice.quizQuestions.forEach((question, index) => {
            // Проверяем, что вопрос и варианты ответов существуют
            if (question && question.text && question.options && question.options.length > 0) {
              const questionId = `q${index + 1}`;
              
              // Создаем контейнер для вопроса
              const questionDiv = document.createElement('div');
              questionDiv.className = 'quiz-question';
              
              // Добавляем текст вопроса
              const questionText = document.createElement('p');
              questionText.className = 'question-text';
              questionText.textContent = `${index + 1}. ${question.text}`;
              questionDiv.appendChild(questionText);
              
              // Создаем контейнер для вариантов ответов
              const optionsDiv = document.createElement('div');
              optionsDiv.className = 'quiz-options';
              
              // Добавляем варианты ответов
              question.options.forEach((option, optIndex) => {
                const optionValue = String.fromCharCode(97 + optIndex); // a, b, c, d
                
                const optionDiv = document.createElement('div');
                optionDiv.className = 'quiz-option';
                
                const input = document.createElement('input');
                input.type = 'radio';
                input.id = `${questionId}_${optionValue}`;
                input.name = questionId;
                input.value = optionValue;
                
                const label = document.createElement('label');
                label.htmlFor = `${questionId}_${optionValue}`;
                label.textContent = option;
                
                optionDiv.appendChild(input);
                optionDiv.appendChild(label);
                optionsDiv.appendChild(optionDiv);
              });
              
              questionDiv.appendChild(optionsDiv);
              quizContainer.appendChild(questionDiv);
            }
          });
          
          // Добавляем кнопку проверки
          const checkButton = document.createElement('button');
          checkButton.className = 'quiz-submit-btn';
          checkButton.textContent = 'Тексеру';
          checkButton.setAttribute('data-lesson', lessonId);
          checkButton.onclick = function() {
            window.checkQuiz(lessonId, courseType);
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
    if (quizPractice.practiceTask && quizPractice.practiceAnswer) {
      console.log(`Вставляем практическое задание для урока ${lessonId}`);
      console.log(`Практическое задание для урока ${lessonId}:`, quizPractice.practiceTask);
        
        // Создаем раздел для практического задания
        const practiceSection = document.createElement('section');
        practiceSection.className = 'practice-section';
        
        // Добавляем заголовок практического задания
        const practiceTitle = document.createElement('h3');
        practiceTitle.textContent = 'Практикалық тапсырма';
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
  
  // Для 9-го урока практическое задание добавляется вместе с тестами разных уровней
  
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

// Функция для проверки теста с учетом уровня сложности
function checkQuizLevel(lessonId, level) {
  // Получаем данные теста
  const quizPractice = window.htmlCssKzQuizPractice[lessonId];
  
  // Определяем ответы в зависимости от уровня
  let answers;
  if (level === 'easy') {
    answers = quizPractice.quizAnswersEasy;
  } else if (level === 'medium') {
    answers = quizPractice.quizAnswersMedium;
  } else if (level === 'hard') {
    answers = quizPractice.quizAnswersHard;
  } else {
    console.error(`Неизвестный уровень теста: ${level}`);
    return;
  }
  
  // Проверяем ответы
  let allCorrect = true;
  
  for (const question in answers) {
    const selected = document.querySelector(`input[name="${question}_${level}"]:checked`);
    if (!selected || selected.value !== answers[question]) {
      allCorrect = false;
      break;
    }
  }
  
  // Показываем результат
  const resultContainer = document.querySelector(`.quiz-container[data-lesson="${lessonId}"][data-level="${level}"] .quiz-result`);
  
  if (resultContainer) {
    // Получаем текущий язык
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const lang = userData.language || 'kk';
    
    if (allCorrect) {
      resultContainer.innerHTML = `<p class="success-message">
        ✅ ${lang === 'kk' ? 'Тест сәтті өтті!' : 'Тест успешно пройден!'}</p>`;
      
      // Сохраняем результат
      saveQuizResult(lessonId, level, true);
    } else {
      resultContainer.innerHTML = `<p class="error-message">
        ❌ ${lang === 'kk' ? 'Қате жауаптар бар! Қайталап көріңіз.' : 'Есть неправильные ответы! Попробуйте еще раз.'}</p>`;
      
      // Сохраняем результат
      saveQuizResult(lessonId, level, false);
    }
    
    // Обновляем состояние кнопки завершения урока
    updateCompleteButton(lessonId);
  }
}

// Функция для сохранения результата теста с учетом уровня сложности
function saveQuizResult(lessonId, level, isCorrect) {
  const currentCourse = localStorage.getItem('lastOpenedCourse') || 'html';
  const key = level ? `${currentCourse}_lesson${lessonId}_quiz_${level}` : `${currentCourse}_lesson${lessonId}_quiz`;
  localStorage.setItem(key, isCorrect ? 'true' : 'false');
}

// Функция для проверки, завершен ли урок с учетом уровня сложности
function isLessonCompleted(lessonId) {
  const currentCourse = localStorage.getItem('lastOpenedCourse') || 'html';
  
  // Если это 9-й урок, проверяем все три уровня тестов и практическое задание
  if (lessonId === 9) {
    const easyCompleted = localStorage.getItem(`${currentCourse}_lesson${lessonId}_quiz_easy`) === 'true';
    const mediumCompleted = localStorage.getItem(`${currentCourse}_lesson${lessonId}_quiz_medium`) === 'true';
    const hardCompleted = localStorage.getItem(`${currentCourse}_lesson${lessonId}_quiz_hard`) === 'true';
    const practiceCompleted = localStorage.getItem(`${currentCourse}_lesson${lessonId}_practice`) === 'true';
    
    return easyCompleted && mediumCompleted && hardCompleted && practiceCompleted;
  }
  
  // Для остальных уроков проверяем либо тест, либо практическое задание
  // Если это четный урок (2, 4, 6, 8), проверяем тест
  if (lessonId % 2 === 0) {
    return localStorage.getItem(`${currentCourse}_lesson${lessonId}_quiz`) === 'true';
  } 
  // Если это нечетный урок (1, 3, 5, 7), проверяем практическое задание
  else {
    return localStorage.getItem(`${currentCourse}_lesson${lessonId}_practice`) === 'true';
  }
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
window.checkQuizLevel = checkQuizLevel;
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
