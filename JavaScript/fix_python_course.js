// Скрипт для исправления загрузки данных курса Python
document.addEventListener('DOMContentLoaded', function() {
    console.log('Исправление загрузки данных курса Python');
    
    // Проверяем, находимся ли мы на странице курса Python
    const isPythonCourse = window.location.pathname.includes('python');
    
    if (isPythonCourse) {
        console.log('Обнаружена страница курса Python');
        
        // Определяем язык курса
        const isRussian = document.querySelector('meta[name="course-language"][content="ru"]') !== null;
        console.log('Язык курса:', isRussian ? 'русский' : 'казахский');
        
        // Если это казахская версия, устанавливаем lessons напрямую из pythonLessons
        if (!isRussian && window.pythonLessons) {
            console.log('Устанавливаем уроки из pythonLessons');
            window.lessons = window.pythonLessons;
            
            // Обновляем список уроков на странице
            setTimeout(function() {
                // Очищаем список уроков
                const lessonsList = document.getElementById('week-1-lessons');
                if (lessonsList) {
                    lessonsList.innerHTML = '';
                    
                    // Добавляем уроки из pythonLessons
                    for (let i = 1; i <= Object.keys(window.lessons).length; i++) {
                        const lesson = window.lessons[i];
                        if (lesson) {
                            const li = document.createElement('li');
                            li.className = 'lesson-item';
                            li.innerHTML = `
                                <button class="lesson-btn" onclick="loadLesson(${i})">
                                    <span class="lesson-number">${i}</span>
                                    <span class="lesson-title">${lesson.title}</span>
                                </button>
                                <button class="homework-btn" onclick="loadHomework(${i})">
                                    <i class="fas fa-book"></i>
                                </button>
                            `;
                            lessonsList.appendChild(li);
                        }
                    }
                }
                
                // Если был открыт урок, перезагружаем его
                const currentLesson = localStorage.getItem('openLessonAfterReload');
                if (currentLesson && typeof window.loadLesson === 'function') {
                    window.loadLesson(parseInt(currentLesson));
                }
            }, 500);
        }
        // Если это русская версия, уроки уже должны быть загружены из python_data_rus.js
    }
});
