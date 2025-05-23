/**
 * ВАЖНОЕ ИЗМЕНЕНИЕ
 * Скрипт для перевода только базовых элементов интерфейса, без содержимого уроков.
 * Контент курсов будет представлен в отдельных версиях для каждого языка.
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Инициализация базовых переводов интерфейса');
  
  // Проверяем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const currentLang = userData.language || localStorage.getItem('language') || 'kk';
  
  // Запускаем основные переводы через короткую паузу
  setTimeout(() => {
    translateInterface(currentLang);
  }, 800);
  
  // Добавляем обработчики переключения языка
  setupLanguageSwitchers();
});

/**
 * Устанавливает обработчики на кнопки переключения языка
 */
function setupLanguageSwitchers() {
  const langSelectors = document.querySelectorAll('#select, .language-selector, .switch-lang, [name="language"]');
  
  langSelectors.forEach(selector => {
    if (!selector._hasFixedHandler) {
      selector._hasFixedHandler = true;
      
      selector.addEventListener('change', function() {
        const newLang = this.value === 'Қазақша' ? 'kk' : 'ru';
        translateInterface(newLang);
        
        // Сохраняем выбранный язык
        localStorage.setItem('language', newLang);
        
        // Если есть текущий пользователь, обновляем его настройки
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (currentUser) {
          currentUser.language = newLang;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        
        // Перезагружаем страницу для корректного применения
        window.location.reload();
      });
    }
  });
  
  // Также обрабатываем клики по ссылкам переключения языка
  const langLinks = document.querySelectorAll('.switch-lang');
  langLinks.forEach(link => {
    if (!link._hasFixedHandler) {
      link._hasFixedHandler = true;
      
      link.addEventListener('click', function() {
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const currentLang = userData.language || localStorage.getItem('language') || 'kk';
        const newLang = currentLang === 'kk' ? 'ru' : 'kk';
        
        // Сохраняем выбранный язык
        localStorage.setItem('language', newLang);
        
        // Если есть текущий пользователь, обновляем его настройки
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (currentUser) {
          currentUser.language = newLang;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        
        // Применяем перевод и перезагружаем страницу
        setTimeout(() => {
          window.location.reload();
        }, 300);
      });
    }
  });
}

/**
 * Основная функция для перевода базовых элементов интерфейса
 */
function translateInterface(lang) {
  console.log('Применение базовых переводов для языка:', lang);
  
  try {
    // Определяем тип курса из URL
    let courseType = 'html';
    if (window.location.pathname.includes('python_course')) {
      courseType = 'python';
    } else if (window.location.pathname.includes('database_course')) {
      courseType = 'database';
    }
    
    // Выполняем переводы для различных частей страницы
    translateHeader(lang);
    translateFooter(lang);
    translateButtons(lang);
    translateSidebarTitle(lang);
    
    // Обновляем видео, если функция доступна
    if (typeof window.updateVideos === 'function') {
      try {
        setTimeout(() => window.updateVideos(courseType), 200);
      } catch (error) {
        console.error('Ошибка при обновлении видео:', error);
      }
    }
  } catch (error) {
    console.error('Ошибка при переводе интерфейса:', error);
  }
}

/**
 * Переводит заголовок сайдбара и базовые элементы
 */
function translateSidebarTitle(lang) {
  console.log('Перевод заголовка сайдбара');
  
  try {
    // Переводим заголовок сайдбара
    const sidebarTitle = document.querySelector('.sidebar h2');
    if (sidebarTitle) {
      sidebarTitle.textContent = lang === 'ru' ? 'Уроки' : 'Сабақтар';
    }
    
    // Переводим неделя/апта в кнопках недель
    document.querySelectorAll('.week-btn').forEach(btn => {
      const text = btn.textContent.trim();
      if (text.includes('апта') || text.includes('неделя')) {
        const match = text.match(/\d+/);
        if (match) {
          const weekNum = match[0];
          const isLocked = text.includes('🔒');
          btn.textContent = lang === 'ru' ? `${weekNum} неделя${isLocked ? ' 🔒' : ''}` : `${weekNum} апта${isLocked ? ' 🔒' : ''}`;
        }
      }
    });
  } catch (error) {
    console.error('Ошибка при переводе заголовка сайдбара:', error);
  }
}

/**
 * Переводит элементы заголовка
 */
function translateHeader(lang) {
  console.log('Перевод элементов заголовка');
  
  const headerTranslations = {
    'ru': {
      'Басты бет': 'Главная',
      'Курстар': 'Курсы',
      'Біз туралы': 'О нас',
      'Байланыс': 'Контакты',
      'Профиль': 'Профиль',
      'Кіру': 'Войти',
      'Тіркелу': 'Регистрация',
      'Шығу': 'Выход',
      'Тіл': 'Язык'
    },
    'kk': {
      'Главная': 'Басты бет',
      'Курсы': 'Курстар',
      'О нас': 'Біз туралы',
      'Контакты': 'Байланыс',
      'Профиль': 'Профиль',
      'Войти': 'Кіру',
      'Регистрация': 'Тіркелу',
      'Выход': 'Шығу',
      'Язык': 'Тіл'
    }
  };
  
  try {
    // Переводим элементы заголовка
    const headerElements = document.querySelectorAll('.header-line a, .header-text, .header-link');
    headerElements.forEach(element => {
      const text = element.textContent.trim();
      if (headerTranslations[lang] && headerTranslations[lang][text]) {
        element.textContent = headerTranslations[lang][text];
      }
    });
  } catch (error) {
    console.error('Ошибка при переводе заголовка:', error);
  }
}

/**
 * Переводит элементы футера
 */
function translateFooter(lang) {
  console.log('Перевод элементов футера');
  
  const footerTranslations = {
    'ru': {
      'Байланыс ақпараты': 'Контактная информация',
      'Біздің мекен-жай': 'Наш адрес',
      'Телефон': 'Телефон',
      'Электронды пошта': 'Электронная почта',
      'Барлық құқықтар қорғалған': 'Все права защищены'
    },
    'kk': {
      'Контактная информация': 'Байланыс ақпараты',
      'Наш адрес': 'Біздің мекен-жай',
      'Телефон': 'Телефон',
      'Электронная почта': 'Электронды пошта',
      'Все права защищены': 'Барлық құқықтар қорғалған'
    }
  };
  
  try {
    // Переводим элементы футера
    const footerElements = document.querySelectorAll('.footer p, .footer span, .contact-footer');
    footerElements.forEach(element => {
      const text = element.textContent.trim();
      if (footerTranslations[lang] && footerTranslations[lang][text]) {
        element.textContent = footerTranslations[lang][text];
      }
    });
  } catch (error) {
    console.error('Ошибка при переводе футера:', error);
  }
}

/**
 * Переводит тексты на кнопках
 */
function translateButtons(lang) {
  console.log('Перевод текстов на кнопках');
  
  const buttonTranslations = {
    'ru': {
      'Аяқталды': 'Завершено',
      'Сабақ аяқталды': 'Урок завершен',
      'Сабақ аяқталды деп белгілеу': 'Отметить урок как завершенный',
      'Тексеру': 'Проверить',
      'Көрсету': 'Показать',
      'Жасыру': 'Скрыть',
      'Сақтау': 'Сохранить',
      'Жүктеу': 'Загрузить',
      'Жіберу': 'Отправить',
      'Орындау': 'Выполнить',
      'Кері': 'Назад',
      'Келесі': 'Далее',
      'Бастау': 'Начать',
      'Аяқтау': 'Завершить'
    },
    'kk': {
      'Завершено': 'Аяқталды',
      'Урок завершен': 'Сабақ аяқталды',
      'Отметить урок как завершенный': 'Сабақ аяқталды деп белгілеу',
      'Проверить': 'Тексеру',
      'Показать': 'Көрсету',
      'Скрыть': 'Жасыру',
      'Сохранить': 'Сақтау',
      'Загрузить': 'Жүктеу',
      'Отправить': 'Жіберу',
      'Выполнить': 'Орындау',
      'Назад': 'Кері',
      'Далее': 'Келесі',
      'Начать': 'Бастау',
      'Завершить': 'Аяқтау'
    }
  };
  
  try {
    // Переводим тексты на кнопках
    const buttons = document.querySelectorAll('button, .btn, .btn-log, .btn-profile, .btn-logout, .btn-submit, .btn-next, .btn-back, .complete-btn');
    buttons.forEach(button => {
      const text = button.textContent.trim();
      if (buttonTranslations[lang] && buttonTranslations[lang][text]) {
        button.textContent = buttonTranslations[lang][text];
      }
    });
  } catch (error) {
    console.error('Ошибка при переводе кнопок:', error);
  }
}
