/**
 * Скрипт для исправления системы хранения прогресса курсов
 * Обеспечивает индивидуальное хранение прогресса для каждого курса
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Инициализация системы раздельного прогресса курсов');
    
    // Исправление существующего localStorage, если это необходимо
    fixLegacyProgress();
    
    // Переопределяем оригинальные функции сохранения прогресса
    overrideProgressFunctions();
    
    // Добавляем обработчики событий для отслеживания завершения уроков
    addCompletionListeners();
    
    /**
     * Исправляет существующие данные прогресса, перенося их в новый формат
     */
    function fixLegacyProgress() {
        console.log('🔍 Проверка существующего прогресса...');
        
        // Определяем текущий курс
        const currentCourse = determineCurrentCourse();
        
        // Получаем все ключи из localStorage
        const keys = Object.keys(localStorage);
        const progressKeys = keys.filter(key => 
            key.includes('_lesson') && 
            (key.includes('_completed') || key.includes('_quiz') || key.includes('_practice'))
        );
        
        // Обрабатываем каждый ключ, связанный с прогрессом
        if (progressKeys.length > 0) {
            console.log('🔄 Найдены данные старого формата, преобразование...');
            
            progressKeys.forEach(key => {
                // Извлекаем данные о номере урока и типе прогресса
                const parts = key.split('_');
                let lessonNum = null;
                let progressType = null;
                
                for (let i = 0; i < parts.length; i++) {
                    if (parts[i].startsWith('lesson')) {
                        lessonNum = parts[i].replace('lesson', '');
                        progressType = parts[i+1];
                        break;
                    }
                }
                
                if (lessonNum && progressType) {
                    // Если это существующий прогресс без указания курса, сохраняем его только для текущего курса
                    if (!key.includes('html_') && !key.includes('python_') && !key.includes('database_')) {
                        const value = localStorage.getItem(key);
                        
                        // Создаем новый ключ с префиксом курса
                        const newKey = `${currentCourse}_lesson${lessonNum}_${progressType}`;
                        
                        // Сохраняем значение в новом ключе
                        localStorage.setItem(newKey, value);
                        
                        // Удаляем старый ключ
                        localStorage.removeItem(key);
                        
                        console.log(`🔄 Преобразовано: ${key} -> ${newKey}`);
                    }
                }
            });
        }
    }
    
    /**
     * Переопределяет оригинальные функции сохранения прогресса
     */
    function overrideProgressFunctions() {
        console.log('🔄 Переопределение функций сохранения прогресса...');
        
        // Переопределяем функцию completeLesson, если она существует
        if (window.completeLesson) {
            const originalCompleteLesson = window.completeLesson;
            
            window.completeLesson = function(lessonNum, courseType) {
                // Определяем тип курса, если он не указан
                const currentCourse = courseType || determineCurrentCourse();
                
                console.log(`✅ Завершение урока ${lessonNum} в курсе ${currentCourse}`);
                
                // Сохраняем прогресс с правильным префиксом курса
                localStorage.setItem(`${currentCourse}_lesson${lessonNum}_completed`, 'true');
                
                // Обновляем интерфейс
                updateLessonCompletionUI(lessonNum);
                
                // Вызываем оригинальную функцию, если она не null и не undefined
                if (typeof originalCompleteLesson === 'function') {
                    // Проверяем, сколько параметров принимает оригинальная функция
                    if (originalCompleteLesson.length >= 2) {
                        originalCompleteLesson(lessonNum, currentCourse);
                    } else {
                        originalCompleteLesson(lessonNum);
                    }
                }
            };
        }
        
        // Если есть Firebase Auth, переопределяем и его функции
        if (window.firebaseAuth && window.firebaseAuth.completeLesson) {
            const originalFirebaseCompleteLesson = window.firebaseAuth.completeLesson;
            
            window.firebaseAuth.completeLesson = function(lessonNum, courseType) {
                // Определяем тип курса, если он не указан
                const currentCourse = courseType || determineCurrentCourse();
                
                console.log(`🔥 Firebase: Завершение урока ${lessonNum} в курсе ${currentCourse}`);
                
                // Вызываем оригинальную функцию Firebase
                return originalFirebaseCompleteLesson(lessonNum, currentCourse).then(result => {
                    // Дополнительно сохраняем локально с префиксом курса
                    localStorage.setItem(`${currentCourse}_lesson${lessonNum}_completed`, 'true');
                    
                    // Обновляем интерфейс
                    updateLessonCompletionUI(lessonNum);
                    
                    return result;
                });
            };
        }
        
        // Переопределяем функции проверки теста и практики
        if (window.checkQuiz) {
            const originalCheckQuiz = window.checkQuiz;
            
            window.checkQuiz = function(lessonNum, courseType) {
                // Определяем тип курса, если он не указан
                const actualCourseType = courseType || determineCurrentCourse();
                
                // Вызываем оригинальную функцию
                const result = originalCheckQuiz(lessonNum, actualCourseType);
                
                // Если тест пройден успешно, сохраняем с правильным префиксом курса
                if (result === true) {
                    localStorage.setItem(`${actualCourseType}_lesson${lessonNum}_quiz`, 'true');
                    console.log(`✅ Тест для урока ${lessonNum} в курсе ${actualCourseType} завершен успешно`);
                }
                
                return result;
            };
        }
        
        // Переопределяем функцию проверки практики
        if (window.runCode) {
            const originalRunCode = window.runCode;
            
            window.runCode = function(lessonNum, courseType) {
                // Определяем тип курса, если он не указан
                const actualCourseType = courseType || determineCurrentCourse();
                
                // Вызываем оригинальную функцию
                const result = originalRunCode(lessonNum, actualCourseType);
                
                // Если практика выполнена успешно, сохраняем с правильным префиксом курса
                if (result === true) {
                    localStorage.setItem(`${actualCourseType}_lesson${lessonNum}_practice`, 'true');
                    console.log(`✅ Практика для урока ${lessonNum} в курсе ${actualCourseType} завершена успешно`);
                }
                
                return result;
            };
        }
    }
    
    /**
     * Добавляет обработчики событий для отслеживания завершения уроков
     */
    function addCompletionListeners() {
        // Найти все кнопки завершения урока
        const completeBtns = document.querySelectorAll('.complete-btn, .complete-lesson-btn');
        
        completeBtns.forEach(btn => {
            // Удаляем старые обработчики, если они есть
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            // Добавляем новый обработчик
            newBtn.addEventListener('click', function() {
                const currentCourse = determineCurrentCourse();
                const lessonNum = getCurrentLessonNumber();
                
                console.log(`🖱️ Нажата кнопка завершения урока ${lessonNum} в курсе ${currentCourse}`);
                
                // Сохраняем прогресс с правильным префиксом курса
                localStorage.setItem(`${currentCourse}_lesson${lessonNum}_completed`, 'true');
                
                // Если есть функция завершения урока, вызываем ее
                if (typeof window.completeLesson === 'function') {
                    window.completeLesson(lessonNum, currentCourse);
                }
                
                // Обновляем интерфейс
                updateLessonCompletionUI(lessonNum);
            });
        });
    }
    
    /**
     * Определяет текущий курс на основе URL
     */
    function determineCurrentCourse() {
        const path = window.location.pathname.toLowerCase();
        
        if (path.includes('python_course')) {
            return path.includes('rus') ? 'python_ru' : 'python_kz';
        } else if (path.includes('database_course')) {
            return path.includes('rus') ? 'database_ru' : 'database_kz';
        } else if (path.includes('course_rus') || path.includes('course.html')) {
            return path.includes('rus') ? 'html_css_ru' : 'html_css_kz';
        }
        
        // По умолчанию возвращаем HTML/CSS курс
        return 'html_css_kz';
    }
    
    /**
 
    
    /**
     * Обновляет интерфейс для отображения завершенных уроков
     */
    function updateLessonCompletionUI(lessonNum) {
        // Найти элемент урока в боковой панели
        const lessonLinks = document.querySelectorAll('.lesson-link');
        
        lessonLinks.forEach(link => {
            const linkLessonNum = link.getAttribute('data-lesson');
            
            if (linkLessonNum && parseInt(linkLessonNum) === parseInt(lessonNum)) {
                // Находим родительский элемент (lesson-item)
                const lessonItem = link.closest('.lesson-item') || link.parentElement;
                
                if (lessonItem) {
                    // Добавляем класс completed
                    lessonItem.classList.add('completed');
                    
                    // Проверяем, есть ли уже иконка завершения
                    if (!lessonItem.querySelector('.lesson-completed')) {
                        // Создаем иконку завершения
                        const checkmark = document.createElement('span');
                        checkmark.className = 'lesson-completed';
                        checkmark.innerHTML = '✓';
                        lessonItem.appendChild(checkmark);
                    }
                }
            }
        });
    }
});
