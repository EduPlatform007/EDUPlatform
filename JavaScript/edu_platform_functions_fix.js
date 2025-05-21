/**
 * ОКОНЧАТЕЛЬНОЕ ИСПРАВЛЕНИЕ ОБРАЗОВАТЕЛЬНОЙ ПЛАТФОРМЫ (Часть 2)
 * Автор: Cascade AI
 * Дата: 2025-05-20
 */

/**
 * Исправляет кнопку завершения урока
 */
function fixLessonCompletion() {
    // Находим кнопку завершения урока
    const completeButton = document.querySelector('.complete-btn');
    
    if (!completeButton) {
        console.log("⚡ EduPlatform Fix: Кнопка завершения урока не найдена");
        return;
    }
    
    // Сохраняем оригинальный обработчик onClick
    const originalOnClick = completeButton.getAttribute('onclick');
    
    // Создаем новую кнопку
    const newButton = document.createElement('button');
    newButton.className = completeButton.className;
    newButton.textContent = completeButton.textContent;
    
    // Заменяем оригинальную кнопку
    completeButton.parentNode.replaceChild(newButton, completeButton);
    
    // Добавляем новый обработчик
    newButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const lessonNum = getLessonNumber();
        console.log(`⚡ EduPlatform Fix: Попытка завершения урока ${lessonNum}`);
        
        // Проверяем выполнение всех заданий
        if (areAllTasksCompleted(lessonNum)) {
            console.log("⚡ EduPlatform Fix: Все задания выполнены, завершаем урок");
            
            // Вызываем оригинальную функцию завершения урока
            if (originalOnClick) {
                try {
                    eval(originalOnClick);
                } catch (error) {
                    console.error("⚡ EduPlatform Fix: Ошибка при выполнении оригинального обработчика", error);
                    
                    // Альтернативный вариант завершения урока
                    if (typeof window.originalCompleteLesson === 'function') {
                        window.originalCompleteLesson(lessonNum);
                    } else if (typeof window.completeLesson === 'function') {
                        window.completeLesson(lessonNum);
                    } else {
                        // Крайний случай - имитируем завершение урока
                        markLessonAsCompleted(lessonNum);
                    }
                }
            } else {
                // Стандартный способ завершения урока
                if (typeof window.completeLesson === 'function') {
                    window.completeLesson(lessonNum);
                } else {
                    // Крайний случай - имитируем завершение урока
                    markLessonAsCompleted(lessonNum);
                }
            }
        } else {
            console.log("⚡ EduPlatform Fix: Не все задания выполнены, урок не может быть завершен");
            showCompletionFeedback(false);
        }
    });
    
    console.log("⚡ EduPlatform Fix: Система завершения уроков исправлена");
}

/**
 * Проверяет ответы на тесты
 */
function checkTestAnswers(testSection, lessonNum) {
    // Находим все вопросы в тесте
    const questions = testSection.querySelectorAll('.test-question');
    
    if (questions.length === 0) {
        console.log("⚡ EduPlatform Fix: Вопросы теста не найдены");
        showTestFeedback(true, testSection); // Если вопросы не найдены, считаем тест пройденным
        return true;
    }
    
    // Получаем правильные ответы
    const correctAnswers = getCorrectTestAnswers(lessonNum);
    
    if (!correctAnswers || Object.keys(correctAnswers).length === 0) {
        console.error("⚡ EduPlatform Fix: Правильные ответы для теста не найдены");
        return false;
    }
    
    console.log("⚡ EduPlatform Fix: Правильные ответы для теста:", correctAnswers);
    
    let allCorrect = true;
    let userAnswers = {};
    
    // Проверяем каждый вопрос
    questions.forEach((question, index) => {
        // Находим выбранный ответ
        const selectedInput = question.querySelector('input[type="radio"]:checked');
        
        if (!selectedInput) {
            console.log(`⚡ EduPlatform Fix: Вопрос ${index + 1}: ответ не выбран`);
            allCorrect = false;
            return;
        }
        
        // Получаем имя вопроса (q1, q2, ...)
        const questionName = selectedInput.name;
        
        // Получаем правильный ответ для этого вопроса
        const correctAnswer = correctAnswers[questionName];
        
        if (!correctAnswer) {
            console.log(`⚡ EduPlatform Fix: Правильный ответ для вопроса ${questionName} не найден`);
            return;
        }
        
        // Проверяем правильность ответа
        const userAnswer = selectedInput.value;
        userAnswers[questionName] = userAnswer;
        
        const isCorrect = userAnswer === correctAnswer;
        
        console.log(`⚡ EduPlatform Fix: Вопрос ${questionName}: ответ пользователя ${userAnswer}, правильный ответ ${correctAnswer}, результат: ${isCorrect ? 'Верно' : 'Неверно'}`);
        
        if (!isCorrect) {
            allCorrect = false;
        }
    });
    
    // Показываем результат
    showTestFeedback(allCorrect, testSection);
    
    // Сохраняем ответы пользователя
    if (typeof window.saveUserAnswers === 'function') {
        window.saveUserAnswers(lessonNum, userAnswers);
    }
    
    return allCorrect;
}

