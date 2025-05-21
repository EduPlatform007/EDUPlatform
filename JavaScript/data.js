const lessons = {
  1: {
    title: "Сабақ 1: HTML негіздері",
    content: `
      <section class="theory">
        <h2>HTML негізгі ұғымдары</h2>
        <p>HTML (HyperText Markup Language) - веб-парақтардың құрылымын анықтайтын негізгі тіл. Барлық заманауи веб-сайттар HTML көмегімен жасалады.</p>
        
        
        <p>HTML тегтерден тұрады, олар мазмұнның құрылымын анықтайды. Әрбір теg <code>&lt;тег&gt;</code> жұптан басталып, <code>&lt;/тег&gt;</code> жұбымен аяқталады.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4><code>&lt;!DOCTYPE html&gt;</code></h4>
            <p>Құжаттың HTML5 нұсқасын көрсетеді. <strong>Әрқашан бірінші жолда болуы керек!</strong></p>
            <div class="example">
              <p>Мысал:</p>
              <code>&lt;!DOCTYPE html&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4><code>&lt;html&gt;</code></h4>
            <p>Бүкіл құжатты қамтиды. <code>lang</code> атрибуты тілді көрсетеді.</p>
            <div class="example">
              <p>Мысал:</p>
              <code>&lt;html lang="kk"&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4><code>&lt;head&gt;</code></h4>
            <p>Метаақпарат (тақырып, стильдер, скриптер). Браузерге арналған.</p>
            <div class="example">
              <p>Мысал:</p>
              <code>&lt;head&gt;\n  &lt;title&gt;Сайт тақырыбы&lt;/title&gt;\n&lt;/head&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4><code>&lt;body&gt;</code></h4>
            <p>Парақтың негізгі көрінетін мазмұнын қамтиды.</p>
            <div class="example">
              <p>Мысал:</p>
              <code>&lt;body&gt;\n  &lt;h1&gt;Менің алғашқы сайтым&lt;/h1&gt;\n&lt;/body&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4><code>&lt;title&gt;</code></h4>
            <p>Браузер қойындысында көрсетілетін парақ тақырыбы.</p>
            <div class="example">
              <p>Мысал:</p>
              <code>&lt;title&gt;Менің сайтым&lt;/title&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Мета теги</h4>
            <p>Парақ туралы қосымша ақпарат (кодировка, кілт сөздер, т.б.).</p>
            <div class="example">
              <p>Мысал:</p>
              <code>&lt;meta charset="UTF-8"&gt;</code>
            </div>
          </div>
        </div>
        
        <h3>HTML файлының негізгі құрылымы</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="kk"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Парақ тақырыбы&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Сайттың негізгі мазмұны осында --&gt;
    &lt;h1&gt;Менің алғашқы веб-парағым&lt;/h1&gt;
    &lt;p&gt;Бұл менің алғашқы HTML кодым.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </section>

      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe src="https://www.youtube.com/embed/-jRzkDSMwH4" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/gNclCoxyIf8" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <section class="practice">
        <h3>Практикалық тапсырма</h3>
        <div class="task">
          <p>Жоғарыдағы теорияны пайдаланып, негізгі HTML құрылымды жасаңыз:</p>
          <ol>
            <li>DOCTYPE декларациясын қосыңыз</li>
            <li>Қазақ тілін көрсетіңіз (lang="kk")</li>
            <li>head бөлімін қосыңыз (ішіндегі мазмұн қазірдің өзінде берілген)</li>
            <li>body тегін қосыңыз және оған h1 тақырыбын енгізіңіз</li>
          </ol>
          
          <div class="code-editor">
            <textarea id="html-code-1">&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Менің сайтым&lt;/title&gt;
&lt;/head&gt;</textarea>
            <button onclick="checkCode(1)">Тексеру</button>
            <div id="result-1"></div>
          </div>
        </div>
      </section>
    `,
    practiceTask: `
      <h3>Үй тапсырмасы</h3>
      <p>HTML негіздері бойынша конспект жасаңыз. Конспектте келесі тақырыптар қамтылуы керек:</p>
      <ol>
        <li>HTML дегеніміз не және оның тарихы</li>
        <li>HTML құжатының негізгі құрылымы</li>
        <li>Теgтер және олардың атрибуттары</li>
        <li>Басты метатегтер және олардың маңызы</li>
      </ol>
      <p>Конспект тұжырымды және анық болуы керек. Мысалдар мен иллюстрацияларды қосыңыз.</p>
    `,
    correctCode: "<!DOCTYPE html>\n<html lang=\"kk\">\n<body>\n<h1>",
    quizAnswers: {}
  },
  
  2: {
    title: "Сабақ 2: HTML элементтері",
    content: `
      <section class="theory">
        <h2>HTML элементтерінің түрлері</h2>
        <p>HTML элементтері бірнеше түрге бөлінеді:</p>
        <ul>
          <li><strong>Мәтін элементтері</strong> - мәтінді форматтауға қолданылатын элементтер</li>
          <li><strong>Сілтемелер мен суреттер</strong> - сайттағы навигация мен көрнекілік құралдары</li>
          <li><strong>Тізімдер мен кестелер</strong> - ақпаратты ұйымдастыруға арналған элементтер</li>
          <li><strong>Формалар</strong> - пайдаланушымен өзара әрекеттесу элементтері</li>
        </ul>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Мәтін элементтері</h4>
            <p>Мәтінді форматтауға арналған теgтер</p>
            <div class="example">
              <p>Мысалдар:</p>
              <code>&lt;p&gt;</code> - абзац<br>
              <code>&lt;h1&gt;-&lt;h6&gt;</code> - тақырыптар<br>
              <code>&lt;strong&gt;</code> - қалың мәтін<br>
              <code>&lt;em&gt;</code> - курсив мәтін
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Сілтемелер</h4>
            <p>Басқа беттерге немесе сайттарға сілтеме жасау</p>
            <div class="example">
              <p>Синтаксис:</p>
              <code>&lt;a href="url"&gt;сілтеме мәтіні&lt;/a&gt;</code><br><br>
              <p>Мысал:</p>
              <code>&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Суреттер</h4>
            <p>Суреттерді көрсетуге арналған теg</p>
            <div class="example">
              <p>Синтаксис:</p>
              <code>&lt;img src="image.jpg" alt="сипаттама"&gt;</code><br><br>
              <p>Мысал:</p>
              <code>&lt;img src="logo.png" alt="Сайт логотипі"&gt;</code>
            </div>
          </div>
          
      
        </div>
        
        <h3>HTML элементтерінің атрибуттары</h3>
        <p>Атрибуттар HTML элементтеріне қосымша қасиеттер береді:</p>
        <ul>
          <li><code>id</code> - элементтің бірегей идентификаторы</li>
          <li><code>class</code> - элементтің класы (стильдеу үшін)</li>
          <li><code>style</code> - элементке тікелей стиль қолдану</li>
          <li><code>title</code> - қосымша ақпарат (үстінен өткенде көрсетіледі)</li>
        </ul>
        
        <pre><code>&lt;p id="paragraph1" class="important" style="color: blue;" title="Маңызды ақпарат"&gt;
  Бұл - атрибуттары бар абзац.
&lt;/p&gt;</code></pre>
      </section>
      
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe src="https://www.youtube.com/embed/7D3SrPTc43A" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/bBnqtbIKmZI" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <section class="test">
        <h3>Білімді тексеру</h3>
        <div class="quiz">
          <p><strong>1. HTML-де абзацты белгілеу үшін қандай тег қолданылады?</strong></p>
          <label><input type="radio" name="q1" value="a"> &lt;paragraph&gt;</label>
          <label><input type="radio" name="q1" value="b"> &lt;p&gt;</label>
          <label><input type="radio" name="q1" value="c"> &lt;text&gt;</label>
          <label><input type="radio" name="q1" value="d"> &lt;par&gt;</label>
          
          <p><strong>2. Сілтеме жасау үшін қандай тег қолданылады?</strong></p>
          <label><input type="radio" name="q2" value="a"> &lt;link&gt;</label>
          <label><input type="radio" name="q2" value="b"> &lt;url&gt;</label>
          <label><input type="radio" name="q2" value="c"> &lt;a&gt;</label>
          <label><input type="radio" name="q2" value="d"> &lt;href&gt;</label>
          
          <p><strong>3. Суретті енгізу үшін қандай тег қолданылады?</strong></p>
          <label><input type="radio" name="q3" value="a"> &lt;img&gt;</label>
          <label><input type="radio" name="q3" value="b"> &lt;picture&gt;</label>
          <label><input type="radio" name="q3" value="c"> &lt;image&gt;</label>
          <label><input type="radio" name="q3" value="d"> &lt;src&gt;</label>
          
          <p><strong>4. Атрибуттың дұрыс жазылуы қандай?</strong></p>
          <label><input type="radio" name="q4" value="a"> &lt;p attribute="value"&gt;</label>
          <label><input type="radio" name="q4" value="b"> &lt;p (attribute)="value"&gt;</label>
          <label><input type="radio" name="q4" value="c"> &lt;p "attribute"="value"&gt;</label>
          <label><input type="radio" name="q4" value="d"> &lt;p attribute:value&gt;</label>
        </div>
        
        <div class="lesson-actions">
          <button class="complete-btn" onclick="checkQuiz(2)">Тестті тексеру</button>
          <div id="result-2"></div>
        </div>
      </section>
    `,
    correctCode: "<h2>\n<p>\n<a href=",
    quizAnswers: { q1: "b", q2: "c", q3: "a", q4: "a" }
  },

  3: {
    title: "Сабақ 3: Кестелер мен формалар",
    content: `
      <h2>Кестелерді құру</h2>
      <p>Кестелер &lt;table&gt;, &lt;tr&gt;, &lt;th&gt; және &lt;td&gt; теgтері арқылы жасалады.</p>
      
      
      <h3>Кестелердің негізгі элементтері:</h3>
      <ul>
        <li><code>&lt;table&gt;</code> - кестені анықтайды</li>
        <li><code>&lt;tr&gt;</code> (table row) - кесте жолын жасайды</li>
        <li><code>&lt;th&gt;</code> (table header) - кесте тақырыбын анықтайды</li>
        <li><code>&lt;td&gt;</code> (table data) - кесте ұяшығын құрайды</li>
        <li><code>&lt;caption&gt;</code> - кесте тақырыбы</li>
        <li><code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> - кесте бөлімдері</li>
      </ul>
      
      <h3>Мысал:</h3>
      <pre><code>&lt;table border="1"&gt;
    &lt;caption&gt;Студенттер тізімі&lt;/caption&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Аты-жөні&lt;/th&gt;
            &lt;th&gt;Тобы&lt;/th&gt;
            &lt;th&gt;Бағасы&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Асқар Әлиев&lt;/td&gt;
            &lt;td&gt;CS-101&lt;/td&gt;
            &lt;td&gt;95&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Айгүл Серікова&lt;/td&gt;
            &lt;td&gt;CS-102&lt;/td&gt;
            &lt;td&gt;88&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

      <h2>HTML формалары</h2>
      <p>Формалар - пайдаланушылардан деректерді жинауға арналған элементтер.</p>
      
      <h3>Негізгі форма элементтері:</h3>
      <ul>
        <li><code>&lt;form&gt;</code> - форманы анықтайды</li>
        <li><code>&lt;input&gt;</code> - енгізу өрісі (мәтін, құсбелгі, радио және т.б.)</li>
        <li><code>&lt;textarea&gt;</code> - көп жолды мәтін өрісі</li>
        <li><code>&lt;select&gt;</code> және <code>&lt;option&gt;</code> - тізімнен таңдау</li>
        <li><code>&lt;button&gt;</code> - батырма</li>
        <li><code>&lt;label&gt;</code> - өріс белгісі</li>
      </ul>
      
      <h3>Форма мысалы:</h3>
      <pre><code>&lt;form action="/submit" method="post"&gt;
    &lt;label for="name"&gt;Аты-жөні:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" required&gt;
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
    
    &lt;label for="message"&gt;Хабарлама:&lt;/label&gt;
    &lt;textarea id="message" name="message" rows="4"&gt;&lt;/textarea&gt;
    
    &lt;button type="submit"&gt;Жіберу&lt;/button&gt;
&lt;/form&gt;</code></pre>

<div class="video-container">
  <div class="video-kk video-wrapper">
    <iframe src="https://www.youtube.com/embed/rZig2BSw09w" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="video-ru video-wrapper" style="display:none;">
    <iframe src="https://www.youtube.com/embed/jWXGLAD2BUU" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

      <h3>Практика:</h3>
      <div class="task">
        <p><strong>Тапсырма:</strong> Келесі кестені толықтырыңыз:</p>
        <ol>
          <li>Кестенің басын "Оқу жоспары" деп жазыңыз</li>
          <li>Бірінші жолға "Пән" және "Уақыт" бағандарын қосыңыз</li>
          <li>Екінші жолға кез келген пән мен уақытты жазыңыз</li>
          <li>Үшінші жолды да қосыңыз</li>
        </ol>
        
        <div class="code-editor">
          <textarea id="html-code-3">&lt;table border="1"&gt;
    &lt;caption&gt;&lt;/caption&gt;
    &lt;tr&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;/tr&gt;
&lt;/table&gt;</textarea>
          <button onclick="checkCode(3)">Тексеру</button>
          <div id="result-3"></div>
        </div>
      </div>
    `,
    practiceTask: `
      <h3>Үй тапсырмасы</h3>
      <p>HTML кестелері мен формалары туралы конспект жасаңыз. Конспектте келесі тақырыптар қамтылуы керек:</p>
      <ol>
        <li>Кестенің барлық элементтері және олардың қолданылуы</li>
        <li>Кестелердің стильдеу мүмкіндіктері</li>
        <li>Формалардың түрлері мен олардың элементтері</li>
        <li>Форма валидациясының әдістері</li>
      </ol>
      <p>Конспектте кестелер мен формалардың кемінде 3 практикалық мысалын көрсетіңіз.</p>
    `,
    correctCode: "Оқу жоспары\n<th>Пән</th>\n<th>Уақыт</th>\n<td>",
    quizAnswers: {}
  },

  4: {
    title: "Сабақ 4: CSS негіздері",
    content: `
      <section class="theory">
        <h2>CSS негізгі ұғымдары</h2>
        <p>CSS (Cascading Style Sheets) - веб-беттердің көрінісін анықтайтын стильдеу тілі. HTML құрылымына көрініс беру үшін қолданылады.</p>
        
        <h3>CSS қолдану әдістері:</h3>
        <ol>
          <li><strong>Ішкі CSS</strong> - HTML файлында <code>&lt;style&gt;</code> тегі арқылы</li>
          <li><strong>Сыртқы CSS</strong> - жеке .css файлында, <code>&lt;link&gt;</code> тегі арқылы қосылады</li>
          <li><strong>Инлайн CSS</strong> - тікелей HTML элементінде <code>style</code> атрибуты арқылы</li>
        </ol>
        
        <pre><code>/* Сыртқы CSS файлының мысалы */
p {
  color: blue;
  font-size: 16px;
}

h1 {
  color: darkblue;
  font-size: 24px;
  text-align: center;
}</code></pre>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Селекторлар</h4>
            <p>Қандай элементтерге стиль қолданылатындығын анықтайды:</p>
            <div class="example">
              <code>p {color: red;}</code> - барлық абзацтар<br>
              <code>.class {color: blue;}</code> - барлық class="class" элементтер<br>
              <code>#id {color: green;}</code> - id="id" элементі
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Қасиеттер</h4>
            <p>Элементтердің көрінісін өзгертеді:</p>
            <div class="example">
              <code>color</code> - мәтін түсі<br>
              <code>font-size</code> - қаріп өлшемі<br>
              <code>margin</code> - сыртқы жиек<br>
              <code>padding</code> - ішкі жиек<br>
              <code>background-color</code> - фон түсі
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Мәндер</h4>
            <p>Қасиеттердің нақты параметрлері:</p>
            <div class="example">
              <code>red, #FF0000, rgb(255,0,0)</code> - түс мәндері<br>
              <code>16px, 1.5em, 2rem</code> - өлшем бірліктері<br>
              <code>20%, 200px, auto</code> - орналасу өлшемдері
            </div>
          </div>
        </div>
        
        <h3>CSS синтаксисі</h3>
        <p>CSS стилі селектор, қасиет және мән жұбынан тұрады:</p>
        <pre><code>селектор {
  қасиет1: мән1;
  қасиет2: мән2;
}</code></pre>
      </section>

      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe src="https://www.youtube.com/embed/innvl7XNF7o" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/mA6EaGs6rak" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <section class="test">
        <h3>Білімді тексеру</h3>
        <div class="quiz">
          <p><strong>1. CSS қысқартуының толық ашылуы?</strong></p>
          <label><input type="radio" name="q1" value="a"> Computer Style Sheets</label>
          <label><input type="radio" name="q1" value="b"> Cascading Style Sheets</label>
          <label><input type="radio" name="q1" value="c"> Creative Style Sheets</label>
          <label><input type="radio" name="q1" value="d"> Colorful Style Sheets</label>
          
          <p><strong>2. CSS-те мәтіннің түсін өзгерту үшін қандай қасиет қолданылады?</strong></p>
          <label><input type="radio" name="q2" value="a"> text-color</label>
          <label><input type="radio" name="q2" value="b"> font-color</label>
          <label><input type="radio" name="q2" value="c"> color</label>
          <label><input type="radio" name="q2" value="d"> text-style</label>
          
          <p><strong>3. CSS-ті HTML-ге қосудың ДҰРЫС ЕМЕС әдісі?</strong></p>
          <label><input type="radio" name="q3" value="a"> Сыртқы CSS файлын &lt;link&gt; тегі арқылы қосу</label>
          <label><input type="radio" name="q3" value="b"> &lt;style&gt; тегін &lt;head&gt; ішінде қолдану</label>
          <label><input type="radio" name="q3" value="c"> HTML элементінде style атрибутын қолдану</label>
          <label><input type="radio" name="q3" value="d"> CSS кодын &lt;css&gt; тегтерінің ішіне жазу</label>
          
          <p><strong>4. Келесі код қандай элементтерге стиль қолданады: .highlight { color: yellow; }?</strong></p>
          <label><input type="radio" name="q4" value="a"> highlight ID-і бар элементке</label>
          <label><input type="radio" name="q4" value="b"> highlight класы бар барлық элементтерге</label>
          <label><input type="radio" name="q4" value="c"> highlight тегі бар элементтерге</label>
          <label><input type="radio" name="q4" value="d"> highlight атрибуты бар элементтерге</label>
        </div>
        
        <div class="lesson-actions">
          <button class="complete-btn" onclick="checkQuiz(4)">Тестті тексеру</button>
          <div id="result-4"></div>
        </div>
      </section>
    `,
    correctCode: "p{color:red;}\nh1{font-size:24px;}",
    quizAnswers: { q1: "b", q2: "c", q3: "d", q4: "b" }
  },

  5: {
    title: "Сабақ 5: CSS селекторлары",
    content: `
      <section class="theory">
        <h2>CSS селекторларының түрлері</h2>
        <p>Селекторлар - HTML элементтерін анықтап, оларға стиль қолдануға мүмкіндік береді. Дұрыс селекторларды қолдану арқылы нақты элементтерді таңдауға болады.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Негізгі селекторлар</h4>
            <div class="example">
              <p><code>p { ... }</code> - барлық абзацтар</p>
              <p><code>.className { ... }</code> - барлық class="className" элементтер</p>
              <p><code>#elementId { ... }</code> - id="elementId" элементі</p>
              <p><code>* { ... }</code> - барлық элементтер</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Комбинациялық селекторлар</h4>
            <div class="example">
              <p><code>div p { ... }</code> - div ішіндегі барлық абзацтар</p>
              <p><code>div > p { ... }</code> - div-тің тікелей ұрпақтары болып табылатын абзацтар</p>
              <p><code>h1 + p { ... }</code> - h1-ден кейінгі бірінші абзац</p>
              <p><code>h1 ~ p { ... }</code> - h1-ден кейінгі барлық абзацтар</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Атрибут селекторлары</h4>
            <div class="example">
              <p><code>[type] { ... }</code> - type атрибуты бар барлық элементтер</p>
              <p><code>[type="text"] { ... }</code> - type="text" атрибуты бар барлық элементтер</p>
              <p><code>[href^="https"] { ... }</code> - href-і "https" басталатын сілтемелер</p>
              <p><code>[href$=".pdf"] { ... }</code> - href-і ".pdf" аяқталатын сілтемелер</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Псевдо-класстар</h4>
            <div class="example">
              <p><code>a:hover { ... }</code> - тышқан үстінде тұрған сілтеме</p>
              <p><code>input:focus { ... }</code> - фокуста болған енгізу өрісі</p>
              <p><code>p:first-child { ... }</code> - бірінші ұрпақ ретінде болған абзац</p>
              <p><code>p:nth-child(2) { ... }</code> - екінші ұрпақ ретінде болған абзац</p>
            </div>
          </div>
        </div>
        
        <h3>Селекторлардың маңыздылығы (Specificity)</h3>
        <p>Егер бір элементке бірнеше селектор қолданылса, маңыздылығы ең жоғары селектор басымдылыққа ие болады.</p>
        <ul>
          <li>Инлайн стиль (&lt;div style="..."&gt;) - ең жоғары маңыздылық</li>
          <li>ID селекторлары (#id) - жоғары маңыздылық</li>
          <li>Класс селекторлары (.class), атрибут селекторлары, псевдо-класстар - орташа маңыздылық</li>
          <li>Элемент селекторлары (p, div) - төмен маңыздылық</li>
        </ul>
      </section>
      
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe src="https://www.youtube.com/embed/c7dHapyo-Xw" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/GctszxSvbeQ" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <section class="practice">
        <h3>Практикалық тапсырма</h3>
        <div class="task">
          <p><strong>Тапсырма:</strong> Келесі HTML құрылымына стиль қолданыңыз:</p>
          <pre><code>&lt;div class="container"&gt;
  &lt;p&gt;Қарапайым абзац&lt;/p&gt;
  &lt;p class="special"&gt;Арнайы абзац&lt;/p&gt;
  &lt;p id="pick"&gt;Бірегей абзац&lt;/p&gt;
&lt;/div&gt;</code></pre>
          <ol>
            <li>Барлық абзацтардың мәтінін жасыл етіңіз</li>
            <li>"special" класы бар элементтердің фондық түсін сары етіңіз</li>
            <li>"pick" идентификаторы бар элементтің қаріп өлшемін 12px етіңіз</li>
          </ol>
          
          <div class="code-editor">
            <textarea id="css-code-5">/* Стильдерді осы жерге жазыңыз */</textarea>
            <button onclick="checkCode(5)">Тексеру</button>
            <div id="result-5"></div>
          </div>
        </div>
      </section>
    `,
    correctCode: "p{color:green;}\n.special{background-color:yellow;}\n#pick{font-size:12px;}",
    quizAnswers: {}
  },

  6: {
    title: "Сабақ 6: Flexbox жүйесі",
    content: `
      <section class="theory">
        <h2>Flexbox - заманауи орналастыру жүйесі</h2>
        <p>Flexbox (Flexible Box Layout) - элементтерді икемді орналастыруға арналған CSS модулі. Бұл жүйе сайттарды адаптивті жасауға мүмкіндік береді.</p>
        
        <h3>Flexbox негізгі ұғымдары:</h3>
        <ul>
          <li><strong>Flex-контейнер</strong> - display: flex немесе display: inline-flex қасиеті бар элемент</li>
          <li><strong>Flex-элементтер</strong> - flex-контейнер ішіндегі тікелей ұрпақ элементтер</li>
          <li><strong>Негізгі ось (Main Axis)</strong> - flex-direction бойынша анықталады</li>
          <li><strong>Қосалқы ось (Cross Axis)</strong> - негізгі оське перпендикуляр ось</li>
        </ul>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Flex-контейнер қасиеттері</h4>
            <div class="example">
              <p><code>display: flex</code> - flex-контейнерін анықтайды</p>
              <p><code>flex-direction</code> - негізгі ось бағытын анықтайды (row, column, row-reverse, column-reverse)</p>
              <p><code>flex-wrap</code> - элементтерді бірнеше жолға/бағанға бөлу (wrap, nowrap)</p>
              <p><code>justify-content</code> - негізгі ось бойынша тегістеу (flex-start, center, flex-end, space-between, space-around)</p>
              <p><code>align-items</code> - қосалқы ось бойынша тегістеу (flex-start, center, flex-end, stretch)</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Flex-элемент қасиеттері</h4>
            <div class="example">
              <p><code>flex-grow</code> - бос орынды қалай бөлу керектігін анықтайды</p>
              <p><code>flex-shrink</code> - орын жетіспегенде қалай кішірею керектігін анықтайды</p>
              <p><code>flex-basis</code> - элементтің бастапқы өлшемі</p>
              <p><code>flex</code> - grow, shrink, basis үшін қысқаша жазба</p>
              <p><code>align-self</code> - нақты элементтің тегістелуін анықтайды</p>
            </div>
          </div>
        </div>
        
        <h3>Flexbox мысалы:</h3>
        <pre><code>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  flex: 1 0 200px; /* grow shrink basis */
  margin: 10px;
}</code></pre>
      </section>
      
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe src="https://www.youtube.com/embed/uEaNNgvdU6E" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/YG8Vhz1pAsU" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <section class="practice">
        <h3>Практикалық тапсырма</h3>
        <div class="task">
          <p><strong>Тапсырма:</strong> Келесі мәселені шешіңіз:</p>
          <p>CSS кодын жазыңыз, ол <code>.container</code> класы бар элементке:</p>
          <ol>
            <li>Flex-контейнер ретінде анықтаңыз</li>
            <li>Элементтерді ортаға туралаңыз (негізгі ось бойынша)</li>
            <li>Элементтерді бағана түрінде орналастырыңыз (жоғарыдан төменге)</li>
            <li>Қосалқы ось бойынша элементтерді ортаға орналастырыңыз</li>
          </ol>
          
          <div class="code-editor">
            <textarea id="css-code-6">.container {
    /* Стильдерді осы жерге жазыңыз */
}</textarea>
            <button onclick="checkCode(6)">Тексеру</button>
            <div id="result-6"></div>
          </div>
        </div>
      </section>
    `,
    correctCode: "display:flex;\njustify-content:center;\nflex-direction:column;\nalign-items:center;",
    quizAnswers: {}
  },

  7: {
    title: "Сабақ 7: Grid жүйесі",
    content: `
      <section class="theory">
        <h2>CSS Grid жүйесі</h2>
        <p>CSS Grid - екі өлшемді торлы орналастыру жүйесі. Flexbox-қа қарағанда, Grid жолдар мен бағандардың екі өлшемді құрылымын жасауға мүмкіндік береді.</p>
        
        <h3>Grid негізгі ұғымдары:</h3>
        <ul>
          <li><strong>Grid-контейнер</strong> - display: grid немесе display: inline-grid қасиеті бар элемент</li>
          <li><strong>Grid-элементтер</strong> - grid-контейнер ішіндегі тікелей ұрпақ элементтер</li>
          <li><strong>Grid жолдары мен бағандары</strong> - grid құрылымындағы көлденең және тік сызықтар</li>
          <li><strong>Grid ұяшықтары</strong> - grid жолдары мен бағандарының қиылысуы</li>
          <li><strong>Grid аумақтары</strong> - бірнеше ұяшықтан тұратын тор бөліктері</li>
        </ul>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Grid контейнер</h4>
            <p>Grid жүйесін бастау үшін қажет:</p>
            <div class="example">
              <code>.container {<br>  display: grid;<br>}</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Жолдар мен бағандар</h4>
            <p>Тор құрылымын анықтау:</p>
            <div class="example">
              <code>grid-template-columns: 1fr 2fr 1fr;</code> - 3 баған<br>
              <code>grid-template-rows: 100px auto;</code> - 2 жол<br>
              <code>grid-template: 100px 200px / 1fr 1fr;</code> - 2 жол, 2 баған
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Аралықтар</h4>
            <p>Ұяшықтар арасындағы қашықтық:</p>
            <div class="example">
              <code>column-gap: 20px;</code> - бағандар арасындағы аралық<br>
              <code>row-gap: 10px;</code> - жолдар арасындағы аралық<br>
              <code>gap: 10px 20px;</code> - жолдар мен бағандар арасындағы аралық
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Элементтерді орналастыру</h4>
            <p>Grid-элементтерді арнайы орналастыру:</p>
            <div class="example">
              <code>grid-column: 1 / 3;</code> - 1-ден 3-ші баған желісіне дейін<br>
              <code>grid-row: 2 / 4;</code> - 2-ден 4-ші жол желісіне дейін<br>
              <code>grid-area: 2 / 1 / 4 / 3;</code> - жол-бастау/баған-бастау/жол-аяқтау/баған-аяқтау
            </div>
          </div>
        </div>
        
        <h3>Grid мысалы:</h3>
        <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  gap: 20px;
}

.item1 {
  grid-column: 1 / 3; /* 1-ден 3-ші баған желісіне дейін */
  grid-row: 1 / 2;    /* 1-ден 2-ші жол желісіне дейін */
}</code></pre>
      </section>
      
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe src="https://www.youtube.com/embed/__26O9rCo4k" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/JrKOHNRnRMg" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <section class="test">
        <h3>Білімді тексеру</h3>
        <div class="quiz">
          <p><strong>1. Grid құрылымын қалай іске қосамыз?</strong></p>
          <label><input type="radio" name="q1" value="a"> display: flex;</label>
          <label><input type="radio" name="q1" value="b"> display: grid;</label>
          
          <p><strong>2. Ұяшықтар арасындағы қашықтықты қалай орнатамыз?</strong></p>
          <label><input type="radio" name="q2" value="a"> margin: 20px;</label>
          <label><input type="radio" name="q2" value="b"> gap: 20px;</label>

          <p><strong>3. Үш бірдей өлшемді баған жасау үшін қандай код қолданылады?</strong></p>
          <label><input type="radio" name="q3" value="a"> grid-template-columns: repeat(3, 1fr);</label>
          <label><input type="radio" name="q3" value="b"> grid-template-columns: 3fr;</label>
        </div>
        
        <div class="lesson-actions">
          <button class="complete-btn" onclick="checkQuiz(7)">Тестті тексеру</button>
          <div id="result-7"></div>
        </div>
      </section>
    `,
    correctCode: "",
    quizAnswers: { q1: "b", q2: "b", q3: "a" }
  },

  8: {
    title: "Сабақ 8: CSS позициялау (Position)",
    content: `
      <section class="theory">
        <h2>CSS позициялау (Position)</h2>
        <p>CSS-те "position" қасиеті элементтердің орналасу тәсілін анықтайды. Бұл қасиет веб-парақтағы элементтерді дәл орналастыруға мүмкіндік береді.</p>
        
        <h3>Position қасиетінің мәндері:</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>static</h4>
            <p>Әдепкі мән. Элемент құжаттың қалыпты ағынында орналасады.</p>
            <div class="example">
              <code>.element {
  position: static;
}</code>
              <p>Бұл жағдайда top, right, bottom, left қасиеттері әсер етпейді.</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>relative</h4>
            <p>Элемент өзінің қалыпты орнына қатысты орналасады.</p>
            <div class="example">
              <code>.element {
  position: relative;
  top: 20px;
  left: 30px;
}</code>
              <p>Элемент өзінің бастапқы орнынан төмен 20px және оңға 30px жылжиды.</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>absolute</h4>
            <p>Элемент ең жақын орналасқан (static емес) ата-элементке қатысты орналасады.</p>
            <div class="example">
              <code>.container {
  position: relative;
}
.element {
  position: absolute;
  top: 50px;
  right: 10px;
}</code>
              <p>Элемент контейнердің жоғарғы шетінен 50px және оң жақ шетінен 10px қашықтықта орналасады.</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>fixed</h4>
            <p>Элемент браузер терезесіне қатысты орналасады және парақ айналдырылса да орнында қалады.</p>
            <div class="example">
              <code>.element {
  position: fixed;
  bottom: 20px;
  right: 20px;
}</code>
              <p>Элемент браузер терезесінің төменгі оң жақ бұрышында орналасады.</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>sticky</h4>
            <p>Элемент пайдаланушы айналдырған кезде белгілі бір нүктеге жеткенше қалыпты ағында болады, содан кейін "жабысып" қалады.</p>
            <div class="example">
              <code>.element {
  position: sticky;
  top: 0;
}</code>
              <p>Элемент айналдыру кезінде экранның жоғарғы жағына жеткенде жабысып қалады.</p>
            </div>
          </div>
        </div>
        
        <h3>z-index қасиеті</h3>
        <p>z-index қасиеті элементтердің үшінші өлшемдегі (z-осі) орналасу ретін анықтайды. Жоғары z-index мәні бар элементтер төмен мәні бар элементтердің үстінде көрсетіледі.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>z-index қолдану</h4>
            <div class="example">
              <code>.background {
  position: relative;
  z-index: 1;
}
.foreground {
  position: absolute;
  z-index: 2; /* Бұл элемент жоғарыда болады */
}</code>
              <p>z-index тек позицияланған элементтерге ғана әсер етеді (static емес).</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Қабаттасу контексі</h4>
            <div class="example">
              <p>Элементтер әртүрлі қабаттасу контекстерінде болса, z-index салыстырулары тек сол контекст ішінде ғана жұмыс істейді.</p>
              <p>Жаңа қабаттасу контексі position: relative/absolute/fixed, z-index мәні auto емес, opacity 1-ден кіші немесе transform қолданылған элементтерде жасалады.</p>
            </div>
          </div>
        </div>
        
        <h3>Практикалық мысалдар:</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Модальды терезе</h4>
            <div class="example">
              <code>.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 100;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
}</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Жабысқақ навигация</h4>
            <div class="example">
              <code>.navbar {
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Туыстық позициялау</h4>
            <div class="example">
              <code>.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 10px;
  right: 10px;
}</code>
            </div>
          </div>
        </div>
      </section>

      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe src="https://www.youtube.com/embed/Jg-8An1CcPU" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/jQCzxM2dPWU" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      
      <section class="test">
        <h3>Білімді тексеру</h3>
        <div class="quiz">
          <p><strong>1. position: static қасиеті не істейді?</strong></p>
          <label><input type="radio" name="q1" value="a"> Элементті құжат ағынынан шығарады</label>
          <label><input type="radio" name="q1" value="b"> Элементті құжаттың қалыпты ағынына қалдырады</label>
          <label><input type="radio" name="q1" value="c"> Элементті браузер терезесіне бекітеді</label>
          <label><input type="radio" name="q1" value="d"> Элементті айналдыру кезінде жабыстырады</label>
          
          <p><strong>2. position: absolute қасиетін қолданған кезде элемент неге қатысты орналасады?</strong></p>
          <label><input type="radio" name="q2" value="a"> Құжат ағынындағы өз орнына</label>
          <label><input type="radio" name="q2" value="b"> Браузер терезесіне</label>
          <label><input type="radio" name="q2" value="c"> Ең жақын орналасқан (static емес) ата-элементке</label>
          <label><input type="radio" name="q2" value="d"> Парақтың жоғарғы жағына</label>
          
          <p><strong>3. Келесі элементтердің қайсысы скролл кезінде өз орнында қалады?</strong></p>
          <label><input type="radio" name="q3" value="a"> position: relative</label>
          <label><input type="radio" name="q3" value="b"> position: static</label>
          <label><input type="radio" name="q3" value="c"> position: absolute</label>
          <label><input type="radio" name="q3" value="d"> position: fixed</label>
          
          <p><strong>4. z-index қасиеті не үшін қолданылады?</strong></p>
          <label><input type="radio" name="q4" value="a"> Элементтің енін орнату</label>
          <label><input type="radio" name="q4" value="b"> Элементтің орнын x және y осьтерінде анықтау</label>
          <label><input type="radio" name="q4" value="c"> Элементтердің қабаттасу ретін анықтау</label>
          <label><input type="radio" name="q4" value="d"> Элементті зум деңгейін орнату</label>
          
          <p><strong>5. position: sticky қасиеті қашан "жабысады"?</strong></p>
          <label><input type="radio" name="q5" value="a"> Әрқашан</label>
          <label><input type="radio" name="q5" value="b"> Тышқанды үстіне әкелгенде</label>
          <label><input type="radio" name="q5" value="c"> Скролл кезінде белгіленген шекке жеткенде</label>
          <label><input type="radio" name="q5" value="d"> Парақты жүктеген кезде</label>
        </div>
        
        <div class="lesson-actions">
          <button class="complete-btn" onclick="checkQuiz(8)">Тестті тексеру</button>
          <div id="result-8-quiz"></div>
        </div>
      </section>
    `,
    quizAnswers: { q1: "b", q2: "c", q3: "d", q4: "c", q5: "c" }
  },

  9: {
    title: "Сабақ 9: Финалдық жоба",
    content: `
      <section class="theory">
        <h2>Толыққанды веб-бет жасау</h2>
        <p>Осы курста үйренгеніміздің барлығын біріктіріп, толыққанды веб-бетті жасаймыз. Финалдық жоба - бұл HTML мен CSS бойынша біліміңізді көрсететін жеке портфолио немесе блог.</p>
        
        <h3>Жобаға қойылатын талаптар:</h3>
        <ul>
          <li><strong>Тиімді HTML құрылым</strong> - семантикалық теgтерді дұрыс қолдану</li>
          <li><strong>Стильдеу</strong> - CSS қасиеттерін тиімді қолдану</li>
          <li><strong>Адаптивті дизайн</strong> - әртүрлі құрылғыларға бейімделу</li>
          <li><strong>Икемді орналастыру</strong> - Flexbox және Grid жүйелерін қолдану</li>
          <li><strong>Сапалы мазмұн</strong> - суреттер, мәтіндер және басқа медиа</li>
        </ul>
        
        <h3>Веб-беттің негізгі бөліктері:</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Header (Үстіңгі деректер)</h4>
            <p>Веб-беттің жоғарғы бөлігі:</p>
            <div class="example">
              <p>- Логотип немесе атауы</p>
              <p>- Навигация мәзірі</p>
              <p>- Іздеу, кіру немесе басқа әрекеттер</p>
              <code>&lt;header&gt;<br>  &lt;nav&gt;...&lt;/nav&gt;<br>&lt;/header&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Main (Негізгі мазмұн)</h4>
            <p>Веб-беттің негізгі бөлігі:</p>
            <div class="example">
              <p>- Мақалалар/жазбалар</p>
              <p>- Секциялар мен бөлімдер</p>
              <p>- Өнімдер, қызметтер т.б.</p>
              <code>&lt;main&gt;<br>  &lt;section&gt;...&lt;/section&gt;<br>  &lt;article&gt;...&lt;/article&gt;<br>&lt;/main&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Sidebar (Бүйірлік панель)</h4>
            <p>Қосымша ақпарат орналасатын бөлім:</p>
            <div class="example">
              <p>- Категориялар немесе тақырыптар</p>
              <p>- Танымал мазмұн</p>
              <p>- Байланыс ақпараты</p>
              <code>&lt;aside&gt;<br>  &lt;div&gt;...&lt;/div&gt;<br>&lt;/aside&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Footer (Аяқтау бөлігі)</h4>
            <p>Веб-беттің төменгі бөлігі:</p>
            <div class="example">
              <p>- Авторлық құқықтар туралы ақпарат</p>
              <p>- Байланыс мәліметтері</p>
              <p>- Әлеуметтік желілер сілтемелері</p>
              <code>&lt;footer&gt;<br>  &lt;div&gt;...&lt;/div&gt;<br>&lt;/footer&gt;</code>
            </div>
          </div>
        </div>
        
        <h3>Жобаны жүзеге асыру кезеңдері:</h3>
        <ol>
          <li><strong>Жоспарлау және дизайн</strong> - макет жасау, түстер мен қаріптерді таңдау</li>
          <li><strong>HTML құрылымы</strong> - семантикалық теgтерді қолданып, құрылымды құру</li>
          <li><strong>CSS стильдеу</strong> - негізгі стильдерді қолдану, орналастыру жүйесін жасау</li>
          <li><strong>Адаптивтілік</strong> - медиа-сұрауларды қосу, әртүрлі құрылғыларда тестілеу</li>
          <li><strong>Мазмұнды толтыру</strong> - мәтіндерді, суреттерді және басқа медианы қосу</li>
          <li><strong>Тестілеу және түзету</strong> - әртүрлі браузерлер мен құрылғыларда тексеру</li>
        </ol>
      </section>
      
      <section class="test">
        <h3>Білімді тексеру</h3>
        
        <h4>Жеңіл деңгей</h4>
        <div class="quiz">
          <p><strong>1. HTML5-те "үстіңгі деректер" үшін қандай семантикалық тег қолданылады?</strong></p>
          <label><input type="radio" name="q1" value="a"> &lt;top&gt;</label>
          <label><input type="radio" name="q1" value="b"> &lt;head&gt;</label>
          <label><input type="radio" name="q1" value="c"> &lt;header&gt;</label>
          <label><input type="radio" name="q1" value="d"> &lt;heading&gt;</label>
          
          <p><strong>2. Адаптивті дизайнда қандай CSS механизм қолданылады?</strong></p>
          <label><input type="radio" name="q2" value="a"> CSS Transitions</label>
          <label><input type="radio" name="q2" value="b"> CSS Variables</label>
          <label><input type="radio" name="q2" value="c"> CSS Media Queries</label>
          <label><input type="radio" name="q2" value="d"> CSS Animations</label>
          
          <p><strong>3. Икемді сурет жасау үшін қандай CSS қасиет қолданылады?</strong></p>
          <label><input type="radio" name="q3" value="a"> width: 100%;</label>
          <label><input type="radio" name="q3" value="b"> max-width: 100%;</label>
          <label><input type="radio" name="q3" value="c"> height: auto;</label>
          <label><input type="radio" name="q3" value="d"> B және C жауаптары</label>
          
          <p><strong>4. Веб-беттің негізгі мазмұнын орналастыру үшін қандай тег дұрыс?</strong></p>
          <label><input type="radio" name="q4" value="a"> &lt;content&gt;</label>
          <label><input type="radio" name="q4" value="b"> &lt;section&gt;</label>
          <label><input type="radio" name="q4" value="c"> &lt;main&gt;</label>
          <label><input type="radio" name="q4" value="d"> &lt;body&gt;</label>

          <p><strong>5. Flexbox-тегі контейнердің элементтерін ортаға туралау үшін қандай қасиет қолданылады?</strong></p>
          <label><input type="radio" name="q5" value="a"> align-items: center;</label>
          <label><input type="radio" name="q5" value="b"> justify-content: center;</label>
          <label><input type="radio" name="q5" value="c"> text-align: center;</label>
          <label><input type="radio" name="q5" value="d"> margin: 0 auto;</label>
        </div>
        
        <h4>Орташа деңгей</h4>
        <div class="quiz">
          <p><strong>6. HTML5-те мақаланы анықтау үшін қандай семантикалық тег қолданылады?</strong></p>
          <label><input type="radio" name="q6" value="a"> &lt;post&gt;</label>
          <label><input type="radio" name="q6" value="b"> &lt;article&gt;</label>
          <label><input type="radio" name="q6" value="c"> &lt;blog&gt;</label>
          <label><input type="radio" name="q6" value="d"> &lt;content&gt;</label>
          
          <p><strong>7. Grid жүйесінде бірнеше баған орнату үшін қандай қасиет қолданылады?</strong></p>
          <label><input type="radio" name="q7" value="a"> grid-template-columns</label>
          <label><input type="radio" name="q7" value="b"> grid-columns</label>
          <label><input type="radio" name="q7" value="c"> grid-auto-columns</label>
          <label><input type="radio" name="q7" value="d"> columns-template</label>
          
          <p><strong>8. Flexbox-те бірнеше қатарға элементтерді орналастыру үшін қандай қасиет қолданылады?</strong></p>
          <label><input type="radio" name="q8" value="a"> flex-wrap: wrap;</label>
          <label><input type="radio" name="q8" value="b"> flex-flow: wrap;</label>
          <label><input type="radio" name="q8" value="c"> flex-direction: row;</label>
          <label><input type="radio" name="q8" value="d"> flex-line: multiple;</label>
          
          <p><strong>9. Веб-беттің төменгі бөлігін анықтайтын тег?</strong></p>
          <label><input type="radio" name="q9" value="a"> &lt;bottom&gt;</label>
          <label><input type="radio" name="q9" value="b"> &lt;footer&gt;</label>
          <label><input type="radio" name="q9" value="c"> &lt;end&gt;</label>
          <label><input type="radio" name="q9" value="d"> &lt;footerend&gt;</label>

          <p><strong>10. CSS-те рendіз модельіне (box model) нелер кіреді?</strong></p>
          <label><input type="radio" name="q10" value="a"> Margin, border және padding</label>
          <label><input type="radio" name="q10" value="b"> Content, padding, border және margin</label>
          <label><input type="radio" name="q10" value="c"> Width, height және margin</label>
          <label><input type="radio" name="q10" value="d"> Display, position және float</label>
        </div>
        
        <h4>Күрделі деңгей</h4>
        <div class="quiz">
          <p><strong>11. Төмендегі мысалда grid элементінің орналасуы қандай болады?<br>grid-area: 2 / 1 / 4 / 3;</strong></p>
          <label><input type="radio" name="q11" value="a"> 2-жолдан 1-бағанда, 4x3 өлшемді</label>
          <label><input type="radio" name="q11" value="b"> 2-жолдан 4-жолға және 1-бағаннан 3-бағанға дейін</label>
          <label><input type="radio" name="q11" value="c"> 1-жолдан 2-жолға және 3-бағаннан 4-бағанға дейін</label>
          <label><input type="radio" name="q11" value="d"> 2-бағаннан 1-бағанға және 4-жолдан 3-жолға дейін</label>
          
          <p><strong>12. CSS-те z-index қасиеті ненi анықтайды?</strong></p>
          <label><input type="radio" name="q12" value="a"> Элементтiң позициялау әдiсiн</label>
          <label><input type="radio" name="q12" value="b"> Элементтiң көрiну ретiн (кезектiлiгiн)</label>
          <label><input type="radio" name="q12" value="c"> Элементтiң масштаб деңгейiн</label>
          <label><input type="radio" name="q12" value="d"> Элементтiң скролл ретiн</label>
          
          <p><strong>13. SCSS пен CSS айырмашылығы неде?</strong></p>
          <label><input type="radio" name="q13" value="a"> SCSS - браузер түрлерiнiң арнайы CSS нұсқасы</label>
          <label><input type="radio" name="q13" value="b"> SCSS - CSS препроцессоры, ішкі ендіру, айнымалылар және миксиндер сияқты қосымша мүмкіндіктері бар</label>
          <label><input type="radio" name="q13" value="c"> SCSS - CSS пост-процессор</label>
          <label><input type="radio" name="q13" value="d"> SCSS - CSS Framework-тің бір түрі</label>
          
          <p><strong>14. Келесі CSS селекторы ненi таңдайды: header > nav > ul > li:nth-child(odd)</strong></p>
          <label><input type="radio" name="q14" value="a"> header тегіндегі барлық li элементтерін</label>
          <label><input type="radio" name="q14" value="b"> header ішіндегі nav ішіндегі ul ішіндегі тақ нөірлі li элементтерін</label>
          <label><input type="radio" name="q14" value="c"> бірінші және үшінші деңгейдегі барлық элементтерді</label>
          <label><input type="radio" name="q14" value="d"> header тегінен кейінгі барлық nav элементтерін</label>

          <p><strong>15. БЭМ методологиясы ненi білдіреді?</strong></p>
          <label><input type="radio" name="q15" value="a"> Браузердің элемент модификациясын</label>
          <label><input type="radio" name="q15" value="b"> Блок, элемент, модификатор (CSS класс атаулары үшін конвенция)</label>
          <label><input type="radio" name="q15" value="c"> Базалық элементтерді модельдеу</label>
          <label><input type="radio" name="q15" value="d"> Блоктық элементтерді модульдеу</label>
        </div>
        
        <div class="lesson-actions">
          <button class="complete-btn" onclick="checkQuiz(9)">Тестті тексеру</button>
          <div id="result-9"></div>
        </div>
      </section>

      <section class="practice">
        <h3>Практикалық тапсырма</h3>
        <div class="task">
          <p><strong>Тапсырма:</strong> Адаптивті портфолио сайтының негізгі HTML және CSS құрылымын жасаңыз.</p>
          
          <p>Талаптар:</p>
          <ol>
            <li>HTML5 семантикалық теgтерін дұрыс қолданыңыз</li>
            <li>Flexbox немесе Grid жүйесін қолданыңыз</li>
            <li>Кем дегенде 2 медиа-сұрауды (media queries) қосыңыз - мобильді және десктоп нұсқалары үшін</li>
            <li>БЭМ конвенциясын ұстанып CSS класс атауларын жазыңыз</li>
            <li>Жобаның барлық бөлімдерін қосыңыз - хедер, негізгі мазмұн, қосымша навигация, футер</li>
          </ol>
          
          <p>Төменде негізгі HTML5 құрылымы бар. Оны толықтырып, CSS стильдерін css style теgі ішіне жазыңыз.</p>
          
          <div class="code-editor">
            <textarea id="html-code-9">&lt;!DOCTYPE html&gt;
&lt;html lang="kk"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Менің портфолиом&lt;/title&gt;
    &lt;style&gt;
        /* Негізгі стильдер */
        
        /* Media Queries */
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- HTML кодты осы жерге жазыңыз --&gt;
&lt;/body&gt;
&lt;/html&gt;</textarea>
            <button onclick="checkCode(9)">Тексеру</button>
            <div id="result-9"></div>
          </div>
        </div>
      </section>
    `,
    correctCode: "<header>\n<main>\n<aside>\n<footer>\n@media (max-width:768px)\n@media (min-width:769px)",
    quizAnswers: { 
      q1: "c", q2: "c", q3: "d", q4: "c", q5: "b", 
      q6: "b", q7: "a", q8: "a", q9: "b", q10: "b",
      q11: "b", q12: "b", q13: "b", q14: "b", q15: "b"
    }
  }
};

