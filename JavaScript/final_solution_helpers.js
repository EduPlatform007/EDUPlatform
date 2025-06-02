/**
 * ФИНАЛЬНОЕ РЕШЕНИЕ: ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
 */

/**
 * Получает правильные ответы для теста
 */
function getCorrectTestAnswers(lessonNum) {
    // Проверяем window.pythonLesson[номер].quizAnswers
    if (window[`pythonLesson${lessonNum}`] && window[`pythonLesson${lessonNum}`].quizAnswers) {
        return window[`pythonLesson${lessonNum}`].quizAnswers;
    }
    
    // Проверяем window.lessons[номер].quizAnswers
    if (window.lessons && window.lessons[lessonNum] && window.lessons[lessonNum].quizAnswers) {
        return window.lessons[lessonNum].quizAnswers;
    }
    
    // Проверяем window.quizAnswers
    if (window.quizAnswers && window.quizAnswers[lessonNum]) {
        return window.quizAnswers[lessonNum];
    }
    
    // Фиксированные ответы для первых уроков Python
    const pythonAnswers = {
        1: { q1: "b", q2: "b", q3: "a", q4: "b", q5: "b" },
        2: { q1: "c", q2: "a", q3: "b", q4: "c", q5: "b" },
        3: { q1: "a", q2: "b", q3: "b", q4: "a", q5: "c" },
        4: { q1: "b", q2: "a", q3: "c", q4: "b", q5: "a" },
        5: { q1: "c", q2: "b", q3: "a", q4: "c", q5: "b" }
    };
    
    // Фиксированные ответы для первых уроков HTML
    const htmlAnswers = {
        1: { q1: "a", q2: "c", q3: "b", q4: "a", q5: "c" },
        2: { q1: "b", q2: "a", q3: "c", q4: "b", q5: "a" },
        3: { q1: "c", q2: "b", q3: "a", q4: "c", q5: "b" },
        4: { q1: "a", q2: "c", q3: "b", q4: "a", q5: "c" },
        5: { q1: "b", q2: "a", q3: "c", q4: "b", q5: "a" }
    };
    
    // Определяем тип курса
    const isHtmlCourse = window.location.href.includes('html') || 
                         document.title.toLowerCase().includes('html');
    
    // Возвращаем соответствующие ответы
    return isHtmlCourse ? htmlAnswers[lessonNum] : pythonAnswers[lessonNum];
}

/**
 * Получает правильный код для практики
 */
function getCorrectPracticeCode(lessonNum) {
    // Проверяем window.pythonLesson[номер].practiceCode
    if (window[`pythonLesson${lessonNum}`] && window[`pythonLesson${lessonNum}`].practiceCode) {
        return window[`pythonLesson${lessonNum}`].practiceCode;
    }
    
    // Проверяем window.practiceAnswers
    if (window.practiceAnswers) {
        // Проверяем числовой ключ
        if (window.practiceAnswers[lessonNum]) {
            return window.practiceAnswers[lessonNum];
        }
        
        // Проверяем строковый ключ (например, "1-сабақ")
        const lessonKey = `${lessonNum}-сабақ`;
        if (window.practiceAnswers[lessonKey]) {
            return window.practiceAnswers[lessonKey];
        }
    }
    
    // Фиксированные ответы для первых уроков Python
    const pythonCodes = {
        1: 'print("Sәlem, әlem!")',
        2: 'x = 10\ny = 20\nprint(x + y)',
        3: 'a = 5\nb = 3\nsum = a + b\nprint(sum)',
        4: 'for i in range(5):\n    print(i)',
        5: 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1'
    };
    
    // Фиксированные ответы для первых уроков HTML
    const htmlCodes = {
        1: '<html>\n<head>\n<title>Моя первая страница</title>\n</head>\n<body>\n<h1>Привет, мир!</h1>\n</body>\n</html>',
        2: '<p>Это <strong>жирный</strong> и <em>курсивный</em> текст.</p>',
        3: '<ul>\n<li>Элемент 1</li>\n<li>Элемент 2</li>\n<li>Элемент 3</li>\n</ul>',
        4: '<a href="https://www.example.com">Ссылка на пример</a>',
        5: '<img src="image.jpg" alt="Описание изображения">'
    };
    
    // Определяем тип курса
    const isHtmlCourse = window.location.href.includes('html') || 
                         document.title.toLowerCase().includes('html');
    
    // Возвращаем соответствующий код
    return isHtmlCourse ? htmlCodes[lessonNum] : pythonCodes[lessonNum];
}

