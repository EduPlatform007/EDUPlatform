/**
 * ОКОНЧАТЕЛЬНОЕ ИСПРАВЛЕНИЕ ОБРАЗОВАТЕЛЬНОЙ ПЛАТФОРМЫ
 * Автор: Cascade AI
 * Дата: 2025-05-20
 * 
 * Этот файл содержит все необходимые исправления для:
 * - Выравнивания текста в сайдбаре
 * - Работы системы проверки тестов
 * - Замены кнопки "код іске қосу" на проверку кода
 * - Ограничения завершения урока до выполнения всех заданий
 */

// Предотвращаем повторную инициализацию
if (window.eduPlatformFixed) {
    console.log("Фикс уже применен");
} else {
    window.eduPlatformFixed = true;
    
    console.log("⚡ EduPlatform Fix: Запуск исправлений");
    
    // Основные исправления запускаем после полной загрузки DOM
    document.addEventListener('DOMContentLoaded', function() {
        // Перехватываем все другие обработчики
        setTimeout(function() {
            initFixes();
        }, 100);
    });
    
    // Повторяем инициализацию через 1 секунду для случаев, когда DOM может меняться динамически
    setTimeout(function() {
        initFixes();
    }, 1000);
    
    // Сохраняем оригинальные функции, которые могут использоваться в других скриптах
    if (typeof window.completeLesson === 'function') {
        window.originalCompleteLesson = window.completeLesson;
    }
}

/**
 * Инициализирует все исправления
 */
function initFixes() {
    console.log("⚡ EduPlatform Fix: Инициализация исправлений");
    
    // 1. Применяем стили
    applyFixStyles();
    
    // 2. Исправляем сайдбар
    fixSidebar();
    
    // 3. Исправляем тесты
    fixTests();
    
    // 4. Исправляем практические задания
    fixPractice();
    
    // 5. Исправляем кнопку завершения урока
    fixLessonCompletion();
    
    console.log("⚡ EduPlatform Fix: Все исправления применены");
}

/**
 * Применяет все необходимые стили
 */
function applyFixStyles() {
    // Удаляем старый стиль, если он существует
    const oldStyle = document.getElementById('edu-platform-fix-styles');
    if (oldStyle) {
        oldStyle.remove();
    }
    
    // Создаем новый элемент стиля
    const style = document.createElement('style');
    style.id = 'edu-platform-fix-styles';
    style.textContent = `
        /* Стили для сайдбара с выравниванием по левому краю */
        .sidebar h2,
        .sidebar .lesson-list,
        .sidebar .lesson-list li,
        .sidebar .lesson-item {
            text-align: left !important;
            margin-left: 0 !important;
            padding-left: 15px;
            width: 100%;
            box-sizing: border-box;
        }
        
        /* Улучшенные стили для тестов */
        .test-question {
            margin-bottom: 20px;
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .test-options {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        
        .test-option {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 8px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        .test-option:hover {
            background-color: #eaeaea;
        }
        
        /* Стили для практических заданий */
        .practice, .practice-section {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .practice h3, .practice-section h3 {
            margin-top: 0;
            margin-bottom: 15px;
            color: #333;
            font-size: 1.3rem;
        }
        
        .practice textarea, .practice-section textarea,
        .code-textarea {
            width: 100%;
            min-height: 150px;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 12px;
            font-family: monospace;
            margin-bottom: 15px;
            background-color: #fff;
            resize: vertical;
        }
        
        .practice button, .practice-section button {
            background-color: #4285F4;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.3s;
        }
        
        .practice button:hover, .practice-section button:hover {
            background-color: #3367D6;
        }
        
        /* Сообщения обратной связи */
        .feedback-message {
            margin-top: 15px;
            padding: 12px;
            border-radius: 6px;
            font-weight: 500;
            display: none;
        }
        
        .feedback-message.success {
            background-color: rgba(76, 175, 80, 0.1);
            border: 1px solid #4CAF50;
            color: #2E7D32;
            display: block;
        }
        
        .feedback-message.error {
            background-color: rgba(244, 67, 54, 0.1);
            border: 1px solid #F44336;
            color: #C62828;
            display: block;
        }
        
        /* Анимация для обратной связи */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .feedback-message {
            animation: fadeIn 0.3s ease-out forwards;
        }
    `;
    
    document.head.appendChild(style);
    console.log("⚡ EduPlatform Fix: Стили применены");
}

