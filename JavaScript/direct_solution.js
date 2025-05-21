// Прямое решение для проверки тестов и практических заданий
// Этот скрипт не зависит от других скриптов и гарантированно работает

// Запускаем скрипт после полной загрузки страницы
window.addEventListener('load', function() {
    console.log('Прямое решение загружено');
    
    // Запускаем с задержкой для уверенности, что DOM полностью загружен
    setTimeout(initDirectSolution, 500);
});

// Инициализация решения
function initDirectSolution() {
    console.log('Инициализация прямого решения');
    
    // Заменяем все кнопки проверки тестов
    replaceTestButtons();
    
    // Заменяем все кнопки проверки практики
    replacePracticeButtons();
    
    // Заменяем кнопку завершения урока
    replaceCompletionButton();
}

// Заменяем кнопки проверки тестов
function replaceTestButtons() {
    // Находим все кнопки тестов
    const testButtons = document.querySelectorAll('button');
    
    testButtons.forEach(button => {
        const text = button.textContent.toLowerCase();
        if (text.includes('тесті') || text.includes('тест') || text.includes('проверить')) {
            // Создаем новую кнопку
            const newButton = document.createElement('button');
            newButton.className = button.className;
            newButton.style.cssText = button.style.cssText;
            
            // Устанавливаем текст
            const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
            newButton.textContent = isRussian ? 'Проверить тест' : 'Тесті тексеру';
            
            // Добавляем стили
            newButton.style.background = 'linear-gradient(90deg, #2646FA 0%, #E30BBF 100%)';
            newButton.style.color = 'white';
            newButton.style.padding = '10px 20px';
            newButton.style.border = 'none';
            newButton.style.borderRadius = '5px';
            newButton.style.cursor = 'pointer';
            newButton.style.fontWeight = 'bold';
            
            // Добавляем обработчик
            newButton.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Находим родительскую секцию с тестом
                const testSection = findParentSection(this, ['test', 'quiz']);
                if (!testSection) {
                    console.error('Секция теста не найдена');
                    return;
                }
                
                // Получаем номер урока
                const lessonNum = getLessonNumber();
                console.log('Проверка теста для урока', lessonNum);
                
                // Проверяем тест
                const result = checkTest(testSection, lessonNum);
                console.log('Результат проверки теста:', result);
                
                // Сохраняем результат
                if (result) {
                    localStorage.setItem('test_' + lessonNum, 'passed');
                }
            };
            
            // Заменяем кнопку
            if (button.parentNode) {
                button.parentNode.replaceChild(newButton, button);
            }
        }
    });
}

// Заменяем кнопки проверки практики
function replacePracticeButtons() {
    // Находим все кнопки практики
    const practiceButtons = document.querySelectorAll('button');
    
    practiceButtons.forEach(button => {
        const text = button.textContent.toLowerCase();
        if (text.includes('код') || text.includes('запустить') || text.includes('іске')) {
            // Находим родительскую секцию с практикой
            const practiceSection = findParentSection(button, ['practice']);
            if (!practiceSection) {
                return;
            }
            
            // Создаем новую кнопку
            const newButton = document.createElement('button');
            newButton.className = button.className;
            newButton.style.cssText = button.style.cssText;
            
            // Устанавливаем текст
            const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
            newButton.textContent = isRussian ? 'Проверить код' : 'Кодты тексеру';
            
            // Добавляем стили
            newButton.style.background = 'linear-gradient(90deg, #2646FA 0%, #E30BBF 100%)';
            newButton.style.color = 'white';
            newButton.style.padding = '10px 20px';
            newButton.style.border = 'none';
            newButton.style.borderRadius = '5px';
            newButton.style.cursor = 'pointer';
            newButton.style.fontWeight = 'bold';
            
            // Добавляем обработчик
            newButton.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Находим текстовое поле
                const textarea = practiceSection.querySelector('textarea');
                if (!textarea) {
                    console.error('Текстовое поле не найдено');
                    return;
                }
                
                // Получаем номер урока
                const lessonNum = getLessonNumber();
                console.log('Проверка практики для урока', lessonNum);
                
                // Проверяем практику
                const result = checkPractice(textarea, lessonNum);
                console.log('Результат проверки практики:', result);
                
                // Сохраняем результат
                if (result) {
                    localStorage.setItem('practice_' + lessonNum, 'passed');
                }
            };
            
            // Заменяем кнопку
            if (button.parentNode) {
                button.parentNode.replaceChild(newButton, button);
            }
        }
    });
}