// Создаем объект с русскими версиями содержимого уроков
const lessonsRu = {
  1: {
    title: "Урок 1: Основы HTML",
    content: `
      <section class="theory">
        <h2>Основные понятия HTML</h2>
        <p>HTML (HyperText Markup Language) - основной язык, определяющий структуру веб-страниц. Все современные веб-сайты создаются с помощью HTML.</p>
        
        <p>HTML состоит из тегов, которые определяют структуру содержимого. Каждый тег начинается с пары <code>&lt;тег&gt;</code> и заканчивается парой <code>&lt;/тег&gt;</code>.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4><code>&lt;!DOCTYPE html&gt;</code></h4>
            <p>Указывает версию HTML5 документа. <strong>Должен всегда быть в первой строке!</strong></p>
            <div class="example">
              <p>Пример:</p>
              <code>&lt;!DOCTYPE html&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4><code>&lt;html&gt;</code></h4>
            <p>Содержит весь документ. Атрибут <code>lang</code> указывает язык.</p>
            <div class="example">
              <p>Пример:</p>
              <code>&lt;html lang="ru"&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4><code>&lt;head&gt;</code></h4>
            <p>Метаинформация (заголовок, стили, скрипты). Предназначена для браузера.</p>
            <div class="example">
              <p>Пример:</p>
              <code>&lt;head&gt;\n  &lt;title&gt;Заголовок сайта&lt;/title&gt;\n&lt;/head&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4><code>&lt;body&gt;</code></h4>
            <p>Содержит основное видимое содержимое страницы.</p>
            <div class="example">
              <p>Пример:</p>
              <code>&lt;body&gt;\n  &lt;h1&gt;Мой первый сайт&lt;/h1&gt;\n&lt;/body&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4><code>&lt;title&gt;</code></h4>
            <p>Заголовок страницы, отображаемый во вкладке браузера.</p>
            <div class="example">
              <p>Пример:</p>
              <code>&lt;title&gt;Мой сайт&lt;/title&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Мета теги</h4>
            <p>Дополнительная информация о странице (кодировка, ключевые слова и т.д.).</p>
            <div class="example">
              <p>Пример:</p>
              <code>&lt;meta charset="UTF-8"&gt;</code>
            </div>
          </div>
        </div>
        
        <h3>Основная структура HTML файла</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Заголовок страницы&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Основное содержимое сайта здесь --&gt;
    &lt;h1&gt;Моя первая веб-страница&lt;/h1&gt;
    &lt;p&gt;Это мой первый HTML код.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </section>

      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/-jRzkDSMwH4" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe src="https://www.youtube.com/embed/gNclCoxyIf8" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <section class="practice">
        <h3>Практическое задание</h3>
        <div class="task">
          <p>Используя приведенную выше теорию, создайте базовую структуру HTML:</p>
          <ol>
            <li>Добавьте DOCTYPE декларацию</li>
            <li>Укажите русский язык (lang="ru")</li>
            <li>Добавьте раздел head (содержимое уже предоставлено)</li>
            <li>Добавьте тег body и поместите в него заголовок h1</li>
          </ol>
          
          <div class="code-editor">
            <textarea id="html-code-1">&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Мой сайт&lt;/title&gt;
&lt;/head&gt;</textarea>
            <button onclick="checkCode(1)">Проверить</button>
            <div id="result-1"></div>
          </div>
        </div>
      </section>
    `,
    practiceTask: `
      <h3>Домашнее задание</h3>
      <p>Составьте конспект по основам HTML. Конспект должен охватывать следующие темы:</p>
      <ol>
        <li>Что такое HTML и его история</li>
        <li>Основная структура HTML документа</li>
        <li>Теги и их атрибуты</li>
        <li>Основные метатеги и их значение</li>
      </ol>
      <p>Конспект должен быть лаконичным и понятным. Добавьте примеры и иллюстрации.</p>
    `,
    correctCode: "<!DOCTYPE html>\n<html lang=\"ru\">\n<body>\n<h1>",
    quizAnswers: {}
  },
  
  2: {
    title: "Урок 2: HTML теги и атрибуты",
    content: `
      <section class="theory">
        <h2>Типы элементов HTML</h2>
        <p>Элементы HTML делятся на несколько типов:</p>
        <ul>
          <li><strong>Текстовые элементы</strong> - элементы, используемые для форматирования текста</li>
          <li><strong>Ссылки и изображения</strong> - инструменты навигации и визуализации на сайте</li>
          <li><strong>Списки и таблицы</strong> - элементы для организации информации</li>
          <li><strong>Формы</strong> - элементы взаимодействия с пользователем</li>
        </ul>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Текстовые элементы</h4>
            <p>Теги для форматирования текста</p>
            <div class="example">
              <p>Примеры:</p>
              <code>&lt;p&gt;</code> - абзац<br>
              <code>&lt;h1&gt;-&lt;h6&gt;</code> - заголовки<br>
              <code>&lt;strong&gt;</code> - жирный текст<br>
              <code>&lt;em&gt;</code> - курсивный текст
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Ссылки</h4>
            <p>Создание ссылок на другие страницы или сайты</p>
            <div class="example">
              <p>Синтаксис:</p>
              <code>&lt;a href="url"&gt;текст ссылки&lt;/a&gt;</code><br><br>
              <p>Пример:</p>
              <code>&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</code>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Изображения</h4>
            <p>Тег для отображения изображений</p>
            <div class="example">
              <p>Синтаксис:</p>
              <code>&lt;img src="image.jpg" alt="описание"&gt;</code><br><br>
              <p>Пример:</p>
              <code>&lt;img src="logo.png" alt="Логотип сайта"&gt;</code>
            </div>
          </div>
        </div>
        
        <h3>Атрибуты HTML элементов</h3>
        <p>Атрибуты придают HTML элементам дополнительные свойства:</p>
        <ul>
          <li><code>id</code> - уникальный идентификатор элемента</li>
          <li><code>class</code> - класс элемента (для стилизации)</li>
          <li><code>style</code> - применение стиля непосредственно к элементу</li>
          <li><code>title</code> - дополнительная информация (отображается при наведении)</li>
        </ul>
        
        <pre><code>&lt;p id="paragraph1" class="important" style="color: blue;" title="Важная информация"&gt;
  Это абзац с атрибутами.
&lt;/p&gt;</code></pre>
      </section>
      
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/7D3SrPTc43A" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe src="https://www.youtube.com/embed/bBnqtbIKmZI" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <section class="practice">
        <h3>Практическое задание</h3>
        <div class="task">
          <p>Создайте HTML-страницу, которая включает:</p>
          <ol>
            <li>Два уровня заголовков (h1, h2)</li>
            <li>Абзацы с текстом (p)</li>
            <li>Выделение текста жирным и курсивом</li>
            <li>Ссылку на любой внешний сайт</li>
            <li>Изображение (используйте URL-адрес любого изображения)</li>
          </ol>
          
          <div class="quiz">
            <p><strong>Какой тег используется для обозначения абзаца в HTML?</strong></p>
            <label><input type="radio" name="quiz2" value="a"> <paragraph></label>
            <label><input type="radio" name="quiz2" value="b"> <p></label>
            <label><input type="radio" name="quiz2" value="c"> <text></label>
            <label><input type="radio" name="quiz2" value="d"> <par></label>
            <button onclick="checkQuiz(2, 'b')">Проверить тест</button>
            <div id="quiz-result-2"></div>
          </div>
          
          <div class="quiz">
            <p><strong>Какой тег используется для создания ссылки?</strong></p>
            <label><input type="radio" name="quiz3" value="a"> <link></label>
            <label><input type="radio" name="quiz3" value="b"> <url></label>
            <label><input type="radio" name="quiz3" value="c"> <a></label>
            <label><input type="radio" name="quiz3" value="d"> <href></label>
            <button onclick="checkQuiz(3, 'c')">Проверить тест</button>
            <div id="quiz-result-3"></div>
          </div>
          
          <div class="quiz">
            <p><strong>Какой тег используется для вставки изображения?</strong></p>
            <label><input type="radio" name="quiz4" value="a"> <img></label>
            <label><input type="radio" name="quiz4" value="b"> <picture></label>
            <label><input type="radio" name="quiz4" value="c"> <image></label>
            <label><input type="radio" name="quiz4" value="d"> <src></label>
            <button onclick="checkQuiz(4, 'a')">Проверить тест</button>
            <div id="quiz-result-4"></div>
          </div>
          
          <div class="quiz">
            <p><strong>Какая запись атрибута правильная?</strong></p>
            <label><input type="radio" name="quiz5" value="a"> <p attribute="value"></label>
            <label><input type="radio" name="quiz5" value="b"> <p (attribute)="value"></label>
            <label><input type="radio" name="quiz5" value="c"> <p "attribute"="value"></label>
            <label><input type="radio" name="quiz5" value="d"> <p attribute:value></label>
            <button onclick="checkQuiz(5, 'a')">Проверить тест</button>
            <div id="quiz-result-5"></div>
          </div>
        </div>
      </section>
    `,
    practiceTask: `
      <h3>Домашнее задание</h3>
      <p>Создайте HTML-страницу "О себе", которая должна содержать:</p>
      <ol>
        <li>Заголовок с вашим именем</li>
        <li>Подзаголовок с вашей профессией или интересами</li>
        <li>Краткую биографию (2-3 абзаца)</li>
        <li>Список ваших навыков или хобби</li>
        <li>Изображение (аватар или фото)</li>
        <li>Ссылки на социальные сети или контакты</li>
      </ol>
      <p>Используйте различные HTML-элементы (h1, h2, p, ul/ol, img, a) и атрибуты (id, class, style, title).</p>
    `,
    correctCode: "",
    quizAnswers: {
      "quiz2": "b",
      "quiz3": "c",
      "quiz4": "a",
      "quiz5": "a"
    }
  },
  
  3: {
    title: "Урок 3: Таблицы и формы",
    content: `
      <h2>Создание таблиц</h2>
      <p>Таблицы создаются с помощью тегов &lt;table&gt;, &lt;tr&gt;, &lt;th&gt; и &lt;td&gt;.</p>
      
      <h3>Основные элементы таблиц:</h3>
      <ul>
        <li><code>&lt;table&gt;</code> - определяет таблицу</li>
        <li><code>&lt;tr&gt;</code> (table row) - создает строку таблицы</li>
        <li><code>&lt;th&gt;</code> (table header) - определяет заголовок таблицы</li>
        <li><code>&lt;td&gt;</code> (table data) - создает ячейку таблицы</li>
        <li><code>&lt;caption&gt;</code> - заголовок таблицы</li>
        <li><code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> - разделы таблицы</li>
      </ul>
      
      <h3>Пример:</h3>
      <pre><code>&lt;table border="1"&gt;
    &lt;caption&gt;Список студентов&lt;/caption&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;ФИО&lt;/th&gt;
            &lt;th&gt;Группа&lt;/th&gt;
            &lt;th&gt;Оценка&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Иванов Иван&lt;/td&gt;
            &lt;td&gt;CS-101&lt;/td&gt;
            &lt;td&gt;95&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Петрова Анна&lt;/td&gt;
            &lt;td&gt;CS-102&lt;/td&gt;
            &lt;td&gt;88&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

      <h2>HTML формы</h2>
      <p>Формы - элементы для сбора данных от пользователей.</p>
      
      <h3>Основные элементы форм:</h3>
      <ul>
        <li><code>&lt;form&gt;</code> - определяет форму</li>
        <li><code>&lt;input&gt;</code> - поле ввода (текст, чекбокс, радио и др.)</li>
        <li><code>&lt;textarea&gt;</code> - многострочное текстовое поле</li>
        <li><code>&lt;select&gt;</code> и <code>&lt;option&gt;</code> - выбор из списка</li>
        <li><code>&lt;button&gt;</code> - кнопка</li>
        <li><code>&lt;label&gt;</code> - метка поля</li>
      </ul>
      
      <h3>Пример формы:</h3>
      <pre><code>&lt;form action="/submit" method="post"&gt;
    &lt;label for="name"&gt;ФИО:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" required&gt;
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
    
    &lt;label for="message"&gt;Сообщение:&lt;/label&gt;
    &lt;textarea id="message" name="message" rows="4"&gt;&lt;/textarea&gt;
    
    &lt;button type="submit"&gt;Отправить&lt;/button&gt;
&lt;/form&gt;</code></pre>

<div class="video-container">
  <div class="video-kk video-wrapper" style="display:none;">
    <iframe src="https://www.youtube.com/embed/rZig2BSw09w" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="video-ru video-wrapper">
    <iframe src="https://www.youtube.com/embed/jWXGLAD2BUU" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

      <h3>Практика:</h3>
      <div class="task">
        <p><strong>Задание:</strong> Дополните следующую таблицу:</p>
        <ol>
          <li>Добавьте заголовок таблицы "Учебный план"</li>
          <li>В первую строку добавьте столбцы "Предмет" и "Время"</li>
          <li>Во второй строке укажите любой предмет и время</li>
          <li>Добавьте третью строку</li>
        </ol>
        
        <div class="code-editor">
          <textarea id="html-code-3">&lt;table border="1"&gt;
    &lt;caption&gt;&lt;/caption&gt;
    &lt;tr&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    &lt;/tr&gt;
&lt;/table&gt;</textarea>
          <button onclick="checkCode(3)">Проверить</button>
          <div id="result-3"></div>
        </div>
      </div>
    `,
    practiceTask: `
      <h3>Домашнее задание</h3>
      <p>Составьте конспект о таблицах и формах HTML. Конспект должен охватывать следующие темы:</p>
      <ol>
        <li>Все элементы таблицы и их применение</li>
        <li>Возможности стилизации таблиц</li>
        <li>Типы форм и их элементы</li>
        <li>Методы валидации форм</li>
      </ol>
      <p>Продемонстрируйте в конспекте минимум 3 практических примера таблиц и форм.</p>
    `,
    correctCode: "Учебный план\n<th>Предмет</th>\n<th>Время</th>\n<td>",
    quizAnswers: {}
  },

  4: {
    title: "Урок 4: Основы CSS",
    content: `
      <section class="theory">
        <h2>Основные понятия CSS</h2>
        <p>CSS (Cascading Style Sheets) - язык стилей, определяющий внешний вид веб-страниц. Используется для придания внешнего вида HTML-структуре.</p>
        
        <h3>Способы применения CSS:</h3>
        <ol>
          <li><strong>Внутренний CSS</strong> - через тег <code>&lt;style&gt;</code> в HTML файле</li>
          <li><strong>Внешний CSS</strong> - в отдельном .css файле, подключается через тег <code>&lt;link&gt;</code></li>
          <li><strong>Инлайн CSS</strong> - непосредственно в HTML элементе через атрибут <code>style</code></li>
        </ol>
        
        <pre><code>/* Пример внешнего CSS файла */
p {
  color: blue;
  font-size: 16px;
}

h1 {
  color: darkblue;
  font-size: 24px;
  text-align: center;
}</code></pre>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Селекторы</h4>
            <p>Определяют, к каким элементам применяется стиль:</p>
            <div class="example">
              <code>p {color: red;}</code> - все абзацы<br>
              <code>.class {color: blue;}</code> - все элементы с class="class"<br>
              <code>#id {color: green;}</code> - элемент с id="id"
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Свойства</h4>
            <p>Изменяют внешний вид элементов:</p>
            <div class="example">
              <code>color</code> - цвет текста<br>
              <code>font-size</code> - размер шрифта<br>
              <code>margin</code> - внешний отступ<br>
              <code>padding</code> - внутренний отступ<br>
              <code>background-color</code> - цвет фона
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Значения</h4>
            <p>Конкретные параметры свойств:</p>
            <div class="example">
              <code>red, #FF0000, rgb(255,0,0)</code> - значения цветов<br>
              <code>16px, 1.5em, 2rem</code> - единицы измерения<br>
              <code>20%, 200px, auto</code> - размеры позиционирования
            </div>
          </div>
        </div>
        
        <h3>Синтаксис CSS</h3>
        <p>CSS стиль состоит из селектора, свойства и пары значений:</p>
        <pre><code>селектор {
  свойство1: значение1;
  свойство2: значение2;
}</code></pre>
      </section>

      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/innvl7XNF7o" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe src="https://www.youtube.com/embed/mA6EaGs6rak" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <section class="test">
        <h3>Проверка знаний</h3>
        <div class="quiz">
          <p><strong>1. Полная расшифровка аббревиатуры CSS?</strong></p>
          <label><input type="radio" name="q1" value="a"> Computer Style Sheets</label>
          <label><input type="radio" name="q1" value="b"> Cascading Style Sheets</label>
          <label><input type="radio" name="q1" value="c"> Creative Style Sheets</label>
          <label><input type="radio" name="q1" value="d"> Colorful Style Sheets</label>
        </div>
      </section>
    `,
    practiceTask: `
      <h3>Домашнее задание</h3>
      <p>Создайте конспект по основам CSS, включающий следующие темы:</p>
      <ol>
        <li>История и назначение CSS</li>
        <li>Три способа подключения CSS к HTML</li>
        <li>Основные селекторы CSS и их приоритеты</li>
        <li>Основные свойства для работы с текстом и цветом</li>
        <li>Box-модель CSS</li>
      </ol>
      <p>Создайте простую HTML страницу и продемонстрируйте применение CSS стилей различными способами с практическими примерами.</p>
    `,
    correctCode: "",
    quizAnswers: {
      "q1": "b"
    }
  },

  5: {
    title: "Урок 5: CSS селекторы",
    content: `
      <h2>CSS селекторы и их использование</h2>
      <p>Селекторы CSS позволяют точно выбирать элементы для стилизации. От их правильного использования зависит эффективность ваших стилей.</p>
      
      <h3>Базовые селекторы</h3>
      <ul>
        <li><code>*</code> - универсальный селектор (все элементы)</li>
        <li><code>tag</code> - селектор по имени тега (например, <code>p</code>, <code>h1</code>)</li>
        <li><code>#id</code> - селектор по идентификатору</li>
        <li><code>.class</code> - селектор по классу</li>
      </ul>
      
      <h3>Комбинаторы селекторов</h3>
      <ul>
        <li><code>A, B</code> - выбирает элементы A и B</li>
        <li><code>A B</code> - выбирает элементы B, вложенные в A (потомки)</li>
        <li><code>A > B</code> - выбирает элементы B, которые являются прямыми потомками A</li>
        <li><code>A + B</code> - выбирает элемент B, который идет сразу после A (соседние)</li>
        <li><code>A ~ B</code> - выбирает элементы B, которые следуют за A (все соседи)</li>
      </ul>
      
      <h3>Селекторы атрибутов</h3>
      <ul>
        <li><code>[attr]</code> - элементы с атрибутом attr</li>
        <li><code>[attr=value]</code> - элементы с атрибутом attr, значение которого равно value</li>
        <li><code>[attr^=value]</code> - элементы с атрибутом attr, значение которого начинается с value</li>
        <li><code>[attr$=value]</code> - элементы с атрибутом attr, значение которого заканчивается на value</li>
        <li><code>[attr*=value]</code> - элементы с атрибутом attr, значение которого содержит value</li>
      </ul>
      
      <h3>Псевдоклассы и псевдоэлементы</h3>
      <ul>
        <li><code>:hover</code> - элемент при наведении на него курсора</li>
        <li><code>:active</code> - элемент в момент щелчка по нему</li>
        <li><code>:focus</code> - элемент, находящийся в фокусе</li>
        <li><code>:first-child</code> - первый дочерний элемент своего родителя</li>
        <li><code>:last-child</code> - последний дочерний элемент своего родителя</li>
        <li><code>:nth-child(n)</code> - n-й дочерний элемент своего родителя</li>
        <li><code>::before</code> - добавляет содержимое перед элементом</li>
        <li><code>::after</code> - добавляет содержимое после элемента</li>
        <li><code>::first-letter</code> - первая буква элемента</li>
        <li><code>::first-line</code> - первая строка элемента</li>
      </ul>
      
      <h3>Примеры использования селекторов</h3>
      <pre><code>/* Все элементы с классом menu внутри элемента с id header */
#header .menu {
    color: blue;
}

/* Все ссылки при наведении курсора */
a:hover {
    text-decoration: none;
    color: red;
}

/* Все элементы input типа text */
input[type="text"] {
    border: 1px solid #ccc;
    padding: 5px;
}

/* Первая буква в каждом абзаце */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
}

/* Нечетные строки таблицы */
tr:nth-child(odd) {
    background-color: #f2f2f2;
}</code></pre>

<div class="video-container">
  <div class="video-kk video-wrapper" style="display:none;">
    <iframe src="https://www.youtube.com/embed/oq7d3vk6zT8" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="video-ru video-wrapper">
    <iframe src="https://www.youtube.com/embed/oq7d3vk6zT8" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

    `,
    practiceTask: `
      <h3>Домашнее задание</h3>
      <p>Создайте HTML-страницу с различными элементами и примените к ним CSS стили, используя разные типы селекторов:</p>
      <ol>
        <li>Базовые селекторы (тег, класс, id)</li>
        <li>Комбинированные селекторы (потомки, дочерние элементы)</li>
        <li>Селекторы атрибутов</li>
        <li>Псевдоклассы и псевдоэлементы</li>
      </ol>
      <p>Прокомментируйте каждый селектор, объясняя, какие именно элементы он выбирает и как работает.</p>
    `,
    correctCode: "",
    quizAnswers: {}
  },
  
  6: {
    title: "Урок 6: Система Flexbox",
    content: `
      <h2>Flexbox - гибкая система макетов</h2>
      <p>Flexbox (Flexible Box Layout) - это технология CSS, разработанная для простого и эффективного распределения пространства между элементами в контейнере, даже если их размер неизвестен или динамичен.</p>
      
      <h3>Основные понятия Flexbox</h3>
      <ul>
        <li><strong>Flex-контейнер</strong> - родительский элемент с <code>display: flex</code></li>
        <li><strong>Flex-элементы</strong> - прямые потомки flex-контейнера</li>
        <li><strong>Главная ось</strong> (main axis) - основная ось, по которой размещаются flex-элементы</li>
        <li><strong>Поперечная ось</strong> (cross axis) - перпендикулярная главной оси</li>
      </ul>
      
      <h3>Свойства flex-контейнера</h3>
      <ul>
        <li><code>display: flex | inline-flex</code> - задает flex-контейнер</li>
        <li><code>flex-direction: row | row-reverse | column | column-reverse</code> - направление главной оси</li>
        <li><code>flex-wrap: nowrap | wrap | wrap-reverse</code> - перенос flex-элементов</li>
        <li><code>justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly</code> - выравнивание по главной оси</li>
        <li><code>align-items: flex-start | flex-end | center | baseline | stretch</code> - выравнивание по поперечной оси</li>
        <li><code>align-content: flex-start | flex-end | center | space-between | space-around | stretch</code> - выравнивание строк при переносе</li>
        <li><code>gap, row-gap, column-gap</code> - отступы между flex-элементами</li>
      </ul>
      
      <h3>Свойства flex-элементов</h3>
      <ul>
        <li><code>order</code> - порядок отображения элемента</li>
        <li><code>flex-grow</code> - коэффициент увеличения</li>
        <li><code>flex-shrink</code> - коэффициент сжатия</li>
        <li><code>flex-basis</code> - базовый размер</li>
        <li><code>flex</code> - сокращенное свойство для flex-grow, flex-shrink и flex-basis</li>
        <li><code>align-self</code> - индивидуальное выравнивание элемента по поперечной оси</li>
      </ul>
      
      <h3>Примеры использования Flexbox</h3>
      <pre><code>/* Создание простого горизонтального меню */
.menu {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f1f1f1;
}

.menu-item {
  padding: 5px 10px;
}

/* Центрирование элемента по горизонтали и вертикали */
.container {
  display: flex;
  justify-content: center; /* центрирование по горизонтали */
  align-items: center; /* центрирование по вертикали */
  height: 300px;
}

/* Карточки с равной шириной */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px; /* flex-grow, flex-shrink, flex-basis */
  padding: 20px;
  border: 1px solid #ccc;
}</code></pre>

      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none;">
          <iframe src="https://www.youtube.com/embed/mMBQl_ERK0g" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe src="https://www.youtube.com/embed/mMBQl_ERK0g" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <h3>Практика с Flexbox</h3>
      <div class="task">
        <p>Создайте простую панель навигации с использованием Flexbox. Требования:</p>
        <ol>
          <li>Горизонтальное меню с равномерно распределенными элементами</li>
          <li>Логотип слева, пункты меню по центру и кнопка справа</li>
          <li>Адаптивность: при уменьшении экрана элементы должны сжиматься</li>
        </ol>
      </div>
    `,
    practiceTask: `
      <h3>Домашнее задание</h3>
      <p>Создайте макет карточной галереи с использованием Flexbox:</p>
      <ol>
        <li>Создайте не менее 6 карточек разного содержания (изображение, заголовок, описание)</li>
        <li>Карточки должны равномерно распределяться по ширине контейнера</li>
        <li>При недостатке места должен происходить перенос на новую строку</li>
        <li>Добавьте отступы между карточками</li>
        <li>Каждая карточка должна иметь одинаковую высоту, независимо от содержимого</li>
        <li>Сделайте карточки адаптивными под разные размеры экрана</li>
      </ol>
      <p>Примените различные свойства Flexbox для достижения результата и прокомментируйте их в CSS-коде.</p>
    `,
    correctCode: "",
    quizAnswers: {}
  },
  
  7: {
    title: "Урок 7: Система Grid",
    content: `
      <h2>CSS Grid Layout - система макетов для двумерного расположения</h2>
      <p>CSS Grid Layout (или просто Grid) - мощный инструмент для создания двумерных макетов страниц и компонентов в CSS. В отличие от Flexbox, который оптимизирован для одномерных макетов, Grid позволяет контролировать как строки, так и столбцы.</p>
      
      <h3>Основные понятия Grid</h3>
      <ul>
        <li><strong>Grid-контейнер</strong> - элемент с <code>display: grid</code></li>
        <li><strong>Grid-элементы</strong> - прямые потомки grid-контейнера</li>
        <li><strong>Grid-линии</strong> - горизонтальные и вертикальные линии, которые формируют структуру сетки</li>
        <li><strong>Grid-треки</strong> - пространство между соседними grid-линиями (строки и столбцы)</li>
        <li><strong>Grid-ячейки</strong> - пересечения строк и столбцов</li>
        <li><strong>Grid-области</strong> - прямоугольные области, состоящие из нескольких ячеек</li>
      </ul>
      
      <h3>Свойства Grid-контейнера</h3>
      <ul>
        <li><code>display: grid | inline-grid</code> - создает grid-контейнер</li>
        <li><code>grid-template-columns</code> - определяет количество и размер столбцов</li>
        <li><code>grid-template-rows</code> - определяет количество и размер строк</li>
        <li><code>grid-template-areas</code> - определяет grid-области по именам</li>
        <li><code>gap, row-gap, column-gap</code> - отступы между grid-элементами</li>
        <li><code>justify-items</code> - выравнивание элементов по горизонтали</li>
        <li><code>align-items</code> - выравнивание элементов по вертикали</li>
        <li><code>justify-content</code> - выравнивание сетки по горизонтали внутри контейнера</li>
        <li><code>align-content</code> - выравнивание сетки по вертикали внутри контейнера</li>
      </ul>
      
      <h3>Свойства Grid-элементов</h3>
      <ul>
        <li><code>grid-column</code> - определяет положение элемента по столбцам</li>
        <li><code>grid-row</code> - определяет положение элемента по строкам</li>
        <li><code>grid-area</code> - определяет положение элемента через именованную область</li>
        <li><code>justify-self</code> - выравнивание элемента по горизонтали</li>
        <li><code>align-self</code> - выравнивание элемента по вертикали</li>
      </ul>
      
      <h3>Примеры использования Grid</h3>
      <pre><code>/* Простая сетка 3x3 с равными ячейками */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 столбца с равной шириной */
  grid-template-rows: repeat(3, 100px); /* 3 строки высотой 100px */
  gap: 10px; /* отступы между ячейками */
}

/* Макет с именованными областями */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Размещение элементов с указанием линий сетки */
.item1 {
  grid-column: 1 / 3; /* от 1-й до 3-й линии (занимает 2 столбца) */
  grid-row: 1 / 2; /* от 1-й до 2-й линии (занимает 1 строку) */
}

/* Использование fr единицы и функции repeat */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}</code></pre>

<div class="video-container">
  <div class="video-kk video-wrapper" style="display:none;">
    <iframe src="https://www.youtube.com/embed/9aF0lYlgVEg" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="video-ru video-wrapper">
    <iframe src="https://www.youtube.com/embed/9aF0lYlgVEg" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

      <h3>Практика с Grid</h3>
      <div class="task">
        <p>Создайте макет страницы с помощью Grid, включающий:</p>
        <ol>
          <li>Шапку сайта на всю ширину</li>
          <li>Боковую панель слева</li>
          <li>Основное содержимое справа</li>
          <li>Подвал сайта на всю ширину</li>
        </ol>
        <p>Используйте grid-template-areas для определения структуры.</p>
      </div>
    `,
    practiceTask: `
      <h3>Домашнее задание</h3>
      <p>Создайте адаптивную фотогалерею с использованием CSS Grid:</p>
      <ol>
        <li>Галерея должна содержать не менее 12 изображений</li>
        <li>На больших экранах должно быть 4 изображения в ряд</li>
        <li>На средних экранах - 3 изображения в ряд</li>
        <li>На маленьких экранах - 2 изображения в ряд</li>
        <li>На мобильных устройствах - 1 изображение</li>
        <li>Некоторые изображения должны занимать 2 ячейки по горизонтали и/или вертикали</li>
        <li>Добавьте отступы между изображениями</li>
      </ol>
      <p>Используйте медиа-запросы для адаптивности и комментируйте каждое свойство Grid в вашем CSS.</p>
    `,
    correctCode: "",
    quizAnswers: {}
  },
  
  8: {
    title: "Урок 8: Позиционирование в CSS",
    content: `
      <h2>CSS Позиционирование</h2>
      <p>Позиционирование в CSS позволяет контролировать расположение элементов на странице различными способами. Свойство <code>position</code> определяет тип позиционирования элемента.</p>
      
      <h3>Типы позиционирования</h3>
      <ul>
        <li><code>position: static</code> - стандартное расположение элементов в потоке документа (по умолчанию)</li>
        <li><code>position: relative</code> - позиционирование относительно нормального положения элемента</li>
        <li><code>position: absolute</code> - позиционирование относительно ближайшего позиционированного родителя</li>
        <li><code>position: fixed</code> - позиционирование относительно окна браузера, элемент остается на месте при прокрутке</li>
        <li><code>position: sticky</code> - гибрид relative и fixed, "прилипает" при достижении определенной позиции</li>
      </ul>
      
      <h3>Свойства позиционирования</h3>
      <ul>
        <li><code>top</code> - расстояние от верхнего края</li>
        <li><code>right</code> - расстояние от правого края</li>
        <li><code>bottom</code> - расстояние от нижнего края</li>
        <li><code>left</code> - расстояние от левого края</li>
        <li><code>z-index</code> - порядок наложения элементов (чем больше значение, тем "выше" элемент)</li>
      </ul>
      
      <h3>Примеры использования позиционирования</h3>
      <pre><code>/* Относительное позиционирование */
.relative-box {
  position: relative;
  top: 20px;
  left: 20px;
  /* Смещение на 20px вниз и вправо от нормального положения */
}

/* Абсолютное позиционирование */
.parent {
  position: relative; /* Необходимо для абсолютного позиционирования дочернего элемента */
  height: 200px;
}

.absolute-box {
  position: absolute;
  top: 0;
  right: 0;
  /* Элемент будет размещен в верхнем правом углу родителя */
}

/* Фиксированное позиционирование */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* Шапка сайта, которая остается видимой при прокрутке */
}

/* Липкое позиционирование */
.sticky-sidebar {
  position: sticky;
  top: 20px;
  /* Боковая панель, которая "прилипает" при прокрутке, 
     когда достигает 20px от верхнего края окна */
}

/* Перекрывающиеся элементы */
.bottom-layer {
  z-index: 1;
}

.top-layer {
  z-index: 2; /* Будет отображаться поверх bottom-layer */
}</code></pre>

<div class="video-container">
  <div class="video-kk video-wrapper" style="display:none;">
    <iframe src="https://www.youtube.com/embed/3N5-ebjyL8w" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="video-ru video-wrapper">
    <iframe src="https://www.youtube.com/embed/3N5-ebjyL8w" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

      <h3>Практика с позиционированием</h3>
      <div class="task">
        <p>Создайте страницу с несколькими примерами позиционирования:</p>
        <ol>
          <li>Фиксированная навигационная панель вверху страницы</li>
          <li>Кнопка "Наверх", которая фиксируется в нижнем правом углу экрана</li>
          <li>Всплывающее окно, которое центрируется по середине экрана</li>
          <li>Липкий элемент, который следует за прокруткой на определенном участке</li>
        </ol>
      </div>
    `,
    practiceTask: `
      <h3>Домашнее задание</h3>
      <p>Создайте макет современного веб-сайта с использованием различных типов позиционирования:</p>
      <ol>
        <li>Фиксированная навигационная панель, которая всегда видна при прокрутке</li>
        <li>Боковое меню, которое является "липким" и следует за пользователем</li>
        <li>Модальное окно для формы обратной связи (по умолчанию скрыто, должна быть кнопка для его отображения)</li>
        <li>Выпадающее меню для основных разделов сайта</li>
        <li>Кнопка "Вернуться наверх", которая появляется после прокрутки определенного расстояния</li>
        <li>Карточки с информацией, некоторые элементы которых позиционированы абсолютно (например, значки или метки)</li>
      </ol>
      <p>Используйте различные типы позиционирования (relative, absolute, fixed, sticky) и z-index для создания многослойного дизайна.</p>
    `,
    correctCode: "",
    quizAnswers: {}
  },
  
  9: {
    title: "Урок 9: Финальный проект",
    content: `
      <h2>Создание полноценного веб-сайта</h2>
      <p>В этом уроке мы соберем все полученные знания и создадим полноценный адаптивный веб-сайт, используя HTML и CSS.</p>
      
      <h3>Этапы разработки веб-сайта</h3>
      <ol>
        <li><strong>Планирование структуры сайта</strong> - определение разделов и страниц</li>
        <li><strong>Создание прототипа (макета)</strong> - визуализация дизайна и расположения элементов</li>
        <li><strong>Разработка HTML-структуры</strong> - создание семантической разметки контента</li>
        <li><strong>Стилизация с помощью CSS</strong> - применение стилей к HTML-элементам</li>
        <li><strong>Адаптация под различные устройства</strong> - создание медиа-запросов для адаптивности</li>
        <li><strong>Тестирование</strong> - проверка функциональности и отображения на разных устройствах</li>
        <li><strong>Оптимизация</strong> - улучшение производительности и удобства использования</li>
      </ol>
      
      <h3>Структура проекта</h3>
      <p>Наш финальный проект будет содержать:</p>
      <ul>
        <li>Главную страницу с информацией о сайте</li>
        <li>Страницу "О нас" с информацией о компании/команде</li>
        <li>Страницу "Услуги" с описанием предлагаемых услуг</li>
        <li>Страницу "Портфолио" с галереей работ</li>
        <li>Страницу "Контакты" с формой обратной связи</li>
      </ul>
      
      <h3>Компоненты веб-сайта</h3>
      <ul>
        <li><strong>Шапка (header)</strong> - логотип, навигационное меню, контактная информация</li>
        <li><strong>Основной контент (main)</strong> - различные секции с информацией</li>
        <li><strong>Боковая панель (sidebar)</strong> - дополнительная навигация или информация</li>
        <li><strong>Подвал (footer)</strong> - контактная информация, навигация, авторские права</li>
        <li><strong>Навигационное меню</strong> - ссылки на разделы сайта</li>
        <li><strong>Формы</strong> - для обратной связи или поиска</li>
        <li><strong>Кнопки CTA</strong> (Call to Action) - призывы к действию</li>
        <li><strong>Медиа-контент</strong> - изображения, видео, иконки</li>
      </ul>
      
      <h3>Технологии и подходы</h3>
      <ul>
        <li><strong>HTML5</strong> - семантическая структура документа</li>
        <li><strong>CSS3</strong> - стилизация и анимации</li>
        <li><strong>Flexbox и Grid</strong> - создание сложных макетов</li>
        <li><strong>CSS-переменные</strong> - для единой цветовой схемы</li>
        <li><strong>Медиа-запросы</strong> - для адаптивности</li>
        <li><strong>Mobile First</strong> - подход к дизайну, начиная с мобильных устройств</li>
        <li><strong>Оптимизация изображений</strong> - для ускорения загрузки страницы</li>
      </ul>

<div class="video-container">
  <div class="video-kk video-wrapper" style="display:none;">
    <iframe src="https://www.youtube.com/embed/GJ55C8Gx7gU" frameborder="0" allowfullscreen></iframe>
  </div>
  <div class="video-ru video-wrapper">
    <iframe src="https://www.youtube.com/embed/GJ55C8Gx7gU" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

      <h3>Практика финального проекта</h3>
      <div class="task">
        <p><strong>Ваша задача:</strong> Создать полноценный адаптивный веб-сайт.</p>
        <p>Минимальные требования к проекту:</p>
        <ol>
          <li>Минимум 5 HTML-страниц со связанной навигацией</li>
          <li>Адаптивный дизайн (мобильные устройства, планшеты, компьютеры)</li>
          <li>Семантические HTML5-элементы (header, nav, main, section, article, footer)</li>
          <li>Использование Flexbox и/или Grid для макетов</li>
          <li>Формы с проверкой данных (валидацией)</li>
          <li>Анимации и эффекты при наведении</li>
          <li>Единая цветовая схема и типографика</li>
          <li>Оптимизированные изображения</li>
        </ol>
      </div>
    `,
    practiceTask: `
      <h3>Финальное задание курса</h3>
      <p>Разработайте полноценный адаптивный веб-сайт для реального или выдуманного бизнеса/проекта.</p>
      <p>Требования к проекту:</p>
      <ol>
        <li>Не менее 5 связанных между собой страниц (например, Главная, О нас, Услуги, Портфолио, Контакты)</li>
        <li>Полностью адаптивный дизайн с тремя точками перелома (мобильные устройства, планшеты, десктоп)</li>
        <li>Семантическая HTML5-структура с правильным использованием тегов</li>
        <li>Использование Flexbox и Grid для создания сложных макетов</li>
        <li>Единый стиль оформления, включая цветовую схему и типографику</li>
        <li>Форма обратной связи с валидацией</li>
        <li>Анимации и интерактивные элементы (меню, кнопки, карточки и т.д.)</li>
        <li>Оптимизированные изображения и быстрая загрузка страниц</li>
        <li>Правильное использование позиционирования элементов</li>
        <li>Документация с описанием функциональности и особенностей реализации</li>
      </ol>
      <p>Сайт должен демонстрировать все навыки, полученные в ходе курса, и быть готовым к размещению в интернете.</p>
    `,
    correctCode: "",
    quizAnswers: {}
  }
};

