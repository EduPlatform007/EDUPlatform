/**
 * Скрипт для принудительного удаления темного фона в темной теме
 */

// Выполняем скрипт немедленно, без ожидания DOMContentLoaded
(function() {
    // Создаем и добавляем стили напрямую в head
    const style = document.createElement('style');
    style.textContent = `
        /* Принудительно удаляем все темные фоны */
        [data-theme="dark"] body, 
        [data-theme="dark"] html, 
        [data-theme="dark"] .main-frame, 
        [data-theme="dark"] .video-background,
        [data-theme="dark"] section,
        [data-theme="dark"] div {
            background-color: transparent !important;
            background-image: none !important;
            background: none !important;
        }
    `;
    document.head.appendChild(style);
    
    // Функция для принудительного удаления темного фона
    function removeDarkBackground() {
        console.log("Removing dark background...");
        
        // Находим все элементы, которые могут иметь темный фон
        const elementsToFix = [
            document.documentElement,
            document.body,
            document.querySelector('.main-frame'),
            document.querySelector('.video-background'),
            document.querySelector('.content-container') // Добавляем контейнер контента
        ];
        
        // Также находим все секции и div элементы
        const sections = document.querySelectorAll('section');
        const divs = document.querySelectorAll('div');
        
        // Удаляем темный фон со всех найденных элементов
        elementsToFix.forEach(function(element) {
            if (element) {
                element.style.backgroundColor = 'transparent';
                element.style.backgroundImage = 'none';
                element.style.background = 'none';
            }
        });
        
        // Удаляем темный фон со всех секций
        sections.forEach(function(section) {
            section.style.backgroundColor = 'transparent';
            section.style.backgroundImage = 'none';
            section.style.background = 'none';
        });
        
        // Удаляем темный фон со всех div элементов
        divs.forEach(function(div) {
            // Проверяем, что это не header и не footer
            if (!div.closest('header') && !div.closest('footer')) {
                div.style.backgroundColor = 'transparent';
                div.style.backgroundImage = 'none';
                div.style.background = 'none';
            }
        });
        
        // Специально для темной темы
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            // Добавляем класс для принудительного удаления фона
            document.body.classList.add('force-transparent-bg');
            
            // Добавляем стиль для этого класса
            const forceStyle = document.createElement('style');
            forceStyle.textContent = `
                .force-transparent-bg,
                .force-transparent-bg * {
                    background-color: transparent !important;
                    background-image: none !important;
                    background: none !important;
                }
                
                .force-transparent-bg .main-frame,
                .force-transparent-bg .video-background {
                    background-color: transparent !important;
                    background-image: none !important;
                    background: none !important;
                }
            `;
            document.head.appendChild(forceStyle);
        }
    }
    
    // Вызываем функцию немедленно
    removeDarkBackground();
    
    // И еще раз через небольшой промежуток времени
    setTimeout(removeDarkBackground, 100);
    setTimeout(removeDarkBackground, 500);
    setTimeout(removeDarkBackground, 1000);
    
    // Также вызываем при загрузке страницы
    window.addEventListener('load', function() {
        removeDarkBackground();
        setTimeout(removeDarkBackground, 100);
    });
    
    // Добавляем обработчик клика по переключателю темы
    document.addEventListener('DOMContentLoaded', function() {
        const themeSwitch = document.getElementById('theme-switch');
        if (themeSwitch) {
            themeSwitch.addEventListener('click', function() {
                setTimeout(removeDarkBackground, 10);
                setTimeout(removeDarkBackground, 100);
                setTimeout(removeDarkBackground, 500);
            });
        }
        
        // Наблюдаем за изменениями атрибута data-theme
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'data-theme') {
                    const theme = document.documentElement.getAttribute('data-theme');
                    if (theme === 'dark') {
                        removeDarkBackground();
                        setTimeout(removeDarkBackground, 100);
                        setTimeout(removeDarkBackground, 500);
                    }
                }
            });
        });
        
        // Начинаем наблюдение за html элементом
        observer.observe(document.documentElement, { attributes: true });
    });
})();
