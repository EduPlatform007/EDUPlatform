
const lesson1 = {
  title: "1-сабақ: Python-ға кіріспе",
  content: `
    <section class="theory">
      <h2>Python-ға кіріспе</h2>
      <p>Python - бұл қарапайым синтаксисі бар жоғары деңгейлі, интерпретацияланатын бағдарламалау тілі, ол оны бастаушыларға да, тәжірибелі әзірлеушілерге де идеалды етеді.</p>
      
      <div class="info-card">
        <h4>Python деген не?</h4>
        <p>Python - бұл Гвидо ван Россум жасаған және 1991 жылы алғаш рет шығарылған әмбебап бағдарламалау тілі. Python кодтың оқуға ыңғайлылығын атап өтеді және код блоктарын анықтау үшін шегіністерді пайдаланады.</p>
      </div>
      
      <h3>Python ерекшеліктері</h3>
      <div class="theory-grid">
        <div class="theory-card">
          <h4>Қарапайым синтаксис</h4>
          <p>Python қарапайым және түсінікті синтаксиске ие, бұл оны бағдарламалауды үйренетіндер үшін тамаша тіл етеді.</p>
          <div class="example">
            <pre><code>print("Сәлем, әлем!")</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Интерпретацияланатын тіл</h4>
          <p>Python - интерпретацияланатын тіл, яғни код жолдар бойынша орындалады, компиляциялаудың қажеті жоқ.</p>
          <div class="example">
            <p>Сіз Python-ды интерактивті режимде іске қоса аласыз және нәтижелерді бірден көре аласыз.</p>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Динамикалық типтеу</h4>
          <p>Python-да айнымалының түрін жариялаудың қажеті жоқ. Түр орындау кезінде автоматты түрде анықталады.</p>
          <div class="example">
            <pre><code>x = 10       # x - сан
x = "Сәлем"  # енді x - жол</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Үлкен стандартты кітапхана</h4>
          <p>Python әртүрлі міндеттерге арналған модульдерді қамтитын кең стандартты кітапханамен бірге келеді.</p>
          <div class="example">
            <p>Файлдармен, желімен, дерекқорлармен, графикалық интерфейспен жұмыс істеуге арналған модульдер және т.б.</p>
          </div>
        </div>
      </div>
      
      <h3>Python орнату</h3>
      <p>Python-мен жұмыс істеуді бастау үшін компьютеріңізге Python интерпретаторын орнату керек.</p>
      
      <div class="tip-card">
        <h4>Кеңес</h4>
        <p>Python 2.x қолдауын тоқтатқандықтан, Python 3.x соңғы тұрақты нұсқасын пайдалану ұсынылады.</p>
      </div>
      
      <ol>
        <li>Python ресми сайтына өтіңіз: <a href="https://www.python.org/downloads/" target="_blank">python.org/downloads</a></li>
        <li>Операциялық жүйеңізге арналған Python соңғы нұсқасын жүктеңіз</li>
        <li>Орнатушыны іске қосып, нұсқауларды орындаңыз</li>
        <li>"Add Python to PATH" опциясы белгіленгеніне көз жеткізіңіз</li>
        <li>Орнатудан кейін командалық жолды ашып, тексеру үшін <code>python --version</code> енгізіңіз</li>
      </ol>
      
      <h3>Python-дағы алғашқы бағдарлама</h3>
      <p>Дәстүрлі түрде, кез келген бағдарламалау тілінде жазылған алғашқы бағдарлама "Сәлем, әлем!" деген сөз тіркесін шығарады.</p>
      
      <pre><code class="language-python"># Бұл түсініктеме
print("Сәлем, әлем!")  # Бұл команда мәтінді экранға шығарады</code></pre>
      
      <div class="warning-card">
        <h4>Маңызды!</h4>
        <p>Python-да шегіністер маңызды! Олар циклдер, шарттар және функциялар сияқты код блоктарын анықтау үшін қолданылады.</p>
      </div>
    </section>

    <div class="video-container">
      <div class="video-kk video-wrapper" style="display:none">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GbR4CwdwkRE" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-ru video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GbR4CwdwkRE" title="Python-ға кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    <!-- Тесты удалены -->
  `,
  /* Тесты удалены */
};

// Негізгі файлда қолдану үшін сабақты экспорттау
if (typeof window !== 'undefined') {
  window.pythonLesson1 = lesson1;
}
  const lesson2 = {
    title: "2-сабақ: Айнымалылар және деректер типтері",
    content: `
      <section class="theory">
        <h2>Айнымалылар және деректер типтері</h2>
        <p>Python-да айнымалылар бағдарламаны орындау барысында өзгеруі мүмкін деректерді сақтау үшін қолданылады. Python әртүрлі деректер типтерін қолдайды, оларды осы сабақта қарастырамыз.</p>
        
        <div class="info-card">
          <h4>Айнымалы деген не?</h4>
          <p>Айнымалы - бұл деректерді сақтау үшін қолданылатын аталған жад аймағы. Python-да айнымалылар мәнді бірінші рет тағайындау кезінде автоматты түрде жасалады.</p>
        </div>
        
        <h3>Айнымалыларды жасау</h3>
        <p>Python-да айнымалылар мән тағайындау арқылы жасалады. Алдын-ала жариялау немесе типті анықтау қажет емес.</p>
        
        <pre><code class="language-python"># Айнымалыларды жасау
  name = "Алмас"    # жол айнымалысы
  age = 25          # бүтін сан айнымалысы
  height = 1.75     # қалқымалы нүктелі айнымалы
  is_student = True # логикалық айнымалы
  
  # Айнымалылардың мәндерін шығару
  print(name)
  print(age)
  print(height)
  print(is_student)</code></pre>
        
        <div class="tip-card">
          <h4>Айнымалыларды атау ережелері</h4>
          <ul>
            <li>Айнымалы аты әріптерден, сандардан және астын сызу таңбасынан тұруы мүмкін</li>
            <li>Айнымалы аты саннан басталмауы керек</li>
            <li>Айнымалы аты бос орындарды немесе арнайы таңбаларды (!, @, #, $ және т.б.) қамтымауы керек</li>
            <li>Айнымалы аттары регистрге сезімтал (name және Name - әртүрлі айнымалылар)</li>
          </ul>
        </div>
        
        <h3>Python-дағы негізгі деректер типтері</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Сандар (Numbers)</h4>
            <p>Python бүтін сандарды, қалқымалы нүктелі сандарды және күрделі сандарды қолдайды.</p>
            <div class="example">
              <pre><code>x = 10       # int (бүтін сан)
  y = 3.14     # float (қалқымалы нүктелі сан)
  z = 1 + 2j   # complex (күрделі сан)</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Жолдар (Strings)</h4>
            <p>Жолдар - бұл жалғыз немесе қос тырнақшаға салынған таңбалар тізбегі.</p>
            <div class="example">
              <pre><code>name = "Алмас"
  message = 'Сәлем, әлем!'
  multiline = """Бұл
  көп жолды
  жол"""</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Логикалық мәндер (Booleans)</h4>
            <p>Логикалық мәндер шындықты (True) немесе жалғанды (False) білдіреді.</p>
            <div class="example">
              <pre><code>is_active = True
  is_completed = False
  result = (5 > 3)  # result True болады</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Тізімдер (Lists)</h4>
            <p>Тізімдер - өзгертілуі мүмкін элементтердің реттелген жинақтары.</p>
            <div class="example">
              <pre><code>fruits = ["алма", "банан", "шие"]
  numbers = [1, 2, 3, 4, 5]
  mixed = [1, "сәлем", True, 3.14]</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Кортеждер (Tuples)</h4>
            <p>Кортеждер - жасалғаннан кейін өзгертілмейтін элементтердің реттелген жинақтары.</p>
            <div class="example">
              <pre><code>coordinates = (10, 20)
  person = ("Алмас", 25, "Алматы")</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Сөздіктер (Dictionaries)</h4>
            <p>Сөздіктер - кілт-мән жұптарының реттелмеген жинақтары.</p>
            <div class="example">
              <pre><code>person = {
      "name": "Алмас",
      "age": 25,
      "city": "Алматы"
  }</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Жиындар (Sets)</h4>
            <p>Жиындар - бірегей элементтердің реттелмеген жинақтары.</p>
            <div class="example">
              <pre><code>fruits = {"алма", "банан", "шие"}
  numbers = {1, 2, 3, 4, 5}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>None</h4>
            <p>None мәннің жоқтығын немесе null-мәнді білдіреді.</p>
            <div class="example">
              <pre><code>result = None
  print(result)  # Шығарады: None</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Типтерді түрлендіру</h3>
        <p>Python кіріктірілген функциялар арқылы деректерді бір типтен екіншісіне түрлендіруге мүмкіндік береді.</p>
        
        <pre><code class="language-python"># Типтерді түрлендіру
  x = 10
  y = "20"
  
  # Санды жолға түрлендіру
  str_x = str(x)
  print(str_x)  # Шығарады: "10"
  
  # Жолды санға түрлендіру
  int_y = int(y)
  print(int_y)  # Шығарады: 20
  
  # Қалқымалы нүктелі санға түрлендіру
  float_y = float(y)
  print(float_y)  # Шығарады: 20.0
  
  # Логикалық мәнге түрлендіру
  bool_x = bool(x)
  print(bool_x)  # Шығарады: True (кез келген нөлдік емес сан True болып саналады)</code></pre>
        
        <div class="warning-card">
          <h4>Назар аударыңыз!</h4>
          <p>Барлық типтерді түрлендіру мүмкін емес. Мысалы, "сәлем" жолын санға түрлендіру мүмкін емес. Мұндай жағдайларда Python қате шығарады.</p>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/p8ufN3H2ZUE" title="Python айнымалылар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/p8ufN3H2ZUE" title="Переменные в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  
      
    `
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson2 = lesson2;
  }
/**
 * Улучшенный урок 3 для курса Python
 */

