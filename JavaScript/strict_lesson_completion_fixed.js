/**
 * Улучшенная система завершения уроков
 * Проверяет выполнение тестов и практических заданий перед завершением урока
 */

// Глобальные настройки
const LESSON_SETTINGS = {
  // Минимальный процент правильных ответов для зачета теста
  MIN_QUIZ_SCORE: 75,
  
  // Минимальный процент совпадения кода с эталонным решением
  MIN_CODE_MATCH_PERCENT: 80,
  
  // Сообщения об ошибках на казахском и русском языках
  MESSAGES: {
    kk: {
      testNotCompleted: 'Тестті аяқтаңыз!',
      testFailed: 'Тестті қайта тексеріңіз!',
      practiceNotCompleted: 'Практикалық тапсырманы орындаңыз!',
      practiceFailed: 'Практикалық тапсырманы қайта тексеріңіз!',
      success: 'Сабақ сәтті аяқталды!',
      alreadyCompleted: 'Сабақ әлдеқашан аяқталған',
      error: 'Қате орын алды',
      notAllTasksCompleted: 'Барлық тапсырмалар орындалмаған!',
      noActiveLesson: 'Белсенді сабақ табылмады',
      testScore: 'Тест нәтижесі: %s%',
      practiceScore: 'Практикалық тапсырма нәтижесі: %s%'
    },
    ru: {
      testNotCompleted: 'Завершите тест!',
      testFailed: 'Проверьте тест!',
      practiceNotCompleted: 'Выполните практическое задание!',
      practiceFailed: 'Проверьте практическое задание!',
      success: 'Урок успешно завершен!',
      alreadyCompleted: 'Урок уже завершен',
      error: 'Произошла ошибка',
      notAllTasksCompleted: 'Не все задания выполнены!',
      noActiveLesson: 'Активный урок не найден',
      testScore: 'Результат теста: %s%',
      practiceScore: 'Результат практического задания: %s%'
    }
  }
};

/**
 * Проверяет, выполнен ли тест для текущего урока
 * @param {Object} lesson - Объект урока
 * @returns {Object} Результат проверки {passed: boolean, message: string, score: number}
 */
function checkTestCompletion(lesson) {
  if (!lesson.quizAnswers || Object.keys(lesson.quizAnswers).length === 0) {
    return { passed: true, message: '', score: 100 }; // Нет теста - считаем пройденным
  }
  
  let correctAnswers = 0;
  let totalQuestions = 0;
  
  // Проверяем каждый вопрос
  for (const question in lesson.quizAnswers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    totalQuestions++;
    
    if (selected && selected.value === lesson.quizAnswers[question]) {
      correctAnswers++;
    }
  }
  
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = score >= LESSON_SETTINGS.MIN_QUIZ_SCORE;
  
  return {
    passed,
    message: passed ? '' : 'Test failed',
    score
  };
}

/**
 * Проверяет выполнение практического задания
 * @param {Object} lesson - Объект урока
 * @returns {Object} Результат проверки {passed: boolean, message: string, score: number}
 */
function checkPracticeCompletion(lesson) {
  // Если нет проверяемого кода, считаем задание выполненным
  if (!lesson.correctCode || lesson.correctCode.trim() === '') {
    return { passed: true, message: '', score: 100 };
  }
  
  // Ищем поле для ввода кода
  const codeTextarea = document.getElementById(`html-code-${lesson.id}`) || 
                      document.getElementById(`css-code-${lesson.id}`) || 
                      document.getElementById(`py-code-${lesson.id}`);
  
  if (!codeTextarea) {
    return { passed: false, message: 'Code input not found', score: 0 };
  }
  
  const userCode = codeTextarea.value.trim();
  
  // Если поле пустое, задание не выполнено
  if (!userCode) {
    return { passed: false, message: 'Code is empty', score: 0 };
  }
  
  // Сравниваем код пользователя с эталонным решением
  const requiredElements = lesson.correctCode.split('\n').filter(line => line.trim() !== '');
  let matchedElements = 0;
  
  for (const element of requiredElements) {
    const trimmedElement = element.trim();
    if (trimmedElement && userCode.includes(trimmedElement)) {
      matchedElements++;
    }
  }
  
  const matchPercentage = Math.round((matchedElements / requiredElements.length) * 100);
  const passed = matchPercentage >= LESSON_SETTINGS.MIN_CODE_MATCH_PERCENT;
  
  return {
    passed,
    message: passed ? '' : 'Practice task not completed',
    score: matchPercentage
  };
}

/**
 * Обновляет интерфейс с результатами проверки
 * @param {Object} results - Результаты проверки
 * @param {string} lang - Язык интерфейса ('kk' или 'ru')
 * @param {HTMLElement} resultElement - Элемент для отображения результатов
 */
