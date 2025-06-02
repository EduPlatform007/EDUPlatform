const lesson1 = {
    title: "Сабақ 1: Деректер қорының негіздері",
    content: `
      <section class="theory">
        <h2>Деректер қорының негіздері</h2>
        <p>Деректер қоры - бұл деректерді сақтау, ұйымдастыру және басқару үшін арналған жүйе. Ол деректерді тиімді түрде сақтауға, іздеуге және өңдеуге мүмкіндік береді.</p>
        
        <h3>Деректер қорының түрлері</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Реляциялық деректер қоры</h4>
            <p>Реляциялық деректер қоры - бұл деректерді кестелер түрінде сақтайтын жүйе. Олар SQL тілін қолданады және деректер арасындағы байланыстарды сақтайды.</p>
            <div class="example">
              <p>Мысалдар: MySQL, PostgreSQL, Oracle</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>NoSQL деректер қоры</h4>
            <p>NoSQL деректер қоры - бұл реляциялық емес деректер қоры. Олар үлкен көлемдегі деректермен жұмыс істеуге бейімделген.</p>
            <div class="example">
              <p>Мысалдар: MongoDB, Redis, Cassandra</p>
            </div>
          </div>
        </div>
        
        <h3>Деректер қорының құрылымы</h3>
        <ul>
          <li><strong>Кестелер</strong> - деректерді сақтайтын негізгі құрылым</li>
          <li><strong>Бағандар</strong> - кестедегі деректер түрлері</li>
          <li><strong>Жолдар</strong> - кестедегі жеке жазбалар</li>
          <li><strong>Кілттер</strong> - жазбаларды бірегей түрде анықтайтын өрістер</li>
        </ul>
      </section>
<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zDuZoHm5AWw" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zDuZoHm5AWw" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  
// Негізгі файлда қолдану үшін сабақты экспорттау
if (typeof window !== 'undefined') {
  window.databaseLesson1 = lesson1;
}
const lesson2 = {
    title: "Сабақ 2: SQL негіздері",
    content: `
      <section class="theory">
        <h2>SQL негіздері</h2>
        <p>SQL (Structured Query Language) - бұл деректер қорымен жұмыс істеуге арналған тіl. Ол деректерді сақтау, өңдеу және алу үшін қолданылады.</p>
        
        <h3>SQL сұраныстарының түрлері</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>SELECT</h4>
            <p>SELECT - деректерді алу үшін қолданылатын сұраныс.</p>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>INSERT</h4>
            <p>INSERT - жаңа деректер қосу үшін қолданылатын сұраныс.</p>
            <div class="example">
              <pre><code>INSERT INTO оқушылар (аты, жасы) VALUES ('Арман', 20);</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>UPDATE</h4>
            <p>UPDATE - бар деректерді өзгерту үшін қолданылатын сұраныс.</p>
            <div class="example">
              <pre><code>UPDATE оқушылар SET жасы = 21 WHERE аты = 'Арман';</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>DELETE</h4>
            <p>DELETE - деректерді жою үшін қолданылатын сұраныс.</p>
            <div class="example">
              <pre><code>DELETE FROM оқушылар WHERE аты = 'Арман';</code></pre>
            </div>
          </div>
        </div>
      </section>
<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ViltpHJKc_c" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ViltpHJKc_c" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  if (typeof window !== 'undefined') {
    window.databaseLesson2 = lesson2;
  }
  const lesson3 = {
    title: "Сабақ 3: WHERE сүзгілеу операторы",
    content: `
      <section class="theory">
        <h2>WHERE операторы</h2>
        <p>WHERE — SQL-да деректерді белгілі бір шарт бойынша сүзуге арналған оператор. Ол сұраныс нәтижесінде тек шартқа сәйкес келетін жолдарды қайтарады.</p>
        <h3>WHERE синтаксисі</h3>
        <pre><code>SELECT * FROM кесте WHERE шарт;</code></pre>
        <h3>WHERE қолдану мысалдары</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Мысал 1: 10-сыныптағы оқушыларды таңдау</h4>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар WHERE сынып = 10;</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Мысал 2: Бағасы 5-ке тең оқушылар</h4>
            <div class="example">
              <pre><code>SELECT * FROM бағалар WHERE баға = 5;</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Мысал 3: Бірнеше шартты біріктіру (AND, OR)</h4>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар WHERE сынып = 10 AND аты LIKE 'А%';</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Мысал 4: WHERE және BETWEEN</h4>
            <div class="example">
              <pre><code>SELECT * FROM бағалар WHERE баға BETWEEN 4 AND 5;</code></pre>
            </div>
          </div>
        </div>
        <h3>WHERE қолдану кейстері</h3>
        <ul>
          <li>Студенттерді белгілі бір сынып бойынша сүзу: <code>WHERE сынып = 11</code></li>
          <li>Бағасы 4-тен жоғары оқушылар: <code>WHERE баға > 4</code></li>
          <li>Аты 'А' әрпінен басталатын оқушылар: <code>WHERE аты LIKE 'А%'</code></li>
        </ul>
        <p><strong>Ескерту:</strong> WHERE шартында AND, OR, BETWEEN, LIKE, IN, NOT сияқты операторларды қолдануға болады.</p>
      </section>
 <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-WmsWHB_m2I" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-WmsWHB_m2I" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  if (typeof window !== 'undefined') {
    window.databaseLesson3 = lesson3;
  }
  const lesson4 = {
    title: "Сабақ 4: SQL LIKE іздеу операторының мүмкіндіктері",
    content: `
      <section class="theory">
        <h2>LIKE операторы</h2>
        <p>LIKE — SQL-да деректерді үлгі бойынша іздеуге арналған оператор. Ол таңбалар тізбегін салыстыру үшін қолданылады және жолдармен жұмыс істеу кезінде өте пайдалы.</p>
        <h3>LIKE синтаксисі</h3>
        <pre><code>SELECT * FROM кесте WHERE баған LIKE 'үлгі';</code></pre>
        <h3>Арнайы таңбалар</h3>
        <ul>
          <li><strong>%</strong> - кез келген таңбалар тізбегіне сәйкес келеді (0 немесе одан көп таңба)</li>
          <li><strong>_</strong> - тек бір таңбаға сәйкес келеді</li>
        </ul>
        <h3>LIKE қолдану мысалдары</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Мысал 1: Аты 'А' әрпінен басталатын оқушылар</h4>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар WHERE аты LIKE 'А%';</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Мысал 2: Аты 'н' әрпімен аяқталатын оқушылар</h4>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар WHERE аты LIKE '%н';</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Мысал 3: Аты ішінде 'ай' бар оқушылар</h4>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар WHERE аты LIKE '%ай%';</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Мысал 4: Аты тек 3 әріптен тұратын оқушылар</h4>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар WHERE аты LIKE '___';</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Мысал 5: Аты 'а' екінші әріп болатын оқушылар</h4>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар WHERE аты LIKE '_а%';</code></pre>
            </div>
          </div>
        </div>
        <h3>LIKE қолдану кейстері</h3>
        <ul>
          <li>Электрондық пошта іздеу: <code>WHERE email LIKE '%@gmail.com'</code></li>
          <li>Телефон нөірлерін іздеу: <code>WHERE phone LIKE '+7747%'</code></li>
          <li>Бастапқы әріптері бойынша іздеу: <code>WHERE name LIKE 'A%'</code></li>
        </ul>
        <p><strong>Ескерту:</strong> LIKE операторы әдетте кіші және үлкен әріптерді ажыратады. Регистрді елемеу үшін, кейбір СУБД-ларда ILIKE немесе LOWER/UPPER функцияларын қолдануға болады.</p>
      </section>
<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MoQHOulHUmg" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MoQHOulHUmg" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
if (typeof window !== 'undefined') {
    window.databaseLesson4 = lesson4;
}
const lesson5 = {
    title: "Сабақ 5: Деректерді өзгерту",
    content: `
      <section class="theory">
        <h2>Деректерді өзгерту</h2>
        <p>SQL тілінде деректерді өзгерту үшін INSERT, UPDATE және DELETE сұраныстары қолданылады. Бұл сұраныстар деректер қорындағы деректерді қосу, өзгерту және жоюға мүмкіндік береді.</p>
        
        <h3>INSERT сұранысы</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Бір жол қосу</h4>
            <p>Бір жол қосу үшін INSERT INTO сұранысы қолданылады.</p>
            <div class="example">
              <pre><code>INSERT INTO оқушылар (аты, жасы, сыныбы)
VALUES ('Арман', 20, '10А');</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Бірнеше жол қосу</h4>
            <p>Бірнеше жол қосу үшін бірнеше VALUES қолданылады.</p>
            <div class="example">
              <pre><code>INSERT INTO оқушылар (аты, жасы, сыныбы)
VALUES 
  ('Арман', 20, '10А'),
  ('Айгерим', 19, '10Б'),
  ('Болат', 21, '11А');</code></pre>
            </div>
          </div>
        </div>
        
        <h3>UPDATE сұранысы</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Бір жолды өзгерту</h4>
            <p>Бір жолды өзгерту үшін UPDATE сұранысы қолданылады.</p>
            <div class="example">
              <pre><code>UPDATE оқушылар
SET жасы = 21
WHERE аты = 'Арман';</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Бірнеше жолды өзгерту</h4>
            <p>Бірнеше жолды өзгерту үшін WHERE шартын қолдану керек.</p>
            <div class="example">
              <pre><code>UPDATE оқушылар
SET сыныбы = '11А'
WHERE сыныбы = '10А';</code></pre>
            </div>
          </div>
        </div>
        
        <h3>DELETE сұранысы</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Бір жолды жою</h4>
            <p>Бір жолды жою үшін DELETE сұранысы қолданылады.</p>
            <div class="example">
              <pre><code>DELETE FROM оқушылар
WHERE аты = 'Арман';</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Бірнеше жолды жою</h4>
            <p>Бірнеше жолды жою үшін WHERE шартын қолдану керек.</p>
            <div class="example">
              <pre><code>DELETE FROM оқушылар
WHERE сыныбы = '10А';</code></pre>
            </div>
          </div>
        </div>
      </section>

<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/04Tb1oTj2KY" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/04Tb1oTj2KY" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  if (typeof window !== 'undefined') {
    window.databaseLesson5 = lesson5;
  }
  const lesson6 = {
    title: "Сабақ 6: Кестелерді біріктіру",
    content: `
      <section class="theory">
        <h2>Кестелерді біріктіру</h2>
        <p>SQL тілінде кестелерді біріктіру - бұл бірнеше кестелерден деректерді біріктіруге мүмкіндік беретін қуатты мүмкіндік. Бұл деректер арасындағы байланыстарды пайдаланып, күрделі сұраныстар жасауға мүмкіндік береді.</p>
        
        <h3>Біріктіру түрлері</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>INNER JOIN</h4>
            <p>INNER JOIN - бұл екі кестеде де сәйкес келетін жолдарды біріктіреді.</p>
            <div class="example">
              <pre><code>SELECT оқушылар.аты, сыныптар.аты
FROM оқушылар
INNER JOIN сыныптар
ON оқушылар.сынып_id = сыныптар.id;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>LEFT JOIN</h4>
            <p>LEFT JOIN - бұл сол кестеден барлық жолдарды және оң кестеден сәйкес келетін жолдарды біріктіреді.</p>
            <div class="example">
              <pre><code>SELECT оқушылар.аты, сыныптар.аты
FROM оқушылар
LEFT JOIN сыныптар
ON оқушылар.сынып_id = сыныптар.id;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>RIGHT JOIN</h4>
            <p>RIGHT JOIN - бұл оң кестеден барлық жолдарды және сол кестеден сәйкес келетін жолдарды біріктіреді.</p>
            <div class="example">
              <pre><code>SELECT оқушылар.аты, сыныптар.аты
FROM оқушылар
RIGHT JOIN сыныптар
ON оқушылар.сынып_id = сыныптар.id;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>FULL JOIN</h4>
            <p>FULL JOIN - бұл екі кестеден де барлық жолдарды біріктіреді.</p>
            <div class="example">
              <pre><code>SELECT оқушылар.аты, сыныптар.аты
FROM оқушылар
FULL JOIN сыныптар
ON оқушылар.сынып_id = сыныптар.id;</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Біріктіру шарттары</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>ON шарты</h4>
            <p>ON шарты - бұл кестелерді біріктіру кезінде қолданылатын негізгі шарт.</p>
            <div class="example">
              <pre><code>SELECT оқушылар.аты, пәндер.аты
FROM оқушылар
INNER JOIN оқушы_пәндер
ON оқушылар.id = оқушы_пәндер.оқушы_id
INNER JOIN пәндер
ON оқушы_пәндер.пән_id = пәндер.id;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>WHERE шарты</h4>
            <p>WHERE шарты - бұл біріктірілген деректерді сүзгілеуге мүмкіндік береді.</p>
            <div class="example">
              <pre><code>SELECT оқушылар.аты, сыныптар.аты
FROM оқушылар
INNER JOIN сыныптар
ON оқушылар.сынып_id = сыныптар.id
WHERE сыныптар.аты = '10А';</code></pre>
            </div>
          </div>
        </div>
      </section>
<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/y0aFJc1gX2" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/y0aFJc1gX2" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  if (typeof window !== 'undefined') {
    window.databaseLesson6 = lesson6;
  }
  const lesson7 = {
    title: "Сабақ 7: Деректерді жинақтау",
    content: `
      <section class="theory">
        <h2>Деректерді жинақтау</h2>
        <p>SQL тілінде деректерді жинақтау - бұл деректерді топтау және олар бойынша есептеулер жасауға мүмкіндік беретін құрылымдар. Олар деректерді талдау және есептеу үшін қолданылады.</p>
        
        <h3>Жинақтау функциялары</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>COUNT()</h4>
            <p>COUNT() функциясы - бұл жолдар санын есептеуге мүмкіндік беретін функция.</p>
            <div class="example">
              <pre><code>SELECT COUNT(*) FROM оқушылар;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>SUM()</h4>
            <p>SUM() функциясы - бұл сандық мәндердің қосындысын есептеуге мүмкіндік беретін функция.</p>
            <div class="example">
              <pre><code>SELECT SUM(баға) FROM кітаптар;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>AVG()</h4>
            <p>AVG() функциясы - бұл сандық мәндердің орташа мәнін есептеуге мүмкіндік беретін функция.</p>
            <div class="example">
              <pre><code>SELECT AVG(баға) FROM кітаптар;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>MAX() және MIN()</h4>
            <p>MAX() және MIN() функциялары - бұл максималды және минималды мәндерді табуға мүмкіндік беретін функциялар.</p>
            <div class="example">
              <pre><code>SELECT MAX(баға), MIN(баға) FROM кітаптар;</code></pre>
            </div>
          </div>
        </div>
        
      
        </div>
      </section>
<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IAb5piDl5Mw" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IAb5piDl5Mw" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };  
  if (typeof window !== 'undefined') {
    window.databaseLesson7 = lesson7;
  }
  const lesson8 = {
    title: "Сабақ 8: GROUP BY және HAVING",
    content: `
      <section class="theory">
        <h2>GROUP BY және HAVING</h2>
        <p>GROUP BY және HAVING - бұл деректерді топтау және топтар бойынша шарттар қоюға мүмкіндік беретін SQL құрылымдары. Олар деректерді талдау және есептеу үшін қолданылады.</p>
        
        <h3>GROUP BY</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Негізгі қолданысы</h4>
            <p>GROUP BY - деректерді топтауға мүмкіндік беретін құрылым.</p>
            <div class="example">
              <pre><code>SELECT сынып, COUNT(*) as оқушы_саны
FROM оқушылар
GROUP BY сынып;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Бірнеше бағандар бойынша топтау</h4>
            <p>Бірнеше бағандар бойынша топтауға болады.</p>
            <div class="example">
              <pre><code>SELECT сынып, пән, AVG(баға) as орташа_баға
FROM бағалар
GROUP BY сынып, пән;</code></pre>
            </div>
          </div>
        </div>
        
        <h3>HAVING</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Топтарға шарт қою</h4>
            <p>HAVING - топталған деректер бойынша шарт қоюға мүмкіндік береді.</p>
            <div class="example">
              <pre><code>SELECT сынып, COUNT(*) as оқушы_саны
FROM оқушылар
GROUP BY сынып
HAVING COUNT(*) > 20;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Жинақтау функцияларымен қолдану</h4>
            <p>HAVING жинақтау функцияларымен бірге қолданылады.</p>
            <div class="example">
              <pre><code>SELECT пән, AVG(баға) as орташа_баға
FROM бағалар
GROUP BY пән
HAVING AVG(баға) > 4.0;</code></pre>
            </div>
          </div>
        </div>
      </section>
<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5toLsBFD4Qg" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5toLsBFD4Qg" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  if (typeof window !== 'undefined') {
    window.databaseLesson8 = lesson8;
  }
  const lesson9 = {
    title: "Сабақ 9: ORDER BY сұрыптау операторы",
    content: `
      <section class="theory">
        <h2>ORDER BY операторы</h2>
        <p>ORDER BY — SQL-да сұраныс нәтижелерін белгілі бір баған бойынша сұрыптауға арналған оператор. Әдепкі бойынша ASC (өсу реті), DESC (кему реті) қолданылады.</p>
        <h3>ORDER BY синтаксисі</h3>
        <pre><code>SELECT * FROM кесте ORDER BY баған [ASC|DESC];</code></pre>
        <h3>ORDER BY қолдану мысалдары</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Мысал 1: Оқушыларды аты бойынша өсу ретімен сұрыптау</h4>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар ORDER BY аты ASC;</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Мысал 2: Оқушыларды сынып бойынша кему ретімен сұрыптау</h4>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар ORDER BY сынып DESC;</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Мысал 3: Бірнеше баған бойынша сұрыптау</h4>
            <div class="example">
              <pre><code>SELECT * FROM оқушылар ORDER BY сынып ASC, аты DESC;</code></pre>
            </div>
          </div>
        </div>
        <h3>ORDER BY қолдану кейстері</h3>
        <ul>
          <li>Студенттерді GPA-ға қарай кему ретімен сұрыптау: <code>ORDER BY GPA DESC</code></li>
          <li>Тауарларды баға бойынша өсу ретімен сұрыптау: <code>ORDER BY price ASC</code></li>
        </ul>
        <p><strong>Ескерту:</strong> ORDER BY нәтижелерді сұрыптағанда әрқашан соңында қолданылады.</p>
      </section>
<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0vTKkXhOoK8" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0vTKkXhOoK8" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      
    `
};
if (typeof window !== 'undefined') {
    window.databaseLesson9 = lesson9;
}
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
if (typeof window !== 'undefined') {
  window.lessons = lessons;
}  