const lesson3 = {
    title: "3-сабақ: Операторлар және өрнектер",
    content: `
      <section class="theory">
        <h2>Операторлар және өрнектер</h2>
        <p>Python-дағы операторлар - бұл операндтарға (айнымалылар мен мәндерге) операцияларды орындайтын арнайы таңбалар. Өрнектер операторлар мен операндтардан тұрады және нәтиже алу үшін есептеледі.</p>
        
        <div class="info-card">
          <h4>Өрнек деген не?</h4>
          <p>Өрнек - бұл мән алу үшін есептелетін мәндер, айнымалылар, операторлар және функция шақыруларының комбинациясы. Мысалы, <code>2 + 3</code> - бұл <code>5</code> мәніне есептелетін өрнек.</p>
        </div>
        
        <h3>Арифметикалық операторлар</h3>
        <p>Арифметикалық операторлар математикалық операцияларды орындау үшін қолданылады.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Қосу (+)</h4>
            <p>Екі операндты қосады.</p>
            <div class="example">
              <pre><code>x = 5 + 3  # x = 8</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Азайту (-)</h4>
            <p>Бірінші операндтан екінші операндты азайтады.</p>
            <div class="example">
              <pre><code>x = 5 - 3  # x = 2</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Көбейту (*)</h4>
            <p>Екі операндты көбейтеді.</p>
            <div class="example">
              <pre><code>x = 5 * 3  # x = 15</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Бөлу (/)</h4>
            <p>Бірінші операндты екіншіге бөледі (нәтиже әрқашан қалқымалы нүктелі сан).</p>
            <div class="example">
              <pre><code>x = 5 / 2  # x = 2.5</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Бүтін санды бөлу (//)</h4>
            <p>Бірінші операндты екіншіге бөліп, нәтиженің бүтін бөлігін қайтарады.</p>
            <div class="example">
              <pre><code>x = 5 // 2  # x = 2</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Бөлуден қалған қалдық (%)</h4>
            <p>Бірінші операндты екіншіге бөлгендегі қалдықты қайтарады.</p>
            <div class="example">
              <pre><code>x = 5 % 2  # x = 1</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Дәрежеге шығару (**)</h4>
            <p>Бірінші операндты екінші операнд дәрежесіне шығарады.</p>
            <div class="example">
              <pre><code>x = 2 ** 3  # x = 8</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Унарлы минус (-)</h4>
            <p>Операндтың таңбасын өзгертеді.</p>
            <div class="example">
              <pre><code>x = 5
  y = -x  # y = -5</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Салыстыру операторлары</h3>
        <p>Салыстыру операторлары екі мәнді салыстыру үшін қолданылады. Салыстыру операциясының нәтижесі - логикалық мән (True немесе False).</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Тең (==)</h4>
            <p>Екі операндтың тең екенін тексереді.</p>
            <div class="example">
              <pre><code>x = (5 == 5)  # x = True
  y = (5 == 6)  # y = False</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Тең емес (!=)</h4>
            <p>Екі операндтың тең емес екенін тексереді.</p>
            <div class="example">
              <pre><code>x = (5 != 5)  # x = False
  y = (5 != 6)  # y = True</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Үлкен (>)</h4>
            <p>Бірінші операндтың екіншіден үлкен екенін тексереді.</p>
            <div class="example">
              <pre><code>x = (5 > 3)  # x = True
  y = (5 > 7)  # y = False</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Кіші (<)</h4>
            <p>Бірінші операндтың екіншіден кіші екенін тексереді.</p>
            <div class="example">
              <pre><code>x = (5 < 3)  # x = False
  y = (5 < 7)  # y = True</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Үлкен немесе тең (>=)</h4>
            <p>Бірінші операндтың екіншіден үлкен немесе тең екенін тексереді.</p>
            <div class="example">
              <pre><code>x = (5 >= 5)  # x = True
  y = (5 >= 7)  # y = False</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Кіші немесе тең (<=)</h4>
            <p>Бірінші операндтың екіншіден кіші немесе тең екенін тексереді.</p>
            <div class="example">
              <pre><code>x = (5 <= 5)  # x = True
  y = (5 <= 3)  # y = False</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Логикалық операторлар</h3>
        <p>Логикалық операторлар логикалық өрнектерді біріктіру үшін қолданылады.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Және (and)</h4>
            <p>Егер екі операнд та шындық болса, True қайтарады.</p>
            <div class="example">
              <pre><code>x = True and True   # x = True
  y = True and False  # y = False
  z = False and False # z = False</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Немесе (or)</h4>
            <p>Егер операндтардың ең болмағанда біреуі шындық болса, True қайтарады.</p>
            <div class="example">
              <pre><code>x = True or True   # x = True
  y = True or False  # y = True
  z = False or False # z = False</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Емес (not)</h4>
            <p>Операндтың логикалық мәнін теріске айналдырады.</p>
            <div class="example">
              <pre><code>x = not True   # x = False
  y = not False  # y = True</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Тағайындау операторлары</h3>
        <p>Тағайындау операторлары айнымалыларға мәндерді тағайындау үшін қолданылады.</p>
        
        <pre><code class="language-python"># Қарапайым тағайындау
  x = 5
  
  # Құрама тағайындау
  x += 3   # x = x + 3 баламасы
  x -= 2   # x = x - 2 баламасы
  x *= 4   # x = x * 4 баламасы
  x /= 2   # x = x / 2 баламасы
  x //= 2  # x = x // 2 баламасы
  x %= 3   # x = x % 3 баламасы
  x **= 2  # x = x ** 2 баламасы</code></pre>
        
        <div class="warning-card">
          <h4>Назар аударыңыз!</h4>
          <p>Python-да теңдік операторы - бұл <code>==</code>, <code>=</code> емес. Шарттарда <code>==</code> орнына <code>=</code> қолдану - жиі кездесетін қате.</p>
        </div>
        
        <h3>Операторлардың басымдылығы</h3>
        <p>Python-дағы операторлардың өрнектегі орындалу ретін анықтайтын әртүрлі басымдылықтары бар.</p>
        
        <div class="info-card">
          <h4>Басымдылық реті (жоғарыдан төменге):</h4>
          <ol>
            <li>Жақшалар <code>()</code></li>
            <li>Дәрежеге шығару <code>**</code></li>
            <li>Унарлы операторлар <code>+x</code>, <code>-x</code>, <code>~x</code></li>
            <li>Көбейту, бөлу <code>*</code>, <code>/</code>, <code>//</code>, <code>%</code></li>
            <li>Қосу, азайту <code>+</code>, <code>-</code></li>
            <li>Салыстыру операторлары <code>==</code>, <code>!=</code>, <code>></code>, <code>>=</code>, <code><</code>, <code><=</code></li>
            <li>Логикалық операторлар <code>not</code>, <code>and</code>, <code>or</code></li>
            <li>Тағайындау <code>=</code>, <code>+=</code>, <code>-=</code> және т.б.</li>
          </ol>
        </div>
        
        <pre><code class="language-python"># Операторлардың басымдылығының мысалдары
  x = 2 + 3 * 4      # x = 14, 20 емес, себебі * операторының + операторынан басымдылығы жоғары
  y = (2 + 3) * 4    # y = 20, жақшалар орындалу ретін өзгертеді
  z = 2 ** 3 * 2     # z = 16, 64 емес, себебі ** операторының * операторынан басымдылығы жоғары
  w = 2 * 3 ** 2     # w = 18, 36 емес, сол себептен</code></pre>
        
        <div class="tip-card">
          <h4>Кеңес</h4>
          <p>Егер сіз операторлардың басымдылығына сенімді болмасаңыз, операциялардың орындалу ретін нақты көрсету үшін жақшаларды қолданыңыз. Бұл кодты оқуға оңайлы етеді және қателерден аулақ болуға көмектеседі.</p>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cTyV3mmw92M" title="Python операторлар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cTyV3mmw92M" title="Операторы в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  
      <!-- Тесты удалены -->
    `,
    /* Тесты удалены */
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson3 = lesson3;
  }
/**
 * Улучшенный урок 4 для курса Python
 */

