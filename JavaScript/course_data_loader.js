/**
 * Модуль для правильной загрузки данных курса
 * Определяет тип курса и загружает правильные данные для каждого урока
 */

// Функция для определения информации о текущем курсе
function detectCourseInfo() {
  let courseType, courseLanguage;
  
  // Проверяем наличие метатегов
  const courseTypeMeta = document.querySelector('meta[name="course-type"]');
  const courseLangMeta = document.querySelector('meta[name="course-language"]');
  
  if (courseTypeMeta && courseLangMeta) {
    courseType = courseTypeMeta.getAttribute('content');
    courseLanguage = courseLangMeta.getAttribute('content');
    console.log(`Из метатегов: курс ${courseType}, язык ${courseLanguage}`);
  } else {
    // Определяем тип курса по URL
    const path = window.location.pathname.toLowerCase();
    
    if (path.includes('python')) {
      courseType = 'python';
    } else if (path.includes('database')) {
      courseType = 'database';
    } else {
      courseType = 'html_css';
    }
    
    // Определяем язык курса
    courseLanguage = path.includes('rus') ? 'ru' : 'kz';
    console.log(`Из URL: курс ${courseType}, язык ${courseLanguage}`);
  }
  
  return {
    type: courseType,
    language: courseLanguage,
    fullName: `${courseType}_${courseLanguage}`
  };
}

// Функция для загрузки данных курса
function loadCourseData(callback) {
  const courseInfo = detectCourseInfo();
  console.log(`Загрузка данных для курса: ${courseInfo.fullName}`);
  
  // Возможные имена переменных и файлов для данных
  const variableOptions = [
    `${courseInfo.type}${courseInfo.language.toUpperCase()}QuizPractice`,
    `${courseInfo.type}_${courseInfo.language}_quiz_practice`,
    `${courseInfo.type}${courseInfo.language}QuizPractice`,
    `${courseInfo.type}${courseInfo.language.charAt(0).toUpperCase() + courseInfo.language.slice(1)}QuizPractice`,
    `${courseInfo.fullName}QuizPractice`
  ];
  
  const fileOptions = [
    `${courseInfo.type}_${courseInfo.language}_quiz_practice.js`,
    `${courseInfo.fullName}_quiz_practice.js`,
    `${courseInfo.type}_${courseInfo.language}_all_data.js`,
    `${courseInfo.fullName}_all_data.js`,
    `${courseInfo.type}_${courseInfo.language}_all_data_new.js`
  ];
  
  // Проверка, загружены ли уже данные
  for (const varName of variableOptions) {
    if (window[varName]) {
      console.log(`Найдены загруженные данные: ${varName}`);
      callback({
        data: window[varName],
        variable: varName,
        courseInfo: courseInfo
      });
      return;
    }
  }
  
  // Загрузка данных из файла
  let loadedFiles = 0;
  let totalFiles = fileOptions.length;
  
  for (const fileName of fileOptions) {
    const script = document.createElement('script');
    script.src = `JavaScript/couses_data/${fileName}`;
    
    script.onload = function() {
      console.log(`Файл ${fileName} загружен успешно`);
      
      // Проверяем, появились ли нужные данные
      for (const varName of variableOptions) {
        if (window[varName]) {
          console.log(`Найдены данные в переменной ${varName} после загрузки ${fileName}`);
          callback({
            data: window[varName],
            variable: varName,
            courseInfo: courseInfo
          });
          return;
        }
      }
      
      loadedFiles++;
      if (loadedFiles === totalFiles) {
        console.error(`Не удалось найти данные после загрузки всех файлов`);
        callback(null);
      }
    };
    
    script.onerror = function() {
      console.warn(`Ошибка загрузки файла ${fileName}`);
      loadedFiles++;
      if (loadedFiles === totalFiles) {
        console.error(`Не удалось найти данные после загрузки всех файлов`);
        callback(null);
      }
    };
    
    document.body.appendChild(script);
  }
}

// Экспортируем функции для использования в других модулях
window.courseDataLoader = {
  detectCourseInfo: detectCourseInfo,
  loadCourseData: loadCourseData
};
