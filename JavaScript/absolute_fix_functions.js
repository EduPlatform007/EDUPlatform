/**
 * АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ ВСЕХ ПРОБЛЕМ - ЧАСТЬ 2
 * Функции проверки тестов и практических заданий
 */

/**
 * Исправляет кнопку завершения урока
 */
function fixCompletionButton() {
    // Находим кнопку завершения урока
    const completeButton = document.querySelector(".complete-btn");
    if (!completeButton) {
        console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Кнопка завершения урока не найдена");
        return;
    }
    
    console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Кнопка завершения урока найдена");
    
    // Сохраняем оригинальный обработчик
    const originalOnClick = completeButton.getAttribute("onclick");
    
    // Удаляем оригинальный обработчик
    completeButton.removeAttribute("onclick");
    
    // Добавляем новый обработчик
    completeButton.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Получаем номер урока
        const lessonNum = getLessonNumber();
        console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Попытка завершения урока ${lessonNum}`);
        
        // Проверяем, выполнены ли все задания
        const testCompleted = isTestCompleted(lessonNum);
        const practiceCompleted = isPracticeCompleted(lessonNum);
        
        console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Тест выполнен: ${testCompleted}, Практика выполнена: ${practiceCompleted}`);
        
        if (testCompleted && practiceCompleted) {
            // Если все задания выполнены, завершаем урок
            console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Все задания выполнены, завершаем урок");
            
            // Вызываем оригинальную функцию завершения урока
            if (originalOnClick) {
                eval(originalOnClick);
            } else if (typeof window.completeLesson === "function") {
                window.completeLesson(lessonNum);
            } else {
                // Альтернативный способ завершения урока
                markLessonAsCompleted(lessonNum);
            }
        } else {
            // Если не все задания выполнены, показываем сообщение
            console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Не все задания выполнены, показываем сообщение");
            showCompletionMessage(false);
        }
    };
    
    console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Обработчик кнопки завершения урока установлен");
}

/**
 * Проверяет тест
 */
function checkTest(testSection, lessonNum) {
    // Находим все вопросы
    const questions = testSection.querySelectorAll(".test-question");
    if (questions.length === 0) {
        console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Вопросы не найдены");
        return true; // Если вопросов нет, считаем тест пройденным
    }
    
    // Получаем правильные ответы
    const correctAnswers = getCorrectTestAnswers(lessonNum);
    if (!correctAnswers) {
        console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Ответы для теста не найдены");
        return false;
    }
    
    console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Правильные ответы:", correctAnswers);
    
    // Проверяем ответы
    let allCorrect = true;
    
    questions.forEach((question, index) => {
        // Находим выбранный ответ
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (!selectedOption) {
            console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Вопрос ${index + 1}: ответ не выбран`);
            allCorrect = false;
            return;
        }
        
        // Получаем имя вопроса (q1, q2, ...)
        const questionName = selectedOption.getAttribute("name");
        
        // Получаем правильный ответ
        const correctAnswer = correctAnswers[questionName];
        if (!correctAnswer) {
            console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Ответ для вопроса ${questionName} не найден`);
            return;
        }
        
        // Проверяем ответ
        const userAnswer = selectedOption.value;
        const isCorrect = userAnswer === correctAnswer;
        
        console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Вопрос ${questionName}: ответ пользователя ${userAnswer}, правильный ответ ${correctAnswer}, результат: ${isCorrect ? "верно" : "неверно"}`);
        
        if (!isCorrect) {
            allCorrect = false;
        }
    });
    
    // Показываем результат
    showTestResult(testSection, allCorrect);
    
    // Сохраняем результат
    saveTestResult(lessonNum, allCorrect);
    
    return allCorrect;
}

/**
 * Проверяет практическое задание
 */
function checkPractice(textarea, practiceSection, lessonNum) {
    // Получаем введенный код
    const userCode = textarea.value.trim();
    if (!userCode) {
        console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Код не введен");
        showPracticeResult(practiceSection, false);
        return false;
    }
    
    // Получаем правильный код
    const correctCode = getCorrectPracticeCode(lessonNum);
    if (!correctCode) {
        console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Правильный код не найден");
        return false;
    }
    
    console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Правильный код:", correctCode);
    console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Код пользователя:", userCode);
    
    // Проверяем код
    const isCorrect = userCode.trim() === correctCode.trim();
    
    // Показываем результат
    showPracticeResult(practiceSection, isCorrect);
    
    // Сохраняем результат
    savePracticeResult(lessonNum, isCorrect);
    
    return isCorrect;
}

/**
 * Показывает результат проверки теста
 */
function showTestResult(testSection, isCorrect) {
    // Удаляем предыдущее сообщение
    const existingMessage = testSection.querySelector(".feedback-message");
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Создаем новое сообщение
    const message = document.createElement("div");
    message.className = `feedback-message ${isCorrect ? "success" : "error"}`;
    
    // Устанавливаем текст сообщения
    if (isCorrect) {
        message.textContent = getCurrentLanguage() === "ru" ? 
            "Правильно! Все ответы верны." : 
            "Дұрыс! Барлық жауаптар дұрыс.";
    } else {
        message.textContent = getCurrentLanguage() === "ru" ? 
            "Есть ошибки. Проверьте ответы и попробуйте снова." : 
            "Қателіктер бар. Жауаптарды тексеріп, қайталап көріңіз.";
    }
    
    // Добавляем сообщение в секцию
    const button = testSection.querySelector(".test-check-btn");
    if (button && button.parentNode) {
        button.parentNode.appendChild(message);
    } else {
        testSection.appendChild(message);
    }
    
    console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Показано сообщение о результате теста: ${isCorrect ? "верно" : "неверно"}`);
}