const lesson4 = {
    title: "4-сабақ: Шартты операторлар",
    content: `
      <section class="theory">
        <h2>Шартты операторлар</h2>
        <p>Шартты операторлар бағдарламаға шешімдер қабылдауға және шарттарға байланысты әртүрлі әрекеттерді орындауға мүмкіндік береді. Python-да негізгі шартты оператор <code>if</code> болып табылады.</p>
        
        <div class="info-card">
          <h4>Шартты оператор деген не?</h4>
          <p>Шартты оператор - бұл белгілі бір шарт орындалғанда ғана белгілі бір код блогын орындауға мүмкіндік беретін конструкция.</p>
        </div>
        
        <h3>if операторы</h3>
        <p><code>if</code> операторы шарт шындық (True) болса, код блогын орындайды.</p>
        
        <pre><code class="language-python"># if операторының қарапайым мысалы
  age = 18
  
  if age >= 18:
      print("Сіз кәмелетке толғансыз")
      
  # Нәтиже: "Сіз кәмелетке толғансыз"</code></pre>
        
        <div class="tip-card">
          <h4>if операторының синтаксисі</h4>
          <pre><code>if шарт:
      # шарт шындық болса орындалатын код блогы
      команда1
      команда2
      ...</code></pre>
          <p>Шегіністерге назар аударыңыз! Python-да шегіністер код блоктарын анықтау үшін қолданылады.</p>
        </div>
        
        <h3>if-else операторы</h3>
        <p><code>if-else</code> операторы шарт шындық болса бір код блогын, ал шарт жалған болса басқа код блогын орындайды.</p>
        
        <pre><code class="language-python"># if-else операторының мысалы
  age = 16
  
  if age >= 18:
      print("Сіз кәмелетке толғансыз")
  else:
      print("Сіз кәмелетке толмағансыз")
      
  # Нәтиже: "Сіз кәмелетке толмағансыз"</code></pre>
        
        <div class="theory-card">
          <h4>if-else операторының синтаксисі</h4>
          <pre><code>if шарт:
      # шарт шындық болса орындалатын код блогы
      команда1
      команда2
      ...
  else:
      # шарт жалған болса орындалатын код блогы
      команда1
      команда2
      ...</code></pre>
        </div>
        
        <h3>if-elif-else операторы</h3>
        <p><code>if-elif-else</code> операторы бірнеше шартты тексеріп, тиісті код блогын орындауға мүмкіндік береді.</p>
        
        <pre><code class="language-python"># if-elif-else операторының мысалы
  score = 85
  
  if score >= 90:
      print("Өте жақсы")
  elif score >= 80:
      print("Жақсы")
  elif score >= 70:
      print("Қанағаттанарлық")
  else:
      print("Қанағаттанарлықсыз")
      
  # Нәтиже: "Жақсы"</code></pre>
        
        <div class="theory-card">
          <h4>if-elif-else операторының синтаксисі</h4>
          <pre><code>if шарт1:
      # шарт1 шындық болса орындалатын код блогы
      команда1
      ...
  elif шарт2:
      # шарт1 жалған, ал шарт2 шындық болса орындалатын код блогы
      команда1
      ...
  elif шарт3:
      # шарт1 және шарт2 жалған, ал шарт3 шындық болса орындалатын код блогы
      команда1
      ...
  else:
      # барлық шарттар жалған болса орындалатын код блогы
      команда1
      ...</code></pre>
        </div>
        
        <div class="warning-card">
          <h4>Маңызды!</h4>
          <p>Python шарттарды ретпен тексереді және бірінші шындық шарт үшін код блогын орындайды. Қалған шарттар тексерілмейді.</p>
        </div>
        
        <h3>Кіріктірілген шартты операторлар</h3>
        <p>Шартты операторлар кіріктірілген болуы мүмкін, яғни бір шартты оператор басқа шартты операторды қамтуы мүмкін.</p>
        
        <pre><code class="language-python"># Кіріктірілген шартты операторлардың мысалы
  age = 25
  has_license = True
  
  if age >= 18:
      if has_license:
          print("Сіз көлік жүргізе аласыз")
      else:
          print("Сізге жүргізуші куәлігін алу керек")
  else:
      print("Сіз көлік жүргізу үшін тым жассыз")
      
  # Нәтиже: "Сіз көлік жүргізе аласыз"</code></pre>
        
        <h3>Тернарлық оператор</h3>
        <p>Тернарлық оператор - бұл шартты операторды бір жолға жазуға мүмкіндік беретін қысқартылған форма.</p>
        
        <pre><code class="language-python"># Тернарлық оператордың мысалы
  age = 20
  status = "кәмелетке толған" if age >= 18 else "кәмелетке толмаған"
  print(status)
      
  # Нәтиже: "кәмелетке толған"</code></pre>
        
        <div class="theory-card">
          <h4>Тернарлық оператордың синтаксисі</h4>
          <pre><code>шарт_шындық_болса_мән if шарт else шарт_жалған_болса_мән</code></pre>
        </div>
        
        <h3>Шарттардағы логикалық операторлар</h3>
        <p>Логикалық операторлар <code>and</code>, <code>or</code> және <code>not</code> логикалық өрнектерді біріктіру немесе инверттеу үшін шарттарда жиі қолданылады.</p>
        
        <pre><code class="language-python"># Шарттарда логикалық операторларды қолдану мысалдары
  age = 25
  income = 50000
  
  # and (және) операторы
  if age >= 18 and income >= 30000:
      print("Сіз несие ала аласыз")
      
  # or (немесе) операторы
  if age < 18 or income < 30000:
      print("Сіз несие ала алмайсыз")
      
  # not (емес) операторы
  if not (age < 18):
      print("Сіз кәмелетке толғансыз")</code></pre>
        
        <div class="info-card">
          <h4>Логикалық операторлардың қысқа тұйықталуы</h4>
          <p>Python логикалық операторлар үшін "қысқа тұйықталуды" қолданады:</p>
          <ul>
            <li><code>and</code> операторы үшін: егер бірінші операнд жалған болса, екінші операнд есептелмейді, себебі нәтиже кез келген жағдайда жалған болады.</li>
            <li><code>or</code> операторы үшін: егер бірінші операнд шындық болса, екінші операнд есептелмейді, себебі нәтиже кез келген жағдайда шындық болады.</li>
          </ul>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/i_avof5lDGo" title="Python шартты операторлар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/i_avof5lDGo" title="Условные операторы в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  
      
    `
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson4 = lesson4;
  }
/**
 * Улучшенный урок 5 для курса Python
 */

const lesson5 = {
    title: "5-сабақ: Циклдер",
    content: `
      <section class="theory">
        <h2>Циклдер</h2>
        <p>Циклдер код блогын бірнеше рет орындауға мүмкіндік береді. Python-да циклдердің екі негізгі түрі бар: <code>for</code> және <code>while</code>.</p>
        
        <div class="info-card">
          <h4>Цикл деген не?</h4>
          <p>Цикл - бұл код блогын бірнеше рет орындауға мүмкіндік беретін конструкция. Бұл жиынтықтағы әрбір элемент үшін бірдей әрекетті орындау немесе белгілі бір шарт орындалғанша әрекетті орындау үшін пайдалы.</p>
        </div>
        
        <h3>for циклі</h3>
        <p><code>for</code> циклі тізбектер бойынша итерация жасау үшін қолданылады (тізім, кортеж, сөздік, жол және т.б.).</p>
        
        <pre><code class="language-python"># for циклінің қарапайым мысалы
  fruits = ["алма", "банан", "шие"]
  
  for fruit in fruits:
      print(fruit)
      
  # Нәтиже:
  # алма
  # банан
  # шие</code></pre>
        
        <div class="theory-card">
          <h4>for циклінің синтаксисі</h4>
          <pre><code>for айнымалы in тізбек:
      # тізбектің әрбір элементі үшін орындалатын код блогы
      команда1
      команда2
      ...</code></pre>
        </div>
        
        <h3>range() функциясымен for циклі</h3>
        <p><code>range()</code> функциясы сандар тізбегін жасау үшін <code>for</code> циклімен бірге жиі қолданылады.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>range(stop)</h4>
            <p>0-ден stop-1-ге дейінгі сандар тізбегін жасайды.</p>
            <div class="example">
              <pre><code>for i in range(5):
      print(i)
      
  # Нәтиже:
  # 0
  # 1
  # 2
  # 3
  # 4</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>range(start, stop)</h4>
            <p>start-тан stop-1-ге дейінгі сандар тізбегін жасайды.</p>
            <div class="example">
              <pre><code>for i in range(2, 6):
      print(i)
      
  # Нәтиже:
  # 2
  # 3
  # 4
  # 5</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>range(start, stop, step)</h4>
            <p>start-тан stop-1-ге дейін step қадамымен сандар тізбегін жасайды.</p>
            <div class="example">
              <pre><code>for i in range(1, 10, 2):
      print(i)
      
  # Нәтиже:
  # 1
  # 3
  # 5
  # 7
  # 9</code></pre>
            </div>
          </div>
        </div>
        
        <h3>while циклі</h3>
        <p><code>while</code> циклі шарт шындық болғанша код блогын орындайды.</p>
        
        <pre><code class="language-python"># while циклінің қарапайым мысалы
  count = 0
  
  while count < 5:
      print(count)
      count += 1
      
  # Нәтиже:
  # 0
  # 1
  # 2
  # 3
  # 4</code></pre>
        
        <div class="theory-card">
          <h4>while циклінің синтаксисі</h4>
          <pre><code>while шарт:
      # шарт шындық болғанша орындалатын код блогы
      команда1
      команда2
      ...</code></pre>
        </div>
        
        <div class="warning-card">
          <h4>Назар аударыңыз!</h4>
          <p><code>while</code> циклімен абай болыңыз, өйткені егер шарт ешқашан жалғанға айналмаса, бұл шексіз циклге әкелуі мүмкін. Шарттың белгілі бір сәтте жалғанға айналатынына көз жеткізіңіз.</p>
        </div>
        
        <h3>break және continue операторлары</h3>
        <p><code>break</code> және <code>continue</code> операторлары циклдің орындалуын басқару үшін қолданылады.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>break</h4>
            <p><code>break</code> операторы циклді тоқтатып, басқаруды циклден кейінгі код жолына береді.</p>
            <div class="example">
              <pre><code>for i in range(10):
      if i == 5:
          break
      print(i)
      
  # Нәтиже:
  # 0
  # 1
  # 2
  # 3
  # 4</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>continue</h4>
            <p><code>continue</code> операторы циклдің ағымдағы итерациясын тоқтатып, келесі итерацияға өтеді.</p>
            <div class="example">
              <pre><code>for i in range(10):
      if i % 2 == 0:
          continue
      print(i)
      
  # Нәтиже:
  # 1
  # 3
  # 5
  # 7
  # 9</code></pre>
            </div>
          </div>
        </div>
        
        <h3>else блогы бар for циклі</h3>
        <p><code>for</code> циклінде міндетті емес <code>else</code> блогы болуы мүмкін, ол цикл қалыпты түрде аяқталғанда орындалады (<code>break</code> операторымен үзілмегенде).</p>
        
        <pre><code class="language-python"># else блогы бар for циклінің мысалы
  for i in range(5):
      print(i)
  else:
      print("Цикл аяқталды")
      
  # Нәтиже:
  # 0
  # 1
  # 2
  # 3
  # 4
  # Цикл аяқталды
  
  # break операторы бар else блогымен for циклінің мысалы
  for i in range(5):
      if i == 3:
          break
      print(i)
  else:
      print("Цикл аяқталды")  # Бұл блок орындалмайды
      
  # Нәтиже:
  # 0
  # 1
  # 2</code></pre>
        
        <h3>else блогы бар while циклі</h3>
        <p>Ұқсас түрде, <code>while</code> циклінде де <code>else</code> блогы болуы мүмкін.</p>
        
        <pre><code class="language-python"># else блогы бар while циклінің мысалы
  count = 0
  
  while count < 3:
      print(count)
      count += 1
  else:
      print("Цикл аяқталды")
      
  # Нәтиже:
  # 0
  # 1
  # 2
  # Цикл аяқталды</code></pre>
        
        <h3>Кіріктірілген циклдер</h3>
        <p>Циклдер кіріктірілген болуы мүмкін, яғни бір цикл басқа циклді қамтуы мүмкін.</p>
        
        <pre><code class="language-python"># Кіріктірілген циклдердің мысалы
  for i in range(3):
      for j in range(2):
          print(f"i = {i}, j = {j}")
      
  # Нәтиже:
  # i = 0, j = 0
  # i = 0, j = 1
  # i = 1, j = 0
  # i = 1, j = 1
  # i = 2, j = 0
  # i = 2, j = 1</code></pre>
        
        <div class="tip-card">
          <h4>Кеңес</h4>
          <p>Кіріктірілген циклдер матрицалар немесе кестелер сияқты көп өлшемді деректер құрылымымен жұмыс істеу үшін өте пайдалы болуы мүмкін. Алайда, олар бағдарламаның орындалу уақытын айтарлықтай ұзартуы мүмкін, сондықтан оларды абайлап қолданыңыз.</p>
        </div>
        
        <h3>Тізім генераторлары (List Comprehensions)</h3>
        <p>Тізім генераторлары - бұл бар тізбектер негізінде жаңа тізімдерді жасаудың ықшам тәсілі.</p>
        
        <pre><code class="language-python"># Тізім генераторының мысалы
  numbers = [1, 2, 3, 4, 5]
  
  # Әрбір элементі 2-ге көбейтілген жаңа тізім жасау
  doubled = [x * 2 for x in numbers]
  print(doubled)  # [2, 4, 6, 8, 10]
  
  # 0-ден 9-ға дейінгі жұп сандар тізімін жасау
  evens = [x for x in range(10) if x % 2 == 0]
  print(evens)  # [0, 2, 4, 6, 8]</code></pre>
        
        <div class="info-card">
          <h4>Тізім генераторының синтаксисі</h4>
          <pre><code>[өрнек for элемент in тізбек if шарт]</code></pre>
          <p><code>if шарт</code> бөлігі міндетті емес және элементтерді сүзу үшін қолданылады.</p>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QCcMcUa2Y7E" title="Python циклдар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QCcMcUa2Y7E" title="Циклы в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  
      <!-- Тесты удалены -->
    `,
    /* Тесты удалены */
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson5 = lesson5;
  }