function updateResultsUI(results, lang, resultElement) {
  if (!resultElement) return;
  
  let html = '';
  const messages = LESSON_SETTINGS.MESSAGES[lang] || LESSON_SETTINGS.MESSAGES.kk;
  
  if (results.test) {
    const testClass = results.test.passed ? 'success' : 'error';
    const testIcon = results.test.passed ? '✅' : '❌';
    const testMessage = results.test.passed ? 
      messages.testScore.replace('%s', results.test.score) : 
      messages.testFailed;
      
    html += `<p class="${testClass}">${testIcon} ${testMessage}</p>`;
  }
  
  if (results.practice) {
    const practiceClass = results.practice.passed ? 'success' : 'error';
    const practiceIcon = results.practice.passed ? '✅' : '❌';
    const practiceMessage = results.practice.passed ? 
      messages.practiceScore.replace('%s', results.practice.score) : 
      messages.practiceFailed;
      
    html += `<p class="${practiceClass}">${practiceIcon} ${practiceMessage}</p>`;
  }
  
  if (results.allPassed) {
    html += `<p class="success">✅ ${messages.success}</p>`;
  } else if (results.test || results.practice) {
    html += `<p class="error">❌ ${messages.notAllTasksCompleted}</p>`;
  }
  
  resultElement.innerHTML = html;
}

/**
 * Основная функция для завершения урока с проверками
 * @param {number} lessonNum - Номер урока
 */
function completeLessonWithChecks(lessonNum) {
  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
    completedLessons: [],
    language: 'kk'
  };
  
  const lang = currentUser.language || 'kk';
  const messages = LESSON_SETTINGS.MESSAGES[lang] || LESSON_SETTINGS.MESSAGES.kk;
  
  // Находим элемент для вывода сообщений
  const resultElement = document.getElementById('result-message');
  
  // Проверяем, что урок существует
  if (!window.lessons || !window.lessons[lessonNum]) {
    if (resultElement) {
      resultElement.innerHTML = `<p class="error">❌ ${messages.error}: ${messages.noActiveLesson}</p>`;
    }
    console.error('Lesson not found:', lessonNum);
    return;
  }
  
  const lesson = window.lessons[lessonNum];
  const results = {
    allPassed: true,
    test: null,
    practice: null
  };
  
  // Проверяем тест, если он есть
  if (lesson.quizAnswers && Object.keys(lesson.quizAnswers).length > 0) {
    results.test = checkTestCompletion(lesson);
    results.allPassed = results.allPassed && results.test.passed;
  }
  
  // Проверяем практическое задание, если оно есть
  if (lesson.correctCode && lesson.correctCode.trim() !== '') {
    results.practice = checkPracticeCompletion(lesson);
    results.allPassed = results.allPassed && results.practice.passed;
  }
  
  // Обновляем интерфейс с результатами
  updateResultsUI(results, lang, resultElement);
  
  // Если все проверки пройдены, отмечаем урок как завершенный
  if (results.allPassed) {
    if (!currentUser.completedLessons.includes(lessonNum)) {
      currentUser.completedLessons.push(lessonNum);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      
      // Обновляем Firebase, если доступен
      if (window.firebaseAuth && typeof window.firebaseAuth.completeLesson === 'function') {
        window.firebaseAuth.completeLesson(lessonNum)
          .then(() => console.log('Lesson marked as completed in Firebase'))
          .catch(error => console.error('Error updating Firebase:', error));
      }
      
      // Обновляем отображение списка уроков
      if (typeof window.initLessons === 'function') {
        window.initLessons();
      }
    }
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  console.log('Инициализация системы проверки уроков...');
  
  // Определяем язык интерфейса
  const isRussian = document.documentElement.lang === 'ru' || 
                  window.location.pathname.includes('course_rus.html') || 
                  document.querySelector('meta[name="course-language"][content="ru"]') !== null;
  
  const lang = isRussian ? 'ru' : 'kk';
  console.log('Язык интерфейса:', isRussian ? 'русский' : 'казахский');
  
  // Переопределяем стандартную функцию completeLesson
  if (typeof window.completeLesson === 'function') {
    window.originalCompleteLesson = window.completeLesson;
    window.completeLesson = completeLessonWithChecks;
    console.log('Strict lesson completion system initialized');
  } else {
    console.error('Could not find completeLesson function to override');
  }
  
  // Добавляем стили для сообщений
  const style = document.createElement('style');
  style.textContent = `
    .success { color: #4CAF50; font-weight: bold; margin: 5px 0; }
    .error { color: #F44336; font-weight: bold; margin: 5px 0; }
    .warning { color: #FF9800; font-weight: bold; margin: 5px 0; }
  `;
  document.head.appendChild(style);
});
