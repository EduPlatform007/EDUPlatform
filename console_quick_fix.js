/**
 * Эту команду нужно скопировать и вставить в консоль браузера (F12)
 * для принудительного завершения текущего урока
 */

(function() {
    // Получаем текущий номер урока
    const lessonNum = localStorage.getItem('lastOpenedLesson');
    if (!lessonNum) {
        alert('Не удалось определить номер текущего урока!');
        return;
    }
    
    // Тип курса
    const courseType = 'database_ru';
    
    // Отмечаем и тест, и практику как выполненные
    localStorage.setItem(`${courseType}_lesson${lessonNum}_quiz`, 'true');
    localStorage.setItem(`${courseType}_lesson${lessonNum}_practice`, 'true');
    
    // Активируем кнопку завершения
    const completeButton = document.querySelector('.complete-btn, #completeBtn, button:contains("Урок завершен")');
    if (completeButton) {
        // Разблокируем кнопку
        completeButton.disabled = false;
        completeButton.classList.remove('disabled');
        completeButton.classList.add('enabled');
        
        // Добавляем обработчик для завершения урока
        completeButton.onclick = function() {
            // Переходим к следующему уроку
            const nextLesson = parseInt(lessonNum) + 1;
            if (nextLesson <= 9) {
                window.location.href = `?lesson=${nextLesson}`;
            } else {
                window.location.href = './database_course_rus.html';
            }
        };
        
        alert(`Урок ${lessonNum} отмечен как выполненный. Нажмите кнопку "Урок завершен".`);
    } else {
        alert(`Кнопка завершения урока не найдена!`);
    }
})();
