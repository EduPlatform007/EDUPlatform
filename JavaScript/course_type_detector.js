/**
 * Файл для автоматического определения типа курса и языка из метатегов
 * и инициализации соответствующих тестов и практических заданий
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Инициализация детектора типа курса...');
  
  // Определяем тип курса из метатегов
  const courseTypeMeta = document.querySelector('meta[name="course-type"]');
  const languageMeta = document.querySelector('meta[name="course-language"]');
  
  if (!courseTypeMeta) {
    console.error('Метатег с типом курса не найден!');
    return;
  }
  
  const courseType = courseTypeMeta.getAttribute('content');
  const language = languageMeta ? languageMeta.getAttribute('content') : document.documentElement.lang;
  
  console.log(`Обнаружен тип курса: ${courseType}, язык: ${language}`);
  
  // Формируем полный идентификатор курса
  let fullCourseType = courseType;
  if (language === 'kk' || language === 'kazakh') {
    fullCourseType += '_kz';
  } else if (language === 'ru' || language === 'rus' || language === 'russian') {
    fullCourseType += '_ru';
  }
  
  console.log(`Полный идентификатор курса: ${fullCourseType}`);
  
  // Сохраняем идентификатор курса в localStorage для использования в других скриптах
  localStorage.setItem('currentCourseType', fullCourseType);
  
  // Создаем и инициализируем скрипты для тестов и практических заданий для всех уроков
  function initializeQuizPracticeForAllLessons() {
    console.log(`Инициализация тестов и практических заданий для курса: ${fullCourseType}`);
    
    // Если функция insertQuizPractice доступна
    if (typeof window.insertQuizPractice === 'function') {
      // Получаем текущий номер урока из localStorage или url
      const currentLessonId = parseInt(localStorage.getItem('lastOpenedLesson') || '1');
      
      console.log(`Текущий урок: ${currentLessonId}`);
      
      // Инициализируем тесты и практические задания для текущего урока
      window.insertQuizPractice(currentLessonId, fullCourseType);
      
      console.log(`Тесты и практические задания для урока ${currentLessonId} инициализированы`);
    } else {
      console.error('Функция insertQuizPractice не найдена!');
    }
  }
  
  // Добавляем обработчик события загрузки урока
  window.addEventListener('lessonLoaded', function(event) {
    console.log('Событие загрузки урока обнаружено');
    
    // Получаем номер урока из события или localStorage
    const lessonId = event.detail?.lessonId || parseInt(localStorage.getItem('lastOpenedLesson') || '1');
    
    // Инициализируем тесты и практические задания для загруженного урока
    if (typeof window.insertQuizPractice === 'function') {
      window.insertQuizPractice(lessonId, fullCourseType);
      console.log(`Тесты и практические задания для урока ${lessonId} инициализированы после события загрузки`);
    }
  });
  
  // Выполняем инициализацию с небольшой задержкой, чтобы дать время загрузиться всем скриптам
  setTimeout(initializeQuizPracticeForAllLessons, 1000);
  
  console.log('Детектор типа курса инициализирован');
});
