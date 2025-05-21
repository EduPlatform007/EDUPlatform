/**
 * Фиксация языка интерфейса в зависимости от типа курса
 * Этот скрипт обеспечивает статичность языка интерфейса независимо от выбора в селекторе
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔒 Инициализация фиксации языка интерфейса для курсов');
    
    // Определяем язык на основе URL страницы
    function detectCourseLanguage() {
        const currentPath = window.location.pathname.toLowerCase();
        
        // Если URL содержит _rus или _ru - это русский курс
        if (currentPath.includes('_rus') || currentPath.includes('_ru')) {
            console.log('🔒 Определен русский курс');
            return 'ru';
        } else {
            console.log('🔒 Определен казахский курс');
            return 'kk';
        }
    }
    
    // Фиксируем интерфейс на языке курса
    function fixCourseInterface() {
        const courseLanguage = detectCourseLanguage();
        
        // Заменяем стандартный обработчик смены языка
        const langSelector = document.getElementById('select');
        if (langSelector) {
            // Сохраняем оригинальный обработчик
            const originalOnChange = langSelector.onchange;
            
            // Переопределяем обработчик изменения селектора языка
            langSelector.onchange = function(event) {
                console.log('🔒 Попытка смены языка перехвачена');
                
                // Устанавливаем соответствующий текст селектора
                setTimeout(function() {
                    langSelector.value = courseLanguage === 'ru' ? 'Русский' : 'Қазақша';
                }, 10);
                
                // Возвращаем значение по умолчанию и предотвращаем смену языка
                return false;
            };
            
            // Устанавливаем правильное значение селектора при загрузке
            langSelector.value = courseLanguage === 'ru' ? 'Русский' : 'Қазақша';
            console.log('🔒 Селектор языка зафиксирован: ' + langSelector.value);
        }
        
        // Фиксируем статичные элементы интерфейса
        fixStaticElements(courseLanguage);
    }
    
    // Фиксация статичных элементов интерфейса
    function fixStaticElements(language) {
        // Тексты для разных языков
        const texts = {
            // Кнопки и заголовки
            'check_btn': {
                'kk': 'Тексеру',
                'ru': 'Проверить'
            },
            'run_btn': {
                'kk': 'Кодты тексеру',
                'ru': 'Проверить код'
            },
            'complete_btn': {
                'kk': 'Сабақ аяқталды',
                'ru': 'Урок завершен'
            },
            'easy_level': {
                'kk': 'Жеңіл деңгей',
                'ru': 'Легкий уровень'
            },
            'medium_level': {
                'kk': 'Орташа деңгей',
                'ru': 'Средний уровень'
            },
            'hard_level': {
                'kk': 'Қиын деңгей',
                'ru': 'Сложный уровень'
            },
            // Сообщения
            'correct_answer': {
                'kk': 'Сіз барлық сұрақтарға дұрыс жауап бердіңіз!',
                'ru': 'Вы правильно ответили на все вопросы!'
            },
            'wrong_answer': {
                'kk': 'Кейбір жауаптар дұрыс емес. Қайталап көріңіз!',
                'ru': 'Некоторые ответы неверны. Попробуйте еще раз!'
            },
            'practice_success': {
                'kk': 'Практикалық тапсырма дұрыс орындалды!',
                'ru': 'Практическое задание выполнено верно!'
            },
            'practice_error': {
                'kk': 'Сіздің кодыңызда қателіктер бар. Қайталап көріңіз!',
                'ru': 'В вашем коде есть ошибки. Попробуйте еще раз!'
            }
        };
        
        // Фиксируем тексты на кнопках
        document.querySelectorAll('button').forEach(button => {
            // Проверяем класс и текст кнопки
            if (button.classList.contains('check-btn') || 
                button.textContent.includes('Тексеру') || 
                button.textContent.includes('Проверить')) {
                button.textContent = texts['check_btn'][language];
            } else if (button.classList.contains('run-btn') || 
                      button.classList.contains('practice-submit-btn') ||
                      button.textContent.includes('Кодты тексеру') || 
                      button.textContent.includes('Проверить код')) {
                button.textContent = texts['run_btn'][language];
            } else if (button.classList.contains('complete-btn') || 
                      button.classList.contains('complete-lesson-btn') ||
                      button.textContent.includes('Сабақ аяқталды') || 
                      button.textContent.includes('Урок завершен')) {
                button.textContent = texts['complete_btn'][language];
            }
        });
        
        // Фиксируем заголовки уровней сложности
        document.querySelectorAll('h3, h4').forEach(header => {
            if (header.textContent.includes('Жеңіл деңгей') || 
                header.textContent.includes('Легкий уровень')) {
                header.textContent = texts['easy_level'][language];
            } else if (header.textContent.includes('Орташа деңгей') || 
                       header.textContent.includes('Средний уровень')) {
                header.textContent = texts['medium_level'][language];
            } else if (header.textContent.includes('Қиын деңгей') || 
                       header.textContent.includes('Сложный уровень')) {
                header.textContent = texts['hard_level'][language];
            }
        });
        
        console.log('🔒 Статичные элементы интерфейса зафиксированы на языке: ' + language);
    }
    
    // Запускаем фиксацию интерфейса после загрузки страницы
    fixCourseInterface();
    
    // Периодически проверяем и обновляем элементы (для динамически добавляемых элементов)
    setInterval(function() {
        fixStaticElements(detectCourseLanguage());
    }, 2000);
    
    console.log('🔒 Фиксация языка интерфейса успешно инициализирована');
});
// Функция определения языка курса
function detectCourseLanguage() {
    const currentPath = window.location.pathname.toLowerCase();
    return (currentPath.includes('_rus') || currentPath.includes('_ru')) ? 'ru' : 'kk';
}

// Принудительное задание языка в localStorage и объекте пользователя
function forceLanguageInStorage() {
    const courseLanguage = detectCourseLanguage();
    localStorage.setItem('language', courseLanguage);
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    currentUser.language = courseLanguage;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

// Перевод сообщений в зависимости от языка курса
function translateMessages() {
    const language = detectCourseLanguage();
    
    // Перевод уведомлений о выполнении практики
    document.querySelectorAll('.success-message, .error-message, .practice-result p').forEach(message => {
        if (message.textContent.includes('Практикалық тапсырма дұрыс орындалды') && language === 'ru') {
            message.textContent = '✅ Практическое задание выполнено верно!';
        } else if (message.textContent.includes('Сабақты аяқтау үшін барлық тапсырмаларды орындаңыз') && language === 'ru') {
            message.textContent = '❌ Выполните все задания, чтобы завершить урок';
        } else if (message.textContent.includes('Тексеру үшін кодты енгізіңіз') && language === 'ru') {
            message.textContent = '❌ Введите код для проверки!';
        }
    });
    
    // Перевод элементов боковой панели
    if (language === 'ru') {
        document.querySelectorAll('.sidebar-title').forEach(title => {
            if (title.textContent === 'Сабақтар') {
                title.textContent = 'Уроки';
            }
        });
        
        document.querySelectorAll('.lesson-list li a, .sidebar-list li a').forEach(link => {
            if (link.textContent.match(/^Сабақ \d+/)) {
                const lessonNum = link.textContent.match(/\d+/)[0];
                link.textContent = `Урок ${lessonNum}`;
            } else if (link.textContent === 'Кіріспе') {
                link.textContent = 'Введение';
            }
        });
    }
}

// Исправление для проверки практических заданий
function fixPracticeChecks() {
    document.querySelectorAll('.practice-submit-btn, .run-btn').forEach(button => {
        const originalOnClick = button.onclick;
        
        button.onclick = function(event) {
            // Находим контейнер практики
            const container = button.closest('.practice-container') || 
                             button.closest('.code-practice-container');
            
            if (!container) {
                // Если контейнер не найден, просто выполняем оригинальный обработчик
                if (originalOnClick) originalOnClick.call(this, event);
                return;
            }
            
            // Проверяем текстовое поле на наличие кода
            const codeInput = container.querySelector('.practice-code') || 
                            container.querySelector('textarea') || 
                            container.querySelector('[contenteditable="true"]');
            
            if (!codeInput || (!codeInput.value && !codeInput.textContent)) {
                // Код не введен, выполняем только оригинальный обработчик
                if (originalOnClick) originalOnClick.call(this, event);
                return;
            }
            
            // Код введен, можно продолжать
            const userCode = codeInput.value || codeInput.textContent;
            if (!userCode.trim()) {
                // Код пустой или состоит только из пробелов
                if (originalOnClick) originalOnClick.call(this, event);
                return;
            }
            
            // Получаем номер урока
            let lessonNum = container.getAttribute('data-lesson') || 
                           new URLSearchParams(window.location.search).get('lesson') || 
                           localStorage.getItem('lastOpenedLesson');
            
            if (!lessonNum) {
                // Номер урока не найден, выполняем только оригинальный обработчик
                if (originalOnClick) originalOnClick.call(this, event);
                return;
            }
            
            // Получаем тип курса
            let courseType = detectCourseLanguage() === 'ru' ? 
                            (window.location.pathname.includes('database') ? 'database_ru' :
                             window.location.pathname.includes('python') ? 'python_ru' : 'html_css_ru') :
                            (window.location.pathname.includes('database') ? 'database_kz' :
                             window.location.pathname.includes('python') ? 'python_kz' : 'html_css_kz');
            
            // Вызываем оригинальный обработчик
            if (originalOnClick) originalOnClick.call(this, event);
            
            // Помечаем практику как завершенную только если в ней есть код
            setTimeout(function() {
                // Отображаем сообщение об успехе, если его еще нет
                const resultDiv = container.querySelector('.practice-result');
                
                // Проверяем, есть ли уже сообщение об ошибке
                const hasErrorMessage = resultDiv && resultDiv.querySelector('.error-message');
                
                // Если нет сообщения об ошибке, считаем задание выполненным
                if (resultDiv && !hasErrorMessage) {
                    // Сохраняем статус выполнения практики
                    localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
                    
                    // Активируем кнопку завершения
                    document.querySelectorAll('.complete-btn, #completeBtn').forEach(btn => {
                        btn.classList.remove('disabled');
                        btn.disabled = false;
                    });
                    
                    // Если нет никакого сообщения, добавляем сообщение об успехе
                    if (!resultDiv.querySelector('.success-message')) {
                        const language = detectCourseLanguage();
                        resultDiv.innerHTML = language === 'ru' ?
                            '<p class="success-message">✅ Практическое задание выполнено верно!</p>' :
                            '<p class="success-message">✅ Практикалық тапсырма дұрыс орындалды!</p>';
                    }
                }
            }, 1000);
        };
    });
}

// Запуск всех исправлений
function initializeAllFixes() {
    forceLanguageInStorage();
    translateMessages();
    fixPracticeChecks();
    
    // Запускаем исправления повторно через 2 секунды для динамически добавляемых элементов
    setTimeout(translateMessages, 2000);
    setTimeout(fixPracticeChecks, 2000);
}

// Запуск инициализации после загрузки страницы
document.addEventListener('DOMContentLoaded', initializeAllFixes);

// Периодическое обновление для динамически добавляемых элементов
setInterval(translateMessages, 3000);