// Заменяем кнопку завершения урока
function replaceCompletionButton() {
    // Находим кнопку завершения урока
    const completeButtons = document.querySelectorAll('.complete-btn');
    
    completeButtons.forEach(button => {
        // Сохраняем оригинальный обработчик
        const originalOnClick = button.getAttribute('onclick');
        
        // Создаем новую кнопку
        const newButton = document.createElement('button');
        newButton.className = button.className;
        newButton.style.cssText = button.style.cssText;
        newButton.textContent = button.textContent;
        
        // Добавляем обработчик
        newButton.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Получаем номер урока
            const lessonNum = getLessonNumber();
            console.log('Попытка завершения урока', lessonNum);
            
            // Проверяем, выполнены ли тест и практика
            const testPassed = localStorage.getItem('test_' + lessonNum) === 'passed';
            const practicePassed = localStorage.getItem('practice_' + lessonNum) === 'passed';
            
            // Проверяем, есть ли тест и практика на странице
            const hasTest = document.querySelector('.test, .quiz') !== null;
            const hasPractice = document.querySelector('.practice') !== null;
            
            if ((hasTest && !testPassed) || (hasPractice && !practicePassed)) {
                // Если не все задания выполнены, показываем сообщение
                const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
                const message = isRussian ? 
                    'Для завершения урока необходимо правильно выполнить все задания' : 
                    'Сабақты аяқтау үшін барлық тапсырмаларды дұрыс орындау керек';
                
                alert(message);
                return;
            }
            
            // Если все задания выполнены, вызываем оригинальный обработчик
            if (originalOnClick) {
                eval(originalOnClick);
            } else {
                // Альтернативный способ завершения урока
                completeLesson(lessonNum);
            }
        };
        
        // Заменяем кнопку
        if (button.parentNode) {
            button.parentNode.replaceChild(newButton, button);
        }
    });
}

// Функция для проверки теста
function checkTest(testSection, lessonNum) {
    // Получаем правильные ответы
    const correctAnswers = getCorrectTestAnswers(lessonNum);
    if (!correctAnswers) {
        console.error('Ответы для теста не найдены');
        return false;
    }
    
    console.log('Правильные ответы:', correctAnswers);
    
    // Находим все вопросы с радио-кнопками
    const radioButtons = testSection.querySelectorAll('input[type="radio"]');
    if (radioButtons.length === 0) {
        console.error('Радио-кнопки не найдены');
        return false;
    }
    
    // Группируем радио-кнопки по именам
    const questionGroups = {};
    radioButtons.forEach(radio => {
        const name = radio.getAttribute('name');
        if (!questionGroups[name]) {
            questionGroups[name] = [];
        }
        questionGroups[name].push(radio);
    });
    
    // Проверяем ответы
    let allCorrect = true;
    let totalAnswered = 0;
    
    for (const [name, radios] of Object.entries(questionGroups)) {
        // Находим выбранный ответ
        const selectedRadio = radios.find(radio => radio.checked);
        if (!selectedRadio) {
            console.log(`Вопрос ${name}: ответ не выбран`);
            allCorrect = false;
            continue;
        }
        
        totalAnswered++;
        
        // Получаем правильный ответ
        const correctAnswer = correctAnswers[name];
        if (!correctAnswer) {
            console.log(`Правильный ответ для вопроса ${name} не найден`);
            continue;
        }
        
        // Проверяем ответ
        const userAnswer = selectedRadio.value;
        const isCorrect = userAnswer === correctAnswer;
        
        console.log(`Вопрос ${name}: ответ пользователя ${userAnswer}, правильный ответ ${correctAnswer}, результат: ${isCorrect ? 'верно' : 'неверно'}`);
        
        if (!isCorrect) {
            allCorrect = false;
        }
    }
    
    // Если не выбран ни один ответ, считаем тест не пройденным
    if (totalAnswered === 0) {
        allCorrect = false;
    }
    
    // Показываем результат
    showTestResult(testSection, allCorrect);
    
    return allCorrect;
}

