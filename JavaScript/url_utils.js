/**
 * Утилиты для работы с URL параметрами
 */

/**
 * Функция для получения значения параметра из URL
 * @param {string} name - Имя параметра
 * @returns {string|null} - Значение параметра или null, если параметр не найден
 */
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Экспортируем функцию в глобальную область видимости
window.getUrlParameter = getUrlParameter;
