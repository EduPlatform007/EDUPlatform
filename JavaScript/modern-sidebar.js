/**
 * Скрипт для создания и обновления стилизованного сайдбара с курсами
 */

// Тексты для разных языков
const sidebarTranslations = {
  'ru': {
    'lesson_completed': 'Урок завершен',
    'complete_lesson': 'Завершить урок',
    'select_lesson': 'Выберите урок',
    'week': 'неделя'
  },
  'kk': {
    'lesson_completed': 'Сабақ аяқталды',
    'complete_lesson': 'Сабақты аяқтау',
    'select_lesson': 'Сабақты таңдаңыз',
    'week': 'апта'
  }
};

// Получение текущего языка
function getCurrentLanguage() {
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  return userData.language || determineLanguageFromPage() || 'kk';
}

// Определение языка из метатегов страницы или других элементов
function determineLanguageFromPage() {
  // Проверяем язык из атрибута html
  const htmlLang = document.documentElement.lang;
  if (htmlLang === 'ru' || htmlLang === 'kk') {
    return htmlLang;
  }
  
  // Проверяем наличие русского или казахского курса в URL
  const currentUrl = window.location.href.toLowerCase();
  if (currentUrl.includes('_rus') || currentUrl.includes('russian')) {
    return 'ru';
  } else if (currentUrl.includes('_kz') || currentUrl.includes('kazakh')) {
    return 'kk';
  }
  
  // По умолчанию казахский
  return 'kk';
}

// Получение перевода
function getSidebarText(key) {
  const lang = getCurrentLanguage();
  return sidebarTranslations[lang][key] || sidebarTranslations['kk'][key];
}

// Функция для инициализации современного сайдбара 
function initModernSidebar() {
  // Добавляем стили для исправления выравнивания уроков
  addAlignmentStyles();
  
  // Добавляем иконки для уроков, если они еще не добавлены
  if (!document.querySelector('.lesson-icon')) {
  addLessonIcons();
  }
  
  // Подсвечиваем выполненные уроки
  highlightCompletedLessons();
  
  // Обновляем текст кнопки завершения урока
  updateCompleteButtonText();
  }

