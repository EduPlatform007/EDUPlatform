/**
 * Скрипт для автоматического удаления дублирующихся футеров
 * Исправляет проблему с множественными футерами на страницах
 * Версия 2.0 - Улучшенное форматирование футера
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚩 Инициализация исправления дублирующихся футеров 2.0');
    
    // Функция для проверки и исправления дублирующихся футеров
    function fixDuplicateFooters() {
        const footers = document.querySelectorAll('.footer');
        
        if (footers.length > 1) {
            console.log(`Обнаружены дублирующиеся футеры: ${footers.length}`);
            
            // Оставляем только первый футер
            for (let i = 1; i < footers.length; i++) {
                footers[i].remove();
            }
            
            // Стилизуем оставшийся футер
            styleFooter(footers[0]);
            
            console.log('Дублирующиеся футеры удалены');
        } else if (footers.length === 1) {
            // Если только один футер, всё равно стилизуем его
            styleFooter(footers[0]);
        }
    }
    
    // Функция для стилизации футера
    function styleFooter(footer) {
        // Стилизуем футер
        footer.style.display = 'flex';
        footer.style.flexDirection = 'row';
        footer.style.justifyContent = 'center';
        footer.style.alignItems = 'center';
        footer.style.padding = '20px';
        footer.style.width = '100%';
        footer.style.marginTop = '40px';
        
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            footer.style.backgroundColor = '#0f172a';
            footer.style.color = '#ffffff';
        }
        
        // Стилизуем социальные иконки
        const socialLinks = footer.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.style.display = 'flex';
            socialLinks.style.flexDirection = 'row';
            socialLinks.style.gap = '15px';
        }
        
        // Стилизуем копирайт
        const copyright = footer.querySelector('.copyright');
        if (copyright) {
            copyright.style.marginRight = '30px';
            copyright.style.display = 'flex';
            copyright.style.alignItems = 'center';
        }
    }
    
    // Выполняем проверку при загрузке страницы
    fixDuplicateFooters();
    
    // Следим за изменениями DOM, чтобы обрабатывать динамически добавленные футеры
    const observer = new MutationObserver(function(mutations) {
        setTimeout(function() {
            fixDuplicateFooters();
        }, 100);
    });
    
    // Начинаем наблюдение за изменениями в DOM
    observer.observe(document.body, { 
        childList: true, 
        subtree: true 
    });
});