/**
 * Показывает результат проверки практики
 */
function showPracticeResult(practiceSection, isCorrect) {
    // Удаляем предыдущее сообщение
    const existingMessage = practiceSection.querySelector(".feedback-message");
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Создаем новое сообщение
    const message = document.createElement("div");
    message.className = `feedback-message ${isCorrect ? "success" : "error"}`;
    
    // Устанавливаем текст сообщения
    if (isCorrect) {
        message.textContent = getCurrentLanguage() === "ru" ? 
            "Код верный! Задание выполнено." : 
            "Код дұрыс! Тапсырма орындалды.";
    } else {
        message.textContent = getCurrentLanguage() === "ru" ? 
            "Код неверный. Проверьте и попробуйте снова." : 
            "Код дұрыс емес. Тексеріп, қайталап көріңіз.";
    }
    
    // Добавляем сообщение в секцию
    const button = practiceSection.querySelector(".practice-check-btn");
    if (button && button.parentNode) {
        button.parentNode.appendChild(message);
    } else {
        practiceSection.appendChild(message);
    }
    
    console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Показано сообщение о результате практики: ${isCorrect ? "верно" : "неверно"}`);
}

/**
 * Показывает сообщение о необходимости выполнить все задания
 */
function showCompletionMessage(canComplete) {
    if (canComplete) return;
    
    // Находим кнопку завершения урока
    const completeButton = document.querySelector(".complete-btn");
    if (!completeButton) return;
    
    // Удаляем предыдущее сообщение
    const existingMessage = completeButton.parentNode.querySelector(".feedback-message");
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Создаем новое сообщение
    const message = document.createElement("div");
    message.className = "feedback-message error";
    message.textContent = getCurrentLanguage() === "ru" ? 
        "Для завершения урока необходимо правильно выполнить все задания" : 
        "Сабақты аяқтау үшін барлық тапсырмаларды дұрыс орындау керек";
    
    // Добавляем сообщение после кнопки
    completeButton.parentNode.appendChild(message);
    
    console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Показано сообщение о необходимости выполнить все задания");
}

/**
 * Получает правильные ответы для теста
 */
function getCorrectTestAnswers(lessonNum) {
    // Проверяем разные источники ответов
    
    // 1. Проверяем window.pythonLesson[номер].quizAnswers
    if (window[`pythonLesson${lessonNum}`] && window[`pythonLesson${lessonNum}`].quizAnswers) {
        console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Найдены ответы в pythonLesson${lessonNum}.quizAnswers`);
        return window[`pythonLesson${lessonNum}`].quizAnswers;
    }
    
    // 2. Проверяем window.quizAnswers
    if (window.quizAnswers) {
        console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Найдены ответы в window.quizAnswers");
        return window.quizAnswers;
    }
    
    // 3. Используем фиксированные ответы для первых уроков
    const fallbackAnswers = {
        1: { q1: "b", q2: "b", q3: "a", q4: "b", q5: "b" },
        2: { q1: "c", q2: "a", q3: "b", q4: "c", q5: "b" },
        3: { q1: "a", q2: "b", q3: "b", q4: "a", q5: "c" }
    };
    
    if (fallbackAnswers[lessonNum]) {
        console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Используем резервные ответы для урока ${lessonNum}`);
        return fallbackAnswers[lessonNum];
    }
    
    // Если ничего не найдено, возвращаем базовые ответы
    console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Используем базовые ответы для теста");
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
            console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Найден код в practiceAnswers[${lessonNum}]`);
            return window.practiceAnswers[lessonNum];
        }
        
        // Проверяем строковый ключ (например, "1-сабақ")
        const lessonKey = `${lessonNum}-сабақ`;
        if (window.practiceAnswers[lessonKey]) {
            console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Найден код в practiceAnswers["${lessonKey}"]`);
            return window.practiceAnswers[lessonKey];
        }
    }
    
    // 2. Проверяем window.pythonLesson[номер].practiceCode
    if (window[`pythonLesson${lessonNum}`] && window[`pythonLesson${lessonNum}`].practiceCode) {
        console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Найден код в pythonLesson${lessonNum}.practiceCode`);
        return window[`pythonLesson${lessonNum}`].practiceCode;
    }
    
    // 3. Используем фиксированные ответы для первых уроков
    const fallbackCodes = {
        1: 'print("Sәlem, әlem!")',
        2: 'x = 10\ny = 20\nprint(x + y)',
        3: 'a = 5\nb = 3\nsum = a + b\nprint(sum)'
    };
    
    if (fallbackCodes[lessonNum]) {
        console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Используем резервный код для урока ${lessonNum}`);
        return fallbackCodes[lessonNum];
    }
    
    // Если ничего не найдено, пытаемся найти код в примере
    const codeExample = document.querySelector(".practice code, .practice pre")?.textContent;
    if (codeExample) {
        console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Используем код из примера");
        return codeExample;
    }
    
    // Если все способы не сработали, возвращаем базовый код
    console.log("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Используем базовый код");
    return 'print("Hello World")';
}

/**
 * Сохраняет результат проверки теста
 */
function saveTestResult(lessonNum, isCorrect) {
    // Загружаем текущие результаты
    const results = JSON.parse(localStorage.getItem("testResults") || "{}");
    
    // Сохраняем результат для текущего урока
    results[lessonNum] = isCorrect;
    
    // Сохраняем обновленные результаты
    localStorage.setItem("testResults", JSON.stringify(results));
    
    console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Результат теста для урока ${lessonNum} сохранен: ${isCorrect}`);
}