// Теперь нужно добавить JavaScript код для переключения видео по языку
document.addEventListener("DOMContentLoaded", function() {
  // ... existing code ...
  
  // Функция для обновления видимости видео на основе выбранного языка
  function updateVideos(courseType = localStorage.getItem('lastOpenedCourse') || 'html') {
  console.log('Обновление видео для курса:', courseType);
    const lang = currentUser.language; // kk или ru
    
    // Находим все контейнеры с видео
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
      // Скрываем все видео
      container.querySelectorAll('.video-wrapper').forEach(video => {
        video.style.display = 'none';
      });
      
      // Показываем только нужное видео в зависимости от языка
      const videoToShow = container.querySelector(`.video-${lang}`);
      if (videoToShow) {
        videoToShow.style.display = 'block';
      }
    });
  }
  
  // Добавляем вызов updateVideos в функцию loadLesson
  const originalLoadLesson = window.loadLesson;
  window.loadLesson = function(num) {
    originalLoadLesson(num);
    // После загрузки урока обновляем видимость видео
    setTimeout(updateVideos, 100);
  };
  
  // Обновляем видео при изменении языка
  const languageSelect = document.getElementById('select');
  if (languageSelect) {
    languageSelect.addEventListener('change', function() {
      const newLanguage = this.value === 'Қазақша' ? 'kk' : 'ru';
      currentUser.language = newLanguage;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      updateVideos();
    });
  }
  
  // Обновляем видео при начальной загрузке
  updateVideos();
});

