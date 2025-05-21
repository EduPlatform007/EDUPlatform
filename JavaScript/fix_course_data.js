/**
 * Скрипт для загрузки данных курсов
 * Обновленная версия для работы с новой системой
 */
document.addEventListener('DOMContentLoaded', function() {
    // Определяем тип текущего курса
    let courseType = '';
    
    // Проверяем мета-теги для определения типа курса
    const courseTypeMeta = document.querySelector('meta[name="course-type"]');
    if (courseTypeMeta) {
        courseType = courseTypeMeta.getAttribute('content');
    } else {
        // Если мета-тег отсутствует, определяем тип курса по URL
        const url = window.location.pathname;
        if (url.includes('python')) {
            courseType = 'python';
        } else if (url.includes('database')) {
            courseType = 'database';
        } else {
            courseType = 'html'; // По умолчанию HTML курс
        }
    }
    
    // Определяем язык курса
    const courseLangMeta = document.querySelector('meta[name="course-language"]');
    const courseLang = courseLangMeta ? courseLangMeta.getAttribute('content') : null;
    const isRussian = courseLang === 'ru';
    
    console.log(`Тип курса: ${courseType}, Язык: ${isRussian ? 'русский' : 'казахский'}`);
    
    // Функция для загрузки правильных данных курса
    function loadCorrectCourseData() {
        // Если это русская версия курса
        if (isRussian) {
            switch(courseType) {
                case 'python':
                    console.log('Загружаем данные Python на русском');
                    if (window.pythonLessonsRus && Array.isArray(window.pythonLessonsRus)) {
                        window.lessons = window.pythonLessonsRus;
                    }
                    break;
                case 'database':
                    console.log('Загружаем данные базы данных на русском');
                    if (window.dbLessonsRus && Array.isArray(window.dbLessonsRus)) {
                        window.lessons = window.dbLessonsRus;
                    }
                    break;
                case 'html':
                    console.log('Используем предзагруженные данные HTML на русском');
                    // Данные уже загружены в html_rus_all_data_fixed.js
                    if (window.lessons) {
                        console.log('Уроки успешно загружены, всего:', Object.keys(window.lessons).length);
                    }
                    break;
            }
        } else {
            // Для казахской версии используем соответствующие данные
            switch(courseType) {
                case 'python':
                    console.log('Загружаем данные из python_data.js');
                    if (window.pythonLessons && Array.isArray(window.pythonLessons)) {
                        window.lessons = window.pythonLessons;
                    }
                    break;
                case 'database':
                    console.log('Загружаем данные из db_data.js');
                    if (window.dbLessons && Array.isArray(window.dbLessons)) {
                        window.lessons = window.dbLessons;
                    }
                    break;
                case 'html':
                    console.log('Загружаем данные из html_data.js');
                    if (window.htmlLessons && Array.isArray(window.htmlLessons)) {
                        window.lessons = window.htmlLessons;
                    }
                    break;
            }
        }
        
        // Проверяем, что данные загружены
        if (!window.lessons || !Array.isArray(window.lessons) || window.lessons.length === 0) {
            console.error('Ошибка: данные курса не загружены!');
            return;
        }
        
        console.log(`Загружено ${window.lessons.length} уроков`);
        
        // Если уроки уже были отображены, обновляем их
        if (typeof window.updateLessonsList === 'function') {
            window.updateLessonsList();
        }
        
        // Если был открыт урок, перезагружаем его
        const currentLesson = localStorage.getItem('openLessonAfterReload');
        if (currentLesson && typeof window.loadLesson === 'function') {
            window.loadLesson(parseInt(currentLesson));
        }
    }
    
    // Запускаем загрузку данных с небольшой задержкой, чтобы убедиться, что все скрипты загружены
    setTimeout(loadCorrectCourseData, 300);
});