/**
 * Улучшенный урок 6 для курса Python
 */

const lesson6 = {
    title: "6-сабақ: Тізімдер және кортеждер",
    content: `
      <section class="theory">
        <h2>Тізімдер және кортеждер</h2>
        <p>Тізімдер және кортеждер - бұл бір айнымалыда бірнеше элементтерді сақтауға арналған деректер құрылымы. Олар Python-дағы ең жиі қолданылатын деректер құрылымдарының бірі болып табылады.</p>
        
        <div class="info-card">
          <h4>Тізбектер дегеніміз не?</h4>
          <p>Тізімдер мен кортеждер Python-дағы тізбектердің мысалы болып табылады. Тізбек - бұл әрбір элементтің өз индексі (орны) бар реттелген элементтер жиынтығы.</p>
        </div>
        
        <h3>Тізімдер (Lists)</h3>
        <p>Тізімдер - бұл өзгертілетін, реттелген элементтер жиынтығы. Олар әртүрлі деректер типтерінің элементтерін қамтуы мүмкін.</p>
        
        <div class="theory-card">
          <h4>Тізімдерді жасау</h4>
          <p>Тізімдер төртбұрышты жақшалар <code>[]</code> немесе <code>list()</code> функциясы арқылы жасалады.</p>
          <div class="example">
            <pre><code># Бос тізім жасау
  empty_list = []
  empty_list2 = list()
  
  # Элементтері бар тізім жасау
  fruits = ["алма", "банан", "шие"]
  numbers = [1, 2, 3, 4, 5]
  mixed = [1, "сәлем", True, 3.14]</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Тізім элементтеріне қол жеткізу</h4>
          <p>Тізім элементтеріне индекс арқылы қол жеткізіледі. Индекстеу 0-ден басталады.</p>
          <div class="example">
            <pre><code>fruits = ["алма", "банан", "шие"]
  
  # Элементтерге оң индекс арқылы қол жеткізу
  print(fruits[0])  # алма
  print(fruits[1])  # банан
  print(fruits[2])  # шие
  
  # Элементтерге теріс индекс арқылы қол жеткізу
  print(fruits[-1])  # шие (соңғы элемент)
  print(fruits[-2])  # банан (соңғыдан бұрынғы элемент)
  print(fruits[-3])  # алма (соңынан үшінші элемент)</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Тізім элементтерін өзгерту</h4>
          <p>Тізімдер өзгертілетін болып табылады, яғни олардың элементтерін жасалғаннан кейін өзгертуге болады.</p>
          <div class="example">
            <pre><code>fruits = ["алма", "банан", "шие"]
  
  # Элементті өзгерту
  fruits[1] = "апельсин"
  print(fruits)  # ["алма", "апельсин", "шие"]</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Тізім кесінділері</h4>
          <p>Кесінділер тізімнен ішкі тізімді алуға мүмкіндік береді.</p>
          <div class="example">
            <pre><code>numbers = [0, 1, 2, 3, 4, 5]
  
  # [басы:соңы] кесіндісі (соңы қосылмайды)
  print(numbers[1:4])  # [1, 2, 3]
  
  # [:соңы] кесіндісі (басынан соңы-1 дейін)
  print(numbers[:3])   # [0, 1, 2]
  
  # [басы:] кесіндісі (басынан соңына дейін)
  print(numbers[3:])   # [3, 4, 5]
  
  # [басы:соңы:қадам] кесіндісі
  print(numbers[::2])  # [0, 2, 4] (әрбір екінші элемент)</code></pre>
          </div>
        </div>
        
        <h3>Тізім әдістері</h3>
        <p>Python тізімдермен жұмыс істеу үшін көптеген кіріктірілген әдістерді ұсынады.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>append()</h4>
            <p>Тізімнің соңына элемент қосады.</p>
            <div class="example">
              <pre><code>fruits = ["алма", "банан"]
  fruits.append("шие")
  print(fruits)  # ["алма", "банан", "шие"]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>insert()</h4>
            <p>Көрсетілген позицияға элемент енгізеді.</p>
            <div class="example">
              <pre><code>fruits = ["алма", "шие"]
  fruits.insert(1, "банан")
  print(fruits)  # ["алма", "банан", "шие"]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>remove()</h4>
            <p>Көрсетілген элементтің бірінші кездесуін жояды.</p>
            <div class="example">
              <pre><code>fruits = ["алма", "банан", "шие"]
  fruits.remove("банан")
  print(fruits)  # ["алма", "шие"]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>pop()</h4>
            <p>Индекс бойынша элементті жояды және оны қайтарады.</p>
            <div class="example">
              <pre><code>fruits = ["алма", "банан", "шие"]
  removed = fruits.pop(1)
  print(removed)  # банан
  print(fruits)   # ["алма", "шие"]
  
  # Аргументсіз pop() соңғы элементті жояды
  last = fruits.pop()
  print(last)     # шие
  print(fruits)   # ["алма"]</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>extend()</h4>
            <p>Басқа тізімнен (немесе кез келген итерацияланатын объектіден) элементтерді қосады.</p>
            <div class="example">
              <pre><code>fruits = ["алма", "банан"]
  more_fruits = ["шие", "апельсин"]
  fruits.extend(more_fruits)
  print(fruits)  # ["алма", "банан", "шие", "апельсин"]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>sort()</h4>
            <p>Тізімді орнында сұрыптайды.</p>
            <div class="example">
              <pre><code>numbers = [3, 1, 4, 1, 5, 9, 2]
  numbers.sort()
  print(numbers)  # [1, 1, 2, 3, 4, 5, 9]
  
  # Кері ретпен сұрыптау
  numbers.sort(reverse=True)
  print(numbers)  # [9, 5, 4, 3, 2, 1, 1]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>reverse()</h4>
            <p>Тізім элементтерінің ретін керісінше айналдырады.</p>
            <div class="example">
              <pre><code>fruits = ["алма", "банан", "шие"]
  fruits.reverse()
  print(fruits)  # ["шие", "банан", "алма"]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>count()</h4>
            <p>Тізімдегі элементтің кездесу санын қайтарады.</p>
            <div class="example">
              <pre><code>numbers = [1, 2, 3, 1, 4, 1, 5]
  count = numbers.count(1)
  print(count)  # 3</code></pre>
            </div>
          </div>
        </div>
        
        <div class="tip-card">
          <h4>Тізімдермен жұмыс істеуге арналған пайдалы функциялар</h4>
          <ul>
            <li><code>len(list)</code> - тізімнің ұзындығын қайтарады</li>
            <li><code>max(list)</code> - тізімнің ең үлкен элементін қайтарады</li>
            <li><code>min(list)</code> - тізімнің ең кіші элементін қайтарады</li>
            <li><code>sum(list)</code> - тізімнің барлық элементтерінің қосындысын қайтарады (сандық тізімдер үшін)</li>
            <li><code>sorted(list)</code> - бастапқы тізімді өзгертпей, жаңа сұрыпталған тізімді қайтарады</li>
          </ul>
        </div>
        
        <h3>Кортеждер (Tuples)</h3>
        <p>Кортеждер - бұл өзгертілмейтін, реттелген элементтер жиынтығы. Олар тізімдерге ұқсас, бірақ оларды жасалғаннан кейін өзгертуге болмайды.</p>
        
        <div class="theory-card">
          <h4>Кортеждерді жасау</h4>
          <p>Кортеждер дөңгелек жақшалар <code>()</code> немесе <code>tuple()</code> функциясы арқылы жасалады.</p>
          <div class="example">
            <pre><code># Бос кортеж жасау
  empty_tuple = ()
  empty_tuple2 = tuple()
  
  # Элементтері бар кортеж жасау
  coordinates = (10, 20)
  person = ("Алексей", 25, "Мәскеу")
  
  # Бір элементті кортеж (үтірге назар аударыңыз)
  single_item = (42,)  # үтірсіз бұл жай сан болады</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Кортеж элементтеріне қол жеткізу</h4>
          <p>Кортеж элементтеріне тізім элементтері сияқты индекс арқылы қол жеткізіледі.</p>
          <div class="example">
            <pre><code>person = ("Алексей", 25, "Мәскеу")
  
  print(person[0])  # Алексей
  print(person[1])  # 25
  print(person[2])  # Мәскеу
  print(person[-1]) # Мәскеу</code></pre>
          </div>
        </div>
        
        <div class="warning-card">
          <h4>Маңызды!</h4>
          <p>Кортеждер өзгертілмейді. Кортежді жасағаннан кейін оның элементтерін өзгертуге, қосуға немесе жоюға болмайды.</p>
          <pre><code>coordinates = (10, 20)
  # coordinates[0] = 15  # Бұл TypeError қатесін тудырады</code></pre>
        </div>
        
        <div class="theory-card">
          <h4>Кортеж әдістері</h4>
          <p>Кортеждер өзгертілмейтін болғандықтан, оларда тізімдерге қарағанда әлдеқайда аз әдістер бар.</p>
          <div class="example">
            <pre><code>numbers = (1, 2, 3, 1, 4, 1, 5)
  
  # count() - элементтің кездесу санын қайтарады
  count = numbers.count(1)
  print(count)  # 3
  
  # index() - элементтің бірінші кездесуінің индексін қайтарады
  index = numbers.index(4)
  print(index)  # 4</code></pre>
          </div>
        </div>
        
        <h3>Тізімдер мен кортеждер арасындағы түрлендіру</h3>
        <p>Сіз тізімді кортежге және керісінше оңай түрлендіре аласыз.</p>
        
        <pre><code class="language-python"># Тізімді кортежге түрлендіру
  fruits_list = ["алма", "банан", "шие"]
  fruits_tuple = tuple(fruits_list)
  print(fruits_tuple)  # ("алма", "банан", "шие")
  
  # Кортежді тізімге түрлендіру
  numbers_tuple = (1, 2, 3, 4, 5)
  numbers_list = list(numbers_tuple)
  print(numbers_list)  # [1, 2, 3, 4, 5]</code></pre>
        
        <h3>Қашан тізімдерді, ал қашан кортеждерді қолдану керек?</h3>
        <div class="info-card">
          <h4>Тізімдерді қашан қолдану керек:</h4>
          <ul>
            <li>Сізге жиынтықты өзгерту қажет болғанда (элементтерді қосу, жою немесе өзгерту)</li>
            <li>Сізге жиынтықты өзгерту үшін әдістер қажет болғанда (sort, append, extend және т.б.)</li>
            <li>Сіз өзгеруі мүмкін біртекті деректермен жұмыс істегенде</li>
          </ul>
          
          <h4>Кортеждерді қашан қолдану керек:</h4>
          <ul>
            <li>Сізге өзгертілмейтін жиынтық қажет болғанда (кездейсоқ өзгертуден қорғау)</li>
            <li>Сіз кортежді сөздікте кілт ретінде қолданғыңыз келгенде (тізімдер кілттер бола алмайды)</li>
            <li>Сіз логикалық түрде байланысты әртүрлі деректермен жұмыс істегенде (мысалы, деректер базасындағы жазба)</li>
            <li>Сізге өнімділік маңызды болғанда (кортеждер тізімдерге қарағанда жылдамырақ жұмыс істейді)</li>
          </ul>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-oCYr9fSXBg" title="Python тізімдер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-oCYr9fSXBg" title="Списки и кортежи в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  
      
    `
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson6 = lesson6;
  }
