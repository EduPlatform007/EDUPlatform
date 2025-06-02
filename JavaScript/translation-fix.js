/**
 * Исправление проблемы с переводом сайдбара
 * Только для перевода элементов хедера
 */

// Функция для применения переводов только к хедеру
function applyHeaderOnlyTranslations(lang) {
  // Устанавливаем язык документа
  document.documentElement.setAttribute('lang', lang);
  
  // Переводим только элементы хедера
  const headerElements = document.querySelectorAll('header [data-lang-key]');
  headerElements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (window.translations && window.translations[lang] && window.translations[lang][key]) {
      element.textContent = window.translations[lang][key];
    }
  });
  
  // Переводим заголовок страницы (если есть)
  const titleElement = document.querySelector('title[data-lang-key]');
  if (titleElement && window.translations && window.translations[lang]) {
    const key = titleElement.getAttribute('data-lang-key');
    if (window.translations[lang][key]) {
      titleElement.textContent = window.translations[lang][key];
    }
  }
  
  // Переводим футер (если нужно)
  const footerElements = document.querySelectorAll('footer [data-lang-key]');
  footerElements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (window.translations && window.translations[lang] && window.translations[lang][key]) {
      element.textContent = window.translations[lang][key];
    }
  });
}
  
// Функция предотвращения перевода сайдбара
function preventSidebarTranslation() {
  // Находим все элементы сайдбара с атрибутом data-lang-key
  const sidebarElements = document.querySelectorAll('.sidebar [data-lang-key]');

  // Удаляем атрибут data-lang-key, чтобы система переводов их игнорировала
  sidebarElements.forEach(element => {
    // Сохраняем оригинальный ключ как отдельный атрибут, чтобы не потерять информацию
    if (!element.hasAttribute('data-original-lang-key')) {
      element.setAttribute('data-original-lang-key', element.getAttribute('data-lang-key'));
      element.removeAttribute('data-lang-key');
    }
  });
}

// Переопределяем функцию applyUniversalTranslations, если она существует
if (typeof window.applyUniversalTranslations === 'function') {
  // Сохраняем оригинальную функцию
  window.originalApplyUniversalTranslations = window.applyUniversalTranslations;

  // Переопределяем функцию, чтобы применять переводы только к хедеру в курсах
  window.applyUniversalTranslations = function(lang, courseType) {
    if (courseType && (courseType === 'python' || courseType === 'html' || courseType === 'database')) {
      // Для страниц курсов применяем только переводы хедера
      preventSidebarTranslation();
    applyHeaderOnlyTranslations(lang);
    } else {
      // Для остальных страниц используем оригинальную функцию
      window.originalApplyUniversalTranslations(lang, courseType);
}
  };
}

// Также переопределяем функции специфичного перевода для курсов
if (typeof window.applyFullTranslationPython === 'function') {
  window.originalApplyFullTranslationPython = window.applyFullTranslationPython;
  window.applyFullTranslationPython = function(lang) {
    preventSidebarTranslation();
    applyHeaderOnlyTranslations(lang);
  };
}
    
if (typeof window.applyFullTranslationHTML === 'function') {
  window.originalApplyFullTranslationHTML = window.applyFullTranslationHTML;
  window.applyFullTranslationHTML = function(lang) {
    preventSidebarTranslation();
        applyHeaderOnlyTranslations(lang);
  };
}
        
if (typeof window.applyFullTranslationDB === 'function') {
  window.originalApplyFullTranslationDB = window.applyFullTranslationDB;
  window.applyFullTranslationDB = function(lang) {
    preventSidebarTranslation();
    applyHeaderOnlyTranslations(lang);
  };
    }

document.addEventListener('DOMContentLoaded', function() {
  // Определяем, находимся ли мы на странице курса
  const isCourse = document.querySelector('meta[name="course-type"]') !== null ||
                  window.location.href.includes('_course') ||
                  window.location.href.includes('python_') ||
                  window.location.href.includes('html_') ||
                  window.location.href.includes('database_');

  if (isCourse) {
    // Предотвращаем перевод сайдбара
    preventSidebarTranslation();

    // Переопределяем обработчик изменения языка
    const langSelect = document.getElementById('select');
    if (langSelect && !langSelect._translationFixed) {
      langSelect._translationFixed = true;
      // Добавляем новый обработчик
      langSelect.addEventListener('change', function(event) {
        // Предотвращаем стандартные обработчики
        event.stopImmediatePropagation();

        const lang = this.value === 'Қазақша' ? 'kk' : 'ru';

        // Сохраняем выбранный язык
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        userData.language = lang;
        localStorage.setItem('currentUser', JSON.stringify(userData));

        // Предотвращаем перевод сайдбара
        preventSidebarTranslation();

        // Применяем переводы только к хедеру
        applyHeaderOnlyTranslations(lang);

        // Показываем уведомление об изменении языка
        const message = lang === 'kk' ? 'Тіл қазақшаға ауыстырылды' : 'Язык изменен на русский';

        // Используем встроенный метод уведомления, если он определен
        if (typeof window.showNotification === 'function') {
          window.showNotification(message);
        } else {
          // Создаем свое простое уведомление
          alert(message);
  }

        return false;
      }, true);
  }
  }
});
  
// Функция для отображения уведомления
function showLanguageNotification(message) {
  // ��даляем предыдущее уведомление, если оно есть
  const existingNotification = document.querySelector('.language-notification');
  if (existingNotification) {
    document.body.removeChild(existingNotification);
  }

  // Создаем новое уведомление
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
  
  // Скрываем уведомление через 2 секунды
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