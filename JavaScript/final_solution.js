/**
 * ФИНАЛЬНОЕ РЕШЕНИЕ ДЛЯ ПРОВЕРКИ ТЕСТОВ И ПРАКТИЧЕСКИХ ЗАДАНИЙ
 * Этот скрипт гарантированно работает для всех уроков
 */

// Запускаем скрипт сразу при загрузке
(function() {
    console.log("🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Скрипт загружен");
    
    // Запускаем обработку сразу
    initSolution();
    
    // И повторно через 1 секунду для уверенности
    setTimeout(initSolution, 1000);
    
    // И еще раз через 2 секунды для полной уверенности
    setTimeout(initSolution, 2000);
    
    // И еще раз при изменении DOM (например, при загрузке нового урока)
    const observer = new MutationObserver(function(mutations) {
        console.log("🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Обнаружены изменения в DOM");
        initSolution();
    });
    
    // Начинаем наблюдение за изменениями в DOM
    observer.observe(document.body, { childList: true, subtree: true });
})();

/**
 * Инициализирует решение
 */
function initSolution() {
    console.log("🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Инициализация...");
    
    // Добавляем необходимые стили
    addStyles();
    
    // Обрабатываем все тесты
    processAllTests();
    
    // Обрабатываем все практические задания
    processAllPractices();
    
    // Обрабатываем кнопку завершения урока
    processCompletionButton();
    
    console.log("🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Инициализация завершена");
}

/**
 * Добавляет необходимые стили
 */
function addStyles() {
    // Проверяем, есть ли уже стили
    if (document.getElementById('final-solution-styles')) {
        return;
    }
    
    // Создаем элемент стиля
    const style = document.createElement('style');
    style.id = 'final-solution-styles';
    style.textContent = `
        .test-result, .practice-result {
            margin-top: 15px;
            padding: 10px;
            border-radius: 5px;
            font-weight: bold;
            display: block;
            animation: fadeIn 0.3s ease-out forwards;
        }
        
        .test-result.success, .practice-result.success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .test-result.error, .practice-result.error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        .test-btn, .practice-btn {
            background: linear-gradient(90deg, #2646FA 0%, #E30BBF 100%);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 10px;
            margin-bottom: 10px;
            display: block;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    
    // Добавляем стили в head
    document.head.appendChild(style);
    console.log("🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Стили добавлены");
}

/**
 * Обрабатывает все тесты на странице
 */
function processAllTests() {
    // Ищем все возможные контейнеры с тестами
    const testContainers = [
        ...document.querySelectorAll('.test'),
        ...document.querySelectorAll('.quiz'),
        ...document.querySelectorAll('.test-section'),
        ...document.querySelectorAll('section:has(input[type="radio"])')
    ];
    
    console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Найдено ${testContainers.length} контейнеров с тестами`);
    
    // Если тестов нет, ищем их по содержимому
    if (testContainers.length === 0) {
        // Ищем секции, которые могут содержать тесты
        const allSections = document.querySelectorAll('section, div');
        for (const section of allSections) {
            if (section.querySelector('input[type="radio"]')) {
                testContainers.push(section);
            }
        }
        console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Найдено дополнительно ${testContainers.length} контейнеров с тестами`);
    }
    
    // Обрабатываем каждый контейнер с тестом
    testContainers.forEach((container, index) => {
        processTestContainer(container, index);
    });
}

/**
 * Обрабатывает контейнер с тестом
 */
function processTestContainer(container, index) {
    // Проверяем, обработан ли уже контейнер
    if (container.getAttribute('data-processed-test')) {
        return;
    }
    
    // Помечаем контейнер как обработанный
    container.setAttribute('data-processed-test', 'true');
    
    // Находим все радио-кнопки в контейнере
    const radioButtons = container.querySelectorAll('input[type="radio"]');
    if (radioButtons.length === 0) {
        console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: В контейнере ${index} нет радио-кнопок`);
        return;
    }
    
    // Удаляем все существующие кнопки проверки теста
    const existingButtons = container.querySelectorAll('button');
    existingButtons.forEach(button => {
        const text = button.textContent.toLowerCase();
        if (text.includes('тест') || text.includes('проверить') || text.includes('тексеру')) {
            button.remove();
        }
    });
    
    // Создаем новую кнопку
    const button = document.createElement('button');
    button.className = 'test-btn';
    button.setAttribute('data-test-index', index);
    
    // Устанавливаем текст кнопки в зависимости от языка
    const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
    button.textContent = isRussian ? 'Проверить тест' : 'Тесті тексеру';
    
    // Добавляем обработчик клика
    button.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Получаем номер урока
        const lessonNum = getLessonNumber();
        console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Проверка теста для урока ${lessonNum}`);
        
        // Проверяем тест
        checkTest(container, lessonNum);
    };
    
    // Добавляем кнопку в контейнер
    container.appendChild(button);
    
    // Создаем контейнер для результата
    const resultContainer = document.createElement('div');
    resultContainer.className = 'test-result-container';
    container.appendChild(resultContainer);
    
    console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Контейнер теста ${index} обработан`);
}

