/**
 * Файл с тестами и практическими заданиями для курса HTML/CSS на казахском языке
 */

// Тесты и практические задания для урока 1
const lesson1_quiz_practice = {
  // Практическое задание для урока 1
  practiceTask: `
    <p>Төменде көрсетілген HTML кодын жазыңыз. Бұл код қарапайым HTML құжатының негізгі құрылымын құрайды:</p>
    <ol>
      <li>DOCTYPE декларациясын жазыңыз</li>
      <li>html, head және body тегтерін қосыңыз</li>
      <li>head тегінің ішіне title тегін қосыңыз, мәтіні "Менің алғашқы бетім" болсын</li>
      <li>body тегінің ішіне h1 тегін қосыңыз, мәтіні "Сәлем, әлем!" болсын</li>
      <li>h1 тегінен кейін p тегін қосыңыз, мәтіні "Бұл менің алғашқы HTML бетім" болсын</li>
    </ol>
  `,
  
  // Ответ на практическое задание для урока 1
  practiceAnswer: `<!DOCTYPE html>
<html>
  <head>
    <title>Менің алғашқы бетім</title>
  </head>
  <body>
    <h1>Сәлем, әлем!</h1>
    <p>Бұл менің алғашқы HTML бетім</p>
  </body>
</html>`
};

// Тесты и практические задания для урока 2
const lesson2_quiz_practice = {
  // Тест для урока 2
  quizQuestions: [
    {
      text: 'HTML тегінің дұрыс жабылу форматы қандай?',
      options: [
        'Тег жабылмайды',
        '</тег_аты>',
        '<тег_аты/>',
        '<тег_аты>'
      ]
    },
    {
      text: 'Қай тег ең үлкен тақырып деңгейін көрсетеді?',
      options: [
        '<h6>',
        '<h1>',
        '<heading>',
        '<title>'
      ]
    },
    {
      text: 'Қай тег тізім элементін белгілейді?',
      options: [
        '<item>',
        '<list>',
        '<li>',
        '<ul>'
      ]
    },
    {
      text: 'Сілтеме жасау үшін қай тег қолданылады?',
      options: [
        '<link>',
        '<a>',
        '<href>',
        '<url>'
      ]
    },
    {
      text: 'Сурет қосу үшін қай тег қолданылады?',
      options: [
        '<picture>',
        '<img>',
        '<image>',
        '<src>'
      ]
    }
  ],
  
  // Ответы на тест для урока 2
  quizAnswers: {
    q1: 'b',
    q2: 'b',
    q3: 'c',
    q4: 'b',
    q5: 'b'
  }
};

// Тесты и практические задания для урока 3
const lesson3_quiz_practice = {
  // Практическое задание для урока 3
  practiceTask: `
    <p>Төменде көрсетілген CSS кодын жазыңыз. Бұл код HTML элементтерін стильдеу үшін қолданылады:</p>
    <ol>
      <li>body элементіне келесі стильдерді қосыңыз: font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f0f0f0;</li>
      <li>h1 элементіне келесі стильдерді қосыңыз: color: #333; text-align: center;</li>
      <li>p элементіне келесі стильдерді қосыңыз: line-height: 1.6; margin-bottom: 15px;</li>
      <li>.container класы бар элементке келесі стильдерді қосыңыз: max-width: 800px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);</li>
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
};

// Тесты и практические задания для урока 4
const lesson4_quiz_practice = {
  // Тест для урока 4
  quizQuestions: [
    {
      text: 'Класс селекторы қалай жазылады?',
      options: [
        '#class-name',
        '.class-name',
        'class=name',
        '*class-name'
      ]
    },
    {
      text: 'ID селекторы қалай жазылады?',
      options: [
        '.id-name',
        '#id-name',
        'id=name',
        '*id-name'
      ]
    },
    {
      text: 'Қай CSS қасиеті элементтің фон түсін өзгертеді?',
      options: [
        'color',
        'background',
        'background-color',
        'bg-color'
      ]
    },
    {
      text: 'Қай CSS қасиеті элементтің сыртқы жиегін орнатады?',
      options: [
        'outline',
        'margin',
        'spacing',
        'padding'
      ]
    },
    {
      text: 'Қай CSS қасиеті элементтің ішкі жиегін орнатады?',
      options: [
        'margin',
        'border-spacing',
        'padding',
        'indent'
      ]
    }
  ],
  
  // Ответы на тест для урока 4
  quizAnswers: {
    q1: 'b',
    q2: 'b',
    q3: 'c',
    q4: 'b',
    q5: 'c'
  }
};

// Тесты и практические задания для урока 5
const lesson5_quiz_practice = {
  // Практическое задание для урока 5
  practiceTask: `
    <p>Төменде көрсетілген HTML және CSS кодын жазыңыз. Бұл код флекс контейнер жасау үшін қолданылады:</p>
    <ol>
      <li>HTML құрылымын жасаңыз: .container класы бар div ішінде .box класы бар 3 div элементін жасаңыз</li>
      <li>.container класына келесі стильдерді қосыңыз: display: flex; justify-content: space-between; align-items: center; height: 200px; background-color: #f0f0f0;</li>
      <li>.box класына келесі стильдерді қосыңыз: width: 100px; height: 100px; background-color: #3498db; color: white; display: flex; justify-content: center; align-items: center; font-weight: bold;</li>
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
};