/**
 * Улучшенный урок 7 для курса Python
 */

const lesson7 = {
    title: "7-сабақ: Сөздіктер және жиындар",
    content: `
      <section class="theory">
        <h2>Сөздіктер және жиындар</h2>
        <p>Сөздіктер және жиындар - бұл Python-дағы элементтер жиынтығын тиімді сақтауға және өңдеуге мүмкіндік беретін қуатты деректер құрылымдары.</p>
        
        <div class="info-card">
          <h4>Хеш-кестелер дегеніміз не?</h4>
          <p>Python-дағы сөздіктер де, жиындар да хеш-кестелерді қолдану арқылы жүзеге асырылады, бұл элементтерге өте жылдам қол жеткізуді қамтамасыз етеді (орташа есеппен O(1) уақытында).</p>
        </div>
        
        <h3>Сөздіктер (Dictionaries)</h3>
        <p>Сөздік - бұл өзгертілетін, реттелмеген кілт-мән жұбы жиынтығы. Әрбір кілт бірегей және өзгертілмейтін болуы керек (жолдар, сандар, кортеждер).</p>
        
        <div class="theory-card">
          <h4>Сөздіктерді жасау</h4>
          <p>Сөздіктер фигуралық жақшалар <code>{}</code> немесе <code>dict()</code> функциясы арқылы жасалады.</p>
          <div class="example">
            <pre><code># Бос сөздік жасау
  empty_dict = {}
  empty_dict2 = dict()
  
  # Элементтері бар сөздік жасау
  person = {
      "name": "Алексей",
      "age": 25,
      "city": "Мәскеу"
  }
  
  # dict() функциясы арқылы сөздік жасау
  person2 = dict(name="Мария", age=23, city="Санкт-Петербург")</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Сөздік элементтеріне қол жеткізу</h4>
          <p>Сөздіктің мәндеріне кілт арқылы қол жеткізіледі.</p>
          <div class="example">
            <pre><code>person = {
      "name": "Алексей",
      "age": 25,
      "city": "Мәскеу"
  }
  
  # Кілт арқылы мәндерге қол жеткізу
  print(person["name"])  # Алексей
  print(person["age"])   # 25
  print(person["city"])  # Мәскеу
  
  # get() әдісі арқылы қол жеткізу (қауіпсіз тәсіл)
  print(person.get("name"))  # Алексей
  print(person.get("email"))  # None (сөздікте кілт жоқ)
  print(person.get("email", "Көрсетілмеген"))  # "Көрсетілмеген" (әдепкі мән)</code></pre>
          </div>
        </div>
        
        <div class="warning-card">
          <h4>Назар аударыңыз!</h4>
          <p>Егер сіз төртбұрышты жақшалар <code>dict["key"]</code> арқылы жоқ кілтке қол жеткізуге тырыссаңыз, Python <code>KeyError</code> қатесін шығарады. <code>get()</code> әдісі қауіпсіздеу, өйткені ол кілт табылмаған жағдайда <code>None</code> немесе көрсетілген әдепкі мәнді қайтарады.</p>
        </div>
        
        <div class="theory-card">
          <h4>Сөздіктерді өзгерту</h4>
          <p>Сөздіктер өзгертілетін болып табылады, яғни олардың элементтерін қосуға, өзгертуге және жоюға болады.</p>
          <div class="example">
            <pre><code>person = {
      "name": "Алексей",
      "age": 25,
      "city": "Мәскеу"
  }
  
  # Жаңа кілт-мән жұбын қосу
  person["email"] = "alex@example.com"
  print(person)  # {'name': 'Алексей', 'age': 25, 'city': 'Мәскеу', 'email': 'alex@example.com'}
  
  # Мәнді өзгерту
  person["age"] = 26
  print(person)  # {'name': 'Алексей', 'age': 26, 'city': 'Мәскеу', 'email': 'alex@example.com'}
  
  # Кілт-мән жұбын жою
  del person["city"]
  print(person)  # {'name': 'Алексей', 'age': 26, 'email': 'alex@example.com'}</code></pre>
          </div>
        </div>
        
        <h3>Сөздік әдістері</h3>
        <p>Python сөздіктермен жұмыс істеу үшін көптеген кіріктірілген әдістерді ұсынады.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>keys()</h4>
            <p>Сөздіктің барлық кілттерін қайтарады.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Мәскеу"}
  keys = person.keys()
  print(keys)  # dict_keys(['name', 'age', 'city'])</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>values()</h4>
            <p>Сөздіктің барлық мәндерін қайтарады.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Мәскеу"}
  values = person.values()
  print(values)  # dict_values(['Алексей', 25, 'Мәскеу'])</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>items()</h4>
            <p>Барлық кілт-мән жұптарын кортеждер түрінде қайтарады.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Мәскеу"}
  items = person.items()
  print(items)  # dict_items([('name', 'Алексей'), ('age', 25), ('city', 'Мәскеу')])</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>update()</h4>
            <p>Сөздікті басқа сөздіктен кілт-мән жұптарын қосу арқылы жаңартады.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25}
  more_info = {"city": "Мәскеу", "email": "alex@example.com"}
  person.update(more_info)
  print(person)  # {'name': 'Алексей', 'age': 25, 'city': 'Мәскеу', 'email': 'alex@example.com'}</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>pop()</h4>
            <p>Көрсетілген кілтті жояды және сәйкес мәнді қайтарады.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Мәскеу"}
  age = person.pop("age")
  print(age)     # 25
  print(person)  # {'name': 'Алексей', 'city': 'Мәскеу'}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>popitem()</h4>
            <p>Соңғы қосылған кілт-мән жұбын жояды және қайтарады.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Мәскеу"}
  item = person.popitem()
  print(item)    # ('city', 'Мәскеу')
  print(person)  # {'name': 'Алексей', 'age': 25}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>clear()</h4>
            <p>Сөздіктен барлық элементтерді жояды.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Мәскеу"}
  person.clear()
  print(person)  # {}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Көшірме жасау</h4>
            <p>Сөздіктің көшірмесін жасайды.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25}
  person_copy = person.copy()
  person_copy["age"] = 26
  print(person)       # {'name': 'Алексей', 'age': 25}
  print(person_copy)  # {'name': 'Алексей', 'age': 26}</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Сөздіктерді өткізу</h4>
          <p>Сөздік элементтерін өткізудің бірнеше тәсілі бар.</p>
          <div class="example">
            <pre><code>person = {
      "name": "Алексей",
      "age": 25,
      "city": "Мәскеу"
  }
  
  # Кілттерді өткізу (әдепкі бойынша)
  for key in person:
      print(key, ":", person[key])
  
  # keys() әдісі арқылы кілттерді өткізу
  for key in person.keys():
      print(key, ":", person[key])
  
  # values() әдісі арқылы мәндерді өткізу
  for value in person.values():
      print(value)
  
  # items() әдісі арқылы кілт-мән жұптарын өткізу
  for key, value in person.items():
      print(key, ":", value)</code></pre>
          </div>
        </div>
        
        <div class="tip-card">
          <h4>Кірістірілген сөздіктер</h4>
          <p>Сөздіктер мән ретінде басқа сөздіктерді қамтуы мүмкін, бұл күрделі деректер құрылымдарын жасауға мүмкіндік береді.</p>
          <pre><code>student = {
      "name": "Алексей",
      "age": 20,
      "courses": {
          "math": {"grade": 85, "credits": 3},
          "history": {"grade": 92, "credits": 2},
          "programming": {"grade": 78, "credits": 4}
      }
  }
  
  # Кірістірілген мәндерге қол жеткізу
  print(student["courses"]["math"]["grade"])  # 85</code></pre>
        </div>
        
        <h3>Жиындар (Sets)</h3>
        <p>Жиын - бұл реттелмеген бірегей элементтер жиынтығы. Жиындар қайталанатын элементтерді жою және жиындармен математикалық операцияларды орындау үшін пайдалы.</p>
        
        <div class="theory-card">
          <h4>Жиындарды жасау</h4>
          <p>Жиындар фигуралық жақшалар <code>{}</code> немесе <code>set()</code> функциясы арқылы жасалады.</p>
          <div class="example">
            <pre><code># Бос жиын жасау
  # Назар аударыңыз: {} бос сөздікті жасайды, жиынды емес!
  empty_set = set()
  
  # Элементтері бар жиын жасау
  fruits = {"алма", "банан", "шие"}
  numbers = {1, 2, 3, 4, 5}
  
  # Тізімнен жиын жасау (қайталанатын элементтерді жояды)
  numbers_list = [1, 2, 2, 3, 4, 4, 5]
  unique_numbers = set(numbers_list)
  print(unique_numbers)  # {1, 2, 3, 4, 5}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Жиындармен негізгі операциялар</h4>
          <p>Жиындар элементтерді қосу, жою және элементтің бар-жоғын тексеру сияқты әртүрлі операцияларды қолдайды.</p>
          <div class="example">
            <pre><code>fruits = {"алма", "банан", "шие"}
  
  # Элементті қосу
  fruits.add("апельсин")
  print(fruits)  # {'алма', 'банан', 'шие', 'апельсин'}
  
  # Бірнеше элементтерді қосу
  fruits.update(["манго", "киви"])
  print(fruits)  # {'алма', 'банан', 'шие', 'апельсин', 'манго', 'киви'}
  
  # Элементті жою
  fruits.remove("банан")  # Егер элемент жоқ болса, қате шығарады
  print(fruits)  # {'алма', 'шие', 'апельсин', 'манго', 'киви'}
  
  # Қауіпсіз элементті жою
  fruits.discard("шие")  # Егер элемент жоқ болса, қате шығармайды
  print(fruits)  # {'алма', 'апельсин', 'манго', 'киви'}
  
  # Элементтің бар-жоғын тексеру
  print("алма" in fruits)  # True
  print("банан" in fruits)   # False</code></pre>
          </div>
        </div>
        
        <h3>Жиындармен математикалық операциялар</h3>
        <p>Жиындар біріктіру, қиылысу, айырмашылық және симметриялық айырмашылық сияқты стандартты математикалық операцияларды қолдайды.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Біріктіру (Union)</h4>
            <p>Екі жиыннан барлық элементтерді қамтитын жиынды қайтарады.</p>
            <div class="example">
              <pre><code>set1 = {1, 2, 3, 4, 5}
  set2 = {4, 5, 6, 7, 8}
  
  # | операторын қолдану
  union_set = set1 | set2
  print(union_set)  # {1, 2, 3, 4, 5, 6, 7, 8}
  
  # union() әдісін қолдану
  union_set = set1.union(set2)
  print(union_set)  # {1, 2, 3, 4, 5, 6, 7, 8}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Қиылысу (Intersection)</h4>
            <p>Тек екі жиында да бар элементтерді ғана қамтитын жиынды қайтарады.</p>
            <div class="example">
              <pre><code>set1 = {1, 2, 3, 4, 5}
  set2 = {4, 5, 6, 7, 8}
  
  # & операторын қолдану
  intersection_set = set1 & set2
  print(intersection_set)  # {4, 5}
  
  # intersection() әдісін қолдану
  intersection_set = set1.intersection(set2)
  print(intersection_set)  # {4, 5}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Айырмашылық (Difference)</h4>
            <p>Бірінші жиында бар, бірақ екінші жиында жоқ элементтерді қамтитын жиынды қайтарады.</p>
            <div class="example">
              <pre><code>set1 = {1, 2, 3, 4, 5}
  set2 = {4, 5, 6, 7, 8}
  
  # - операторын қолдану
  difference_set = set1 - set2
  print(difference_set)  # {1, 2, 3}
  
  # difference() әдісін қолдану
  difference_set = set1.difference(set2)
  print(difference_set)  # {1, 2, 3}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Симметриялық айырмашылық (Symmetric Difference)</h4>
            <p>Жиындардың біреуінде бар, бірақ екеуінде де бірдей болмайтын элементтерді қамтитын жиынды қайтарады.</p>
            <div class="example">
              <pre><code>set1 = {1, 2, 3, 4, 5}
  set2 = {4, 5, 6, 7, 8}
  
  # ^ операторын қолдану
  sym_diff_set = set1 ^ set2
  print(sym_diff_set)  # {1, 2, 3, 6, 7, 8}
  
  # symmetric_difference() әдісін қолдану
  sym_diff_set = set1.symmetric_difference(set2)
  print(sym_diff_set)  # {1, 2, 3, 6, 7, 8}</code></pre>
            </div>
          </div>
        </div>
        
        <div class="info-card">
          <h4>Қашан сөздіктерді, ал қашан жиындарды қолдану керек?</h4>
          <ul>
            <li><strong>Сөздіктерді қашан қолдану керек:</strong>
              <ul>
                <li>Сізге кілт-мән жұптарын сақтау қажет болғанда</li>
                <li>Сізге кілт арқылы мәндерге жылдам қол жеткізу қажет болғанда</li>
                <li>Сіз бірегей кілт арқылы анықталатын деректерді сақтағыңыз келгенде</li>
              </ul>
            </li>
            <li><strong>Жиындарды қашан қолдану керек:</strong>
              <ul>
                <li>Сізге тек бірегей элементтерді ғана сақтау қажет болғанда</li>
                <li>Сізге жиындармен математикалық операцияларды орындау қажет болғанда (біріктіру, қиылысу және т.б.)</li>
                <li>Сізге жиынтықта элементтің бар-жоғын жылдам тексеру қажет болғанда</li>
                <li>Сізге элементтердің реті маңызды болмағанда</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JXjARc_FRCY" title="Python сөздіктер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JXjARc_FRCY" title="Словари и множества в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `,
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson7 = lesson7;
  }

