/**
 * Упрощенный загрузчик тестов и практических заданий для курса по базам данных на русском языке
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Упрощенный загрузчик запущен');
  
  // Проверяем, загрузились ли данные
  if (!window.databaseRuQuizPractice) {
    console.error('Данные для тестов и практических заданий не загружены!');
    return;
  }
  
  // Функция для загрузки тестов и практических заданий для конкретного урока
  window.loadSimpleQuizPractice = function(lessonNum) {
    console.log(`Загрузка тестов и практических заданий для урока ${lessonNum}`);
    
    // Находим контейнер для тестов и практических заданий
    const quizPracticeContainer = document.getElementById('quiz-practice-container');
    if (!quizPracticeContainer) {
      console.error('Контейнер для тестов и практических заданий не найден!');
      return;
    }
    
    // Очищаем контейнер
    quizPracticeContainer.innerHTML = '';
    
    // Получаем данные для урока
    const lessonData = window.databaseRuQuizPractice[lessonNum];
    if (!lessonData) {
      console.error(`Данные для урока ${lessonNum} не найдены!`);
      return;
    }
    
    console.log(`Данные для урока ${lessonNum}:`, lessonData);
    
    // Добавляем тесты, если они есть
    if (lessonData.quizQuestions && lessonData.quizQuestions.length > 0) {
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
      quizContainer.setAttribute('data-lesson', lessonNum);
      
      // Добавляем вопросы
      lessonData.quizQuestions.forEach((question, index) => {
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
          
          const optionInput = document.createElement('input');
          optionInput.type = 'radio';
          optionInput.name = `q${index + 1}`;
          optionInput.id = `q${index + 1}_${optionValue}`;
          optionInput.value = optionValue;
          
          const optionLabel = document.createElement('label');
          optionLabel.htmlFor = `q${index + 1}_${optionValue}`;
          optionLabel.textContent = option;
          
          optionDiv.appendChild(optionInput);
          optionDiv.appendChild(optionLabel);
          optionsDiv.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
      });
      
      // Добавляем кнопку проверки
      const submitButton = document.createElement('button');
      submitButton.className = 'quiz-submit-btn';
      submitButton.setAttribute('data-lesson', lessonNum);
      submitButton.textContent = 'Проверить';
      submitButton.onclick = function() {
        checkSimpleQuiz(lessonNum);
      };
      quizContainer.appendChild(submitButton);
      
      // Добавляем место для результата
      const resultDiv = document.createElement('div');
      resultDiv.className = 'quiz-result';
      resultDiv.id = `quiz-result-${lessonNum}`;
      quizContainer.appendChild(resultDiv);
      
      quizSection.appendChild(quizContainer);
      quizPracticeContainer.appendChild(quizSection);
    }
    
    // Добавляем практическое задание, если оно есть
    if (lessonData.practiceTask) {
      // Создаем раздел для практического задания
      const practiceSection = document.createElement('section');
      practiceSection.className = 'practice-section';
      
      // Добавляем заголовок
      const practiceTitle = document.createElement('h3');
      practiceTitle.textContent = 'Практическое задание';
      practiceSection.appendChild(practiceTitle);
      
      // Добавляем описание задания
      const practiceDescription = document.createElement('div');
      practiceDescription.className = 'practice-description';
      practiceDescription.innerHTML = lessonData.practiceTask;
      practiceSection.appendChild(practiceDescription);
      
      // Добавляем поле для ввода ответа
      const practiceAnswerContainer = document.createElement('div');
      practiceAnswerContainer.className = 'practice-answer-container';
      
      const practiceTextarea = document.createElement('textarea');
      practiceTextarea.className = 'practice-textarea';
      practiceTextarea.id = `practice-textarea-${lessonNum}`;
      practiceTextarea.rows = 10;
      practiceTextarea.placeholder = 'Введите ваш ответ здесь...';
      practiceAnswerContainer.appendChild(practiceTextarea);
      
      // Добавляем кнопку проверки
      const submitButton = document.createElement('button');
      submitButton.className = 'practice-submit-btn';
      submitButton.setAttribute('data-lesson', lessonNum);
      submitButton.textContent = 'Проверить';
      submitButton.onclick = function() {
        checkSimplePractice(lessonNum);
      };
      practiceAnswerContainer.appendChild(submitButton);
      
      practiceSection.appendChild(practiceAnswerContainer);
      
      // Добавляем место для результата
      const resultDiv = document.createElement('div');
      resultDiv.className = 'practice-result';
      resultDiv.id = `practice-result-${lessonNum}`;
      practiceSection.appendChild(resultDiv);
      
      quizPracticeContainer.appendChild(practiceSection);
    }
  };
  
  // Функция для проверки теста
  function checkSimpleQuiz(lessonNum) {
    console.log(`Проверка теста для урока ${lessonNum}`);
    
    // Получаем данные теста
    const quizData = window.databaseRuQuizPractice[lessonNum];
    if (!quizData || !quizData.quizQuestions) {
      console.error(`Данные теста для урока ${lessonNum} не найдены`);
      return;
    }
    
    // Получаем ответы пользователя
    const userAnswers = [];
    const quizContainer = document.querySelector(`.quiz-container[data-lesson="${lessonNum}"]`);
    
    if (!quizContainer) {
      console.error(`Контейнер теста для урока ${lessonNum} не найден`);
      return;
    }
    
    // Собираем ответы пользователя
    quizData.quizQuestions.forEach((_, index) => {
      const questionName = `q${index + 1}`;
      const selectedOption = quizContainer.querySelector(`input[name="${questionName}"]:checked`);
      
      if (selectedOption) {
        userAnswers.push(selectedOption.value);
      } else {
        userAnswers.push(null); // Нет ответа
      }
    });
    
    // Проверяем ответы
    let correctCount = 0;
    const results = [];
    
    quizData.quizQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      const correctAnswer = question.correctAnswer;
      
      if (userAnswer === correctAnswer) {
        correctCount++;
        results.push(true);
      } else {
        results.push(false);
      }
    });
    
    // Отображаем результат
    const resultDiv = document.getElementById(`quiz-result-${lessonNum}`);
    if (resultDiv) {
      const totalQuestions = quizData.quizQuestions.length;
      const percentage = Math.round((correctCount / totalQuestions) * 100);
      
      let resultHTML = `<div class="result-summary">Результат: ${correctCount} из ${totalQuestions} (${percentage}%)</div>`;
      
      // Добавляем детали по каждому вопросу
      resultHTML += '<div class="result-details">';
      results.forEach((isCorrect, index) => {
        const questionNum = index + 1;
        const iconClass = isCorrect ? 'correct' : 'incorrect';
        const iconText = isCorrect ? '✓' : '✗';
        
        resultHTML += `<div class="result-item ${iconClass}">Вопрос ${questionNum}: ${iconText}</div>`;
      });
      resultHTML += '</div>';
      
      resultDiv.innerHTML = resultHTML;
      resultDiv.style.display = 'block';
      
      // Если все ответы правильные, отмечаем тест как завершенный
      if (correctCount === totalQuestions) {
        // Сохраняем результат в localStorage
        const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '{}');
        if (!completedQuizzes['database_ru']) {
          completedQuizzes['database_ru'] = {};
        }
        completedQuizzes['database_ru'][lessonNum] = true;
        localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes));
        
        // Добавляем сообщение об успехе
        resultDiv.innerHTML += '<div class="success-message">Тест успешно пройден!</div>';
      }
    }
  }
  
  // Функция для проверки практического задания
  function checkSimplePractice(lessonNum) {
    console.log(`Проверка практического задания для урока ${lessonNum}`);
    
    // Получаем данные практического задания
    const practiceData = window.databaseRuQuizPractice[lessonNum];
    if (!practiceData || !practiceData.practiceAnswer) {
      console.error(`Данные практического задания для урока ${lessonNum} не найдены`);
      return;
    }
    
    // Получаем ответ пользователя
    const practiceTextarea = document.getElementById(`practice-textarea-${lessonNum}`);
    if (!practiceTextarea) {
      console.error(`Поле для ввода ответа на практическое задание не найдено`);
      return;
    }
    
    const userAnswer = practiceTextarea.value.trim();
    if (!userAnswer) {
      alert('Пожалуйста, введите ваш ответ на практическое задание');
      return;
    }
    
    // Проверяем ответ
    const correctAnswer = practiceData.practiceAnswer;
    
    // Упрощенная проверка - ищем ключевые фразы в ответе пользователя
    const keyPhrases = correctAnswer.split('\n').filter(line => line.trim().length > 0);
    let correctPhrases = 0;
    
    keyPhrases.forEach(phrase => {
      // Удаляем пробелы и приводим к нижнему регистру для сравнения
      const cleanPhrase = phrase.trim().toLowerCase().replace(/\s+/g, ' ');
      if (userAnswer.toLowerCase().includes(cleanPhrase)) {
        correctPhrases++;
      }
    });
    
    // Вычисляем процент совпадения
    const percentage = Math.round((correctPhrases / keyPhrases.length) * 100);
    
    // Отображаем результат
    const resultDiv = document.getElementById(`practice-result-${lessonNum}`);
    if (resultDiv) {
      let resultHTML = '';
      
      if (percentage >= 70) {
        // Успешно
        resultHTML = `<div class="success-message">Практическое задание выполнено успешно! (${percentage}% совпадение)</div>`;
        
        // Сохраняем результат в localStorage
        const completedPractices = JSON.parse(localStorage.getItem('completedPractices') || '{}');
        if (!completedPractices['database_ru']) {
          completedPractices['database_ru'] = {};
        }
        completedPractices['database_ru'][lessonNum] = true;
        localStorage.setItem('completedPractices', JSON.stringify(completedPractices));
      } else if (percentage >= 40) {
        // Частично успешно
        resultHTML = `<div class="partial-success-message">Частично верно. Попробуйте дополнить ваш ответ. (${percentage}% совпадение)</div>`;
      } else {
        // Неуспешно
        resultHTML = `<div class="error-message">Ответ неверный. Попробуйте еще раз. (${percentage}% совпадение)</div>`;
      }
      
      resultDiv.innerHTML = resultHTML;
      resultDiv.style.display = 'block';
    }
  }
  
  // Переопределяем функцию загрузки урока
  const originalLoadLesson = window.loadLesson;
  window.loadLesson = function(lessonNum) {
    // Вызываем оригинальную функцию
    if (typeof originalLoadLesson === 'function') {
      originalLoadLesson(lessonNum);
    }
    
    // Загружаем тесты и практические задания
    setTimeout(() => {
      window.loadSimpleQuizPractice(lessonNum);
    }, 1000);
  };
  
  // Загружаем тесты и практические задания для текущего урока, если он есть
  const lastOpenedLesson = localStorage.getItem('lastOpenedLesson');
  if (lastOpenedLesson) {
    setTimeout(() => {
      window.loadSimpleQuizPractice(parseInt(lastOpenedLesson));
    }, 1500);
  }
});