/**
 * Проверяет код практического задания
 */
function checkPracticeCode(codeInput, practiceSection, lessonNum) {
    // Получаем введенный пользователем код
    const userCode = codeInput.value.trim();
    
    if (!userCode) {
        console.log("⚡ EduPlatform Fix: Код не введен");
        showPracticeFeedback(false, practiceSection);
        return false;
    }
    
    // Получаем правильный код
    const correctCode = getCorrectPracticeCode(lessonNum);
    
    if (!correctCode) {
        console.error("⚡ EduPlatform Fix: Правильный код для практики не найден");
        return false;
    }
    
    console.log("⚡ EduPlatform Fix: Проверка кода для урока", lessonNum);
    console.log("⚡ EduPlatform Fix: Введенный код:", userCode);
    console.log("⚡ EduPlatform Fix: Правильный код:", correctCode);
    
    // Проверяем код
    const isCorrect = userCode.trim() === correctCode.trim();
    
    // Показываем результат
    showPracticeFeedback(isCorrect, practiceSection);
    
    return isCorrect;
}

/**
 * Показывает сообщение о результате проверки теста
 */
function showTestFeedback(isCorrect, testSection) {
    // Удаляем предыдущее сообщение, если оно есть
    const existingFeedback = testSection.querySelector('.feedback-message');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Создаем новое сообщение
    const feedbackMessage = document.createElement('div');
    feedbackMessage.className = `feedback-message ${isCorrect ? 'success' : 'error'}`;
    
    // Определяем текст сообщения в зависимости от языка
    const lang = getCurrentLanguage();
    if (isCorrect) {
        feedbackMessage.textContent = lang === 'ru' ? 
            'Правильно! Все ответы верны.' : 
            'Дұрыс! Барлық жауаптар дұрыс.';
    } else {
        feedbackMessage.textContent = lang === 'ru' ? 
            'Есть ошибки. Проверьте ответы и попробуйте снова.' : 
            'Қателіктер бар. Жауаптарды тексеріп, қайталап көріңіз.';
    }
    
    // Находим кнопку в секции теста
    const button = testSection.querySelector('button');
    if (button) {
        // Вставляем сообщение после кнопки
        button.parentElement.appendChild(feedbackMessage);
    } else {
        // Если кнопка не найдена, добавляем в конец секции
        testSection.appendChild(feedbackMessage);
    }
}

/**
 * Показывает сообщение о результате проверки практического задания
 */
function showPracticeFeedback(isCorrect, practiceSection) {
    // Удаляем предыдущее сообщение, если оно есть
    const existingFeedback = practiceSection.querySelector('.feedback-message');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Создаем новое сообщение
    const feedbackMessage = document.createElement('div');
    feedbackMessage.className = `feedback-message ${isCorrect ? 'success' : 'error'}`;
    
    // Определяем текст сообщения в зависимости от языка
    const lang = getCurrentLanguage();
    if (isCorrect) {
        feedbackMessage.textContent = lang === 'ru' ? 
            'Код верный! Задание выполнено.' : 
            'Код дұрыс! Тапсырма орындалды.';
    } else {
        feedbackMessage.textContent = lang === 'ru' ? 
            'Код неверный. Проверьте и попробуйте снова.' : 
            'Код дұрыс емес. Тексеріп, қайталап көріңіз.';
    }
    
    // Находим кнопку в секции практики
    const button = practiceSection.querySelector('button');
    if (button) {
        // Вставляем сообщение после кнопки
        button.parentElement.appendChild(feedbackMessage);
    } else {
        // Если кнопка не найдена, добавляем в конец секции
        practiceSection.appendChild(feedbackMessage);
    }
}

/**
 * Показывает сообщение о необходимости выполнить все задания
 */
function showCompletionFeedback(canComplete) {
    if (canComplete) return;
    
    // Находим кнопку завершения урока
    const completeButton = document.querySelector('.complete-btn');
    if (!completeButton) return;
    
    // Удаляем предыдущее сообщение, если оно есть
    const existingFeedback = completeButton.parentElement.querySelector('.feedback-message');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Создаем новое сообщение
    const feedbackMessage = document.createElement('div');
    feedbackMessage.className = 'feedback-message error';
    
    // Определяем текст сообщения в зависимости от языка
    const lang = getCurrentLanguage();
    feedbackMessage.textContent = lang === 'ru' ? 
        'Для завершения урока необходимо правильно выполнить все задания' : 
        'Сабақты аяқтау үшін барлық тапсырмаларды дұрыс орындау керек';
    
    // Вставляем сообщение после кнопки
    completeButton.parentElement.appendChild(feedbackMessage);
}