// Тесты и практические задания для урока 6
const lesson6_quiz_practice = {
  // Тест для урока 6
  quizQuestions: [
    {
      text: 'CSS Grid жүйесінде грид контейнерін жасау үшін қай қасиет қолданылады?',
      options: [
        'display: grid-container;',
        'display: grid;',
        'grid: enable;',
        'grid-template: on;'
      ]
    },
    {
      text: 'Грид бағандарын анықтау үшін қай қасиет қолданылады?',
      options: [
        'grid-columns',
        'grid-template-columns',
        'grid-column-template',
        'columns-template'
      ]
    },
    {
      text: 'Грид жолдарын анықтау үшін қай қасиет қолданылады?',
      options: [
        'grid-rows',
        'grid-template-rows',
        'grid-row-template',
        'rows-template'
      ]
    },
    {
      text: 'Грид элементтері арасындағы бос орынды анықтау үшін қай қасиет қолданылады?',
      options: [
        'grid-spacing',
        'grid-gap',
        'grid-space',
        'gap'
      ]
    },
    {
      text: 'Грид элементін бірнеше бағанға созу үшін қай қасиет қолданылады?',
      options: [
        'grid-column-span',
        'grid-column',
        'column-span',
        'span-column'
      ]
    }
  ],
  
  // Ответы на тест для урока 6
  quizAnswers: {
    q1: 'b',
    q2: 'b',
    q3: 'b',
    q4: 'd',
    q5: 'b'
  }
};