/**
 * Обрабатывает все практические задания на странице
 */
function processAllPractices() {
    // Ищем все возможные контейнеры с практическими заданиями
    const practiceContainers = [
        ...document.querySelectorAll('.practice'),
        ...document.querySelectorAll('.practice-section'),
        ...document.querySelectorAll('section:has(textarea)'),
        ...document.querySelectorAll('div:has(textarea)')
    ];
    
    console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Найдено ${practiceContainers.length} контейнеров с практическими заданиями`);
    
    // Если практических заданий нет, ищем их по содержимому
    if (practiceContainers.length === 0) {
        // Ищем все текстовые поля на странице
        const allTextareas = document.querySelectorAll('textarea');
        for (const textarea of allTextareas) {
            // Получаем родительский контейнер
            let parent = textarea.parentElement;
            // Поднимаемся на несколько уровней вверх
            for (let i = 0; i < 3 && parent; i++) {
                practiceContainers.push(parent);
                parent = parent.parentElement;
            }
        }
        console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Найдено дополнительно ${practiceContainers.length} контейнеров с практическими заданиями`);
    }
    
    // Обрабатываем каждый контейнер с практическим заданием
    practiceContainers.forEach((container, index) => {
        processPracticeContainer(container, index);
    });
}

/**
 * Обрабатывает контейнер с практическим заданием
 */
function processPracticeContainer(container, index) {
    // Проверяем, обработан ли уже контейнер
    if (container.getAttribute('data-processed-practice')) {
        return;
    }
    
    // Помечаем контейнер как обработанный
    container.setAttribute('data-processed-practice', 'true');
    
    // Находим текстовое поле в контейнере
    const textarea = container.querySelector('textarea');
    if (!textarea) {
        console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: В контейнере ${index} нет текстового поля`);
        return;
    }
    
    // Удаляем все существующие кнопки
    const existingButtons = container.querySelectorAll('button');
    existingButtons.forEach(button => {
        const text = button.textContent.toLowerCase();
        if (text.includes('код') || text.includes('запустить') || text.includes('іске') || text.includes('run')) {
            button.remove();
        }
    });
    
    // Создаем новую кнопку
    const button = document.createElement('button');
    button.className = 'practice-btn';
    button.setAttribute('data-practice-index', index);
    
    // Устанавливаем текст кнопки в зависимости от языка
    const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
    button.textContent = isRussian ? 'Проверить код' : 'Кодты тексеру';
    
    // Добавляем обработчик клика
    button.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Получаем номер урока
        const lessonNum = getLessonNumber();
        console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Проверка практики для урока ${lessonNum}`);
        
        // Проверяем практику
        checkPractice(textarea, container, lessonNum);
    };
    
    // Добавляем кнопку после текстового поля
    textarea.parentNode.insertBefore(button, textarea.nextSibling);
    
    // Создаем контейнер для результата
    const resultContainer = document.createElement('div');
    resultContainer.className = 'practice-result-container';
    container.appendChild(resultContainer);
    
    console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Контейнер практики ${index} обработан`);
}
