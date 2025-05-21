/**
 * ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ ВСЕХ ПРОБЛЕМ
 * Этот скрипт гарантированно исправляет все проблемы с проверкой тестов и практических заданий
 */

// Запускаем исправления сразу после загрузки DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Инициализация...");
    initFixes();
    
    // Запускаем повторно через 1 секунду для случаев, когда DOM меняется динамически
    setTimeout(initFixes, 1000);
    
    // И еще раз через 2 секунды для полной уверенности
    setTimeout(initFixes, 2000);
});

/**
 * Инициализирует все исправления
 */
function initFixes() {
    console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Начинаю исправления...");
    
    // Находим все радужные кнопки для тестов
    const testButtons = document.querySelectorAll(".test-btn, .quiz-btn, button[data-action='check-test']");
    console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Найдено ${testButtons.length} кнопок для тестов`);
    
    // Находим все радужные кнопки для практики
    const practiceButtons = document.querySelectorAll(".practice-btn, button[data-action='check-practice'], button:contains('кодті іске қосу'), button:contains('кодты іске қосу'), button:contains('запустить код')");
    console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Найдено ${practiceButtons.length} кнопок для практики`);
    
    // Если кнопок нет, создаем их
    if (testButtons.length === 0 && practiceButtons.length === 0) {
        console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Кнопки не найдены, создаю новые");
        createButtons();
    } else {
        // Иначе перехватываем события существующих кнопок
        console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Перехватываю события существующих кнопок");
        
        // Перехватываем события кнопок тестов
        testButtons.forEach(button => {
            // Удаляем все существующие обработчики
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            // Обновляем текст кнопки
            if (getCurrentLanguage() === "ru") {
                newButton.textContent = "Проверить тест";
            } else {
                newButton.textContent = "Тесті тексеру";
            }
            
            // Добавляем новый обработчик
            newButton.addEventListener("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Находим секцию с тестом
                const testSection = findParentSection(this, "test");
                if (!testSection) {
                    console.error("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Секция с тестом не найдена");
                    return;
                }
                
                // Получаем номер урока
                const lessonNum = getLessonNumber();
                console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Проверка теста для урока ${lessonNum}`);
                
                // Проверяем тест
                checkTest(testSection, lessonNum);
            });
        });
        
        // Перехватываем события кнопок практики
        practiceButtons.forEach(button => {
            // Удаляем все существующие обработчики
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            // Обновляем текст кнопки
            if (getCurrentLanguage() === "ru") {
                newButton.textContent = "Проверить код";
            } else {
                newButton.textContent = "Кодты тексеру";
            }
            
            // Добавляем новый обработчик
            newButton.addEventListener("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Находим секцию с практикой
                const practiceSection = findParentSection(this, "practice");
                if (!practiceSection) {
                    console.error("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Секция с практикой не найдена");
                    return;
                }
                
                // Находим текстовое поле для ввода кода
                const textarea = practiceSection.querySelector("textarea");
                if (!textarea) {
                    console.error("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Текстовое поле не найдено");
                    return;
                }
                
                // Получаем номер урока
                const lessonNum = getLessonNumber();
                console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Проверка практики для урока ${lessonNum}`);
                
                // Проверяем код
                checkPractice(textarea, practiceSection, lessonNum);
            });
        });
    }
    
    // Исправляем кнопку завершения урока
    fixCompletionButton();
    
    console.log("🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Исправления применены!");
}

/**
 * Создает кнопки для тестов и практики
 */
function createButtons() {
    // Находим все секции с тестами
    const testSections = document.querySelectorAll(".test, .quiz, .test-section");
    
    if (testSections.length > 0) {
        console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Найдено ${testSections.length} секций с тестами`);
        
        testSections.forEach((section, index) => {
            // Проверяем, есть ли уже кнопка
            if (section.querySelector(".test-btn, .quiz-btn, button[data-action='check-test']")) {
                return;
            }
            
            // Создаем новую кнопку
            const button = document.createElement("button");
            button.className = "test-btn";
            button.setAttribute("data-action", "check-test");
            button.textContent = getCurrentLanguage() === "ru" ? "Проверить тест" : "Тесті тексеру";
            
            // Добавляем радужный фон
            button.style.background = "linear-gradient(90deg, #2646FA 0%, #E30BBF 100%)";
            button.style.color = "white";
            button.style.border = "none";
            button.style.borderRadius = "4px";
            button.style.padding = "10px 20px";
            button.style.cursor = "pointer";
            button.style.fontWeight = "500";
            button.style.marginTop = "15px";
            
            // Добавляем обработчик клика
            button.addEventListener("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Получаем номер урока
                const lessonNum = getLessonNumber();
                console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Проверка теста для урока ${lessonNum}`);
                
                // Проверяем тест
                checkTest(section, lessonNum);
            });
            
            // Добавляем кнопку в секцию
            section.appendChild(button);
            
            console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Кнопка проверки теста добавлена в секцию ${index + 1}`);
        });
    }
    
    // Находим все секции с практическими заданиями
    const practiceSections = document.querySelectorAll(".practice, .practice-section");
    
    if (practiceSections.length > 0) {
        console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Найдено ${practiceSections.length} секций с практическими заданиями`);
        
        practiceSections.forEach((section, index) => {
            // Находим текстовое поле для ввода кода
            const textarea = section.querySelector("textarea");
            if (!textarea) {
                console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Текстовое поле не найдено в секции ${index + 1}`);
                return;
            }
            
            // Проверяем, есть ли уже кнопка
            if (section.querySelector(".practice-btn, button[data-action='check-practice']")) {
                return;
            }
            
            // Создаем новую кнопку
            const button = document.createElement("button");
            button.className = "practice-btn";
            button.setAttribute("data-action", "check-practice");
            button.textContent = getCurrentLanguage() === "ru" ? "Проверить код" : "Кодты тексеру";
            
            // Добавляем радужный фон
            button.style.background = "linear-gradient(90deg, #2646FA 0%, #E30BBF 100%)";
            button.style.color = "white";
            button.style.border = "none";
            button.style.borderRadius = "4px";
            button.style.padding = "10px 20px";
            button.style.cursor = "pointer";
            button.style.fontWeight = "500";
            button.style.marginTop = "15px";
            
            // Добавляем обработчик клика
            button.addEventListener("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Получаем номер урока
                const lessonNum = getLessonNumber();
                console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Проверка практики для урока ${lessonNum}`);
                
                // Проверяем код
                checkPractice(textarea, section, lessonNum);
            });
            
            // Добавляем кнопку после текстового поля
            textarea.parentNode.insertBefore(button, textarea.nextSibling);
            
            console.log(`🔧 ФИНАЛЬНОЕ ИСПРАВЛЕНИЕ: Кнопка проверки практики добавлена в секцию ${index + 1}`);
        });
    }
}
