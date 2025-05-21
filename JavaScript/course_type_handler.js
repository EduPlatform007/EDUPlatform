/**
 * Универсальный обработчик типов курсов
 * Этот файл добавляет поддержку всех типов курсов и исправляет проблемы
 * с обработкой тестов и практических заданий
 */

// Функция для получения данных курса по его типу
function getCourseData(courseType) {
  console.log(`Получение данных для курса: ${courseType}`);
  
  // Нормализуем тип курса
  courseType = courseType.toLowerCase();
  
  // Определяем источник данных в зависимости от типа курса
  let courseData = null;
  
  if (courseType === 'html_css_kz') {
    courseData = window.htmlCssKzQuizPractice;
  } else if (courseType === 'html_css_ru') {
    courseData = window.htmlCssRuQuizPractice;
  } else if (courseType === 'python_kz') {
    courseData = window.pythonKzQuizPractice;
  } else if (courseType === 'python_ru') {
    courseData = window.pythonRuQuizPractice;
  } else if (courseType === 'database_kz') {
    courseData = window.databaseKzQuizPractice;
  } else if (courseType === 'database_ru') {
    courseData = window.databaseRuQuizPractice;
  } else {
    console.error(`Неизвестный тип курса: ${courseType}`);
  }
  
  return courseData;
}

// Функция для определения типа курса из URL и метатегов
function detectCourseType() {
  // Пытаемся определить тип курса из метатегов
  const courseTypeMeta = document.querySelector('meta[name="course-type"]');
  const courseLanguageMeta = document.querySelector('meta[name="course-language"]');
  
  let courseType = '';
  let language = '';
  
  // Если есть метатеги, используем их
  if (courseTypeMeta && courseLanguageMeta) {
    courseType = courseTypeMeta.getAttribute('content');
    language = courseLanguageMeta.getAttribute('content');
  } else {
    // Иначе определяем по URL
    const path = window.location.pathname.toLowerCase();
    
    if (path.includes('python_course')) {
      courseType = 'python';
      language = path.includes('rus') ? 'ru' : 'kk';
    } else if (path.includes('database_course')) {
      courseType = 'database';
      language = path.includes('rus') ? 'ru' : 'kk';
    } else {
      courseType = 'html_css';
      language = path.includes('rus') ? 'ru' : 'kk';
    }
  }
  
  // Формируем полный идентификатор курса
  let fullCourseType = courseType;
  if (language === 'kk' || language === 'kazakh') {
    fullCourseType += '_kz';
  } else if (language === 'ru' || language === 'rus' || language === 'russian') {
    fullCourseType += '_ru';
  }
  
  console.log(`Определен тип курса: ${fullCourseType}`);
  
  // Сохраняем в localStorage для использования в других скриптах
  localStorage.setItem('currentCourseType', fullCourseType);
  
  return fullCourseType;
}

