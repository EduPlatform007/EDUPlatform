/**
 * Улучшенная система переводов для образовательной платформы
 * 
 * ВАЖНОЕ ИЗМЕНЕНИЕ: Теперь перевод осуществляется только для интерфейса (заголовки, футер, кнопки),
 * но не для контента уроков и домашних заданий. Контент будет доступен в отдельных версиях курсов для разных языков.
 */

// Флаг для отслеживания применения переводов
window._translationsApplied = false;

document.addEventListener('DOMContentLoaded', function() {
  console.log('Инициализация улучшенной системы переводов (только интерфейс)');
  
  // Проверяем текущий язык
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const currentLang = userData.language || localStorage.getItem('language') || 'kk';
  
  // Запускаем улучшенные переводы через короткую паузу
  setTimeout(() => {
    // Предотвращаем повторное применение переводов
    if (!window._translationsApplied) {
      applyImprovedTranslations(currentLang);
      window._translationsApplied = true;
    }
  }, 800);
  
  // Добавляем обработчики переключения языка
  setupLanguageSwitchers();
});

/**
 * Настройка переключателей языка
 */
function setupLanguageSwitchers() {
  console.log('Настройка переключателей языка');
  
  // Находим все селекторы языка
  const languageSelectors = document.querySelectorAll('select[name="language"]');
  
  // Получаем текущий язык из localStorage
  const currentLang = localStorage.getItem('language') || 'kk';
  
  languageSelectors.forEach(selector => {
    // Устанавливаем значение селектора в соответствии с текущим языком
    if (currentLang === 'ru') {
      selector.value = 'Русский';
    } else {
      selector.value = 'Қазақша';
    }
    
    // Добавляем обработчик события изменения языка
    selector.addEventListener('change', function() {
      const selectedOption = this.value;
      let newLang = 'kk';
      
      if (selectedOption === 'Русский') {
        newLang = 'ru';
      }
      
      console.log('Изменение языка на:', newLang);
      
      // Сохраняем выбранный язык
      localStorage.setItem('language', newLang);
      
      // Если есть текущий пользователь, обновляем его настройки
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      if (currentUser && currentUser.uid) {
        currentUser.language = newLang;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
      
      // Применяем новые переводы
      window._translationsApplied = false;
      applyImprovedTranslations(newLang);
      
      // Обновляем видео, если функция доступна
      if (typeof updateVideos === 'function') {
        setTimeout(() => updateVideos(), 200);
      }
    });
  });
}

/**
 * Основная функция для применения улучшенных переводов
 */
function applyImprovedTranslations(lang) {
  console.log('Применение улучшенных переводов для языка:', lang);
  
  try {
    // Определяем тип курса из URL
    let courseType = 'html';
    if (window.location.pathname.includes('python_course')) {
      courseType = 'python';
    } else if (window.location.pathname.includes('database_course')) {
      courseType = 'database';
    }
    
    // Блокируем другие скрипты перевода
    window._isTranslating = true;
    window._isEnforcingTranslation = true;
    
    // Выполняем переводы только для интерфейса
    improveHeaderFooterTranslations(lang);
    improveButtonsTranslations(lang);
    
    // Переводим базовые элементы сайдбара, но не содержимое уроков
    translateSidebarBaseElements(lang);
    
    // Если выбран русский язык, обрабатываем домашние задания особым образом
    if (lang === 'ru') {
      preventHomeworkTranslation();
    }
    
    // Разблокируем другие скрипты перевода
    setTimeout(() => {
      window._isTranslating = false;
      window._isEnforcingTranslation = false;
    }, 200);
  } catch (error) {
    console.error('Ошибка при применении улучшенных переводов:', error);
    window._isTranslating = false;
    window._isEnforcingTranslation = false;
  }
}

/**
 * Функция, полностью предотвращающая перевод домашних заданий
 */
function preventHomeworkTranslation() {
  console.log('Предотвращение перевода домашних заданий');
  
  try {
    // Отмечаем все блоки домашних заданий специальным атрибутом
    const homeworkSections = document.querySelectorAll('#homework-section, .homework-section, .homework-content, .homework-item');
    homeworkSections.forEach(section => {
      section.setAttribute('data-no-translate', 'true');
      
      // Также обрабатываем все дочерние элементы
      const homeworkContent = section.querySelectorAll('p, h3, h4, h5, li, span, div, code, pre, label, button');
      homeworkContent.forEach(element => {
        element.setAttribute('data-no-translate', 'true');
      });
    });
    
    // Дополнительно работаем с заголовками домашних заданий
    const homeworkTitles = document.querySelectorAll('.homework-header h3, .homework-toggle, .hw-subtitle, .homework-title');
    homeworkTitles.forEach(element => {
      element.setAttribute('data-no-translate', 'true');
      // Не переводим заголовки домашних заданий на русский
      if (element.textContent.includes('Домашнее задание')) {
        element.textContent = 'Үй тапсырмасы';
      }
      if (element.textContent.includes('Показать задание')) {
        element.textContent = 'Тапсырманы көрсету';
      }
      if (element.textContent.includes('Выполните следующие задания')) {
        element.textContent = 'Келесі тапсырмаларды орындаңыз';
      }
    });
    
    // Работаем с кнопками домашних заданий
    const homeworkButtons = document.querySelectorAll('.homework-toggle, .btn-submit:not(.complete-btn)');
    homeworkButtons.forEach(button => {
      button.setAttribute('data-no-translate', 'true');
      if (button.textContent.includes('Показать') || button.textContent.includes('Скрыть')) {
        button.textContent = button.classList.contains('collapsed') ? 'Тапсырманы көрсету' : 'Жасыру';
      }
      if (button.textContent.includes('Проверить') || button.textContent.includes('Отправить')) {
        button.textContent = 'Тексеру';
      }
    });
    
    // Добавляем стиль, который предотвращает автоматический перевод браузером
    const style = document.createElement('style');
    style.textContent = `
      [data-no-translate="true"] {
        translate: no;
        -webkit-translate: no;
        -moz-translate: no;
        -ms-translate: no;
      }
    `;
    document.head.appendChild(style);
    
    console.log('Предотвращение перевода домашних заданий завершено');
  } catch (error) {
    console.error('Ошибка при предотвращении перевода домашних заданий:', error);
  }
}

/**
 * Перевод только базовых элементов сайдбара
 */
function translateSidebarBaseElements(lang) {
  console.log('Перевод базовых элементов сайдбара');
  
  try {
    // Переводим заголовок сайдбара
    const sidebarTitle = document.querySelector('.sidebar h2');
    if (sidebarTitle) {
      sidebarTitle.textContent = lang === 'ru' ? 'Уроки' : 'Сабақтар';
    }
    
    // Переводим надписи недель
    document.querySelectorAll('.week-btn').forEach(element => {
      const weekText = element.textContent;
      if (weekText.includes('апта') || weekText.includes('неделя')) {
        const match = weekText.match(/\d+/);
        if (match) {
          const weekNum = match[0];
          const locked = weekText.includes('🔒') ? '🔒' : '';
          element.textContent = lang === 'ru' ? `${weekNum} неделя${locked}` : `${weekNum} апта${locked}`;
        }
      }
    });
    
    console.log('Перевод базовых элементов сайдбара завершен');
  } catch (error) {
    console.error('Ошибка при переводе базовых элементов сайдбара:', error);
  }
}

/**
 * Улучшенные переводы заголовка и футера
 */
function improveHeaderFooterTranslations(lang) {
  console.log('Применение улучшенных переводов заголовка и футера');
  
  const headerFooterTranslations = {
    'ru': {
      'Басты бет': 'Главная',
      'Басты': 'Главная',
      'Курстар': 'Курсы',
      'Біз туралы': 'О нас',
      'Байланыс': 'Контакты',
      'Профиль': 'Профиль',
      'Кіру': 'Войти',
      'Тіркелу': 'Регистрация',
      'Шығу': 'Выход',
      'Тіл': 'Язык',
      'Байланыс ақпараты': 'Контактная информация',
      'Біздің мекен-жай': 'Наш адрес',
      'Телефон': 'Телефон',
      'Электронды пошта': 'Электронная почта',
      'Барлық құқықтар қорғалған': 'Все права защищены',
      'Сабақтар': 'Уроки',
      'Сабақ таңдаңыз': 'Выберите урок',
      'Сол жақтан сабақ таңдап, оқуды бастай аласыз.': 'Выберите урок слева, чтобы начать обучение.'
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
      'Язык': 'Тіл',
      'Контактная информация': 'Байланыс ақпараты',
      'Наш адрес': 'Біздің мекен-жай',
      'Телефон': 'Телефон',
      'Электронная почта': 'Электронды пошта',
      'Все права защищены': 'Барлық құқықтар қорғалған',
      'Уроки': 'Сабақтар',
      'Выберите урок': 'Сабақ таңдаңыз',
      'Выберите урок слева, чтобы начать обучение.': 'Сол жақтан сабақ таңдап, оқуды бастай аласыз.'
    }
  };
  
  try {
    // Переводим элементы заголовка
    const headerElements = document.querySelectorAll('.header-line a, .header-line span, .header-text');
    headerElements.forEach(element => {
      const originalText = element.textContent.trim();
      if (headerFooterTranslations[lang] && headerFooterTranslations[lang][originalText]) {
        element.textContent = headerFooterTranslations[lang][originalText];
      }
    });
    
    // Переводим элементы футера
    const footerElements = document.querySelectorAll('.footer p, .footer a, .footer span, .contact-footer');
    footerElements.forEach(element => {
      const originalText = element.textContent.trim();
      if (headerFooterTranslations[lang] && headerFooterTranslations[lang][originalText]) {
        element.textContent = headerFooterTranslations[lang][originalText];
      }
    });
    
    // Переводим пустые сообщения
    const emptyMessage = document.querySelector('.empty-lesson h2');
    if (emptyMessage) {
      const originalText = emptyMessage.textContent.trim();
      if (headerFooterTranslations[lang] && headerFooterTranslations[lang][originalText]) {
        emptyMessage.textContent = headerFooterTranslations[lang][originalText];
      }
    }
    
    const emptyDescription = document.querySelector('.empty-lesson p');
    if (emptyDescription) {
      const originalText = emptyDescription.textContent.trim();
      if (headerFooterTranslations[lang] && headerFooterTranslations[lang][originalText]) {
        emptyDescription.textContent = headerFooterTranslations[lang][originalText];
      }
    }
    
    console.log('Улучшенный перевод заголовка и футера завершен');
  } catch (error) {
    console.error('Ошибка при улучшенном переводе заголовка и футера:', error);
  }
}

/**
 * Улучшенные переводы кнопок
 */
function improveButtonsTranslations(lang) {
  console.log('Применение улучшенных переводов кнопок');
  
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
      'Аяқтау': 'Завершить',
      'Бас тарту': 'Отменить',
      'Қабылдау': 'Принять',
      'Құрылды': 'Создано',
      'Жаңарту': 'Обновить',
      'Төмен қарау': 'Смотреть ниже',
      'Апта': 'Неделя',
      'апта': 'неделя'
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
      'Завершить': 'Аяқтау',
      'Отменить': 'Бас тарту',
      'Принять': 'Қабылдау',
      'Создано': 'Құрылды',
      'Обновить': 'Жаңарту',
      'Смотреть ниже': 'Төмен қарау',
      'Неделя': 'Апта',
      'неделя': 'апта'
    }
  };
  
  try {
    // Переводим кнопки
    const buttons = document.querySelectorAll('button, .btn, .btn-log, .btn-profile, .btn-logout, .btn-submit:not([data-no-translate="true"])');
    buttons.forEach(button => {
      if (!button.textContent.trim()) return;
      
      const originalText = button.textContent.trim();
      if (buttonTranslations[lang] && buttonTranslations[lang][originalText]) {
        button.textContent = buttonTranslations[lang][originalText];
      }
    });
    
    console.log('Улучшенный перевод кнопок завершен');
  } catch (error) {
    console.error('Ошибка при улучшенном переводе кнопок:', error);
  }
} 