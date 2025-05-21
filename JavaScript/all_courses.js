/**
 * Единый файл JavaScript для всех курсов EduPlatform
 * Объединяет все необходимые функции в один файл, что значительно улучшает производительность
 */

// ============ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ============
let currentLesson = 0;
let currentWeek = 1;

// Определяем тип курса и язык из метатегов
const courseType = document.querySelector('meta[name="course-type"]')?.content || 'html';
const courseLang = document.documentElement.lang || 'kk';
const isRussian = courseLang === 'ru';

// ============ ИНИЦИАЛИЗАЦИЯ ============
document.addEventListener('DOMContentLoaded', function() {
    console.log('Инициализация all_courses.js');
    console.log('Тип курса:', courseType);
    console.log('Язык курса:', courseLang);

    // Базовая инициализация
    initSyntaxHighlighting();
    initThemeToggle();
    disableTranslationsForSidebar();

    // Инициализация уроков в зависимости от типа курса
    initLessons();

    // Загрузка сохраненного урока, если есть
    loadSavedLesson();

    // Инициализация языкового селектора
    initLanguageSelector();
    
    // Инициализация авторизации (если есть)
    initAuth();
});

// ============ ОСНОВНЫЕ ФУНКЦИИ ============

/**
 * Инициализация подсветки синтаксиса
 */
function initSyntaxHighlighting() {
    if (typeof hljs !== 'undefined') {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
        });
    }
}

/**
 * Инициализация переключателя темы
 */
function initThemeToggle() {
    const themeSwitch = document.getElementById('theme-switch');
    const themeIcon = document.getElementById('theme-icon');
    
    if (themeSwitch && themeIcon) {
        // Проверяем сохраненную тему
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Устанавливаем правильную иконку
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun theme-switch-icon' : 'fas fa-moon theme-switch-icon';
        
        // Добавляем обработчик события
        themeSwitch.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Меняем иконку
            themeIcon.className = newTheme === 'dark' ? 'fas fa-sun theme-switch-icon' : 'fas fa-moon theme-switch-icon';
        });
    }
}

/**
 * Предотвращение перевода элементов сайдбара
 */
function disableTranslationsForSidebar() {
    // Отключаем перевод для элементов сайдбара
    document.querySelectorAll('.sidebar .lesson-item a').forEach(item => {
        item.setAttribute('data-no-translate', 'true');
    });
    
    // Отключаем перевод для заголовков уроков
    document.querySelectorAll('.lesson-title').forEach(item => {
        item.setAttribute('data-no-translate', 'true');
    });
}

/**
 * Инициализация уроков
 */
function initLessons() {
    // Получаем список уроков
    const lessonList = document.getElementById('week-1-lessons');
    if (!lessonList) return;
    
    // Очищаем список
    lessonList.innerHTML = '';
    
    // Определяем данные уроков в зависимости от типа курса
    let lessonsData;
    
    if (courseType === 'python') {
        if (isRussian && window.pythonLessons) {
            lessonsData = window.pythonLessons;
        } else if (!isRussian && window.pythonData && window.pythonData.lessons) {
            lessonsData = window.pythonData.lessons;
        }
    } else if (courseType === 'html') {
        if (isRussian && window.htmlLessons) {
            lessonsData = window.htmlLessons;
        } else if (!isRussian && window.htmlData && window.htmlData.lessons) {
            lessonsData = window.htmlData.lessons;
        } else if (window.lessons) {
            lessonsData = window.lessons;
        }
    } else if (courseType === 'database') {
        if (window.databaseData && window.databaseData.lessons) {
            lessonsData = window.databaseData.lessons;
        }
    }
    
    if (!lessonsData) {
        console.error('Не удалось найти данные уроков для курса:', courseType);
        return;
    }
    
    // Добавляем уроки в список
    lessonsData.forEach((lesson, index) => {
        const li = document.createElement('li');
        li.className = 'lesson-item';
        
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'lesson-link';
        a.textContent = `${index + 1}. ${lesson.title}`;
        a.setAttribute('data-no-translate', 'true');
        a.onclick = function(e) {
            e.preventDefault();
            loadLesson(index + 1);
        };
        
        li.appendChild(a);
        
        // Добавляем отметку о завершении, если урок завершен
        const storageKey = courseType + 'CompletedLessons';
        const completedLessons = JSON.parse(localStorage.getItem(storageKey) || '[]');
        if (completedLessons.includes(index + 1)) {
            const checkmark = document.createElement('span');
            checkmark.className = 'lesson-completed';
            checkmark.innerHTML = '✓';
            li.appendChild(checkmark);
        }
        
        lessonList.appendChild(li);
    });
    
    // Добавляем обработчики для кнопок недель
    const weekButtons = document.querySelectorAll('.week-btn');
    weekButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            if (index === 0) {
                // Первая неделя всегда доступна
                currentWeek = 1;
                
                // Делаем кнопку активной
                weekButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            } else {
                // Другие недели заблокированы
                showLockedWeek();
            }
        });
    });
}

