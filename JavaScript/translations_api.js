/**
 * Универсальное API переводов для всей платформы
 * Обеспечивает единый интерфейс для переключения языка на всех страницах
 */

// Функция инициализации языковой системы
function initTranslationsSystem() {
  console.log('Инициализация API переводов');
  
  // Определяем текущий язык пользователя
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const currentLang = userData.language || 'kk'; // Используем kk как язык по умолчанию
  
  // Обновляем атрибут lang для HTML
  document.documentElement.setAttribute('lang', currentLang);
  
  console.log('Текущий язык пользователя:', currentLang);
  
  // Устанавливаем языковые селекторы
  setupLanguageSelectors(currentLang);
  
  // Применяем переводы сразу при загрузке
  setTimeout(() => applyUniversalTranslations(currentLang), 300);
  
  return currentLang;
}

// Функция настройки селекторов языка
function setupLanguageSelectors(currentLang) {
  // Ищем все селекторы языка на странице
  const langSelectors = document.querySelectorAll('#select, .language-selector');
  
  langSelectors.forEach(selector => {
    // Устанавливаем начальное значение
    if (selector.tagName === 'SELECT') {
      selector.value = currentLang === 'kk' ? 'Қазақша' : 'Русский';
      
      // Удаляем существующие обработчики и устанавливаем новый
      const newSelector = selector.cloneNode(true);
      selector.parentNode.replaceChild(newSelector, selector);
      
      // Устанавливаем обработчик события изменения
      newSelector.addEventListener('change', function() {
        const newLang = this.value === 'Қазақша' ? 'kk' : 'ru';
        changeLanguage(newLang);
      });
    } else if (selector.classList.contains('switch-lang')) {
      // Если это кнопка переключения языка
      const newBtn = selector.cloneNode(true);
      selector.parentNode.replaceChild(newBtn, selector);
      
      // Устанавливаем текст и обработчик
      newBtn.textContent = currentLang === 'kk' ? 'Русский' : 'Қазақша';
      newBtn.addEventListener('click', function() {
        const newLang = currentLang === 'kk' ? 'ru' : 'kk';
        changeLanguage(newLang);
      });
    }
  });
}

// Универсальная функция изменения языка
function changeLanguage(newLang) {
  console.log('Переключение языка на:', newLang);
  
  // Сохраняем новый язык в localStorage
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  userData.language = newLang;
  localStorage.setItem('currentUser', JSON.stringify(userData));
  
  // Обновляем атрибут lang для HTML
  document.documentElement.setAttribute('lang', newLang);
  
  // Сохраняем данные о текущем уроке
  const currentLessonNum = localStorage.getItem('lastOpenedLesson');
  const currentCourseType = localStorage.getItem('lastOpenedCourse') || 'html';
  
  // Применяем переводы
  applyUniversalTranslations(newLang, currentCourseType);
  
  // Перезагружаем текущий урок, если на странице курса
  if (currentLessonNum && typeof loadLesson === 'function') {
    setTimeout(() => loadLesson(parseInt(currentLessonNum), currentCourseType), 200);
  }
  
  // Показываем уведомление о смене языка
  showLanguageNotification(newLang);
  
  // Обновляем интерфейс селекторов
  updateSelectors(newLang);
}

// Функция применения переводов для всех страниц
function applyUniversalTranslations(lang, courseType) {
  console.log(`Применение универсальных переводов для языка ${lang}, тип контента: ${courseType || 'общий'}`);
  
  try {
    // Определяем тип страницы, на которой находимся
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Выбираем правильную функцию перевода в зависимости от страницы и типа контента
    if (currentPage === 'course.html' && typeof applyFullTranslation === 'function') {
      applyFullTranslation(lang);
    } else if (currentPage === 'python_course.html' && typeof applyFullTranslationPython === 'function') {
      applyFullTranslationPython(lang);
    } else if (currentPage === 'database_course.html' && typeof applyFullTranslationDb === 'function') {
      applyFullTranslationDb(lang);
    } else if (currentPage === 'main.html' && typeof updatePageLanguage === 'function') {
      updatePageLanguage(lang);
    } else {
      // Для остальных страниц применяем общие переводы
      applyGenericTranslations(lang);
    }
    
    // Обновляем видео, если нужно
    if (typeof updateVideos === 'function') {
      setTimeout(() => updateVideos(courseType || 'html'), 100);
    }
  } catch (error) {
    console.error('Ошибка при применении универсальных переводов:', error);
    
    // Пробуем применить общие переводы в случае ошибки
    try {
      applyGenericTranslations(lang);
    } catch (e) {
      console.error('Не удалось применить даже общие переводы:', e);
    }
  }
}

// Функция обновления всех селекторов языка на странице
function updateSelectors(lang) {
  // Обновляем все селекторы на новый язык
  document.querySelectorAll('#select, .language-selector').forEach(selector => {
    if (selector.tagName === 'SELECT') {
      selector.value = lang === 'kk' ? 'Қазақша' : 'Русский';
    } else if (selector.classList.contains('switch-lang')) {
      selector.textContent = lang === 'kk' ? 'Русский' : 'Қазақша';
    }
  });
}

// Функция отображения уведомления о смене языка
function showLanguageNotification(lang) {
  const message = lang === 'kk' ? 'Тіл қазақшаға ауыстырылды' : 'Язык изменен на русский';
  
  // Удаляем предыдущее уведомление, если оно есть
  const existingNotification = document.querySelector('.language-notification');
  if (existingNotification) {
    document.body.removeChild(existingNotification);
  }
  
  const notificationDiv = document.createElement('div');
  notificationDiv.className = 'language-notification';
  notificationDiv.textContent = message;
  notificationDiv.style.position = 'fixed';
  notificationDiv.style.top = '10px';
  notificationDiv.style.right = '10px';
  notificationDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
  notificationDiv.style.color = 'white';
  notificationDiv.style.padding = '10px 15px';
  notificationDiv.style.borderRadius = '4px';
  notificationDiv.style.zIndex = '9999';
  document.body.appendChild(notificationDiv);
  
  setTimeout(() => {
    notificationDiv.style.opacity = '0';
    notificationDiv.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      if (document.body.contains(notificationDiv)) {
        document.body.removeChild(notificationDiv);
      }
    }, 500);
  }, 2000);
}

// Функция общего применения переводов для всех страниц
function applyGenericTranslations(lang) {
  // Проверяем наличие объекта переводов
  const translationsObject = 
    window.translations || 
    window.pythonTranslations || 
    window.dbTranslations || 
    window.htmlTranslations;
  
  if (!translationsObject || !translationsObject[lang]) {
    console.warn('Не найден подходящий объект переводов для языка', lang);
    return;
  }
  
  // Применяем переводы ко всем элементам с атрибутом data-lang-key
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translationsObject[lang][key]) {
      if (element.tagName === 'INPUT' && element.type !== 'button' && element.type !== 'submit') {
        if (element.hasAttribute('placeholder')) {
          element.placeholder = translationsObject[lang][key];
        } else {
          element.value = translationsObject[lang][key];
        }
      } else {
        element.innerHTML = translationsObject[lang][key];
      }
    }
  });
}

// Инициализируем систему переводов при загрузке страницы
document.addEventListener("DOMContentLoaded", initTranslationsSystem);

// Экспортируем функции для глобального использования
window.changeLanguage = changeLanguage;
window.applyUniversalTranslations = applyUniversalTranslations;
window.showLanguageNotification = showLanguageNotification; 