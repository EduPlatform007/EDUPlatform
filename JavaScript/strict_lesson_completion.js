/**
 * Строгая система завершения уроков
 * Полностью заменяет стандартную систему и блокирует завершение
 * до правильного выполнения заданий
 */

// Глобальные настройки
const SETTINGS = {
  // Уроки с практическими заданиями (указать точные номера)
  PRACTICAL_LESSONS: [1, 3, 5, 6],
  
  // Уроки с тестами (указать точные номера)
  QUIZ_LESSONS: [3, 6, 7, 8, 9],
  
  // Процент правильных ответов для прохождения теста
  MIN_QUIZ_SCORE: 75,
  
  // Процент проверки элементов в коде для практических заданий
  MIN_CODE_COMPLETENESS: 70
};

// Состояние завершения для текущего урока
let lessonCompletionState = {
  quizCompleted: false,
  practiceCompleted: false
};

/**
 * Заблокировать стандартную функцию и перехватить события клика
 */
function blockDefaultCompletion() {
  console.log('⚠️ Блокировка стандартного завершения уроков...');
  
  // Перехватываем и переопределяем стандартную функцию
  if (typeof window.completeLesson === 'function') {
    console.log('Найдена оригинальная функция завершения - переопределяем');
    window.originalCompleteLesson = window.completeLesson;
    window.completeLesson = strictCompleteLesson;
  }

  // Перехватываем все события клика на кнопках завершения урока
  document.addEventListener('click', function(event) {
    // Проверяем, является ли элемент кнопкой завершения
    if (event.target.matches('.complete-btn') || 
        (event.target.hasAttribute('onclick') && 
         event.target.getAttribute('onclick').includes('completeLesson'))) {
      
      // Получаем номер текущего урока
      const lessonMatch = event.target.getAttribute('onclick')?.match(/completeLesson\((\d+)\)/);
      
      if (lessonMatch && lessonMatch[1]) {
        // Отменяем стандартное поведение
        event.preventDefault();
        event.stopPropagation();
        
        // Вызываем нашу строгую функцию
        strictCompleteLesson(parseInt(lessonMatch[1]));
        
        return false;
      }
    }
  }, true);
  
  console.log('✅ Блокировка стандартного завершения успешно установлена');
}

/**
 * Строгая функция завершения урока с обязательной проверкой
 * @param {number} lessonNum - Номер урока
 */
function strictCompleteLesson(lessonNum) {
  console.log(`🔍 Строгая проверка для урока ${lessonNum}`);
  
  // Определяем язык интерфейса
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const isRussian = (userData.language === 'ru');
  
  // Проверяем есть ли для этого урока практика или тест
  const hasPractice = SETTINGS.PRACTICAL_LESSONS.includes(parseInt(lessonNum));
  const hasQuiz = SETTINGS.QUIZ_LESSONS.includes(parseInt(lessonNum));
  
  // Сбрасываем состояние
  lessonCompletionState = {
    quizCompleted: !hasQuiz, // Если нет теста, считаем его завершенным
    practiceCompleted: !hasPractice // Если нет практики, считаем её завершенной
  };
  
  // Если урок не содержит ни теста, ни практики - просто завершаем его
  if (!hasPractice && !hasQuiz) {
    actuallyCompleteLesson(lessonNum);
    return;
  }
  
  // Проверяем тест, если он есть
  if (hasQuiz) {
    const quizResult = strictCheckQuiz(lessonNum);
    lessonCompletionState.quizCompleted = quizResult.passed;
    
    if (!quizResult.passed) {
      displayMessage(
        'error',
        isRussian ? 
          `Тест не пройден! ${quizResult.message}` : 
          `Тест өтпеді! ${quizResult.message}`
      );
      // Не завершаем урок, если тест не пройден
      return;
    }
  }
  
  // Проверяем практическое задание, если оно есть
  if (hasPractice) {
    const practiceResult = strictCheckPractice(lessonNum);
    lessonCompletionState.practiceCompleted = practiceResult.passed;
    
    if (!practiceResult.passed) {
      displayMessage(
        'error',
        isRussian ? 
          `Практическое задание не выполнено! ${practiceResult.message}` : 
          `Практикалық тапсырма орындалмады! ${practiceResult.message}`
      );
      // Не завершаем урок, если практика не выполнена
      return;
    }
  }
  
  // Если все проверки пройдены, завершаем урок
  if (lessonCompletionState.quizCompleted && lessonCompletionState.practiceCompleted) {
    displayMessage(
      'success',
      isRussian ? 
        'Все задания успешно выполнены! Урок завершен.' : 
        'Барлық тапсырмалар сәтті орындалды! Сабақ аяқталды.'
    );
    
    actuallyCompleteLesson(lessonNum);
  }
}

