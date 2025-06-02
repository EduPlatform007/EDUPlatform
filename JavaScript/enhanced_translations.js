/**
 * Улучшенная система переводов для EduPlatform
 * Обеспечивает корректное переключение языка на всех страницах
 */

// Делаем функцию доступной глобально до загрузки DOM
window.switchLanguage = function(lang) {
    console.log(`🌎 Переключение языка: ${lang}`);
    
    // Устанавливаем атрибут lang для HTML
    document.documentElement.setAttribute('lang', lang);
    
    // Сохраняем выбранный язык в localStorage
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    userData.language = lang;
    localStorage.setItem('currentUser', JSON.stringify(userData));

    // Применяем переводы
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        applyTranslationsNow(lang);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            applyTranslationsNow(lang);
        });
    }
    
    // Показываем уведомление о смене языка
    showLanguageChangeNotification(lang);
};
// Функция для глубокого сканирования всех элементов страницы и их перевода
function deepScanAndTranslate(lang) {
    // Получаем все текстовые узлы страницы
    const textNodes = [];
    const walker = document.createTreeWalker(
        document.body, 
        NodeFilter.SHOW_TEXT, 
        null, 
        false
    );

    // Собираем все текстовые узлы
    let node;
    while(node = walker.nextNode()) {
        if (node.nodeValue.trim() !== '') {
            textNodes.push(node);
        }
    }
    
    // Переводим все элементы с data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type !== 'button' && element.type !== 'submit') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                } else {
                    element.value = translations[lang][key];
                }
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}
// Функция для отображения уведомления о смене языка
function showLanguageChangeNotification(lang) {
    const message = lang === 'kk' ? 'Тіл қазақшаға ауыстырылды' : 'Язык изменен на русский';
    
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = 'language-notification';
    notification.innerHTML = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 15px';
    notification.style.backgroundColor = 'rgba(0,0,0,0.8)';
    notification.style.color = '#fff';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '9999';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.transition = 'opacity 0.5s ease';
    
    // Добавляем уведомление на страницу
    document.body.appendChild(notification);
    
    // Удаляем уведомление через 3 секунды
    setTimeout(function() {
        notification.style.opacity = '0';
        setTimeout(function() {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 2500);
}

// Функция для применения переводов немедленно
function applyTranslationsNow(lang) {
    // Применяем переводы
    applyTranslationsToPage(lang);
    
    // Обновляем все селекторы
    const langSelects = document.querySelectorAll('#select, .language-selector');
    langSelects.forEach(select => {
        if (select.tagName === 'SELECT') {
            select.value = lang === 'kk' ? 'Қазақша' : 'Русский';
        }
    });
    
    // Если на странице есть специфические функции перевода, вызываем их
    if (typeof window.applyUniversalTranslations === 'function') {
        window.applyUniversalTranslations(lang);
    }
    
    // Если на странице определена функция updateLanguage, вызываем её
    if (typeof window.updateLanguage === 'function' && window.updateLanguage !== window.switchLanguage) {
        window.updateLanguage(lang);
    }
    
    // Обновляем меню сайдбара для курсов
    updateSidebarForPythonCourse(lang);
    updateSidebarForDatabaseCourse(lang);
}

// Функция для обновления сайдбара в курсе Python
function updateSidebarForPythonCourse(lang) {
    const isPythonCourse = window.location.pathname.includes('python');
    if (isPythonCourse) {
        const lessonsList = document.getElementById('week-1-lessons');
        if (lessonsList && window.lessons) {
            lessonsList.innerHTML = '';
            
            for (let i = 1; i <= Object.keys(window.lessons).length; i++) {
                const lesson = window.lessons[i];
                if (lesson) {
                    const li = document.createElement('li');
                    li.className = 'lesson-item';
                    
                    let lessonText = '';
                    let lessonTitle = '';
                    
                    if (lang === 'kk') {
                        lessonText = 'Сабақ-' + i;
                        lessonTitle = lesson.title;
                    } else {
                        lessonText = 'Урок-' + i;
                        lessonTitle = lesson.title;
                    }
                    
                    li.innerHTML = `
                        <button class="lesson-btn" onclick="loadLesson(${i})">
                            <span class="lesson-title">${lessonText}: ${lessonTitle}</span>
                        </button>
                    `;
                    lessonsList.appendChild(li);
                }
            }
        }
    }
}

// Функция для обновления сайдбара в курсе Баз Данных
function updateSidebarForDatabaseCourse(lang) {
    const isDatabaseCourse = window.location.pathname.includes('database');
    if (isDatabaseCourse) {
        const lessonsList = document.getElementById('week-1-lessons');
        if (lessonsList && window.databaseLessons) {
            lessonsList.innerHTML = '';
            
            for (let i = 1; i <= Object.keys(window.databaseLessons).length; i++) {
                const lesson = window.databaseLessons[i];
                if (lesson) {
                    const li = document.createElement('li');
                    li.className = 'lesson-item';
                    
                    let lessonText = '';
                    let lessonTitle = '';
                    
                    if (lang === 'kk') {
                        lessonText = 'Сабақ-' + i;
                        lessonTitle = lesson.title;
                    } else {
                        lessonText = 'Урок-' + i;
                        lessonTitle = lesson.title;
                    }
                    
                    li.innerHTML = `
                        <button class="lesson-btn" onclick="loadLesson(${i})">
                            <span class="lesson-title">${lessonText}: ${lessonTitle}</span>
                        </button>
                    `;
                    lessonsList.appendChild(li);
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌎 Инициализация улучшенной системы переводов');
    
    // Определяем текущий язык пользователя
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const currentLang = userData.language || 'kk'; // Казахский по умолчанию
    
    // Устанавливаем атрибут lang для HTML
    document.documentElement.setAttribute('lang', currentLang);
    
    // Применяем переводы сразу при загрузке
    applyTranslationsToPage(currentLang);
    
    // Находим все селекторы языка на странице
    const langSelects = document.querySelectorAll('#select, .language-selector');
    langSelects.forEach(select => {
        // Устанавливаем правильное значение
        if (select.tagName === 'SELECT') {
            select.value = currentLang === 'kk' ? 'Қазақша' : 'Русский';
            
            // Обновляем обработчик события
            select.addEventListener('change', function() {
                const newLang = this.value === 'Қазақша' ? 'kk' : 'ru';
                window.switchLanguage(newLang);
            });
        }
    });
    
    // Функция для переключения языка
    window.switchLanguage = function(lang) {
        console.log(`🌐 Переключение языка: ${lang}`);
        
        // Устанавливаем атрибут lang для HTML
        document.documentElement.setAttribute('lang', lang);
        
        // Применяем переводы
        applyTranslationsToPage(lang);
        
        // Обновляем все селекторы
        const langSelects = document.querySelectorAll('#select, .language-selector');
        langSelects.forEach(select => {
            if (select.tagName === 'SELECT') {
                select.value = lang === 'kk' ? 'Қазақша' : 'Русский';
            }
        });
        
        // Сохраняем выбранный язык в localStorage
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        userData.language = lang;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        
        // Показываем уведомление о смене языка
        showLanguageChangeNotification(lang);
        
        // Если на странице есть специфические функции перевода, вызываем их
        if (typeof window.applyUniversalTranslations === 'function') {
            window.applyUniversalTranslations(lang);
        }
        
        // Если на странице определена функция updateLanguage, вызываем её
        if (typeof window.updateLanguage === 'function') {
            window.updateLanguage(lang);
        }
    };
    
    // Функция для применения переводов ко всем элементам на странице
    function applyTranslationsToPage(lang) {
        // Проверяем наличие объекта переводов
        if (!window.translations || !window.translations[lang]) {
            console.warn('🌐 Объект переводов отсутствует или не содержит нужного языка');
            return;
        }
        
        // Заменяем текст во всех элементах с атрибутом data-lang-key
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (window.translations[lang][key]) {
                // Проверяем тип элемента
                if (element.tagName === 'INPUT' && element.type !== 'button' && element.type !== 'submit') {
                    if (element.hasAttribute('placeholder')) {
                        element.placeholder = window.translations[lang][key];
                    } else {
                        element.value = window.translations[lang][key];
                    }
                } else {
                    element.innerHTML = window.translations[lang][key];
                }
            }
        });
        
        console.log(`🌐 Переведено ${elements.length} элементов на язык: ${lang}`);
    }
    
    // Функция для отображения уведомления о смене языка
    function showLanguageChangeNotification(lang) {
        const message = lang === 'kk' ? 'Тіл қазақшаға ауыстырылды' : 'Язык изменен на русский';
        
        // Создаем элемент уведомления
        const notification = document.createElement('div');
        notification.className = 'language-notification';
        notification.innerHTML = message;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.padding = '10px 15px';
        notification.style.backgroundColor = 'rgba(0,0,0,0.8)';
        notification.style.color = '#fff';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '9999';
        notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        notification.style.transition = 'opacity 0.5s ease';
        
        // Добавляем уведомление на страницу
        document.body.appendChild(notification);
        
        // Удаляем уведомление через 3 секунды
        setTimeout(function() {
            notification.style.opacity = '0';
            setTimeout(function() {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 500);
        }, 2500);
    }
});
