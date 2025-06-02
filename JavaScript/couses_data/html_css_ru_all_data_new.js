/**
 * Файл с данными для курса HTML/CSS на русском языке
 */

const lesson1 = {
    title: "Урок 1: Основы HTML и CSS",
    content: `
      <section class="theory">
        <h2>Основы HTML и CSS</h2>
        <p>HTML (HyperText Markup Language) и CSS (Cascading Style Sheets) - две основные технологии, используемые для создания веб-сайтов.</p>
        
        <div class="info-card">
          <h4>Что такое HTML и CSS?</h4>
          <p>HTML - это язык разметки, который определяет структуру веб-страниц. CSS - это язык стилей, который определяет внешний вид веб-страниц. Эти две технологии работают вместе: HTML создает структуру контента, а CSS делает его красивым.</p>
        </div>
        
        <h3>Особенности HTML</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Теги и элементы</h4>
            <p>HTML состоит из тегов, которые определяют структуру контента.</p>
            <div class="example">
              <pre><code>&lt;h1&gt;Это заголовок&lt;/h1&gt;
  &lt;p&gt;Это параграф.&lt;/p&gt;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Атрибуты</h4>
            <p>HTML-теги могут иметь атрибуты, которые предоставляют дополнительную информацию.</p>
            <div class="example">
              <pre><code>&lt;a href="https://www.example.com"&gt;Ссылка&lt;/a&gt;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Структура документа</h4>
            <p>HTML-документ состоит из объявления DOCTYPE, элементов html, head и body.</p>
            <div class="example">
              <pre><code>&lt;!DOCTYPE html&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Заголовок страницы&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1&gt;Привет, мир!&lt;/h1&gt;
    &lt;/body&gt;
  &lt;/html&gt;</code></pre>
            </div>
          </div>
                  <div class="theory-card">
          <h4>Семантические элементы</h4>
          <p>HTML5 предлагает семантические элементы, которые определяют значение контента.</p>
          <div class="example">
            <pre><code>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;footer&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Особенности CSS</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Селекторы</h4>
          <p>CSS-селекторы позволяют выбирать HTML-элементы для стилизации.</p>
          <div class="example">
            <pre><code>h1 { color: blue; }
.class-name { font-size: 16px; }
#id-name { margin: 20px; }</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Свойства и значения</h4>
          <p>CSS-свойства определяют внешний вид элементов.</p>
          <div class="example">
            <pre><code>p {
  color: red;
  font-size: 18px;
  margin: 10px;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Методы добавления CSS</h4>
          <p>Существует три основных способа добавления CSS в HTML.</p>
          <div class="example">
            <p>1. Внешний CSS-файл:</p>
            <pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
            <p>2. Внутренний CSS:</p>
            <pre><code>&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;</code></pre>
            <p>3. Инлайн CSS:</p>
            <pre><code>&lt;p style="color: red;"&gt;Текст&lt;/p&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Блочная модель</h4>
                    <h4>Блочная модель</h4>
          <p>В CSS каждый элемент рассматривается как прямоугольный блок.</p>
          <div class="example">
            <pre><code>div {
  width: 300px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Создание вашего первого HTML/CSS проекта</h3>
      <p>Давайте создадим следующий простой HTML/CSS проект:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Моя первая веб-страница&lt;/title&gt;
  &lt;style&gt;
    body {
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
      color: #666;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;h1&gt;Привет, мир!&lt;/h1&gt;
    &lt;p&gt;Это моя первая веб-страница, созданная с помощью HTML и CSS.&lt;/p&gt;
        &lt;p&gt;Это моя первая веб-страница, созданная с помощью HTML и CSS.&lt;/p&gt;
    &lt;p&gt;Добро пожаловать в мир веб-разработки!&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      
      <p>Этот простой пример показывает основную структуру HTML-документа и как применять CSS-стили. В следующих уроках мы глубже изучим различные аспекты HTML и CSS.</p>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_R5a-Kc0pRc" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_R5a-Kc0pRc" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};

const lesson2 = {
  title: "Урок 2: Структура и элементы HTML",
  content: `
    <section class="theory">
      <h2>Структура и элементы HTML</h2>
      <p>В этом уроке мы глубже изучим структуру HTML-документа и основные элементы.</p>
      
      <div class="info-card">
        <h4>Основная структура HTML-документа</h4>
        <p>Каждый HTML-документ состоит из следующих основных элементов:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Заголовок документа&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Видимое содержимое здесь --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      
      <h3>Текстовые элементы</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Заголовки</h4>
          <p>HTML предлагает шесть уровней заголовков: от h1 до h6.</p>
          <div class="example">
            <pre><code>&lt;h1&gt;Самый большой заголовок&lt;/h1&gt;
&lt;h2&gt;Заголовок второго уровня&lt;/h2&gt;
&lt;h3&gt;Заголовок третьего уровня&lt;/h3&gt;
&lt;h3&gt;Заголовок третьего уровня&lt;/h3&gt;
&lt;h4&gt;Заголовок четвертого уровня&lt;/h4&gt;
&lt;h5&gt;Заголовок пятого уровня&lt;/h5&gt;
&lt;h6&gt;Самый маленький заголовок&lt;/h6&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Параграфы</h4>
          <p>Параграфы обозначаются тегом &lt;p&gt;.</p>
          <div class="example">
            <pre><code>&lt;p&gt;Это текст параграфа. Он может состоять из нескольких предложений.&lt;/p&gt;
&lt;p&gt;Это другой параграф.&lt;/p&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Форматирование текста</h4>
          <p>HTML предлагает различные теги для форматирования текста.</p>
          <div class="example">
            <pre><code>&lt;strong&gt;Жирный текст&lt;/strong&gt;
&lt;em&gt;Курсивный текст&lt;/em&gt;
&lt;mark&gt;Выделенный текст&lt;/mark&gt;
&lt;del&gt;Зачеркнутый текст&lt;/del&gt;
&lt;ins&gt;Добавленный текст&lt;/ins&gt;
&lt;sub&gt;Нижний индекс&lt;/sub&gt;
&lt;sup&gt;Верхний индекс&lt;/sup&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Списки</h4>
          <p>HTML поддерживает упорядоченные и неупорядоченные списки.</p>
          <div class="example">
            <p>Неупорядоченный список:</p>
            <pre><code>&lt;ul&gt;
  &lt;li&gt;Яблоко&lt;/li&gt;
  &lt;li&gt;Банан&lt;/li&gt;
  &lt;li&gt;Апельсин&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            <p>Упорядоченный список:</p>
            <pre><code>&lt;ol&gt;
  &lt;li&gt;Первый шаг&lt;/li&gt;
  &lt;li&gt;Второй шаг&lt;/li&gt;
  &lt;li&gt;Третий шаг&lt;/li&gt;
&lt;/ol&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Ссылки и изображения</h3>
            <h3>Ссылки и изображения</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Ссылки</h4>
          <p>Ссылки создаются с помощью тега &lt;a&gt; и указывают целевой URL через атрибут href.</p>
          <div class="example">
            <pre><code>&lt;a href="https://www.example.com"&gt;Перейти на пример сайта&lt;/a&gt;
&lt;a href="about.html"&gt;О нас&lt;/a&gt;
&lt;a href="#section1"&gt;Перейти к разделу 1&lt;/a&gt;
&lt;a href="mailto:info@example.com"&gt;Отправить электронное письмо&lt;/a&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Изображения</h4>
          <p>Изображения добавляются с помощью тега &lt;img&gt; и указывают источник изображения через атрибут src.</p>
          <div class="example">
            <pre><code>&lt;img src="image.jpg" alt="Описание изображения"&gt;
&lt;img src="logo.png" alt="Логотип" width="200" height="100"&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Фигуры</h4>
          <p>Для группировки изображений вместе с подписями можно использовать теги &lt;figure&gt; и &lt;figcaption&gt;.</p>
          <div class="example">
            <pre><code>&lt;figure&gt;
  &lt;img src="mountain.jpg" alt="Вид на горы"&gt;
  &lt;figcaption&gt;Рисунок 1: Красивый вид на горы&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Изображения-ссылки</h4>
          <p>Изображения можно комбинировать со ссылками.</p>
          <div class="example">
            <pre><code>&lt;a href="https://www.example.com"&gt;
  &lt;img src="button.png" alt="Кнопка"&gt;
&lt;/a&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Контейнеры и семантические элементы</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Div и Span</h4>
          <p>&lt;div&gt; и &lt;span&gt; - общие контейнеры, используемые для группировки содержимого.</p>
          <div class="example">
            <pre><code>&lt;div class="container"&gt;
                        <pre><code>&lt;div class="container"&gt;
  &lt;p&gt;Это &lt;span class="highlight"&gt;важный&lt;/span&gt; текст.&lt;/p&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Семантические элементы</h4>
          <p>HTML5 предлагает семантические элементы, которые определяют значение содержимого.</p>
          <div class="example">
            <pre><code>&lt;header&gt;Заголовок сайта&lt;/header&gt;
&lt;nav&gt;Навигация&lt;/nav&gt;
&lt;main&gt;Основное содержимое&lt;/main&gt;
&lt;article&gt;Статья&lt;/article&gt;
&lt;section&gt;Раздел&lt;/section&gt;
&lt;aside&gt;Дополнительная информация&lt;/aside&gt;
&lt;footer&gt;Футер сайта&lt;/footer&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Таблицы</h4>
          <p>Таблицы используются для организации данных.</p>
          <div class="example">
            <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Имя&lt;/th&gt;
      &lt;th&gt;Возраст&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Айдар&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Асель&lt;/td&gt;
      &lt;td&gt;22&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Формы</h4>
          <p>Формы используются для сбора пользовательских данных.</p>
          <div class="example">
            <pre><code>&lt;form action="/submit" method="post"&gt;
  &lt;label for="name"&gt;Имя:&lt;/label&gt;
    &lt;label for="name"&gt;Имя:&lt;/label&gt;
  &lt;input type="text" id="name" name="name"&gt;
  
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email"&gt;
  
  &lt;input type="submit" value="Отправить"&gt;
&lt;/form&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Практический пример</h3>
      <p>В следующем примере мы используем элементы, изученные в этом уроке:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Мой блог&lt;/title&gt;
  &lt;meta charset="UTF-8"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Мой блог&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;Главная&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Статьи&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Контакты&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  
  &lt;main&gt;
    &lt;article&gt;
      &lt;h2&gt;Изучение HTML&lt;/h2&gt;
      &lt;p&gt;HTML - это &lt;strong&gt;язык разметки&lt;/strong&gt;, который определяет структуру веб-страниц.&lt;/p&gt;
      
      &lt;figure&gt;
        &lt;img src="html.jpg" alt="Логотип HTML"&gt;
        &lt;figcaption&gt;Логотип HTML5&lt;/figcaption&gt;
      &lt;/figure&gt;
      
      &lt;h3&gt;Преимущества HTML&lt;/h3&gt;
      &lt;ol&gt;
        &lt;li&gt;Легко изучить&lt;/li&gt;
        &lt;li&gt;Поддерживается всеми браузерами&lt;/li&gt;
        &lt;li&gt;Основа веб-разработки&lt;/li&gt;
      &lt;/ol&gt;
            &lt;/ol&gt;
    &lt;/article&gt;
    
    &lt;aside&gt;
      &lt;h3&gt;Полезные ссылки&lt;/h3&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="https://www.w3schools.com"&gt;W3Schools&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="https://developer.mozilla.org"&gt;MDN Web Docs&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/aside&gt;
  &lt;/main&gt;
  
  &lt;footer&gt;
    &lt;p&gt;&copy; 2023 Мой блог. Все права защищены.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      
      <p>Этот пример показывает основную структуру HTML-документа и как использовать различные элементы. В следующем уроке мы научимся применять CSS-стили.</p>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ow3LCjZTbsY" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ow3LCjZTbsY" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};

