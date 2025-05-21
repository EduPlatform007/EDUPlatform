/**
 * ПРЯМОЕ ИСПРАВЛЕНИЕ ПРОБЛЕМ С ТЕСТАМИ И ПРАКТИКОЙ
 * Автор: Cascade AI
 * Дата: 2025-05-20
 */

// Запускаем исправления после полной загрузки страницы
window.addEventListener('load', function() {
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Инициализация...");
    
    // Даем время для загрузки всех скриптов
    setTimeout(function() {
        fixEverything();
    }, 500);
});

/**
 * Исправляет все проблемы на странице
 */
function fixEverything() {
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Начинаю исправление всех проблем");
    
    // 1. Исправляем стили
    fixStyles();
    
    // 2. Исправляем кнопки тестов
    fixTestButtons();
    
    // 3. Исправляем кнопки практических заданий
    fixPracticeButtons();
    
    // 4. Исправляем кнопку завершения урока
    fixCompletionButton();
    
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Все исправления применены");
}

/**
 * Добавляет необходимые стили
 */
function fixStyles() {
    // Создаем стили
    const style = document.createElement('style');
    style.textContent = `
        /* Стили для сайдбара */
        .sidebar h2, .sidebar .lesson-list, .sidebar .lesson-list li, .sidebar .lesson-item {
            text-align: left !important;
            margin-left: 0 !important;
        }
        
        /* Стили для сообщений обратной связи */
        .feedback-message {
            margin-top: 15px;
            padding: 12px;
            border-radius: 6px;
            font-weight: 500;
            display: block;
            animation: fadeIn 0.3s ease-out forwards;
        }
        
        .feedback-message.success {
            background-color: rgba(76, 175, 80, 0.1);
            border: 1px solid #4CAF50;
            color: #2E7D32;
        }
        
        .feedback-message.error {
            background-color: rgba(244, 67, 54, 0.1);
            border: 1px solid #F44336;
            color: #C62828;
        }
        
        /* Стили для практических заданий */
        .practice, .practice-section {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .practice textarea, .practice-section textarea {
            width: 100%;
            min-height: 150px;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 12px;
            font-family: monospace;
            margin-bottom: 15px;
        }
        
        /* Анимация для обратной связи */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    
    document.head.appendChild(style);
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Стили добавлены");
}

/**
 * Исправляет кнопки тестов
 */
function fixTestButtons() {
    // Находим все кнопки тестов
    const testButtons = document.querySelectorAll('button[onclick*="checkQuiz"], button[onclick*="test"]');
    
    if (testButtons.length === 0) {
        // Если кнопки не найдены, ищем в секциях тестов
        const testSections = document.querySelectorAll('.test, .quiz');
        testSections.forEach(section => {
            const button = section.querySelector('button');
            if (button) {
                replaceTestButton(button);
            } else {
                // Если кнопка не найдена, создаем новую
                createTestButton(section);
            }
        });
    } else {
        // Заменяем найденные кнопки
        testButtons.forEach(button => {
            replaceTestButton(button);
        });
    }
    
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Кнопки тестов исправлены");
}

/**
 * Заменяет кнопку теста на новую с правильным обработчиком
 */
function replaceTestButton(oldButton) {
    // Создаем новую кнопку
    const newButton = document.createElement('button');
    newButton.className = oldButton.className || 'test-check-btn';
    newButton.textContent = getCurrentLanguage() === 'ru' ? 'Проверить тест' : 'Тесті тексеру';
    
    // Добавляем обработчик клика
    newButton.addEventListener('click', function() {
        const testSection = this.closest('.test, .quiz');
        if (testSection) {
            checkTest(testSection);
        }
    });
    
    // Заменяем старую кнопку новой
    if (oldButton.parentNode) {
        oldButton.parentNode.replaceChild(newButton, oldButton);
    }
}

/**
 * Создает новую кнопку теста в указанной секции
 */
function createTestButton(testSection) {
    // Создаем контейнер для кнопки
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'test-actions';
    
    // Создаем кнопку
    const button = document.createElement('button');
    button.className = 'test-check-btn';
    button.textContent = getCurrentLanguage() === 'ru' ? 'Проверить тест' : 'Тесті тексеру';
    
    // Добавляем обработчик клика
    button.addEventListener('click', function() {
        checkTest(testSection);
    });
    
    // Добавляем кнопку в контейнер, а контейнер в секцию
    buttonContainer.appendChild(button);
    testSection.appendChild(buttonContainer);
}

/**
 * Исправляет кнопки практических заданий
 */
function fixPracticeButtons() {
    // Находим все кнопки практических заданий
    const practiceButtons = document.querySelectorAll('button:contains("код"), button:contains("code")');
    
    if (practiceButtons.length === 0) {
        // Если кнопки не найдены, ищем в секциях практики
        const practiceSections = document.querySelectorAll('.practice, .practice-section');
        practiceSections.forEach(section => {
            const button = section.querySelector('button');
            if (button) {
                replacePracticeButton(button);
            } else {
                // Если кнопка не найдена, создаем новую
                createPracticeButton(section);
            }
        });
    } else {
        // Заменяем найденные кнопки
        practiceButtons.forEach(button => {
            replacePracticeButton(button);
        });
    }
    
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Кнопки практики исправлены");
}

/**
 * Заменяет кнопку практики на новую с правильным обработчиком
 */
function replacePracticeButton(oldButton) {
    // Создаем новую кнопку
    const newButton = document.createElement('button');
    newButton.className = oldButton.className || 'practice-check-btn';
    newButton.textContent = getCurrentLanguage() === 'ru' ? 'Проверить код' : 'Кодты тексеру';
    
    // Добавляем обработчик клика
    newButton.addEventListener('click', function() {
        const practiceSection = this.closest('.practice, .practice-section');
        if (practiceSection) {
            const textarea = practiceSection.querySelector('textarea');
            if (textarea) {
                checkPractice(textarea, practiceSection);
            }
        }
    });
    
    // Заменяем старую кнопку новой
    if (oldButton.parentNode) {
        oldButton.parentNode.replaceChild(newButton, oldButton);
    }
}

/**
 * Создает новую кнопку практики в указанной секции
 */
function createPracticeButton(practiceSection) {
    // Находим textarea
    const textarea = practiceSection.querySelector('textarea');
    if (!textarea) return;
    
    // Создаем контейнер для кнопки
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'practice-actions';
    
    // Создаем кнопку
    const button = document.createElement('button');
    button.className = 'practice-check-btn';
    button.textContent = getCurrentLanguage() === 'ru' ? 'Проверить код' : 'Кодты тексеру';
    
    // Добавляем обработчик клика
    button.addEventListener('click', function() {
        checkPractice(textarea, practiceSection);
    });
    
    // Добавляем кнопку в контейнер, а контейнер после textarea
    buttonContainer.appendChild(button);
    textarea.parentNode.insertBefore(buttonContainer, textarea.nextSibling);
}

/**
 * Исправляет кнопку завершения урока
 */
function fixCompletionButton() {
    // Находим кнопку завершения урока
    const completeButton = document.querySelector('.complete-btn');
    if (!completeButton) return;
    
    // Сохраняем оригинальный обработчик
    const originalOnClick = completeButton.getAttribute('onclick');
    
    // Удаляем оригинальный обработчик
    completeButton.removeAttribute('onclick');
    
    // Добавляем новый обработчик
    completeButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Получаем номер урока
        const lessonNum = getLessonNumber();
        
        // Проверяем, выполнены ли все задания
        const testCompleted = isTestCompleted();
        const practiceCompleted = isPracticeCompleted();
        
        if (testCompleted && practiceCompleted) {
            // Если все задания выполнены, завершаем урок
            console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Все задания выполнены, завершаем урок");
            
            // Вызываем оригинальную функцию завершения урока
            if (originalOnClick) {
                eval(originalOnClick);
            } else if (typeof window.completeLesson === 'function') {
                window.completeLesson(lessonNum);
            }
        } else {
            // Если не все задания выполнены, показываем сообщение
            console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Не все задания выполнены");
            showCompletionMessage(false);
        }
    });
    
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Кнопка завершения урока исправлена");
}

/**
 * Проверяет тест
 */
function checkTest(testSection) {
    // Находим все вопросы
    const questions = testSection.querySelectorAll('.test-question');
    if (questions.length === 0) {
        console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Вопросы не найдены");
        return;
    }
    
    // Получаем номер урока
    const lessonNum = getLessonNumber();
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Проверка теста для урока", lessonNum);
    
    // Получаем правильные ответы
    const correctAnswers = getCorrectTestAnswers(lessonNum);
    if (!correctAnswers) {
        console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Ответы для теста не найдены");
        return;
    }
    
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Правильные ответы:", correctAnswers);
    
    // Проверяем ответы
    let allCorrect = true;
    
    questions.forEach((question, index) => {
        // Находим выбранный ответ
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (!selectedOption) {
            allCorrect = false;
            return;
        }
        
        // Получаем имя вопроса (q1, q2, ...)
        const questionName = selectedOption.getAttribute('name');
        
        // Получаем правильный ответ
        const correctAnswer = correctAnswers[questionName];
        if (!correctAnswer) {
            console.log(`🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Ответ для вопроса ${questionName} не найден`);
            return;
        }
        
        // Проверяем ответ
        const userAnswer = selectedOption.value;
        const isCorrect = userAnswer === correctAnswer;
        
        console.log(`🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Вопрос ${questionName}: ответ пользователя ${userAnswer}, правильный ответ ${correctAnswer}, результат: ${isCorrect ? 'верно' : 'неверно'}`);
        
        if (!isCorrect) {
            allCorrect = false;
        }
    });
    
    // Показываем результат
    showTestResult(testSection, allCorrect);
    
    // Сохраняем результат
    saveTestResult(lessonNum, allCorrect);
    
    console.log(`🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Результат проверки теста: ${allCorrect ? 'верно' : 'неверно'}`);
}

/**
 * Проверяет практическое задание
 */
function checkPractice(textarea, practiceSection) {
    // Получаем введенный код
    const userCode = textarea.value.trim();
    if (!userCode) {
        console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Код не введен");
        showPracticeResult(practiceSection, false);
        return;
    }
    
    // Получаем номер урока
    const lessonNum = getLessonNumber();
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Проверка практики для урока", lessonNum);
    
    // Получаем правильный код
    const correctCode = getCorrectPracticeCode(lessonNum);
    if (!correctCode) {
        console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Правильный код не найден");
        return;
    }
    
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Правильный код:", correctCode);
    console.log("🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Код пользователя:", userCode);
    
    // Проверяем код
    const isCorrect = userCode.trim() === correctCode.trim();
    
    // Показываем результат
    showPracticeResult(practiceSection, isCorrect);
    
    // Сохраняем результат
    savePracticeResult(lessonNum, isCorrect);
    
    console.log(`🔧 ПРЯМОЕ ИСПРАВЛЕНИЕ: Результат проверки практики: ${isCorrect ? 'верно' : 'неверно'}`);
}

/**
 * Показывает результат проверки теста
 */
function showTestResult(testSection, isCorrect) {
    // Удаляем предыдущее сообщение
    const existingMessage = testSection.querySelector('.feedback-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Создаем новое сообщение
    const message = document.createElement('div');
    message.className = `feedback-message ${isCorrect ? 'success' : 'error'}`;
    
    // Устанавливаем текст сообщения
    if (isCorrect) {
        message.textContent = getCurrentLanguage() === 'ru' ? 
            'Правильно! Все ответы верны.' : 
            'Дұрыс! Барлық жауаптар дұрыс.';
    } else {
        message.textContent = getCurrentLanguage() === 'ru' ? 
            'Есть ошибки. Проверьте ответы и попробуйте снова.' : 
            'Қателіктер бар. Жауаптарды тексеріп, қайталап көріңіз.';
    }
    
    // Добавляем сообщение в секцию
    const button = testSection.querySelector('button');
    if (button && button.parentNode) {
        button.parentNode.appendChild(message);
    } else {
        testSection.appendChild(message);
    }
}

/**
 * Показывает результат проверки практики
 */
function showPracticeResult(practiceSection, isCorrect) {
    // Удаляем предыдущее сообщение
    const existingMessage = practiceSection.querySelector('.feedback-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Создаем новое сообщение
    const message = document.createElement('div');
    message.className = `feedback-message ${isCorrect ? 'success' : 'error'}`;
    
    // Устанавливаем текст сообщения
    if (isCorrect) {
        message.textContent = getCurrentLanguage() === 'ru' ? 
            'Код верный! Задание выполнено.' : 
            'Код дұрыс! Тапсырма орындалды.';
    } else {
        message.textContent = getCurrentLanguage() === 'ru' ? 
            'Код неверный. Проверьте и попробуйте снова.' : 
            'Код дұрыс емес. Тексеріп, қайталап көріңіз.';
    }
    
    // Добавляем сообщение в секцию
    const button = practiceSection.querySelector('button');
    if (button && button.parentNode) {
        button.parentNode.appendChild(message);
    } else {
        practiceSection.appendChild(message);
    }
}

/**
 * Показывает сообщение о необходимости выполнить все задания
 */
function showCompletionMessage(canComplete) {
    if (canComplete) return;
    
    // Находим кнопку завершения урока
    const completeButton = document.querySelector('.complete-btn');
    if (!completeButton) return;
    
    // Удаляем предыдущее сообщение
    const existingMessage = completeButton.parentNode.querySelector('.feedback-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Создаем новое сообщение
    const message = document.createElement('div');
    message.className = 'feedback-message error';
    message.textContent = getCurrentLanguage() === 'ru' ? 
        'Для завершения урока необходимо правильно выполнить все задания' : 
        'Сабақты аяқтау үшін барлық тапсырмаларды дұрыс орындау керек';
    
    // Добавляем сообщение после кнопки
    completeButton.parentNode.appendChild(message);
}

/**
 * Получает правильные ответы для теста
 */
function getCorrectTestAnswers(lessonNum) {
    // Проверяем разные источники ответов
    
    // 1. Проверяем window.pythonLesson[номер].quizAnswers
    if (window[`pythonLesson${lessonNum}`] && window[`pythonLesson${lessonNum}`].quizAnswers) {
        return window[`pythonLesson${lessonNum}`].quizAnswers;
    }
    
    // 2. Проверяем window.quizAnswers
    if (window.quizAnswers) {
        return window.quizAnswers;
    }
    
    // 3. Используем фиксированные ответы для первых уроков
    const fallbackAnswers = {
        1: { q1: "b", q2: "b", q3: "a", q4: "b", q5: "b" },
        2: { q1: "c", q2: "a", q3: "b", q4: "c", q5: "b" }
    };
    
    if (fallbackAnswers[lessonNum]) {
        return fallbackAnswers[lessonNum];
    }
    
    // Если ничего не найдено, возвращаем базовые ответы
    return { q1: "b", q2: "b", q3: "a", q4: "b", q5: "b" };
}

/**
 * Получает правильный код для практического задания
 */
function getCorrectPracticeCode(lessonNum) {
    // Проверяем разные источники ответов
    
    // 1. Проверяем window.practiceAnswers
    if (window.practiceAnswers) {
        // Проверяем числовой ключ
        if (window.practiceAnswers[lessonNum]) {
            return window.practiceAnswers[lessonNum];
        }
        
        // Проверяем строковый ключ (например, "1-сабақ")
        const lessonKey = `${lessonNum}-сабақ`;
        if (window.practiceAnswers[lessonKey]) {
            return window.practiceAnswers[lessonKey];
        }
    }
    
    // 2. Проверяем window.pythonLesson[номер].practiceCode
    if (window[`pythonLesson${lessonNum}`] && window[`pythonLesson${lessonNum}`].practiceCode) {
        return window[`pythonLesson${lessonNum}`].practiceCode;
    }
    
    // 3. Используем фиксированные ответы для первых уроков
    const fallbackCodes = {
        1: 'print("Sәlem, әlem!")',
        2: 'x = 10\ny = 20\nprint(x + y)',
        3: 'a = 5\nb = 3\nsum = a + b\nprint(sum)'
    };
    
    if (fallbackCodes[lessonNum]) {
        return fallbackCodes[lessonNum];
    }
    
    // Если ничего не найдено, пытаемся найти код в примере
    const codeExample = document.querySelector('.practice code, .practice pre')?.textContent;
    if (codeExample) {
        return codeExample;
    }
    
    // Если все способы не сработали, возвращаем базовый код
    return 'print("Hello World")';
}

/**
 * Сохраняет результат проверки теста
 */
function saveTestResult(lessonNum, isCorrect) {
    // Загружаем текущие результаты
    const results = JSON.parse(localStorage.getItem('testResults') || '{}');
    
    // Сохраняем результат для текущего урока
    results[lessonNum] = isCorrect;
    
    // Сохраняем обновленные результаты
    localStorage.setItem('testResults', JSON.stringify(results));
}

/**
 * Сохраняет результат проверки практики
 */
function savePracticeResult(lessonNum, isCorrect) {
    // Загружаем текущие результаты
    const results = JSON.parse(localStorage.getItem('practiceResults') || '{}');
    
    // Сохраняем результат для текущего урока
    results[lessonNum] = isCorrect;
    
    // Сохраняем обновленные результаты
    localStorage.setItem('practiceResults', JSON.stringify(results));
}

/**
 * Проверяет, выполнен ли тест
 */
function isTestCompleted() {
    // Проверяем, есть ли тест на странице
    const testSection = document.querySelector('.test, .quiz');
    if (!testSection) {
        return true; // Если теста нет, считаем его выполненным
    }
    
    // Получаем номер урока
    const lessonNum = getLessonNumber();
    
    // Загружаем результаты тестов
    const results = JSON.parse(localStorage.getItem('testResults') || '{}');
    
    // Проверяем результат для текущего урока
    return results[lessonNum] === true;
}

/**
 * Проверяет, выполнено ли практическое задание
 */
function isPracticeCompleted() {
    // Проверяем, есть ли практика на странице
    const practiceSection = document.querySelector('.practice, .practice-section');
    if (!practiceSection) {
        return true; // Если практики нет, считаем ее выполненной
    }
    
    // Получаем номер урока
    const lessonNum = getLessonNumber();
    
    // Загружаем результаты практики
    const results = JSON.parse(localStorage.getItem('practiceResults') || '{}');
    
    // Проверяем результат для текущего урока
    return results[lessonNum] === true;
}

/**
 * Получает номер текущего урока
 */
function getLessonNumber() {
    // Проверяем URL
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    
    if (lessonParam) {
        const match = lessonParam.match(/\d+/);
        if (match) {
            return parseInt(match[0]);
        }
    }
    
    // Проверяем активный элемент в списке уроков
    const activeLesson = document.querySelector('.lesson-item.active, .lesson-list li.active');
    if (activeLesson) {
        const lessonId = activeLesson.getAttribute('data-lesson-id');
        if (lessonId) {
            const match = lessonId.match(/\d+/);
            if (match) {
                return parseInt(match[0]);
            }
        }
    }
    
    // По умолчанию возвращаем 1
    return 1;
}

/**
 * Определяет текущий язык интерфейса
 */
function getCurrentLanguage() {
    // Проверяем язык HTML
    const htmlLang = document.documentElement.lang;
    if (htmlLang === 'ru' || htmlLang === 'kk') {
        return htmlLang;
    }
    
    // Проверяем URL
    const currentUrl = window.location.href.toLowerCase();
    if (currentUrl.includes('_rus')) {
        return 'ru';
    }
    
    // По умолчанию казахский
    return 'kk';
}

// Расширяем прототип для поиска по тексту
if (!Element.prototype.querySelector.toString().includes(':contains')) {
    // Добавляем селектор :contains для поиска элементов по содержимому
    document.addEventListener('DOMContentLoaded', function() {
        jQuery.expr[':'].contains = function(a, i, m) {
            return jQuery(a).text().toLowerCase().indexOf(m[3].toLowerCase()) >= 0;
        };
    });
}