// Добавляем перевод заголовков уроков
function getTranslatedLessonTitle(lessonNum, lang, courseType = 'html') {
  if (courseType === 'html') {
    if (lang === 'ru') {
      const titles = {
        1: 'Урок 1: Основы HTML',
        2: 'Урок 2: HTML теги и атрибуты',
        3: 'Урок 3: Таблицы и списки',
        4: 'Урок 4: CSS основы',
        5: 'Урок 5: CSS свойства',
        6: 'Урок 6: CSS селекторы',
        7: 'Урок 7: Блочная модель',
        8: 'Урок 8: Позиционирование',
        9: 'Урок 9: Финальный проект'
      };
      return titles[lessonNum] || `Урок ${lessonNum}`;
    } else {
      // Для казахского
      return lessons[lessonNum]?.title || `Сабақ ${lessonNum}`;
    }
  } else if (courseType === 'python') {
    // Python курс - используем специальную функцию если доступна
    if (typeof window.getPythonLessonTitle === 'function') {
      return window.getPythonLessonTitle(lessonNum, lang);
    }
    
    if (lang === 'ru') {
      const titles = {
        1: 'Урок 1: Введение в Python',
        2: 'Урок 2: Переменные и типы данных',
        3: 'Урок 3: Условные операторы',
        4: 'Урок 4: Циклы'
      };
      return titles[lessonNum] || `Урок ${lessonNum}`;
    } else {
      // Для казахского используем pythonLessons если доступно
      if (typeof window.pythonLessons !== 'undefined' && window.pythonLessons[lessonNum]) {
        return window.pythonLessons[lessonNum].title || `Сабақ ${lessonNum}`;
      }
      return `Сабақ ${lessonNum}`;
    }
  } else if (courseType === 'database') {
    // Database курс - используем специальную функцию если доступна
    if (typeof window.getDbLessonTitle === 'function') {
      return window.getDbLessonTitle(lessonNum, lang);
    }
    
    if (lang === 'ru') {
      const titles = {
        1: 'Урок 1: Введение в базы данных',
        2: 'Урок 2: Основы SQL',
        3: 'Урок 3: Реляционная модель'
      };
      return titles[lessonNum] || `Урок ${lessonNum}`;
    } else {
      // Для казахского используем dbLessons если доступно
      if (typeof window.dbLessons !== 'undefined' && window.dbLessons[lessonNum]) {
        return window.dbLessons[lessonNum].title || `Сабақ ${lessonNum}`;
      }
      return `Сабақ ${lessonNum}`;
    }
  }
  // По умолчанию
  return lang === 'ru' ? `Урок ${lessonNum}` : `Сабақ ${lessonNum}`;
}

