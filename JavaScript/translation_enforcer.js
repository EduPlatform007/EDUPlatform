/**
 * ВАЖНОЕ ИЗМЕНЕНИЕ
 * Скрипт для обеспечения перевода только базовых элементов интерфейса
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Инициализация системы перевода интерфейса');
  
  // Запускаем перевод интерфейса через небольшую задержку
  setTimeout(function() {
    translateInterface();
  }, 1000);
  
  // Настраиваем переключатель языка
  setupLanguageSelector();
});

/**
 * Основная функция перевода интерфейса
 */
function translateInterface() {
  console.log('Применение переводов для интерфейса');
  
  // Получаем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const currentLang = userData.language || localStorage.getItem('language') || 'kk';
  
  // Определяем тип курса из URL
  let courseType = 'html';
  if (window.location.pathname.includes('python_course')) {
    courseType = 'python';
  } else if (window.location.pathname.includes('database_course')) {
    courseType = 'database';
  }
  
  // Переводим базовые элементы интерфейса
  translateBasicInterface(currentLang);
  
  // Обновляем видео, если функция доступна
  if (typeof window.updateVideos === 'function') {
    try {
      setTimeout(() => window.updateVideos(courseType), 200);
    } catch (error) {
      console.error('Ошибка при обновлении видео:', error);
    }
  }
}

/**
 * Перевод базовых элементов интерфейса
 */
function translateBasicInterface(lang) {
  const interfaceTranslations = {
    'ru': {
      'Сабақтар': 'Уроки',
      'Басты бет': 'Главная',
      'Курстар': 'Курсы',
      'Біз туралы': 'О нас',
      'Байланыс': 'Контакты',
      'Кіру': 'Войти',
      'Тіркелу': 'Регистрация',
      'Шығу': 'Выход',
      'Тіл': 'Язык',
      'апта': 'неделя'
    },
    'kk': {
      'Уроки': 'Сабақтар',
      'Главная': 'Басты бет',
      'Курсы': 'Курстар',
      'О нас': 'Біз туралы',
      'Контакты': 'Байланыс',
      'Войти': 'Кіру',
      'Регистрация': 'Тіркелу',
      'Выход': 'Шығу',
      'Язык': 'Тіл',
      'неделя': 'апта'
    }
  };
  
  try {
    // Переводим заголовок сайдбара
    const sidebarTitle = document.querySelector('.sidebar h2');
    if (sidebarTitle) {
      sidebarTitle.textContent = lang === 'ru' ? 'Уроки' : 'Сабақтар';
    }
    
    // Переводим элементы хедера
    const headerElements = document.querySelectorAll('.header-line a, .header-text');
    headerElements.forEach(element => {
      const text = element.textContent.trim();
      if (interfaceTranslations[lang][text]) {
        element.textContent = interfaceTranslations[lang][text];
      }
    });
    
    // Переводим "апта/неделя" в кнопках недель
    document.querySelectorAll('.week-btn').forEach(btn => {
      const text = btn.textContent;
      if (text.includes('апта') || text.includes('неделя')) {
        const match = text.match(/\d+/);
        if (match) {
          const weekNum = match[0];
          const locked = text.includes('🔒') ? ' 🔒' : '';
          btn.textContent = lang === 'ru' ? `${weekNum} неделя${locked}` : `${weekNum} апта${locked}`;
        }
      }
    });
  } catch (error) {
    console.error('Ошибка при переводе базового интерфейса:', error);
  }
}

/**
 * Настройка переключателя языка
 */
function setupLanguageSelector() {
  const languageSelectors = document.querySelectorAll('select[name="language"]');
  
  languageSelectors.forEach(selector => {
    // Устанавливаем текущий язык в селекторе
    const currentLang = localStorage.getItem('language') || 'kk';
    
    // Устанавливаем значение селектора
    if (currentLang === 'ru') {
      selector.value = 'Русский';
    } else {
      selector.value = 'Қазақша';
    }
    
    // Добавляем обработчик события
    selector.addEventListener('change', function() {
      const selectedOption = this.value;
      let newLang = 'kk';
      
      if (selectedOption === 'Русский') {
        newLang = 'ru';
      }
      
      // Сохраняем выбранный язык
      localStorage.setItem('language', newLang);
      
      // Если есть текущий пользователь, обновляем его настройки
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      if (currentUser && currentUser.uid) {
        currentUser.language = newLang;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
      
      // Перезагружаем страницу для применения нового языка
      window.location.reload();
    });
  });
} 