/**
 * Строгая проверка ответов на тест
 * @param {number} lessonNum - Номер урока
 * @returns {Object} Результат проверки {passed: boolean, message: string, score: number}
 */
function strictCheckQuiz(lessonNum) {
  try {
    // Проверяем доступность ответов для теста
    if (typeof window.testAnswers === 'undefined' || !window.testAnswers[lessonNum]) {
      console.error(`Ответы для теста ${lessonNum} не найдены`);
      return { 
        passed: false, 
        message: 'Не удалось найти ответы для проверки теста.', 
        score: 0 
      };
    }
    
    const answers = window.testAnswers[lessonNum];
    let correctAnswers = 0;
    let answeredQuestions = 0;
    const totalQuestions = Object.keys(answers).length;
    
    // Если нет вопросов, считаем тест пройденным
    if (totalQuestions === 0) {
      return { 
        passed: true, 
        message: 'Нет вопросов для проверки.', 
        score: 100 
      };
    }
    
    // Проверяем каждый ответ
    for (const question in answers) {
      const correctAnswer = answers[question];
      const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
      
      if (selectedOption) {
        answeredQuestions++;
        if (selectedOption.value === correctAnswer) {
          correctAnswers++;
        }
      }
    }
    
    // Вычисляем процент правильных ответов
    const answeredPercentage = (answeredQuestions / totalQuestions) * 100;
    const correctPercentage = (correctAnswers / totalQuestions) * 100;
    
    // Проверяем, что ответы даны хотя бы на минимальный процент вопросов
    if (answeredPercentage < SETTINGS.MIN_QUIZ_SCORE) {
      return { 
        passed: false, 
        message: `Вы ответили только на ${Math.round(answeredPercentage)}% вопросов. Требуется ответить минимум на ${SETTINGS.MIN_QUIZ_SCORE}% вопросов.`, 
        score: correctPercentage 
      };
    }
    
    // Проверяем, что правильных ответов достаточно
    if (correctPercentage < SETTINGS.MIN_QUIZ_SCORE) {
      return { 
        passed: false, 
        message: `Вы дали только ${Math.round(correctPercentage)}% правильных ответов. Требуется минимум ${SETTINGS.MIN_QUIZ_SCORE}% правильных ответов.`, 
        score: correctPercentage 
      };
    }
    
    return { 
      passed: true, 
      message: `Тест пройден успешно! Правильных ответов: ${Math.round(correctPercentage)}%`, 
      score: correctPercentage 
    };
  } catch (error) {
    console.error('Ошибка при проверке теста:', error);
    return { 
      passed: false, 
      message: 'Произошла ошибка при проверке теста.', 
      score: 0 
    };
  }
}

/**
 * Строгая проверка практического задания
 * @param {number} lessonNum - Номер урока
 * @returns {Object} Результат проверки {passed: boolean, message: string, completeness: number}
 */