/**
 * Улучшенный урок 8 для курса Python
 */

const lesson8 = {
    title: "8-сабақ: Файлдармен жұмыс",
    content: `
      <section class="theory">
        <h2>Файлдармен жұмыс</h2>
        <p>Файлдармен жұмыс - бағдарламалаудың маңызды бөлігі, ол деректерді сақтауға және жүктеуге мүмкіндік береді. Python файлдармен жұмыс істеу үшін қарапайым және күшті құралдарды ұсынады.</p>
        
        <div class="info-card">
          <h4>Файлдармен жұмыс не үшін қажет?</h4>
          <p>Файлдар бағдарламаларға жұмысы аяқталғаннан кейін деректерді сақтауға, басқа бағдарламалармен деректермен алмасуға және жедел жадқа сыймайтын үлкен көлемдегі деректерді өңдеуге мүмкіндік береді.</p>
        </div>
        
        <h3>Файлдарды ашу және жабу</h3>
        <p>Python-да файлмен жұмыс істеу үшін оны алдымен <code>open()</code> функциясы арқылы ашу керек.</p>
        
        <div class="theory-card">
          <h4>open() функциясы</h4>
          <p><code>open()</code> функциясы екі негізгі параметрді қабылдайды: файл атауы және ашу режимі.</p>
          <div class="example">
            <pre><code># Файлды оқу үшін ашу
  file = open("example.txt", "r")
  
  # Файлмен операциялар орындау
  # ...
  
  # Файлды жабу
  file.close()</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Файлдарды ашу режимдері</h4>
          <p>Режим файлмен қандай операцияларды орындауға болатынын анықтайды.</p>
          <div class="example">
            <ul>
              <li><code>"r"</code> - оқу (әдепкі бойынша)</li>
              <li><code>"w"</code> - жазу (жаңа файл жасайды немесе бар файлды қайта жазады)</li>
              <li><code>"a"</code> - қосу (файлдың соңына деректерді қосады)</li>
              <li><code>"x"</code> - құру (жаңа файл жасайды, егер файл бұрыннан бар болса, қате шығарады)</li>
              <li><code>"b"</code> - бинарлық режим (мысалы, "rb" немесе "wb")</li>
              <li><code>"t"</code> - мәтіндік режим (әдепкі бойынша)</li>
              <li><code>"+"</code> - жаңарту (оқу және жазу)</li>
            </ul>
          </div>
        </div>
        
        <div class="warning-card">
          <h4>Маңызды!</h4>
          <p>Файлдармен жұмыс істеп болғаннан кейін оларды әрқашан <code>close()</code> әдісімен жабыңыз. Жабылмаған файлдар ресурстардың жоғалуына және деректердің жоғалуына әкелуі мүмкін.</p>
        </div>
        
        <h3>with құрылымын пайдалану</h3>
        <p>Python-да файлдармен жұмыс істеудің ұсынылатын тәсілі - <code>with</code> құрылымын пайдалану, ол блоктан шыққаннан кейін файлды автоматты түрде жабады, тіпті егер қате пайда болса да.</p>
        
        <pre><code class="language-python"># with құрылымын пайдалану
  with open("example.txt", "r") as file:
      # Файлмен операциялар орындау
      content = file.read()
      print(content)
      
  # Мұнда файл автоматты түрде жабылған</code></pre>
        
        <div class="tip-card">
          <h4>Кеңес</h4>
          <p>Файлдармен жұмыс істеу үшін әрқашан <code>with</code> құрылымын пайдаланыңыз, бұл жабылмаған файлдарға байланысты мәселелерді болдырмауға көмектеседі.</p>
        </div>
        
        <h3>Файлдан оқу</h3>
        <p>Python файлдан деректерді оқу үшін бірнеше әдістерді ұсынады.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>read()</h4>
            <p>Бүкіл файлды бір жол ретінде оқиды.</p>
            <div class="example">
              <pre><code>with open("example.txt", "r") as file:
      content = file.read()
      print(content)</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>readline()</h4>
            <p>Файлдан бір жолды оқиды.</p>
            <div class="example">
              <pre><code>with open("example.txt", "r") as file:
      line1 = file.readline()
      line2 = file.readline()
      print(line1)
      print(line2)</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>readlines()</h4>
            <p>Файлдың барлық жолдарын оқиды және оларды тізім түрінде қайтарады.</p>
            <div class="example">
              <pre><code>with open("example.txt", "r") as file:
      lines = file.readlines()
      print(lines)  # ['Жол 1\n', 'Жол 2\n', ...]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Файл бойынша итерация</h4>
            <p>Файл объектісі итерацияланатын объект болып табылады, бұл циклде файлдың жолдарын аралап шығуға мүмкіндік береді.</p>
            <div class="example">
              <pre><code>with open("example.txt", "r") as file:
      for line in file:
          print(line.strip())  # strip() жол соңындағы \n символын жояды</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Файлға жазу</h3>
        <p>Файлға деректерді жазу үшін <code>write()</code> және <code>writelines()</code> әдістері қолданылады.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>write()</h4>
            <p>Файлға жолды жазады.</p>
            <div class="example">
              <pre><code>with open("example.txt", "w") as file:
      file.write("Сәлем, әлем!\n")
      file.write("Бұл екінші жол.")</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>writelines()</h4>
            <p>Файлға жолдар тізімін жазады.</p>
            <div class="example">
              <pre><code>lines = ["Жол 1\n", "Жол 2\n", "Жол 3\n"]
with open("example.txt", "w") as file:
      file.writelines(lines)</code></pre>
            </div>
          </div>
        </div>
        
        <div class="warning-card">
          <h4>Назар аударыңыз!</h4>
          <p><code>write()</code> әдісі жаңа жол символын <code>\n</code> автоматты түрде қоспайды. Егер әрбір жазбаның жаңа жолдан басталуын қаласаңыз, жол соңына <code>\n</code> символын қосыңыз.</p>
        </div>
        
        <h3>Файл жолдарымен жұмыс</h3>
        <p>Python-да файл жолдарымен жұмыс істеу үшін <code>os.path</code> модулін немесе <code>pathlib</code> модулін (Python 3.4+) пайдалану ұсынылады.</p>
        
        <div class="theory-card">
          <h4>os.path модулі</h4>
          <p><code>os.path</code> модулі файл жолдарымен жұмыс істеуге арналған функцияларды ұсынады.</p>
          <div class="example">
            <pre><code>import os.path
  
  # Файлдың бар-жоғын тексеру
  if os.path.exists("example.txt"):
      print("Файл бар")
      
  # Абсолюттік жолды алу
  abs_path = os.path.abspath("example.txt")
  print(abs_path)
  
  # Файл аты мен кеңейтімін алу
  base = os.path.basename(abs_path)
  name, ext = os.path.splitext(base)
  print(f"Файл аты: {name}, кеңейтімі: {ext}")</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>pathlib модулі</h4>
          <p><code>pathlib</code> модулі файл жолдарымен жұмыс істеу үшін объектіге-бағытталған интерфейсті ұсынады.</p>
          <div class="example">
            <pre><code>from pathlib import Path
  
  # Path объектісін жасау
  path = Path("example.txt")
  
  # Файлдың бар-жоғын тексеру
  if path.exists():
      print("Файл бар")
      
  # Абсолюттік жолды алу
  abs_path = path.absolute()
  print(abs_path)
  
  # Файл аты мен кеңейтімін алу
  print(f"Файл аты: {path.stem}, кеңейтімі: {path.suffix}")</code></pre>
          </div>
        </div>
        
        <h3>CSV файлдарымен жұмыс</h3>
        <p>CSV (Comma-Separated Values) - мәліметтерді сақтауға арналған танымал формат. Python CSV файлдарымен жұмыс істеу үшін <code>csv</code> модулін ұсынады.</p>
        
        <div class="theory-card">
          <h4>CSV файлын оқу</h4>
          <p><code>csv</code> модулі CSV файлдарын оқу үшін функцияларды ұсынады.</p>
          <div class="example">
            <pre><code>import csv
  
  # CSV файлын оқу
  with open("data.csv", "r", newline="") as file:
      csv_reader = csv.reader(file)
      for row in csv_reader:
          print(row)  # row - жолдағы мәндер тізімі</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>CSV файлына жазу</h4>
          <p><code>csv</code> модулі сонымен қатар CSV файлдарына жазу үшін функцияларды ұсынады.</p>
          <div class="example">
            <pre><code>import csv
  
  # CSV файлына жазу
  with open("data.csv", "w", newline="") as file:
      csv_writer = csv.writer(file)
      csv_writer.writerow(["Аты", "Жасы", "Қала"])
      csv_writer.writerow(["Алексей", 25, "Мәскеу"])
      csv_writer.writerow(["Мария", 23, "Санкт-Петербург"])</code></pre>
          </div>
        </div>
        
        <div class="tip-card">
          <h4>Кеңес</h4>
          <p>CSV файлдарымен жұмыс істегенде әрқашан файлды ашқанда <code>newline=""</code> параметрін көрсетіңіз, бұл әртүрлі платформаларда жолдарды тасымалдауға байланысты мәселелерді болдырмауға көмектеседі.</p>
        </div>
        
        <h3>JSON файлдарымен жұмыс</h3>
        <p>JSON (JavaScript Object Notation) - мәліметтерді сақтауға және алмасуға арналған танымал формат. Python JSON файлдарымен жұмыс істеу үшін <code>json</code> модулін ұсынады.</p>
        
        <div class="theory-card">
          <h4>JSON файлын оқу</h4>
          <p><code>json</code> модулі JSON файлдарын оқу үшін функцияларды ұсынады.</p>
          <div class="example">
            <pre><code>import json
  
  # JSON файлын оқу
  with open("data.json", "r") as file:
      data = json.load(file)  # JSON файлынан Python объектісіне жүктеу
      print(data)  # data - бұл сөздік немесе тізім</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>JSON файлына жазу</h4>
          <p><code>json</code> модулі сонымен қатар JSON файлдарына жазу үшін функцияларды ұсынады.</p>
          <div class="example">
            <pre><code>import json
  
  # Жазуға арналған деректерді жасау
  data = {
      "аты": "Иван",
      "жасы": 30,
      "қала": "Мәскеу",
      "әуестері": ["футбол", "бағдарламалау", "саяхаттау"]
  }
  
  # JSON файлына жазу
  with open("data.json", "w") as file:
      json.dump(data, file, indent=4)  # indent=4 файлды оқылымды етеді</code></pre>
          </div>
        </div>
        
        <div class="tip-card">
          <h4>Кеңес</h4>
          <p>Python-да JSON-мен жұмыс істеу үшін келесі функциялар қолданылады:</p>
          <ul>
            <li><code>json.load(file)</code> - файлдан JSON жүктеу</li>
            <li><code>json.loads(string)</code> - жолдан JSON жүктеу</li>
            <li><code>json.dump(data, file)</code> - деректерді JSON форматында файлға жазу</li>
            <li><code>json.dumps(data)</code> - деректерді JSON жолына түрлендіру</li>
          </ul>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3OlRavWy3cI" title="Python файлдар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3OlRavWy3cI" title="Работа с файлами в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  
        
        <!-- Практические советы удалены -->
      </section>
    `
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson8 = lesson8;
  }
