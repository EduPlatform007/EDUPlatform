// Скрипт для исправления перенаправления на курсы
document.addEventListener('DOMContentLoaded', function() {
    // Сохраняем оригинальную функцию, если она уже существует
    const originalStartCourse = window.startCourse;
    
    // Переопределяем функцию startCourse для правильного перенаправления
    window.startCourse = function(courseType, lang) {
        console.log('Запуск курса (fixed):', courseType, 'Язык:', lang);
        
        // Определяем URL в зависимости от типа курса и языка
        let url = '';
        
        if (lang === 'ru') {
            switch(courseType) {
                case 'html':
                    url = 'course_rus.html';
                    break;
                case 'database':
                    url = 'database_course_rus.html';
                    break;
                case 'python':
                    url = 'python_course_rus.html';
                    break;
                default:
                    url = 'course_rus.html';
                    courseType = 'html';
            }
        } else {
            switch(courseType) {
                case 'html':
                    url = 'course.html';
                    break;
                case 'database':
                    url = 'database_course.html';
                    break;
                case 'python':
                    url = 'python_course.html';
                    break;
                default:
                    url = 'course.html';
                    courseType = 'html';
            }
        }
        
        // Сохраняем тип курса и язык для правильной загрузки уроков
        localStorage.setItem("lastOpenedCourse", courseType);
        localStorage.setItem("courseLanguage", lang);
        
        // Устанавливаем флаг для открытия первого урока после перезагрузки
        localStorage.setItem("openLessonAfterReload", "1");
        
        // Сохраняем язык в профиле пользователя
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        userData.language = lang;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        
        // Переходим на страницу курса
        console.log('Переходим на URL:', url);
        window.location.href = url;
    };
    
    // Добавляем атрибуты data-course и data-lang к кнопкам, если их нет
    document.querySelectorAll('.course-btn').forEach(button => {
        // Получаем код кнопки
        const buttonCode = button.outerHTML;
        
        // Проверяем, есть ли в коде кнопки вызов startCourse
        if (buttonCode.includes('startCourse(')) {
            // Извлекаем параметры из вызова функции
            const match = buttonCode.match(/startCourse\(['"]([^'"]+)['"],\s*['"]([^'"]+)['"]\)/);
            if (match && match.length >= 3) {
                const courseType = match[1];
                const lang = match[2];
                
                // Добавляем атрибуты, если их нет
                if (!button.hasAttribute('data-course')) {
                    button.setAttribute('data-course', courseType);
                }
                if (!button.hasAttribute('data-lang')) {
                    button.setAttribute('data-lang', lang);
                }
            }
        }
    });
});
