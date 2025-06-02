/**
 * Файл для подключения переводов на страницах profile.html, courses.html и login.html
 * Использует существующий механизм переводов из translations.js и translations_api.js
 */

document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, загружены ли необходимые скрипты
    if (typeof translations === 'undefined') {
        console.error('Ошибка: объект translations не найден. Убедитесь, что файл translations.js загружен.');
        return;
    }

    // Функция для применения переводов на текущей странице
    function applyPageTranslations() {
        // Получаем текущий язык из localStorage или используем казахский по умолчанию
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const currentLang = userData.language || 'kk';
        
        console.log('Применение переводов для страницы, язык:', currentLang);
        
        // Обновляем атрибут lang для HTML
        document.documentElement.setAttribute('lang', currentLang);
        
        // Применяем переводы ко всем элементам с атрибутом data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            
            if (translations[currentLang] && translations[currentLang][key]) {
                if (element.tagName === 'INPUT' && element.type !== 'button' && element.type !== 'submit') {
                    if (element.hasAttribute('placeholder')) {
                        element.placeholder = translations[currentLang][key];
                    } else {
                        element.value = translations[currentLang][key];
                    }
                } else {
                    element.innerHTML = translations[currentLang][key];
                }
            }
        });
    
        // Обновляем плейсхолдеры для всех инпутов
        document.querySelectorAll('input[placeholder]').forEach(input => {
            const key = input.getAttribute('data-lang-key');
            if (key && translations[currentLang] && translations[currentLang][key]) {
                input.placeholder = translations[currentLang][key];
            }
        });
    
        // Обновляем селекторы языка, если они есть на странице
        document.querySelectorAll('#select, .language-selector').forEach(selector => {
            if (selector.tagName === 'SELECT') {
                selector.value = currentLang === 'kk' ? 'Қазақша' : 'Русский';
            }
        });
        
        // Специальная обработка для страницы courses.html
        if (window.location.pathname.includes('courses.html')) {
            // Обновляем тексты на кнопках языков курсов
            if (currentLang === 'ru') {
                document.querySelectorAll('.course-btn').forEach(btn => {
                    if (btn.textContent === 'Қазақша') {
                        btn.textContent = 'Казахский';
                    }
                });
                
                // Обновляем теги курсов
                document.querySelectorAll('.course-tag').forEach(tag => {
                    if (tag.textContent === 'Responsive') {
                        tag.textContent = 'Адаптивный';
                    }
                    if (tag.textContent === 'Database') {
                        tag.textContent = 'База данных';
                    }
                    if (tag.textContent === 'OOP') {
                        tag.textContent = 'ООП';
                    }
                });
                
                // Обновляем заголовки и описания
                document.querySelectorAll('.course-description').forEach(desc => {
                    if (!desc.hasAttribute('data-lang-key')) {
                        if (desc.textContent.includes('Веб-әзірлеудің негіздері')) {
                            desc.textContent = 'Основы веб-разработки, создание сайтов с нуля';
                        }
                        if (desc.textContent.includes('Деректерді сақтау')) {
                            desc.textContent = 'Основы хранения и обработки данных, язык запросов SQL';
                        }
                        if (desc.textContent.includes('Python бағдарламалау')) {
                            desc.textContent = 'Основы программирования на Python, алгоритмы и структуры данных';
                        }
                    }
                });
            } else {
                document.querySelectorAll('.course-btn').forEach(btn => {
                    if (btn.textContent === 'Казахский') {
                        btn.textContent = 'Қазақша';
                    }
                });
            }
        }
    }

    // Настраиваем обработчики событий для селекторов языка
    function setupLanguageSelectors() {
        document.querySelectorAll('#select, .language-selector').forEach(selector => {
            if (selector.tagName === 'SELECT') {
                // Удаляем существующие обработчики и устанавливаем новый
                const newSelector = selector.cloneNode(true);
                selector.parentNode.replaceChild(newSelector, selector);
                
                // Устанавливаем обработчик события изменения
                newSelector.addEventListener('change', function() {
                    const newLang = this.value === 'Қазақша' ? 'kk' : 'ru';
                    changeLanguage(newLang);
                });
            }
        });
    }

    // Функция для изменения языка
    function changeLanguage(newLang) {
        console.log('Переключение языка на:', newLang);
        
        // Сохраняем новый язык в localStorage
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        userData.language = newLang;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        
        // Обновляем атрибут lang для HTML
        document.documentElement.setAttribute('lang', newLang);
        
        // Применяем переводы
        applyPageTranslations();
        
        // Показываем уведомление о смене языка
        showLanguageNotification(newLang);
    }

    // Функция отображения уведомления о смене языка
    function showLanguageNotification(lang) {
        const message = lang === 'kk' ? 'Тіл қазақшаға ауыстырылды' : 'Язык изменен на русский';
        
        // Удаляем предыдущее уведомление, если оно есть
        const existingNotification = document.querySelector('.language-notification');
        if (existingNotification) {
            document.body.removeChild(existingNotification);
        }
        
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'language-notification';
        notificationDiv.textContent = message;
        notificationDiv.style.position = 'fixed';
        notificationDiv.style.top = '10px';
        notificationDiv.style.right = '10px';
        notificationDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
        notificationDiv.style.color = 'white';
        notificationDiv.style.padding = '10px 15px';
        notificationDiv.style.borderRadius = '4px';
        notificationDiv.style.zIndex = '9999';
        document.body.appendChild(notificationDiv);
        
        setTimeout(() => {
            notificationDiv.style.opacity = '0';
            notificationDiv.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                if (document.body.contains(notificationDiv)) {
                    document.body.removeChild(notificationDiv);
                }
            }, 500);
        }, 2000);
    }

    // Инициализация
    setupLanguageSelectors();
    applyPageTranslations();

    // Экспортируем функции в глобальную область видимости
    window.applyPageTranslations = applyPageTranslations;
    window.changeLanguage = changeLanguage;
});