// Тесты и практические задания для урока 7
const lesson7_quiz_practice = {
  // Практическое задание для урока 7
  practiceTask: `
    <p>Төменде көрсетілген HTML және CSS кодын жазыңыз. Бұл код медиа сұраныстарын (media queries) қолдану үшін қолданылады:</p>
    <ol>
      <li>HTML құрылымын жасаңыз: .container класы бар div ішінде .box класы бар 3 div элементін жасаңыз</li>
      <li>.container класына келесі стильдерді қосыңыз: display: flex; flex-direction: row; justify-content: space-between; padding: 20px; background-color: #f0f0f0;</li>
      <li>.box класына келесі стильдерді қосыңыз: width: 30%; height: 100px; background-color: #3498db; color: white; display: flex; justify-content: center; align-items: center; font-weight: bold;</li>
      <li>Медиа сұраныс қосыңыз: @media (max-width: 768px) { .container { flex-direction: column; } .box { width: 100%; margin-bottom: 10px; } }</li>
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
};

// Тесты и практические задания для урока 8
const lesson8_quiz_practice = {
  // Тест для урока 8
  quizQuestions: [
    {
      text: 'CSS анимацияларын жасау үшін қай қасиет қолданылады?',
      options: [
        'animation',
        'transition',
        'transform',
        'motion'
      ]
    },
    {
      text: 'Элементті айналдыру үшін қай функция қолданылады?',
      options: [
        'spin()',
        'turn()',
        'rotate()',
        'twist()'
      ]
    },
    {
      text: 'Элементтің масштабын өзгерту үшін қай функция қолданылады?',
      options: [
        'size()',
        'scale()',
        'resize()',
        'zoom()'
      ]
    },
    {
      text: 'CSS анимацияларының кадрларын анықтау үшін қай қасиет қолданылады?',
      options: [
        '@keyframes',
        '@frames',
        '@animation',
        '@steps'
      ]
    },
    {
      text: 'Анимацияның жылдамдығын бақылау үшін қай қасиет қолданылады?',
      options: [
        'animation-speed',
        'animation-duration',
        'animation-time',
        'animation-velocity'
      ]
    }
  ],
  
  // Ответы на тест для урока 8
  quizAnswers: {
    q1: 'a',
    q2: 'c',
    q3: 'b',
    q4: 'a',
    q5: 'b'
  }
};

// Тесты и практические задания для урока 9 (итоговый урок)
const lesson9_quiz_practice = {
  // Тест для урока 9 (легкие вопросы)
  quizQuestionsEasy: [
    {
      text: 'HTML тегтері қандай символдармен жазылады?',
      options: [
        '[ ]',
        '{ }',
        '< >',
        '( )'
      ]
    },
    {
      text: 'Веб-бетте тақырып жасау үшін қай тег қолданылады?',
      options: [
        '<p>',
        '<h1>',
        '<title>',
        '<header>'
      ]
    },
    {
      text: 'CSS-те түсті көрсету үшін қай формат қолданылмайды?',
      options: [
        'HEX (#FFFFFF)',
        'RGB (255, 255, 255)',
        'RGBA (255, 255, 255, 0.5)',
        'COLOR (white)'
      ]
    },
    {
      text: 'HTML құжатының негізгі бөлігі қай тегте орналасады?',
      options: [
        '<head>',
        '<body>',
        '<main>',
        '<content>'
      ]
    },
    {
      text: 'Сыртқы CSS файлын қосу үшін қай тег қолданылады?',
      options: [
        '<script>',
        '<style>',
        '<link>',
        '<css>'
      ]
    }
  ],
  
  // Тест для урока 9 (средние вопросы)
  quizQuestionsMedium: [
    {
      text: 'Флекс контейнерде элементтерді горизонталь бойынша ортаға туралау үшін қай қасиет қолданылады?',
      options: [
        'align-items: center;',
        'justify-content: center;',
        'text-align: center;',
        'margin: auto;'
      ]
    },
    {
      text: 'CSS-те "!important" не үшін қолданылады?',
      options: [
        'Стильді жою үшін',
        'Стильді басқа стильдерден жоғары қою үшін',
        'Стильді комментарий ретінде белгілеу үшін',
        'Стильді тек мобильді құрылғыларға қолдану үшін'
      ]
    },
    {
      text: 'Адаптивті дизайн жасау үшін қай CSS құралы қолданылады?',
      options: [
        'Селекторлар',
        'Анимациялар',
        'Медиа сұраулар (media queries)',
        'Псевдоэлементтер'
      ]
    },
    {
      text: 'Семантикалық HTML элементі емес қайсысы?',
      options: [
        '<article>',
        '<section>',
        '<div>',
        '<header>'
      ]
    },
    {
      text: 'CSS-те "z-index" қасиеті не үшін қолданылады?',
      options: [
        'Элементтің ені мен биіктігін орнату үшін',
        'Элементтің көрсетілу ретін басқару үшін',
        'Элементтің түсін өзгерту үшін',
        'Элементтің анимациясын басқару үшін'
      ]
    }
  ],
  
  // Тест для урока 9 (сложные вопросы)
  quizQuestionsHard: [
    {
      text: 'CSS Grid Layout-та "grid-template-areas" қасиеті не үшін қолданылады?',
      options: [
        'Тор ұяшықтарының өлшемін орнату үшін',
        'Тор элементтерін атау және орналастыру үшін',
        'Тор элементтерінің түсін өзгерту үшін',
        'Тор элементтерінің шрифтін орнату үшін'
      ]
    },
    {
      text: 'CSS-те "position: sticky" қасиеті қалай жұмыс істейді?',
      options: [
        'Элемент әрқашан бекітілген орында болады',
        'Элемент айналдыру кезінде белгілі бір нүктеге жеткенде бекітіледі',
        'Элемент басқа элементтерге жабысады',
        'Элемент экранның ортасында болады'
      ]
    },
    {
      text: 'HTML5-те <canvas> элементі не үшін қолданылады?',
      options: [
        'Видео ойнату үшін',
        'Аудио ойнату үшін',
        'Графика және анимацияларды JavaScript арқылы салу үшін',
        'Сыртқы контентті енгізу үшін'
      ]
    },
    {
      text: 'CSS-те "calc()" функциясы не үшін қолданылады?',
      options: [
        'Математикалық есептеулер жасау үшін',
        'Түстерді есептеу үшін',
        'Шрифт өлшемін есептеу үшін',
        'Анимация жылдамдығын есептеу үшін'
      ]
    },
    {
      text: 'Веб-беттің перформансын жақсарту үшін қай әдіс қолданылмайды?',
      options: [
        'Суреттерді оңтайландыру',
        'CSS және JavaScript файлдарын минификациялау',
        'Барлық стильдерді inline етіп жазу',
        'Lazy loading қолдану'
      ]
    }
  ],
  
  // Ответы на тесты для урока 9
  quizAnswersEasy: {
    q1: 'c',
    q2: 'b',
    q3: 'd',
    q4: 'b',
    q5: 'c'
  },
  
  quizAnswersMedium: {
    q1: 'b',
    q2: 'b',
    q3: 'c',
    q4: 'c',
    q5: 'b'
  },
  
  quizAnswersHard: {
    q1: 'b',
    q2: 'b',
    q3: 'c',
    q4: 'a',
    q5: 'c'
  },
  
  // Практическое задание для урока 9
  practiceTask: `
    <p>Төменде көрсетілген кодты жазыңыз. Бұл код адаптивті навигациялық меню жасайды:</p>
    <ol>
      <li>HTML құрылымын жазыңыз: nav элементі, оның ішінде ul тізімі, және li элементтерінде a сілтемелері (Басты бет, Біз туралы, Қызметтер, Байланыс)</li>
      <li>CSS стильдерін жазыңыз:
        <ul>
          <li>nav элементіне: background-color: #333; overflow: hidden;</li>
          <li>nav ul элементіне: list-style-type: none; margin: 0; padding: 0; display: flex;</li>
          <li>nav li элементіне: margin: 0;</li>
          <li>nav a элементіне: display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none;</li>
          <li>nav a:hover элементіне: background-color: #ddd; color: black;</li>
          <li>Мобильді құрылғылар үшін медиа сұрау жазыңыз (max-width: 600px): nav ul {flex-direction: column;}</li>
        </ul>
      </li>
    </ol>
  `,
  
  // Ответ на практическое задание для урока 9
  practiceAnswer: `<!-- HTML код -->
<nav>
  <ul>
    <li><a href="#">Басты бет</a></li>
    <li><a href="#">Біз туралы</a></li>
    <li><a href="#">Қызметтер</a></li>
    <li><a href="#">Байланыс</a></li>
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
};

// Собираем все тесты и практические задания в один объект
const htmlCssKzQuizPractice = {
  1: lesson1_quiz_practice,
  2: lesson2_quiz_practice,
  3: lesson3_quiz_practice,
  4: lesson4_quiz_practice,
  5: lesson5_quiz_practice,
  6: lesson6_quiz_practice,
  7: lesson7_quiz_practice,
  8: lesson8_quiz_practice,
  9: lesson9_quiz_practice
};

// Экспортируем объект с тестами и практическими заданиями
if (typeof window !== 'undefined') {
  window.htmlCssKzQuizPractice = htmlCssKzQuizPractice;
}
