/**
 * Скрипт для добавления исправлений в HTML-страницы курсов
 */

document.addEventListener('DOMContentLoaded', function() {
    // Получаем все страницы курсов
    const coursePages = [
        'python_course.html',
        'python_course_rus.html',
        'html_course.html',
        'html_course_rus.html',
        'database_course.html',
        'database_course_rus.html'
    ];
    
    // Для каждой страницы курса добавляем скрипт
    coursePages.forEach(page => {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                // Проверяем, есть ли уже наш скрипт
                if (html.includes('comprehensive_course_fixes.js')) {
                    console.log(`Скрипт уже добавлен в ${page}`);
                    return;
                }
                
                // Ищем место перед закрывающим тегом </body>
                const updatedHtml = html.replace('</body>', '<!-- Комплексные исправления для всех курсов -->\n<script src="JavaScript/comprehensive_course_fixes.js"></script>\n</body>');
                
                // Сохраняем обновленный HTML
                fetch(page, {
                    method: 'PUT',
                    body: updatedHtml
                })
                .then(() => console.log(`Скрипт добавлен в ${page}`))
                .catch(error => console.error(`Ошибка при обновлении ${page}:`, error));
            })
            .catch(error => console.error(`Ошибка при загрузке ${page}:`, error));
    });
});