/**
 * Показывает сообщение о заблокированной неделе
 */
function showLockedWeek() {
    alert(isRussian ? 
          'Эта неделя будет доступна позже!' : 
          'Бұл апта кейінірек қол жетімді болады!');
}

/**
 * Загружает урок по номеру
 */
function loadLesson(lessonNum) {
    // Сохраняем номер текущего урока
    currentLesson = lessonNum;
    
    // Определяем данные уроков в зависимости от типа курса
    let lessonsData;
    
    if (courseType === 'python') {
        if (isRussian && window.pythonLessons) {
            lessonsData = window.pythonLessons;
        } else if (!isRussian && window.pythonData && window.pythonData.lessons) {
            lessonsData = window.pythonData.lessons;
        }
    } else if (courseType === 'html') {
        if (isRussian && window.htmlLessons) {
            lessonsData = window.htmlLessons;
        } else if (!isRussian && window.htmlData && window.htmlData.lessons) {
            lessonsData = window.htmlData.lessons;
        } else if (window.lessons) {
            lessonsData = window.lessons;
        }
    } else if (courseType === 'database') {
        if (window.databaseData && window.databaseData.lessons) {
            lessonsData = window.databaseData.lessons;
        }
    }
    
    if (!lessonsData) {
        console.error('Не удалось найти данные уроков для курса:', courseType);
        return;
    }
    
    // Получаем данные урока
    const lesson = lessonsData[lessonNum - 1];
    if (!lesson) {
        console.error('Урок не найден:', lessonNum);
        return;
    }
    
    // Скрываем сообщение о пустом уроке
    const emptyMessage = document.getElementById('empty-message');
    if (emptyMessage) {
        emptyMessage.style.display = 'none';
    }
    
    // Отображаем содержимое урока
    const lessonContent = document.getElementById('lesson-content');
    if (!lessonContent) return;
    
    const loadedLesson = document.getElementById('loaded-lesson') || document.createElement('div');
    loadedLesson.id = 'loaded-lesson';
    loadedLesson.innerHTML = `
        <h1 class="lesson-title" data-no-translate="true">${lesson.title}</h1>
        <div class="lesson-content-wrapper">
            ${lesson.content}
        </div>
        <div class="lesson-actions">
            <button class="complete-btn" onclick="completeLesson(${lessonNum})">
                ${isRussian ? 'Завершить урок' : 'Сабақты аяқтау'}
            </button>
            <div id="result-message"></div>
        </div>
    `;
    
    // Если элемент еще не добавлен, добавляем его
    if (!document.getElementById('loaded-lesson')) {
        lessonContent.appendChild(loadedLesson);
    }
    
    // Делаем активным текущий урок в сайдбаре
    const lessonLinks = document.querySelectorAll('.lesson-link');
    lessonLinks.forEach((link, index) => {
        if (index === lessonNum - 1) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Сохраняем номер урока в localStorage
    const storageKey = 'lastOpened' + courseType.charAt(0).toUpperCase() + courseType.slice(1) + 'Lesson';
    localStorage.setItem(storageKey, lessonNum);
    
    // Инициализируем подсветку синтаксиса для нового содержимого
    initSyntaxHighlighting();
    
    // Прокручиваем страницу вверх
    window.scrollTo(0, 0);
    
    // Отключаем перевод для элементов урока
    disableTranslationsForSidebar();
}

/**
 * Загружает сохраненный урок, если есть
 */
function loadSavedLesson() {
    const storageKey = 'lastOpened' + courseType.charAt(0).toUpperCase() + courseType.slice(1) + 'Lesson';
    const lastLesson = localStorage.getItem(storageKey);
    if (lastLesson) {
        loadLesson(parseInt(lastLesson));
    }
}

/**
 * Отмечает урок как завершенный
 */
function completeLesson(lessonNum) {
    // Получаем список завершенных уроков
    const storageKey = courseType + 'CompletedLessons';
    const completedLessons = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    // Если урок еще не отмечен как завершенный, добавляем его
    if (!completedLessons.includes(lessonNum)) {
        completedLessons.push(lessonNum);
        localStorage.setItem(storageKey, JSON.stringify(completedLessons));
    }
    
    // Добавляем галочку к завершенному уроку
    const activeLesson = document.querySelector('.lesson-link.active');
    if (activeLesson) {
        const lessonItem = activeLesson.closest('.lesson-item');
        if (lessonItem && !lessonItem.querySelector('.lesson-completed')) {
            const checkmark = document.createElement('span');
            checkmark.className = 'lesson-completed';
            checkmark.innerHTML = '✓';
            lessonItem.appendChild(checkmark);
        }
    }
    
    // Отображаем сообщение об успешном завершении
    const resultMessage = document.getElementById('result-message');
    if (resultMessage) {
        const message = isRussian ? 
                      'Урок успешно завершен!' : 
                      'Сабақ сәтті аяқталды!';
        
        resultMessage.innerHTML = `<div class="success-message">${message}</div>`;
        
        // Скрываем сообщение через 3 секунды
        setTimeout(() => {
            resultMessage.innerHTML = '';
        }, 3000);
    }
}

/**
 * Инициализация обработчика смены языка
 */
function initLanguageSelector() {
    const langSelect = document.getElementById('select');
    if (!langSelect) return;
    
    langSelect.addEventListener('change', function() {
        const lang = this.value === 'Қазақша' ? 'kk' : 'ru';
        
        // Сохраняем текущий урок для открытия после перезагрузки
        if (currentLesson > 0) {
            localStorage.setItem('openLessonAfterReload', currentLesson);
        }
        
        // Определяем URL для перехода
        let url = '';
        if (courseType === 'python') {
            url = lang === 'ru' ? 'python_course_rus.html' : 'python_course.html';
        } else if (courseType === 'html') {
            url = lang === 'ru' ? 'course_rus.html' : 'course.html';
        } else if (courseType === 'database') {
            url = lang === 'ru' ? 'database_course_rus.html' : 'database_course.html';
        }
        
        // Сохраняем выбранный язык
        const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        userData.language = lang;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        
        // Переходим на соответствующую страницу
        window.location.href = url;
    });
}

/**
 * Инициализация авторизации (если есть)
 */
function initAuth() {
    const btnLog = document.getElementById('btn-log');
    const btnProfile = document.getElementById('btn-profile');
    const userProfileBtn = document.querySelector('.user-profile-btn');
    
    if (!btnLog || !btnProfile || !userProfileBtn) return;
    
    // Проверяем, авторизован ли пользователь
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (userData.username) {
        btnLog.textContent = isRussian ? 'Выход' : 'Шығу';
        btnLog.href = '#';
        btnLog.onclick = function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.reload();
        };
        
        userProfileBtn.style.display = 'block';
    }
}

/**
 * Функция для проверки тестов
 */
function checkQuiz(lessonNum) {
    // Определяем данные уроков в зависимости от типа курса
    let lessonsData;
    
    if (courseType === 'python') {
        if (isRussian && window.pythonLessons) {
            lessonsData = window.pythonLessons;
        } else if (!isRussian && window.pythonData && window.pythonData.lessons) {
            lessonsData = window.pythonData.lessons;
        }
    } else if (courseType === 'html') {
        if (isRussian && window.htmlLessons) {
            lessonsData = window.htmlLessons;
        } else if (!isRussian && window.htmlData && window.htmlData.lessons) {
            lessonsData = window.htmlData.lessons;
        } else if (window.lessons) {
            lessonsData = window.lessons;
        }
    } else if (courseType === 'database') {
        if (window.databaseData && window.databaseData.lessons) {
            lessonsData = window.databaseData.lessons;
        }
    }
    
    if (!lessonsData) {
        console.error('Не удалось найти данные уроков для курса:', courseType);
        return;
    }
    
    // Получаем данные урока
    const lesson = lessonsData[lessonNum - 1];
    if (!lesson || !lesson.quizAnswers) {
        console.error('Ответы на тест не найдены для урока:', lessonNum);
        return;
    }
    
    // Получаем ответы пользователя
    const userAnswers = {};
    const answers = lesson.quizAnswers;
    
    // Проверяем каждый вопрос
    let correctCount = 0;
    let totalQuestions = 0;
    
    for (const question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            userAnswers[question] = selectedOption.value;
            if (userAnswers[question] === answers[question]) {
                correctCount++;
            }
        }
        totalQuestions++;
    }
    
    // Отображаем результат
    const resultElement = document.getElementById(`result-${lessonNum}`);
    if (resultElement) {
        const percentage = Math.round((correctCount / totalQuestions) * 100);
        const message = isRussian ? 
                       `Результат: ${correctCount} из ${totalQuestions} правильных ответов (${percentage}%)` : 
                       `Нәтиже: ${correctCount} / ${totalQuestions} дұрыс жауап (${percentage}%)`;
        
        let resultClass = 'quiz-result ';
        if (percentage >= 80) {
            resultClass += 'quiz-success';
        } else if (percentage >= 50) {
            resultClass += 'quiz-warning';
        } else {
            resultClass += 'quiz-error';
        }
        
        resultElement.innerHTML = `<div class="${resultClass}">${message}</div>`;
    }
}

