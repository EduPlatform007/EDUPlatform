/**
 * Система завершения уроков с проверкой выполнения заданий
 * Этот скрипт заменяет стандартную функцию completeLesson
 */

// Уроки с практическими заданиями
const practicalLessons = [1, 3, 5, 6];

// Уроки с тестами
const quizLessons = [3, 6, 7, 8, 9];

// Минимальный процент выполнения для прохождения теста
const minPassPercentage = 75;


function showMessage(type, message) {
    const resultMessage = document.getElementById('result-message');
    if (!resultMessage) return;
    
    const colorClasses = {
        'success': 'success-message',
        'warning': 'warning-message',
        'error': 'error-message'
    };
    
    resultMessage.innerHTML = `<div class="${colorClasses[type] || 'info-message'}">${message}</div>`;
    
    // Скрываем сообщение через 5 секунд
    setTimeout(() => {
        resultMessage.innerHTML = '';
    }, 5000);
}

/**
 * Отмечает урок как завершенный с проверкой выполнения заданий
 * @param {number} lessonNum - Номер урока
 */
function completeLessonWithCheck(lessonNum) {
    console.log(`Проверка выполнения заданий для урока ${lessonNum}`);
    
    // Проверяем выполнение практического задания, если урок с практикой
    if (practicalLessons.includes(lessonNum)) {
        if (!checkPracticeCompletion(lessonNum)) {
            return; // Не завершаем урок, если практика не выполнена
        }
    }
    
    // Проверяем выполнение теста, если урок с тестом
    if (quizLessons.includes(lessonNum)) {
        if (!checkQuizCompletion(lessonNum)) {
            return; // Не завершаем урок, если тест не выполнен
        }
    }
    
    // Если проверки пройдены успешно, отмечаем урок как завершенный
    completeLesson(lessonNum);
    
    // Показываем сообщение об успешном завершении
    const message = isRussian ? 
                  'Урок успешно завершен! Все задания выполнены.' : 
                  'Сабақ сәтті аяқталды! Барлық тапсырмалар орындалды.';
    
    showMessage('success', message);
}

// При загрузке документа заменяем стандартную функцию завершения урока
document.addEventListener('DOMContentLoaded', function() {
    // Запоминаем оригинальную функцию completeLesson
    if (typeof window.completeLesson === 'function') {
        window.originalCompleteLesson = window.completeLesson;
    }
    
    // Заменяем функцию completeLesson на нашу улучшенную версию
    window.completeLesson = completeLessonWithCheck;
    console.log('Функция завершения урока с проверкой активирована');
    
    // Добавляем стили для сообщений
    const style = document.createElement('style');
    style.textContent = `
        .success-message { background-color: #dff0d8; color: #3c763d; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .warning-message { background-color: #fcf8e3; color: #8a6d3b; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .error-message { background-color: #f2dede; color: #a94442; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .info-message { background-color: #d9edf7; color: #31708f; padding: 15px; border-radius: 8px; margin: 15px 0; }
    `;
    document.head.appendChild(style);
});