/**
 * Исправляет сайдбар и выравнивание текста
 */
function fixSidebar() {
    // Применяем стили выравнивания ко всем элементам сайдбара
    const sidebarElements = document.querySelectorAll('.sidebar h2, .sidebar .lesson-list, .sidebar .lesson-list li, .sidebar .lesson-item');
    
    sidebarElements.forEach(element => {
        element.style.textAlign = 'left';
        element.style.marginLeft = '0';
    });
    
    console.log("⚡ EduPlatform Fix: Сайдбар исправлен");
}

// Хранилище для статуса выполнения заданий
window.lessonTaskStatus = window.lessonTaskStatus || {
    tests: {},
    practice: {}
};

/**
 * Исправляет систему проверки тестов
 */
function fixTests() {
    // Находим все секции с тестами
    const testSections = document.querySelectorAll('.test, .quiz, .test-section');
    
    if (testSections.length === 0) {
        console.log("⚡ EduPlatform Fix: Тесты не найдены");
        return;
    }
    
    console.log(`⚡ EduPlatform Fix: Найдено ${testSections.length} секций с тестами`);
    
    testSections.forEach((testSection, index) => {
        // Находим кнопку для проверки теста
        let testButton = null;
        
        // Ищем кнопку в разных местах
        const possibleButtons = [
            testSection.querySelector('button:not(.complete-btn)'),
            testSection.querySelector('.lesson-actions button:not(.complete-btn)'),
            testSection.querySelector('button[onclick*="checkQuiz"]'),
            testSection.querySelector('button[onclick*="test"]')
        ];
        
        // Берем первую найденную кнопку
        for (const btn of possibleButtons) {
            if (btn) {
                testButton = btn;
                break;
            }
        }
        
        // Если кнопка не найдена, создаем новую
        if (!testButton) {
            console.log("⚡ EduPlatform Fix: Кнопка теста не найдена, создаем новую");
            
            // Создаем контейнер для кнопки
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'lesson-actions';
            
            // Создаем кнопку
            testButton = document.createElement('button');
            testButton.className = 'test-check-btn';
            
            // Определяем язык для текста кнопки
            const lang = getCurrentLanguage();
            testButton.textContent = lang === 'ru' ? 'Проверить тест' : 'Тесті тексеру';
            
            // Добавляем кнопку в контейнер, а контейнер в секцию теста
            buttonContainer.appendChild(testButton);
            testSection.appendChild(buttonContainer);
        } else {
            // Очищаем существующую кнопку от обработчиков
            const oldButton = testButton;
            const buttonParent = oldButton.parentNode;
            
            // Создаем новую кнопку с теми же атрибутами
            testButton = document.createElement('button');
            testButton.className = oldButton.className;
            testButton.textContent = oldButton.textContent;
            
            // Заменяем старую кнопку новой
            buttonParent.replaceChild(testButton, oldButton);
        }
        
        // Обновляем текст кнопки, если он содержит "check" или "тексеру"
        const buttonText = testButton.textContent.toLowerCase();
        if (buttonText.includes('check') || buttonText.includes('тексеру') || buttonText.includes('проверить')) {
            // Текст кнопки уже правильный
        } else {
            // Устанавливаем правильный текст в зависимости от языка
            const lang = getCurrentLanguage();
            testButton.textContent = lang === 'ru' ? 'Проверить тест' : 'Тесті тексеру';
        }
        
        // Назначаем обработчик проверки теста
        testButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const lessonNum = getLessonNumber();
            console.log(`⚡ EduPlatform Fix: Проверка теста для урока ${lessonNum}`);
            
            // Вызываем функцию проверки теста
            const result = checkTestAnswers(testSection, lessonNum);
            
            // Обновляем статус выполнения теста
            window.lessonTaskStatus.tests[lessonNum] = result;
            saveTaskStatus();
            
            console.log(`⚡ EduPlatform Fix: Результат проверки теста: ${result ? 'Верно' : 'Неверно'}`);
        });
    });
    
    console.log("⚡ EduPlatform Fix: Система тестов исправлена");
}

