/**
 * ФИНАЛЬНОЕ РЕШЕНИЕ: ФУНКЦИИ ДЛЯ ПРОВЕРКИ ТЕСТОВ И ПРАКТИЧЕСКИХ ЗАДАНИЙ
 */

/**
 * Обрабатывает кнопку завершения урока
 */
function processCompletionButton() {
    // Находим кнопку завершения урока
    const completeButtons = document.querySelectorAll('.complete-btn, button.complete, button:contains("Завершить"), button:contains("Аяқтау")');
    
    if (completeButtons.length === 0) {
        console.log('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Кнопка завершения урока не найдена');
        return;
    }
    
    completeButtons.forEach(completeButton => {
        // Проверяем, обработана ли уже кнопка
        if (completeButton.getAttribute('data-processed-complete')) {
            return;
        }
        
        // Помечаем кнопку как обработанную
        completeButton.setAttribute('data-processed-complete', 'true');
        
        // Сохраняем оригинальный обработчик
        const originalOnClick = completeButton.getAttribute('onclick');
        
        // Удаляем оригинальный обработчик
        completeButton.removeAttribute('onclick');
        
        // Добавляем новый обработчик
        completeButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Получаем номер урока
            const lessonNum = getLessonNumber();
            console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Попытка завершения урока ${lessonNum}`);
            
            // Проверяем, выполнены ли все задания
            const testCompleted = isTestCompleted(lessonNum);
            const practiceCompleted = isPracticeCompleted(lessonNum);
            
            console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Тест выполнен: ${testCompleted}, Практика выполнена: ${practiceCompleted}`);
            
            // Проверяем, есть ли тест и практика на странице
            const hasTest = document.querySelector('.test, .quiz, input[type="radio"]') !== null;
            const hasPractice = document.querySelector('.practice, textarea') !== null;
            
            if ((hasTest && !testCompleted) || (hasPractice && !practiceCompleted)) {
                // Если не все задания выполнены, показываем сообщение
                showCompletionMessage(false);
                return;
            }
            
            // Если все задания выполнены, вызываем оригинальный обработчик
            if (originalOnClick) {
                try {
                    eval(originalOnClick);
                } catch (error) {
                    console.error('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Ошибка при вызове оригинального обработчика:', error);
                    completeLesson(lessonNum);
                }
            } else if (typeof window.completeLesson === 'function') {
                window.completeLesson(lessonNum);
            } else {
                // Альтернативный способ завершения урока
                completeLesson(lessonNum);
            }
            
            // Показываем сообщение об успешном завершении
            showCompletionMessage(true);
        });
        
        // Создаем контейнер для сообщения о завершении
        const resultContainer = document.createElement('div');
        resultContainer.className = 'completion-result-container';
        completeButton.parentNode.appendChild(resultContainer);
    });
    
    console.log('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Кнопки завершения урока обработаны');
}

/**
 * Проверяет тест
 */
function checkTest(testSection, lessonNum) {
    // Получаем правильные ответы
    const correctAnswers = getCorrectTestAnswers(lessonNum);
    if (!correctAnswers) {
        console.error('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Ответы для теста не найдены');
        showTestResult(testSection, false);
        return false;
    }
    
    console.log('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Правильные ответы:', correctAnswers);
    
    // Находим все вопросы с радио-кнопками
    const radioButtons = testSection.querySelectorAll('input[type="radio"]');
    if (radioButtons.length === 0) {
        console.error('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Радио-кнопки не найдены');
        showTestResult(testSection, false);
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
            console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Вопрос ${name}: ответ не выбран`);
            allCorrect = false;
            continue;
        }
        
        totalAnswered++;
        
        // Получаем правильный ответ
        const correctAnswer = correctAnswers[name];
        if (!correctAnswer) {
            console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Правильный ответ для вопроса ${name} не найден`);
            continue;
        }
        
        // Проверяем ответ
        const userAnswer = selectedRadio.value;
        const isCorrect = userAnswer === correctAnswer;
        
        console.log(`🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Вопрос ${name}: ответ пользователя ${userAnswer}, правильный ответ ${correctAnswer}, результат: ${isCorrect ? 'верно' : 'неверно'}`);
        
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
    
    // Сохраняем результат
    if (allCorrect) {
        localStorage.setItem(`test_${lessonNum}`, 'passed');
    }
    
    return allCorrect;
}

/**
 * Проверяет практику
 */