/**
 * Сохраняет результат проверки практики
 */
function savePracticeResult(lessonNum, isCorrect) {
    // Загружаем текущие результаты
    const results = JSON.parse(localStorage.getItem("practiceResults") || "{}");
    
    // Сохраняем результат для текущего урока
    results[lessonNum] = isCorrect;
    
    // Сохраняем обновленные результаты
    localStorage.setItem("practiceResults", JSON.stringify(results));
    
    console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Результат практики для урока ${lessonNum} сохранен: ${isCorrect}`);
}

/**
 * Проверяет, выполнен ли тест
 */
function isTestCompleted(lessonNum) {
    // Проверяем, есть ли тест на странице
    const testSection = document.querySelector(".test, .quiz, .test-section");
    if (!testSection) {
        return true; // Если теста нет, считаем его выполненным
    }
    
    // Загружаем результаты тестов
    const results = JSON.parse(localStorage.getItem("testResults") || "{}");
    
    // Проверяем результат для текущего урока
    return results[lessonNum] === true;
}

/**
 * Проверяет, выполнено ли практическое задание
 */
function isPracticeCompleted(lessonNum) {
    // Проверяем, есть ли практика на странице
    const practiceSection = document.querySelector(".practice, .practice-section");
    if (!practiceSection) {
        return true; // Если практики нет, считаем ее выполненной
    }
    
    // Загружаем результаты практики
    const results = JSON.parse(localStorage.getItem("practiceResults") || "{}");
    
    // Проверяем результат для текущего урока
    return results[lessonNum] === true;
}

/**
 * Альтернативный способ завершения урока
 */
function markLessonAsCompleted(lessonNum) {
    // Находим активный элемент урока
    const activeLesson = document.querySelector(".lesson-item.active, .lesson-list li.active");
    if (!activeLesson) return;
    
    // Помечаем урок как завершенный
    activeLesson.classList.add("completed");
    
    // Сохраняем прогресс в localStorage
    try {
        const userData = JSON.parse(localStorage.getItem("userData") || '{"completedLessons":[]}');
        const lessonId = activeLesson.getAttribute("data-lesson-id") || lessonNum;
        
        if (!userData.completedLessons.includes(lessonId)) {
            userData.completedLessons.push(lessonId);
            localStorage.setItem("userData", JSON.stringify(userData));
        }
    } catch (e) {
        console.error("🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Ошибка при сохранении прогресса:", e);
    }
    
    console.log(`🛠️ АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ: Урок ${lessonNum} отмечен как завершенный`);
}

/**
 * Получает номер текущего урока
 */
function getLessonNumber() {
    // Проверяем URL
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get("lesson");
    
    if (lessonParam) {
        const match = lessonParam.match(/\d+/);
        if (match) {
            return parseInt(match[0]);
        }
    }
    
    // Проверяем активный элемент в списке уроков
    const activeLesson = document.querySelector(".lesson-item.active, .lesson-list li.active");
    if (activeLesson) {
        const lessonId = activeLesson.getAttribute("data-lesson-id");
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
    if (htmlLang === "ru" || htmlLang === "kk") {
        return htmlLang;
    }
    
    // Проверяем URL
    const currentUrl = window.location.href.toLowerCase();
    if (currentUrl.includes("_rus")) {
        return "ru";
    }
    
    // По умолчанию казахский
    return "kk";
}