// Функция для проверки ответа на тест с учетом типа курса
function checkQuizFixed(lessonNum, courseType) {
  console.log(`Проверка теста для урока ${lessonNum}, курс: ${courseType}`);
  
  // Если тип курса не передан, определяем его автоматически
  if (!courseType) {
    courseType = detectCourseType();
  }
  
  // Получаем данные курса
  const quizPracticeData = getCourseData(courseType);
  if (!quizPracticeData) {
    return;
  }
  
  // Проверяем, есть ли тесты и практические задания для этого урока
  if (!quizPracticeData[lessonNum]) {
    console.error(`Тест для урока ${lessonNum} курса ${courseType} не найден`);
    return;
  }
  
  const quizPractice = quizPracticeData[lessonNum];
  
  // Проверяем, есть ли ответы на тест
  if (!quizPractice.quizAnswers || Object.keys(quizPractice.quizAnswers).length === 0) {
    console.error(`Ответы на тест не найдены для урока ${lessonNum} курса ${courseType}`);
    return;
  }
  
  const answers = quizPractice.quizAnswers;
  let allCorrect = true;
  
  // Проверяем каждый ответ
  for (const question in answers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    console.log(`Вопрос ${question}: ожидаемый ответ ${answers[question]}, выбранный ответ ${selected ? selected.value : 'не выбран'}`);
    
    if (!selected || selected.value !== answers[question]) {
      allCorrect = false;
      break;
    }
  }
  
  // Получаем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = userData.language || (courseType.endsWith('_ru') ? 'ru' : 'kk');
  
  // Находим результат теста
  const quizContainer = document.querySelector(`.quiz-container[data-lesson="${lessonNum}"]`);
  if (!quizContainer) {
    console.error(`Контейнер теста для урока ${lessonNum} не найден`);
    return;
  }
  const resultMessage = quizContainer.querySelector('.quiz-result');
  
  // Показываем результат
  if (allCorrect) {
    resultMessage.innerHTML = `<p class="success-message">
      ✅ ${lang === 'kk' ? 'Тест сәтті өтті!' : 'Тест успешно пройден!'}</p>`;
    
    // Сохраняем результат
    localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'true');
    
    // Обновляем состояние кнопки завершения урока
    if (typeof window.updateCompleteButton === 'function') {
      window.updateCompleteButton(lessonNum);
    }
  } else {
    resultMessage.innerHTML = `<p class="error-message">
      ❌ ${lang === 'kk' ? 'Қате жауаптар бар! Қайталап көріңіз.' : 'Есть неправильные ответы! Попробуйте еще раз.'}</p>`;
  }
}

// Функция для проверки практического задания с учетом типа курса
function checkPracticeFixed(lessonNum, courseType) {
  console.log(`Проверка практического задания для урока ${lessonNum}, курс: ${courseType}`);
  
  // Если тип курса не передан, определяем его автоматически
  if (!courseType) {
    courseType = detectCourseType();
  }
  
  // Получаем данные курса
  const quizPracticeData = getCourseData(courseType);
  if (!quizPracticeData) {
    return;
  }
  
  // Проверяем, есть ли практические задания для этого урока
  if (!quizPracticeData[lessonNum]) {
    console.error(`Практическое задание для урока ${lessonNum} курса ${courseType} не найдено`);
    return;
  }
  
  const quizPractice = quizPracticeData[lessonNum];
  
  // Проверяем, есть ли ответ на практическое задание
  if (!quizPractice.practiceAnswer) {
    console.error(`Ответ на практическое задание не найден для урока ${lessonNum} курса ${courseType}`);
    return;
  }
  
  // Получаем код, введенный пользователем
  const practiceTextarea = document.querySelector(`.practice-container[data-lesson="${lessonNum}"] textarea`);
  if (!practiceTextarea) {
    console.error(`Поле для ввода кода не найдено для урока ${lessonNum}`);
    return;
  }
  
  const userCode = practiceTextarea.value.trim();
  if (!userCode) {
    alert('Пожалуйста, введите ваш код');
    return;
  }
  
  // Получаем правильный ответ
  const correctCode = quizPractice.practiceAnswer.trim();
  
  // Получаем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = userData.language || (courseType.endsWith('_ru') ? 'ru' : 'kk');
  
  // Находим результат практического задания
  const practiceContainer = document.querySelector(`.practice-container[data-lesson="${lessonNum}"]`);
  if (!practiceContainer) {
    console.error(`Контейнер практического задания для урока ${lessonNum} не найден`);
    return;
  }
  const resultMessage = practiceContainer.querySelector('.practice-result');
  
  // Проверяем код
  // В реальном приложении здесь может быть более сложная логика проверки
  // Например, компиляция и запуск кода, проверка важных фрагментов и т.д.
  
  // Для простоты сейчас просто сравниваем с правильным ответом
  const isCorrect = userCode === correctCode;
  
  // Для более гибкой проверки можно проверять наличие ключевых строк
  let keyLinesCorrect = 0;
  const keyLines = correctCode.split('\n').filter(line => line.trim().length > 0);
  const userLines = userCode.split('\n');
  
  keyLines.forEach(line => {
    const trimmedLine = line.trim();
    if (userLines.some(userLine => userLine.trim() === trimmedLine)) {
      keyLinesCorrect++;
    }
  });
  
  const percentage = Math.round((keyLinesCorrect / keyLines.length) * 100);
  
  // Показываем результат
  if (isCorrect || percentage >= 80) {
    resultMessage.innerHTML = `<p class="success-message">
      ✅ ${lang === 'kk' ? 'Практикалық тапсырма сәтті орындалды!' : 'Практическое задание успешно выполнено!'}</p>`;
    
    // Сохраняем результат
    localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
    
    // Обновляем состояние кнопки завершения урока
    if (typeof window.updateCompleteButton === 'function') {
      window.updateCompleteButton(lessonNum);
    }
  } else if (percentage >= 50) {
    resultMessage.innerHTML = `<p class="partial-success-message">
      ⚠️ ${lang === 'kk' ? 'Жақсы бастама! Кейбір дұрыс жауаптар бар. Тағы да көріңіз.' : 'Хорошее начало! Есть некоторые правильные ответы. Попробуйте еще раз.'}</p>`;
  } else {
    resultMessage.innerHTML = `<p class="error-message">
      ❌ ${lang === 'kk' ? 'Қате жауап! Қайталап көріңіз.' : 'Неправильный ответ! Попробуйте еще раз.'}</p>`;
  }
}