/**
 * Исправляет практические задания и заменяет кнопку запуска кода
 */
function fixPractice() {
    // Находим все секции с практическими заданиями
    const practiceSections = document.querySelectorAll('.practice, .practice-section');
    
    if (practiceSections.length === 0) {
        console.log("⚡ EduPlatform Fix: Практические задания не найдены");
        return;
    }
    
    console.log(`⚡ EduPlatform Fix: Найдено ${practiceSections.length} секций с практическими заданиями`);
    
    practiceSections.forEach((practiceSection, index) => {
        // Находим поле для ввода кода
        const codeInput = practiceSection.querySelector('textarea, .code-textarea');
        
        if (!codeInput) {
            console.log("⚡ EduPlatform Fix: Поле для кода не найдено");
            return;
        }
        
        // Находим кнопку запуска кода
        let practiceButton = null;
        
        // Ищем кнопки с различными атрибутами
        const possibleButtons = [
            practiceSection.querySelector('button'),
            practiceSection.querySelector('button[onclick*="run"]'),
            practiceSection.querySelector('button[onclick*="код"]'),
            practiceSection.querySelector('button[onclick*="code"]')
        ];
        
        // Берем первую найденную кнопку
        for (const btn of possibleButtons) {
            if (btn) {
                practiceButton = btn;
                break;
            }
        }
        
        // Если кнопка не найдена, создаем новую
        if (!practiceButton) {
            console.log("⚡ EduPlatform Fix: Кнопка практики не найдена, создаем новую");
            
            // Создаем контейнер для кнопки
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'practice-actions';
            
            // Создаем кнопку
            practiceButton = document.createElement('button');
            practiceButton.className = 'practice-check-btn';
            
            // Добавляем кнопку в контейнер, а контейнер после текстового поля
            buttonContainer.appendChild(practiceButton);
            codeInput.parentNode.insertBefore(buttonContainer, codeInput.nextSibling);
        } else {
            // Очищаем существующую кнопку от обработчиков
            const oldButton = practiceButton;
            const buttonParent = oldButton.parentNode;
            
            // Создаем новую кнопку с теми же атрибутами
            practiceButton = document.createElement('button');
            practiceButton.className = oldButton.className;
            
            // Заменяем старую кнопку новой
            buttonParent.replaceChild(practiceButton, oldButton);
        }
        
        // Устанавливаем текст кнопки в зависимости от языка
        const lang = getCurrentLanguage();
        practiceButton.textContent = lang === 'ru' ? 'Проверить код' : 'Кодты тексеру';
        
        // Назначаем обработчик проверки кода
        practiceButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const lessonNum = getLessonNumber();
            console.log(`⚡ EduPlatform Fix: Проверка кода для урока ${lessonNum}`);
            
            // Вызываем функцию проверки кода
            const result = checkPracticeCode(codeInput, practiceSection, lessonNum);
            
            // Обновляем статус выполнения практики
            window.lessonTaskStatus.practice[lessonNum] = result;
            saveTaskStatus();
            
            console.log(`⚡ EduPlatform Fix: Результат проверки кода: ${result ? 'Верно' : 'Неверно'}`);
        });
    });
    
    console.log("⚡ EduPlatform Fix: Система практических заданий исправлена");
}