/**
 * Улучшенный урок 9 для курса Python (часть 1)
 */

const lesson9 = {
    title: "9-сабақ: Объектіге-бағытталған бағдарламалау",
    content: `
      <section class="theory">
        <h2>Объектіге-бағытталған бағдарламалау</h2>
        <p>Объектіге-бағытталған бағдарламалау (ОББ) - бұл деректер мен кодты қамтитын "объектілер" тұжырымдамасына негізделген бағдарламалау парадигмасы. Деректер өрістер (атрибуттар) түрінде және код процедуралар (әдістер) түрінде беріледі.</p>
        
        <div class="info-card">
          <h4>ОББ дегеніміз не?</h4>
          <p>Объектіге-бағытталған бағдарламалау - бұл бағдарлама объектілер жиынтығы ретінде ұйымдастырылатын бағдарламалау тәсілі, олардың әрқайсысы белгілі бір кластың данасы болып табылады, ал кластар мұрагерлік иерархиясын құрайды.</p>
        </div>
        
        <h3>ОББ негізгі принциптері</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Инкапсуляция</h4>
            <p>Инкапсуляция - бұл деректер мен осы деректермен жұмыс істейтін әдістерді біріктіретін және оларды сыртқы араласудан қорғайтын механизм.</p>
            <div class="example">
              <pre><code>class BankAccount:
      def __init__(self, owner, balance=0):
          self.owner = owner
          self.__balance = balance  # Жеке атрибут
      
      def deposit(self, amount):
          self.__balance += amount
          return self.__balance
      
      def withdraw(self, amount):
          if amount <= self.__balance:
              self.__balance -= amount
              return self.__balance
          return "Қаражат жеткіліксіз"</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Мұрагерлік</h4>
            <p>Мұрагерлік - бұл бар класс негізінде жаңа класс жасауға мүмкіндік беретін механизм.</p>
            <div class="example">
              <pre><code>class Animal:
      def speak(self):
          pass
  
  class Dog(Animal):
      def speak(self):
          return "Гав!"
  
  class Cat(Animal):
      def speak(self):
          return "Мяу!"</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Полиморфизм</h4>
            <p>Полиморфизм - бұл әртүрлі деректер типтері үшін бірдей интерфейсті пайдалану мүмкіндігі.</p>
            <div class="example">
              <pre><code>def animal_sound(animal):
      return animal.speak()
  
  dog = Dog()
  cat = Cat()
  
  print(animal_sound(dog))  # Гав!
  print(animal_sound(cat))  # Мяу!</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Абстракция</h4>
            <p>Абстракция - бұл объектінің оны басқа объектілер түрлерінен ерекшелендіретін маңызды сипаттарын бөліп көрсету.</p>
            <div class="example">
              <pre><code>from abc import ABC, abstractmethod
  
  class Shape(ABC):
      @abstractmethod
      def area(self):
          pass
      
      @abstractmethod
      def perimeter(self):
          pass
  
  class Rectangle(Shape):
      def __init__(self, width, height):
          self.width = width
          self.height = height
      
      def area(self):
          return self.width * self.height
      
      def perimeter(self):
          return 2 * (self.width + self.height)</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Кластар мен объектілер</h3>
        <p>Класс - бұл объектілерді жасау үшін үлгі. Ол осы класс негізінде жасалған барлық объектілердің атрибуттары мен әдістерін анықтайды.</p>
        
        <div class="theory-card">
          <h4>Классты анықтау</h4>
          <p>Python-да кластар <code>class</code> кілт сөзі арқылы анықталады.</p>
  dog = Dog()
  cat = Cat()
  
  print(animal_sound(dog))  # Гав!
  print(animal_sound(cat))  # Мяу!</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Абстракция</h4>
            <p>Абстракция - бұл объектінің оны басқа объектілер түрлерінен ерекшелендіретін маңызды сипаттарын бөліп көрсету.</p>
            <div class="example">
              <pre><code>from abc import ABC, abstractmethod
  
  class Shape(ABC):
      @abstractmethod
      def area(self):
          pass
      
      @abstractmethod
      def perimeter(self):
          pass
  
  class Rectangle(Shape):
      def __init__(self, width, height):
          self.width = width
          self.height = height
      
      def area(self):
          return self.width * self.height
      
      def perimeter(self):
          return 2 * (self.width + self.height)</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Кластар мен объектілер</h3>
        <p>Класс - бұл объектілерді жасау үшін үлгі. Ол осы класс негізінде жасалған барлық объектілердің атрибуттары мен әдістерін анықтайды.</p>
        
        <div class="theory-card">
          <h4>Классты анықтау</h4>
          <p>Python-да кластар <code>class</code> кілт сөзі арқылы анықталады.</p>
          <div class="example">
            <pre><code>class Person:
      # Класс атрибуттары (барлық даналар үшін ортақ)
      species = "Homo sapiens"
      
      # Инициализатор (конструктор)
      def __init__(self, name, age):
          # Дана атрибуттары (әрбір дана үшін бірегей)
          self.name = name
          self.age = age
      
      # Дана әдісі
      def greet(self):
          return f"Сәлем, менің атым {self.name} және мен {self.age} жастамын."
      
      # Дана әдісі
      def birthday(self):
          self.age += 1
          return f"Туған күнімен, {self.name}! Енді сіздің жасыңыз {self.age} жас."</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Создание объектов (экземпляров)</h4>
          <p>Объекты создаются на основе класса путем вызова класса как функции.</p>
          <div class="example">
            <pre><code># Создание объектов (экземпляров)
  person1 = Person("Алексей", 25)
  person2 = Person("Мария", 23)
  
  # Вызов методов
  print(person1.greet())  # Привет, меня зовут Алексей. Мне 25 лет.
  print(person2.greet())  # Привет, меня зовут Мария. Мне 23 лет.
  
  # Доступ к атрибутам
  print(person1.name)  # Алексей
  print(person1.age)   # 25
  
  # Изменение атрибутов
  person1.name = "Алексей Иванов"
  print(person1.name)  # Алексей Иванов
  
  # Доступ к атрибутам класса
  print(Person.species)  # Homo sapiens
  print(person1.species)  # Homo sapiens</code></pre>
          </div>
        </div>
        
        <div class="tip-card">
          <h4>Параметр self</h4>
          <p>Параметр <code>self</code> в методах класса ссылается на конкретный экземпляр класса. Он должен быть первым параметром в каждом методе экземпляра.</p>
          <p>При вызове метода экземпляра, например <code>person1.greet()</code>, Python автоматически передает <code>person1</code> как аргумент <code>self</code>.</p>
        </div>
        
        <h3>Специальные методы</h3>
        <p>Python предоставляет специальные методы (также называемые "магическими" или "dunder" методами), которые позволяют классам определять поведение для встроенных операций.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>__init__</h4>
            <p>Метод <code>__init__</code> вызывается при создании нового экземпляра класса.</p>
            <div class="example">
              <pre><code>def __init__(self, name, age):
      self.name = name
      self.age = age</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>__str__</h4>
            <p>Метод <code>__str__</code> возвращает строковое представление объекта, которое используется функцией <code>str()</code> и при выводе с помощью <code>print()</code>.</p>
            <div class="example">
              <pre><code>def __str__(self):
      return f"Person(name={self.name}, age={self.age})"</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>__repr__</h4>
            <p>Метод <code>__repr__</code> возвращает строковое представление объекта, которое используется функцией <code>repr()</code> и в интерактивном режиме.</p>
            <div class="example">
              <pre><code>def __repr__(self):
      return f"Person('{self.name}', {self.age})"</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>__len__</h4>
            <p>Метод <code>__len__</code> определяет поведение функции <code>len()</code> для объектов класса.</p>
            <div class="example">
              <pre><code>class MyList:
      def __init__(self, items):
          self.items = items
      
      def __len__(self):
          return len(self.items)</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>__add__</h4>
            <p>Метод <code>__add__</code> определяет поведение оператора <code>+</code> для объектов класса.</p>
            <div class="example">
              <pre><code>class Vector:
      def __init__(self, x, y):
          self.x = x
          self.y = y
      
      def __add__(self, other):
          return Vector(self.x + other.x, self.y + other.y)</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>__eq__</h4>
            <p>Метод <code>__eq__</code> определяет поведение оператора <code>==</code> для объектов класса.</p>
            <div class="example">
              <pre><code>def __eq__(self, other):
      if not isinstance(other, Person):
          return False
      return self.name == other.name and self.age == other.age</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>__getitem__</h4>
            <p>Метод <code>__getitem__</code> определяет поведение оператора индексации <code>[]</code> для объектов класса.</p>
            <div class="example">
              <pre><code>class MyList:
      def __init__(self, items):
          self.items = items
      
      def __getitem__(self, index):
          return self.items[index]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>__call__</h4>
            <p>Метод <code>__call__</code> позволяет вызывать экземпляры класса как функции.</p>
            <div class="example">
              <pre><code>class Adder:
      def __init__(self, n):
          self.n = n
      
      def __call__(self, x):
          return self.n + x
  
  add5 = Adder(5)
  print(add5(10))  # 15</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Наследование</h3>
        <p>Наследование позволяет создавать новый класс на основе существующего класса. Новый класс (подкласс) наследует атрибуты и методы родительского класса (суперкласса).</p>
        
        <div class="theory-card">
          <h4>Создание подкласса</h4>
          <p>Для создания подкласса укажите имя родительского класса в скобках после имени класса.</p>
          <div class="example">
            <pre><code># Родительский класс
  class Animal:
      def __init__(self, name):
          self.name = name
      
      def speak(self):
          return "Животное издает звук"
  
  # Подкласс
  class Dog(Animal):
      def speak(self):
          return f"{self.name} говорит Гав!"
  
  # Подкласс
  class Cat(Animal):
      def speak(self):
          return f"{self.name} говорит Мяу!"
  
  # Создание объектов
  animal = Animal("Животное")
  dog = Dog("Барсик")
  cat = Cat("Мурзик")
  
  # Вызов методов
  print(animal.speak())  # Животное издает звук
  print(dog.speak())     # Барсик говорит Гав!
  print(cat.speak())     # Мурзик говорит Мяу!</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Функция super()</h4>
          <p>Функция <code>super()</code> позволяет вызывать методы родительского класса.</p>
          <div class="example">
            <pre><code>class Animal:
      def __init__(self, name):
          self.name = name
      
      def speak(self):
          return "Животное издает звук"
  
  class Dog(Animal):
      def __init__(self, name, breed):
          super().__init__(name)  # Вызов конструктора родительского класса
          self.breed = breed
      
      def speak(self):
          return f"{self.name} ({self.breed}) говорит Гав!"
  
  dog = Dog("Барсик", "Дворняжка")
  print(dog.name)    # Барсик
  print(dog.breed)   # Дворняжка
  print(dog.speak())  # Барсик (Дворняжка) говорит Гав!</code></pre>
          </div>
        </div>
        
        <div class="warning-card">
          <h4>Множественное наследование</h4>
          <p>Python поддерживает множественное наследование, позволяя классу наследовать от нескольких родительских классов. Однако это может привести к сложностям, таким как "ромбовидное наследование". Будьте осторожны при использовании множественного наследования.</p>
          <pre><code>class A:
      def method(self):
          return "A.method"
  
  class B(A):
      def method(self):
          return "B.method"
  
  class C(A):
      def method(self):
          return "C.method"
  
  class D(B, C):
      pass
  
  d = D()
  print(d.method())  # B.method (из-за порядка разрешения методов)</code></pre>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rY2rBjL7UO0" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rY2rBjL7UO0" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `,
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson9 = lesson9;
  }

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
}  