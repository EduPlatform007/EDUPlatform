/**
 * Файл с данными для курса HTML/CSS на казахском языке
 */

const lesson1 = {
  title: "1-сабақ: HTML және CSS негіздері",
  content: `
    <section class="theory">
      <h2>HTML және CSS негіздері</h2>
      <p>HTML (HyperText Markup Language) және CSS (Cascading Style Sheets) - веб-сайттар құру үшін қолданылатын екі негізгі технология.</p>
      
      <div class="info-card">
        <h4>HTML және CSS деген не?</h4>
        <p>HTML - веб-беттердің құрылымын анықтайтын белгілеу тілі. CSS - веб-беттердің көрінісін анықтайтын стильдеу тілі. Бұл екі технология бірге жұмыс істейді: HTML мазмұнның құрылымын жасайды, ал CSS оны әдемі етеді.</p>
      </div>
      
      <h3>HTML ерекшеліктері</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Тегтер және элементтер</h4>
          <p>HTML тегтерден тұрады, олар мазмұнның құрылымын анықтайды.</p>
          <div class="example">
            <pre><code>&lt;h1&gt;Бұл тақырып&lt;/h1&gt;
&lt;p&gt;Бұл параграф.&lt;/p&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Атрибуттар</h4>
          <p>HTML тегтері қосымша ақпаратты беретін атрибуттарға ие бола алады.</p>
          <div class="example">
            <pre><code>&lt;a href="https://www.example.com"&gt;Сілтеме&lt;/a&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Құжат құрылымы</h4>
          <p>HTML құжаты DOCTYPE декларациясынан, html, head және body элементтерінен тұрады.</p>
          <div class="example">
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Бет тақырыбы&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Сәлем, әлем!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Семантикалық элементтер</h4>
          <p>HTML5 мазмұнның мағынасын анықтайтын семантикалық элементтерді ұсынады.</p>
          <div class="example">
            <pre><code>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;footer&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>CSS ерекшеліктері</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Селекторлар</h4>
          <p>CSS селекторлар стильдеу үшін HTML элементтерін таңдауға мүмкіндік береді.</p>
          <div class="example">
            <pre><code>h1 { color: blue; }
.class-name { font-size: 16px; }
#id-name { margin: 20px; }</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Қасиеттер және мәндер</h4>
          <p>CSS қасиеттер элементтердің көрінісін анықтайды.</p>
          <div class="example">
            <pre><code>p {
  color: red;
  font-size: 18px;
  margin: 10px;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>CSS қосу әдістері</h4>
          <p>CSS-ті HTML-ге қосудың үш негізгі әдісі бар.</p>
          <div class="example">
            <p>1. Сыртқы CSS файлы:</p>
            <pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
            <p>2. Ішкі CSS:</p>
            <pre><code>&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;</code></pre>
            <p>3. Инлайн CSS:</p>
            <pre><code>&lt;p style="color: red;"&gt;Мәтін&lt;/p&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Бокс моделі</h4>
          <p>CSS-те әрбір элемент тіктөртбұрышты бокс ретінде қарастырылады.</p>
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
      
      <h3>Алғашқы HTML/CSS жобаңызды жасау</h3>
      <p>Келесі қарапайым HTML/CSS жобасын жасап көрейік:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Менің алғашқы веб-бетім&lt;/title&gt;
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
    &lt;h1&gt;Сәлем, әлем!&lt;/h1&gt;
    &lt;p&gt;Бұл менің HTML және CSS көмегімен жасаған алғашқы веб-бетім.&lt;/p&gt;
    &lt;p&gt;Веб-әзірлеу әлеміне қош келдіңіз!&lt;/p&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      
      <p>Бұл қарапайым мысал HTML құжатының негізгі құрылымын және CSS стильдерін қалай қолдануға болатынын көрсетеді. Келесі сабақтарда біз HTML және CSS-тің әр түрлі аспектілерін тереңірек зерттейміз.</p>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JtZO7bp8BOY" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JtZO7bp8BOY" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};

const lesson2 = {
  title: "2-сабақ: HTML құрылымы және элементтері",
  content: `
    <section class="theory">
      <h2>HTML құрылымы және элементтері</h2>
      <p>Бұл сабақта біз HTML құжатының құрылымын және негізгі элементтерді тереңірек зерттейміз.</p>
      
      <div class="info-card">
        <h4>HTML құжатының негізгі құрылымы</h4>
        <p>Әрбір HTML құжаты келесі негізгі элементтерден тұрады:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Құжат тақырыбы&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Көрінетін мазмұн осында --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      
      <h3>Мәтіндік элементтер</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Тақырыптар</h4>
          <p>HTML алты деңгейлі тақырыптарды ұсынады: h1-ден h6-ға дейін.</p>
          <div class="example">
            <pre><code>&lt;h1&gt;Ең үлкен тақырып&lt;/h1&gt;
&lt;h2&gt;Екінші деңгейлі тақырып&lt;/h2&gt;
&lt;h3&gt;Үшінші деңгейлі тақырып&lt;/h3&gt;
&lt;h4&gt;Төртінші деңгейлі тақырып&lt;/h4&gt;
&lt;h5&gt;Бесінші деңгейлі тақырып&lt;/h5&gt;
&lt;h6&gt;Ең кіші тақырып&lt;/h6&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Параграфтар</h4>
          <p>Параграфтар &lt;p&gt; тегімен белгіленеді.</p>
          <div class="example">
            <pre><code>&lt;p&gt;Бұл параграф мәтіні. Ол бірнеше сөйлемдерден тұруы мүмкін.&lt;/p&gt;
&lt;p&gt;Бұл басқа параграф.&lt;/p&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Мәтінді форматтау</h4>
          <p>HTML мәтінді форматтау үшін әртүрлі тегтерді ұсынады.</p>
          <div class="example">
            <pre><code>&lt;strong&gt;Қалың мәтін&lt;/strong&gt;
&lt;em&gt;Курсив мәтін&lt;/em&gt;
&lt;mark&gt;Бөлектелген мәтін&lt;/mark&gt;
&lt;del&gt;Сызылған мәтін&lt;/del&gt;
&lt;ins&gt;Қосылған мәтін&lt;/ins&gt;
&lt;sub&gt;Төменгі индекс&lt;/sub&gt;
&lt;sup&gt;Жоғарғы индекс&lt;/sup&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Тізімдер</h4>
          <p>HTML реттелген және реттелмеген тізімдерді қолдайды.</p>
          <div class="example">
            <p>Реттелмеген тізім:</p>
            <pre><code>&lt;ul&gt;
  &lt;li&gt;Алма&lt;/li&gt;
  &lt;li&gt;Банан&lt;/li&gt;
  &lt;li&gt;Апельсин&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            <p>Реттелген тізім:</p>
            <pre><code>&lt;ol&gt;
  &lt;li&gt;Бірінші қадам&lt;/li&gt;
  &lt;li&gt;Екінші қадам&lt;/li&gt;
  &lt;li&gt;Үшінші қадам&lt;/li&gt;
&lt;/ol&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Сілтемелер және суреттер</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Сілтемелер</h4>
          <p>Сілтемелер &lt;a&gt; тегімен жасалады және href атрибуты арқылы мақсатты URL-ді көрсетеді.</p>
          <div class="example">
            <pre><code>&lt;a href="https://www.example.com"&gt;Мысал сайтына өту&lt;/a&gt;
&lt;a href="about.html"&gt;Біз туралы&lt;/a&gt;
&lt;a href="#section1"&gt;1-бөлімге өту&lt;/a&gt;
&lt;a href="mailto:info@example.com"&gt;Электрондық пошта жіберу&lt;/a&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Суреттер</h4>
          <p>Суреттер &lt;img&gt; тегімен қосылады және src атрибуты арқылы сурет көзін көрсетеді.</p>
          <div class="example">
            <pre><code>&lt;img src="image.jpg" alt="Сурет сипаттамасы"&gt;
&lt;img src="logo.png" alt="Логотип" width="200" height="100"&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Фигуралар</h4>
          <p>Суреттерді тақырыптармен бірге топтастыру үшін &lt;figure&gt; және &lt;figcaption&gt; тегтерін пайдалануға болады.</p>
          <div class="example">
            <pre><code>&lt;figure&gt;
  &lt;img src="mountain.jpg" alt="Тау көрінісі"&gt;
  &lt;figcaption&gt;1-сурет: Әсем тау көрінісі&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Сілтеме суреттері</h4>
          <p>Суреттерді сілтемелермен біріктіруге болады.</p>
          <div class="example">
            <pre><code>&lt;a href="https://www.example.com"&gt;
  &lt;img src="button.png" alt="Түйме"&gt;
&lt;/a&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Контейнерлер және семантикалық элементтер</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Div және Span</h4>
          <p>&lt;div&gt; және &lt;span&gt; - мазмұнды топтастыру үшін қолданылатын жалпы контейнерлер.</p>
          <div class="example">
            <pre><code>&lt;div class="container"&gt;
  &lt;p&gt;Бұл &lt;span class="highlight"&gt;маңызды&lt;/span&gt; мәтін.&lt;/p&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Семантикалық элементтер</h4>
          <p>HTML5 мазмұнның мағынасын анықтайтын семантикалық элементтерді ұсынады.</p>
          <div class="example">
            <pre><code>&lt;header&gt;Сайт тақырыбы&lt;/header&gt;
&lt;nav&gt;Навигация&lt;/nav&gt;
&lt;main&gt;Негізгі мазмұн&lt;/main&gt;
&lt;article&gt;Мақала&lt;/article&gt;
&lt;section&gt;Бөлім&lt;/section&gt;
&lt;aside&gt;Қосымша ақпарат&lt;/aside&gt;
&lt;footer&gt;Сайт футері&lt;/footer&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Кестелер</h4>
          <p>Кестелер деректерді ұйымдастыру үшін пайдаланылады.</p>
          <div class="example">
            <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Аты&lt;/th&gt;
      &lt;th&gt;Жасы&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Айдар&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Әсел&lt;/td&gt;
      &lt;td&gt;22&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Формалар</h4>
          <p>Формалар пайдаланушы деректерін жинау үшін пайдаланылады.</p>
          <div class="example">
            <pre><code>&lt;form action="/submit" method="post"&gt;
  &lt;label for="name"&gt;Аты:&lt;/label&gt;
  &lt;input type="text" id="name" name="name"&gt;
  
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email"&gt;
  
  &lt;input type="submit" value="Жіберу"&gt;
&lt;/form&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Практикалық мысал</h3>
      <p>Келесі мысалда біз осы сабақта үйренген элементтерді қолданамыз:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Менің блогым&lt;/title&gt;
  &lt;meta charset="UTF-8"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Менің блогым&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;Басты бет&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Мақалалар&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Байланыс&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  
  &lt;main&gt;
    &lt;article&gt;
      &lt;h2&gt;HTML үйрену&lt;/h2&gt;
      &lt;p&gt;HTML - веб-беттердің құрылымын анықтайтын &lt;strong&gt;белгілеу тілі&lt;/strong&gt;.&lt;/p&gt;
      
      &lt;figure&gt;
        &lt;img src="html.jpg" alt="HTML логотипі"&gt;
        &lt;figcaption&gt;HTML5 логотипі&lt;/figcaption&gt;
      &lt;/figure&gt;
      
      &lt;h3&gt;HTML артықшылықтары&lt;/h3&gt;
      &lt;ol&gt;
        &lt;li&gt;Оңай үйренуге болады&lt;/li&gt;
        &lt;li&gt;Барлық браузерлерде қолдау көрсетіледі&lt;/li&gt;
        &lt;li&gt;Веб-әзірлеудің негізі&lt;/li&gt;
      &lt;/ol&gt;
    &lt;/article&gt;
    
    &lt;aside&gt;
      &lt;h3&gt;Пайдалы сілтемелер&lt;/h3&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="https://www.w3schools.com"&gt;W3Schools&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="https://developer.mozilla.org"&gt;MDN Web Docs&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/aside&gt;
  &lt;/main&gt;
  
  &lt;footer&gt;
    &lt;p&gt;&copy; 2023 Менің блогым. Барлық құқықтар қорғалған.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      
      <p>Бұл мысал HTML құжатының негізгі құрылымын және әртүрлі элементтерді қалай пайдалануға болатынын көрсетеді. Келесі сабақта біз CSS стильдерін қолдануды үйренеміз.</p>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mx-6HcNwCyQ" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mx-6HcNwCyQ" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};