function strictCheckPractice(lessonNum) {
  try {
    // Получаем данные
    const codeTextarea = document.getElementById(`code-${lessonNum}`);
    
    if (!codeTextarea) {
      console.error(`Элемент code-${lessonNum} не найден`);
      return { 
        passed: false, 
        message: 'Не удалось найти поле для практического задания.', 
        completeness: 0 
      };
    }
    
    const userCode = codeTextarea.value.trim();
    
    // Проверяем, не является ли код пустым
    if (!userCode) {
      return { 
        passed: false, 
        message: 'Поле для кода пустое. Напишите код для выполнения задания.', 
        completeness: 0 
      };
    }
    
    // Проверяем, не является ли код просто шаблоном
    if (typeof window.getPracticeTemplate === 'function') {
      const template = window.getPracticeTemplate(lessonNum);
      if (userCode === template) {
        return { 
          passed: false, 
          message: 'Вы не изменили базовый шаблон. Требуется выполнить задание.', 
          completeness: 10 
        };
      }
    }
    
    // Проверяем наличие необходимых элементов в коде
    let completeness = 100; // По умолчанию считаем задание выполненным
    
    if (typeof window.requiredCodeElements !== 'undefined' && 
        window.requiredCodeElements[lessonNum]) {
      
      const requirements = window.requiredCodeElements[lessonNum];
      const requiredElements = requirements.required || [];
      let presentElements = 0;
      
      // Проверяем каждый обязательный элемент
      for (const element of requiredElements) {
        if (userCode.toLowerCase().includes(element.toLowerCase())) {
          presentElements++;
        }
      }
      
      // Вычисляем процент выполнения
      if (requiredElements.length > 0) {
        completeness = (presentElements / requiredElements.length) * 100;
      }
      
      // Проверяем, что достаточно элементов присутствует
      if (completeness < SETTINGS.MIN_CODE_COMPLETENESS) {
        return { 
          passed: false, 
          message: `Код содержит только ${Math.round(completeness)}% необходимых элементов. Требуется минимум ${SETTINGS.MIN_CODE_COMPLETENESS}%.`, 
          completeness: completeness 
        };
      }
    }
    
    return { 
      passed: true, 
      message: 'Практическое задание выполнено успешно!', 
      completeness: completeness 
    };
  } catch (error) {
    console.error('Ошибка при проверке практического задания:', error);
    return { 
      passed: false, 
      message: 'Произошла ошибка при проверке практического задания.', 
      completeness: 0 
    };
  }
}

/**
 * Реальное завершение урока (вызывается только если все проверки пройдены)
 * @param {number} lessonNum - Номер урока
 */
function actuallyCompleteLesson(lessonNum) {
  try {
    console.log(`✅ Урок ${lessonNum} успешно прошел все проверки, завершаем...`);
    
    // Пытаемся вызвать оригинальную функцию
    if (typeof window.originalCompleteLesson === 'function') {
      window.originalCompleteLesson(lessonNum);
      return;
    }
    
    // Если оригинальной функции нет, используем базовую реализацию
    const courseType = 'html_kz'; // Тип курса (можно получить динамически)
    const storageKey = courseType + 'CompletedLessons';
    const completedLessons = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    // Добавляем урок в список завершенных
    if (!completedLessons.includes(parseInt(lessonNum))) {
      completedLessons.push(parseInt(lessonNum));
      localStorage.setItem(storageKey, JSON.stringify(completedLessons));
    }
    
    // Добавляем галочку завершения
    const activeLesson = document.querySelector('.lesson-link.active');
    if (activeLesson) {
      const lessonItem = activeLesson.closest('.lesson-item');
      if (lessonItem && !lessonItem.querySelector('.lesson-completed')) {
        const checkmark = document.createElement('span');
        checkmark.className = 'lesson-completed';
        checkmark.innerHTML = '✓';
        lessonItem.appendChild(checkmark);
      }
    }
    
    console.log(`✅ Урок ${lessonNum} успешно завершен и сохранен`);
  } catch (error) {
    console.error('Ошибка при завершении урока:', error);
    alert('Произошла ошибка при завершении урока. Попробуйте перезагрузить страницу.');
  }
}

