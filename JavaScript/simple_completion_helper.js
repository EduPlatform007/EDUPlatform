/**
 * Простой помощник для завершения уроков - безопасная версия
 * Этот скрипт просто добавляет вспомогательную кнопку внизу урока для завершения уроков
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('💡 Загрузка помощника для завершения уроков');
    
    // Задержка для инициализации после загрузки страницы
    setTimeout(function() {
        // Получаем номер текущего урока
        const urlParams = new URLSearchParams(window.location.search);
        const lessonNum = urlParams.get('lesson') || localStorage.getItem('lastOpenedLesson') || 1;
        
        // Получаем тип курса
        const courseType = window.location.pathname.includes('python') ? 'python_ru' : 
                          window.location.pathname.includes('database') ? 'database_ru' : 'html_css_ru';
        
        // Находим контейнер урока
        const lessonContainer = document.querySelector('.lesson-content, .main-content, main');
        
        if (lessonContainer) {
            // Создаем контейнер для вспомогательной кнопки
            const helperBox = document.createElement('div');
            helperBox.className = 'completion-helper-box';
            helperBox.style.marginTop = '30px';
            helperBox.style.padding = '15px';
            helperBox.style.backgroundColor = '#f9f9f9';
            helperBox.style.border = '1px solid #e0e0e0';
            helperBox.style.borderRadius = '5px';
            helperBox.style.textAlign = 'center';
            
            // Создаем заголовок
            const title = document.createElement('h4');
            title.textContent = 'Помощник по завершению урока';
            title.style.marginBottom = '10px';
            title.style.color = '#333';
            helperBox.appendChild(title);
            
            // Создаем описание
            const description = document.createElement('p');
            description.textContent = 'Если у вас возникли проблемы с завершением урока, используйте эту кнопку:';
            description.style.marginBottom = '15px';
            description.style.fontSize = '14px';
            helperBox.appendChild(description);
            
            // Создаем кнопку помощника
            const helperButton = document.createElement('button');
            helperButton.textContent = 'Завершить урок';
            helperButton.className = 'helper-complete-btn';
            helperButton.style.padding = '8px 15px';
            helperButton.style.backgroundColor = '#4CAF50';
            helperButton.style.color = 'white';
            helperButton.style.border = 'none';
            helperButton.style.borderRadius = '4px';
            helperButton.style.cursor = 'pointer';
            helperButton.style.fontSize = '14px';
            
            // Добавляем обработчик события на кнопку
            helperButton.addEventListener('click', function() {
                // Отмечаем тест и практику как выполненные
                localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'true');
                localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
                localStorage.setItem(`${courseType}_lesson${lessonNum}_completed`, 'true');
                
                // Находим кнопку завершения урока
                const completeBtn = document.querySelector('.complete-btn, .complete-lesson-btn');
                
                if (completeBtn) {
                    // Активируем кнопку
                    completeBtn.disabled = false;
                    completeBtn.classList.remove('disabled');
                    completeBtn.classList.add('enabled');
                    
                    // Показываем сообщение
                    alert('Кнопка "Урок завершен" активирована. Нажмите её, чтобы перейти к следующему уроку.');
                    
                    // Прокручиваем к кнопке
                    completeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    // Если кнопка не найдена, переходим к следующему уроку
                    const nextLessonNum = parseInt(lessonNum) + 1;
                    if (nextLessonNum <= 9) {
                        window.location.href = `?lesson=${nextLessonNum}`;
                    } else {
                        window.location.href = './index.html';
                    }
                }
            });
            
            helperBox.appendChild(helperButton);
            
            // Добавляем контейнер с кнопкой в конец урока
            lessonContainer.appendChild(helperBox);
            
            console.log('💡 Помощник для завершения уроков успешно добавлен');
        }
    }, 2000); // Задержка в 2 секунды для гарантированной загрузки страницы
});
