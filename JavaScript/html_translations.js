/**
 * Модуль переводов для HTML курса
 * 
 * ВАЖНОЕ ИЗМЕНЕНИЕ: Удалены все переводы контента курса.
 * В текущей версии сохранена только функциональность переключения видео.
 * Полный контент на разных языках будет доступен в отдельных версиях курса.
 */

// Заголовки уроков на казахском (НЕ переводятся, а используются как есть)
const htmlLessonTitlesKk = [
    "HTML кіріспе",
    "HTML тегтері мен атрибуттары",
    "Кестелер мен тізімдер",
    "CSS негіздері",
    "CSS қасиеттері",
    "CSS селекторлары",
    "Блоктық модель",
    "Орналастыру",
    "Финалдық жоба"
];

// Базовая функция получения заголовка урока
function getHtmlLessonTitle(lessonNum, lang) {
    // Возвращаем только заголовки на казахском языке
    if (lessonNum < 1 || lessonNum > htmlLessonTitlesKk.length) {
        return 'Сабақ ' + lessonNum;
    }
    
    // Индекс в массиве на 1 меньше номера урока
    const index = lessonNum - 1;
    return htmlLessonTitlesKk[index] || 'Сабақ ' + lessonNum;
}

// Функция переключения видео (сохранена для возможности смены видео при переключении языка)
function updateHtmlVideos(lang) {
    console.log('Обновление видео для курса HTML, язык:', lang);
    
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
    // Функция больше не переводит контент, только обновляет видео
    console.log('Вызов устаревшей функции applyFullTranslation для HTML курса');
    
    // Обновляем видео для указанного языка
    updateHtmlVideos(lang);
}

// Экспортируем функцию обновления видео в глобальный объект для внешнего доступа
window.applyFullTranslationHtml = function(lang) {
    console.log('Обновление видео для курса HTML через публичную функцию');
    updateHtmlVideos(lang);
};

// Объявляем функцию для обратной совместимости
window.translateHtmlTasks = function(lang) {
    console.log('Вызов устаревшей функции translateHtmlTasks (функционал отключен)');
    // Функция больше не переводит задания
}; 