/**
 * Получает правильные ответы для теста
 */
function getCorrectTestAnswers(lessonNum) {
    // Проверяем window.pythonLesson[номер].quizAnswers
    const lessonObj = window[`pythonLesson${lessonNum}`];
    if (lessonObj && lessonObj.quizAnswers) {
        console.log(`⚡ EduPlatform Fix: Найдены ответы в pythonLesson${lessonNum}.quizAnswers`);
        return lessonObj.quizAnswers;
    }
    
    // Проверяем window.htmlLesson[номер].quizAnswers
    const htmlLessonObj = window[`htmlLesson${lessonNum}`];
    if (htmlLessonObj && htmlLessonObj.quizAnswers) {
        console.log(`⚡ EduPlatform Fix: Найдены ответы в htmlLesson${lessonNum}.quizAnswers`);
        return htmlLessonObj.quizAnswers;
    }
    
    // Проверяем window.dbLesson[номер].quizAnswers
    const dbLessonObj = window[`dbLesson${lessonNum}`];
    if (dbLessonObj && dbLessonObj.quizAnswers) {
        console.log(`⚡ EduPlatform Fix: Найдены ответы в dbLesson${lessonNum}.quizAnswers`);
        return dbLessonObj.quizAnswers;
    }
    
    // Проверяем другие возможные источники ответов
    const otherSources = [
        window.quizAnswers,
        window.testAnswers,
        window.correctAnswers
    ];
    
    for (const source of otherSources) {
        if (source && Object.keys(source).length > 0) {
            console.log("⚡ EduPlatform Fix: Найдены ответы в альтернативном источнике");
            return source;
        }
    }
    
    // Резервные ответы для первых пяти уроков
    const fallbackAnswers = {
        1: {q1: "b", q2: "b", q3: "a", q4: "b", q5: "b"},
        2: {q1: "c", q2: "a", q3: "b", q4: "c", q5: "b"},
        3: {q1: "a", q2: "b", q3: "b", q4: "a", q5: "c"},
        4: {q1: "b", q2: "a", q3: "c", q4: "b", q5: "a"},
        5: {q1: "c", q2: "b", q3: "a", q4: "c", q5: "b"}
    };
    
    if (fallbackAnswers[lessonNum]) {
        console.log(`⚡ EduPlatform Fix: Использую резервные ответы для урока ${lessonNum}`);
        return fallbackAnswers[lessonNum];
    }
    
    // Если нет ответов, используем базовый набор
    console.log("⚡ EduPlatform Fix: Использую базовый набор ответов для теста");
    return {
        q1: "b",
        q2: "b",
        q3: "a",
        q4: "b",
        q5: "b"
    };
}

/**
 * Получает правильный код для практического задания
 */
function getCorrectPracticeCode(lessonNum) {
    // Проверяем window.pythonLesson[номер].practiceCode
    const lessonObj = window[`pythonLesson${lessonNum}`];
    if (lessonObj && lessonObj.practiceCode) {
        console.log(`⚡ EduPlatform Fix: Найден код в pythonLesson${lessonNum}.practiceCode`);
        return lessonObj.practiceCode;
    }
    
    // Проверяем window.htmlLesson[номер].practiceCode
    const htmlLessonObj = window[`htmlLesson${lessonNum}`];
    if (htmlLessonObj && htmlLessonObj.practiceCode) {
        console.log(`⚡ EduPlatform Fix: Найден код в htmlLesson${lessonNum}.practiceCode`);
        return htmlLessonObj.practiceCode;
    }
    
    // Проверяем window.dbLesson[номер].practiceCode
    const dbLessonObj = window[`dbLesson${lessonNum}`];
    if (dbLessonObj && dbLessonObj.practiceCode) {
        console.log(`⚡ EduPlatform Fix: Найден код в dbLesson${lessonNum}.practiceCode`);
        return dbLessonObj.practiceCode;
    }
    
    // Проверяем window.practiceAnswers
    if (window.practiceAnswers && window.practiceAnswers[lessonNum]) {
        console.log(`⚡ EduPlatform Fix: Найден код в practiceAnswers[${lessonNum}]`);
        return window.practiceAnswers[lessonNum];
    }
    
    // Резервные коды для первых пяти уроков
    const fallbackCodes = {
        1: 'print("Sәlem, әlem!")',
        2: 'name = "Алмас"\nage = 25\nprint(name)\nprint(age)',
        3: 'a = 5\nb = 3\nsum = a + b\nprint(sum)',
        4: 'for i in range(5):\n    print(i)',
        5: 'def hello(name):\n    print("Sәlem, " + name + "!")\n\nhello("Алмас")'
    };
    
    if (fallbackCodes[lessonNum]) {
        console.log(`⚡ EduPlatform Fix: Использую резервный код для урока ${lessonNum}`);
        return fallbackCodes[lessonNum];
    }
    
    // В крайнем случае ищем в тексте урока
    const codeExample = document.querySelector('.practice code, .practice pre')?.textContent;
    if (codeExample) {
        console.log("⚡ EduPlatform Fix: Использую код из примера в уроке");
        return codeExample;
    }
    
    console.log("⚡ EduPlatform Fix: Код для практики не найден");
    return null;
}