// Модифицируем функцию инициализации уроков
function initLessons(courseType) {
  const lessonList = document.getElementById('week-1-lessons');
  if (!lessonList) return;
  
  // Определяем текущий курс из meta-тега или URL, если не указан явно
  if (!courseType) {
    // Проверяем, есть ли мета-тег с типом курса
    const metaCourseType = document.querySelector('meta[name="course-type"]');
    if (metaCourseType && metaCourseType.getAttribute('content')) {
      courseType = metaCourseType.getAttribute('content');
      console.log('Тип курса определен из meta-тега:', courseType);
    } else {
      // Если нет мета-тега, определяем из URL
      const currentPath = window.location.pathname;
      if (currentPath.includes('python_course')) {
        courseType = 'python';
      } else if (currentPath.includes('database_course')) {
        courseType = 'database';
      } else {
        courseType = 'html';
      }
      console.log('Тип курса определен из URL:', courseType);
    }
  }
  
  console.log('Инициализация уроков для курса:', courseType);
  console.log('Доступны переменные:', {
    lessons: typeof lessons !== 'undefined',
    pythonLessons: typeof window.pythonLessons !== 'undefined',
    dbLessons: typeof window.dbLessons !== 'undefined'
  });
  
  // Проверяем доступность данных в зависимости от типа курса
  if (courseType === 'python' && typeof window.pythonLessons === 'undefined') {
    console.error('Ошибка: переменная pythonLessons не определена');
    return;
  } else if (courseType === 'database' && typeof window.dbLessons === 'undefined') {
    console.error('Ошибка: переменная dbLessons не определена');
    return;
  }
  
  // Сохраняем информацию о типе курса для использования в других функциях
  localStorage.setItem('lastOpenedCourse', courseType);
  
  // Очищаем список уроков
  lessonList.innerHTML = '';
  
  // Получаем текущий язык пользователя
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = userData.language || 'kk';
  
  // Создаем элементы для каждого урока
  for (let i = 1; i <= 9; i++) {
    const lessonItem = document.createElement('li');
    lessonItem.className = 'lesson-item';
    
    const lessonLink = document.createElement('a');
    lessonLink.href = '#';
    lessonLink.className = 'lesson-link';
    lessonLink.setAttribute('data-lesson', i);
    
    // Устанавливаем ключ перевода в зависимости от типа курса
    if (courseType === 'python') {
      lessonLink.setAttribute('data-lang-key', `python_lesson${i}`);
    } else if (courseType === 'database') {
      lessonLink.setAttribute('data-lang-key', `db_lesson${i}`);
    } else {
      lessonLink.setAttribute('data-lang-key', `html_lesson${i}`);
    }
    
    lessonLink.innerText = getTranslatedLessonTitle(i, lang, courseType);
    
    // Добавляем обработчик события
    lessonLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Удаляем класс active у всех уроков
      document.querySelectorAll('.lesson-link').forEach(link => {
        link.classList.remove('active');
      });
      
      // Добавляем класс active к выбранному уроку
      this.classList.add('active');
      
      // Загружаем выбранный урок
      loadLesson(i, courseType);
    });
    
    // Проверяем, завершен ли урок
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    const courseData = JSON.parse(localStorage.getItem(`${courseType}Course`) || '{}');
    const completedLessonsForCourse = courseData.completedLessons || [];
    
    if (completedLessonsForCourse.includes(i)) {
      const checkmark = document.createElement('span');
      checkmark.className = 'lesson-completed';
      checkmark.innerHTML = '✓';
      lessonItem.appendChild(checkmark);
    }
    
    lessonItem.appendChild(lessonLink);
    lessonList.appendChild(lessonItem);
  }
  
  // Обновляем заголовок курса
  const courseTitle = document.querySelector('[data-lang-key="course_title"]');
  if (courseTitle) {
    let titleKey = 'course_title'; // Default for HTML course
    
    if (courseType === 'python') {
      titleKey = 'python_course_title';
    } else if (courseType === 'database') {
      titleKey = 'db_course_title';
    }
    
    courseTitle.setAttribute('data-lang-key', titleKey);
    if (translations && translations[lang] && translations[lang][titleKey]) {
      courseTitle.innerText = translations[lang][titleKey];
      document.title = translations[lang][titleKey]; // Обновляем title страницы
    }
  }
}

