/**
 * Файл с тестами и практическими заданиями для курса HTML/CSS на русском языке
 */

// Инициализация глобального объекта
window.htmlCssRuQuizPractice = window.htmlCssRuQuizPractice || {};

// Тесты и практические задания для урока 1
// НЕ перезаписываем объект, а добавляем данные к существующему
Object.assign(window.htmlCssRuQuizPractice, {
  // Тесты и практические задания для урока 1
 "1":{ 
  // Практическое задание для урока 1
  practiceTask: `
    <p>Напишите HTML код, показанный ниже. Этот код формирует основную структуру простого HTML документа:</p>
    <ol>
      <li>Напишите DOCTYPE декларацию</li>
      <li>Добавьте теги html, head и body</li>
      <li>Внутри тега head добавьте тег title с текстом "Моя первая страница"</li>
      <li>Внутри тега body добавьте тег h1 с текстом "Привет, мир!"</li>
      <li>После тега h1 добавьте тег p с текстом "Это моя первая HTML страница"</li>
    </ol>
  `,
  
  // Ответ на практическое задание для урока 1
  practiceAnswer: `<!DOCTYPE html>
<html>
  <head>
    <title>Моя первая страница</title>
  </head>
  <body>
    <h1>Привет, мир!</h1>
    <p>Это моя первая HTML страница</p>
  </body>
</html>`
},


// Тесты и практические задания для урока 2
"2":{
  // Тест для урока 2
  quizQuestions: [
    {
      text: 'Какой правильный формат закрытия HTML тега?',
      options: [
        'Тег не закрывается',
        '</имя_тега>',
        '<имя_тега/>',
        '<имя_тега>'
      ],
      correctAnswer: 'b'
    },
    {
      text: 'Какой тег обозначает самый высокий уровень заголовка?',
      options: [
        '<h6>',
        '<h1>',
        '<heading>',
        '<title>'
      ],
      correctAnswer: 'b'
    },
    {
      text: 'Какой тег обозначает элемент списка?',
      options: [
        '<item>',
        '<list>',
        '<li>',
        '<ul>'
      ],
      correctAnswer: 'c'
    },
    {
      text: 'Какой тег используется для создания ссылки?',
      options: [
        '<link>',
        '<a>',
        '<href>',
        '<url>'
      ],
      correctAnswer: 'b'
    },
    {
      text: 'Какой тег используется для добавления изображения?',
      options: [
        '<picture>',
        '<img>',
        '<image>',
        '<src>'
      ],
      correctAnswer: 'b'
    }
  ],
  
  // Ответы на тест для урока 2
  quizAnswers: {
    "q1": 'b',
    "q2": 'b',
    "q3": 'c',
    "q4": 'b',
    "q5": 'b'
  }
},

// Тесты и практические задания для урока 3
"3":{
  // Практическое задание для урока 3
  practiceTask: `
    <p>Напишите CSS код, показанный ниже. Этот код используется для стилизации HTML элементов:</p>
    <ol>
      <li>Добавьте следующие стили для элемента body: font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f0f0f0;</li>
      <li>Добавьте следующие стили для элемента h1: color: #333; text-align: center;</li>
      <li>Добавьте следующие стили для элемента p: line-height: 1.6; margin-bottom: 15px;</li>
      <li>Добавьте следующие стили для элемента с классом .container: max-width: 800px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);</li>
    </ol>
  `,
  
  // Ответ на практическое задание для урока 3
  practiceAnswer: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}`
},

// Тесты и практические задания для урока 4
"4":{
  // Тест для урока 4
  quizQuestions: [
    {
      text: 'Как пишутся селекторы классов?',
      options: [
        '#class-name',
        '.class-name',
        'class=name',
        '*class-name'
      ],
      correctAnswer: 'b'
    },
    {
      text: 'Как пишутся селекторы ID?',
      options: [
        '.id-name',
        '#id-name',
        'id=name',
        '*id-name'
      ],
      correctAnswer: 'b'
    },
    {
      text: 'Какое CSS свойство изменяет цвет фона элемента?',
      options: [
        'color',
        'background',
        'background-color',
        'bg-color'
      ],
      correctAnswer: 'c'
    },
    {
      text: 'Какое CSS свойство устанавливает внешние отступы элемента?',
      options: [
        'outline',
        'margin',
        'spacing',
        'padding'
      ],
      correctAnswer: 'b'
    },
    {
      text: 'Какое CSS свойство устанавливает внутренние отступы элемента?',
      options: [
        'margin',
        'border-spacing',
        'padding',
        'indent'
      ],
      correctAnswer: 'c'
    }
  ],
  
  // Ответы на тест для урока 4
  quizAnswers: {
    "q1": 'b',
    "q2": 'b',
    "q3": 'c',
    "q4": 'b',
    "q5": 'c'
  }
},

// Тесты и практические задания для урока 5
"5":{
  // Практическое задание для урока 5
  practiceTask: `
    <p>Напишите HTML и CSS код, показанный ниже. Этот код используется для создания флекс-контейнера:</p>
    <ol>
      <li>Создайте HTML структуру: div с классом .container, внутри которого размещены 3 div с классом .box</li>
      <li>Добавьте следующие стили для класса .container: display: flex; justify-content: space-between; align-items: center; height: 200px; background-color: #f0f0f0;</li>
      <li>Добавьте следующие стили для класса .box: width: 100px; height: 100px; background-color: #3498db; color: white; display: flex; justify-content: center; align-items: center; font-weight: bold;</li>
    </ol>
  `,
  
  // Ответ на практическое задание для урока 5
  practiceAnswer: `<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  background-color: #f0f0f0;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
</style>`
},

// Тесты и практические задания для урока 6
"6":{
  // Тест для урока 6
  quizQuestions: [
    {
      text: 'Какое свойство используется для создания грид-контейнера в CSS Grid?',
      options: [
        'display: grid-container;',
        'display: grid;',
        'grid: enable;',
        'grid-template: on;'
      ],
      correctAnswer: 'b'
    },
    {
      text: 'Какое свойство используется для определения столбцов в гриде?',
      options: [
        'grid-columns',
        'grid-template-columns',
        'grid-column-template',
        'columns-template'
      ],
      correctAnswer: 'b'
    },
    {
      text: 'Какое свойство используется для определения строк в гриде?',
      options: [
        'grid-rows',
        'grid-template-rows',
        'grid-row-template',
        'rows-template'
      ],
      correctAnswer: 'b'
    },
    {
      text: 'Какое свойство используется для определения промежутков между элементами грида?',
      options: [
        'grid-spacing',
        'grid-gap',
        'grid-space',
        'gap'
      ],
      correctAnswer: 'd'
    },
    {
      text: 'Какое свойство используется для растягивания элемента грида на несколько столбцов?',
      options: [
        'grid-column-span',
        'grid-column',
        'column-span',
        'span-column'
      ],
      correctAnswer: 'b'
    }
  ],
  
  // Ответы на тест для урока 6
  quizAnswers: {
    1: 'b',
    2: 'b',
    3: 'b',
    4: 'd',
    5: 'b'
  }
},

// Тесты и практические задания для урока 7
"7":{
  // Практическое задание для урока 7
  practiceTask: `
    <p>Напишите HTML и CSS код, показанный ниже. Этот код использует медиа-запросы (media queries):</p>
    <ol>
      <li>Создайте HTML структуру: div с классом .container, внутри которого размещены 3 div с классом .box</li>
      <li>Добавьте следующие стили для класса .container: display: flex; flex-direction: row; justify-content: space-between; padding: 20px; background-color: #f0f0f0;</li>
      <li>Добавьте следующие стили для класса .box: width: 30%; height: 100px; background-color: #3498db; color: white; display: flex; justify-content: center; align-items: center; font-weight: bold;</li>
      <li>Добавьте медиа-запрос: @media (max-width: 768px) { .container { flex-direction: column; } .box { width: 100%; margin-bottom: 10px; } }</li>
    </ol>
  `,
  
  // Ответ на практическое задание для урока 7
  practiceAnswer: `<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: #f0f0f0;
}

.box {
  width: 30%;
  height: 100px;
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  
  .box {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>`
},

// Тесты и практические задания для урока 8
"8":{
  // Тест для урока 8
  quizQuestions: [
    {
      text: 'Какое свойство используется для создания CSS анимаций?',
      options: [
        'animation',
        'transition',
        'transform',
        'motion'
      ],
      correctAnswer: 'a'
    },
    {
      text: 'Какая функция используется для вращения элемента?',
      options: [
        'spin()',
        'turn()',
        'rotate()',
        'twist()'
      ],
      correctAnswer: 'c'
    },
    {
      text: 'Какая функция используется для изменения масштаба элемента?',
      options: [
        'size()',
        'scale()',
        'resize()',
        'zoom()'
      ],
      correctAnswer: 'b'
    },
    {
      text: 'Какое свойство используется для определения ключевых кадров в CSS анимациях?',
      options: [
        '@keyframes',
        '@frames',
        '@animation',
        '@steps'
      ],
      correctAnswer: 'a'
    },
    {
      text: 'Какое свойство используется для управления скоростью анимации?',
      options: [
        'animation-speed',
        'animation-duration',
        'animation-time',
        'animation-velocity'
      ],
      correctAnswer: 'b'
    }
  ],
  
  // Ответы на тест для урока 8
  quizAnswers: {
    1: 'a',
    2: 'c',
    3: 'b',
    4: 'a',
    5: 'b'
  }
},

// Тесты и практические задания для урока 9
"9": {
  // Тест для урока 9 (легкие вопросы)
  quizQuestions: [
    {
      text: 'Какими символами обозначаются HTML теги?',
      options: [
        '[ ]',
        '{ }',
        '< >',
        '( )'
      ]
    },
    {
      text: 'Какой тег используется для создания заголовка на веб-странице?',
      options: [
        '<p>',
        '<h1>',
        '<title>',
        '<header>'
      ]
    },
    {
      text: 'Какой формат цвета НЕ используется в CSS?',
      options: [
        'HEX (#FFFFFF)',
        'RGB (255, 255, 255)',
        'RGBA (255, 255, 255, 0.5)',
        'COLOR (white)'
      ]
    },
    {
      text: 'В каком теге размещается основное содержимое HTML документа?',
      options: [
        '<head>',
        '<body>',
        '<main>',
        '<content>'
      ]
    },
    {
      text: 'Какой тег используется для подключения внешнего CSS файла?',
      options: [
        '<script>',
        '<style>',
        '<link>',
        '<css>'
      ]
    },
{
      text: 'Какое свойство используется для выравнивания элементов по горизонтали в флекс-контейнере?',
      options: [
        'align-items: center;',
        'justify-content: center;',
        'text-align: center;',
        'margin: auto;'
      ]
    },
    {
      text: 'Для чего используется "!important" в CSS?',
      options: [
        'Для удаления стиля',
        'Для приоритизации стиля над другими',
        'Для обозначения стиля как комментария',
        'Для применения стиля только к мобильным устройствам'
      ]
    },
    {
      text: 'Какой инструмент CSS используется для создания адаптивного дизайна?',
      options: [
        'Селекторы',
        'Анимации',
        'Медиа-запросы (media queries)',
        'Псевдоэлементы'
      ]
    },
    {
      text: 'Какой элемент HTML НЕ является семантическим?',
      options: [
        '<article>',
        '<section>',
        '<div>',
        '<header>'
      ]
    },
    {
      text: 'Для чего используется свойство "z-index" в CSS?',
      options: [
        'Для установки размеров элемента',
        'Для управления порядком наложения элементов',
        'Для изменения цвета элемента',
        'Для управления анимацией элемента'
      ]
    },
    {
      text: 'Для чего используется свойство "grid-template-areas" в CSS Grid Layout?',
      options: [
        'Для установки размеров ячеек сетки',
        'Для именования и размещения элементов сетки',
        'Для изменения цвета фона ячеек сетки',
        'Для задания отступов между ячейками сетки'
      ]
    },
    {
      text: 'Как работает свойство "position: sticky" в CSS?',
      options: [
        'Элемент всегда находится в фиксированном положении',
        'Элемент фиксируется при достижении определенной точки при прокрутке',
        'Элемент прилипает к другим элементам',
        'Элемент всегда находится в центре экрана'
      ]
    },
    {
      text: 'Для чего используется элемент <canvas> в HTML5?',
      options: [
        'Для воспроизведения видео',
        'Для воспроизведения аудио',
        'Для рисования графики и анимаций с помощью JavaScript',
        'Для вставки внешнего контента'
      ]
    },
    {
      text: 'Для чего используется функция "calc()" в CSS?',
      options: [
        'Для выполнения математических вычислений',
        'Для вычисления цветов',
        'Для вычисления размера шрифта',
        'Для вычисления скорости анимации'
      ]
    },
    {
      text: 'Какой метод НЕ рекомендуется для улучшения производительности веб-страницы?',
      options: [
        'Оптимизация изображений',
        'Минификация CSS и JavaScript файлов',
        'Использование всех стилей в атрибуте style',
        'Использование ленивой загрузки (lazy loading)'
      ]
    }
  ],

  quizAnswers: {
    q1: 'c',
    q2: 'b',
    q3: 'd',
    q4: 'b',
    q5: 'c',
    q6: 'b',
    q7: 'b',
    q8: 'c',
    q9: 'c',
    q10:'b',
    q11: 'b',
    q12: 'b',
    q13: 'c',
    q14: 'a',
    q15: 'c'
  },
  
  // Практическое задание для урока 9
  practiceTask: `
    <p>Напишите код, показанный ниже. Этот код создает адаптивное навигационное меню:</p>
    <ol>
      <li>Создайте HTML структуру: элемент nav, внутри него список ul, а внутри элементов li ссылки a (Главная, О нас, Услуги, Контакты)</li>
      <li>Добавьте CSS стили:
        <ul>
          <li>Для nav: background-color: #333; overflow: hidden;</li>
          <li>Для nav ul: list-style-type: none; margin: 0; padding: 0; display: flex;</li>
          <li>Для nav li: margin: 0;</li>
          <li>Для nav a: display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;</li>
          <li>Для nav a:hover: background-color: #ddd; color: black;</li>
          <li>Добавьте медиа-запрос для мобильных устройств (max-width: 600px): nav ul {flex-direction: column;}</li>
        </ul>
      </li>
    </ol>
  `,
  
  // Ответ на практическое задание для урока 9
  practiceAnswer: `<!-- HTML код -->
<nav>
  <ul>
    <li><a href="#">Главная</a></li>
    <li><a href="#">О нас</a></li>
    <li><a href="#">Услуги</a></li>
    <li><a href="#">Контакты</a></li>
  </ul>
</nav>

<!-- CSS код -->
<style>
nav {
  background-color: #333;
  overflow: hidden;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin: 0;
}

nav a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav a:hover {
  background-color: #ddd;
  color: black;
}

@media (max-width: 600px) {
  nav ul {
    flex-direction: column;
  }
}
</style>`
}
});
// Глобальный объект с тестами и практическими заданиями инициализирован в начале файла
// Каждый урок добавлен в объект window.htmlCssRuQuizPractice