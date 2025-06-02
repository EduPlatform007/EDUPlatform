/**
 * Скрипт для исправления форматирования уроков в курсе по базам данных
 * Устанавливает правильный формат отображения уроков в сайдбаре
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Запуск исправления форматирования уроков в курсе по базам данных');
    
    // Определяем, находимся ли мы на странице курса баз данных
    const isDatabaseCourse = window.location.pathname.includes('database_course');
    
    if (!isDatabaseCourse) {
        console.log('Это не страница курса баз данных, исправление не применяется');
        return;
    }
    
    console.log('Страница курса баз данных обнаружена, применяется исправление форматирования');
    
    // Определяем язык курса
    const isRussian = document.documentElement.lang === 'ru' || 
                      window.location.pathname.includes('database_course_rus') || 
                      document.querySelector('meta[name="course-language"][content="ru"]') !== null;
    
    console.log('Язык курса:', isRussian ? 'русский' : 'казахский');
    
    // Функция для исправления форматирования уроков
    function fixLessonsFormatting() {
        // Получаем список уроков
        const lessonsList = document.getElementById('week-1-lessons');
        if (!lessonsList) {
            console.log('Элемент списка уроков не найден, пробуем еще раз позже');
            setTimeout(fixLessonsFormatting, 500);
            return;
        }
        
        // Получаем все элементы уроков
        const lessonItems = lessonsList.querySelectorAll('li.lesson-item');
        if (lessonItems.length === 0) {
            console.log('Уроки еще не загружены, пробуем еще раз позже');
            setTimeout(fixLessonsFormatting, 500);
            return;
        }
        
        console.log(`Найдено ${lessonItems.length} уроков, исправляем форматирование`);
        
        // Определяем текст "Урок/Сабақ" в зависимости от языка
        const lang = document.documentElement.getAttribute('lang') || 'kk';
        const lessonText = lang === 'kk' ? 'Сабақ' : 'Урок';
        
        // Перебираем все элементы уроков и исправляем форматирование
        lessonItems.forEach((item, index) => {
            // Получаем номер урока
            const lessonNumber = index + 1;
            
            // Получаем кнопку урока
            const lessonBtn = item.querySelector('.lesson-btn');
            if (!lessonBtn) return;
            
            // Получаем заголовок урока
            const titleElement = lessonBtn.querySelector('.lesson-title');
            if (titleElement) {
                // Сохраняем оригинальный текст заголовка
                const originalTitle = titleElement.textContent;
                
                // Форматируем как "Урок-1: Заголовок" или "Сабақ-1: Заголовок"
                titleElement.textContent = `${lessonText}-${lessonNumber}: ${originalTitle}`;
            }
            
            // Удаляем иконку книги
            const homeworkBtn = item.querySelector('.homework-btn');
            if (homeworkBtn) {
                homeworkBtn.style.display = 'none';
            }
        });
        
        console.log('Форматирование уроков исправлено успешно');
    }
    
    // Запускаем исправление с небольшой задержкой, чтобы уроки успели загрузиться
    setTimeout(fixLessonsFormatting, 1000);
    
    // На всякий случай запускаем еще раз через 3 секунды, если первая попытка не сработала
    setTimeout(fixLessonsFormatting, 3000);
});