const lesson3 = {
  title: "3-сабақ: CSS негіздері және стильдеу",
  content: `
    <section class="theory">
      <h2>CSS негіздері және стильдеу</h2>
      <p>Бұл сабақта біз CSS (Cascading Style Sheets) негіздерін және HTML элементтерін стильдеу әдістерін үйренеміз.</p>
      
      <div class="info-card">
        <h4>CSS деген не?</h4>
        <p>CSS (Cascading Style Sheets) - веб-беттердің көрінісін анықтайтын стильдеу тілі. CSS HTML элементтерінің түсін, өлшемін, орналасуын және басқа да визуалды аспектілерін басқаруға мүмкіндік береді.</p>
      </div>
      
      <h3>CSS синтаксисі</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Селекторлар</h4>
          <p>CSS селекторлар стильдеу үшін HTML элементтерін таңдауға мүмкіндік береді.</p>
          <div class="example">
            <pre><code>/* Элемент селекторы */
p { color: blue; }

/* Класс селекторы */
.highlight { background-color: yellow; }

/* ID селекторы */
#header { font-size: 24px; }

/* Комбинированный селектор */
div p { margin: 10px; }</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Қасиеттер және мәндер</h4>
          <p>CSS қасиеттер элементтердің көрінісін анықтайды.</p>
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
          <h4>Түстер</h4>
          <p>CSS-те түстерді көрсетудің бірнеше тәсілі бар.</p>
          <div class="example">
            <pre><code>/* Түс атаулары */
color: red;

/* HEX коды */
color: #FF0000;

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (мөлдірлікпен) */
color: rgba(255, 0, 0, 0.5);

/* HSL */
color: hsl(0, 100%, 50%);</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Өлшем бірліктері</h4>
          <p>CSS-те өлшемдерді көрсетудің әртүрлі бірліктері бар.</p>
          <div class="example">
            <pre><code>/* Пикселдер (абсолютті) */
font-size: 16px;

/* Em (салыстырмалы ата-ана элементіне) */
margin: 1.5em;

/* Rem (салыстырмалы root элементіне) */
padding: 2rem;

/* Пайыздар */
width: 80%;

/* Viewport бірліктері */
height: 50vh; /* viewport биіктігінің 50% */
width: 100vw;  /* viewport енінің 100% */</code></pre>
          </div>
        </div>
      </div>
      
      <h3>CSS қосу әдістері</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Сыртқы CSS</h4>
          <p>Сыртқы CSS файлы арқылы стильдерді қосу.</p>
          <div class="example">
            <p>HTML файлында:</p>
            <pre><code>&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;</code></pre>
            <p>styles.css файлында:</p>
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
          <h4>Ішкі CSS</h4>
          <p>HTML құжатының &lt;head&gt; бөлімінде &lt;style&gt; тегі арқылы стильдерді анықтау.</p>
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
          <p>HTML элементінің style атрибуты арқылы тікелей стильдерді қолдану.</p>
          <div class="example">
            <pre><code>&lt;h1 style="color: navy; font-size: 24px;"&gt;Тақырып&lt;/h1&gt;
&lt;p style="color: gray; line-height: 1.6;"&gt;Параграф мәтіні.&lt;/p&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Практикалық мысал</h3>
      <p>Келесі мысалда біз осы сабақта үйренген CSS қасиеттерін қолданамыз:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;CSS мысалы&lt;/title&gt;
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
    &lt;h1&gt;CSS стильдеу мысалы&lt;/h1&gt;
    &lt;div class="card"&gt;
      &lt;h2&gt;Карточка 1&lt;/h2&gt;
      &lt;p&gt;Бұл карточка мысалы.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/27beS3d6XXQ" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/27beS3d6XXQ" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};

const lesson4 = {
  title: "4-сабақ: CSS орналасу модельдері",
  content: `
    <section class="theory">
      <h2>CSS орналасу модельдері</h2>
      <p>Бұл сабақта біз CSS орналасу модельдерін (layout models) және элементтерді бетте орналастыру әдістерін үйренеміз.</p>
      
      <div class="info-card">
        <h4>Орналасу модельдері</h4>
        <p>CSS-те элементтерді бетте орналастырудың бірнеше әдісі бар: Normal Flow, Flexbox, Grid және Positioning.</p>
      </div>
      
      <h3>Flexbox</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Flexbox негіздері</h4>
          <p>Flexbox - бір өлшемді (жолдар немесе бағандар) орналасу үшін қолданылады.</p>
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
          <h4>Flexbox қасиеттері</h4>
          <p>Flexbox контейнерінің негізгі қасиеттері:</p>
          <div class="example">
            <pre><code>/* Контейнер қасиеттері */
.container {
  display: flex;
  flex-direction: row | column | row-reverse | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  align-items: stretch | flex-start | flex-end | center | baseline;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

/* Элемент қасиеттері */
.item {
  order: 0; /* реттік нөмір */
  flex-grow: 0; /* өсу коэффициенті */
  flex-shrink: 1; /* кішірею коэффициенті */
  flex-basis: auto; /* негізгі өлшем */
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>CSS Grid</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Grid негіздері</h4>
          <p>CSS Grid - екі өлшемді (жолдар мен бағандар) орналасу үшін қолданылады.</p>
          <div class="example">
            <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
}

.item {
  grid-column: 1 / 3;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Grid қасиеттері</h4>
          <p>Grid контейнерінің негізгі қасиеттері:</p>
          <div class="example">
            <pre><code>/* Контейнер қасиеттері */
.container {
  display: grid;
  grid-template-columns: 100px 200px 1fr; /* бағандар */
  grid-template-rows: 50px 100px; /* жолдар */
  grid-gap: 10px; /* жол мен баған арасындағы аралық */
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

/* Элемент қасиеттері */
.item {
  grid-column: 1 / 3; /* 1-ші бағаннан 3-ші бағанға дейін */
  grid-row: 2 / 4; /* 2-ші жолдан 4-ші жолға дейін */
  grid-area: header; /* атаулы аймақ */
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Positioning</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Position қасиеті</h4>
          <p>Position қасиеті элементтің бетте орналасу әдісін анықтайды.</p>
          <div class="example">
            <pre><code>/* Static (әдепкі) */
.box {
  position: static;
}

/* Relative (салыстырмалы) */
.box {
  position: relative;
  top: 20px;
  left: 30px;
}

/* Absolute (абсолютті) */
.box {
  position: absolute;
  top: 50px;
  right: 10px;
}

/* Fixed (бекітілген) */
.box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

/* Sticky (жабысқақ) */
.box {
  position: sticky;
  top: 0;
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Практикалық мысал</h3>
      <p>Келесі мысалда біз Flexbox және Grid қолданамыз:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;CSS Layout&lt;/title&gt;
  &lt;style&gt;
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    
    .flex-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    
    .flex-item {
      background-color: #3498db;
      color: white;
      padding: 20px;
      text-align: center;
      flex: 1;
      margin: 0 10px;
    }
    
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
    
    .grid-item {
      background-color: #2ecc71;
      color: white;
      padding: 20px;
      text-align: center;
    }
    
    .span-2 {
      grid-column: span 2;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Flexbox мысалы&lt;/h1&gt;
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;Flex элемент 1&lt;/div&gt;
    &lt;div class="flex-item"&gt;Flex элемент 2&lt;/div&gt;
    &lt;div class="flex-item"&gt;Flex элемент 3&lt;/div&gt;
  &lt;/div&gt;
  
  &lt;h1&gt;Grid мысалы&lt;/h1&gt;
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item span-2"&gt;Grid элемент 1 (2 баған)&lt;/div&gt;
    &lt;div class="grid-item"&gt;Grid элемент 2&lt;/div&gt;
    &lt;div class="grid-item"&gt;Grid элемент 3&lt;/div&gt;
    &lt;div class="grid-item"&gt;Grid элемент 4&lt;/div&gt;
    &lt;div class="grid-item"&gt;Grid элемент 5&lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jizbVDVXuWg" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jizbVDVXuWg" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};

const lesson5 = {
  title: "5-сабақ: Адаптивті дизайн және медиа-сұраныстар",
  content: `
    <section class="theory">
      <h2>Адаптивті дизайн және медиа-сұраныстар</h2>
      <p>Бұл сабақта біз адаптивті дизайн негіздерін және CSS медиа-сұраныстарын үйренеміз.</p>
      
      <div class="info-card">
        <h4>Адаптивті дизайн деген не?</h4>
        <p>Адаптивті дизайн - бұл веб-сайттың әртүрлі құрылғыларда (смартфондар, планшеттер, ноутбуктар, үстел компьютерлері) жақсы көрінуін қамтамасыз ететін тәсіл.</p>
      </div>
      
      <h3>Медиа-сұраныстар</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Медиа-сұраныстар негіздері</h4>
          <p>CSS медиа-сұраныстары әртүрлі құрылғылар үшін стильдерді анықтауға мүмкіндік береді.</p>
          <div class="example">
            <pre><code>@media screen and (max-width: 768px) {
  /* Экран ені 768px немесе одан кіші болғанда қолданылатын стильдер */
  body {
    font-size: 14px;
  }
  
  .container {
    width: 100%;
  }
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Брейкпойнттер</h4>
          <p>Брейкпойнттер - бұл дизайн өзгеретін экран өлшемдерінің шекті мәндері.</p>
          <div class="example">
            <pre><code>/* Үлкен мониторлар үшін */
@media (min-width: 1200px) { ... }

/* Ноутбуктар үшін */
@media (min-width: 992px) and (max-width: 1199px) { ... }

/* Планшеттер үшін */
@media (min-width: 768px) and (max-width: 991px) { ... }

/* Смартфондар үшін */
@media (max-width: 767px) { ... }</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Адаптивті дизайн принциптері</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Mobile First</h4>
          <p>Mobile First принципі - алдымен мобильді құрылғылар үшін дизайн жасау, содан кейін үлкен экрандарға бейімдеу.</p>
          <div class="example">
            <pre><code>/* Негізгі стильдер (мобильді құрылғылар үшін) */
.container {
  width: 100%;
  padding: 10px;
}

/* Үлкен экрандар үшін */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Икемді суреттер</h4>
          <p>Икемді суреттер әртүрлі экран тығыздықтарына бейімделеді.</p>
          <div class="example">
            <pre><code>&lt;img srcset="image-320w.jpg 320w,
             image-480w.jpg 480w,
             image-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="image-800w.jpg" alt="Сурет мысалы"&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Практикалық мысал</h3>
      <p>Келесі мысалда біз адаптивті дизайн принциптерін қолданамыз:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Адаптивті дизайн мысалы&lt;/title&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;style&gt;
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    
    .container {
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
    }
    
    header {
      background-color: #333;
      color: white;
      padding: 15px;
      text-align: center;
    }
    
    nav ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
    
    nav li {
      margin-bottom: 10px;
    }
    
    .content {
      display: flex;
      flex-direction: column;
    }
    
    .main {
      background-color: #f4f4f4;
      padding: 15px;
      margin-bottom: 15px;
    }
    
    .sidebar {
      background-color: #e0e0e0;
      padding: 15px;
    }
    
    /* Планшеттер және үлкен экрандар үшін */
    @media (min-width: 768px) {
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
      
      nav ul {
        flex-direction: row;
        justify-content: center;
      }
      
      nav li {
        margin: 0 15px;
      }
      
      .content {
        flex-direction: row;
      }
      
      .main {
        flex: 2;
        margin-right: 15px;
        margin-bottom: 0;
      }
      
      .sidebar {
        flex: 1;
      }
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Адаптивті веб-сайт&lt;/h1&gt;
  &lt;/header&gt;
  
  &lt;div class="container"&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;Басты бет&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Қызметтер&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Біз туралы&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Байланыс&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
    
    &lt;div class="content"&gt;
      &lt;main class="main"&gt;
        &lt;h2&gt;Негізгі мазмұн&lt;/h2&gt;
        &lt;p&gt;Бұл адаптивті веб-сайттың мысалы. Бұл сайт әртүрлі құрылғыларда жақсы көрінеді.&lt;/p&gt;
        &lt;p&gt;Экран өлшемін өзгертіп көріңіз және дизайнның қалай өзгеретінін байқаңыз.&lt;/p&gt;
      &lt;/main&gt;
      
      &lt;aside class="sidebar"&gt;
        &lt;h3&gt;Қосымша ақпарат&lt;/h3&gt;
        &lt;p&gt;Бұл жерде қосымша ақпарат немесе навигация орналасуы мүмкін.&lt;/p&gt;
      &lt;/aside&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8M2Y869Ln6Y" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8M2Y869Ln6Y" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};
const lesson6 = {
  title: "6-сабақ: Формалар және кестелер",
  content: `
    <section class="theory">
      <h2>Формалар және кестелер</h2>
      <p>Бұл сабақта біз HTML формаларын және кестелерін жасау және стильдеу әдістерін үйренеміз.</p>
      
      <div class="info-card">
        <h4>HTML формалары</h4>
        <p>Формалар пайдаланушыдан деректерді жинау үшін қолданылады. Олар пайдаланушымен өзара әрекеттесудің маңызды бөлігі болып табылады.</p>
      </div>
      
      <h3>Форма элементтері</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Форма негіздері</h4>
          <p>Формалар &lt;form&gt; тегімен жасалады және әртүрлі енгізу элементтерін қамтиды.</p>
          <div class="example">
            <pre><code>&lt;form action="/submit" method="post"&gt;
  &lt;label for="name"&gt;Аты:&lt;/label&gt;
  &lt;input type="text" id="name" name="name"&gt;
  
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email"&gt;
  
  &lt;input type="submit" value="Жіберу"&gt;
&lt;/form&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Енгізу типтері</h4>
          <p>&lt;input&gt; элементінің әртүрлі типтері бар.</p>
          <div class="example">
            <pre><code>&lt;!-- Мәтін өрісі --&gt;
&lt;input type="text" name="username"&gt;

&lt;!-- Құпия сөз өрісі --&gt;
&lt;input type="password" name="password"&gt;

&lt;!-- Email өрісі --&gt;
&lt;input type="email" name="email"&gt;

&lt;!-- Сан өрісі --&gt;
&lt;input type="number" name="age"&gt;

&lt;!-- Чекбокс --&gt;
&lt;input type="checkbox" name="subscribe" id="subscribe"&gt;
&lt;label for="subscribe"&gt;Жаңалықтарға жазылу&lt;/label&gt;

&lt;!-- Радио түймесі --&gt;
&lt;input type="radio" name="gender" value="male" id="male"&gt;
&lt;label for="male"&gt;Ер&lt;/label&gt;
&lt;input type="radio" name="gender" value="female" id="female"&gt;
&lt;label for="female"&gt;Әйел&lt;/label&gt;

&lt;!-- Файл таңдау --&gt;
&lt;input type="file" name="document"&gt;

&lt;!-- Түйме --&gt;
&lt;input type="submit" value="Жіберу"&gt;
&lt;input type="reset" value="Тазалау"&gt;
&lt;input type="button" value="Түйме"&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Кестелер</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Кесте негіздері</h4>
          <p>HTML кестелері деректерді жолдар мен бағандарда ұйымдастыру үшін қолданылады.</p>
          <div class="example">
            <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Аты&lt;/th&gt;
      &lt;th&gt;Жасы&lt;/th&gt;
      &lt;th&gt;Қала&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Айдар&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
      &lt;td&gt;Алматы&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Әсел&lt;/td&gt;
      &lt;td&gt;22&lt;/td&gt;
      &lt;td&gt;Нұр-Сұлтан&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Формалар мен кестелерді стильдеу</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Формаларды стильдеу</h4>
          <p>CSS көмегімен формаларды әдемілеуге болады.</p>
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

input[type="text"],
input[type="email"],
input[type="password"],
textarea,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Кестелерді стильдеу</h4>
          <p>CSS көмегімен кестелерді әдемілеуге болады.</p>
          <div class="example">
            <pre><code>table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #4CAF50;
  color: white;
}

tr:hover {
  background-color: #f5f5f5;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Практикалық мысал</h3>
      <p>Келесі мысалда біз стильделген форма және кесте жасаймыз:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Формалар және кестелер&lt;/title&gt;
  &lt;style&gt;
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    
    h1, h2 {
      color: #333;
    }
    
    /* Форма стильдері */
    form {
      max-width: 500px;
      margin: 20px 0;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }
    
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    
    input[type="text"],
    input[type="email"],
    select,
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }
    
    input[type="submit"] {
      background-color: #4CAF50;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    input[type="submit"]:hover {
      background-color: #45a049;
    }
    
    /* Кесте стильдері */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    
    th, td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    th {
      background-color: #4CAF50;
      color: white;
    }
    
    tr:hover {
      background-color: #f5f5f5;
    }
    
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;h1&gt;Формалар және кестелер&lt;/h1&gt;
    
    &lt;h2&gt;Байланыс формасы&lt;/h2&gt;
    &lt;form action="#" method="post"&gt;
      &lt;label for="name"&gt;Аты:&lt;/label&gt;
      &lt;input type="text" id="name" name="name" required&gt;
      
      &lt;label for="email"&gt;Email:&lt;/label&gt;
      &lt;input type="email" id="email" name="email" required&gt;
      
      &lt;label for="subject"&gt;Тақырыбы:&lt;/label&gt;
      &lt;select id="subject" name="subject"&gt;
        &lt;option value="general"&gt;Жалпы сұрақ&lt;/option&gt;
        &lt;option value="support"&gt;Қолдау&lt;/option&gt;
        &lt;option value="feedback"&gt;Пікір&lt;/option&gt;
      &lt;/select&gt;
      
      &lt;label for="message"&gt;Хабарлама:&lt;/label&gt;
      &lt;textarea id="message" name="message" rows="5" required&gt;&lt;/textarea&gt;
      
      &lt;input type="submit" value="Жіберу"&gt;
    &lt;/form&gt;
    
    &lt;h2&gt;Қатысушылар кестесі&lt;/h2&gt;
    &lt;table&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th&gt;Аты&lt;/th&gt;
          &lt;th&gt;Жасы&lt;/th&gt;
          &lt;th&gt;Қала&lt;/th&gt;
          &lt;th&gt;Email&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr&gt;
          &lt;td&gt;Айдар Ахметов&lt;/td&gt;
          &lt;td&gt;25&lt;/td&gt;
          &lt;td&gt;Алматы&lt;/td&gt;
          &lt;td&gt;aidar@example.com&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Әсел Кәрімова&lt;/td&gt;
          &lt;td&gt;22&lt;/td&gt;
          &lt;td&gt;Нұр-Сұлтан&lt;/td&gt;
          &lt;td&gt;asel@example.com&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Болат Серіков&lt;/td&gt;
          &lt;td&gt;30&lt;/td&gt;
          &lt;td&gt;Шымкент&lt;/td&gt;
          &lt;td&gt;bolat@example.com&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;td&gt;Динара Төлегенова&lt;/td&gt;
          &lt;td&gt;28&lt;/td&gt;
          &lt;td&gt;Атырау&lt;/td&gt;
          &lt;td&gt;dinara@example.com&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/L4a0whgj71s" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/L4a0whgj71s" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};
const lesson7 = {
  title: "7-сабақ: CSS анимациялар және трансформациялар",
  content: `
    <section class="theory">
      <h2>CSS анимациялар және трансформациялар</h2>
      <p>Бұл сабақта біз CSS анимацияларын, трансформацияларын және өтулерін үйренеміз.</p>
      
      <div class="info-card">
        <h4>CSS анимациялары деген не?</h4>
        <p>CSS анимациялары веб-беттегі элементтердің стильдерін уақыт өте өзгертуге мүмкіндік береді. Олар веб-сайттың интерактивтілігін және пайдаланушы тәжірибесін жақсартады.</p>
      </div>
      
      <h3>CSS трансформациялары</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Transform қасиеті</h4>
          <p>Transform қасиеті элементтерді айналдыруға, масштабтауға, қисайтуға және жылжытуға мүмкіндік береді.</p>
          <div class="example">
            <pre><code>/* Жылжыту */
.translate {
  transform: translate(50px, 100px);
}

/* Айналдыру */
.rotate {
  transform: rotate(45deg);
}

/* Масштабтау */
.scale {
  transform: scale(1.5, 2);
}

/* Қисайту */
.skew {
  transform: skew(20deg, 10deg);
}

/* Бірнеше трансформацияны біріктіру */
.multiple {
  transform: translate(50px, 50px) rotate(45deg) scale(1.5);
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>CSS өтулері</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Transition қасиеті</h4>
          <p>Transition қасиеті элемент күйінің өзгеруін тегіс етеді.</p>
          <div class="example">
            <pre><code>.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: darkblue;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Transition қасиеттері</h4>
          <p>Transition қасиетінің бірнеше компоненті бар.</p>
          <div class="example">
            <pre><code>/* Қысқаша жазу */
.element {
  transition: property duration timing-function delay;
}

/* Мысал */
.element {
  transition: all 0.5s ease-in-out 0.2s;
}

/* Жеке қасиеттер */
.element {
  transition-property: background-color, transform;
  transition-duration: 0.5s, 1s;
  transition-timing-function: ease-in-out, linear;
  transition-delay: 0s, 0.2s;
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>CSS анимациялары</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>@keyframes және animation қасиеті</h4>
          <p>@keyframes анимацияның негізгі кадрларын анықтайды, ал animation қасиеті оны элементке қолданады.</p>
          <div class="example">
            <pre><code>/* Анимация анықтамасы */
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Анимацияны қолдану */
.element {
  animation: slide-in 1s ease-out;
}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Animation қасиеттері</h4>
          <p>Animation қасиетінің бірнеше компоненті бар.</p>
          <div class="example">
            <pre><code>/* Қысқаша жазу */
.element {
  animation: name duration timing-function delay iteration-count direction fill-mode play-state;
}

/* Мысал */
.element {
  animation: slide-in 2s ease-in-out 0.5s infinite alternate forwards running;
}

/* Жеке қасиеттер */
.element {
  animation-name: slide-in;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite; /* немесе нақты сан */
  animation-direction: alternate; /* normal, reverse, alternate, alternate-reverse */
  animation-fill-mode: forwards; /* none, forwards, backwards, both */
  animation-play-state: running; /* running, paused */
}</code></pre>
          </div>
        </div>
      </div>
      
      <h3>Практикалық мысал</h3>
      <p>Келесі мысалда біз трансформацияларды, өтулерді және анимацияларды қолданамыз:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;CSS Анимациялар және Трансформациялар&lt;/title&gt;
  &lt;style&gt;
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px;
      background-color: #f5f5f5;
    }
    
    h1 {
      margin-bottom: 40px;
    }
    
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      max-width: 1000px;
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
      border-radius: 8px;
      cursor: pointer;
    }
    
    /* Трансформациялар */
    .rotate:hover {
      transform: rotate(45deg);
      transition: transform 0.5s ease;
    }
    
    .scale:hover {
      transform: scale(1.5);
      transition: transform 0.5s ease;
    }
    
    .translate:hover {
      transform: translateY(-20px);
      transition: transform 0.5s ease;
    }
    
    .skew:hover {
      transform: skew(10deg, 10deg);
      transition: transform 0.5s ease;
    }
    
    /* Өтулер */
    .transition {
      background-color: #3498db;
      transition: background-color 0.5s ease,
                  border-radius 0.5s ease,
                  transform 0.5s ease;
    }
    
    .transition:hover {
      background-color: #e74c3c;
      border-radius: 50%;
      transform: scale(1.2);
    }
    
    /* Анимациялар */
    @keyframes pulse {
      0% {
        transform: scale(1);
        background-color: #3498db;
      }
      50% {
        transform: scale(1.2);
        background-color: #9b59b6;
      }
      100% {
        transform: scale(1);
        background-color: #3498db;
      }
    }
    
    .animation {
      animation: pulse 2s infinite;
    }
    
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-30px);
      }
    }
    
    .bounce {
      animation: bounce 1s infinite;
    }
    
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    .spin {
      animation: spin 2s linear infinite;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;CSS Анимациялар және Трансформациялар&lt;/h1&gt;
  
  &lt;div class="container"&gt;
    &lt;div class="box rotate"&gt;Айналдыру&lt;/div&gt;
    &lt;div class="box scale"&gt;Масштабтау&lt;/div&gt;
    &lt;div class="box translate"&gt;Жылжыту&lt;/div&gt;
    &lt;div class="box skew"&gt;Қисайту&lt;/div&gt;
    &lt;div class="box transition"&gt;Өту&lt;/div&gt;
    &lt;div class="box animation"&gt;Пульс&lt;/div&gt;
    &lt;div class="box bounce"&gt;Секіру&lt;/div&gt;
    &lt;div class="box spin"&gt;Айналу&lt;/div&gt;
  &lt;/div&gt;
  
  &lt;p&gt;Элементтердің үстіне курсорды апарыңыз немесе оларды басыңыз және эффекттерді көріңіз.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/njAIVtJs-_4" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/njAIVtJs-_4" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};
const lesson8 = {
  title: "8-сабақ: Заманауи CSS-фреймворктер",
  content: `
    <section class="theory">
      <h2>Заманауи CSS-фреймворктер</h2>
      <p>Бұл сабақта біз заманауи CSS-фреймворктерді және олардың веб-әзірлеудегі рөлін үйренеміз.</p>
      
      <div class="info-card">
        <h4>CSS-фреймворктер деген не?</h4>
        <p>CSS-фреймворктер - бұл веб-сайттарды жасауды жеңілдететін дайын CSS компоненттері мен стильдер жиынтығы. Олар әзірлеу процесін жылдамдатады және веб-сайттарды әртүрлі құрылғыларға бейімдеуге көмектеседі.</p>
      </div>
      
      <h3>Танымал CSS-фреймворктер</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Bootstrap</h4>
          <p>Bootstrap - ең танымал CSS-фреймворктердің бірі, Twitter компаниясы жасаған.</p>
          <div class="example">
            <pre><code>&lt;!-- Bootstrap CSS --&gt;
&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"&gt;

&lt;!-- Bootstrap компоненті мысалы --&gt;
&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col-md-6"&gt;
      &lt;div class="card"&gt;
        &lt;div class="card-body"&gt;
          &lt;h5 class="card-title"&gt;Карточка тақырыбы&lt;/h5&gt;
          &lt;p class="card-text"&gt;Карточка мазмұны.&lt;/p&gt;
          &lt;a href="#" class="btn btn-primary"&gt;Түйме&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Tailwind CSS</h4>
          <p>Tailwind CSS - утилита-бірінші CSS-фреймворк, дайын компоненттер емес, утилита класстарын ұсынады.</p>
          <div class="example">
            <pre><code>&lt;!-- Tailwind CSS --&gt;
&lt;link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"&gt;

&lt;!-- Tailwind CSS мысалы --&gt;
&lt;div class="container mx-auto px-4 py-8"&gt;
  &lt;div class="bg-white rounded-lg shadow-md p-6"&gt;
    &lt;h2 class="text-2xl font-bold text-gray-800 mb-4"&gt;Карточка тақырыбы&lt;/h2&gt;
    &lt;p class="text-gray-600 mb-4"&gt;Карточка мазмұны.&lt;/p&gt;
    &lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
      Түйме
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Materialize CSS</h4>
          <p>Materialize CSS - Google Material Design принциптеріне негізделген фреймворк.</p>
          <div class="example">
            <pre><code>&lt;!-- Materialize CSS --&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"&gt;

&lt;!-- Materialize компоненті мысалы --&gt;
&lt;div class="container"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col s12 m6"&gt;
      &lt;div class="card blue-grey darken-1"&gt;
        &lt;div class="card-content white-text"&gt;
          &lt;span class="card-title"&gt;Карточка тақырыбы&lt;/span&gt;
          &lt;p&gt;Карточка мазмұны.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="card-action"&gt;
          &lt;a href="#"&gt;Сілтеме&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Bulma</h4>
          <p>Bulma - модульді және заманауи CSS-фреймворк.</p>
          <div class="example">
            <pre><code>&lt;!-- Bulma CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"&gt;

&lt;!-- Bulma компоненті мысалы --&gt;
&lt;div class="container"&gt;
  &lt;div class="card"&gt;
    &lt;div class="card-content"&gt;
      &lt;p class="title"&gt;Карточка тақырыбы&lt;/p&gt;
      &lt;p class="subtitle"&gt;Карточка мазмұны.&lt;/p&gt;
    &lt;/div&gt;
    &lt;footer class="card-footer"&gt;
      &lt;p class="card-footer-item"&gt;
        &lt;span&gt;
          &lt;a href="#"&gt;Сілтеме&lt;/a&gt;
        &lt;/span&gt;
      &lt;/p&gt;
    &lt;/footer&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
      
      <h3>CSS-фреймворктердің артықшылықтары</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Әзірлеу жылдамдығы</h4>
          <p>CSS-фреймворктер дайын компоненттер мен стильдерді ұсынады, бұл әзірлеу процесін жылдамдатады.</p>
        </div>
        
        <div class="theory-card">
          <h4>Адаптивті дизайн</h4>
          <p>Көптеген фреймворктер адаптивті торлар мен компоненттерді қамтиды, бұл әртүрлі құрылғыларға бейімделуді жеңілдетеді.</p>
        </div>
        
        <div class="theory-card">
          <h4>Браузерлік үйлесімділік</h4>
          <p>Фреймворктер әртүрлі браузерлердегі үйлесімділік мәселелерін шешеді.</p>
        </div>
        
        <div class="theory-card">
          <h4>Қоғамдастық қолдауы</h4>
          <p>Танымал фреймворктердің үлкен қоғамдастықтары, құжаттамалары және ресурстары бар.</p>
        </div>
      </div>
      
      <h3>CSS-фреймворкті таңдау</h3>
      <p>CSS-фреймворкті таңдау кезінде келесі факторларды ескеру керек:</p>
      <ul>
        <li>Жобаның көлемі мен күрделілігі</li>
        <li>Фреймворктің өлшемі мен өнімділігі</li>
        <li>Қажетті компоненттер мен функциялар</li>
        <li>Құжаттама мен қоғамдастық қолдауы</li>
        <li>Жеке баптау мүмкіндіктері</li>
      </ul>
      
      <h3>Практикалық мысал</h3>
      <p>Келесі мысалда біз Bootstrap фреймворкін қолданып қарапайым веб-бет жасаймыз:</p>
      
      <div class="code-example">
        <h4>HTML код:</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Bootstrap мысалы&lt;/title&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
  &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- Навигация --&gt;
  &lt;nav class="navbar navbar-expand-lg navbar-dark bg-dark"&gt;
    &lt;div class="container"&gt;
      &lt;a class="navbar-brand" href="#"&gt;Менің сайтым&lt;/a&gt;
      &lt;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"&gt;
        &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
      &lt;/button&gt;
      &lt;div class="collapse navbar-collapse" id="navbarNav"&gt;
        &lt;ul class="navbar-nav ms-auto"&gt;
          &lt;li class="nav-item"&gt;
            &lt;a class="nav-link active" href="#"&gt;Басты бет&lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="nav-item"&gt;
            &lt;a class="nav-link" href="#"&gt;Қызметтер&lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="nav-item"&gt;
            &lt;a class="nav-link" href="#"&gt;Біз туралы&lt;/a&gt;
          &lt;/li&gt;
          &lt;li class="nav-item"&gt;
            &lt;a class="nav-link" href="#"&gt;Байланыс&lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/nav&gt;
  
  &lt;!-- Басты бөлім --&gt;
  &lt;div class="container mt-5"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-md-8"&gt;
        &lt;h1&gt;Bootstrap фреймворкі&lt;/h1&gt;
        &lt;p class="lead"&gt;Bootstrap - ең танымал CSS-фреймворктердің бірі, ол веб-сайттарды жасауды жеңілдетеді.&lt;/p&gt;
        
        &lt;div class="row mt-4"&gt;
          &lt;div class="col-md-6 mb-4"&gt;
            &lt;div class="card"&gt;
              &lt;img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Сурет"&gt;
              &lt;div class="card-body"&gt;
                &lt;h5 class="card-title"&gt;Адаптивті дизайн&lt;/h5&gt;
                &lt;p class="card-text"&gt;Bootstrap адаптивті дизайнды қолдайды, бұл сайтыңыздың барлық құрылғыларда жақсы көрінуін қамтамасыз етеді.&lt;/p&gt;
                &lt;a href="#" class="btn btn-primary"&gt;Толығырақ&lt;/a&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          
          &lt;div class="col-md-6 mb-4"&gt;
            &lt;div class="card"&gt;
              &lt;img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Сурет"&gt;
              &lt;div class="card-body"&gt;
                &lt;h5 class="card-title"&gt;Дайын компоненттер&lt;/h5&gt;
                &lt;p class="card-text"&gt;Bootstrap көптеген дайын компоненттерді ұсынады, соның ішінде навигация, карточкалар, формалар және т.б.&lt;/p&gt;
                &lt;a href="#" class="btn btn-primary"&gt;Толығырақ&lt;/a&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      &lt;div class="col-md-4"&gt;
        &lt;div class="card mb-4"&gt;
          &lt;div class="card-header"&gt;
            Жаңалықтар
          &lt;/div&gt;
          &lt;ul class="list-group list-group-flush"&gt;
            &lt;li class="list-group-item"&gt;Bootstrap 5 шықты&lt;/li&gt;
            &lt;li class="list-group-item"&gt;Жаңа компоненттер қосылды&lt;/li&gt;
            &lt;li class="list-group-item"&gt;Өнімділік жақсартылды&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
        
        &lt;div class="card"&gt;
          &lt;div class="card-header"&gt;
            Байланыс формасы
          &lt;/div&gt;
          &lt;div class="card-body"&gt;
            &lt;form&gt;
              &lt;div class="mb-3"&gt;
                &lt;label for="name" class="form-label"&gt;Аты&lt;/label&gt;
                &lt;input type="text" class="form-control" id="name"&gt;
              &lt;/div&gt;
              &lt;div class="mb-3"&gt;
                &lt;label for="email" class="form-label"&gt;Email&lt;/label&gt;
                &lt;input type="email" class="form-control" id="email"&gt;
              &lt;/div&gt;
              &lt;div class="mb-3"&gt;
                &lt;label for="message" class="form-label"&gt;Хабарлама&lt;/label&gt;
                &lt;textarea class="form-control" id="message" rows="3"&gt;&lt;/textarea&gt;
              &lt;/div&gt;
              &lt;button type="submit" class="btn btn-primary"&gt;Жіберу&lt;/button&gt;
            &lt;/form&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  
  &lt;!-- Футер --&gt;
  &lt;footer class="bg-dark text-white mt-5 py-4"&gt;
    &lt;div class="container text-center"&gt;
      &lt;p&gt;&copy; 2023 Менің сайтым. Барлық құқықтар қорғалған.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/v5lYAkVFP6c" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/v5lYAkVFP6c" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `
};
const lesson9 = {
  title: "9-сабақ: Толық веб-сайт жасау",
  content: `
    <section class="theory">
      <h2>Толық веб-сайт жасау</h2>
      <p>Бұл сабақта біз HTML және CSS бойынша алған білімімізді қолданып, толық веб-сайт жасаймыз.</p>
      
      <div class="info-card">
        <h4>Веб-сайт жасау процесі</h4>
        <p>Веб-сайт жасау - бұл жоспарлау, дизайн, әзірлеу және тестілеуді қамтитын көп қырлы процесс. Бұл сабақта біз осы процестің негізгі кезеңдерін қарастырамыз және өз веб-сайтымызды жасаймыз.</p>
      </div>
      
      <h3>Веб-сайт жасау кезеңдері</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>1. Жоспарлау</h4>
          <p>Сайттың мақсатын, мақсатты аудиторияны және негізгі функцияларды анықтау.</p>
          <div class="example">
            <ul>
              <li>Сайт мақсаты: Портфолио сайты</li>
              <li>Мақсатты аудитория: Әлеуетті жұмыс берушілер, клиенттер</li>
              <li>Негізгі беттер: Басты бет, Жұмыстар, Біз туралы, Байланыс</li>
            </ul>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>2. Дизайн</h4>
          <p>Сайттың визуалды стилін, түс схемасын және макетін жасау.</p>
          <div class="example">
            <ul>
              <li>Түс схемасы: #2c3e50 (негізгі), #3498db (акцент), #ecf0f1 (фон)</li>
              <li>Шрифттер: 'Roboto' (тақырыптар), 'Open Sans' (мәтін)</li>
              <li>Макет: Адаптивті дизайн, мобильді құрылғыларға бейімделген</li>
            </ul>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>3. Әзірлеу</h4>
          <p>HTML, CSS және JavaScript көмегімен сайтты құру.</p>
          <div class="example">
            <ul>
              <li>HTML: Семантикалық тегтерді қолдану (header, nav, main, section, footer)</li>
              <li>CSS: Адаптивті дизайн, Flexbox және Grid</li>
              <li>JavaScript: Интерактивті элементтер (мәзір, слайдер)</li>
            </ul>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>4. Тестілеу және жариялау</h4>
          <p>Сайтты тестілеу және интернетте жариялау.</p>
          <div class="example">
            <ul>
              <li>Тестілеу: Әртүрлі браузерлер мен құрылғыларда тексеру</li>
              <li>Оңтайландыру: Жүктеу жылдамдығын оңтайландыру, SEO</li>
              <li>Жариялау: Хостинг таңдау және сайтты жариялау</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3>Портфолио сайтын жасау</h3>
      <p>Келесі мысалда біз қарапайым портфолио сайтын жасаймыз:</p>
      
      <div class="code-example">
        <h4>HTML код (index.html):</h4>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="kk"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Менің портфолиом&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
  &lt;link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans&display=swap" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;div class="container"&gt;
      &lt;h1 class="logo"&gt;Менің портфолиом&lt;/h1&gt;
      &lt;nav&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href="#home" class="active"&gt;Басты бет&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#projects"&gt;Жұмыстар&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#about"&gt;Мен туралы&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#contact"&gt;Байланыс&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;
    &lt;/div&gt;
  &lt;/header&gt;

  &lt;section id="home" class="hero"&gt;
    &lt;div class="container"&gt;
      &lt;div class="hero-content"&gt;
        &lt;h2&gt;Сәлем, мен Айдар&lt;/h2&gt;
        &lt;h3&gt;Веб-әзірлеуші және дизайнер&lt;/h3&gt;
        &lt;p&gt;Мен заманауи және адаптивті веб-сайттар жасаймын.&lt;/p&gt;
        &lt;a href="#projects" class="btn"&gt;Жұмыстарымды көру&lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;section id="projects" class="projects"&gt;
    &lt;div class="container"&gt;
      &lt;h2 class="section-title"&gt;Менің жұмыстарым&lt;/h2&gt;
      &lt;div class="project-grid"&gt;
        &lt;div class="project-card"&gt;
          &lt;img src="https://via.placeholder.com/300x200" alt="Жоба 1"&gt;
          &lt;h3&gt;Компания сайты&lt;/h3&gt;
          &lt;p&gt;Бизнес компанияға арналған адаптивті веб-сайт.&lt;/p&gt;
          &lt;a href="#" class="btn-small"&gt;Толығырақ&lt;/a&gt;
        &lt;/div&gt;
        &lt;div class="project-card"&gt;
          &lt;img src="https://via.placeholder.com/300x200" alt="Жоба 2"&gt;
          &lt;h3&gt;Интернет-дүкен&lt;/h3&gt;
          &lt;p&gt;Толық функционалды электрондық коммерция сайты.&lt;/p&gt;
          &lt;a href="#" class="btn-small"&gt;Толығырақ&lt;/a&gt;
        &lt;/div&gt;
        &lt;div class="project-card"&gt;
          &lt;img src="https://via.placeholder.com/300x200" alt="Жоба 3"&gt;
          &lt;h3&gt;Мобильді қосымша&lt;/h3&gt;
          &lt;p&gt;iOS және Android үшін мобильді қосымша дизайны.&lt;/p&gt;
          &lt;a href="#" class="btn-small"&gt;Толығырақ&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;section id="about" class="about"&gt;
    &lt;div class="container"&gt;
      &lt;h2 class="section-title"&gt;Мен туралы&lt;/h2&gt;
      &lt;div class="about-content"&gt;
        &lt;div class="about-text"&gt;
          &lt;p&gt;Мен 5 жылдан астам тәжірибесі бар веб-әзірлеушімін. HTML, CSS, JavaScript, React және Node.js технологияларымен жұмыс істеймін.&lt;/p&gt;
          &lt;p&gt;Менің мақсатым - пайдаланушыларға ыңғайлы және эстетикалық тартымды веб-сайттар жасау.&lt;/p&gt;
          &lt;h3&gt;Дағдылар:&lt;/h3&gt;
          &lt;ul class="skills-list"&gt;
            &lt;li&gt;HTML5 / CSS3&lt;/li&gt;
            &lt;li&gt;JavaScript / React&lt;/li&gt;
            &lt;li&gt;Адаптивті дизайн&lt;/li&gt;
            &lt;li&gt;UI/UX дизайн&lt;/li&gt;
            &lt;li&gt;Node.js / Express&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div class="about-image"&gt;
          &lt;img src="https://via.placeholder.com/300x300" alt="Менің фотосуретім"&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;section id="contact" class="contact"&gt;
    &lt;div class="container"&gt;
      &lt;h2 class="section-title"&gt;Байланыс&lt;/h2&gt;
      &lt;div class="contact-content"&gt;
        &lt;div class="contact-info"&gt;
          &lt;h3&gt;Байланыс ақпараты&lt;/h3&gt;
          &lt;p&gt;&lt;strong&gt;Email:&lt;/strong&gt; aidar@example.com&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Телефон:&lt;/strong&gt; +7 (777) 123-4567&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Мекенжай:&lt;/strong&gt; Алматы қ., Қазақстан&lt;/p&gt;
          &lt;div class="social-links"&gt;
            &lt;a href="#" class="social-link"&gt;LinkedIn&lt;/a&gt;
            &lt;a href="#" class="social-link"&gt;GitHub&lt;/a&gt;
            &lt;a href="#" class="social-link"&gt;Twitter&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="contact-form"&gt;
          &lt;h3&gt;Хабарлама жіберу&lt;/h3&gt;
          &lt;form&gt;
            &lt;div class="form-group"&gt;
              &lt;label for="name"&gt;Аты&lt;/label&gt;
              &lt;input type="text" id="name" name="name" required&gt;
            &lt;/div&gt;
            &lt;div class="form-group"&gt;
              &lt;label for="email"&gt;Email&lt;/label&gt;
              &lt;input type="email" id="email" name="email" required&gt;
            &lt;/div&gt;
            &lt;div class="form-group"&gt;
              &lt;label for="message"&gt;Хабарлама&lt;/label&gt;
              &lt;textarea id="message" name="message" rows="5" required&gt;&lt;/textarea&gt;
            &lt;/div&gt;
            &lt;button type="submit" class="btn"&gt;Жіберу&lt;/button&gt;
          &lt;/form&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;footer&gt;
    &lt;div class="container"&gt;
      &lt;p&gt;&copy; 2023 Менің портфолиом. Барлық құқықтар қорғалған.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>
      
      <div class="code-example">
        <h4>CSS код (styles.css):</h4>
        <pre><code>/* Жалпы стильдер */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #ecf0f1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1, h2, h3, h4 {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: #3498db;
}

ul {
  list-style: none;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 3px;
  background-color: #3498db;
  margin: 10px auto;
}

.btn {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #2980b9;
}

.btn-small {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.btn-small:hover {
  background-color: #2980b9;
}

/* Хедер */
header {
  background-color: #2c3e50;
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-size: 1.8rem;
}

nav ul {
  display: flex;
}

nav li {
  margin-left: 20px;
}

nav a {
  color: white;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover, nav a.active {
  color: #3498db;
}

/* Басты бет секциясы */
.hero {
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 80px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 3rem;
  margin-bottom: 10px;
  color: white;
}

.hero h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #3498db;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

/* Жұмыстар секциясы */
.projects {
  padding: 100px 0;
  background-color: white;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-card h3 {
  padding: 20px 20px 10px;
  font-size: 1.4rem;
}

.project-card p {
  padding: 0 20px 20px;
  color: #666;
}

.project-card .btn-small {
  margin: 0 20px 20px;
}

/* Мен туралы секциясы */
.about {
  padding: 100px 0;
  background-color: #ecf0f1;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 50px;
}

.about-text {
  flex: 2;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.about p {
  margin-bottom: 20px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.skills-list li {
  background-color: #3498db;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* Байланыс секциясы */
.contact {
  padding: 100px 0;
  background-color: white;
}

.contact-content {
  display: flex;
  gap: 50px;
}

.contact-info, .contact-form {
  flex: 1;
}

.contact-info h3, .contact-form h3 {
  margin-bottom: 20px;
}

.contact-info p {
  margin-bottom: 10px;
}

.social-links {
  margin-top: 20px;
}

.social-link {
  display: inline-block;
  margin-right: 15px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Футер */
footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 20px 0;
}

/* Адаптивті дизайн */
@media (max-width: 768px) {
  header .container {
    flex-direction: column;
  }
  
  nav {
    margin-top: 20px;
  }
  
  nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  nav li {
    margin: 5px 10px;
  }
  
  .about-content, .contact-content {
    flex-direction: column;
  }
  
  .about-image {
    order: -1;
    margin-bottom: 30px;
  }
}</code></pre>
      </div>
      
      <p>Бұл мысал HTML және CSS бойынша алған білімімізді қолданып, толық портфолио сайтын жасауды көрсетеді. Сайт адаптивті дизайнға ие және әртүрлі құрылғыларда жақсы көрінеді.</p>
      
      <h3>Қорытынды</h3>
      <p>Осы курста біз HTML және CSS негіздерін үйрендік, оларды қолданып әртүрлі веб-беттер мен компоненттер жасадық. Енді сіз өз веб-сайттарыңызды жасай аласыз және веб-әзірлеу саласында өз дағдыларыңызды дамыта аласыз.</p>
      
      <p>Веб-әзірлеуді үйренуді жалғастыру үшін келесі тақырыптарды зерттеуге болады:</p>
      <ul>
        <li>JavaScript - веб-беттерге интерактивтілік қосу</li>
        <li>Фреймворктер - React, Vue.js, Angular</li>
        <li>Бэкенд әзірлеу - Node.js, Python, PHP</li>
        <li>Деректер базасы - MySQL, MongoDB</li>
      </ul>
      
      <p>Сәттілік тілейміз!</p>
    </section>
    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6qMlXJCgGF8" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6qMlXJCgGF8" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  window.htmlCssKzData = lessons;
}
