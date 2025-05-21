/**
 * Улучшенная система переводов для курсов
 * Переводит только элементы хедера, но не содержимое сайдбара
 */

// Хранилище переводов
const headerTranslations = {
  // Русский язык
  'ru': {
    // Хедер
    'main': 'Главная',
    'courses': 'Курсы',
    'contacts': 'Контакты',
    'login': 'Вход',
    'profile': 'Профиль',
    'logout': 'Выход',
    
    // Общие элементы
    'copyright': '© 2025 EduPlatform',
    
    // Заголовки страниц
    'python_course_title': 'Курс: Python программирование',
    'html_course_title': 'Курс: HTML и CSS',
    'database_course_title': 'Курс: Базы данных',
    
    // Сообщения
    'lesson_completed': 'Урок успешно завершен!',
    'lesson_already_completed': 'Этот урок уже завершен',
    'tasks_not_completed': 'Для завершения урока необходимо правильно выполнить все задания',
    'language_changed': 'Язык изменен на русский'
  },
  
  // Казахский язык
  'kk': {
    // Хедер
    'main': 'Басты',
    'courses': 'Курстар',
    'contacts': 'Байланыс',
    'login': 'Кіру',
    'profile': 'Профиль',
    'logout': 'Шығу',
    
    // Общие элементы
    'copyright': '© 2025 EduPlatform',
    
    // Заголовки страниц
    'python_course_title': 'Курс: Python бағдарламалау',
    'html_course_title': 'Курс: HTML және CSS',
    'database_course_title': 'Курс: Деректер базасы',
    
    // Сообщения
    'lesson_completed': 'Сабақ сәтті аяқталды!',
    'lesson_already_completed': 'Бұл сабақ бұрын аяқталған',
    'tasks_not_completed': 'Сабақты аяқтау үшін барлық тапсырмаларды дұрыс орындау қажет',
    'language_changed': 'Тіл қазақшаға ауыстырылды'
  }
};

/**
 * Применяет перевод только к элементам хедера
 * @param {string} lang - Код языка ('ru' или 'kk')
 */
function applyHeaderTranslations(lang) {
  if (!headerTranslations[lang]) {
    console.warn(`Переводы для языка ${lang} не найдены`);
    return;
  }
  
  // Устанавливаем язык документа
  document.documentElement.setAttribute('lang', lang);
  
  // Переводим только элементы с атрибутом data-lang-key в хедере
  const headerElements = document.querySelectorAll('header [data-lang-key]');
  headerElements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (headerTranslations[lang][key]) {
      element.textContent = headerTranslations[lang][key];
    }
  });
  
  // Переводим заголовок страницы (если есть)
  const titleElement = document.querySelector('title[data-lang-key]');
  if (titleElement) {
    const key = titleElement.getAttribute('data-lang-key');
    if (headerTranslations[lang][key]) {
      titleElement.textContent = headerTranslations[lang][key];
    }
  }
  
  // Переводим футер (если нужно)
  const footerElements = document.querySelectorAll('footer [data-lang-key]');
  footerElements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (headerTranslations[lang][key]) {
      element.textContent = headerTranslations[lang][key];
    }
  });
  
  console.log(`Переводы хедера для языка ${lang} применены`);
}

// Экспортируем функцию для использования в других скриптах
window.applyHeaderTranslations = applyHeaderTranslations;

// Функция для переключения языка
function switchLanguage(lang) {
  // Сохраняем выбранный язык
  localStorage.setItem('selectedLanguage', lang);
  
  // Получаем данные пользователя и обновляем язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  userData.language = lang;
  localStorage.setItem('currentUser', JSON.stringify(userData));
  
  // Применяем переводы только к хедеру
  applyHeaderTranslations(lang);
  
  // Показываем уведомление о смене языка
  const message = lang === 'kk' ? headerTranslations.kk.language_changed : headerTranslations.ru.language_changed;
  showLanguageNotification(message);
}

// Функция для отображения уведомления о смене языка
function showLanguageNotification(message) {
  // Удаляем предыдущее уведомление, если оно есть
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

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  // Находим селектор языка
  const langSelect = document.getElementById('select');
  if (langSelect) {
    // Добавляем обработчик события изменения
    langSelect.addEventListener('change', function() {
      const lang = this.value === 'Қазақша' ? 'kk' : 'ru';
      switchLanguage(lang);
    });
    
    // Устанавливаем начальное значение
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      langSelect.value = savedLanguage === 'kk' ? 'Қазақша' : 'Русский';
      applyHeaderTranslations(savedLanguage);
    }
  }
  
  // Экспортируем функции для использования в других скриптах
  window.improvedTranslations = {
    switchLanguage,
    applyHeaderTranslations
  };
});