// Модифицируем функцию loadLesson для вызова комплексного перевода
function loadLesson(num, courseType = 'html') {
  console.log(`Загрузка урока ${num} для курса ${courseType}`);
  
  const emptyMessage = document.getElementById('empty-message');
  const loadedLesson = document.getElementById('loaded-lesson');
  const lessonData = document.getElementById('lesson-data');
  const homeworkSection = document.getElementById('homework-section');
  
  if (!emptyMessage || !loadedLesson || !lessonData) {
    console.error('Не удалось найти необходимые элементы для загрузки урока');
    return;
  }
  
  emptyMessage.style.display = 'none';
  loadedLesson.style.display = 'block';
  
  // Получаем данные урока в зависимости от типа курса
  let lessonContent;
  let homeworkContent;
  
  // Получаем текущий язык пользователя
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const lang = userData.language || 'kk';
  
  // Обновляем атрибут lang для HTML
  document.documentElement.setAttribute('lang', lang);
  
  // Обновляем активный урок в боковой панели
  const lessonItems = document.querySelectorAll('.lesson-item');
  lessonItems.forEach(item => {
    item.classList.remove('active');
    if (parseInt(item.getAttribute('data-lesson') || '0') === parseInt(num)) {
      item.classList.add('active');
    }
  });
  
  // Обновляем селектор языка, чтобы он соответствовал текущему языку
  const langSelect = document.getElementById('select');
  if (langSelect) {
    langSelect.value = lang === 'kk' ? 'Қазақша' : 'Русский';
  }
  
  console.log(`Загрузка урока для курса: ${courseType}, язык: ${lang}`);
  
  // Выбираем контент в зависимости от языка и типа курса
  if (lang === 'ru') {
    // Русский контент для всех курсов
    if (courseType === 'html') {
      // Для HTML курса
      if (lessonsRu && lessonsRu[num]) {
        lessonContent = lessonsRu[num].content || '';
        homeworkContent = lessonsRu[num].practiceTask || '';
      } else {
        // Если нет русского перевода для этого урока, используем казахский с переводом
        lessonContent = lessons[num]?.content || '';
        homeworkContent = lessons[num]?.practiceTask || '';
      }
    } else if (courseType === 'python') {
      // Для Python курса
      if (typeof window.pythonLessons !== 'undefined' && window.pythonLessons[num]) {
        lessonContent = window.pythonLessons[num].content || '';
        homeworkContent = window.pythonLessons[num].practiceTask || '';
      } else {
        console.error('Не удалось загрузить данные Python-курса:', num);
      }
    } else if (courseType === 'database') {
      // Для курса баз данных
      if (typeof window.dbLessons !== 'undefined' && window.dbLessons[num]) {
        lessonContent = window.dbLessons[num].content || '';
        homeworkContent = window.dbLessons[num].practiceTask || '';
      } else {
        console.error('Не удалось загрузить данные курса баз данных:', num);
      }
    }
  } else {
    // Казахский контент для всех курсов
    if (courseType === 'html') {
      lessonContent = lessons[num]?.content || '';
      homeworkContent = lessons[num]?.practiceTask || '';
    } else if (courseType === 'python') {
      if (typeof window.pythonLessons !== 'undefined' && window.pythonLessons[num]) {
        lessonContent = window.pythonLessons[num].content || '';
        homeworkContent = window.pythonLessons[num].practiceTask || '';
      } else {
        console.error('Не удалось загрузить данные Python-курса:', num);
      }
    } else if (courseType === 'database') {
      if (typeof window.dbLessons !== 'undefined' && window.dbLessons[num]) {
        lessonContent = window.dbLessons[num].content || '';
        homeworkContent = window.dbLessons[num].practiceTask || '';
      } else {
        console.error('Не удалось загрузить данные курса баз данных:', num);
      }
    }
  }
  
  // Проверяем, есть ли контент
  if (!lessonContent) {
    const emptyMessage = lang === 'ru' 
      ? '<div class="empty-content"><h3>Урок в разработке</h3><p>Приносим извинения, контент этого урока пока недоступен.</p></div>'
      : '<div class="empty-content"><h3>Сабақ әзірленуде</h3><p>Кешіріңіз, бұл сабақтың мазмұны әлі қол жетімді емес.</p></div>';
    lessonData.innerHTML = emptyMessage;
  } else {
    lessonData.innerHTML = lessonContent;
  }
  
  // Активируем подсветку синтаксиса для кода
  document.querySelectorAll('pre code').forEach((el) => {
    if (typeof hljs !== 'undefined') {
      hljs.highlightElement(el);
    }
  });
  
  // Проверяем, есть ли домашнее задание
  if (homeworkContent && homeworkSection) {
    homeworkSection.style.display = 'block';
    const homeworkTask = document.getElementById('homework-task');
    if (homeworkTask) {
      homeworkTask.innerHTML = homeworkContent;
    }
  } else if (homeworkSection) {
    homeworkSection.style.display = 'none';
  }
  
  // Более надежная система применения переводов
  const applyTranslations = () => {
    console.log(`Применение переводов для языка ${lang}, тип курса: ${courseType}`);
    
    try {
      if (courseType === 'html') {
        if (typeof applyFullTranslation === 'function') {
          applyFullTranslation(lang);
        }
      } else if (courseType === 'python') {
        if (typeof applyFullTranslationPython === 'function') {
          applyFullTranslationPython(lang);
        }
      } else if (courseType === 'database') {
        if (typeof applyFullTranslationDb === 'function') {
          applyFullTranslationDb(lang);
        }
      }
      
      // Резервный вариант для универсальных переводов
      if (typeof window.applyUniversalTranslations === 'function') {
        window.applyUniversalTranslations(lang, courseType);
      }
    } catch (error) {
      console.error('Ошибка при применении переводов:', error);
    }
    
    // Обновляем видео в соответствии с текущим языком
    if (typeof updateVideos === 'function') {
      try {
        updateVideos(courseType);
      } catch (error) {
        console.error('Ошибка при обновлении видео:', error);
      }
    }
  };
  
  // Применяем переводы сразу и с задержкой для обработки асинхронно загруженного контента
  applyTranslations();
  
  // Устанавливаем последовательность задержек для более надежного применения переводов
  const delays = [100, 300, 600];
  delays.forEach(delay => {
    setTimeout(applyTranslations, delay);
  });
  
  // Обновляем текст кнопки "Отметить как выполненное"
  const completeButton = document.querySelector('.complete-btn');
  if (completeButton) {
    const completedText = lang === 'ru' ? 'Выполнено' : 'Орындалды';
    const notCompletedText = lang === 'ru' ? 'Отметить как выполненное' : 'Орындалды деп белгілеу';
    
    if (userData.completedLessons && userData.completedLessons.includes(`${courseType}_${num}`)) {
      completeButton.textContent = completedText;
      completeButton.classList.add('completed');
      completeButton.disabled = true;
    } else {
      completeButton.textContent = notCompletedText;
      completeButton.classList.remove('completed');
      completeButton.disabled = false;
    }
  }
  
  // Сохраняем номер открытого урока и тип курса
  localStorage.setItem('lastOpenedLesson', num);
  localStorage.setItem('lastOpenedCourse', courseType);
  
  // Сохраняем данные о последнем уроке более детально для повышения надежности
  const lastLessonData = {
    lessonNumber: num,
    courseType: courseType,
    language: lang,
    timestamp: new Date().getTime()
  };
  localStorage.setItem('lastLessonData', JSON.stringify(lastLessonData));
  
  console.log(`Сохранен последний открытый урок: ${num}, курс: ${courseType}, язык: ${lang}`);
}

