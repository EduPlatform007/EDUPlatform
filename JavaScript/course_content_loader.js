/**
 * Система автоматического определения типа курса и языка
 * и загрузки соответствующих тестов и практических заданий
 */

document.addEventListener('DOMContentLoaded', function() {
  // Определяем тип курса и язык из метатегов
  const courseType = document.querySelector('meta[name="course-type"]')?.content || '';
  const language = document.querySelector('meta[name="course-language"]')?.content || '';
  
  console.log(`Определен тип курса: ${courseType}, язык: ${language}`);
  
  // Формируем идентификатор курса
  let courseId = '';
  
  if (courseType === 'html') {
    courseId = 'html_css';
  } else if (courseType === 'python') {
    courseId = 'python';
  } else if (courseType === 'database') {
    courseId = 'database';
  } else {
    console.error(`Неизвестный тип курса: ${courseType}`);
    return;
  }
  
  // Добавляем язык к идентификатору курса
  if (language === 'kk') {
    courseId += '_kz';
  } else if (language === 'ru') {
    courseId += '_ru';
  } else {
    console.error(`Неизвестный язык: ${language}`);
    return;
  }
  
  console.log(`Определен идентификатор курса: ${courseId}`);
  
  // Добавляем обработчик события загрузки урока
  document.addEventListener('lessonLoaded', function() {
    // Получаем текущий номер урока
    const currentLessonId = localStorage.getItem('lastOpenedLesson');
    if (currentLessonId) {
      // Вставляем тесты и практические задания в урок
      if (typeof window.insertQuizPractice === 'function') {
        console.log(`Вставка тестов и практических заданий для урока ${currentLessonId}, курс: ${courseId}`);
        window.insertQuizPractice(parseInt(currentLessonId), courseId);
      } else {
        console.error('Функция insertQuizPractice не найдена');
      }
    }
  });
  
  // Если у нас есть сохраненный номер урока, загружаем тесты и практики
  const savedLessonId = localStorage.getItem('lastOpenedLesson');
  if (savedLessonId) {
    // Вставляем тесты и практические задания в урок после небольшой задержки
    setTimeout(() => {
      if (typeof window.insertQuizPractice === 'function') {
        console.log(`Вставка тестов и практических заданий для урока ${savedLessonId}, курс: ${courseId}`);
        window.insertQuizPractice(parseInt(savedLessonId), courseId);
      } else {
        console.error('Функция insertQuizPractice не найдена');
      }
    }, 1000);
  }
  
  // Сохраняем идентификатор курса в localStorage для использования в других скриптах
  localStorage.setItem('currentCourseId', courseId);
  
  console.log('Система автоматического определения курса инициализирована');
});
