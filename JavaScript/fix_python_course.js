/**
 * Скрипт для исправления форматирования уроков в Python курсе
 * Преобразует формат из "1-сабак" в "Сабак-1"
 * Версия 2.0 - Улучшенное форматирование и удаление иконок
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🐍 Инициализация исправления курса Python 2.0');
    
    // Проверяем язык страницы
    const lang = document.documentElement.getAttribute('lang') || 'ru';
    
    // Проверяем, находимся ли мы на странице курса Python или на странице курсов
    const isPythonCourse = window.location.pathname.includes('python_course') || 
                          window.location.pathname.includes('courses') || 
                          document.querySelectorAll('.sidebar .lesson-item').length > 0;
    
    if (isPythonCourse) {
        // Исправляем названия уроков
        fixLessonTitles();
        
        // Убираем лишние иконки книг в казахской версии или в темной теме
        if (lang === 'kk' || document.documentElement.getAttribute('data-theme') === 'dark') {
            removeBookIcons();
        }
    }
    
    // Добавляем обработчик для динамически загружаемого контента
    const observer = new MutationObserver(function(mutations) {
        if (isPythonCourse) {
            if (lang === 'kk' || document.documentElement.getAttribute('data-theme') === 'dark') {
                removeBookIcons();
            }
            fixLessonTitles();
        }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Добавляем обработчик на переключение темы
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        themeSwitch.addEventListener('click', function() {
            setTimeout(function() {
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    removeBookIcons();
                }
                fixLessonTitles();
            }, 100);
        });
    }
    
    // Функция для исправления формата названий уроков
    function fixLessonTitles() {
        // Ищем все элементы уроков в сайдбаре
        const lessonItems = document.querySelectorAll('.sidebar .lesson-item a, .course-sidebar .lesson-item a, .lesson-btn .lesson-title');
        
        lessonItems.forEach(function(item) {
            const text = item.textContent.trim();
            
            // Проверяем на формат "1-сабак" или подобный
            const match = text.match(/(\d+)-(\S+)/);
            if (match) {
                const number = match[1];
                const word = match[2];
                
                // Преобразуем в "Сабак-1"
                const newText = word.charAt(0).toUpperCase() + word.slice(1) + '-' + number;
                
                // Обновляем текст
                item.textContent = newText;
                console.log(`Исправлено: ${text} -> ${newText}`);
            }
        });
    }
    
    // Функция для удаления иконок книг
    function removeBookIcons() {
        // Ищем все иконки книг
        const bookIcons = document.querySelectorAll('.lesson-item i.fas.fa-book, .lesson-item i.book-icon, .sidebar i.fas.fa-book');
        
        bookIcons.forEach(function(icon) {
            icon.style.display = 'none';
        });
    }
});