// Функция для добавления стилей исправления выравнивания уроков
function addAlignmentStyles() {
  // Создаем элемент стиля
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    /* Фикс выравнивания уроков в сайдбаре */
    .lesson-list li, .lesson-item {
      margin-left: 0 !important;
      width: 100% !important;
      display: flex !important;
      align-items: center !important;
      box-sizing: border-box !important;
      text-align: left !important;
      padding-left: 15px !important;
    }
    
    /* Выравнивание всех элементов по левому краю */
    .sidebar ul.lesson-list, 
    .sidebar ul.lesson-list li,
    .lesson-list li, 
    .lesson-item {
      margin-left: 0 !important;
    }
    
    /* Убираем отступы слева */
    .sidebar ul.lesson-list {
      padding: 0 !important;
      margin: 0 !important;
    }
    
    /* Фикс галочек для завершенных уроков */
    .lesson-completed {
      display: inline-block !important;
      color: #4CAF50 !important;
      font-weight: bold !important;
      margin-left: auto !important;
      margin-right: 5px !important;
    }
  `;
  
  // Добавляем стили в документ
  document.head.appendChild(styleEl);
}

// Функция для обновления текста кнопки завершения урока
function updateCompleteButtonText() {
  const completeBtn = document.querySelector('.complete-btn');
  if (completeBtn) {
    completeBtn.textContent = getSidebarText('complete_lesson');
  }
}
// Функция для добавления иконок к урокам
function addLessonIcons() {
  const lessonItems = document.querySelectorAll('.lesson-item, .lesson-list li');
  
  lessonItems.forEach(item => {
    // Проверяем, нет ли уже иконки
    if (!item.querySelector('.lesson-icon')) {
      // Создаем иконку для урока
      const icon = document.createElement('i');
      icon.className = 'fas fa-book lesson-icon';
      
      // Вставляем иконку перед текстом урока
      const firstChild = item.firstChild;
      if (firstChild) {
        item.insertBefore(icon, firstChild);
      } else {
        item.appendChild(icon);
      }
    }
    
    // Если урок завершен и еще нет иконки, добавляем галочку
    if (item.classList.contains('completed') && !item.querySelector('.lesson-completed-icon')) {
      const checkIcon = document.createElement('i');
      checkIcon.className = 'fas fa-check-circle lesson-completed-icon';
      item.appendChild(checkIcon);
    }
  });
}

// Функция для подсветки завершенных уроков
function highlightCompletedLessons() {
  let courseType = document.querySelector('meta[name="course-type"]')?.getAttribute('content');
  if (!courseType) {
    // Попытка определить тип курса из URL
    const currentUrl = window.location.href.toLowerCase();
    if (currentUrl.includes('python')) {
      courseType = 'python';
    } else if (currentUrl.includes('html')) {
      courseType = 'html';
    } else if (currentUrl.includes('database')) {
      courseType = 'database';
    } else {
      courseType = 'default';
    }
  }
  
  // Получаем список завершенных уроков из localStorage
  let completedLessons = [];
  
  // Пробуем разные варианты хранения информации о завершенных уроках
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  if (currentUser.completedLessons && currentUser.completedLessons[courseType]) {
    completedLessons = currentUser.completedLessons[courseType];
  } else {
    const storageKey = courseType + 'CompletedLessons';
    completedLessons = JSON.parse(localStorage.getItem(storageKey) || '[]');
  }
  
  // Подсвечиваем каждый завершенный урок
  const lessonItems = document.querySelectorAll('.lesson-item, .lesson-list li');
  lessonItems.forEach(item => {
    const lessonNum = parseInt(item.getAttribute('data-lesson') || item.querySelector('[data-lesson]')?.getAttribute('data-lesson') || '0');
    
    if (completedLessons.includes(lessonNum)) {
      item.classList.add('completed');
      
      // Добавляем иконку завершения, если её ещё нет
      if (!item.querySelector('.lesson-completed-icon')) {
        const checkIcon = document.createElement('i');
        checkIcon.className = 'fas fa-check-circle lesson-completed-icon';
        item.appendChild(checkIcon);
      }
    }
  });
}

// Функция проверки выполнения всех заданий
function checkAllTasksCompleted(lessonNum) {
  // Проверяем, есть ли задания в уроке
  const hasTests = document.querySelector('.test-question') !== null;
  const hasPractice = document.querySelector('.practice-input') !== null;
  
  // Если нет заданий, считаем, что все выполнено
  if (!hasTests && !hasPractice) {
    return true;
  }
  
  // Получаем статус выполнения заданий
  const tasksStatus = JSON.parse(localStorage.getItem('lessonTasksStatus') || '{"tests":{}, "practice":{}}');
  
  // Проверяем статус тестов и практики
  const testsCompleted = !hasTests || tasksStatus.tests[lessonNum] === true;
  const practiceCompleted = !hasPractice || tasksStatus.practice[lessonNum] === true;
  
  return testsCompleted && practiceCompleted;
}

// Обновленная функция завершения урока с проверкой задач
function modernCompleteLesson() {
  const lessonLinks = document.querySelectorAll('.lesson-link, .lesson-item');
  const activeLesson = document.querySelector('.lesson-link.active, .lesson-item.active');
  
  if (!activeLesson) {
    alert(getSidebarText('select_lesson'));
    return;
  }

  const lessonNum = parseInt(activeLesson.getAttribute('data-lesson') ||
                            activeLesson.querySelector('[data-lesson]')?.getAttribute('data-lesson') || '0');
  
  // Проверяем выполнение задач перед завершением урока
  const allTasksCompleted = checkAllTasksCompleted(lessonNum);
  
  if (!allTasksCompleted) {
    const resultMessage = document.getElementById('result-message');
    if (resultMessage) {
      const lang = getCurrentLanguage();
      
      let message;
      if (lang === 'kk') {
        message = 'Сабақты аяқтау үшін барлық тапсырмаларды орындаңыз';
      } else {
        message = 'Завершите все задания, чтобы закончить урок';
      }
      
      resultMessage.innerHTML = `<div class="error">${message}</div>`;
      
      setTimeout(() => {
        resultMessage.innerHTML = '';
      }, 3000);
    }
    return;
  }

  // Выполняем стандартную функцию завершения урока
  if (typeof window.originalCompleteLesson === 'function') {
    window.originalCompleteLesson();
  } else if (typeof window.completeLesson === 'function' && window.completeLesson !== modernCompleteLesson) {
    window.completeLesson();
  }
  
  // Обновляем UI
  activeLesson.classList.add('completed');
  
  // Добавляем иконку завершения, если её ещё нет
  if (!activeLesson.querySelector('.lesson-completed-icon')) {
    const checkIcon = document.createElement('i');
    checkIcon.className = 'fas fa-check-circle lesson-completed-icon';
    activeLesson.appendChild(checkIcon);
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  // Сохраняем оригинальную функцию
  if (typeof window.completeLesson === 'function' && window.completeLesson !== modernCompleteLesson) {
    window.originalCompleteLesson = window.completeLesson;
    window.completeLesson = modernCompleteLesson;
  }
  
  // Инициализируем сайдбар
  initModernSidebar();
  
  // Наблюдатель только для основного контента (не для всей страницы)
  const lessonContent = document.querySelector('.lesson-content');
  if (lessonContent) {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Обновляем только текст кнопки и иконки новых элементов, без полной реинициализации
          updateCompleteButtonText();
        break;
        }
      }
  });
  
    observer.observe(lessonContent, { childList: true, subtree: false });
  }
});