/**
 * Универсальный скрипт для переключения темы на всех страницах
 * Этот скрипт гарантирует единообразную работу переключения темы
 * на всех страницах платформы
 * Версия 4.0 - Исправленная поддержка для всех страниц, включая index.html и страницы курсов
 * с улучшенной обработкой событий и загрузки DOM
 */

// Применяем тему до загрузки DOM для мгновенного применения темы
(function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.style.backgroundColor = savedTheme === 'dark' ? '#111827' : '';
    
    // Создаем и добавляем стиль для предотвращения мигания при загрузке
    const style = document.createElement('style');
    style.textContent = `
        body { transition: background-color 0.3s ease, color 0.3s ease; }
        body[data-theme="dark"] { background-color: #111827; color: #f0f0f0; }
    `;
    document.head.appendChild(style);
})();

// Функция обновления иконки темы
function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (!themeIcon) return;
    
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    // Также обновляем все другие иконки темы, если они есть
    const allThemeIcons = document.querySelectorAll('.theme-switch-icon');
    allThemeIcons.forEach(icon => {
        if (icon !== themeIcon) {
            if (theme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    });
}

// Функция удаления темного фона
function removeDarkBackground() {
    // Удаляем темный фон с body и html
    document.body.style.backgroundColor = 'transparent';
    document.body.style.backgroundImage = 'none';
    document.body.style.background = 'none';
    document.documentElement.style.backgroundColor = 'transparent';
    document.documentElement.style.backgroundImage = 'none';
    document.documentElement.style.background = 'none';
    
    // Удаляем темный фон с main-frame
    const mainFrame = document.querySelector('.main-frame');
    if (mainFrame) {
        mainFrame.style.backgroundColor = 'transparent';
        mainFrame.style.backgroundImage = 'none';
        mainFrame.style.background = 'none';
    }
    
    // Удаляем темный фон с video-background
    const videoBackground = document.querySelector('.video-background');
    if (videoBackground) {
        videoBackground.style.backgroundColor = 'transparent';
        videoBackground.style.backgroundImage = 'none';
        videoBackground.style.background = 'none';
    }
}

// Функция переключения темы
function toggleTheme() {
    // Получаем текущую тему
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    
    // Определяем новую тему
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Сохраняем тему в localStorage
    localStorage.setItem('theme', newTheme);
    
    // Применяем новую тему к корневым элементам
    document.documentElement.setAttribute('data-theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);

    // Также устанавливаем класс для совместимости с другими реализациями
    if (newTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        document.body.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
        document.body.classList.remove('dark-theme');
    }
    
    // Обновляем иконку
    updateThemeIcon(newTheme);
    
    // Применяем темные стили, если нужно
    if (newTheme === 'dark' && typeof injectStyles === 'function') {
        injectStyles();
    }
    
    // Расширенный список элементов, к которым нужно применить тему
    const elementsToUpdate = document.querySelectorAll(
        '.course-card, .auth-container, .profile-container, .sidebar, ' +
        '.lesson-content, .task-container, .homework-container, .ui-task, ' +
        '.task-description, .task-step, .task-item, .sidebar-item, ' +
        '.lesson-container, .content-container, .course-content, ' +
        '.task-content, .header-line, .footer, .teacher, .teacher-card, ' +
        '.faq-container, .question, .quest-text, .quest-link, ' +
        '.first-carts, .second-carts, .third-carts, .card, ' +
        '.practical-task, .theory-container, .quiz-container, ' +
        '.courses-container div, .practical-container, .code-container, ' +
        '.result-container, .progress-bar, .progress, .course-progress'
    );
    
    elementsToUpdate.forEach(element => {
        element.setAttribute('data-theme', newTheme);
    });
    
    // Применяем тему к домашним заданиям и сайдбару
    const homeworkElements = document.querySelectorAll(
        '.homework-container, .task-description, .ui-task, ' +
        '.task-step, .task-item, .sidebar, #homework-task'
    );
    
    homeworkElements.forEach(element => {
        if (element) {
            element.setAttribute('data-theme', newTheme);
            if (newTheme === 'dark') {
                element.style.backgroundColor = '#121212';
                element.style.color = '#e2e8f0';
                element.style.borderColor = '#2a2a2a';
            } else {
                element.style.backgroundColor = '';
                element.style.color = '';
                element.style.borderColor = '';
            }
        }
    });
    
    // Специальная обработка для страницы index.html
    const indexPageElements = document.querySelectorAll(
        '.first-carts, .second-carts, .third-carts, .teacher'
    );
    
    indexPageElements.forEach(element => {
        if (element) {
            element.setAttribute('data-theme', newTheme);
            if (newTheme === 'dark') {
                element.style.backgroundColor = '#1e1e3a';
                element.style.color = '#ffffff';
                element.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.35)';
            } else {
                element.style.backgroundColor = '';
                element.style.color = '';
                element.style.boxShadow = '';
            }
        }
    });
    
    console.log('🎨 Тема изменена на:', newTheme);
    
    // Применяем тему без перезагрузки страницы
    applyThemeWithoutReload(newTheme);
}

// Новая функция для применения темы без перезагрузки
function applyThemeWithoutReload(theme) {
    // Применяем стили напрямую к элементам
    if (theme === 'dark') {
        // Основные элементы
        document.querySelectorAll('.sidebar').forEach(el => {
            el.style.backgroundColor = '#1e1e1e';
            el.style.color = '#f5f5f5';
            el.style.borderRight = '1px solid #2a2a2a';
        });
        
        document.querySelectorAll('.lesson-content, .content-container, .course-content').forEach(el => {
            el.style.backgroundColor = '#121212';
            el.style.color = '#f5f5f5';
        });
        
        document.querySelectorAll('.header-line').forEach(el => {
            el.style.backgroundColor = '#111827';
            el.style.boxShadow = 'none';
        });
        
        document.querySelectorAll('.course-card, .card, .profile-container, .auth-container').forEach(el => {
            el.style.backgroundColor = '#1e1e2a';
            el.style.color = '#f5f5f5';
            el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        });
        
        document.querySelectorAll('.footer').forEach(el => {
            el.style.backgroundColor = '#0f172a';
            el.style.color = '#f5f5f5';
            el.style.borderTop = '1px solid #2a2a2a';
        });
        
        // Домашние задания
        document.querySelectorAll('.homework-container, .task-description, .ui-task, .task-step, .task-item').forEach(el => {
            el.style.backgroundColor = '#121212';
            el.style.color = '#e2e8f0';
            el.style.borderColor = '#2a2a2a';
        });
        
        // Преподаватели
        document.querySelectorAll('.teacher').forEach(el => {
            el.style.backgroundColor = '#1e293b';
            el.style.color = '#ffffff';
            el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.35)';
        });
        
        // Карточки курсов на главной странице
        document.querySelectorAll('.first-carts, .second-carts, .third-carts').forEach(el => {
            el.style.backgroundColor = '#1e1e3a';
            el.style.color = '#ffffff';
            el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.35)';
        });
        
        // Кнопки с градиентом - исправляем цвет текста
        document.querySelectorAll('.btn, .btn-primary, button.btn, a.btn, .main-btn').forEach(el => {
            el.style.color = '#ffffff';
        });
    } else {
        // Сбрасываем все стили для светлой темы
        const elements = document.querySelectorAll(
            '.sidebar, .lesson-content, .header-line, .course-card, .card, ' +
            '.profile-container, .auth-container, .footer, .lesson-item, ' +
            '.homework-container, .task-description, .ui-task, .task-step, ' +
            '.task-item, .teacher, .first-carts, .second-carts, .third-carts, ' +
            '.content-container, .course-content, .btn, .btn-primary, button.btn, ' +
            'a.btn, .main-btn'
        );
        
        elements.forEach(el => {
            el.style.backgroundColor = '';
            el.style.color = '';
            el.style.boxShadow = '';
            el.style.borderRight = '';
            el.style.borderBottom = '';
            el.style.borderTop = '';
            el.style.borderColor = '';
        });
    }
}

