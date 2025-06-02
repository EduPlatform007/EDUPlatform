/**
 * Скрипт для исправления переводов в сайдбаре и домашних заданиях
 * Этот скрипт управляет переводом элементов сайдбара и заголовков,
 * обеспечивая корректные переводы для казахского и русского языков
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('⚙️ Инициализация исправлений для переводов сайдбара');
  
  // Словарь переводов для элементов сайдбара
  const sidebarTranslations = {
    // Для элементов сайдбара
    'сабак': {
      'kk': 'сабак',
      'ru': 'уроки'
    },
    'апта': {
      'kk': 'апта',
      'ru': 'неделя'
    },
    'практикалык тапсырма': {
      'kk': 'практикалык тапсырма',
      'ru': 'практическое задание'
    },
    
    // Для заголовков и других элементов
    'Тесттер': {
      'kk': 'Тесттер',
      'ru': 'Тесты'
    },
    
    // Для домашних заданий
    'Қосымша: Үй жұмысы': {
      'kk': 'Қосымша: Үй жұмысы',
      'ru': 'Дополнительно: Домашнее задание'
    }
  };
  
  // Хранилище оригинальных текстов
  const originalTexts = new Map();
  
  // Получаем текущий язык
  function getCurrentLang() {
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return userData.language || 'kk';
  }
  
  // Функция для перевода элемента
  function translateElement(element) {
    const text = element.textContent.trim();
    const lang = getCurrentLang();
    
    // Сохраняем оригинальный текст, если еще не сохранен
    const elementId = element.id || text;
    if (!originalTexts.has(elementId)) {
      originalTexts.set(elementId, text);
    }
    
    // Удаляем data-lang-key, чтобы управлять переводом вручную
    element.removeAttribute('data-lang-key');
    
    // Проверяем, содержит ли текст ключевые слова для перевода
    const lowerText = text.toLowerCase();
    
    // Специальный случай для "практикалык тапсырма" в русской версии
    if (lang === 'ru' && lowerText.includes('практикалык тапсырма')) {
      element.textContent = text.replace(
        /практикалык тапсырма/i, 
        'практическое задание'
      );
      return;
    }
    
    // Проходим по словарю переводов
    for (const [key, translations] of Object.entries(sidebarTranslations)) {
      if (lowerText.includes(key.toLowerCase())) {
        element.textContent = text.replace(
          new RegExp(key, 'i'), 
          translations[lang]
        );
        break;
      }
    }
  }
  
  // Основная функция исправления переводов
  function fixTranslations() {
    // Для статичных элементов сайдбара
    document.querySelectorAll('.sidebar-item, .homework-sidebar').forEach(item => {
      translateElement(item);
    });
    
    // Для заголовков секций
    document.querySelectorAll('.homework-title, .practice-title, .practice-section h3, .test h3').forEach(item => {
      translateElement(item);
    });
    
    // Специальная обработка для основного содержимого в русской версии
    if (window.location.pathname.toLowerCase().includes('_rus') || 
        window.location.pathname.toLowerCase().includes('_ru')) {
      // Ищем все заголовки в контенте
      document.querySelectorAll('h1, h2, h3, h4, h5, h6, .lesson-content *').forEach(item => {
        if (item.textContent && item.textContent.toLowerCase().includes('практикалык')) {
          translateElement(item);
        }
      });
      
      // Ищем все элементы с классами, содержащими 'practice'
      document.querySelectorAll('[class*="practice"]').forEach(item => {
        if (item.textContent.toLowerCase().includes('практикалык')) {
          translateElement(item);
        }
      });
    }
  }
  
  // Запускаем исправление переводов
  fixTranslations();
  
  // Запускаем повторно каждую секунду для динамически добавляемых элементов
  setInterval(fixTranslations, 1000);
  
  // Наблюдаем за изменениями в DOM
  const observer = new MutationObserver(mutations => {
    let needsFixing = false;
    
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' || mutation.type === 'characterData') {
        needsFixing = true;
      }
    });
    
    if (needsFixing) {
      fixTranslations();
    }
  });
  
  // Наблюдаем за изменениями в сайдбаре
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    observer.observe(sidebar, { childList: true, subtree: true, characterData: true });
  }
  
  // Наблюдаем за изменениями в основном контенте
  const content = document.querySelector('.lesson-content');
  if (content) {
    observer.observe(content, { childList: true, subtree: true, characterData: true });
  }
  
  console.log('✅ Исправления для переводов сайдбара инициализированы');
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('⚙️ Инициализация исправлений для переводов сайдбара');
  
  // Словарь переводов для элементов сайдбара
  const sidebarTranslations = {
    // Для элементов сайдбара
    'сабак': {
      'kk': 'сабак',
      'ru': 'уроки'
    },
    'апта': {
      'kk': 'апта',
      'ru': 'неделя'
    },
    'практикалык тапсырма': {
      'kk': 'практикалык тапсырма',
      'ru': 'практическое задание'
    },
    
    // Для заголовков и других элементов
    'Тесттер': {
      'kk': 'Тесттер',
      'ru': 'Тесты'
    },
    
    // Для динамически создаваемых элементов в HTML/CSS курсе
    'Қосымша: Үй жұмысы': {
      'kk': 'Қосымша: Үй жұмысы',
      'ru': 'Дополнительно: Домашнее задание'
    }
  };
  
  // Хранилище оригинальных текстов
  const originalTexts = new Map();
  
  // Получаем текущий язык
  function getCurrentLang() {
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return userData.language || 'kk';
  }
  
        // Проверяем, есть ли текст в словаре переводов
        let translatedText = elementText;
        
        // Проверяем на точное соответствие ключу или содержание ключа в тексте
        for (const [key, translations] of Object.entries(sidebarTranslations)) {
          if (elementText.toLowerCase().includes(key.toLowerCase())) {
            // Заменяем только часть текста, которая соответствует ключу
            translatedText = elementText.replace(new RegExp(key, 'i'), translations[currentLang]);
            break;
          }
        }
        
        // Применяем перевод или оригинальный текст
        element.textContent = translatedText;
      }
    });
  }
  
  // Запускаем функцию при загрузке страницы
  fixTranslations();
  
  // Запускаем функцию при изменении языка
  document.addEventListener('languageChanged', function() {
    // Добавляем небольшую задержку, чтобы дать время системе перевода сделать свою работу
    setTimeout(fixTranslations, 100);
    // Дополнительная проверка через секунду для уверенности
    setTimeout(fixTranslations, 1000);
  });
  
  // Запускаем функцию при обновлении контента урока
  document.addEventListener('lessonContentUpdated', function() {
    // Добавляем небольшую задержку, чтобы дать время системе перевода сделать свою работу
    setTimeout(fixTranslations, 100);
    // Дополнительная проверка через секунду для уверенности
    setTimeout(fixTranslations, 1000);
  });
  
  // Наблюдаем за изменениями в DOM
  const observer = new MutationObserver(function(mutations) {
    fixTranslations();
  });
  
  // Запускаем наблюдение за всем документом
  observer.observe(document.body, { 
    childList: true, 
    subtree: true,
    attributes: true,
    attributeFilter: ['data-lang-key', 'class']
  });
  
  // Запускаем функцию каждые 2 секунды для дополнительной гарантии
  setInterval(fixTranslations, 2000);
  
  // Переопределяем функцию перевода, чтобы исключить перевод сайдбара
  if (window.translateElement) {
    const originalTranslateElement = window.translateElement;
    window.translateElement = function(element, lang) {
      // Не переводим элементы сайдбара и заголовки секций
      if (element.closest('.sidebar-item') || 
          element.classList.contains('sidebar-item') || 
          element.classList.contains('homework-title') || 
          (element.tagName === 'H3' && (element.closest('.practice') || element.closest('.test'))) ||
          !element.closest('.lesson-content')) {
        return;
      }
      
      // Для всех остальных элементов используем оригинальную функцию перевода
      return originalTranslateElement(element, lang);
    };
  }
});

// Добавляем стили для карточек и других элементов курса
(function() {
  const style = document.createElement('style');
  style.textContent = `
    /* Стили для карточек */
    .info-card {
      background-color: #f8f9fa;
      border-left: 4px solid #17a2b8;
      padding: 15px;
      margin: 15px 0;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .warning-card {
      background-color: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 15px;
      margin: 15px 0;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .tip-card {
      background-color: #d4edda;
      border-left: 4px solid #28a745;
      padding: 15px;
      margin: 15px 0;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    /* Стили для кодовых блоков */
    pre {
      background-color: #f5f5f5;
      border-radius: 4px;
      padding: 15px;
      overflow-x: auto;
      margin: 15px 0;
      border: 1px solid #e0e0e0;
    }
    
    code {
      font-family: 'Courier New', Courier, monospace;
    }
    
    /* Стили для тестов */
    .test-question {
      background-color: #f8f9fa;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 15px;
      margin-bottom: 20px;
    }
    
    .test-options {
      margin-top: 10px;
    }
    
    .test-option {
      margin-bottom: 8px;
      padding: 8px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .test-option:hover {
      background-color: #f1f1f1;
    }
    
    .test-option.selected {
      background-color: #d4edda;
      border-color: #28a745;
    }
    
    /* Стили для практических заданий */
    .practice {
      background-color: #f8f9fa;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 20px;
      margin: 20px 0;
    }
    
    /* Стили для теории */
    .theory h2 {
      border-bottom: 2px solid #17a2b8;
      padding-bottom: 10px;
      margin-top: 30px;
    }
    
    .theory h3 {
      color: #0056b3;
      margin-top: 25px;
    }
    
    .theory ul, .theory ol {
      padding-left: 20px;
    }
    
    .theory img {
      max-width: 100%;
      height: auto;
      margin: 15px 0;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `;
  
  document.head.appendChild(style);
})();