/**
 * Функция для выполнения Python кода
 */
function runPythonCode(lessonNum) {
    const codeTextarea = document.getElementById(`py-code-${lessonNum}`);
    const resultElement = document.getElementById(`result-${lessonNum}`);
    
    if (!codeTextarea || !resultElement) {
        console.error('Элементы для выполнения кода не найдены');
        return;
    }
    
    const code = codeTextarea.value;
    
    // В реальном приложении здесь был бы запрос к серверу для выполнения кода
    // Для демонстрации просто показываем код, который был бы отправлен
    resultElement.innerHTML = `
        <div class="code-result">
            <p>${isRussian ? 'Код отправлен на сервер:' : 'Код серверге жіберілді:'}</p>
            <pre><code class="language-python">${code}</code></pre>
            <p>${isRussian ? 'Результат выполнения будет здесь' : 'Орындау нәтижесі осында болады'}</p>
        </div>
    `;
    
    // Инициализируем подсветку синтаксиса для отображаемого кода
    initSyntaxHighlighting();
}

// ============ ЭКСПОРТ ФУНКЦИЙ ============
// Делаем функции доступными глобально
window.loadLesson = loadLesson;
window.completeLesson = completeLesson;
window.checkQuiz = checkQuiz;
window.runPythonCode = runPythonCode;
window.showLockedWeek = showLockedWeek;
