/**
 * Скрипт для загрузки улучшенных уроков Python на казахском языке
 * Этот скрипт заменяет стандартные уроки на улучшенные версии с карточками, тестами и практическими заданиями
 */

document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, что мы находимся на странице курса Python на казахском языке
    const isKazakhPythonCourse = window.location.pathname.includes('python_course') && 
                                document.documentElement.lang === 'kk';
    
    if (!isKazakhPythonCourse) return;
    
    console.log('Загружаем улучшенные уроки Python на казахском языке');
    
    // Загружаем улучшенные уроки
    loadImprovedLessons();
    
    // Добавляем стили для карточек
    addCardStyles();
});

/**
 * Загружает улучшенные версии уроков
 */
function loadImprovedLessons() {
    // Создаем и добавляем скрипты для улучшенных уроков
    const lessons = [
        'python_data_kk_improved_lesson1.js',
        'python_data_kk_improved_lesson2.js',
        'python_data_kk_improved_lesson3.js',
        'python_data_kk_improved_lesson4.js'
        // Добавьте остальные уроки по мере их создания
    ];
    
    // Загружаем каждый скрипт
    lessons.forEach(lesson => {
        const script = document.createElement('script');
        script.src = `JavaScript/${lesson}`;
        document.head.appendChild(script);
    });
    
    // Заменяем стандартные уроки на улучшенные после загрузки всех скриптов
    setTimeout(() => {
        replaceStandardLessons();
    }, 1000);
}

/**
 * Заменяет стандартные уроки на улучшенные версии
 */
function replaceStandardLessons() {
    // Проверяем, что улучшенные уроки загружены
    if (typeof window.pythonLesson1_kk !== 'undefined') {
        console.log('Заменяем стандартные уроки на улучшенные');
        
        // Заменяем уроки в объекте pythonData
        if (window.pythonData && Array.isArray(window.pythonData.lessons)) {
            // Урок 1
            if (window.pythonLesson1_kk) {
                window.pythonData.lessons[0] = window.pythonLesson1_kk;
            }
            
            // Урок 2
            if (window.pythonLesson2_kk) {
                window.pythonData.lessons[1] = window.pythonLesson2_kk;
            }
            
            // Урок 3
            if (window.pythonLesson3_kk) {
                window.pythonData.lessons[2] = window.pythonLesson3_kk;
            }
            
            // Урок 4
            if (window.pythonLesson4_kk) {
                window.pythonData.lessons[3] = window.pythonLesson4_kk;
            }
            
            // Добавьте остальные уроки по мере их создания
            
            // Перезагружаем текущий урок, если он открыт
            if (typeof window.currentLesson !== 'undefined' && window.currentLesson > 0) {
                const currentLessonNumber = window.currentLesson;
                setTimeout(() => {
                    if (typeof window.loadLesson === 'function') {
                        window.loadLesson(currentLessonNumber);
                    }
                }, 500);
            }
        }
    } else {
        console.warn('Улучшенные уроки не загружены');
    }
}

/**
 * Добавляет стили для карточек и других элементов
 */
function addCardStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Стили для карточек */
        .info-card, .warning-card, .tip-card, .theory-card {
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
            position: relative;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .info-card {
            background-color: #e3f2fd;
            border-left: 5px solid #2196f3;
        }
        
        .warning-card {
            background-color: #fff8e1;
            border-left: 5px solid #ffc107;
        }
        
        .tip-card {
            background-color: #e8f5e9;
            border-left: 5px solid #4caf50;
        }
        
        .theory-card {
            background-color: #f5f5f5;
            border-left: 5px solid #9e9e9e;
            margin: 10px;
            flex: 1;
            min-width: 250px;
        }
        
        .info-card h4, .warning-card h4, .tip-card h4, .theory-card h4 {
            margin-top: 0;
            color: #333;
        }
        
        /* Сетка для карточек теории */
        .theory-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 15px 0;
        }
        
        /* Стили для примеров кода */
        .example {
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 4px;
            margin-top: 10px;
        }
        
        /* Стили для тестов */
        .quiz {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        
        .test-question {
            margin-bottom: 20px;
        }
        
        .test-options {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        
        .test-option {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }
        
        /* Стили для практических заданий */
        .practice {
            background-color: #f0f4f8;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        
        .code-editor {
            background-color: #fff;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .code-textarea {
            width: 100%;
            font-family: monospace;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            resize: vertical;
        }
        
        .run-btn {
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }
        
        .run-btn:hover {
            background-color: #45a049;
        }
        
        .result {
            background-color: #f8f9fa;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 10px;
            margin-top: 10px;
            min-height: 50px;
            white-space: pre-wrap;
            font-family: monospace;
        }
        
        /* Стили для видео */
        .video-container {
            margin: 20px 0;
        }
        
        .video-wrapper {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 */
            height: 0;
            overflow: hidden;
        }
        
        .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        /* Стили для кнопок */
        .lesson-actions {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .complete-btn {
            background-color: #2196f3;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .complete-btn:hover {
            background-color: #0b7dda;
        }
    `;
    
    document.head.appendChild(styleElement);
}