const lesson3 = {
  title: "Урок 3: Основы CSS и стилизация",
  content: `
    <section class="theory">
      <h2>Основы CSS и стилизация</h2>
      <p>В этом уроке мы изучим основы CSS (Cascading Style Sheets) и методы стилизации HTML-элементов.</p>
      
      <div class="info-card">
        <h4>Что такое CSS?</h4>
        <p>CSS (Cascading Style Sheets) - это язык стилей, который определяет внешний вид веб-страниц. CSS позволяет управлять цветом, размером, расположением и другими визуальными аспектами HTML-элементов.</p>
      </div>
      
      <h3>Синтаксис CSS</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Селекторы</h4>
          <p>CSS-селекторы позволяют выбирать HTML-элементы для стилизации.</p>
          <div class="example">
            <pre><code>/* Селектор элемента */
p { color: blue; }
/* Селектор элемента */
p { color: blue; }

/* Селекторы класса */
.highlight { background-color: yellow; }

/* Селекторы ID */
#header { font-size: 24px; }

/* Комбинированный селектор */
div p { margin: 10px; }</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Свойства и значения</h4>
          <p>CSS-свойства определяют внешний вид элементов.</p>
          <div class="example">
            <pre><code>selector {
  property1: value1;
  property2: value2;
}

p {
  color: red;
  font-size: 16px;
  margin-bottom: 10px;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Цвета</h4>
          <p>В CSS есть несколько способов указания цветов.</p>
          <div class="example">
            <pre><code>/* Названия цветов */
color: red;

/* HEX-код */
color: #FF0000;

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (с прозрачностью) */
color: rgba(255, 0, 0, 0.5);

/* HSL */
color: hsl(0, 100%, 50%);</code></pre>
          </div>
        </div>
                <div class="theory-card">
          <h4>Единицы измерения</h4>
          <p>В CSS есть различные единицы для указания размеров.</p>
          <div class="example">
            <pre><code>/* Пиксели (абсолютные) */
font-size: 16px;

/* Em (относительно родительского элемента) */
margin: 1.5em;

/* Rem (относительно корневого элемента) */
padding: 2rem;

/* Проценты */
width: 80%;

/* Единицы области просмотра */
height: 50vh; /* 50% высоты области просмотра */
width: 100vw;  /* 100% ширины области просмотра */</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Методы добавления CSS</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Внешний CSS</h4>
          <p>Добавление стилей через внешний CSS-файл.</p>
          <div class="example">
            <p>В HTML-файле:</p>
            <pre><code>&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;</code></pre>
            <p>В файле styles.css:</p>
            <pre><code>body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

h1 {
  color: navy;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Внутренний CSS</h4>
          <p>Определение стилей через тег &lt;style&gt; в разделе &lt;head&gt; HTML-документа.</p>
          <div class="example">
                    <div class="example">
            <pre><code>&lt;head&gt;
  &lt;style&gt;
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    
    h1 {
      color: navy;
    }
  &lt;/style&gt;
&lt;/head&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Инлайн CSS</h4>
          <p>Применение стилей непосредственно через атрибут style HTML-элемента.</p>
          <div class="example">
            <pre><code>&lt;h1 style="color: navy; font-size: 24px;"&gt;Заголовок&lt;/h1&gt;
&lt;p style="color: gray; line-height: 1.6;"&gt;Текст параграфа.&lt;/p&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Практический пример</h3>
      <p>В следующем примере мы применяем CSS-свойства, изученные в этом уроке:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Пример CSS&lt;/title&gt;
  &lt;style&gt;
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    h1 {
      color: #2c3e50;
      text-align: center;
    }
    
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;h1&gt;Пример стилизации CSS&lt;/h1&gt;
    &lt;div class="card"&gt;
      &lt;h2&gt;Карточка 1&lt;/h2&gt;
      &lt;p&gt;Это пример карточки.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hft4XYApT44" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hft4XYApT44" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};

const lesson4 = {
  title: "Урок 4: Модели компоновки CSS",
  content: `
    <section class="theory">
      <h2>Модели компоновки CSS</h2>
      <p>В этом уроке мы изучим модели компоновки CSS (layout models) и методы размещения элементов на странице.</p>
      
      <div class="info-card">
        <h4>Модели компоновки</h4>
        <p>В CSS существует несколько способов размещения элементов на странице: Normal Flow, Flexbox, Grid и Positioning.</p>
      </div>
            <h3>Flexbox</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Основы Flexbox</h4>
          <p>Flexbox используется для одномерного расположения (строки или столбцы).</p>
          <div class="example">
            <pre><code>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Свойства Flexbox</h4>
          <p>Основные свойства Flexbox-контейнера:</p>
          <div class="example">
            <pre><code>/* Свойства контейнера */
.container {
  display: flex;
  flex-direction: row | column | row-reverse | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  align-items: stretch | flex-start | flex-end | center | baseline;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

/* Свойства элемента */
.item {
  order: 0; /* порядковый номер */
  flex-grow: 0; /* коэффициент роста */
  flex-shrink: 1; /* коэффициент сжатия */
  flex-basis: auto; /* базовый размер */
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>CSS Grid</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Основы Grid</h4>
          <p>CSS Grid используется для двумерного расположения (строки и столбцы).</p>
          <div class="example">
            <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
}

.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Свойства Grid</h4>
          <p>Основные свойства Grid-контейнера:</p>
          <div class="example">
            <pre><code>/* Свойства контейнера */
.container {
  display: grid;
  grid-template-columns: 100px 1fr 2fr;
  grid-template-rows: 50px auto 100px;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
  gap: 10px;
  grid-auto-rows: 100px;
  grid-auto-columns: 1fr;
  grid-auto-flow: row | column | dense;
}

/* Свойства элемента */
.item {
  grid-column: 1 / 3; /* начало / конец */
  grid-row: 1 / 2;
  grid-area: header; /* именованная область */
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Позиционирование</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Типы позиционирования</h4>
          <p>CSS предлагает несколько типов позиционирования элементов.</p>
          <div class="example">
            <pre><code>/* Статическое (по умолчанию) */
position: static;

/* Относительное */
position: relative;
top: 10px;
left: 20px;

/* Абсолютное */
position: absolute;
top: 0;
right: 0;

/* Фиксированное */
position: fixed;
bottom: 0;
left: 0;

/* Липкое */
position: sticky;
top: 0;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Z-index</h4>
          <p>Свойство z-index управляет порядком наложения элементов.</p>
          <div class="example">
            <pre><code>.back {
  position: absolute;
  z-index: 1;
}

.front {
  position: absolute;
  z-index: 2; /* будет отображаться поверх .back */
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Практический пример</h3>
      <p>В следующем примере мы применяем различные модели компоновки CSS:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;CSS Layout Example&lt;/title&gt;
  &lt;style&gt;
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    
    .header {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }
    
    .container {
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .sidebar {
      flex: 1;
      background-color: #f0f0f0;
      padding: 20px;
      margin-right: 20px;
    }
    
    .content {
      flex: 3;
    }
    
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    
    .grid-item {
      background-color: #e0e0e0;
      padding: 20px;
      border-radius: 5px;
    }
    
    .footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="header"&gt;
    &lt;h1&gt;CSS Layout Example&lt;/h1&gt;
  &lt;/div&gt;
  
  &lt;div class="container"&gt;
    &lt;div class="sidebar"&gt;
      &lt;h2&gt;Sidebar&lt;/h2&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Link 2&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Link 3&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
    
    &lt;div class="content"&gt;
      &lt;h2&gt;Grid Layout&lt;/h2&gt;
      &lt;div class="grid-container"&gt;
        &lt;div class="grid-item"&gt;Item 1&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 2&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 3&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 4&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 5&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 6&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class="footer"&gt;
    &lt;p&gt;Footer - Fixed Position&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      
      <p>Этот пример демонстрирует использование Flexbox для основного макета (sidebar и content), Grid для элементов в content, и Fixed positioning для footer.</p>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YG8Vhz1pAsU" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YG8Vhz1pAsU" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};

const lesson5 = {
  title: "Урок 5: Адаптивный дизайн и медиа-запросы",
  content: `
    <section class="theory">
      <h2>Адаптивный дизайн и медиа-запросы</h2>
      <p>В этом уроке мы изучим принципы адаптивного дизайна и использование медиа-запросов для создания отзывчивых веб-сайтов.</p>
      
      <div class="info-card">
        <h4>Что такое адаптивный дизайн?</h4>
        <p>Адаптивный дизайн - это подход к веб-дизайну, который обеспечивает оптимальный просмотр и взаимодействие с сайтом на различных устройствах (от настольных компьютеров до мобильных телефонов).</p>
      </div>
      
      <h3>Медиа-запросы</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Синтаксис медиа-запросов</h4>
          <p>Медиа-запросы позволяют применять стили в зависимости от характеристик устройства.</p>
          <div class="example">
            <pre><code>@media screen and (max-width: 768px) {
  /* Стили для экранов шириной до 768px */
  body {
    font-size: 14px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  /* Стили для экранов от 769px до 1200px */
  body {
    font-size: 16px;
  }
}

@media screen and (min-width: 1201px) {
  /* Стили для экранов шириной от 1201px */
  body {
    font-size: 18px;
  }
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Типы медиа-запросов</h4>
          <p>Медиа-запросы могут использовать различные условия.</p>
          <div class="example">
            <pre><code>/* Ширина экрана */
@media (max-width: 600px) { ... }
@media (min-width: 600px) { ... }

/* Ориентация устройства */
@media (orientation: portrait) { ... }
@media (orientation: landscape) { ... }

/* Тип устройства */
@media screen { ... } /* экраны */
@media print { ... }  /* принтеры */

/* Соотношение сторон */
@media (aspect-ratio: 16/9) { ... }

/* Разрешение */
@media (resolution: 300dpi) { ... }</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Адаптивные изображения</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Гибкие изображения</h4>
          <p>Создание изображений, которые адаптируются к размеру контейнера.</p>
          <div class="example">
            <pre><code>img {
  max-width: 100%;
  height: auto;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Атрибут srcset</h4>
          <p>Предоставление различных версий изображения для разных устройств.</p>
          <div class="example">
            <pre><code>&lt;img 
  srcset="small.jpg 500w,
          medium.jpg 1000w,
          large.jpg 1500w"
  sizes="(max-width: 600px) 500px,
         (max-width: 1200px) 1000px,
         1500px"
  src="fallback.jpg" 
  alt="Адаптивное изображение"&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Элемент picture</h4>
          <p>Более гибкий способ предоставления различных изображений.</p>
          <div class="example">
            <pre><code>&lt;picture&gt;
  &lt;source media="(max-width: 600px)" srcset="small.jpg"&gt;
  &lt;source media="(max-width: 1200px)" srcset="medium.jpg"&gt;
  &lt;img src="large.jpg" alt="Адаптивное изображение"&gt;
&lt;/picture&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Адаптивные макеты</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Flexbox для адаптивного дизайна</h4>
          <p>Использование Flexbox для создания адаптивных макетов.</p>
          <div class="example">
            <pre><code>.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 300px; /* grow, shrink, basis */
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Grid для адаптивного дизайна</h4>
          <p>Использование Grid для создания адаптивных макетов.</p>
          <div class="example">
            <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Практический пример</h3>
      <p>В следующем примере мы создадим адаптивный макет с использованием медиа-запросов:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Адаптивный дизайн&lt;/title&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;style&gt;
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    
    .header {
      background-color: #333;
      color: white;
      padding: 15px;
      text-align: center;
    }
    
    .navbar {
      display: flex;
      background-color: #444;
    }
    
    .navbar a {
      color: white;
      padding: 14px 20px;
      text-decoration: none;
      text-align: center;
    }
    
    .row {
      display: flex;
      flex-wrap: wrap;
    }
    
    .sidebar {
      flex: 30%;
      background-color: #f1f1f1;
      padding: 20px;
    }
    
    .main {
      flex: 70%;
      background-color: white;
      padding: 20px;
    }
    
    .footer {
      padding: 20px;
      text-align: center;
      background-color: #333;
      color: white;
    }
    
    /* Адаптивный дизайн */
    @media screen and (max-width: 700px) {
      .row, .navbar {
        flex-direction: column;
      }
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="header"&gt;
    &lt;h1&gt;Адаптивный веб-сайт&lt;/h1&gt;
    &lt;p&gt;Изменяйте размер окна браузера, чтобы увидеть эффект.&lt;/p&gt;
  &lt;/div&gt;
  
  &lt;div class="navbar"&gt;
    &lt;a href="#"&gt;Ссылка 1&lt;/a&gt;
    &lt;a href="#"&gt;Ссылка 2&lt;/a&gt;
    &lt;a href="#"&gt;Ссылка 3&lt;/a&gt;
    &lt;a href="#"&gt;Ссылка 4&lt;/a&gt;
  &lt;/div&gt;
  
  &lt;div class="row"&gt;
    &lt;div class="sidebar"&gt;
      &lt;h2&gt;Боковая панель&lt;/h2&gt;
      &lt;p&gt;Это содержимое боковой панели, которое будет отображаться под основным содержимым на маленьких экранах.&lt;/p&gt;
    &lt;/div&gt;
    
    &lt;div class="main"&gt;
      &lt;h2&gt;Основное содержимое&lt;/h2&gt;
      &lt;p&gt;Этот макет использует flexbox для создания адаптивного дизайна. На больших экранах боковая панель и основное содержимое будут отображаться рядом друг с другом.&lt;/p&gt;
      &lt;p&gt;На маленьких экранах они будут отображаться друг под другом.&lt;/p&gt;
      &lt;p&gt;Навигационная панель также будет изменяться с горизонтальной на вертикальную на маленьких экранах.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class="footer"&gt;
    &lt;p&gt;Footer&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      
      <p>Этот пример демонстрирует, как создать адаптивный макет, который меняет свою структуру в зависимости от размера экрана.</p>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ahYuxTRjY0g" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ahYuxTRjY0g" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};
const lesson6 = {
    title: "Урок 6: CSS-трансформации и анимации",
    content: `
      <section class="theory">
        <h2>CSS-трансформации и анимации</h2>
        <p>В этом уроке мы изучим CSS-трансформации и анимации для создания динамичных и интерактивных веб-страниц.</p>
        
        <div class="info-card">
          <h4>Трансформации и анимации</h4>
          <p>CSS предоставляет мощные инструменты для создания визуальных эффектов без использования JavaScript.</p>
        </div>
        
        <h3>CSS-трансформации</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Свойство transform</h4>
            <p>Свойство transform позволяет изменять форму, размер и положение элементов.</p>
            <div class="example">
              <pre><code>/* Перемещение */
  transform: translate(50px, 100px);
  transform: translateX(50px);
  transform: translateY(100px);
  
  /* Масштабирование */
  transform: scale(2, 0.5);
  transform: scaleX(2);
  transform: scaleY(0.5);
  
  /* Вращение */
  transform: rotate(45deg);
  
  /* Наклон */
  transform: skew(10deg, 20deg);
  transform: skewX(10deg);
  transform: skewY(20deg);
  
  /* Комбинирование трансформаций */
  transform: translate(50px, 50px) rotate(45deg) scale(1.5);</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Точка трансформации</h4>
            <p>Свойство transform-origin определяет точку, относительно которой применяется трансформация.</p>
            <div class="example">
              <pre><code>transform-origin: center; /* по умолчанию */
  transform-origin: top left;
  transform-origin: bottom right;
  transform-origin: 50px 50px;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>3D-трансформации</h4>
            <p>CSS также поддерживает 3D-трансформации.</p>
            <div class="example">
              <pre><code>/* 3D-перемещение */
  transform: translate3d(50px, 100px, 200px);
  transform: translateZ(200px);
  
  /* 3D-вращение */
  transform: rotateX(45deg);
  transform: rotateY(45deg);
  transform: rotateZ(45deg);
  transform: rotate3d(1, 1, 1, 45deg);
  
  /* Перспектива */
  perspective: 1000px;
  transform-style: preserve-3d;</code></pre>
            </div>
          </div>
        </div>
        
        <h3>CSS-переходы</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Свойство transition</h4>
            <p>Переходы позволяют плавно изменять свойства элемента.</p>
            <div class="example">
              <pre><code>/* Базовый синтаксис */
  transition: property duration timing-function delay;
  
  /* Примеры */
  transition: all 0.5s ease;
  transition: background-color 1s linear;
  transition: transform 0.3s ease-in-out 0.1s;
  
  /* Несколько переходов */
  transition: 
    background-color 0.5s ease,
    transform 1s ease-in-out;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Функции временной зависимости</h4>
            <p>Функции временной зависимости определяют скорость изменения свойства.</p>
            <div class="example">
              <pre><code>/* Предопределенные функции */
  transition-timing-function: ease; /* по умолчанию */
  transition-timing-function: linear;
  transition-timing-function: ease-in;
  transition-timing-function: ease-out;
  transition-timing-function: ease-in-out;
  
  /* Кубическая функция Безье */
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
  
  /* Ступенчатая функция */
  transition-timing-function: steps(5, end);</code></pre>
            </div>
          </div>
        </div>
        
        <h3>CSS-анимации</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Ключевые кадры</h4>
            <p>@keyframes определяют последовательность анимации.</p>
            <div class="example">
              <pre><code>@keyframes slide-in {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Свойство animation</h4>
            <p>Свойство animation применяет анимацию к элементу.</p>
            <div class="example">
              <pre><code>/* Базовый синтаксис */
  animation: name duration timing-function delay iteration-count direction fill-mode play-state;
  
  /* Примеры */
  animation: slide-in 1s ease;
  animation: pulse 2s ease-in-out infinite;
  
  /* Подробные свойства */
  animation-name: slide-in;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0.5s;
  animation-iteration-count: 3;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-play-state: running;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Несколько анимаций</h4>
            <p>К элементу можно применить несколько анимаций одновременно.</p>
            <div class="example">
              <pre><code>animation: 
    slide-in 1s ease,
    pulse 2s ease-in-out infinite;</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Практический пример</h3>
        <p>В следующем примере мы создадим различные анимации и трансформации:</p>
        
        <div class="code-example">
          <h4>HTML код:</h4>
          <pre><code>&lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;CSS Анимации и Трансформации&lt;/title&gt;
    &lt;style&gt;
      body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
      }
      
      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 50px;
      }
      
      .box {
        width: 100px;
        height: 100px;
        background-color: #3498db;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        transition: all 0.3s ease;
      }
      
      /* Трансформации при наведении */
      .box-scale:hover {
        transform: scale(1.2);
      }
      
      .box-rotate:hover {
        transform: rotate(45deg);
      }
      
      .box-skew:hover {
        transform: skew(10deg, 10deg);
      }
      
      .box-translate:hover {
        transform: translate(10px, 10px);
      }
      
      .box-multiple:hover {
        transform: scale(1.1) rotate(10deg) translateY(-10px);
        background-color: #e74c3c;
      }
      
      .box-origin {
        transform-origin: top left;
      }
      
      .box-origin:hover {
        transform: rotate(30deg);
      }
      
      /* Анимации */
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      
      .box-animation {
        animation: bounce 1s ease infinite;
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      .box-pulse {
        animation: pulse 1.5s ease-in-out infinite;
      }
      
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      .box-spin {
        animation: rotate 3s linear infinite;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;CSS Трансформации&lt;/h1&gt;
    &lt;p&gt;Наведите курсор на каждый блок, чтобы увидеть эффект.&lt;/p&gt;
    
    &lt;div class="container"&gt;
      &lt;div class="box box-scale"&gt;Scale&lt;/div&gt;
      &lt;div class="box box-rotate"&gt;Rotate&lt;/div&gt;
      &lt;div class="box box-skew"&gt;Skew&lt;/div&gt;
      &lt;div class="box box-translate"&gt;Translate&lt;/div&gt;
      &lt;div class="box box-multiple"&gt;Multiple&lt;/div&gt;
      &lt;div class="box box-origin"&gt;Origin&lt;/div&gt;
    &lt;/div&gt;
    
    &lt;h1&gt;CSS Анимации&lt;/h1&gt;
    &lt;div class="container"&gt;
      &lt;div class="box box-animation"&gt;Bounce&lt;/div&gt;
      &lt;div class="box box-pulse"&gt;Pulse&lt;/div&gt;
      &lt;div class="box box-spin"&gt;Spin&lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
  &lt;/html&gt;</code></pre>
        </div>
      </section>
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3a_iaHqazHo" title="CSS анимации" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3a_iaHqazHo" title="CSS анимации и трансформации" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  const lesson7 = { 
    title: "Урок 7: Формы и валидация", 
    content: `
      <section class="theory">
        <h2>Формы и валидация</h2>
        <p>В этом уроке мы изучим создание и стилизацию форм, а также методы валидации пользовательского ввода.</p>
        
        <div class="info-card">
          <h4>Основы форм</h4>
          <p>Формы являются ключевым элементом взаимодействия пользователя с веб-сайтом и позволяют собирать данные от пользователя.</p>
        </div>
        
        <h3>Основы форм</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Элемент form</h4>
            <p>Элемент form является контейнером для элементов формы.</p>
            <div class="example">
              <pre><code>&lt;form action="/submit" method="post"&gt;
    &lt;!-- Элементы формы --&gt;
    &lt;input type="submit" value="Отправить"&gt;
  &lt;/form&gt;</code></pre>
            </div>
            <p>Основные атрибуты:</p>
            <ul>
              <li>action - URL для отправки данных</li>
              <li>method - метод отправки (get или post)</li>
              <li>enctype - тип кодирования (для загрузки файлов)</li>
              <li>target - где открыть ответ</li>
              <li>autocomplete - включение/отключение автозаполнения</li>
            </ul>
          </div>
          
          <div class="theory-card">
            <h4>Текстовые поля</h4>
            <p>Существуют различные типы текстовых полей для разных типов данных.</p>
            <div class="example">
              <pre><code>&lt;!-- Текст --&gt;
  &lt;input type="text" name="username" placeholder="Имя пользователя"&gt;
  
  &lt;!-- Пароль --&gt;
  &lt;input type="password" name="password" placeholder="Пароль"&gt;
  
  &lt;!-- Email --&gt;
  &lt;input type="email" name="email" placeholder="Email"&gt;
  
  &lt;!-- Номер телефона --&gt;
  &lt;input type="tel" name="phone" placeholder="Телефон"&gt;
  
  &lt;!-- Многострочное текстовое поле --&gt;
  &lt;textarea name="message" rows="4" cols="50" placeholder="Сообщение"&gt;&lt;/textarea&gt;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Числовые поля и диапазоны</h4>
            <p>Для числовых значений и диапазонов используются специальные типы полей.</p>
            <div class="example">
              <pre><code>&lt;!-- Число --&gt;
  &lt;input type="number" name="quantity" min="1" max="10" step="1"&gt;
  
  &lt;!-- Диапазон (ползунок) --&gt;
  &lt;input type="range" name="rating" min="1" max="5"&gt;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Дата и время</h4>
            <p>Для выбора даты и времени используются специальные типы полей.</p>
            <div class="example">
              <pre><code>&lt;!-- Дата --&gt;
  &lt;input type="date" name="birthdate"&gt;
  
  &lt;!-- Время --&gt;
  &lt;input type="time" name="meeting-time"&gt;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Чекбоксы и радиокнопки</h4>
            <p>Чекбоксы и радиокнопки используются для выбора опций.</p>
            <div class="example">
              <pre><code>&lt;!-- Чекбокс --&gt;
  &lt;input type="checkbox" name="agree" id="agree"&gt;
  &lt;label for="agree"&gt;Я согласен с условиями&lt;/label&gt;
  
  &lt;!-- Радиокнопки --&gt;
  &lt;input type="radio" name="gender" id="male" value="male"&gt;
  &lt;label for="male"&gt;Мужской&lt;/label&gt;
  &lt;input type="radio" name="gender" id="female" value="female"&gt;
  &lt;label for="female"&gt;Женский&lt;/label&gt;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Выпадающие списки</h4>
            <p>Выпадающие списки используются для выбора из предопределенных опций.</p>
            <div class="example">
              <pre><code>&lt;!-- Выпадающий список --&gt;
  &lt;select name="country"&gt;
    &lt;option value="us"&gt;США&lt;/option&gt;
    &lt;option value="uk"&gt;Великобритания&lt;/option&gt;
    &lt;option value="ca"&gt;Канада&lt;/option&gt;
  &lt;/select&gt;
  
  &lt;!-- Список с множественным выбором --&gt;
  &lt;select name="languages" multiple&gt;
    &lt;option value="html"&gt;HTML&lt;/option&gt;
    &lt;option value="css"&gt;CSS&lt;/option&gt;
    &lt;option value="js"&gt;JavaScript&lt;/option&gt;
  &lt;/select&gt;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Другие типы полей</h4>
            <p>Существуют и другие типы полей для специальных случаев.</p>
            <div class="example">
              <pre><code>&lt;!-- Загрузка файла --&gt;
  &lt;input type="file" name="photo"&gt;
  
  &lt;!-- Выбор цвета --&gt;
  &lt;input type="color" name="favorite-color"&gt;
  
  &lt;!-- Скрытое поле --&gt;
  &lt;input type="hidden" name="user-id" value="123"&gt;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Кнопки</h4>
            <p>Кнопки используются для отправки форм и других действий.</p>
            <div class="example">
              <pre><code>&lt;!-- Кнопки --&gt;
  &lt;input type="submit" value="Отправить"&gt;
  &lt;input type="reset" value="Сбросить"&gt;
  &lt;button type="submit"&gt;Отправить&lt;/button&gt;</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Валидация форм</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Атрибуты валидации</h4>
            <p>HTML5 предоставляет атрибуты для базовой валидации форм.</p>
            <div class="example">
              <pre><code>&lt;!-- Обязательное поле --&gt;
  &lt;input type="text" name="username" required&gt;
  
  &lt;!-- Минимальная и максимальная длина --&gt;
  &lt;input type="text" name="username" minlength="3" maxlength="20"&gt;
  
  &lt;!-- Шаблон (регулярное выражение) --&gt;
  &lt;input type="text" name="username" pattern="[a-zA-Z0-9]+"&gt;
  
  &lt;!-- Минимальное и максимальное значение --&gt;
  &lt;input type="number" name="age" min="18" max="100"&gt;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>CSS-селекторы для валидации</h4>
            <p>CSS предоставляет псевдоклассы для стилизации полей формы в зависимости от их состояния.</p>
            <div class="example">
              <pre><code>input:valid {
    border-color: green;
  }
  
  input:invalid {
    border-color: red;
  }
  
  input:required {
    border-left: 4px solid blue;
  }
  
  input:focus:invalid {
    box-shadow: 0 0 5px red;
  }</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>JavaScript-валидация</h4>
            <p>JavaScript позволяет создавать более сложные проверки и улучшать пользовательский опыт.</p>
            <div class="example">
              <pre><code>// Проверка совпадения паролей
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  
  function validatePassword() {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Пароли не совпадают');
    } else {
      confirmPassword.setCustomValidity('');
    }
  }
  
  password.addEventListener('change', validatePassword);
  confirmPassword.addEventListener('keyup', validatePassword);</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Стилизация форм</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Базовые стили для форм</h4>
            <p>Основные стили для создания привлекательных форм.</p>
            <div class="example">
              <pre><code>form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type="checkbox"], input[type="radio"] {
    width: auto;
    margin-right: 10px;
  }
  
  button, input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover, input[type="submit"]:hover {
    background-color: #45a049;
  }</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Практический пример</h3>
        <p>В следующем примере мы создадим форму регистрации с валидацией:</p>
        
        <div class="code-example">
          <h4>HTML код:</h4>
          <pre><code>&lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Форма регистрации&lt;/title&gt;
    &lt;style&gt;
      * {
        box-sizing: border-box;
      }
      
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
      }
      
      .form-container {
        max-width: 500px;
        margin: 0 auto;
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      
      h2 {
        text-align: center;
        color: #333;
      }
      
      .form-group {
        margin-bottom: 15px;
      }
      
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      
      input, select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
      
      input:focus, select:focus {
        outline: none;
        border-color: #4CAF50;
        box-shadow: 0 0 5px rgba(76,175,80,0.3);
      }
      
      input:valid {
        border-left: 4px solid #4CAF50;
      }
      
      input:invalid:not(:placeholder-shown) {
        border-left: 4px solid #f44336;
      }
      
      .error-message {
        color: #f44336;
        font-size: 12px;
        margin-top: 5px;
        display: none;
      }
      
      input:invalid:not(:placeholder-shown) + .error-message {
        display: block;
      }
      
      .checkbox-group {
        margin-top: 5px;
      }
      
      .checkbox-group label {
        display: inline;
        font-weight: normal;
      }
      
      .checkbox-group input {
        width: auto;
        margin-right: 10px;
      }
      
      button {
        width: 100%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-top: 10px;
      }
      
      button:hover {
        background-color: #45a049;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="form-container"&gt;
      &lt;h2&gt;Регистрация&lt;/h2&gt;
      &lt;form id="registration-form" novalidate&gt;
        &lt;div class="form-group"&gt;
          &lt;label for="username"&gt;Имя пользователя&lt;/label&gt;
          &lt;input type="text" id="username" name="username" placeholder="Введите имя пользователя" required minlength="3" maxlength="20" pattern="[a-zA-Z0-9]+"&gt;
          &lt;div class="error-message"&gt;Имя пользователя должно содержать от 3 до 20 символов (только буквы и цифры)&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div class="form-group"&gt;
          &lt;label for="email"&gt;Email&lt;/label&gt;
          &lt;input type="email" id="email" name="email" placeholder="Введите email" required&gt;
          &lt;div class="error-message"&gt;Пожалуйста, введите корректный email&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div class="form-group"&gt;
          &lt;label for="password"&gt;Пароль&lt;/label&gt;
          &lt;input type="password" id="password" name="password" placeholder="Введите пароль" required minlength="8" pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"&gt;
          &lt;div class="error-message"&gt;Пароль должен содержать минимум 8 символов, включая цифры, строчные и заглавные буквы&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div class="form-group"&gt;
          &lt;label for="confirm-password"&gt;Подтверждение пароля&lt;/label&gt;
          &lt;input type="password" id="confirm-password" name="confirm-password" placeholder="Подтвердите пароль" required&gt;
          &lt;div class="error-message"&gt;Пароли не совпадают&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div class="form-group"&gt;
          &lt;label for="birthdate"&gt;Дата рождения&lt;/label&gt;
          &lt;input type="date" id="birthdate" name="birthdate" required&gt;
          &lt;div class="error-message"&gt;Пожалуйста, введите дату рождения&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div class="form-group"&gt;
          &lt;label for="country"&gt;Страна&lt;/label&gt;
          &lt;select id="country" name="country" required&gt;
            &lt;option value=""&gt;Выберите страну&lt;/option&gt;
            &lt;option value="kz"&gt;Казахстан&lt;/option&gt;
            &lt;option value="ru"&gt;Россия&lt;/option&gt;
            &lt;option value="us"&gt;США&lt;/option&gt;
            &lt;option value="uk"&gt;Великобритания&lt;/option&gt;
          &lt;/select&gt;
        &lt;/div&gt;
        
        &lt;div class="form-group checkbox-group"&gt;
          &lt;input type="checkbox" id="terms" name="terms" required&gt;
          &lt;label for="terms"&gt;Я согласен с условиями использования&lt;/label&gt;
        &lt;/div&gt;
        
        &lt;button type="submit"&gt;Зарегистрироваться&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
    
    &lt;script&gt;
      // JavaScript для дополнительной валидации
      const form = document.getElementById('registration-form');
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirm-password');
      
      // Проверка совпадения паролей
      function validatePassword() {
        if (password.value !== confirmPassword.value) {
          confirmPassword.setCustomValidity('Пароли не совпадают');
        } else {
          confirmPassword.setCustomValidity('');
        }
      }
      
      password.addEventListener('change', validatePassword);
      confirmPassword.addEventListener('keyup', validatePassword);
      
      // Обработка отправки формы
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          alert('Пожалуйста, исправьте ошибки в форме');
        } else {
          alert('Форма успешно отправлена!');
        }
      });
    &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;</code></pre>
        </div>
      </section>
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_in4LAdxAUA" title="Формы HTML" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_in4LAdxAUA" title="Формы и валидация HTML" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  const lesson8 = { 
    title: "Урок 8: Современные возможности CSS", 
    content: `
      <section class="theory">
        <h2>Современные возможности CSS</h2>
        <p>В этом уроке мы изучим современные возможности CSS, которые позволяют создавать более гибкие и мощные стили.</p>
        
        <div class="info-card">
          <h4>Современный CSS</h4>
          <p>Современный CSS предоставляет множество мощных инструментов, которые упрощают разработку и делают стили более гибкими и поддерживаемыми.</p>
        </div>
        
        <h3>CSS-переменные</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Объявление и использование переменных</h4>
            <p>CSS-переменные (пользовательские свойства) позволяют хранить и повторно использовать значения.</p>
            <div class="example">
              <pre><code>/* Объявление переменных */
  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --text-color: #333;
    --spacing-unit: 8px;
    --max-width: 1200px;
  }
  
  /* Использование переменных */
  .header {
    background-color: var(--primary-color);
    color: white;
    padding: calc(var(--spacing-unit) * 2);
  }
  
  .button {
    background-color: var(--secondary-color);
    color: white;
    padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
  }
  
  /* Переопределение переменных */
  .dark-theme {
    --primary-color: #2980b9;
    --text-color: #f1f1f1;
  }
  
  /* Резервные значения */
  .element {
    color: var(--text-color, black);
  }</code></pre>
            </div>
          </div>
        </div>
        
        <h3>CSS-функции</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Функция calc()</h4>
            <p>calc() позволяет выполнять математические вычисления для определения значений свойств.</p>
            <div class="example">
              <pre><code>/* Базовые вычисления */
  width: calc(100% - 40px);
  
  /* Комбинирование единиц измерения */
  margin-top: calc(2rem + 10px);
  
  /* Сложные вычисления */
  width: calc((100% - 30px) / 4);</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Функции min(), max() и clamp()</h4>
            <p>Эти функции позволяют выбирать значения в зависимости от условий.</p>
            <div class="example">
              <pre><code>/* min() возвращает наименьшее значение */
  width: min(50%, 500px);
  
  /* max() возвращает наибольшее значение */
  width: max(50%, 300px);
  
  /* clamp() ограничивает значение между минимумом и максимумом */
  font-size: clamp(1rem, 2.5vw, 2rem);
  /* эквивалентно: max(1rem, min(2.5vw, 2rem)) */</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Продвинутые селекторы</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Селекторы атрибутов</h4>
            <p>CSS позволяет выбирать элементы на основе их атрибутов.</p>
            <div class="example">
              <pre><code>[data-type="primary"] {
    color: blue;
  }
  
  /* Селектор дочерних элементов */
  article > p {
    margin-bottom: 10px;
  }
  
  /* Селектор смежных элементов */
  h2 + p {
    font-weight: bold;
  }
  
  /* Селектор последующих элементов */
  h2 ~ p {
    color: gray;
  }
  
  /* Селектор по части значения атрибута */
  [class^="col-"] {
    padding: 10px;
  }</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Псевдоклассы</h4>
            <p>Псевдоклассы позволяют выбирать элементы на основе их состояния или позиции.</p>
            <div class="example">
              <pre><code>/* Псевдоклассы состояния */
  a:hover {
    text-decoration: underline;
  }
  input:focus {
    border-color: blue;
  }
  button:active {
    transform: scale(0.98);
  }
  
  /* Структурные псевдоклассы */
  li:first-child {
    font-weight: bold;
  }
  li:last-child {
    margin-bottom: 0;
  }
  li:nth-child(odd) {
    background-color: #f0f0f0;
  }
  li:nth-child(3n+1) {
    color: red;
  }
  
  /* Псевдоклассы форм */
  input:required {
    border-left: 4px solid red;
  }
  input:optional {
    border-left: 4px solid gray;
  }
  input:valid {
    border-color: green;
  }
  input:invalid {
    border-color: red;
  }
  input:checked + label {
    font-weight: bold;
  }
  
  /* Другие псевдоклассы */
  p:empty {
    display: none;
  }
  div:not(.excluded) {
    background-color: #f0f0f0;
  }</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Псевдоэлементы</h4>
            <p>Псевдоэлементы позволяют стилизовать определенные части элемента.</p>
            <div class="example">
              <pre><code>p::first-letter {
    font-size: 2em;
  }
  p::first-line {
    font-weight: bold;
  }
  
  /* Добавление контента до и после элемента */
  .quote::before {
    content: "\\201C";
  }
  .quote::after {
    content: "\\201D";
  }
  
  /* Стилизация выделения */
  ::selection {
    background-color: yellow;
    color: black;
  }
  
  /* Стилизация плейсхолдера */
  input::placeholder {
    color: #999;
  }</code></pre>
            </div>
          </div>
        </div>
        
        <h3>CSS-фильтры и эффекты</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Фильтры</h4>
            <p>CSS-фильтры позволяют применять графические эффекты к элементам.</p>
            <div class="example">
              <pre><code>filter: blur(5px);
  filter: brightness(150%);
  filter: contrast(200%);
  filter: grayscale(100%);
  filter: hue-rotate(90deg);
  filter: invert(100%);
  filter: opacity(50%);
  filter: saturate(200%);
  filter: sepia(100%);
  filter: drop-shadow(5px 5px 10px black);
  
  /* Комбинирование фильтров */
  filter: contrast(150%) brightness(120%);</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Режимы смешивания</h4>
            <p>Режимы смешивания определяют, как элементы смешиваются с фоном или другими элементами.</p>
            <div class="example">
              <pre><code>/* Режимы смешивания фона */
  background-blend-mode: multiply;
  background-blend-mode: screen;
  background-blend-mode: overlay;
  
  /* Режимы смешивания элементов */
  mix-blend-mode: difference;
  mix-blend-mode: exclusion;
  mix-blend-mode: hard-light;</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Практический пример</h3>
        <p>В следующем примере мы используем современные возможности CSS:</p>
        
        <div class="code-example">
          <h4>HTML код:</h4>
          <pre><code>&lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Современный CSS&lt;/title&gt;
    &lt;style&gt;
      /* CSS-переменные */
      :root {
        --primary-color: #3498db;
        --secondary-color: #2ecc71;
        --accent-color: #e74c3c;
        --text-color: #333;
        --light-color: #f9f9f9;
        --spacing: 8px;
        --border-radius: 4px;
        --max-width: 1200px;
      }
      
      /* Базовые стили */
      body {
        font-family: Arial, sans-serif;
        color: var(--text-color);
        margin: 0;
        padding: 0;
        background-color: var(--light-color);
      }
      
      .container {
        max-width: var(--max-width);
        margin: 0 auto;
        padding: calc(var(--spacing) * 3);
      }
      
      /* Заголовок */
      .header {
        background-color: var(--primary-color);
        color: white;
        padding: calc(var(--spacing) * 3);
        text-align: center;
      }
      
      /* Карточки */
      .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: calc(var(--spacing) * 3);
        margin-top: calc(var(--spacing) * 3);
      }
      
      .card {
        background-color: white;
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      }
      
      .card-image {
        height: 200px;
        background-size: cover;
        background-position: center;
      }
      
      /* Применение фильтров при наведении */
      .card:nth-child(1) .card-image {
        background-image: url('https://source.unsplash.com/random/600x400?nature');
        filter: grayscale(100%);
      }
      
      .card:nth-child(1):hover .card-image {
        filter: grayscale(0%);
      }
      
      .card:nth-child(2) .card-image {
        background-image: url('https://source.unsplash.com/random/600x400?city');
        filter: sepia(100%);
      }
      
      .card:nth-child(2):hover .card-image {
        filter: sepia(0%);
      }
      
      .card:nth-child(3) .card-image {
        background-image: url('https://source.unsplash.com/random/600x400?technology');
        filter: blur(5px);
      }
      
      .card:nth-child(3):hover .card-image {
        filter: blur(0px);
      }
      
      .card-content {
        padding: calc(var(--spacing) * 2);
      }
      
      .card-title {
        margin-top: 0;
        color: var(--primary-color);
        font-size: clamp(1.2rem, 2vw, 1.5rem);
      }
      
      /* Псевдоэлементы для декоративных элементов */
      .card-title::after {
        content: "";
        display: block;
        width: 50px;
        height: 3px;
        background-color: var(--secondary-color);
        margin-top: var(--spacing);
      }
      
      .card-text {
        line-height: 1.6;
        margin-bottom: calc(var(--spacing) * 2);
      }
      
      /* Кнопки с использованием переменных и calc() */
      .btn {
        display: inline-block;
        padding: calc(var(--spacing) * 1) calc(var(--spacing) * 2);
        background-color: var(--primary-color);
        color: white;
        text-decoration: none;
        border-radius: var(--border-radius);
        transition: background-color 0.3s ease;
      }
      
      .btn:hover {
        background-color: #2980b9;
      }
      
      .btn-secondary {
        background-color: var(--secondary-color);
      }
      
      .btn-secondary:hover {
        background-color: #27ae60;
      }
      
      /* Адаптивный дизайн с использованием clamp() */
      p {
        font-size: clamp(1rem, 1.5vw, 1.2rem);
      }
      
      /* Темная тема с переопределением переменных */
      .dark-theme {
        --primary-color: #2980b9;
        --secondary-color: #27ae60;
        --text-color: #f1f1f1;
        --light-color: #333;
      }
      
      /* Переключатель темы */
      .theme-toggle {
        position: fixed;
        top: calc(var(--spacing) * 2);
        right: calc(var(--spacing) * 2);
        background-color: var(--accent-color);
        color: white;
        border: none;
        padding: var(--spacing) calc(var(--spacing) * 2);
        border-radius: var(--border-radius);
        cursor: pointer;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;button class="theme-toggle" onclick="document.body.classList.toggle('dark-theme')"&gt;Сменить тему&lt;/button&gt;
    
    &lt;header class="header"&gt;
      &lt;h1&gt;Современный CSS&lt;/h1&gt;
      &lt;p&gt;Пример использования современных возможностей CSS&lt;/p&gt;
    &lt;/header&gt;
    
    &lt;div class="container"&gt;
      &lt;div class="card-container"&gt;
        &lt;div class="card"&gt;
          &lt;div class="card-image"&gt;&lt;/div&gt;
          &lt;div class="card-content"&gt;
            &lt;h2 class="card-title"&gt;CSS-переменные&lt;/h2&gt;
            &lt;p class="card-text"&gt;CSS-переменные позволяют определять значения, которые можно повторно использовать в документе.&lt;/p&gt;
            &lt;a href="#" class="btn"&gt;Подробнее&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div class="card"&gt;
          &lt;div class="card-image"&gt;&lt;/div&gt;
          &lt;div class="card-content"&gt;
            &lt;h2 class="card-title"&gt;Функции CSS&lt;/h2&gt;
            &lt;p class="card-text"&gt;Функции CSS, такие как calc(), min(), max() и clamp(), позволяют создавать более гибкие и динамичные стили.&lt;/p&gt;
            &lt;a href="#" class="btn btn-secondary"&gt;Подробнее&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div class="card"&gt;
          &lt;div class="card-image"&gt;&lt;/div&gt;
          &lt;div class="card-content"&gt;
            &lt;h2 class="card-title"&gt;Фильтры и эффекты&lt;/h2&gt;
            &lt;p class="card-text"&gt;CSS-фильтры позволяют применять графические эффекты, такие как размытие, насыщенность и контраст.&lt;/p&gt;
            &lt;a href="#" class="btn"&gt;Подробнее&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
  &lt;/html&gt;</code></pre>
        </div>
      </section>
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5JrU-SM-200" title="Современный CSS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5JrU-SM-200" title="Современные возможности CSS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  const lesson9 = { 
    title: "Урок 9: Итоговый проект", 
    content: `
      <section class="theory">
        <h2>Итоговый проект</h2>
        <p>В этом уроке мы применим все изученные концепции HTML и CSS для создания полноценного веб-сайта.</p>
        
        <div class="info-card">
          <h4>Итоговый проект</h4>
          <p>Итоговый проект позволит вам объединить все полученные знания и создать полноценный веб-сайт с современным дизайном и функциональностью.</p>
        </div>
        
        <h3>Структура проекта</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Файловая структура</h4>
            <p>Организация файлов проекта.</p>
            <div class="example">
              <pre><code>project/
  ├── index.html
  ├── about.html
  ├── services.html
  ├── contact.html
  ├── css/
  │   ├── style.css
  │   ├── normalize.css
  │   └── responsive.css
  ├── js/
  │   └── script.js
  └── images/
      ├── logo.png
      ├── hero.jpg
      └── icons/</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Базовая структура HTML</h4>
            <p>Основная структура HTML-файлов проекта.</p>
            <div class="example">
              <pre><code>&lt;!DOCTYPE html&gt;
  &lt;html lang="ru"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Название страницы&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/normalize.css"&gt;
    &lt;link rel="stylesheet" href="css/style.css"&gt;
    &lt;link rel="stylesheet" href="css/responsive.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;
      &lt;!-- Навигация --&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
      &lt;!-- Основное содержимое --&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
      &lt;!-- Футер --&gt;
    &lt;/footer&gt;
    
    &lt;script src="js/script.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Компоненты сайта</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Шапка (Header)</h4>
            <p>Шапка сайта с логотипом и навигацией.</p>
            <div class="example">
              <pre><code>&lt;header class="header"&gt;
    &lt;div class="container"&gt;
      &lt;div class="logo"&gt;
        &lt;a href="index.html"&gt;
          &lt;img src="images/logo.png" alt="Логотип"&gt;
        &lt;/a&gt;
      &lt;/div&gt;
      
      &lt;nav class="nav"&gt;
        &lt;button class="nav-toggle" aria-label="Открыть меню"&gt;
          &lt;span&gt;&lt;/span&gt;
          &lt;span&gt;&lt;/span&gt;
          &lt;span&gt;&lt;/span&gt;
        &lt;/button&gt;
        &lt;ul class="nav-menu"&gt;
          &lt;li&gt;&lt;a href="index.html" class="active"&gt;Главная&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="about.html"&gt;О нас&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="services.html"&gt;Услуги&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="contact.html"&gt;Контакты&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;
    &lt;/div&gt;
  &lt;/header&gt;</code></pre>
            </div>
            <p>CSS для шапки:</p>
            <div class="example">
              <pre><code>.header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo img {
    height: 50px;
  }
  
  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-menu li {
    margin-left: 20px;
  }
  
  .nav-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 20px 10px;
    display: block;
    transition: color 0.3s;
  }
  
  .nav-menu a:hover, .nav-menu a.active {
    color: #3498db;
  }
  
  .nav-toggle {
    display: none;
  }
  
  @media (max-width: 768px) {
    .nav-toggle {
      display: block;
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
    }
    
    .nav-toggle span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: #333;
      margin: 5px 0;
      transition: transform 0.3s, opacity 0.3s;
    }
    
    .nav-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #fff;
      flex-direction: column;
      box-shadow: 0 5px 10px rgba(0,0,0,0.1);
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s;
    }
    
    .nav-menu.active {
      max-height: 300px;
    }
    
    .nav-menu li {
      margin: 0;
    }
    
    .nav-menu a {
      padding: 15px 20px;
    }
  }</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Герой (Hero Section)</h4>
            <p>Главная секция с привлекательным фоном и призывом к действию.</p>
            <div class="example">
              <pre><code>&lt;section class="hero"&gt;
    &lt;div class="hero-content"&gt;
      &lt;h1&gt;Добро пожаловать на наш сайт&lt;/h1&gt;
      &lt;p&gt;Мы предлагаем инновационные решения для вашего бизнеса&lt;/p&gt;
      &lt;a href="contact.html" class="btn btn-primary"&gt;Связаться с нами&lt;/a&gt;
    &lt;/div&gt;
  &lt;/section&gt;</code></pre>
            </div>
            <p>CSS для секции героя:</p>
            <div class="example">
              <pre><code>.hero {
    height: 80vh;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/hero.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }
  
  .hero-content {
    max-width: 800px;
    padding: 0 20px;
  }
  
  .hero h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    margin-bottom: 20px;
  }
  
  .hero p {
    font-size: clamp(1rem, 2vw, 1.5rem);
    margin-bottom: 30px;
  }
  
  .btn {
    display: inline-block;
    padding: 12px 30px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: #2980b9;
  }</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Секция услуг</h4>
            <p>Секция с представлением услуг или продуктов.</p>
            <div class="example">
              <pre><code>&lt;section class="services"&gt;
    &lt;div class="container"&gt;
      &lt;h2 class="section-title"&gt;Наши услуги&lt;/h2&gt;
      
      &lt;div class="services-grid"&gt;
        &lt;div class="service-card"&gt;
          &lt;div class="service-icon"&gt;
            &lt;img src="images/icons/web-design.svg" alt="Веб-дизайн"&gt;
          &lt;/div&gt;
          &lt;h3&gt;Веб-дизайн&lt;/h3&gt;
          &lt;p&gt;Создаем современные и привлекательные дизайны для вашего сайта.&lt;/p&gt;
          &lt;a href="#" class="read-more"&gt;Подробнее&lt;/a&gt;
        &lt;/div&gt;
        
        &lt;div class="service-card"&gt;
          &lt;div class="service-icon"&gt;
            &lt;img src="images/icons/development.svg" alt="Разработка"&gt;
          &lt;/div&gt;
          &lt;h3&gt;Веб-разработка&lt;/h3&gt;
          &lt;p&gt;Разрабатываем функциональные и отзывчивые веб-сайты и приложения.&lt;/p&gt;
          &lt;a href="#" class="read-more"&gt;Подробнее&lt;/a&gt;
        &lt;/div&gt;
        
        &lt;div class="service-card"&gt;
          &lt;div class="service-icon"&gt;
            &lt;img src="images/icons/seo.svg" alt="SEO"&gt;
          &lt;/div&gt;
          &lt;h3&gt;SEO-оптимизация&lt;/h3&gt;
          &lt;p&gt;Повышаем видимость вашего сайта в поисковых системах.&lt;/p&gt;
          &lt;a href="#" class="read-more"&gt;Подробнее&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;</code></pre>
            </div>
            <p>CSS для секции услуг:</p>
            <div class="example">
              <pre><code>.services {
    padding: 80px 0;
    background-color: #f9f9f9;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
    color: #333;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .service-card {
    background-color: white;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }
  
  .service-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }
  
  .service-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .service-card h3 {
    margin-top: 0;
    margin-bottom: 15px;
    color: #333;
  }
  
  .service-card p {
    color: #666;
    margin-bottom: 20px;
  }
  
  .read-more {
    display: inline-block;
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .read-more:hover {
    color: #2980b9;
  }</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Контактная форма</h4>
            <p>Секция с контактной информацией и формой обратной связи.</p>
            <div class="example">
              <pre><code>&lt;section class="contact"&gt;
    &lt;div class="container"&gt;
      &lt;h2 class="section-title"&gt;Свяжитесь с нами&lt;/h2&gt;
      
      &lt;div class="contact-container"&gt;
        &lt;div class="contact-info"&gt;
          &lt;h3&gt;Контактная информация&lt;/h3&gt;
          &lt;p&gt;&lt;strong&gt;Адрес:&lt;/strong&gt; ул. Примерная, 123, г. Город&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Телефон:&lt;/strong&gt; +7 (123) 456-7890&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Email:&lt;/strong&gt; info@example.com&lt;/p&gt;
          
          &lt;div class="social-links"&gt;
            &lt;a href="#" aria-label="Facebook"&gt;&lt;i class="fab fa-facebook"&gt;&lt;/i&gt;&lt;/a&gt;
            &lt;a href="#" aria-label="Twitter"&gt;&lt;i class="fab fa-twitter"&gt;&lt;/i&gt;&lt;/a&gt;
            &lt;a href="#" aria-label="Instagram"&gt;&lt;i class="fab fa-instagram"&gt;&lt;/i&gt;&lt;/a&gt;
            &lt;a href="#" aria-label="LinkedIn"&gt;&lt;i class="fab fa-linkedin"&gt;&lt;/i&gt;&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div class="contact-form"&gt;
          &lt;form id="contact-form"&gt;
            &lt;div class="form-group"&gt;
              &lt;label for="name"&gt;Имя&lt;/label&gt;
              &lt;input type="text" id="name" name="name" required&gt;
            &lt;/div&gt;
            
            &lt;div class="form-group"&gt;
              &lt;label for="email"&gt;Email&lt;/label&gt;
              &lt;input type="email" id="email" name="email" required&gt;
            &lt;/div&gt;
            
            &lt;div class="form-group"&gt;
              &lt;label for="subject"&gt;Тема&lt;/label&gt;
              &lt;input type="text" id="subject" name="subject" required&gt;
            &lt;/div&gt;
            
            &lt;div class="form-group"&gt;
              &lt;label for="message"&gt;Сообщение&lt;/label&gt;
              &lt;textarea id="message" name="message" rows="5" required&gt;&lt;/textarea&gt;
            &lt;/div&gt;
            
            &lt;button type="submit" class="btn btn-primary"&gt;Отправить&lt;/button&gt;
          &lt;/form&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;</code></pre>
            </div>
            <p>CSS для контактной формы:</p>
            <div class="example">
              <pre><code>.contact {
    padding: 80px 0;
  }
  
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px;
  }
  
  .contact-info {
    background-color: #3498db;
    color: white;
    padding: 30px;
    border-radius: 8px;
  }
  
  .contact-info h3 {
    margin-top: 0;
    margin-bottom: 20px;
  }
  
  .contact-info p {
    margin-bottom: 15px;
  }
  
  .social-links {
    margin-top: 30px;
  }
  
  .social-links a {
    display: inline-block;
    color: white;
    font-size: 1.5rem;
    margin-right: 15px;
    transition: transform 0.3s;
  }
  
  .social-links a:hover {
    transform: translateY(-5px);
  }
  
  .contact-form {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }
  
  .form-group input, .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.3s;
  }
  
  .form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: #3498db;
  }
  
  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
    }
  }</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Футер (Footer)</h4>
            <p>Нижняя часть сайта с дополнительной информацией и ссылками.</p>
            <div class="example">
              <pre><code>&lt;footer class="footer"&gt;
    &lt;div class="container"&gt;
      &lt;div class="footer-content"&gt;
        &lt;div class="footer-logo"&gt;
          &lt;img src="images/logo-white.png" alt="Логотип"&gt;
          &lt;p&gt;Мы предлагаем инновационные решения для вашего бизнеса.&lt;/p&gt;
        &lt;/div&gt;
        
        &lt;div class="footer-links"&gt;
          &lt;h3&gt;Быстрые ссылки&lt;/h3&gt;
          &lt;ul&gt;
            &lt;li&gt;&lt;a href="index.html"&gt;Главная&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="about.html"&gt;О нас&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="services.html"&gt;Услуги&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="contact.html"&gt;Контакты&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
        
        &lt;div class="footer-newsletter"&gt;
          &lt;h3&gt;Подписаться на новости&lt;/h3&gt;
          &lt;form&gt;
            &lt;input type="email" placeholder="Ваш email"&gt;
            &lt;button type="submit"&gt;Подписаться&lt;/button&gt;
          &lt;/form&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      &lt;div class="footer-bottom"&gt;
        &lt;p&gt;&copy; 2023 Все права защищены.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/footer&gt;</code></pre>
            </div>
            <p>CSS для футера:</p>
            <div class="example">
              <pre><code>.footer {
    background-color: #333;
    color: white;
    padding: 50px 0 20px;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 30px;
  }
  
  .footer-logo img {
    height: 40px;
    margin-bottom: 15px;
  }
  
  .footer-links h3, .footer-newsletter h3 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
  
  .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-links li {
    margin-bottom: 10px;
  }
  
  .footer-links a {
    text-decoration: none;
    color: #ddd;
    transition: color 0.3s;
  }
  
  .footer-links a:hover {
    color: white;
  }
  
  .footer-newsletter form {
    display: flex;
  }
  
  .footer-newsletter input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 4px 0 0 4px;
  }
  
  .footer-newsletter button {
    padding: 10px 15px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
  }</code></pre>
            </div>
          </div>
        </div>
        
        <h3>JavaScript-функциональность</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Скрипт для мобильного меню</h4>
            <p>JavaScript для управления мобильным меню.</p>
            <div class="example">
              <pre><code>document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Изменение иконки гамбургера
      const spans = this.querySelectorAll('span');
      spans[0].classList.toggle('rotated');
      spans[1].classList.toggle('hidden');
      spans[2].classList.toggle('rotated-reverse');
    });
  });</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Валидация формы</h4>
            <p>JavaScript для валидации контактной формы.</p>
            <div class="example">
              <pre><code>document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !subject || !message) {
        showError('Пожалуйста, заполните все поля');
        return;
      }
      
      if (!validateEmail(email)) {
        showError('Пожалуйста, введите корректный email');
        return;
      }
      
      // Если все проверки пройдены, можно отправить форму
      alert('Форма успешно отправлена!');
      contactForm.reset();
    });
    
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    
    function showError(message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      
      // Проверяем, есть ли уже сообщение об ошибке
      const existingError = contactForm.querySelector('.error-message');
      if (existingError) {
        contactForm.removeChild(existingError);
      }
      
      contactForm.insertBefore(errorDiv, contactForm.firstChild);
      
      // Удаляем сообщение через 3 секунды
      setTimeout(() => {
        errorDiv.remove();
      }, 3000);
    }
  });</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Запуск и тестирование</h3>
        <p>Для запуска сайта локально:</p>
        <ol>
          <li>Создайте все необходимые файлы согласно файловой структуре.</li>
          <li>Разместите HTML-разметку и CSS-стили в соответствующих файлах.</li>
          <li>Откройте index.html в веб-браузере для просмотра сайта.</li>
          <li>Проверьте адаптивность сайта, изменяя размер окна браузера.</li>
          <li>Протестируйте все ссылки и функциональность форм.</li>
        </ol>
        
        <p>Для публикации сайта в интернете:</p>
        <ol>
          <li>Зарегистрируйтесь у хостинг-провайдера.</li>
          <li>Загрузите файлы на хостинг через FTP или панель управления хостингом.</li>
          <li>Настройте домен для указания на ваш хостинг.</li>
          <li>Протестируйте сайт на различных устройствах и браузерах.</li>
        </ol>
      </section>
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JKlTjCQa_eY" title="Итоговый проект" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JKlTjCQa_eY" title="Итоговый проект HTML/CSS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  // Собираем все уроки в массив для sidebar и навигации
const lessons = [
    {}, // Пустой элемент для индексации с 1
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8,
    lesson9
  ];
  
  // Экспортируем массив уроков для main.js
  if (typeof window !== 'undefined') {
    window.lessons = lessons;
    window.htmlCssRuData = lessons;
  }
  