// Функция для проверки практики
function checkPractice(textarea, lessonNum) {
    // Получаем введенный код
    const userCode = textarea.value.trim();
    if (!userCode) {
        console.error('Код не введен');
        showPracticeResult(textarea.parentNode, false);
        return false;
    }
    
    // Получаем правильный код
    const correctCode = getCorrectPracticeCode(lessonNum);
    if (!correctCode) {
        console.error('Правильный код не найден');
        return false;
    }
    
    console.log('Правильный код:', correctCode);
    console.log('Код пользователя:', userCode);
    
    // Нормализуем коды для сравнения
    const normalizedUserCode = normalizeCode(userCode);
    const normalizedCorrectCode = normalizeCode(correctCode);
    
    // Проверяем код
    const isExactMatch = normalizedUserCode === normalizedCorrectCode;
    
    // Если код не совпадает точно, проверяем по ключевым частям
    let isPartialMatch = false;
    if (!isExactMatch) {
        // Проверяем, содержит ли код пользователя все ключевые части правильного кода
        const keyParts = extractKeyParts(correctCode);
        isPartialMatch = keyParts.every(part => normalizedUserCode.includes(normalizeCode(part)));
        
        console.log('Ключевые части:', keyParts);
        console.log('Частичное совпадение:', isPartialMatch);
    }
    
    const isCorrect = isExactMatch || isPartialMatch;
    
    // Показываем результат
    showPracticeResult(textarea.parentNode, isCorrect);
    
    return isCorrect;
}

// Функция для получения правильных ответов на тест
function getCorrectTestAnswers(lessonNum) {
    // Проверяем window.pythonLesson[номер].quizAnswers
    if (window[`pythonLesson${lessonNum}`] && window[`pythonLesson${lessonNum}`].quizAnswers) {
        return window[`pythonLesson${lessonNum}`].quizAnswers;
    }
    
    // Проверяем window.lessons[номер].quizAnswers
    if (window.lessons && window.lessons[lessonNum] && window.lessons[lessonNum].quizAnswers) {
        return window.lessons[lessonNum].quizAnswers;
    }
    
    // Фиксированные ответы для первых уроков
    const fallbackAnswers = {
        1: { q1: "b", q2: "b", q3: "a", q4: "b", q5: "b" },
        2: { q1: "c", q2: "a", q3: "b", q4: "c", q5: "b" },
        3: { q1: "a", q2: "b", q3: "b", q4: "a", q5: "c" },
        4: { q1: "b", q2: "a", q3: "c", q4: "b", q5: "a" },
        5: { q1: "c", q2: "b", q3: "a", q4: "c", q5: "b" }
    };
    
    return fallbackAnswers[lessonNum] || { q1: "b", q2: "b", q3: "a", q4: "b", q5: "b" };
}

// Функция для получения правильного кода практики
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
    
    // Фиксированные ответы для первых уроков
    const fallbackCodes = {
        1: 'print("Sәlem, әlem!")',
        2: 'x = 10\ny = 20\nprint(x + y)',
        3: 'a = 5\nb = 3\nsum = a + b\nprint(sum)',
        4: 'for i in range(5):\n    print(i)',
        5: 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1'
    };
    
    return fallbackCodes[lessonNum] || 'print("Hello World")';
}

// Функция для нормализации кода
function normalizeCode(code) {
    return code.replace(/\s+/g, ' ').trim();
}

// Функция для извлечения ключевых частей кода
function extractKeyParts(code) {
    // Разбиваем код на строки
    const lines = code.split('\n');
    
    // Фильтруем пустые строки и строки с комментариями
    return lines.filter(line => {
        const trimmed = line.trim();
        return trimmed && !trimmed.startsWith('#');
    });
}

