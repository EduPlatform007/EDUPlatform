/**
 * Файл для добавления разделителей уровней сложности для тестов 9-го урока
 * Этот скрипт добавляет стилизованные блоки с информацией о сложности перед
 * вопросами 1, 6 и 11 внутри тестов 9-го урока для всех курсов
 */

// Добавляем стили для разделителей уровней сложности
function addDifficultyStyles() {
  const difficultyStyleId = 'difficulty-levels-style';
  if (!document.getElementById(difficultyStyleId)) {
    const style = document.createElement('style');
    style.id = difficultyStyleId;
    style.textContent = `
      .difficulty-level-info {
        margin: 15px 0;
        padding: 10px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
      }
      .easy-level-info {
        background-color: rgba(76, 175, 80, 0.2);
        border-left: 4px solid #4CAF50;
      }
      .medium-level-info {
        background-color: rgba(255, 152, 0, 0.2);
        border-left: 4px solid #FF9800;
      }
      .hard-level-info {
        background-color: rgba(244, 67, 54, 0.2);
        border-left: 4px solid #F44336;
      }
    `;
    document.head.appendChild(style);
  }
}

// Функция для добавления разделителей уровней сложности внутри контейнера вопросов
function addDifficultyMarkers() {
  // Проверяем, загружена ли страница
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processQuizContainers);
  } else {
    processQuizContainers();
  }
}



// Функция для создания разделителя уровня сложности
function createDifficultyMarker(level, title, description) {
  const markerDiv = document.createElement('div');
  markerDiv.className = `difficulty-level-info ${level}-level-info`;
  markerDiv.innerHTML = `<strong>${title}</strong> ${description}`;
  return markerDiv;
}

// Запускаем функцию добавления разделителей после загрузки страницы
window.addEventListener('load', addDifficultyMarkers);

// Также добавим обработчик для случаев, когда тесты загружаются динамически после загрузки страницы
// Используем MutationObserver для отслеживания изменений в DOM
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      // Проверяем, был ли добавлен контейнер теста для 9-го урока
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const node = mutation.addedNodes[i];
        if (node.nodeType === 1 && node.classList && node.classList.contains('quiz-container')) {
          if (node.getAttribute('data-lesson') === '9') {
            // Добавляем небольшую задержку, чтобы дать время на загрузку всех вопросов
            setTimeout(() => {
              processQuizContainers();
            }, 100);
            break;
          }
        }
      }
    }
  });
});

// Начинаем наблюдение за изменениями в DOM
observer.observe(document.body, {
  childList: true,
  subtree: true
});