// Функция инициализации темы и обработчиков событий
function initializeThemeSwitcher() {
    // Получаем элемент переключателя темы (может быть несколько на странице)
    const themeSwitches = document.querySelectorAll('#theme-switch, .theme-switch');
    
    // Получаем сохраненную тему
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Применяем тему к корневым элементам
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
    
    // Обновляем иконку
    updateThemeIcon(savedTheme);
    
    // Добавляем обработчик события для всех переключателей темы
    themeSwitches.forEach(themeSwitch => {
        if (themeSwitch) {
            // Удаляем все существующие обработчики, чтобы избежать дублирования
            const newThemeSwitch = themeSwitch.cloneNode(true);
            themeSwitch.parentNode.replaceChild(newThemeSwitch, themeSwitch);
            
            // Добавляем новый обработчик
            newThemeSwitch.addEventListener('click', function(e) {
                if (e && e.preventDefault) {
                    e.preventDefault();
                }
                toggleTheme();
            });
            console.log('Добавлен обработчик события для переключателя темы');
        }
    });
    
    // Обработка для всех страниц, включая index.html и страницы курсов
    // Единый обработчик для всех страниц
    // Добавляем обработчик с задержкой, чтобы гарантировать, что DOM полностью загружен
    setTimeout(function() {
        // Повторно получаем все переключатели темы, так как DOM мог измениться
        const allThemeSwitches = document.querySelectorAll('#theme-switch, .theme-switch');
        allThemeSwitches.forEach(themeSwitch => {
            if (themeSwitch) {
                // Удаляем все существующие обработчики
                const newThemeSwitch = themeSwitch.cloneNode(true);
                themeSwitch.parentNode.replaceChild(newThemeSwitch, themeSwitch);
                
                // Добавляем новый обработчик
                newThemeSwitch.addEventListener('click', function(e) {
                    if (e && e.preventDefault) {
                        e.preventDefault();
                    }
                    toggleTheme();
                });
                console.log('Добавлен обработчик для переключателя темы');
            }
        });
    }, 100); // Небольшая задержка для гарантии загрузки DOM
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    initializeThemeSwitcher();
});

