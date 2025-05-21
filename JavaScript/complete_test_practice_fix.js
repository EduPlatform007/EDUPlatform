/**
 * ПОЛНОЕ ИСПРАВЛЕНИЕ СИСТЕМЫ ТЕСТОВ И ПРАКТИЧЕСКИХ ЗАДАНИЙ
 * Этот файл решает все проблемы с проверкой тестов и практических заданий
 * для казахских и русских курсов
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Инициализация полного исправления системы тестов и практических заданий...');
    
    /**
     * Определяет текущий тип курса на основе URL
     */
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
    
    /**
     * Получает номер текущего урока из URL или активного элемента
     */
    function getCurrentLessonNumber() {
        // Проверяем URL параметры
        const urlParams = new URLSearchParams(window.location.search);
        const lessonParam = urlParams.get('lesson');
        if (lessonParam) {
            return parseInt(lessonParam);
        }
        
        // Проверяем lastOpenedLesson в localStorage
        const savedLessonNum = localStorage.getItem('lastOpenedLesson');
        if (savedLessonNum) {
            return parseInt(savedLessonNum);
        }
        
        // По умолчанию возвращаем 1
        return 1;
    }
    
    /**
     * Получает правильный ответ на тест для урока
     */
    function getQuizAnswers(lessonNum, courseType) {
        // Определяем источник данных в зависимости от типа курса
        let quizPracticeData;
        
        if (courseType === 'html_css_kz') {
            quizPracticeData = window.htmlCssKzQuizPractice;
        } else if (courseType === 'html_css_ru') {
            quizPracticeData = window.htmlCssRuQuizPractice;
        } else if (courseType === 'python_kz') {
            quizPracticeData = window.pythonKzQuizPractice;
        } else if (courseType === 'python_ru') {
            quizPracticeData = window.pythonRuQuizPractice;
        } else if (courseType === 'database_kz') {
            quizPracticeData = window.databaseKzQuizPractice;
        } else if (courseType === 'database_ru') {
            quizPracticeData = window.databaseRuQuizPractice;
        }
        
        if (!quizPracticeData || !quizPracticeData[lessonNum]) {
            console.error(`Ответы на тест для урока ${lessonNum} курса ${courseType} не найдены`);
            return null;
        }
        
        return quizPracticeData[lessonNum].quizAnswers;
    }
    
    /**
     * Получает правильный ответ на практическое задание для урока
     */
    function getPracticeAnswer(lessonNum, courseType) {
        // Определяем источник данных в зависимости от типа курса
        let quizPracticeData;
        
        if (courseType === 'html_css_kz') {
            quizPracticeData = window.htmlCssKzQuizPractice;
        } else if (courseType === 'html_css_ru') {
            quizPracticeData = window.htmlCssRuQuizPractice;
        } else if (courseType === 'python_kz') {
            quizPracticeData = window.pythonKzQuizPractice;
        } else if (courseType === 'python_ru') {
            quizPracticeData = window.pythonRuQuizPractice;
        } else if (courseType === 'database_kz') {
            quizPracticeData = window.databaseKzQuizPractice;
        } else if (courseType === 'database_ru') {
            quizPracticeData = window.databaseRuQuizPractice;
        }
        
        if (!quizPracticeData || !quizPracticeData[lessonNum]) {
            console.error(`Ответ на практику для урока ${lessonNum} курса ${courseType} не найден`);
            return null;
        }
        
        return quizPracticeData[lessonNum].practiceAnswer;
    }
    
    /**
     * Улучшенное сравнение кода для проверки практического задания
     */
    function compareCodes(userCode, correctCode) {
        if (!userCode || !correctCode) {
            return false;
        }
        
        // Нормализация кода для сравнения
        function normalizeCode(code) {
            return code
                .replace(/\r\n/g, '\n') // Windows line endings
                .replace(/\s+/g, ' ')   // Multiple spaces to single space
                .replace(/;\s*/g, ';')  // Remove spaces after semicolons
                .replace(/{\s*/g, '{')  // Remove spaces after opening braces
                .replace(/\s*}/g, '}')  // Remove spaces before closing braces
                .replace(/['"`]/g, '"') // Normalize all quotes
                .toLowerCase()          // Case-insensitive
                .trim();
        }
        
        const normalizedUserCode = normalizeCode(userCode);
        const normalizedCorrectCode = normalizeCode(correctCode);
        
        // Точное совпадение
        if (normalizedUserCode === normalizedCorrectCode) {
            return true;
        }
        
        // Проверяем ключевые строки
        const keyLines = correctCode.split('\n').filter(line => line.trim() !== '');
        let allLinesFound = true;
        
        for (const line of keyLines) {
            const normalizedLine = normalizeCode(line);
            if (!normalizedUserCode.includes(normalizedLine)) {
                allLinesFound = false;
                break;
            }
        }
        
        if (allLinesFound) {
            return true;
        }
        
        // Для HTML и CSS проверяем без учета кавычек
        const htmlNormalizedUser = normalizedUserCode.replace(/"/g, '');
        const htmlNormalizedCorrect = normalizedCorrectCode.replace(/"/g, '');
        
        if (htmlNormalizedUser === htmlNormalizedCorrect) {
            return true;
        }
        
        // Для Python проверяем наличие ключевых функций и выражений
        if (correctCode.includes('print(') && userCode.includes('print(')) {
            const printStatementsCorrect = correctCode.match(/print\([^)]*\)/g) || [];
            const printStatementsUser = userCode.match(/print\([^)]*\)/g) || [];
            
            if (printStatementsCorrect.length > 0 && 
                printStatementsCorrect.length === printStatementsUser.length) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * ИСПРАВЛЕННАЯ функция для проверки ответов на тест
     */
    window.fixedCheckQuiz = function(lessonNum, courseType) {
        console.log(`✅ Проверка теста для урока ${lessonNum}, курс: ${courseType || getCurrentCourseType()}`);
        
        if (!courseType) {
            courseType = getCurrentCourseType();
        }
        
        // Сохраняем текущий тип курса
        localStorage.setItem('currentCourseType', courseType);
        
        // Получаем правильные ответы
        const answers = getQuizAnswers(lessonNum, courseType);
        if (!answers) {
            console.error('Ответы на тест не найдены');
            return false;
        }
        
        let allCorrect = true;
        
        // Проверяем каждый ответ
        for (const question in answers) {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            console.log(`Вопрос ${question}: ожидаемый ответ ${answers[question]}, выбранный ответ ${selected ? selected.value : 'не выбран'}`);
            
            if (!selected || selected.value !== answers[question]) {
                allCorrect = false;
                break;
            }
        }
        
        // Получаем текущий язык
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const lang = userData.language || 'kk';
        
        // Находим контейнер теста
        const quizContainer = document.querySelector(`.quiz-container[data-lesson="${lessonNum}"]`);
        if (!quizContainer) {
            console.error(`Контейнер теста для урока ${lessonNum} не найден`);
            return false;
        }
        
        // Находим или создаем контейнер для результата
        let resultMessage = quizContainer.querySelector('.quiz-result');
        if (!resultMessage) {
            resultMessage = document.createElement('div');
            resultMessage.className = 'quiz-result';
            quizContainer.appendChild(resultMessage);
        }
        
        // Показываем результат
        if (allCorrect) {
            resultMessage.innerHTML = '<p class="success-message">✅ ' + 
                (lang === 'kk' ? 'Сіз барлық сұрақтарға дұрыс жауап бердіңіз!' : 'Вы правильно ответили на все вопросы!') + 
                '</p>';
            
            // Сохраняем результат
            localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'true');
            
            console.log(`✅ Тест для урока ${lessonNum} пройден успешно`);
        } else {
            resultMessage.innerHTML = '<p class="error-message">❌ ' + 
                (lang === 'kk' ? 'Кейбір жауаптар дұрыс емес. Қайталап көріңіз!' : 'Некоторые ответы неверны. Попробуйте еще раз!') + 
                '</p>';
            
            console.log(`❌ Тест для урока ${lessonNum} пройден неуспешно`);
        }
        
        // Обновляем состояние кнопки завершения урока
        setTimeout(function() {
            window.fixedUpdateCompleteButton(lessonNum);
        }, 300);
        
        return allCorrect;
    };
    
    /**
     * ИСПРАВЛЕННАЯ функция для проверки практического задания
     */
    window.fixedCheckPractice = function(lessonNum, courseType) {
        console.log(`✅ Проверка практики для урока ${lessonNum}, курс: ${courseType || getCurrentCourseType()}`);
        
        if (!courseType) {
            courseType = getCurrentCourseType();
        }
        
        // Сохраняем текущий тип курса
        localStorage.setItem('currentCourseType', courseType);
        
        // Находим контейнер практики
        const practiceContainer = document.querySelector(`.practice-container[data-lesson="${lessonNum}"]`);
        if (!practiceContainer) {
            console.error(`Контейнер практики для урока ${lessonNum} не найден`);
            return false;
        }
        
        // Находим поле ввода кода
        const codeInput = practiceContainer.querySelector('.practice-code') || 
                          practiceContainer.querySelector('textarea');
        if (!codeInput) {
            console.error(`Поле ввода кода для урока ${lessonNum} не найдено`);
            return false;
        }
        
        // Получаем введенный код
        const userCode = codeInput.value.trim();
        
        // Получаем правильный ответ
        const correctCode = getPracticeAnswer(lessonNum, courseType);
        if (!correctCode) {
            console.error('Правильный ответ на практику не найден');
            return false;
        }
        
        // Сравниваем код
        const isCorrect = compareCodes(userCode, correctCode);
        
        // Получаем текущий язык
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const lang = userData.language || 'kk';
        
        // Находим или создаем контейнер для результата
        let resultMessage = practiceContainer.querySelector('.practice-result');
        if (!resultMessage) {
            resultMessage = document.createElement('div');
            resultMessage.className = 'practice-result';
            practiceContainer.appendChild(resultMessage);
        }
        
        // Показываем результат
        if (isCorrect) {
            resultMessage.innerHTML = '<p class="success-message">✅ ' + 
                (lang === 'kk' ? 'Практикалық тапсырма дұрыс орындалды!' : 'Практическое задание выполнено верно!') + 
                '</p>';
            
            // Сохраняем результат
            localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
            
            console.log(`✅ Практика для урока ${lessonNum} пройдена успешно`);
        } else {
            resultMessage.innerHTML = '<p class="error-message">❌ ' + 
                (lang === 'kk' ? 'Кодыңызда қателер бар. Қайталап көріңіз!' : 'В вашем коде есть ошибки. Попробуйте еще раз!') + 
                '</p>';
            
            console.log(`❌ Практика для урока ${lessonNum} пройдена неуспешно`);
        }
        
        // Обновляем состояние кнопки завершения урока
        setTimeout(function() {
            window.fixedUpdateCompleteButton(lessonNum);
        }, 300);
        
        return isCorrect;
    };
    
    /**
     * ИСПРАВЛЕННАЯ функция для проверки, завершен ли урок
     */
    window.fixedIsLessonCompleted = function(lessonNum) {
        const courseType = localStorage.getItem('currentCourseType') || getCurrentCourseType();
        
        console.log(`✅ Проверка завершения урока ${lessonNum}, курс: ${courseType}`);
        
        // Для урока 9 проверяем все уровни и практику
        if (lessonNum === 9) {
            const easyCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz_easy`) === 'true';
            const mediumCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz_medium`) === 'true';
            const hardCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz_hard`) === 'true';
            const practiceCompleted = localStorage.getItem(`${courseType}_lesson${lessonNum}_practice`) === 'true';
            
            console.log(`Урок 9, статусы: easy=${easyCompleted}, medium=${mediumCompleted}, hard=${hardCompleted}, practice=${practiceCompleted}`);
            
            return easyCompleted && mediumCompleted && hardCompleted && practiceCompleted;
        }
        
        // Для остальных уроков проверяем либо тест, либо практическое задание
        let completed = false;
        
        // Если это четный урок (2, 4, 6, 8), проверяем тест
        if (lessonNum % 2 === 0) {
            completed = localStorage.getItem(`${courseType}_lesson${lessonNum}_quiz`) === 'true';
            console.log(`Урок ${lessonNum} (четный), проверяем тест: ${completed}`);
        } 
        // Если это нечетный урок (1, 3, 5, 7), проверяем практическое задание
        else {
            completed = localStorage.getItem(`${courseType}_lesson${lessonNum}_practice`) === 'true';
            console.log(`Урок ${lessonNum} (нечетный), проверяем практику: ${completed}`);
        }
        
        return completed;
    };
    
    /**
     * ИСПРАВЛЕННАЯ функция для обновления состояния кнопки завершения урока
     */
    window.fixedUpdateCompleteButton = function(lessonNum) {
        console.log(`✅ Обновление состояния кнопки завершения для урока ${lessonNum}`);
        
        // Находим кнопку завершения урока
        const completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
        if (!completeBtn) {
            console.error('Кнопка завершения урока не найдена');
            return;
        }
        
        // Проверяем, завершен ли урок
        const completed = window.fixedIsLessonCompleted(lessonNum);
        console.log(`Статус выполнения урока ${lessonNum}: ${completed}`);
        
        // Обновляем атрибуты кнопки
        if (completed) {
            completeBtn.classList.remove('disabled');
            completeBtn.disabled = false;
            
            console.log('✅ Кнопка завершения урока активирована');
        } else {
            completeBtn.classList.add('disabled');
            completeBtn.disabled = true;
            
            console.log('❌ Кнопка завершения урока деактивирована, не все задания выполнены');
        }
        
        // Обновляем обработчик нажатия
        completeBtn.onclick = function() {
            if (typeof window.completeLesson === 'function') {
                window.completeLesson(lessonNum);
            }
        };
    };
    
    // Заменяем оригинальные функции нашими исправленными версиями
    window.checkQuiz = window.fixedCheckQuiz;
    window.checkPractice = window.fixedCheckPractice;
    window.isLessonCompleted = window.fixedIsLessonCompleted;
    window.updateCompleteButton = window.fixedUpdateCompleteButton;
    
    // Добавляем обработчики событий для кнопок проверки
    document.addEventListener('click', function(event) {
        // Обработчик для кнопок проверки теста
        if (event.target.classList.contains('check-btn') || 
            event.target.classList.contains('quiz-submit-btn')) {
            
            const quizContainer = event.target.closest('.quiz-container');
            if (quizContainer) {
                const lessonNum = quizContainer.getAttribute('data-lesson');
                if (lessonNum) {
                    console.log(`✅ Нажата кнопка проверки теста для урока ${lessonNum}`);
                    window.fixedCheckQuiz(parseInt(lessonNum));
                }
            }
        }
        
        // Обработчик для кнопок проверки практического задания
        if (event.target.classList.contains('run-btn') || 
            event.target.classList.contains('practice-submit-btn') ||
            event.target.classList.contains('run-code-btn')) {
            
            const practiceContainer = event.target.closest('.practice-container');
            if (practiceContainer) {
                const lessonNum = practiceContainer.getAttribute('data-lesson');
                if (lessonNum) {
                    console.log(`✅ Нажата кнопка проверки практического задания для урока ${lessonNum}`);
                    window.fixedCheckPractice(parseInt(lessonNum));
                }
            }
        }
    });
    
    // Инициализация - обновляем состояние кнопки завершения для текущего урока
    setTimeout(function() {
        const currentLessonNum = getCurrentLessonNumber();
        if (currentLessonNum) {
            console.log(`✅ Инициализация кнопки завершения для урока ${currentLessonNum}`);
            window.fixedUpdateCompleteButton(currentLessonNum);
        }
    }, 1000);
    
    console.log('✅ Полное исправление системы тестов и практических заданий успешно инициализировано');
});