/**
 * Отображает сообщение пользователю
 * @param {string} type - Тип сообщения ('success', 'warning', 'error')
 * @param {string} message - Текст сообщения
 */
function displayMessage(type, message) {
  // Создаем или находим контейнер для сообщений
  let messageContainer = document.getElementById('completion-message-container');
  
  if (!messageContainer) {
    messageContainer = document.createElement('div');
    messageContainer.id = 'completion-message-container';
    messageContainer.style.position = 'fixed';
    messageContainer.style.top = '20px';
    messageContainer.style.right = '20px';
    messageContainer.style.maxWidth = '400px';
    messageContainer.style.zIndex = '9999';
    document.body.appendChild(messageContainer);
  }
  
  // Создаем сообщение
  const messageElement = document.createElement('div');
  messageElement.className = `message-box ${type}-message`;
  messageElement.style.padding = '15px';
  messageElement.style.marginBottom = '10px';
  messageElement.style.borderRadius = '5px';
  messageElement.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  messageElement.style.transition = 'all 0.3s ease';
  
  // Устанавливаем цвет в зависимости от типа
  switch (type) {
    case 'success':
      messageElement.style.backgroundColor = '#dff0d8';
      messageElement.style.color = '#3c763d';
      messageElement.style.borderLeft = '5px solid #3c763d';
      break;
    case 'warning':
      messageElement.style.backgroundColor = '#fcf8e3';
      messageElement.style.color = '#8a6d3b';
      messageElement.style.borderLeft = '5px solid #8a6d3b';
      break;
    case 'error':
      messageElement.style.backgroundColor = '#f2dede';
      messageElement.style.color = '#a94442';
      messageElement.style.borderLeft = '5px solid #a94442';
      break;
    default:
      messageElement.style.backgroundColor = '#d9edf7';
      messageElement.style.color = '#31708f';
      messageElement.style.borderLeft = '5px solid #31708f';
  }
  
  // Добавляем иконку и сообщение
  const icon = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : '❌';
  messageElement.innerHTML = `<div>${icon} ${message}</div>`;
  
  // Добавляем кнопку закрытия
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '×';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px';
  closeButton.style.right = '5px';
  closeButton.style.background = 'none';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '20px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.color = 'inherit';
  closeButton.style.opacity = '0.5';
  closeButton.addEventListener('mouseover', () => { closeButton.style.opacity = '1'; });
  closeButton.addEventListener('mouseout', () => { closeButton.style.opacity = '0.5'; });
  closeButton.addEventListener('click', () => { messageContainer.removeChild(messageElement); });
  
  messageElement.appendChild(closeButton);
  messageContainer.appendChild(messageElement);
  
  // Автоматически удаляем сообщение через 10 секунд
  setTimeout(() => {
    if (messageContainer.contains(messageElement)) {
      messageContainer.removeChild(messageElement);
    }
  }, 10000);
}

// Добавляем стили
function addStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .success-message { background-color: #dff0d8; color: #3c763d; border-left: 5px solid #3c763d; }
    .warning-message { background-color: #fcf8e3; color: #8a6d3b; border-left: 5px solid #8a6d3b; }
    .error-message { background-color: #f2dede; color: #a94442; border-left: 5px solid #a94442; }
    .info-message { background-color: #d9edf7; color: #31708f; border-left: 5px solid #31708f; }
    
    .message-box {
      position: relative;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      animation: slideIn 0.5s forwards;
    }
    
    @keyframes slideIn {
      0% { transform: translateX(100%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  // Добавляем стили
  addStyles();
  
  // Блокируем стандартное завершение и устанавливаем перехватчики
  setTimeout(blockDefaultCompletion, 1000);
  
  console.log('🔒 Строгая система проверки уроков активирована');
});
