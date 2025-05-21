/**
 * Исправление проблем с тестами и практическими заданиями в русских курсах
 * Этот файл обеспечивает корректную работу проверки тестов и практических заданий
 * для русскоязычных курсов (аналогично казахским курсам)
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Инициализация исправлений для русских курсов...');
    
    // Определяем текущий тип курса
    function getCurrentCourseType() {
        const path = window.location.pathname.toLowerCase();
        
        if (path.includes('python_course_rus')) {
            return 'python_ru';
        } else if (path.includes('database_course_rus')) {
            return 'database_ru';
        } else if (path.includes('html_course_rus')) {
            return 'html_css_ru';
        } else if (path.includes('python_course')) {
            return 'python_kz';
        } else if (path.includes('database_course')) {
            return 'database_kz';
        } else {
            return 'html_css_kz';
        }
    }
    
    // Переопределяем функцию проверки тестов для русских курсов
    const originalCheckQuiz = window.checkQuiz;
    window.checkQuiz = function(lessonNum, courseType) {
        // Если тип курса не передан, определяем его автоматически
        if (!courseType) {
            courseType = getCurrentCourseType();
        }
        
        console.log(`🔧 Проверка теста для урока ${lessonNum}, курс: ${courseType}`);
        
        // Вызываем оригинальную функцию
        const result = originalCheckQuiz.call(this, lessonNum, courseType);
        
        // Обновляем состояние кнопки завершения урока
        setTimeout(() => {
            if (typeof window.updateCompleteButton === 'function') {
                window.updateCompleteButton(lessonNum);
            }
        }, 500);
        
        return result;
    };
    
    // Переопределяем функцию проверки практических заданий для русских курсов
    const originalCheckPractice = window.checkPractice;
    window.checkPractice = function(lessonNum, courseType) {
        // Если тип курса не передан, определяем его автоматически
        if (!courseType) {
            courseType = getCurrentCourseType();
        }
        
        console.log(`🔧 Проверка практического задания для урока ${lessonNum}, курс: ${courseType}`);
        
        // Вызываем оригинальную функцию
        const result = originalCheckPractice.call(this, lessonNum, courseType);
        
        // Обновляем состояние кнопки завершения урока
        setTimeout(() => {
            if (typeof window.updateCompleteButton === 'function') {
                window.updateCompleteButton(lessonNum);
            }
        }, 500);
        
        return result;
    };
    
    // Исправляем функцию проверки завершения урока
    const originalIsLessonCompleted = window.isLessonCompleted;
    window.isLessonCompleted = function(lessonNum) {
        const courseType = getCurrentCourseType();
        
        // Получаем текущий курс из localStorage
        const currentCourse = localStorage.getItem('lastOpenedCourse') || courseType;
        
        console.log(`🔧 Проверка завершения урока ${lessonNum}, курс: ${currentCourse}`);
        
        // Для четных уроков (2, 4, 6, 8) проверяем тест
        if (lessonNum % 2 === 0) {
            return localStorage.getItem(`${currentCourse}_lesson${lessonNum}_quiz`) === 'true';
        } 
        // Для нечетных уроков (1, 3, 5, 7) проверяем практическое задание
        else {
            return localStorage.getItem(`${currentCourse}_lesson${lessonNum}_practice`) === 'true';
        }
    };
    
    // Исправляем функцию вставки тестов и практических заданий
    const originalInsertQuizPractice = window.insertQuizPractice;
    window.insertQuizPractice = function(lessonId, courseType) {
        // Если тип курса не передан, определяем его автоматически
        if (!courseType) {
            courseType = getCurrentCourseType();
        }
        
        console.log(`🔧 Вставка тестов и практических заданий для урока ${lessonId}, курс: ${courseType}`);
        
        // Вызываем оригинальную функцию
        return originalInsertQuizPractice.call(this, lessonId, courseType);
    };
    
    // Добавляем обработчики событий для кнопок проверки
    document.addEventListener('click', function(event) {
        // Проверяем, является ли элемент кнопкой проверки теста
        if (event.target.classList.contains('check-btn') || 
            event.target.classList.contains('quiz-submit-btn')) {
            
            const quizContainer = event.target.closest('.quiz-container');
            if (quizContainer) {
                const lessonNum = quizContainer.getAttribute('data-lesson');
                if (lessonNum) {
                    console.log(`🔧 Нажата кнопка проверки теста для урока ${lessonNum}`);
                    window.checkQuiz(parseInt(lessonNum));
                }
            }
        }
        
        // Проверяем, является ли элемент кнопкой проверки практического задания
        if (event.target.classList.contains('run-btn') || 
            event.target.classList.contains('practice-submit-btn')) {
            
            const practiceContainer = event.target.closest('.practice-container');
            if (practiceContainer) {
                const lessonNum = practiceContainer.getAttribute('data-lesson');
                if (lessonNum) {
                    console.log(`🔧 Нажата кнопка проверки практического задания для урока ${lessonNum}`);
                    window.checkPractice(parseInt(lessonNum));
                }
            }
        }
    });
    
    console.log('🔧 Исправления для русских курсов успешно инициализированы');
});
