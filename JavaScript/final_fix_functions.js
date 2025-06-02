/**
 * ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ ВСЕХ ПРОБЛЕМ - ЧАСТЬ 2
 * Функции проверки тестов и практических заданий
 */

/**
 * Исправляет кнопку завершения урока
 */
function fixCompletionButton() {
    // Находим кнопку завершения урока
    const completeButton = document.querySelector(".complete-btn");
    if (!completeButton) {
        console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Кнопка завершения урока не найдена");
        return;
    }
    
    console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Кнопка завершения урока найдена");
    
    // Сохраняем оригинальный обработчик
    const originalOnClick = completeButton.getAttribute("onclick");
    
    // Удаляем оригинальный обработчик
    completeButton.removeAttribute("onclick");
    
    // Добавляем новый обработчик
    completeButton.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Получаем номер урока
        const lessonNum = getLessonNumber();
        console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Попытка завершения урока ${lessonNum}`);
        
        // Проверяем, выполнены ли все задания
        const testCompleted = isTestCompleted(lessonNum);
        const practiceCompleted = isPracticeCompleted(lessonNum);
        
        console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Тест выполнен: ${testCompleted}, Практика выполнена: ${practiceCompleted}`);
        
        if (testCompleted && practiceCompleted) {
            // Если все задания выполнены, завершаем урок
            console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Все задания выполнены, завершаем урок");
            
            // Вызываем оригинальную функцию завершения урока
            if (originalOnClick) {
                eval(originalOnClick);
            } else if (typeof window.completeLesson === "function") {
                window.completeLesson(lessonNum);
            } else {
                // Альтернативный способ завершения урока
            }
        } else {
            // Если не все задания выполнены, показываем сообщение
            console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Не все задания выполнены, показываем сообщение");
            showCompletionMessage(false);
        }
    });
    
    console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Обработчик кнопки завершения урока установлен");
}

/**
 * Нормализует код для сравнения
 */
function normalizeCode(code) {
    // Удаляем лишние пробелы и переносы строк
    return code.replace(/\s+/g, " ").trim();
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
    
    // Стилизуем сообщение
    message.style.marginTop = "15px";
    message.style.padding = "12px";
    message.style.borderRadius = "6px";
    message.style.fontWeight = "500";
    message.style.animation = "fadeIn 0.3s ease-out forwards";
    
    if (isCorrect) {
        message.style.backgroundColor = "rgba(76, 175, 80, 0.1)";
        message.style.border = "1px solid #4CAF50";
        message.style.color = "#2E7D32";
    } else {
        message.style.backgroundColor = "rgba(244, 67, 54, 0.1)";
        message.style.border = "1px solid #F44336";
        message.style.color = "#C62828";
    }
    
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
    const button = testSection.querySelector(".test-btn, .quiz-btn, button[data-action='check-test']");
    if (button && button.parentNode) {
        button.parentNode.appendChild(message);
    } else {
        testSection.appendChild(message);
    }
    
    console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Показано сообщение о результате теста: ${isCorrect ? "верно" : "неверно"}`);
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
    
    // Стилизуем сообщение
    message.style.marginTop = "15px";
    message.style.padding = "12px";
    message.style.borderRadius = "6px";
    message.style.fontWeight = "500";
    message.style.animation = "fadeIn 0.3s ease-out forwards";
    
    if (isCorrect) {
        message.style.backgroundColor = "rgba(76, 175, 80, 0.1)";
        message.style.border = "1px solid #4CAF50";
        message.style.color = "#2E7D32";
    } else {
        message.style.backgroundColor = "rgba(244, 67, 54, 0.1)";
        message.style.border = "1px solid #F44336";
        message.style.color = "#C62828";
    }
    
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
    const button = practiceSection.querySelector(".practice-btn, button[data-action='check-practice']");
    if (button && button.parentNode) {
        button.parentNode.appendChild(message);
    } else {
        practiceSection.appendChild(message);
    }
    
    console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Показано сообщение о результате практики: ${isCorrect ? "верно" : "неверно"}`);
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
    
    // Стилизуем сообщение
    message.style.marginTop = "15px";
    message.style.padding = "12px";
    message.style.borderRadius = "6px";
    message.style.fontWeight = "500";
    message.style.backgroundColor = "rgba(244, 67, 54, 0.1)";
    message.style.border = "1px solid #F44336";
    message.style.color = "#C62828";
    
    message.textContent = getCurrentLanguage() === "ru" ? 
        "Для завершения урока необходимо правильно выполнить все задания" : 
        "Сабақты аяқтау үшін барлық тапсырмаларды дұрыс орындау керек";
    
    // Добавляем сообщение после кнопки
    completeButton.parentNode.appendChild(message);
    
    console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Показано сообщение о необходимости выполнить все задания");
}
