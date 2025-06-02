/**
 * Модуль переводов для курса по базам данных
 * 
 * ВАЖНОЕ ИЗМЕНЕНИЕ: Удалены все переводы контента курса.
 * В текущей версии сохранены только переводы базовых UI элементов и функциональность переключения видео.
 * Полный контент на разных языках будет доступен в отдельных версиях курса.
 */

// Заголовки уроков на казахском (НЕ переводятся, а используются как есть)
const dbLessonTitlesKk = [
    "Деректер қорының негіздері",
    "Реляциялық деректер қоры",
    "SQL негіздері",
    "Деректерді сақтау және өзгерту",
    "Деректерді іздеу және сұрыптау",
    "Бірнеше кестелермен жұмыс",
    "Деректер қорын нормализациялау",
    "Транзакциялар және өңдеу",
    "Деректер қорын оңтайландыру"
];

// Базовая функция получения заголовка урока
function getDbLessonTitle(lessonNum, lang) {
    // Возвращаем только заголовки на казахском языке
    if (lessonNum < 1 || lessonNum > dbLessonTitlesKk.length) {
        return 'Сабақ ' + lessonNum;
    }
    
    // Индекс в массиве на 1 меньше номера урока
    const index = lessonNum - 1;
    return dbLessonTitlesKk[index] || 'Сабақ ' + lessonNum;
}

// Функция переключения видео (сохранена для возможности смены видео при переключении языка)
function updateDbVideos(lang) {
    console.log('Обновление видео для курса БД, язык:', lang);
    
    try {
        // Находим все контейнеры с видео
        const videoContainers = document.querySelectorAll('.video-wrapper');
        
        videoContainers.forEach(container => {
            const iframe = container.querySelector('iframe');
            if (!iframe) return;
            
            const currentSrc = iframe.getAttribute('src');
            
            // Проверяем атрибуты для альтернативных языковых версий
            if (lang === 'ru' && container.hasAttribute('data-video-ru')) {
                iframe.setAttribute('src', container.getAttribute('data-video-ru'));
            } else if (lang === 'kk' && container.hasAttribute('data-video-kk')) {
                iframe.setAttribute('src', container.getAttribute('data-video-kk'));
            }
        });
    } catch (error) {
        console.error('Ошибка при обновлении видео:', error);
    }
}

// Placeholder для совместимости с предыдущими версиями
function applyFullTranslation(lang) {
    // Функция больше не переводит контент, только основная разметка через improved_translations.js
    console.log('Вызов устаревшей функции applyFullTranslation для БД курса');
    
    // Обновляем видео для указанного языка
    updateDbVideos(lang);
}

// Экспортируем функцию обновления видео в глобальный объект для внешнего доступа
window.applyFullTranslationDb = function(lang) {
    console.log('Обновление видео для курса БД через публичную функцию');
    updateDbVideos(lang);
};

// Объявляем функцию для обратной совместимости
window.translateDatabaseTasks = function(lang) {
    console.log('Вызов устаревшей функции translateDatabaseTasks (функционал отключен)');
    // Функция больше не переводит задания
}; 