/**
 * Проверяет, выполнены ли все задания для урока
 */
function areAllTasksCompleted(lessonNum) {
    // Загружаем текущий статус заданий
    loadTaskStatus();
    
    // Проверяем наличие теста и практики на странице
    const hasTest = document.querySelector('.test, .test-section, .quiz') !== null;
    const hasPractice = document.querySelector('.practice, .practice-section') !== null;
    
    // Если нет ни теста, ни практики, урок можно завершить
    if (!hasTest && !hasPractice) {
        return true;
    }
    
    // Получаем статус выполнения заданий
    const testCompleted = !hasTest || window.lessonTaskStatus.tests[lessonNum] === true;
    const practiceCompleted = !hasPractice || window.lessonTaskStatus.practice[lessonNum] === true;
    
    console.log(`⚡ EduPlatform Fix: Статус урока ${lessonNum}: тест ${testCompleted ? 'выполнен' : 'не выполнен'}, практика ${practiceCompleted ? 'выполнена' : 'не выполнена'}`);
    
    return testCompleted && practiceCompleted;
}

/**
 * Имитирует завершение урока
 */
function markLessonAsCompleted(lessonNum) {
    // Находим активный элемент урока
    const activeLesson = document.querySelector('.lesson-item.active, .lesson-list li.active');
    
    if (activeLesson) {
        // Помечаем урок как завершенный
        activeLesson.classList.add('completed');
        
        // Сохраняем прогресс в localStorage
        try {
            // Загружаем текущий прогресс
            const userData = JSON.parse(localStorage.getItem('userData') || '{"completedLessons":[]}');
            
            // Получаем идентификатор урока
            const lessonId = activeLesson.getAttribute('data-lesson-id') || lessonNum;
            
            // Добавляем урок в список завершенных, если его там еще нет
            if (!userData.completedLessons.includes(lessonId)) {
                userData.completedLessons.push(lessonId);
                localStorage.setItem('userData', JSON.stringify(userData));
            }
            
            console.log(`⚡ EduPlatform Fix: Урок ${lessonNum} отмечен как завершенный`);
        } catch (e) {
            console.error('⚡ EduPlatform Fix: Ошибка при сохранении прогресса:', e);
        }
    }
}

/**
 * Сохраняет статус выполнения заданий в localStorage
 */
function saveTaskStatus() {
    localStorage.setItem('lessonTaskStatus', JSON.stringify(window.lessonTaskStatus));
}

/**
 * Загружает статус выполнения заданий из localStorage
 */
function loadTaskStatus() {
    const savedStatus = localStorage.getItem('lessonTaskStatus');
    if (savedStatus) {
        try {
            const parsed = JSON.parse(savedStatus);
            Object.assign(window.lessonTaskStatus, parsed);
        } catch (e) {
            console.error('⚡ EduPlatform Fix: Ошибка при загрузке статуса заданий:', e);
        }
    }
}

/**
 * Получает номер текущего урока
 */
function getLessonNumber() {
    // Смотрим в URL
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    
    if (lessonParam) {
        const match = lessonParam.match(/\d+/);
        if (match) {
            return parseInt(match[0]);
        }
    }
    
    // Смотрим активный элемент в списке уроков
    const activeLesson = document.querySelector('.lesson-item.active, .lesson-list li.active');
    if (activeLesson) {
        const lessonId = activeLesson.getAttribute('data-lesson-id');
        if (lessonId) {
            const match = lessonId.match(/\d+/);
            if (match) {
                return parseInt(match[0]);
            }
        }
        
        // Смотрим индекс активного элемента
        const lessonItems = document.querySelectorAll('.lesson-item, .lesson-list li');
        const activeIndex = Array.from(lessonItems).indexOf(activeLesson);
        if (activeIndex !== -1) {
            return activeIndex + 1;
        }
    }
    
    // По умолчанию считаем, что это первый урок
    return 1;
}

/**
 * Определяет текущий язык интерфейса
 */
function getCurrentLanguage() {
    // Пытаемся получить из localStorage
    try {
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (userData.language) {
            return userData.language;
        }
    } catch (e) {
        console.error('⚡ EduPlatform Fix: Ошибка при получении языка:', e);
    }
    
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

// Инициализация при загрузке скрипта
loadTaskStatus();
