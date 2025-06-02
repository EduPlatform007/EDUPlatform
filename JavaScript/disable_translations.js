// Функция для отключения системы перевода в русских версиях курсов
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, является ли текущая страница русской версией курса
    const isRussianCourse = document.querySelector('meta[name="course-language"][content="ru"]');
    
    if (isRussianCourse) {
        console.log('Русская версия курса: отключаем систему перевода');
        
        // Функция для удаления атрибутов перевода
        function removeTranslationAttributes() {
            // Удаляем атрибуты data-lang-key со всех элементов
            document.querySelectorAll('[data-lang-key]').forEach(element => {
                // Сохраняем текущий текст элемента
                const currentText = element.innerText;
                
                // Удаляем атрибут data-lang-key
                element.removeAttribute('data-lang-key');
                
                // Если элемент пустой, восстанавливаем его текст
                if (!element.innerText.trim()) {
                    element.innerText = currentText;
                }
            });
            
            // Исправляем заголовки и тексты на русском языке
            const sidebarTitle = document.querySelector('.sidebar h2');
            if (sidebarTitle) sidebarTitle.textContent = 'Уроки';
            
            const homeworkTitle = document.getElementById('homework-title');
            if (homeworkTitle) homeworkTitle.textContent = 'Домашнее задание';
            
            const emptyLessonTitle = document.querySelector('#empty-message h2');
            if (emptyLessonTitle) emptyLessonTitle.textContent = 'Выберите урок';
            
            const emptyLessonText = document.querySelector('#empty-message p');
            if (emptyLessonText) emptyLessonText.textContent = 'Выберите урок из списка слева, чтобы начать обучение.';
            
            const completeBtn = document.querySelector('.complete-btn');
            if (completeBtn) completeBtn.textContent = 'Урок завершен';
        }
        
        // Отключаем функции перевода
        if (window.applyTranslation) {
            window.applyTranslation = function() {
                console.log('Функция перевода отключена для русской версии курса');
                removeTranslationAttributes();
                return false;
            };
        }
        
        if (window.applyFullTranslationHtml) {
            window.applyFullTranslationHtml = function() {
                console.log('Функция полного перевода отключена для русской версии курса');
                removeTranslationAttributes();
                return false;
            };
        }
        
        if (window.applyUniversalTranslations) {
            window.applyUniversalTranslations = function() {
                console.log('Универсальная функция перевода отключена для русской версии курса');
                removeTranslationAttributes();
                return false;
            };
        }
        
        // Вызываем функцию сразу при загрузке
        removeTranslationAttributes();
        
        // И повторно через небольшой промежуток времени, чтобы перехватить динамически добавленные элементы
        setTimeout(removeTranslationAttributes, 500);
        setTimeout(removeTranslationAttributes, 1500);
    }
});