/**
 * Нормализует код для сравнения
 */
function normalizeCode(code) {
    return code.replace(/\s+/g, ' ').trim().toLowerCase();
}

/**
 * Извлекает ключевые части кода
 */
function extractKeyParts(code) {
    // Разбиваем код на строки
    const lines = code.split('\n');
    
    // Фильтруем пустые строки и строки с комментариями
    return lines.filter(line => {
        const trimmed = line.trim();
        return trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('//');
    });
}

/**
 * Проверяет, выполнен ли тест
 */
function isTestCompleted(lessonNum) {
    // Проверяем, есть ли тест на странице
    const testSection = document.querySelector('.test, .quiz, input[type="radio"]');
    if (!testSection) {
        return true; // Если теста нет, считаем его выполненным
    }
    
    // Проверяем, сохранен ли результат в localStorage
    return localStorage.getItem(`test_${lessonNum}`) === 'passed';
}

/**
 * Проверяет, выполнено ли практическое задание
 */
function isPracticeCompleted(lessonNum) {
    // Проверяем, есть ли практика на странице
    const practiceSection = document.querySelector('.practice, textarea');
    if (!practiceSection) {
        return true; // Если практики нет, считаем ее выполненной
    }
    
    // Проверяем, сохранен ли результат в localStorage
    return localStorage.getItem(`practice_${lessonNum}`) === 'passed';
}

/**
 * Получает номер урока
 */
function getLessonNumber() {
    // Проверяем URL
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    
    if (lessonParam) {
        const match = lessonParam.match(/\d+/);
        if (match) {
            return parseInt(match[0]);
        }
    }
    
    // Проверяем активный элемент в списке уроков
    const activeLesson = document.querySelector('.lesson-item.active, .lesson-list li.active');
    if (activeLesson) {
        const lessonId = activeLesson.getAttribute('data-lesson-id');
        if (lessonId) {
            const match = lessonId.match(/\d+/);
            if (match) {
                return parseInt(match[0]);
            }
        }
        
        // Проверяем текст элемента
        const text = activeLesson.textContent;
        const match = text.match(/\d+/);
        if (match) {
            return parseInt(match[0]);
        }
    }
    
    // Проверяем заголовок страницы
    const titleMatch = document.title.match(/\d+/);
    if (titleMatch) {
        return parseInt(titleMatch[0]);
    }
    
    // По умолчанию возвращаем 1
    return 1;
}

/**
 * Альтернативная функция для завершения урока
 */
function completeLesson(lessonNum) {
    console.log('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Завершение урока', lessonNum);
    
    try {
        // Находим активный элемент в списке уроков
        const activeLesson = document.querySelector('.lesson-item.active, .lesson-list li.active');
        if (activeLesson) {
            // Помечаем урок как завершенный
            activeLesson.classList.add('completed');
            
            // Добавляем галочку
            if (!activeLesson.querySelector('.lesson-completed')) {
                const checkmark = document.createElement('span');
                checkmark.className = 'lesson-completed';
                checkmark.innerHTML = '✓';
                activeLesson.appendChild(checkmark);
            }
            
            // Сохраняем прогресс
            const courseType = document.querySelector('meta[name="course-type"]')?.getAttribute('content') || 
                              (window.location.href.includes('html') ? 'html' : 'python');
            const completedLessons = JSON.parse(localStorage.getItem(`${courseType}CompletedLessons`) || '[]');
            
            if (!completedLessons.includes(lessonNum)) {
                completedLessons.push(lessonNum);
                localStorage.setItem(`${courseType}CompletedLessons`, JSON.stringify(completedLessons));
            }
        }
        
        // Пытаемся найти следующий урок
        const nextLesson = document.querySelector('.next-lesson, .lesson-next');
        if (nextLesson && nextLesson.href) {
            // Если нашли ссылку на следующий урок, переходим по ней через 1 секунду
            setTimeout(() => {
                window.location.href = nextLesson.href;
            }, 1000);
        }
    } catch (error) {
        console.error('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Ошибка при завершении урока:', error);
    }
}
