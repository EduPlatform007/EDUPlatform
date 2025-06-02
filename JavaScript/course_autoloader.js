/**
 * Автозагрузчик данных курсов
 * Этот файл гарантированно загружает правильные данные для каждого курса
 */

// Функция для определения типа курса из URL и метатегов
function detectActualCourseType() {
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
    
    if (path.includes('python')) {
      courseType = 'python';
    } else if (path.includes('database')) {
      courseType = 'database';
    } else {
      courseType = 'html_css';
    }
    
    // Определяем язык
    if (path.includes('_rus') || path.includes('course_rus')) {
      language = 'ru';
    } else {
      language = 'kk';
    }
  }
  
  // Формируем полный идентификатор курса
  let fullCourseType = courseType;
  if (language === 'kk' || language === 'kazakh') {
    fullCourseType += '_kz';
  } else if (language === 'ru' || language === 'rus' || language === 'russian') {
    fullCourseType += '_ru';
  }
  
  console.log(`[Автозагрузчик] Определен тип курса: ${fullCourseType}`);
  return fullCourseType;
}

// Функция для принудительной загрузки данных курса
function ensureCourseDataLoaded() {
  const courseType = detectActualCourseType();
  
  // Проверяем, загружены ли данные
  let dataLoaded = false;
  
  if (courseType === 'python_kz' && window.pythonKzQuizPractice) {
    dataLoaded = true;
    console.log('[Автозагрузчик] Данные для курса python_kz уже загружены');
  } else if (courseType === 'python_ru' && window.pythonRuQuizPractice) {
    dataLoaded = true;
    console.log('[Автозагрузчик] Данные для курса python_ru уже загружены');
  } else if (courseType === 'database_kz' && window.databaseKzQuizPractice) {
    dataLoaded = true;
    console.log('[Автозагрузчик] Данные для курса database_kz уже загружены');
  } else if (courseType === 'database_ru' && window.databaseRuQuizPractice) {
    dataLoaded = true;
    console.log('[Автозагрузчик] Данные для курса database_ru уже загружены');
  } else if (courseType === 'html_css_kz' && window.htmlCssKzQuizPractice) {
    dataLoaded = true;
    console.log('[Автозагрузчик] Данные для курса html_css_kz уже загружены');
  } else if (courseType === 'html_css_ru' && window.htmlCssRuQuizPractice) {
    dataLoaded = true;
    console.log('[Автозагрузчик] Данные для курса html_css_ru уже загружены');
  }
  
  // Если данные не загружены, загружаем их
  if (!dataLoaded) {
    const scriptSrc = `JavaScript/couses_data/${courseType}_quiz_practice.js`;
    console.log(`[Автозагрузчик] Загружаем данные для курса: ${scriptSrc}`);
    
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.onload = function() {
        console.log(`[Автозагрузчик] Данные для курса ${courseType} успешно загружены`);
        resolve(courseType);
      };
      script.onerror = function() {
        console.error(`[Автозагрузчик] Ошибка загрузки данных для курса ${courseType}`);
        reject(new Error(`Не удалось загрузить данные для курса ${courseType}`));
      };
      document.head.appendChild(script);
    });
  }
  
  return Promise.resolve(courseType);
}

// Функция для вставки тестов и практических заданий

// Запускаем автозагрузчик при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  console.log('[Автозагрузчик] Страница загружена, запускаем автозагрузчик');
  
  // Загружаем данные курса
  ensureCourseDataLoaded()
    .then(() => {
      console.log('[Автозагрузчик] Данные курса загружены, вставляем тесты и практические задания');
      
      // После загрузки данных вставляем тесты и практические задания
      setTimeout(() => {
        insertQuizPracticeForCurrentLesson();
      }, 500);
    })
    .catch(error => {
      console.error('[Автозагрузчик] Ошибка:', error);
    });
    
  // Отслеживаем изменение урока
  document.addEventListener('lessonLoaded', function() {
    console.log('[Автозагрузчик] Событие загрузки урока обнаружено');
    
    // Вставляем тесты и практические задания для нового урока
    setTimeout(() => {
      insertQuizPracticeForCurrentLesson();
    }, 500);
  });
});

// Экспортируем функции
window.detectActualCourseType = detectActualCourseType;
window.ensureCourseDataLoaded = ensureCourseDataLoaded;
window.insertQuizPracticeForCurrentLesson = insertQuizPracticeForCurrentLesson;
