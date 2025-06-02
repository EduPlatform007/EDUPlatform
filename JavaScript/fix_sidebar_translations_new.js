

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
    
    // Специальная обработка для HTML/CSS курса
    if (window.location.pathname.toLowerCase().includes('_rus') || 
        window.location.pathname.toLowerCase().includes('_ru')) {
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