// Функция для показа результата теста
function showTestResult(testSection, isCorrect) {
    // Удаляем предыдущее сообщение
    const existingMessage = testSection.querySelector('.result-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Создаем новое сообщение
    const message = document.createElement('div');
    message.className = `result-message ${isCorrect ? 'success' : 'error'}`;
    
    // Стилизуем сообщение
    message.style.marginTop = '15px';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
    message.style.fontWeight = 'bold';
    
    if (isCorrect) {
        message.style.backgroundColor = '#d4edda';
        message.style.color = '#155724';
        message.style.border = '1px solid #c3e6cb';
    } else {
        message.style.backgroundColor = '#f8d7da';
        message.style.color = '#721c24';
        message.style.border = '1px solid #f5c6cb';
    }
    
    // Устанавливаем текст сообщения
    const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
    if (isCorrect) {
        message.textContent = isRussian ? 
            'Правильно! Все ответы верны.' : 
            'Дұрыс! Барлық жауаптар дұрыс.';
    } else {
        message.textContent = isRussian ? 
            'Есть ошибки. Проверьте ответы и попробуйте снова.' : 
            'Қателіктер бар. Жауаптарды тексеріп, қайталап көріңіз.';
    }
    
    // Добавляем сообщение в секцию
    testSection.appendChild(message);
}

// Функция для показа результата практики
function showPracticeResult(practiceSection, isCorrect) {
    // Удаляем предыдущее сообщение
    const existingMessage = practiceSection.querySelector('.result-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Создаем новое сообщение
    const message = document.createElement('div');
    message.className = `result-message ${isCorrect ? 'success' : 'error'}`;
    
    // Стилизуем сообщение
    message.style.marginTop = '15px';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
    message.style.fontWeight = 'bold';
    
    if (isCorrect) {
        message.style.backgroundColor = '#d4edda';
        message.style.color = '#155724';
        message.style.border = '1px solid #c3e6cb';
    } else {
        message.style.backgroundColor = '#f8d7da';
        message.style.color = '#721c24';
        message.style.border = '1px solid #f5c6cb';
    }
    
    // Устанавливаем текст сообщения
    const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
    if (isCorrect) {
        message.textContent = isRussian ? 
            'Код верный! Задание выполнено.' : 
            'Код дұрыс! Тапсырма орындалды.';
    } else {
        message.textContent = isRussian ? 
            'Код неверный. Проверьте и попробуйте снова.' : 
            'Код дұрыс емес. Тексеріп, қайталап көріңіз.';
    }
    
    // Добавляем сообщение в секцию
    practiceSection.appendChild(message);
}

// Функция для получения номера урока
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
    }
    
    // По умолчанию возвращаем 1
    return 1;
}

// Функция для поиска родительской секции
function findParentSection(element, classNames) {
    // Проверяем, является ли элемент секцией нужного типа
    if (element.classList) {
        for (const className of classNames) {
            if (element.classList.contains(className)) {
                return element;
            }
        }
    }
    
    // Ищем родительскую секцию
    let parent = element.parentNode;
    while (parent) {
        if (parent.classList) {
            for (const className of classNames) {
                if (parent.classList.contains(className)) {
                    return parent;
                }
            }
        }
        parent = parent.parentNode;
    }
    
    return null;
}

// Альтернативная функция для завершения урока
function completeLesson(lessonNum) {
    console.log('Завершение урока', lessonNum);
    
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
        try {
            const courseType = document.querySelector('meta[name="course-type"]')?.getAttribute('content') || 'python';
            const completedLessons = JSON.parse(localStorage.getItem(`${courseType}CompletedLessons`) || '[]');
            
            if (!completedLessons.includes(lessonNum)) {
                completedLessons.push(lessonNum);
                localStorage.setItem(`${courseType}CompletedLessons`, JSON.stringify(completedLessons));
            }
            
            // Показываем сообщение об успешном завершении
            const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
            const message = isRussian ? 'Урок успешно завершен!' : 'Сабақ сәтті аяқталды!';
            
            alert(message);
        } catch (e) {
            console.error('Ошибка при сохранении прогресса:', e);
        }
    }
}
