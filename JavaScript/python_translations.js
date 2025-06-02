/**
 * Файл с переводами для курса Python
 */

// Словарь с переводами
const pythonTranslations = {
  'kk': {
    // Общие переводы
    'main': 'Басты',
    'courses': 'Курстар',
    'contacts': 'Байланыс',
    'login': 'Кіру',
    'profile': 'Профиль',
    'copyright': '© 2025 EduPlatform',
    'select_lesson': 'Сабақ таңдаңыз',
    'select_lesson_desc': 'Оқуды бастау үшін сол жақтағы тізімнен сабақты таңдаңыз.',
    'week': 'апта',
    'lesson_completed': 'Сабақ сәтті аяқталды!',
    'complete_all_tasks': 'Сабақты аяқтау үшін барлық тапсырмаларды орындаңыз!',
    'complete_lesson': 'Сабақты аяқтау',
    
    // Переводы для тестов и заданий
    'quiz_title': 'Тест',
    'practice_title': 'Практикалық тапсырма',
    'check': 'Тексеру',
    'test_passed': 'Тест сәтті өтті!',
    'test_failed': 'Қате жауаптар бар! Қайталап көріңіз.',
    'answer_here': 'Жауабыңызды осы жерге енгізіңіз...',
    
    // Переводы для заголовков уроков
    'lesson1_title': 'Python кіріспе',
    'lesson2_title': 'Айнымалылар мен деректер түрлері',
    'lesson3_title': 'Операторлар мен өрнектер',
    'lesson4_title': 'Шартты операторлар',
    'lesson5_title': 'Тізімдер мен кортеждер',
    'lesson6_title': 'Циклдер',
    'lesson7_title': 'Функциялар',
    'lesson8_title': 'Сөздіктер мен жиындар',
    'lesson9_title': 'Қорытынды жоба'
  },
  'ru': {
    // Общие переводы
    'main': 'Главная',
    'courses': 'Курсы',
    'contacts': 'Контакты',
    'login': 'Вход',
    'profile': 'Профиль',
    'copyright': '© 2025 EduPlatform',
    'select_lesson': 'Выберите урок',
    'select_lesson_desc': 'Выберите урок из списка слева, чтобы начать обучение.',
    'week': 'неделя',
    'lesson_completed': 'Урок успешно завершен!',
    'complete_all_tasks': 'Для завершения урока выполните все задания!',
    'complete_lesson': 'Завершить урок',
    
    // Переводы для тестов и заданий
    'quiz_title': 'Тест',
    'practice_title': 'Практическое задание',
    'check': 'Проверить',
    'test_passed': 'Тест успешно пройден!',
    'test_failed': 'Есть неправильные ответы! Попробуйте еще раз.',
    'answer_here': 'Введите ваш ответ здесь...',
    
    // Переводы для заголовков уроков
    'lesson1_title': 'Введение в Python',
    'lesson2_title': 'Переменные и типы данных',
    'lesson3_title': 'Операторы и выражения',
    'lesson4_title': 'Условные операторы',
    'lesson5_title': 'Списки и кортежи',
    'lesson6_title': 'Циклы',
    'lesson7_title': 'Функции',
    'lesson8_title': 'Словари и множества',
    'lesson9_title': 'Итоговый проект'
  }
};

// Функция для применения переводов
function applyPythonTranslations(lang) {
  console.log(`Применение переводов Python для языка: ${lang}`);
  
  // Если язык не передан или не поддерживается, используем казахский
  if (!lang || !pythonTranslations[lang]) {
    lang = 'kk';
  }
  
  // Получаем переводы для указанного языка
  const translations = pythonTranslations[lang];
  
  // Применяем переводы для элементов с атрибутом data-lang-key
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
  
  // Применяем переводы для заголовков уроков
  document.querySelectorAll('.lesson-list li').forEach((item, index) => {
    const lessonNum = index + 1;
    const key = `lesson${lessonNum}_title`;
    if (translations[key]) {
      // Сохраняем иконку если она есть
      const icon = item.querySelector('i');
      const iconHTML = icon ? icon.outerHTML : '';
      
      // Заменяем содержимое элемента
      item.innerHTML = `${iconHTML} ${translations[key]}`;
    }
  });
  
  console.log('Переводы Python применены');
}

// Экспортируем функцию для использования в других файлах
window.applyPythonTranslations = applyPythonTranslations;