// Функция для проверки теста определенного уровня сложности
function checkQuizLevelFixed(lessonNum, level, courseType) {
  console.log(`Проверка теста уровня ${level} для урока ${lessonNum}, курс: ${courseType}`);
  
  // Если тип курса не передан, определяем его автоматически
  if (!courseType) {
    courseType = detectCourseType();
  }
  
  // Получаем данные курса
  const quizPracticeData = getCourseData(courseType);
  if (!quizPracticeData) {
    return;
  }
  
  // Проверяем, есть ли тесты для этого урока
  if (!quizPracticeData[lessonNum]) {
    console.error(`Тест для урока ${lessonNum} курса ${courseType} не найден`);
    return;
  }
  
  const quizPractice = quizPracticeData[lessonNum];
  
  // Определяем ключи для вопросов и ответов в зависимости от уровня
  const questionsKey = `quizQuestions${level.charAt(0).toUpperCase() + level.slice(1)}`;
  const answersKey = `quizAnswers${level.charAt(0).toUpperCase() + level.slice(1)}`;
  
  // Проверяем, есть ли вопросы и ответы для указанного уровня
  if (!quizPractice[questionsKey] || !quizPractice[answersKey]) {
    console.error(`Вопросы или ответы для уровня ${level} не найдены для урока ${lessonNum} курса ${courseType}`);
    return;
  }
  
  const answers = quizPractice[answersKey];
  let allCorrect = true;
  
  // Проверяем каждый ответ
  for (const question in answers) {
    const selected = document.querySelector(`input[name="${question}_${level}"]:checked`);
    console.log(`Вопрос ${question}: ожидаемый ответ ${answers[question]}, выбранный ответ ${selected ? selected.value : 'не выбран'}`);
    
    if (!selected || selected.value !== answers[question]) {
      allCorrect = false;
      break;
    }
  }
  
  // Получаем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = userData.language || (courseType.endsWith('_ru') ? 'ru' : 'kk');
  
  // Находим результат теста
  const quizContainer = document.querySelector(`.quiz-container[data-lesson="${lessonNum}"][data-level="${level}"]`);
  if (!quizContainer) {
    console.error(`Контейнер теста для урока ${lessonNum} и уровня ${level} не найден`);
    return;
  }
  const resultMessage = quizContainer.querySelector('.quiz-result');
  
  // Показываем результат
  if (allCorrect) {
    resultMessage.innerHTML = `<p class="success-message">
      ✅ ${lang === 'kk' ? 'Тест сәтті өтті!' : 'Тест успешно пройден!'}</p>`;
    
    // Сохраняем результат
    localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz_${level}`, 'true');
    
    // Обновляем состояние кнопки завершения урока
    if (typeof window.updateCompleteButton === 'function') {
      window.updateCompleteButton(lessonNum);
    }
  } else {
    resultMessage.innerHTML = `<p class="error-message">
      ❌ ${lang === 'kk' ? 'Қате жауаптар бар! Қайталап көріңіз.' : 'Есть неправильные ответы! Попробуйте еще раз.'}</p>`;
  }
}

// Подменяем существующие функции в системе тестов и практик, сохраняя обратную совместимость
document.addEventListener('DOMContentLoaded', function() {
  console.log('Инициализация обработчика типов курсов...');
  
  // Сохраняем оригинальные функции
  const originalCheckQuiz = window.checkQuiz;
  const originalCheckPractice = window.checkPractice;
  const originalCheckQuizLevel = window.checkQuizLevel;
  
  // Подменяем функции на наши улучшенные версии
  window.checkQuiz = function(lessonNum, courseType) {
    try {
      checkQuizFixed(lessonNum, courseType);
    } catch (error) {
      console.error('Ошибка при проверке теста:', error);
      // В случае ошибки пытаемся использовать оригинальную функцию как запасной вариант
      if (originalCheckQuiz) {
        originalCheckQuiz(lessonNum, courseType);
      }
    }
  };
  
  window.checkPractice = function(lessonNum, courseType) {
    try {
      checkPracticeFixed(lessonNum, courseType);
    } catch (error) {
      console.error('Ошибка при проверке практического задания:', error);
      // В случае ошибки пытаемся использовать оригинальную функцию как запасной вариант
      if (originalCheckPractice) {
        originalCheckPractice(lessonNum, courseType);
      }
    }
  };
  
  window.checkQuizLevel = function(lessonNum, level, courseType) {
    try {
      checkQuizLevelFixed(lessonNum, level, courseType);
    } catch (error) {
      console.error('Ошибка при проверке теста определенного уровня:', error);
      // В случае ошибки пытаемся использовать оригинальную функцию как запасной вариант
      if (originalCheckQuizLevel) {
        originalCheckQuizLevel(lessonNum, level, courseType);
      }
    }
  };
  
  // Добавляем обработчики событий для кнопок проверки тестов и практик
  function setupEventHandlers() {
    // Обработчики для кнопок проверки тестов
    document.querySelectorAll('.quiz-submit-btn').forEach(button => {
      const lessonNum = button.getAttribute('data-lesson');
      const level = button.getAttribute('data-level');
      
      button.addEventListener('click', function() {
        console.log(`Нажата кнопка проверки для урока ${lessonNum}, тип курса: ${detectCourseType()}`);
        
        if (level) {
          window.checkQuizLevel(lessonNum, level, detectCourseType());
        } else {
          window.checkQuiz(lessonNum, detectCourseType());
        }
      });
    });
    
    // Обработчики для кнопок проверки практических заданий
    document.querySelectorAll('.practice-submit-btn').forEach(button => {
      const lessonNum = button.getAttribute('data-lesson');
      
      button.addEventListener('click', function() {
        console.log(`Нажата кнопка проверки практического задания для урока ${lessonNum}, тип курса: ${detectCourseType()}`);
        window.checkPractice(lessonNum, detectCourseType());
      });
    });
  }
  
  // Настраиваем обработчики событий при загрузке страницы
  setupEventHandlers();
  
  // Настраиваем обработчики событий при загрузке урока
  window.addEventListener('lessonLoaded', function() {
    console.log('Событие загрузки урока обнаружено, настраиваем обработчики событий');
    setupEventHandlers();
  });
  
  // Экспортируем функции для использования в других файлах
  window.getCourseData = getCourseData;
  window.detectCourseType = detectCourseType;
  
  console.log('Обработчик типов курсов инициализирован');
});