// Модифицируем обработчик события изменения языка
document.addEventListener('DOMContentLoaded', function() {
  // При изменении языка обновляем все переводы
  const langSelect = document.getElementById('select');
  if (langSelect) {
    langSelect.addEventListener('change', function() {
      const newLanguage = this.value === 'Қазақша' ? 'kk' : 'ru';
      
      // Обновляем язык в localStorage
      const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
      userData.language = newLanguage;
      localStorage.setItem('currentUser', JSON.stringify(userData));
      
      // Определяем тип курса из метатега или URL
      let courseType = 'html';
      const metaCourseType = document.querySelector('meta[name="course-type"]');
      
      if (metaCourseType && metaCourseType.getAttribute('content')) {
        courseType = metaCourseType.getAttribute('content');
      } else {
        const currentPath = window.location.pathname;
        if (currentPath.includes('python_course')) {
          courseType = 'python';
        } else if (currentPath.includes('database_course')) {
          courseType = 'database';
        }
      }
      
      console.log('Смена языка для курса:', courseType);
      
      // Сохраняем тип курса
      localStorage.setItem('lastOpenedCourse', courseType);
      
      // Используем универсальную функцию перевода для всех курсов
      if (typeof window.applyUniversalTranslations === 'function') {
        window.applyUniversalTranslations(newLanguage, courseType);
      } else {
        console.warn('Универсальная функция перевода не найдена, используем запасной вариант');
        
        // Обновляем уроки в сайдбаре с указанным типом курса
        initLessons(courseType);
        
        // Применяем комплексный перевод в зависимости от типа курса
        if (courseType === 'python' && typeof window.applyFullTranslationPython === 'function') {
          window.applyFullTranslationPython(newLanguage);
        } else if (courseType === 'database' && typeof window.applyFullTranslationDb === 'function') {
          window.applyFullTranslationDb(newLanguage);
        } else if (typeof applyFullTranslation === 'function') {
          applyFullTranslation(newLanguage);
        }
        
        // Если открыт урок, перезагружаем его с новым языком
        const currentLessonNum = localStorage.getItem('lastOpenedLesson');
        
        if (currentLessonNum && typeof loadLesson === 'function') {
          loadLesson(parseInt(currentLessonNum), courseType);
        } else {
          // Если урок не открыт, переводим сообщение "Выберите урок"
          const emptyMessage = document.getElementById('empty-message');
          if (emptyMessage) {
            const header = emptyMessage.querySelector('h2');
            if (header) {
              header.textContent = newLanguage === 'ru' ? 'Выберите урок' : 'Сабақ таңдаңыз';
            }
            
            const paragraph = emptyMessage.querySelector('p');
            if (paragraph) {
              paragraph.textContent = newLanguage === 'ru' 
                ? 'Выберите урок слева, чтобы начать обучение.' 
                : 'Сол жақтан сабақ таңдап, оқуды бастай аласыз.';
            }
          }
        }
        
        // Обновляем видео в соответствии с выбранным языком
        updateVideos(courseType);
      }
    });
  }
});

// Используем основную функцию updateVideos, определенную выше