function checkPractice(textarea, practiceSection, lessonNum) {
    // Получаем введенный код
    const userCode = textarea.value.trim();
    if (!userCode) {
        console.error('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Код не введен');
        showPracticeResult(practiceSection, false);
        return false;
    }
    
    // Получаем правильный код
    const correctCode = getCorrectPracticeCode(lessonNum);
    if (!correctCode) {
        console.error('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Правильный код не найден');
        showPracticeResult(practiceSection, false);
        return false;
    }
    
    console.log('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Правильный код:', correctCode);
    console.log('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Код пользователя:', userCode);
    
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
        
        console.log('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Ключевые части:', keyParts);
        console.log('🔧 ФИНАЛЬНОЕ РЕШЕНИЕ: Частичное совпадение:', isPartialMatch);
    }
    
    const isCorrect = isExactMatch || isPartialMatch;
    
    // Показываем результат
    showPracticeResult(practiceSection, isCorrect);
    
    // Сохраняем результат
    if (isCorrect) {
        localStorage.setItem(`practice_${lessonNum}`, 'passed');
    }
    
    return isCorrect;
}

/**
 * Показывает результат проверки теста
 */
function showTestResult(testSection, isCorrect) {
    // Находим контейнер для результата
    let resultContainer = testSection.querySelector('.test-result-container');
    if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.className = 'test-result-container';
        testSection.appendChild(resultContainer);
    }
    
    // Очищаем контейнер
    resultContainer.innerHTML = '';
    
    // Создаем элемент для результата
    const resultElement = document.createElement('div');
    resultElement.className = `test-result ${isCorrect ? 'success' : 'error'}`;
    
    // Устанавливаем текст результата
    const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
    if (isCorrect) {
        resultElement.textContent = isRussian ? 
            'Правильно! Все ответы верны.' : 
            'Дұрыс! Барлық жауаптар дұрыс.';
    } else {
        resultElement.textContent = isRussian ? 
            'Есть ошибки. Проверьте ответы и попробуйте снова.' : 
            'Қателіктер бар. Жауаптарды тексеріп, қайталап көріңіз.';
    }
    
    // Добавляем результат в контейнер
    resultContainer.appendChild(resultElement);
}

/**
 * Показывает результат проверки практики
 */
function showPracticeResult(practiceSection, isCorrect) {
    // Находим контейнер для результата
    let resultContainer = practiceSection.querySelector('.practice-result-container');
    if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.className = 'practice-result-container';
        practiceSection.appendChild(resultContainer);
    }
    
    // Очищаем контейнер
    resultContainer.innerHTML = '';
    
    // Создаем элемент для результата
    const resultElement = document.createElement('div');
    resultElement.className = `practice-result ${isCorrect ? 'success' : 'error'}`;
    
    // Устанавливаем текст результата
    const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
    if (isCorrect) {
        resultElement.textContent = isRussian ? 
            'Код верный! Задание выполнено.' : 
            'Код дұрыс! Тапсырма орындалды.';
    } else {
        resultElement.textContent = isRussian ? 
            'Код неверный. Проверьте и попробуйте снова.' : 
            'Код дұрыс емес. Тексеріп, қайталап көріңіз.';
    }
    
    // Добавляем результат в контейнер
    resultContainer.appendChild(resultElement);
}

/**
 * Показывает сообщение о завершении урока
 */
function showCompletionMessage(isSuccess) {
    // Находим кнопку завершения урока
    const completeButton = document.querySelector('.complete-btn, button.complete, button:contains("Завершить"), button:contains("Аяқтау")');
    if (!completeButton) {
        return;
    }
    
    // Находим контейнер для результата
    let resultContainer = completeButton.parentNode.querySelector('.completion-result-container');
    if (!resultContainer) {
        resultContainer = document.createElement('div');
        resultContainer.className = 'completion-result-container';
        completeButton.parentNode.appendChild(resultContainer);
    }
    
    // Очищаем контейнер
    resultContainer.innerHTML = '';
    
    // Если успешно завершено, не показываем сообщение
    if (isSuccess) {
        return;
    }
    
    // Создаем элемент для результата
    const resultElement = document.createElement('div');
    resultElement.className = 'test-result error';
    
    // Устанавливаем текст результата
    const isRussian = document.documentElement.lang === 'ru' || window.location.href.includes('_rus');
    resultElement.textContent = isRussian ? 
        'Для завершения урока необходимо правильно выполнить все задания.' : 
        'Сабақты аяқтау үшін барлық тапсырмаларды дұрыс орындау керек.';
    
    // Добавляем результат в контейнер
    resultContainer.appendChild(resultElement);
}
