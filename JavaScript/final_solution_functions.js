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
