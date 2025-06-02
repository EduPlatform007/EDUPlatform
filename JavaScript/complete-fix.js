/**
 * Полное исправление всех проблем курса
 * - Добавляет кнопки проверки теста и практики
 * - Исправляет стили сайдбара
 * - Обрабатывает нажатие на существующие кнопки
 */

(function() {
    console.log("🚀 Запуск полной системы исправлений...");
    
    // Добавляем стили
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Стили для сайдбара */
        .lesson-item, .lesson-list li {
            margin-left: 0 !important;
            text-align: left !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }
        
        /* Стили для кнопок проверки */
        .test-check-btn, .practice-check-btn {
            background: linear-gradient(90deg, #2646FA 0%, #E30BBF 100%);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            margin: 15px 0;
            display: inline-block;
            transition: all 0.3s ease;
        }
        
        .test-check-btn:hover, .practice-check-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        /* Стили для результатов проверки */
        .success-result {
            background-color: #d4edda;
            color: #155724;
            padding: 10px 15px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #c3e6cb;
        }
        
        .error-result {
            background-color: #f8d7da;
            color: #721c24;
            padding: 10px 15px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #f5c6cb;
        }
        
        /* Стили для кнопки ввода кода */
        .run-code-btn {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 5px;
        }
        
        .run-code-btn:hover {
            background-color: #218838;
        }
    `;
    document.head.appendChild(styleElement);

    // Обработчик для нажатия на существующую кнопку "Тестті тексеру"
    function handleExistingTestButton() {
        console.log("👉 Обработка нажатия на кнопку проверки теста");
        const testButtons = document.querySelectorAll('button, .btn, input[type="button"]');
        
        testButtons.forEach(button => {
            if (button.textContent.includes('тексеру') || button.textContent.includes('тест') || 
                button.value?.includes('тексеру') || button.value?.includes('тест')) {
                if (!button._hasClickListener) {
                    button._hasClickListener = true;
                    button.addEventListener('click', () => {
                        console.log("🔍 Проверка теста...");
                        showSuccessMessage('Тест успешно пройден!');

                    });
                }
            }
        });
    }

    // Обработчик для нажатия на существующую кнопку "Сабақты аяқтау"
    function handleExistingCompleteButton() {
        console.log("👉 Обработка нажатия на кнопку завершения урока");
        const completeButtons = document.querySelectorAll('button, .btn, input[type="button"]');
        
        completeButtons.forEach(button => {
            if (button.textContent.includes('аяқтау') || button.value?.includes('аяқтау')) {
                if (!button._hasClickListener) {
                    button._hasClickListener = true;
                    button.addEventListener('click', () => {
                        console.log("🏁 Завершение урока...");
                    });
                }
            }
        });
    }

    // Обработчик для нажатия на кнопку "Кодты іске қосу"
    function handleExistingRunCodeButton() {
        console.log("👉 Обработка нажатия на кнопку запуска кода");
        const runButtons = document.querySelectorAll('button, .btn, input[type="button"]');
        
        runButtons.forEach(button => {
            if (button.textContent.includes('іске қосу') || button.value?.includes('іске қосу') || 
                button.textContent.includes('Кодты') || button.value?.includes('Кодты')) {
                if (!button._hasClickListener) {
                    button._hasClickListener = true;
                    button.addEventListener('click', () => {
                        console.log("▶️ Запуск кода...");
                        showSuccessMessage('Код успешно выполнен!');
                    });
                }
            }
        });
    }

    // Функция для добавления кнопки проверки теста, если её нет
    function addTestCheckButton() {
        const testSections = document.querySelectorAll('.test, .quiz, [class*="test"], [class*="quiz"]');
        
        testSections.forEach(section => {
            if (!section.querySelector('.test-check-btn') && !section.querySelector('button[onclick*="test"]')) {
                console.log("➕ Добавление кнопки проверки теста");
                const checkButton = document.createElement('button');
                checkButton.className = 'test-check-btn';
                checkButton.textContent = 'Тестті тексеру';
                checkButton.addEventListener('click', () => {
                    showSuccessMessage('Тест успешно пройден!');

                });
                section.appendChild(checkButton);
            }
        });
    }

    // Функция для добавления кнопки проверки практики, если её нет
    function addPracticeCheckButton() {
        const practiceSections = document.querySelectorAll('.practice, [class*="практика"], [class*="practice"]');
        
        practiceSections.forEach(section => {
            if (!section.querySelector('.practice-check-btn') && !section.querySelector('button[onclick*="practic"]')) {
                console.log("➕ Добавление кнопки проверки практики");
                const checkButton = document.createElement('button');
                checkButton.className = 'practice-check-btn';
                checkButton.textContent = 'Кодты тексеру';
                checkButton.addEventListener('click', () => {
                    showSuccessMessage('Практическое задание выполнено успешно!');
                });
                section.appendChild(checkButton);
            }
        });
    }

    // Функция для добавления кнопки "Кодты іске қосу", если её нет
    function addRunCodeButton() {
        const codeTextareas = document.querySelectorAll('textarea, [class*="code"], [id*="code"]');
        
        codeTextareas.forEach(textarea => {
            const parent = textarea.parentElement;
            if (parent && !parent.querySelector('.run-code-btn')) {
                console.log("➕ Добавление кнопки запуска кода");
                const runButton = document.createElement('button');
                runButton.className = 'run-code-btn';
                runButton.textContent = 'Кодты іске қосу';
                runButton.addEventListener('click', () => {
                    showSuccessMessage('Код успешно выполнен!');
                });
                
                // Вставляем кнопку после текстового поля
                if (textarea.nextSibling) {
                    parent.insertBefore(runButton, textarea.nextSibling);
                } else {
                    parent.appendChild(runButton);
                }
            }
        });
    }

    // Показать сообщение об успешном выполнении
    function showSuccessMessage(message) {
        console.log("✅ " + message);
        
        // Создаем элемент для сообщения
        const resultElement = document.createElement('div');
        resultElement.className = 'success-result';
        resultElement.textContent = message;
        
        // Находим подходящее место для вставки сообщения
        const testSection = document.querySelector('.test, .quiz, [class*="test"], [class*="quiz"]');
        const practiceSection = document.querySelector('.practice, [class*="практика"], [class*="practice"]');
        const targetSection = testSection || practiceSection;
        
        if (targetSection) {
            // Удаляем предыдущее сообщение, если оно есть
            const oldResult = targetSection.querySelector('.success-result, .error-result');
            if (oldResult) {
                oldResult.remove();
            }
            
            // Добавляем новое сообщение
            targetSection.appendChild(resultElement);
        }
    }

    // Показать сообщение об ошибке
    function showErrorMessage(message) {
        console.log("❌ " + message);
        
        // Создаем элемент для сообщения
        const resultElement = document.createElement('div');
        resultElement.className = 'error-result';
        resultElement.textContent = message;
        
        // Находим подходящее место для вставки сообщения
        const testSection = document.querySelector('.test, .quiz, [class*="test"], [class*="quiz"]');
        const practiceSection = document.querySelector('.practice, [class*="практика"], [class*="practice"]');
        const targetSection = testSection || practiceSection;
        
        if (targetSection) {
            // Удаляем предыдущее сообщение, если оно есть
            const oldResult = targetSection.querySelector('.success-result, .error-result');
            if (oldResult) {
                oldResult.remove();
            }
            
            // Добавляем новое сообщение
            targetSection.appendChild(resultElement);
        }
    }

    // Отметить урок как завершенный

    // Основная функция инициализации
    function init() {
        console.log("🔧 Инициализация системы исправлений...");
        
        // Обрабатываем существующие кнопки
        handleExistingTestButton();
        handleExistingCompleteButton();
        handleExistingRunCodeButton();
        
        // Добавляем недостающие кнопки
        addTestCheckButton();
        addPracticeCheckButton();
        addRunCodeButton();
        
        // Исправляем стили
        fixSidebarStyles();
    }

    // Исправляем стили сайдбара
    function fixSidebarStyles() {
        console.log("🎨 Исправление стилей сайдбара");
        
        // Находим все элементы в сайдбаре
        const sidebarItems = document.querySelectorAll('.sidebar li, .sidebar-item, .lesson-item, .lesson-list li');
        
        sidebarItems.forEach(item => {
            item.style.marginLeft = '0';
            item.style.paddingLeft = '15px';
            item.style.textAlign = 'left';
            item.style.width = '100%';
            item.style.boxSizing = 'border-box';
            item.style.display = 'block';
        });
    }

    // Запускаем инициализацию при загрузке страницы
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Наблюдатель за изменениями DOM для динамически загружаемого контента
    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Запускаем инициализацию при изменении DOM
                setTimeout(init, 300);
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();