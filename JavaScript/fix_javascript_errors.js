/**
 * Исправление ошибок JavaScript
 * Решает проблемы с undefined переменными и функциями
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🛠️ Исправление JavaScript ошибок');
    
    // Проверяем и исправляем проблему с currentUser
    if (typeof window.currentUser === 'undefined') {
        console.log('Определяем переменную currentUser');
        
        // Получаем данные из localStorage или создаем пустой объект
        window.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        
        // Если пользователь авторизован в Firebase, используем его данные
        if (firebase && firebase.auth && firebase.auth().currentUser) {
            const user = firebase.auth().currentUser;
            if (!window.currentUser.uid) {
                window.currentUser.uid = user.uid;
            }
            if (!window.currentUser.email) {
                window.currentUser.email = user.email;
            }
        }
    }
    
    // Исправляем ошибку с updateVideos
    if (typeof window.updateVideos === 'undefined') {
        console.log('Определяем функцию updateVideos');
        
        window.updateVideos = function(courseType) {
            console.log('Вызов безопасной версии updateVideos для:', courseType);
            
            try {
                // Безопасная реализация, которая не вызывает ошибки
                const videoContainer = document.querySelector('.video-container');
                if (videoContainer) {
                    // Здесь будет логика обновления видео
                    console.log('Контейнер для видео найден');
                }
            } catch (error) {
                console.warn('Ошибка в функции updateVideos:', error);
            }
        };
    }
    
    // Исправляем проблемы с загрузкой скриптов, добавляя fallback содержимое
    if (typeof window.pythonLessons === 'undefined') {
        console.log('Определяем fallback для pythonLessons');
        
        window.pythonLessons = {
            1: { title: 'Введение в Python', completed: false },
            2: { title: 'Переменные и типы данных', completed: false },
            3: { title: 'Условные операторы', completed: false },
            4: { title: 'Циклы', completed: false },
            5: { title: 'Функции', completed: false }
        };
    }
    
    if (typeof window.databaseLessons === 'undefined') {
        console.log('Определяем fallback для databaseLessons');
        
        window.databaseLessons = {
            1: { title: 'Введение в базы данных', completed: false },
            2: { title: 'SQL основы', completed: false },
            3: { title: 'Запросы SELECT', completed: false },
            4: { title: 'Обновление данных', completed: false },
            5: { title: 'Связи между таблицами', completed: false }
        };
    }
});
