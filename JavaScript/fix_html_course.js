/**
 * Скрипт для загрузки данных курса HTML/CSS
 * Обновленная версия для работы с новой системой
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Инициализация загрузки данных курса HTML/CSS');
    
    // Проверяем, находимся ли мы на странице курса HTML/CSS
    const isHtmlCourse = window.location.pathname.includes('course.html') || 
                        window.location.pathname.endsWith('course') ||
                        window.location.pathname.includes('course_rus.html');
    
    if (!isHtmlCourse) return;
    
    console.log('Обнаружена страница курса HTML/CSS');
    
    // Определяем язык курса
    const isRussian = document.documentElement.lang === 'ru' || 
                    window.location.pathname.includes('course_rus.html') || 
                    document.querySelector('meta[name="course-language"][content="ru"]') !== null;
    
    console.log('Язык курса:', isRussian ? 'русский' : 'казахский');
    
    // Инициализируем загрузку уроков
    initLessons();
    
    // Функция для инициализации уроков
    function initLessons() {
        // Проверяем, загружены ли уже уроки
        if (window.lessons && Object.keys(window.lessons).length > 0) {
            console.log('Уроки уже загружены, всего:', Object.keys(window.lessons).length);
            updateLessonsList();
            return;
        }
        
        // Если уроки не загружены, ждем немного и проверяем снова
        console.log('Ожидаем загрузки уроков...');
        setTimeout(function() {
            if (window.lessons && Object.keys(window.lessons).length > 0) {
                console.log('Уроки загружены после ожидания, всего:', Object.keys(window.lessons).length);
                updateLessonsList();
            } else {
                console.warn('Уроки не загружены, проверьте подключение скриптов');
            }
        }, 1000);
    }
    
    // Функция для обновления списка уроков на странице
    function updateLessonsList() {
        console.log('Обновляем список уроков на странице');
        
        // Очищаем список уроков
        const lessonsList = document.getElementById('week-1-lessons');
        if (!lessonsList) {
            console.error('Элемент #week-1-lessons не найден');
            return;
        }
        
        lessonsList.innerHTML = '';
        
        // Добавляем уроки из объекта lessons
        const lessonIds = Object.keys(window.lessons).filter(key => key !== 'length');
        
        lessonIds.forEach(lessonId => {
            const lesson = window.lessons[lessonId];
            if (lesson && lesson.title) {
                const li = document.createElement('li');
                li.className = 'lesson-item';
                
                // Проверяем, выполнен ли урок
                const isCompleted = isLessonCompleted(lessonId);
                const completedClass = isCompleted ? ' completed' : '';
                
                li.innerHTML = `
                    <div class="lesson-item-content">
                        <button class="lesson-btn${completedClass}" onclick="loadLesson(${lessonId})">
                            <span class="lesson-number">${lessonId}</span>
                            <span class="lesson-title">${lesson.title}</span>
                            ${isCompleted ? '<i class="fas fa-check-circle check-icon"></i>' : ''}
                        </button>
                        <button class="homework-btn" onclick="loadHomework(${lessonId})">
                            <i class="fas fa-book"></i>
                        </button>
                    </div>
                `;
                lessonsList.appendChild(li);
            }
        });
        
        console.log(`Добавлено ${lessonIds.length} уроков в список`);
        
        // Если был открыт урок, перезагружаем его
        const currentLesson = localStorage.getItem('openLessonAfterReload') || 
                             localStorage.getItem('lastOpenedLesson');
        
        if (currentLesson && typeof window.loadLesson === 'function') {
            console.log('Загружаем последний открытый урок:', currentLesson);
            window.loadLesson(parseInt(currentLesson));
        }
    }
    
    // Функция для проверки, выполнен ли урок
    function isLessonCompleted(lessonId) {
        try {
            const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '{}');
            return !!completedLessons[lessonId];
        } catch (e) {
            console.error('Ошибка при проверке статуса урока:', e);
            return false;
        }
    }
    
    // Делаем функцию доступной глобально
    window.updateLessonsList = updateLessonsList;
});