// Функция для проверки, загружена ли страница полностью
window.addEventListener('load', function() {
    // Повторная инициализация для гарантии работы на всех страницах
    initializeThemeSwitcher();
    
    // Исправление для страниц курсов
    if (window.location.pathname.includes('course') || 
        window.location.pathname.includes('python') || 
        window.location.pathname.includes('courses.html')) {
        // Получаем текущую тему из localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        console.log('Текущая тема:', savedTheme);
        
        // Применяем тему к домашним заданиям и сайдбару
        const homeworkElements = document.querySelectorAll(
            '.homework-container, .task-description, .ui-task, ' +
            '.task-step, .task-item, .sidebar, #homework-task'
        );
        
        homeworkElements.forEach(element => {
            if (element) {
                element.setAttribute('data-theme', savedTheme);
                if (savedTheme === 'dark') {
                    element.style.backgroundColor = '#121212';
                    element.style.color = '#e2e8f0';
                    element.style.borderColor = '#2a2a2a';
                }
            }
        });
        
        // Проверяем наличие динамически загружаемых элементов домашних заданий
        // Добавляем обработчик для динамически загружаемых элементов
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    // Проверяем новые элементы
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Элемент
                            // Проверяем, является ли это домашним заданием или связанным элементом
                            if (node.classList && 
                                (node.classList.contains('homework-container') || 
                                 node.classList.contains('task-description') || 
                                 node.classList.contains('ui-task') || 
                                 node.classList.contains('task-step') || 
                                 node.classList.contains('task-item') || 
                                 node.id === 'homework-task')) {
                                
                                node.setAttribute('data-theme', savedTheme);
                                if (savedTheme === 'dark') {
                                    node.style.backgroundColor = '#121212';
                                    node.style.color = '#e2e8f0';
                                    node.style.borderColor = '#2a2a2a';
                                }
                            }
                            
                            // Проверяем вложенные элементы
                            const childElements = node.querySelectorAll(
                                '.homework-container, .task-description, .ui-task, ' +
                                '.task-step, .task-item, #homework-task'
                            );
                            
                            childElements.forEach(element => {
                                if (element) {
                                    element.setAttribute('data-theme', savedTheme);
                                    if (savedTheme === 'dark') {
                                        element.style.backgroundColor = '#121212';
                                        element.style.color = '#e2e8f0';
                                        element.style.borderColor = '#2a2a2a';
                                    }
                                }
                            });
                        }
                    });
                }
            });
        });
        
        // Начинаем наблюдение за изменениями в DOM
        observer.observe(document.body, { childList: true, subtree: true });
    }
    
    // Исправление для главной страницы
    if (window.location.pathname.includes('index.html') || 
        window.location.pathname === '/' || 
        window.location.pathname === '') {
        
        // Применяем тему к карточкам курсов и преподавателям
        const indexPageElements = document.querySelectorAll(
            '.first-carts, .second-carts, .third-carts, .teacher'
        );
        
        indexPageElements.forEach(element => {
            if (element) {
                element.setAttribute('data-theme', savedTheme);
                if (savedTheme === 'dark') {
                    element.style.backgroundColor = '#1e1e3a';
                    element.style.color = '#ffffff';
                    element.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.35)';
                }
            }
        });
    }
});
