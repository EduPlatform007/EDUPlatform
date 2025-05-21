/**
 * Скрипт для исправления переводов в сайдбаре и домашних заданиях
 * Этот скрипт полностью блокирует перевод элементов сайдбара и заголовков,
 * сохраняя их оригинальные значения независимо от выбранного языка
 */

document.addEventListener('DOMContentLoaded', function() {
  // Сохраняем оригинальные тексты при первой загрузке
  const originalTexts = new Map();
  
  // Функция для исправления переводов
  function fixTranslations() {
    // Получаем текущий язык
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const currentLang = userData.language || 'kk';
    
    // Исправляем сайдбар
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
      const itemId = item.id || item.textContent.trim();
      
      // Сохраняем оригинальный текст при первом запуске
      if (!originalTexts.has(itemId)) {
        originalTexts.set(itemId, item.textContent.trim());
      }
      
      // Удаляем атрибут data-lang-key и восстанавливаем оригинальный текст
      item.removeAttribute('data-lang-key');
      item.textContent = originalTexts.get(itemId);
    });
    
    // Исправляем заголовки секций (домашние задания, тесты и т.д.)
    const sectionTitles = document.querySelectorAll('.homework-title, .practice h3, .test h3, .theory h2, .theory h3');
    sectionTitles.forEach(title => {
      const titleId = title.id || title.textContent.trim();
      
      // Сохраняем оригинальный текст при первом запуске
      if (!originalTexts.has(titleId)) {
        originalTexts.set(titleId, title.textContent.trim());
      }
      
      // Удаляем атрибут data-lang-key и восстанавливаем оригинальный текст
      title.removeAttribute('data-lang-key');
      title.textContent = originalTexts.get(titleId);
    });
    
    // Блокируем перевод всех элементов с атрибутом data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
      // Исключаем элементы контента уроков, которые должны переводиться
      if (!element.closest('.lesson-content') && !element.closest('header')) {
        const elementId = element.id || element.textContent.trim();
        
        // Сохраняем оригинальный текст при первом запуске
        if (!originalTexts.has(elementId)) {
          originalTexts.set(elementId, element.textContent.trim());
        }
        
        // Удаляем атрибут data-lang-key и восстанавливаем оригинальный текст
        element.removeAttribute('data-lang-key');
        element.textContent = originalTexts.get(elementId);
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
