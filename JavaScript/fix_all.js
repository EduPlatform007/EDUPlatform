/**
 * Основной файл для инициализации всех исправлений и улучшений
 * Обновленная версия для работы с новой системой
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Инициализация всех исправлений...');
    
    // Проверяем, находимся ли мы на странице курса
    const isCoursePage = window.location.pathname.includes('course') || 
                       window.location.pathname.includes('lesson');
    
    if (!isCoursePage) return;
    
    console.log('Обнаружена страница курса, инициализируем улучшения...');
    
    // Определяем язык курса
    const isRussian = document.documentElement.lang === 'ru' || 
                    window.location.pathname.includes('course_rus.html') || 
                    document.querySelector('meta[name="course-language"][content="ru"]') !== null;
    
    const lang = isRussian ? 'ru' : 'kk';
    console.log('Язык интерфейса:', isRussian ? 'русский' : 'казахский');
    
    // Добавляем стили для сообщений о статусе
    addStatusStyles();
    
    // Инициализируем проверку уроков
    initStrictLessonCompletion();
    
    // Функция для загрузки скриптов
    function loadScript(src, callback) {
        console.log('Загружаем скрипт:', src);
        const script = document.createElement('script');
        script.src = src;
        script.onload = function() {
            console.log('Скрипт успешно загружен:', src);
            if (typeof callback === 'function') {
                callback();
            }
        };
        script.onerror = function() {
            console.error('Ошибка загрузки скрипта:', src);
        };
        document.head.appendChild(script);
    }
    
    // Функция для инициализации системы проверки уроков
    function initStrictLessonCompletion() {
        if (typeof window.strictCheckQuiz === 'function' && 
            typeof window.strictCheckPractice === 'function' && 
            typeof window.completeLessonWithChecks === 'function') {
            
            console.log('Система строгой проверки уроков инициализирована');
            
            // Перехватываем клики по кнопке завершения урока
            document.addEventListener('click', function(event) {
                const completeBtn = event.target.closest('.complete-btn');
                if (completeBtn) {
                    event.preventDefault();
                    event.stopPropagation();
                    
                    // Получаем номер урока из атрибута или из текущего URL
                    let lessonNum = completeBtn.getAttribute('data-lesson');
                    if (!lessonNum && window.currentUser && window.currentUser.currentLesson) {
                        lessonNum = window.currentUser.currentLesson;
                    } else if (!lessonNum) {
                        // Пытаемся извлечь номер урока из URL
                        const match = window.location.pathname.match(/lesson\/(\d+)/);
                        if (match && match[1]) {
                            lessonNum = match[1];
                        }
                    }
                    
                    if (lessonNum) {
                        console.log('Попытка завершить урок:', lessonNum);
                        window.completeLessonWithChecks(parseInt(lessonNum));
                    } else {
                        console.error('Не удалось определить номер урока');
                        alert('Ошибка: не удалось определить номер урока');
                    }
                }
            });
        } else {
            console.warn('Не удалось загрузить все необходимые функции для проверки уроков');
        }
    }
});

// Добавляем стили для сообщений о статусе выполнения заданий
const style = document.createElement('style');
style.textContent = `
    .status-message {
        padding: 10px 15px;
        margin: 10px 0;
        border-radius: 4px;
        font-weight: bold;
    }
    .status-success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    .status-warning {
        background-color: #fff3cd;
        color: #856404;
        border: 1px solid #ffeeba;
    }
    .status-error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    .status-info {
        background-color: #d1ecf1;
        color: #0c5460;
        border: 1px solid #bee5eb;
    }
`;
document.head.appendChild(style);

console.log('Файл fix_all.js загружен');
