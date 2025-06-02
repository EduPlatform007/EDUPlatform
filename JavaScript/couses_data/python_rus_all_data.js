/**
 * Улучшенный урок 1 для курса Python
 * Этот файл содержит материалы для всех уроков курса Python.
 * В уроках рассматриваются основные понятия языка Python, его особенности и синтаксис.
 */
const lesson1 = {
    title: "Урок 1: Введение в Python",
    content: `
      <section class="theory">
        <h2>Введение в Python</h2>
        <p>Python - это высокоуровневый, интерпретируемый язык программирования с простым синтаксисом, который делает его идеальным как для начинающих, так и для опытных разработчиков.</p>
        
        <div class="info-card">
          <h4>Что такое Python?</h4>
          <p>Python - это универсальный язык программирования, созданный Гвидо ван Россумом и впервые выпущенный в 1991 году. Python подчеркивает читаемость кода и использует отступы для определения блоков кода.</p>
        </div>
        
        <h3>Особенности Python</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Простой синтаксис</h4>
            <p>Python имеет простой и понятный синтаксис, что делает его отличным языком для начинающих программистов.</p>
            <div class="example">
              <pre><code>print("Привет, мир!")</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Интерпретируемый язык</h4>
            <p>Python - это интерпретируемый язык, что означает, что код выполняется построчно, без необходимости компиляции.</p>
            <div class="example">
              <p>Вы можете запустить Python в интерактивном режиме и сразу видеть результаты.</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Динамическая типизация</h4>
            <p>В Python не нужно объявлять тип переменной. Тип определяется автоматически во время выполнения.</p>
            <div class="example">
              <pre><code>x = 10       # x - это число
  x = "Привет"  # теперь x - это строка</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Большая стандартная библиотека</h4>
            <p>Python поставляется с обширной стандартной библиотекой, которая включает модули для различных задач.</p>
            <div class="example">
              <p>Модули для работы с файлами, сетью, базами данных, графическим интерфейсом и многое другое.</p>
            </div>
          </div>
        </div>
        
        <h3>Установка Python</h3>
        <p>Для начала работы с Python, вам необходимо установить интерпретатор Python на ваш компьютер.</p>
        
        <div class="tip-card">
          <h4>Совет</h4>
          <p>Рекомендуется использовать последнюю стабильную версию Python 3.x, так как Python 2.x больше не поддерживается.</p>
        </div>
        
        <ol>
          <li>Перейдите на официальный сайт Python: <a href="https://www.python.org/downloads/" target="_blank">python.org/downloads</a></li>
          <li>Скачайте последнюю версию Python для вашей операционной системы</li>
          <li>Запустите установщик и следуйте инструкциям</li>
          <li>Убедитесь, что опция "Add Python to PATH" отмечена</li>
          <li>После установки откройте командную строку и введите <code>python --version</code> для проверки</li>
        </ol>
        
        <h3>Первая программа на Python</h3>
        <p>Традиционно, первая программа, которую пишут на любом языке программирования, выводит фразу "Привет, мир!".</p>
        
        <pre><code class="language-python"># Это комментарий
  print("Привет, мир!")  # Эта команда выводит текст на экран</code></pre>
        
        <div class="warning-card">
          <h4>Важно!</h4>
          <p>В Python отступы имеют значение! Они используются для определения блоков кода, таких как циклы, условия и функции.</p>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/34Rp6KVGIEM" title="Python кіріспе" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/34Rp6KVGIEM" title="Введение в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `,
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson1 = lesson1;
  }
  const lesson2 = {
    title: "Урок 2: Переменные и типы данных",
    content: `
      <section class="theory">
        <h2>Переменные и типы данных</h2>
        <p>Переменные в Python используются для хранения данных, которые могут изменяться в процессе выполнения программы. Python поддерживает различные типы данных, которые мы рассмотрим в этом уроке.</p>
        
        <div class="info-card">
          <h4>Что такое переменная?</h4>
          <p>Переменная - это именованная область памяти, которая используется для хранения данных. В Python переменные создаются автоматически при первом присваивании значения.</p>
        </div>
        
        <h3>Создание переменных</h3>
        <p>В Python переменные создаются при присваивании значения. Не требуется предварительное объявление или определение типа.</p>
        
        <pre><code class="language-python"># Создание переменных
  name = "Алексей"  # строковая переменная
  age = 25          # целочисленная переменная
  height = 1.75     # переменная с плавающей точкой
  is_student = True # логическая переменная
  
  # Вывод значений переменных
  print(name)
  print(age)
  print(height)
  print(is_student)</code></pre>
        
        <div class="tip-card">
          <h4>Правила именования переменных</h4>
          <ul>
            <li>Имя переменной может содержать буквы, цифры и символ подчеркивания</li>
            <li>Имя переменной не может начинаться с цифры</li>
            <li>Имя переменной не может содержать пробелы или специальные символы (!, @, #, $ и т.д.)</li>
            <li>Имена переменных чувствительны к регистру (name и Name - разные переменные)</li>
          </ul>
        </div>
        
        <h3>Основные типы данных в Python</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Числа (Numbers)</h4>
            <p>Python поддерживает целые числа, числа с плавающей точкой и комплексные числа.</p>
            <div class="example">
              <pre><code>x = 10       # int (целое число)
  y = 3.14     # float (число с плавающей точкой)
  z = 1 + 2j   # complex (комплексное число)</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Строки (Strings)</h4>
            <p>Строки - это последовательности символов, заключенные в одинарные или двойные кавычки.</p>
            <div class="example">
              <pre><code>name = "Алексей"
  message = 'Привет, мир!'
  multiline = """Это
  многострочная
  строка"""</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Логические значения (Booleans)</h4>
            <p>Логические значения представляют истину (True) или ложь (False).</p>
            <div class="example">
              <pre><code>is_active = True
  is_completed = False
  result = (5 > 3)  # result будет True</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Списки (Lists)</h4>
            <p>Списки - упорядоченные коллекции элементов, которые могут быть изменены.</p>
            <div class="example">
              <pre><code>fruits = ["яблоко", "банан", "вишня"]
  numbers = [1, 2, 3, 4, 5]
  mixed = [1, "привет", True, 3.14]</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Кортежи (Tuples)</h4>
            <p>Кортежи - упорядоченные коллекции элементов, которые не могут быть изменены после создания.</p>
            <div class="example">
              <pre><code>coordinates = (10, 20)
  person = ("Алексей", 25, "Москва")</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Словари (Dictionaries)</h4>
            <p>Словари - неупорядоченные коллекции пар ключ-значение.</p>
            <div class="example">
              <pre><code>person = {
      "name": "Алексей",
      "age": 25,
      "city": "Москва"
  }</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Множества (Sets)</h4>
            <p>Множества - неупорядоченные коллекции уникальных элементов.</p>
            <div class="example">
              <pre><code>fruits = {"яблоко", "банан", "вишня"}
  numbers = {1, 2, 3, 4, 5}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>None</h4>
            <p>None представляет отсутствие значения или null-значение.</p>
            <div class="example">
              <pre><code>result = None
  print(result)  # Выведет: None</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Преобразование типов</h3>
        <p>Python позволяет преобразовывать данные из одного типа в другой с помощью встроенных функций.</p>
        
        <pre><code class="language-python"># Преобразование типов
  x = 10
  y = "20"
  
  # Преобразование числа в строку
  str_x = str(x)
  print(str_x)  # Выведет: "10"
  
  # Преобразование строки в число
  int_y = int(y)
  print(int_y)  # Выведет: 20
  
  # Преобразование в число с плавающей точкой
  float_y = float(y)
  print(float_y)  # Выведет: 20.0
  
  # Преобразование в логическое значение
  bool_x = bool(x)
  print(bool_x)  # Выведет: True (любое ненулевое число считается True)</code></pre>
        
        <div class="warning-card">
          <h4>Внимание!</h4>
          <p>Не все преобразования типов возможны. Например, строка "привет" не может быть преобразована в число. В таких случаях Python вызовет ошибку.</p>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DZvNZ9l9NT4" title="Python айнымалылар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DZvNZ9l9NT4" title="Переменные в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    title: "Урок 3: Операторы и выражения",
    content: `
      <section class="theory">
        <h2>Операторы и выражения</h2>
        <p>Операторы в Python - это специальные символы, которые выполняют операции над операндами (переменными и значениями). Выражения состоят из операторов и операндов и вычисляются для получения результата.</p>
        
        <div class="info-card">
          <h4>Что такое выражение?</h4>
          <p>Выражение - это комбинация значений, переменных, операторов и вызовов функций, которая вычисляется для получения значения. Например, <code>2 + 3</code> - это выражение, которое вычисляется в значение <code>5</code>.</p>
        </div>
        
        <h3>Арифметические операторы</h3>
        <p>Арифметические операторы используются для выполнения математических операций.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Сложение (+)</h4>
            <p>Складывает два операнда.</p>
            <div class="example">
              <pre><code>x = 5 + 3  # x = 8</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Вычитание (-)</h4>
            <p>Вычитает второй операнд из первого.</p>
            <div class="example">
              <pre><code>x = 5 - 3  # x = 2</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Умножение (*)</h4>
            <p>Умножает два операнда.</p>
            <div class="example">
              <pre><code>x = 5 * 3  # x = 15</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Деление (/)</h4>
            <p>Делит первый операнд на второй (результат всегда с плавающей точкой).</p>
            <div class="example">
              <pre><code>x = 5 / 2  # x = 2.5</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Целочисленное деление (//)</h4>
            <p>Делит первый операнд на второй и возвращает целую часть результата.</p>
            <div class="example">
              <pre><code>x = 5 // 2  # x = 2</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Остаток от деления (%)</h4>
            <p>Возвращает остаток от деления первого операнда на второй.</p>
            <div class="example">
              <pre><code>x = 5 % 2  # x = 1</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Возведение в степень (**)</h4>
            <p>Возводит первый операнд в степень второго операнда.</p>
            <div class="example">
              <pre><code>x = 2 ** 3  # x = 8</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Унарный минус (-)</h4>
            <p>Меняет знак операнда.</p>
            <div class="example">
              <pre><code>x = 5
  y = -x  # y = -5</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Операторы сравнения</h3>
        <p>Операторы сравнения используются для сравнения двух значений. Результат операции сравнения - логическое значение (True или False).</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Равно (==)</h4>
            <p>Проверяет, равны ли два операнда.</p>
            <div class="example">
              <pre><code>x = (5 == 5)  # x = True
  y = (5 == 6)  # y = False</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Не равно (!=)</h4>
            <p>Проверяет, не равны ли два операнда.</p>
            <div class="example">
              <pre><code>x = (5 != 5)  # x = False
  y = (5 != 6)  # y = True</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Больше (>)</h4>
            <p>Проверяет, больше ли первый операнд второго.</p>
            <div class="example">
              <pre><code>x = (5 > 3)  # x = True
  y = (5 > 7)  # y = False</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Меньше (<)</h4>
            <p>Проверяет, меньше ли первый операнд второго.</p>
            <div class="example">
              <pre><code>x = (5 < 3)  # x = False
  y = (5 < 7)  # y = True</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Больше или равно (>=)</h4>
            <p>Проверяет, больше или равен ли первый операнд второму.</p>
            <div class="example">
              <pre><code>x = (5 >= 5)  # x = True
  y = (5 >= 7)  # y = False</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Меньше или равно (<=)</h4>
            <p>Проверяет, меньше или равен ли первый операнд второму.</p>
            <div class="example">
              <pre><code>x = (5 <= 5)  # x = True
  y = (5 <= 3)  # y = False</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Логические операторы</h3>
        <p>Логические операторы используются для комбинирования логических выражений.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>И (and)</h4>
            <p>Возвращает True, если оба операнда истинны.</p>
            <div class="example">
              <pre><code>x = True and True   # x = True
  y = True and False  # y = False
  z = False and False # z = False</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Или (or)</h4>
            <p>Возвращает True, если хотя бы один из операндов истинен.</p>
            <div class="example">
              <pre><code>x = True or True   # x = True
  y = True or False  # y = True
  z = False or False # z = False</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Не (not)</h4>
            <p>Инвертирует логическое значение операнда.</p>
            <div class="example">
              <pre><code>x = not True   # x = False
  y = not False  # y = True</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Операторы присваивания</h3>
        <p>Операторы присваивания используются для присваивания значений переменным.</p>
        
        <pre><code class="language-python"># Простое присваивание
  x = 5
  
  # Составное присваивание
  x += 3   # эквивалентно x = x + 3
  x -= 2   # эквивалентно x = x - 2
  x *= 4   # эквивалентно x = x * 4
  x /= 2   # эквивалентно x = x / 2
  x //= 2  # эквивалентно x = x // 2
  x %= 3   # эквивалентно x = x % 3
  x **= 2  # эквивалентно x = x ** 2</code></pre>
        
        <div class="warning-card">
          <h4>Внимание!</h4>
          <p>В Python оператор равенства - это <code>==</code>, а не <code>=</code>. Использование <code>=</code> вместо <code>==</code> в условиях - распространенная ошибка.</p>
        </div>
        
        <h3>Приоритет операторов</h3>
        <p>Операторы в Python имеют разный приоритет, который определяет порядок их выполнения в выражении.</p>
        
        <div class="info-card">
          <h4>Порядок приоритета (от высшего к низшему):</h4>
          <ol>
            <li>Скобки <code>()</code></li>
            <li>Возведение в степень <code>**</code></li>
            <li>Унарные операторы <code>+x</code>, <code>-x</code>, <code>~x</code></li>
            <li>Умножение, деление <code>*</code>, <code>/</code>, <code>//</code>, <code>%</code></li>
            <li>Сложение, вычитание <code>+</code>, <code>-</code></li>
            <li>Операторы сравнения <code>==</code>, <code>!=</code>, <code>></code>, <code>>=</code>, <code><</code>, <code><=</code></li>
            <li>Логические операторы <code>not</code>, <code>and</code>, <code>or</code></li>
            <li>Присваивание <code>=</code>, <code>+=</code>, <code>-=</code> и т.д.</li>
          </ol>
        </div>
        
        <pre><code class="language-python"># Примеры приоритета операторов
  x = 2 + 3 * 4      # x = 14, а не 20, потому что * имеет более высокий приоритет, чем +
  y = (2 + 3) * 4    # y = 20, скобки изменяют порядок выполнения
  z = 2 ** 3 * 2     # z = 16, а не 64, потому что ** имеет более высокий приоритет, чем *
  w = 2 * 3 ** 2     # w = 18, а не 36, по той же причине</code></pre>
        
        <div class="tip-card">
          <h4>Совет</h4>
          <p>Если вы не уверены в приоритете операторов, используйте скобки для явного указания порядка выполнения операций. Это делает код более читаемым и помогает избежать ошибок.</p>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SUDNfS_0X-Q" title="Python операторлар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SUDNfS_0X-Q" title="Операторы в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `,
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson3 = lesson3;
  }
/**
 * Улучшенный урок 4 для курса Python
 */

const lesson4 = {
    title: "Урок 4: Условные операторы",
    content: `
      <section class="theory">
        <h2>Условные операторы</h2>
        <p>Условные операторы позволяют программе принимать решения и выполнять различные действия в зависимости от условий. В Python основным условным оператором является <code>if</code>.</p>
        
        <div class="info-card">
          <h4>Что такое условный оператор?</h4>
          <p>Условный оператор - это конструкция, которая позволяет выполнять определенный блок кода только при выполнении заданного условия.</p>
        </div>
        
        <h3>Оператор if</h3>
        <p>Оператор <code>if</code> выполняет блок кода, если условие истинно (True).</p>
        
        <pre><code class="language-python"># Простой пример оператора if
  age = 18
  
  if age >= 18:
      print("Вы совершеннолетний")
      
  # Результат: "Вы совершеннолетний"</code></pre>
        
        <div class="tip-card">
          <h4>Синтаксис оператора if</h4>
          <pre><code>if условие:
      # блок кода, который выполняется, если условие истинно
      команда1
      команда2
      ...</code></pre>
          <p>Обратите внимание на отступы! В Python отступы используются для определения блоков кода.</p>
        </div>
        
        <h3>Оператор if-else</h3>
        <p>Оператор <code>if-else</code> выполняет один блок кода, если условие истинно, и другой блок кода, если условие ложно.</p>
        
        <pre><code class="language-python"># Пример оператора if-else
  age = 16
  
  if age >= 18:
      print("Вы совершеннолетний")
  else:
      print("Вы несовершеннолетний")
      
  # Результат: "Вы несовершеннолетний"</code></pre>
        
        <div class="theory-card">
          <h4>Синтаксис оператора if-else</h4>
          <pre><code>if условие:
      # блок кода, который выполняется, если условие истинно
      команда1
      команда2
      ...
  else:
      # блок кода, который выполняется, если условие ложно
      команда1
      команда2
      ...</code></pre>
        </div>
        
        <h3>Оператор if-elif-else</h3>
        <p>Оператор <code>if-elif-else</code> позволяет проверить несколько условий и выполнить соответствующий блок кода.</p>
        
        <pre><code class="language-python"># Пример оператора if-elif-else
  score = 85
  
  if score >= 90:
      print("Отлично")
  elif score >= 80:
      print("Хорошо")
  elif score >= 70:
      print("Удовлетворительно")
  else:
      print("Неудовлетворительно")
      
  # Результат: "Хорошо"</code></pre>
        
        <div class="theory-card">
          <h4>Синтаксис оператора if-elif-else</h4>
          <pre><code>if условие1:
      # блок кода, который выполняется, если условие1 истинно
      команда1
      ...
  elif условие2:
      # блок кода, который выполняется, если условие1 ложно, а условие2 истинно
      команда1
      ...
  elif условие3:
      # блок кода, который выполняется, если условие1 и условие2 ложны, а условие3 истинно
      команда1
      ...
  else:
      # блок кода, который выполняется, если все условия ложны
      команда1
      ...</code></pre>
        </div>
        
        <div class="warning-card">
          <h4>Важно!</h4>
          <p>Python проверяет условия последовательно и выполняет блок кода для первого истинного условия. Остальные условия не проверяются.</p>
        </div>
        
        <h3>Вложенные условные операторы</h3>
        <p>Условные операторы могут быть вложенными, то есть один условный оператор может содержать другой условный оператор.</p>
        
        <pre><code class="language-python"># Пример вложенных условных операторов
  age = 25
  has_license = True
  
  if age >= 18:
      print("Вы совершеннолетний")
      if has_license:
          print("Вы можете водить автомобиль")
      else:
          print("Вам нужно получить водительское удостоверение")
  else:
      print("Вы несовершеннолетний")
      
  # Результат:
  # "Вы совершеннолетний"
  # "Вы можете водить автомобиль"</code></pre>
        
        <h3>Тернарный оператор</h3>
        <p>Тернарный оператор - это сокращенная форма условного оператора, которая позволяет записать условие в одну строку.</p>
        
        <pre><code class="language-python"># Пример тернарного оператора
  age = 20
  status = "совершеннолетний" if age >= 18 else "несовершеннолетний"
  print(status)
      
  # Результат: "совершеннолетний"</code></pre>
        
        <div class="theory-card">
          <h4>Синтаксис тернарного оператора</h4>
          <pre><code>значение_если_истина if условие else значение_если_ложь</code></pre>
        </div>
        
        <h3>Логические операторы в условиях</h3>
        <p>Логические операторы <code>and</code>, <code>or</code> и <code>not</code> часто используются в условиях для комбинирования или инвертирования логических выражений.</p>
        
        <pre><code class="language-python"># Примеры использования логических операторов в условиях
  age = 25
  income = 50000
  
  # Оператор and (и)
  if age >= 18 and income >= 30000:
      print("Вы можете получить кредит")
      
  # Оператор or (или)
  if age < 18 or income < 30000:
      print("Вы не можете получить кредит")
      
  # Оператор not (не)
  if not (age < 18):
      print("Вы совершеннолетний")</code></pre>
        
        <div class="info-card">
          <h4>Короткое замыкание логических операторов</h4>
          <p>Python использует "короткое замыкание" для логических операторов:</p>
          <ul>
            <li>Для оператора <code>and</code>: если первый операнд ложен, второй операнд не вычисляется, так как результат в любом случае будет ложным.</li>
            <li>Для оператора <code>or</code>: если первый операнд истинен, второй операнд не вычисляется, так как результат в любом случае будет истинным.</li>
          </ul>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SUDNfS_0X-Q" title="Python шартты операторлар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SUDNfS_0X-Q" title="Условные операторы в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    title: "Урок 5: Циклы",
    content: `
      <section class="theory">
        <h2>Циклы</h2>
        <p>Циклы позволяют выполнять блок кода многократно. В Python есть два основных типа циклов: <code>for</code> и <code>while</code>.</p>
        
        <div class="info-card">
          <h4>Что такое цикл?</h4>
          <p>Цикл - это конструкция, которая позволяет выполнять блок кода несколько раз. Это полезно, когда вам нужно выполнить одно и то же действие для каждого элемента в коллекции или пока выполняется определенное условие.</p>
        </div>
        
        <h3>Цикл for</h3>
        <p>Цикл <code>for</code> используется для итерации по последовательности (списку, кортежу, словарю, строке и т.д.).</p>
        
        <pre><code class="language-python"># Простой пример цикла for
  fruits = ["яблоко", "банан", "вишня"]
  
  for fruit in fruits:
      print(fruit)
      
  # Результат:
  # яблоко
  # банан
  # вишня</code></pre>
        
        <div class="theory-card">
          <h4>Синтаксис цикла for</h4>
          <pre><code>for переменная in последовательность:
      # блок кода, который выполняется для каждого элемента последовательности
      команда1
      команда2
      ...</code></pre>
        </div>
        
        <h3>Цикл for с функцией range()</h3>
        <p>Функция <code>range()</code> часто используется с циклом <code>for</code> для генерации последовательности чисел.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>range(stop)</h4>
            <p>Генерирует последовательность чисел от 0 до stop-1.</p>
            <div class="example">
              <pre><code>for i in range(5):
      print(i)
      
  # Результат:
  # 0
  # 1
  # 2
  # 3
  # 4</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>range(start, stop)</h4>
            <p>Генерирует последовательность чисел от start до stop-1.</p>
            <div class="example">
              <pre><code>for i in range(2, 6):
      print(i)
      
  # Результат:
  # 2
  # 3
  # 4
  # 5</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>range(start, stop, step)</h4>
            <p>Генерирует последовательность чисел от start до stop-1 с шагом step.</p>
            <div class="example">
              <pre><code>for i in range(1, 10, 2):
      print(i)
      
  # Результат:
  # 1
  # 3
  # 5
  # 7
  # 9</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Цикл while</h3>
        <p>Цикл <code>while</code> выполняет блок кода, пока условие истинно.</p>
        
        <pre><code class="language-python"># Простой пример цикла while
  count = 0
  
  while count < 5:
      print(count)
      count += 1
      
  # Результат:
  # 0
  # 1
  # 2
  # 3
  # 4</code></pre>
        
        <div class="theory-card">
          <h4>Синтаксис цикла while</h4>
          <pre><code>while условие:
      # блок кода, который выполняется, пока условие истинно
      команда1
      команда2
      ...</code></pre>
        </div>
        
        <div class="warning-card">
          <h4>Внимание!</h4>
          <p>Будьте осторожны с циклом <code>while</code>, так как он может привести к бесконечному циклу, если условие никогда не станет ложным. Убедитесь, что условие в какой-то момент станет ложным.</p>
        </div>
        
        <h3>Операторы break и continue</h3>
        <p>Операторы <code>break</code> и <code>continue</code> используются для управления выполнением цикла.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>break</h4>
            <p>Оператор <code>break</code> прерывает цикл и передает управление на следующую после цикла строку кода.</p>
            <div class="example">
              <pre><code>for i in range(10):
      if i == 5:
          break
      print(i)
      
  # Результат:
  # 0
  # 1
  # 2
  # 3
  # 4</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>continue</h4>
            <p>Оператор <code>continue</code> прерывает текущую итерацию цикла и переходит к следующей итерации.</p>
            <div class="example">
              <pre><code>for i in range(10):
      if i % 2 == 0:
          continue
      print(i)
      
  # Результат:
  # 1
  # 3
  # 5
  # 7
  # 9</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Цикл for с else</h3>
        <p>Цикл <code>for</code> может иметь необязательный блок <code>else</code>, который выполняется, если цикл завершился нормально (не был прерван оператором <code>break</code>).</p>
        
        <pre><code class="language-python"># Пример цикла for с else
  for i in range(5):
      print(i)
  else:
      print("Цикл завершен")
      
  # Результат:
  # 0
  # 1
  # 2
  # 3
  # 4
  # Цикл завершен
  
  # Пример цикла for с else и break
  for i in range(5):
      if i == 3:
          break
      print(i)
  else:
      print("Цикл завершен")  # Этот блок не выполнится
      
  # Результат:
  # 0
  # 1
  # 2</code></pre>
        
        <h3>Цикл while с else</h3>
        <p>Аналогично, цикл <code>while</code> также может иметь блок <code>else</code>.</p>
        
        <pre><code class="language-python"># Пример цикла while с else
  count = 0
  
  while count < 3:
      print(count)
      count += 1
  else:
      print("Цикл завершен")
      
  # Результат:
  # 0
  # 1
  # 2
  # Цикл завершен</code></pre>
        
        <h3>Вложенные циклы</h3>
        <p>Циклы могут быть вложенными, то есть один цикл может содержать другой цикл.</p>
        
        <pre><code class="language-python"># Пример вложенных циклов
  for i in range(3):
      for j in range(2):
          print(f"i = {i}, j = {j}")
      
  # Результат:
  # i = 0, j = 0
  # i = 0, j = 1
  # i = 1, j = 0
  # i = 1, j = 1
  # i = 2, j = 0
  # i = 2, j = 1</code></pre>
        
        <div class="tip-card">
          <h4>Совет</h4>
          <p>Вложенные циклы могут быть очень полезны для работы с многомерными структурами данных, такими как матрицы или таблицы. Однако они могут значительно увеличить время выполнения программы, поэтому используйте их с осторожностью.</p>
        </div>
        
        <h3>Генераторы списков (List Comprehensions)</h3>
        <p>Генераторы списков - это компактный способ создания списков на основе существующих последовательностей.</p>
        
        <pre><code class="language-python"># Пример генератора списков
  numbers = [1, 2, 3, 4, 5]
  
  # Создание нового списка, где каждый элемент умножен на 2
  doubled = [x * 2 for x in numbers]
  print(doubled)  # [2, 4, 6, 8, 10]
  
  # Создание списка четных чисел от 0 до 9
  evens = [x for x in range(10) if x % 2 == 0]
  print(evens)  # [0, 2, 4, 6, 8]</code></pre>
        
        <div class="info-card">
          <h4>Синтаксис генератора списков</h4>
          <pre><code>[выражение for элемент in последовательность if условие]</code></pre>
          <p>Часть <code>if условие</code> является необязательной и используется для фильтрации элементов.</p>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vMD6-jzgDvI" title="Python циклдар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vMD6-jzgDvI" title="Циклы в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `,
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson5 = lesson5;
  }
/**
 * Улучшенный урок 6 для курса Python
 */

const lesson6 = {
    title: "Урок 6: Списки и кортежи",
    content: `
      <section class="theory">
        <h2>Списки и кортежи</h2>
        <p>Списки и кортежи - это структуры данных для хранения нескольких элементов в одной переменной. Они являются одними из наиболее часто используемых структур данных в Python.</p>
        
        <div class="info-card">
          <h4>Что такое последовательности?</h4>
          <p>Списки и кортежи являются примерами последовательностей в Python. Последовательность - это упорядоченная коллекция элементов, где каждый элемент имеет свой индекс (позицию).</p>
        </div>
        
        <h3>Списки (Lists)</h3>
        <p>Списки - это изменяемые, упорядоченные коллекции элементов. Они могут содержать элементы разных типов данных.</p>
        
        <div class="theory-card">
          <h4>Создание списков</h4>
          <p>Списки создаются с помощью квадратных скобок <code>[]</code> или функции <code>list()</code>.</p>
          <div class="example">
            <pre><code># Создание пустого списка
  empty_list = []
  empty_list2 = list()
  
  # Создание списка с элементами
  fruits = ["яблоко", "банан", "вишня"]
  numbers = [1, 2, 3, 4, 5]
  mixed = [1, "привет", True, 3.14]</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Доступ к элементам списка</h4>
          <p>Доступ к элементам списка осуществляется по индексу. Индексация начинается с 0.</p>
          <div class="example">
            <pre><code>fruits = ["яблоко", "банан", "вишня"]
  
  # Доступ к элементам по положительному индексу
  print(fruits[0])  # яблоко
  print(fruits[1])  # банан
  print(fruits[2])  # вишня
  
  # Доступ к элементам по отрицательному индексу
  print(fruits[-1])  # вишня (последний элемент)
  print(fruits[-2])  # банан (предпоследний элемент)
  print(fruits[-3])  # яблоко (третий с конца элемент)</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Изменение элементов списка</h4>
          <p>Списки являются изменяемыми, то есть их элементы можно изменять после создания.</p>
          <div class="example">
            <pre><code>fruits = ["яблоко", "банан", "вишня"]
  
  # Изменение элемента
  fruits[1] = "апельсин"
  print(fruits)  # ["яблоко", "апельсин", "вишня"]</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Срезы списков</h4>
          <p>Срезы позволяют получить подсписок из списка.</p>
          <div class="example">
            <pre><code>numbers = [0, 1, 2, 3, 4, 5]
  
  # Срез [начало:конец] (конец не включается)
  print(numbers[1:4])  # [1, 2, 3]
  
  # Срез [:конец] (от начала до конца-1)
  print(numbers[:3])   # [0, 1, 2]
  
  # Срез [начало:] (от начала до конца)
  print(numbers[3:])   # [3, 4, 5]
  
  # Срез [начало:конец:шаг]
  print(numbers[::2])  # [0, 2, 4] (каждый второй элемент)</code></pre>
          </div>
        </div>
        
        <h3>Методы списков</h3>
        <p>Python предоставляет множество встроенных методов для работы со списками.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>append()</h4>
            <p>Добавляет элемент в конец списка.</p>
            <div class="example">
              <pre><code>fruits = ["яблоко", "банан"]
  fruits.append("вишня")
  print(fruits)  # ["яблоко", "банан", "вишня"]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>insert()</h4>
            <p>Вставляет элемент в указанную позицию.</p>
            <div class="example">
              <pre><code>fruits = ["яблоко", "вишня"]
  fruits.insert(1, "банан")
  print(fruits)  # ["яблоко", "банан", "вишня"]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>remove()</h4>
            <p>Удаляет первое вхождение указанного элемента.</p>
            <div class="example">
              <pre><code>fruits = ["яблоко", "банан", "вишня"]
  fruits.remove("банан")
  print(fruits)  # ["яблоко", "вишня"]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>pop()</h4>
            <p>Удаляет элемент по индексу и возвращает его.</p>
            <div class="example">
              <pre><code>fruits = ["яблоко", "банан", "вишня"]
  removed = fruits.pop(1)
  print(removed)  # банан
  print(fruits)   # ["яблоко", "вишня"]
  
  # Без аргумента pop() удаляет последний элемент
  last = fruits.pop()
  print(last)     # вишня
  print(fruits)   # ["яблоко"]</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>extend()</h4>
            <p>Добавляет элементы из другого списка (или любого итерируемого объекта).</p>
            <div class="example">
              <pre><code>fruits = ["яблоко", "банан"]
  more_fruits = ["вишня", "апельсин"]
  fruits.extend(more_fruits)
  print(fruits)  # ["яблоко", "банан", "вишня", "апельсин"]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>sort()</h4>
            <p>Сортирует список на месте.</p>
            <div class="example">
              <pre><code>numbers = [3, 1, 4, 1, 5, 9, 2]
  numbers.sort()
  print(numbers)  # [1, 1, 2, 3, 4, 5, 9]
  
  # Сортировка в обратном порядке
  numbers.sort(reverse=True)
  print(numbers)  # [9, 5, 4, 3, 2, 1, 1]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>reverse()</h4>
            <p>Обращает порядок элементов списка.</p>
            <div class="example">
              <pre><code>fruits = ["яблоко", "банан", "вишня"]
  fruits.reverse()
  print(fruits)  # ["вишня", "банан", "яблоко"]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>count()</h4>
            <p>Возвращает количество вхождений элемента в список.</p>
            <div class="example">
              <pre><code>numbers = [1, 2, 3, 1, 4, 1, 5]
  count = numbers.count(1)
  print(count)  # 3</code></pre>
            </div>
          </div>
        </div>
        
        <div class="tip-card">
          <h4>Полезные функции для работы со списками</h4>
          <ul>
            <li><code>len(list)</code> - возвращает длину списка</li>
            <li><code>max(list)</code> - возвращает наибольший элемент списка</li>
            <li><code>min(list)</code> - возвращает наименьший элемент списка</li>
            <li><code>sum(list)</code> - возвращает сумму всех элементов списка (только для числовых списков)</li>
            <li><code>sorted(list)</code> - возвращает новый отсортированный список, не изменяя оригинальный</li>
          </ul>
        </div>
        
        <h3>Кортежи (Tuples)</h3>
        <p>Кортежи - это неизменяемые, упорядоченные коллекции элементов. Они похожи на списки, но их нельзя изменить после создания.</p>
        
        <div class="theory-card">
          <h4>Создание кортежей</h4>
          <p>Кортежи создаются с помощью круглых скобок <code>()</code> или функции <code>tuple()</code>.</p>
          <div class="example">
            <pre><code># Создание пустого кортежа
  empty_tuple = ()
  empty_tuple2 = tuple()
  
  # Создание кортежа с элементами
  coordinates = (10, 20)
  person = ("Алексей", 25, "Москва")
  
  # Кортеж с одним элементом (обратите внимание на запятую)
  single_item = (42,)  # без запятой это будет просто число</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Доступ к элементам кортежа</h4>
          <p>Доступ к элементам кортежа осуществляется так же, как и к элементам списка - по индексу.</p>
          <div class="example">
            <pre><code>person = ("Алексей", 25, "Москва")
  
  print(person[0])  # Алексей
  print(person[1])  # 25
  print(person[2])  # Москва
  print(person[-1]) # Москва</code></pre>
          </div>
        </div>
        
        <div class="warning-card">
          <h4>Важно!</h4>
          <p>Кортежи неизменяемы. После создания кортежа вы не можете изменить, добавить или удалить его элементы.</p>
          <pre><code>coordinates = (10, 20)
  # coordinates[0] = 15  # Это вызовет ошибку TypeError</code></pre>
        </div>
        
        <div class="theory-card">
          <h4>Методы кортежей</h4>
          <p>Поскольку кортежи неизменяемы, у них гораздо меньше методов, чем у списков.</p>
          <div class="example">
            <pre><code>numbers = (1, 2, 3, 1, 4, 1, 5)
  
  # count() - возвращает количество вхождений элемента
  count = numbers.count(1)
  print(count)  # 3
  
  # index() - возвращает индекс первого вхождения элемента
  index = numbers.index(4)
  print(index)  # 4</code></pre>
          </div>
        </div>
        
        <h3>Преобразование между списками и кортежами</h3>
        <p>Вы можете легко преобразовать список в кортеж и наоборот.</p>
        
        <pre><code class="language-python"># Преобразование списка в кортеж
  fruits_list = ["яблоко", "банан", "вишня"]
  fruits_tuple = tuple(fruits_list)
  print(fruits_tuple)  # ("яблоко", "банан", "вишня")
  
  # Преобразование кортежа в список
  numbers_tuple = (1, 2, 3, 4, 5)
  numbers_list = list(numbers_tuple)
  print(numbers_list)  # [1, 2, 3, 4, 5]</code></pre>
        
        <h3>Когда использовать списки, а когда кортежи?</h3>
        <div class="info-card">
          <h4>Используйте списки, когда:</h4>
          <ul>
            <li>Вам нужно изменять коллекцию (добавлять, удалять или изменять элементы)</li>
            <li>Вам нужны методы для изменения коллекции (sort, append, extend и т.д.)</li>
            <li>Вы работаете с однородными данными, которые могут меняться</li>
          </ul>
          
          <h4>Используйте кортежи, когда:</h4>
          <ul>
            <li>Вам нужна неизменяемая коллекция (защита от случайного изменения)</li>
            <li>Вы хотите использовать кортеж как ключ в словаре (списки не могут быть ключами)</li>
            <li>Вы работаете с разнородными данными, которые логически связаны (например, запись в базе данных)</li>
            <li>Вам важна производительность (кортежи работают быстрее, чем списки)</li>
          </ul>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-X2ubBdP2Ak" title="Python тізімдер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-X2ubBdP2Ak" title="Списки и кортежи в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    title: "Урок 7: Словари и множества",
    content: `
      <section class="theory">
        <h2>Словари и множества</h2>
        <p>Словари и множества - это мощные структуры данных в Python, которые позволяют эффективно хранить и обрабатывать коллекции элементов.</p>
        
        <div class="info-card">
          <h4>Что такое хеш-таблицы?</h4>
          <p>И словари, и множества в Python реализованы с использованием хеш-таблиц, что обеспечивает очень быстрый доступ к элементам (в среднем за O(1) времени).</p>
        </div>
        
        <h3>Словари (Dictionaries)</h3>
        <p>Словарь - это изменяемая, неупорядоченная коллекция пар ключ-значение. Каждый ключ должен быть уникальным и неизменяемым (строки, числа, кортежи).</p>
        
        <div class="theory-card">
          <h4>Создание словарей</h4>
          <p>Словари создаются с помощью фигурных скобок <code>{}</code> или функции <code>dict()</code>.</p>
          <div class="example">
            <pre><code># Создание пустого словаря
  empty_dict = {}
  empty_dict2 = dict()
  
  # Создание словаря с элементами
  person = {
      "name": "Алексей",
      "age": 25,
      "city": "Москва"
  }
  
  # Создание словаря с помощью функции dict()
  person2 = dict(name="Мария", age=23, city="Санкт-Петербург")</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Доступ к элементам словаря</h4>
          <p>Доступ к значениям словаря осуществляется по ключу.</p>
          <div class="example">
            <pre><code>person = {
      "name": "Алексей",
      "age": 25,
      "city": "Москва"
  }
  
  # Доступ к значениям по ключу
  print(person["name"])  # Алексей
  print(person["age"])   # 25
  print(person["city"])  # Москва
  
  # Доступ с помощью метода get() (безопасный способ)
  print(person.get("name"))  # Алексей
  print(person.get("email"))  # None (ключа нет в словаре)
  print(person.get("email", "Не указан"))  # "Не указан" (значение по умолчанию)</code></pre>
          </div>
        </div>
        
        <div class="warning-card">
          <h4>Внимание!</h4>
          <p>Если вы пытаетесь получить доступ к несуществующему ключу с помощью квадратных скобок <code>dict["key"]</code>, Python вызовет ошибку <code>KeyError</code>. Метод <code>get()</code> более безопасен, так как он возвращает <code>None</code> или указанное значение по умолчанию, если ключ не найден.</p>
        </div>
        
        <div class="theory-card">
          <h4>Изменение словарей</h4>
          <p>Словари являются изменяемыми, то есть их элементы можно добавлять, изменять и удалять.</p>
          <div class="example">
            <pre><code>person = {
      "name": "Алексей",
      "age": 25,
      "city": "Москва"
  }
  
  # Добавление новой пары ключ-значение
  person["email"] = "alex@example.com"
  print(person)  # {'name': 'Алексей', 'age': 25, 'city': 'Москва', 'email': 'alex@example.com'}
  
  # Изменение значения
  person["age"] = 26
  print(person)  # {'name': 'Алексей', 'age': 26, 'city': 'Москва', 'email': 'alex@example.com'}
  
  # Удаление пары ключ-значение
  del person["city"]
  print(person)  # {'name': 'Алексей', 'age': 26, 'email': 'alex@example.com'}</code></pre>
          </div>
        </div>
        
        <h3>Методы словарей</h3>
        <p>Python предоставляет множество встроенных методов для работы со словарями.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>keys()</h4>
            <p>Возвращает все ключи словаря.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Москва"}
  keys = person.keys()
  print(keys)  # dict_keys(['name', 'age', 'city'])</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>values()</h4>
            <p>Возвращает все значения словаря.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Москва"}
  values = person.values()
  print(values)  # dict_values(['Алексей', 25, 'Москва'])</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>items()</h4>
            <p>Возвращает все пары ключ-значение в виде кортежей.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Москва"}
  items = person.items()
  print(items)  # dict_items([('name', 'Алексей'), ('age', 25), ('city', 'Москва')])</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>update()</h4>
            <p>Обновляет словарь, добавляя пары ключ-значение из другого словаря.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25}
  more_info = {"city": "Москва", "email": "alex@example.com"}
  person.update(more_info)
  print(person)  # {'name': 'Алексей', 'age': 25, 'city': 'Москва', 'email': 'alex@example.com'}</code></pre>
            </div>
          </div>
        </div>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>pop()</h4>
            <p>Удаляет указанный ключ и возвращает соответствующее значение.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Москва"}
  age = person.pop("age")
  print(age)     # 25
  print(person)  # {'name': 'Алексей', 'city': 'Москва'}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>popitem()</h4>
            <p>Удаляет и возвращает последнюю добавленную пару ключ-значение.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Москва"}
  item = person.popitem()
  print(item)    # ('city', 'Москва')
  print(person)  # {'name': 'Алексей', 'age': 25}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>clear()</h4>
            <p>Удаляет все элементы из словаря.</p>
            <div class="example">
              <pre><code>person = {"name": "Алексей", "age": 25, "city": "Москва"}
  person.clear()
  print(person)  # {}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>copy()</h4>
            <p>Создает копию словаря.</p>
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
          <h4>Перебор словарей</h4>
          <p>Существует несколько способов перебора элементов словаря.</p>
          <div class="example">
            <pre><code>person = {
      "name": "Алексей",
      "age": 25,
      "city": "Москва"
  }
  
  # Перебор ключей (по умолчанию)
  for key in person:
      print(key, ":", person[key])
  
  # Перебор ключей с помощью keys()
  for key in person.keys():
      print(key, ":", person[key])
  
  # Перебор значений с помощью values()
  for value in person.values():
      print(value)
  
  # Перебор пар ключ-значение с помощью items()
  for key, value in person.items():
      print(key, ":", value)</code></pre>
          </div>
        </div>
        
        <div class="tip-card">
          <h4>Вложенные словари</h4>
          <p>Словари могут содержать другие словари в качестве значений, что позволяет создавать сложные структуры данных.</p>
          <pre><code>student = {
      "name": "Алексей",
      "age": 20,
      "courses": {
          "math": {"grade": 85, "credits": 3},
          "history": {"grade": 92, "credits": 2},
          "programming": {"grade": 78, "credits": 4}
      }
  }
  
  # Доступ к вложенным значениям
  print(student["courses"]["math"]["grade"])  # 85</code></pre>
        </div>
        
        <h3>Множества (Sets)</h3>
        <p>Множество - это неупорядоченная коллекция уникальных элементов. Множества полезны для удаления дубликатов и выполнения математических операций над множествами.</p>
        
        <div class="theory-card">
          <h4>Создание множеств</h4>
          <p>Множества создаются с помощью фигурных скобок <code>{}</code> или функции <code>set()</code>.</p>
          <div class="example">
            <pre><code># Создание пустого множества
  # Внимание: {} создает пустой словарь, не множество!
  empty_set = set()
  
  # Создание множества с элементами
  fruits = {"яблоко", "банан", "вишня"}
  numbers = {1, 2, 3, 4, 5}
  
  # Создание множества из списка (удаляет дубликаты)
  numbers_list = [1, 2, 2, 3, 4, 4, 5]
  unique_numbers = set(numbers_list)
  print(unique_numbers)  # {1, 2, 3, 4, 5}</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Основные операции с множествами</h4>
          <p>Множества поддерживают различные операции, такие как добавление, удаление и проверка наличия элементов.</p>
          <div class="example">
            <pre><code>fruits = {"яблоко", "банан", "вишня"}
  
  # Добавление элемента
  fruits.add("апельсин")
  print(fruits)  # {'яблоко', 'банан', 'вишня', 'апельсин'}
  
  # Добавление нескольких элементов
  fruits.update(["манго", "киви"])
  print(fruits)  # {'яблоко', 'банан', 'вишня', 'апельсин', 'манго', 'киви'}
  
  # Удаление элемента
  fruits.remove("банан")  # Вызывает ошибку, если элемента нет
  print(fruits)  # {'яблоко', 'вишня', 'апельсин', 'манго', 'киви'}
  
  # Безопасное удаление элемента
  fruits.discard("вишня")  # Не вызывает ошибку, если элемента нет
  print(fruits)  # {'яблоко', 'апельсин', 'манго', 'киви'}
  
  # Проверка наличия элемента
  print("яблоко" in fruits)  # True
  print("банан" in fruits)   # False</code></pre>
          </div>
        </div>
        
        <h3>Математические операции с множествами</h3>
        <p>Множества поддерживают стандартные математические операции, такие как объединение, пересечение, разность и симметрическая разность.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Объединение (Union)</h4>
            <p>Возвращает множество, содержащее все элементы из обоих множеств.</p>
            <div class="example">
              <pre><code>set1 = {1, 2, 3, 4, 5}
  set2 = {4, 5, 6, 7, 8}
  
  # Использование оператора |
  union_set = set1 | set2
  print(union_set)  # {1, 2, 3, 4, 5, 6, 7, 8}
  
  # Использование метода union()
  union_set = set1.union(set2)
  print(union_set)  # {1, 2, 3, 4, 5, 6, 7, 8}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Пересечение (Intersection)</h4>
            <p>Возвращает множество, содержащее только элементы, которые есть в обоих множествах.</p>
            <div class="example">
              <pre><code>set1 = {1, 2, 3, 4, 5}
  set2 = {4, 5, 6, 7, 8}
  
  # Использование оператора &
  intersection_set = set1 & set2
  print(intersection_set)  # {4, 5}
  
  # Использование метода intersection()
  intersection_set = set1.intersection(set2)
  print(intersection_set)  # {4, 5}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Разность (Difference)</h4>
            <p>Возвращает множество, содержащее элементы, которые есть в первом множестве, но отсутствуют во втором.</p>
            <div class="example">
              <pre><code>set1 = {1, 2, 3, 4, 5}
  set2 = {4, 5, 6, 7, 8}
  
  # Использование оператора -
  difference_set = set1 - set2
  print(difference_set)  # {1, 2, 3}
  
  # Использование метода difference()
  difference_set = set1.difference(set2)
  print(difference_set)  # {1, 2, 3}</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Симметрическая разность (Symmetric Difference)</h4>
            <p>Возвращает множество, содержащее элементы, которые есть в одном из множеств, но не в обоих.</p>
            <div class="example">
              <pre><code>set1 = {1, 2, 3, 4, 5}
  set2 = {4, 5, 6, 7, 8}
  
  # Использование оператора ^
  sym_diff_set = set1 ^ set2
  print(sym_diff_set)  # {1, 2, 3, 6, 7, 8}
  
  # Использование метода symmetric_difference()
  sym_diff_set = set1.symmetric_difference(set2)
  print(sym_diff_set)  # {1, 2, 3, 6, 7, 8}</code></pre>
            </div>
          </div>
        </div>
        
        <div class="info-card">
          <h4>Когда использовать словари, а когда множества?</h4>
          <ul>
            <li><strong>Используйте словари, когда:</strong>
              <ul>
                <li>Вам нужно хранить пары ключ-значение</li>
                <li>Вам нужен быстрый доступ к значениям по ключу</li>
                <li>Вы хотите хранить данные, которые можно идентифицировать по уникальному ключу</li>
              </ul>
            </li>
            <li><strong>Используйте множества, когда:</strong>
              <ul>
                <li>Вам нужно хранить только уникальные элементы</li>
                <li>Вам нужно выполнять математические операции над множествами (объединение, пересечение и т.д.)</li>
                <li>Вам нужно быстро проверять наличие элемента в коллекции</li>
                <li>Вам не важен порядок элементов</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/W2oO1Y-QDzo" title="Python сөздіктер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/W2oO1Y-QDzo" title="Словари и множества в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    title: "Урок 8: Работа с файлами",
    content: `
      <section class="theory">
        <h2>Работа с файлами</h2>
        <p>Работа с файлами - важная часть программирования, которая позволяет сохранять и загружать данные. Python предоставляет простые и мощные инструменты для работы с файлами.</p>
        
        <div class="info-card">
          <h4>Зачем нужна работа с файлами?</h4>
          <p>Файлы позволяют программам сохранять данные после завершения работы, обмениваться данными с другими программами и обрабатывать большие объемы данных, которые не помещаются в оперативную память.</p>
        </div>
        
        <h3>Открытие и закрытие файлов</h3>
        <p>Для работы с файлом в Python его нужно сначала открыть с помощью функции <code>open()</code>.</p>
        
        <div class="theory-card">
          <h4>Функция open()</h4>
          <p>Функция <code>open()</code> принимает два основных параметра: имя файла и режим открытия.</p>
          <div class="example">
            <pre><code># Открытие файла для чтения
  file = open("example.txt", "r")
  
  # Выполнение операций с файлом
  # ...
  
  # Закрытие файла
  file.close()</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Режимы открытия файлов</h4>
          <p>Режим определяет, какие операции можно выполнять с файлом.</p>
          <div class="example">
            <ul>
              <li><code>"r"</code> - чтение (по умолчанию)</li>
              <li><code>"w"</code> - запись (создает новый файл или перезаписывает существующий)</li>
              <li><code>"a"</code> - добавление (добавляет данные в конец файла)</li>
              <li><code>"x"</code> - создание (создает новый файл, вызывает ошибку, если файл уже существует)</li>
              <li><code>"b"</code> - бинарный режим (например, "rb" или "wb")</li>
              <li><code>"t"</code> - текстовый режим (по умолчанию)</li>
              <li><code>"+"</code> - обновление (чтение и запись)</li>
            </ul>
          </div>
        </div>
        
        <div class="warning-card">
          <h4>Важно!</h4>
          <p>Всегда закрывайте файлы после работы с ними с помощью метода <code>close()</code>. Незакрытые файлы могут привести к утечке ресурсов и потере данных.</p>
        </div>
        
        <h3>Использование конструкции with</h3>
        <p>Рекомендуемый способ работы с файлами в Python - использование конструкции <code>with</code>, которая автоматически закрывает файл после выхода из блока, даже если возникнет исключение.</p>
        
        <pre><code class="language-python"># Использование конструкции with
  with open("example.txt", "r") as file:
      # Выполнение операций с файлом
      content = file.read()
      print(content)
      
  # Здесь файл уже закрыт автоматически</code></pre>
        
        <div class="tip-card">
          <h4>Совет</h4>
          <p>Всегда используйте конструкцию <code>with</code> для работы с файлами, чтобы избежать проблем с незакрытыми файлами.</p>
        </div>
        
        <h3>Чтение из файла</h3>
        <p>Python предоставляет несколько методов для чтения данных из файла.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>read()</h4>
            <p>Читает весь файл как одну строку.</p>
            <div class="example">
              <pre><code>with open("example.txt", "r") as file:
      content = file.read()
      print(content)</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>readline()</h4>
            <p>Читает одну строку из файла.</p>
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
            <p>Читает все строки файла и возвращает их в виде списка.</p>
            <div class="example">
              <pre><code>with open("example.txt", "r") as file:
      lines = file.readlines()
      print(lines)  # ['Строка 1\\n', 'Строка 2\\n', ...]</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Итерация по файлу</h4>
            <p>Файловый объект является итерируемым, что позволяет перебирать строки файла в цикле.</p>
            <div class="example">
              <pre><code>with open("example.txt", "r") as file:
      for line in file:
          print(line.strip())  # strip() удаляет символ \\n в конце строки</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Запись в файл</h3>
        <p>Для записи данных в файл используются методы <code>write()</code> и <code>writelines()</code>.</p>
        
        <div class="theory-grid">
          <div class="theory-card">
            <h4>write()</h4>
            <p>Записывает строку в файл.</p>
            <div class="example">
              <pre><code>with open("example.txt", "w") as file:
      file.write("Привет, мир!\\n")
      file.write("Это вторая строка.")</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>writelines()</h4>
            <p>Записывает список строк в файл.</p>
            <div class="example">
              <pre><code>lines = ["Строка 1\\n", "Строка 2\\n", "Строка 3\\n"]
  with open("example.txt", "w") as file:
      file.writelines(lines)</code></pre>
            </div>
          </div>
        </div>
        
        <div class="warning-card">
          <h4>Внимание!</h4>
          <p>Метод <code>write()</code> не добавляет символ новой строки <code>\\n</code> автоматически. Если вы хотите, чтобы каждая запись начиналась с новой строки, добавляйте <code>\\n</code> в конце строки.</p>
        </div>
        
        <h3>Работа с путями к файлам</h3>
        <p>Для работы с путями к файлам в Python рекомендуется использовать модуль <code>os.path</code> или модуль <code>pathlib</code> (в Python 3.4+).</p>
        
        <div class="theory-card">
          <h4>Модуль os.path</h4>
          <p>Модуль <code>os.path</code> предоставляет функции для работы с путями к файлам.</p>
          <div class="example">
            <pre><code>import os.path
  
  # Проверка существования файла
  if os.path.exists("example.txt"):
      print("Файл существует")
      
  # Получение абсолютного пути
  abs_path = os.path.abspath("example.txt")
  print(abs_path)
  
  # Получение имени файла и расширения
  base = os.path.basename(abs_path)
  name, ext = os.path.splitext(base)
  print(f"Имя файла: {name}, расширение: {ext}")</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Модуль pathlib</h4>
          <p>Модуль <code>pathlib</code> предоставляет объектно-ориентированный интерфейс для работы с путями к файлам.</p>
          <div class="example">
            <pre><code>from pathlib import Path
  
  # Создание объекта Path
  path = Path("example.txt")
  
  # Проверка существования файла
  if path.exists():
      print("Файл существует")
      
  # Получение абсолютного пути
  abs_path = path.absolute()
  print(abs_path)
  
  # Получение имени файла и расширения
  print(f"Имя файла: {path.stem}, расширение: {path.suffix}")</code></pre>
          </div>
        </div>
        
        <h3>Работа с CSV файлами</h3>
        <p>CSV (Comma-Separated Values) - популярный формат для хранения табличных данных. Python предоставляет модуль <code>csv</code> для работы с CSV файлами.</p>
        
        <div class="theory-card">
          <h4>Чтение CSV файла</h4>
          <p>Модуль <code>csv</code> предоставляет функции для чтения CSV файлов.</p>
          <div class="example">
            <pre><code>import csv
  
  # Чтение CSV файла
  with open("data.csv", "r", newline="") as file:
      csv_reader = csv.reader(file)
      for row in csv_reader:
          print(row)  # row - это список значений в строке</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Запись в CSV файл</h4>
          <p>Модуль <code>csv</code> также предоставляет функции для записи в CSV файлы.</p>
          <div class="example">
            <pre><code>import csv
  
  # Запись в CSV файл
  with open("data.csv", "w", newline="") as file:
      csv_writer = csv.writer(file)
      csv_writer.writerow(["Имя", "Возраст", "Город"])
      csv_writer.writerow(["Алексей", 25, "Москва"])
      csv_writer.writerow(["Мария", 23, "Санкт-Петербург"])</code></pre>
          </div>
        </div>
        
        <div class="tip-card">
          <h4>Совет</h4>
          <p>При работе с CSV файлами рекомендуется указывать параметр <code>newline=""</code> при открытии файла, чтобы избежать проблем с переносами строк на разных платформах.</p>
        </div>
        
        <h3>Работа с JSON файлами</h3>
        <p>JSON (JavaScript Object Notation) - популярный формат для хранения и обмена данными. Python предоставляет модуль <code>json</code> для работы с JSON файлами.</p>
        
        <div class="theory-card">
          <h4>Чтение JSON файла</h4>
          <p>Модуль <code>json</code> предоставляет функции для чтения JSON файлов.</p>
          <div class="example">
            <pre><code>import json
  
  # Чтение JSON файла
  with open("data.json", "r") as file:
      data = json.load(file)
      print(data)  # data - это словарь или список</code></pre>
          </div>
        </div>
        
        <div class="theory-card">
          <h4>Запись в JSON файл</h4>
          <p>Модуль <code>json</code> также предоставляет функции для записи в JSON файлы.</p>
          <div class="example">
            <pre><code>import json
  
  # Данные для записи
  data = {
      "name": "Алексей",
      "age": 25,
      "city": "Москва",
      "languages": ["Python", "JavaScript", "C++"]
  }
  
  # Запись в JSON файл
  with open("data.json", "w") as file:
      json.dump(data, file, indent=4)  # indent для форматирования</code></pre>
          </div>
        </div>
      </section>
  
      <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/t-xQAhLNYSs" title="Python файлдар" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/t-xQAhLNYSs" title="Работа с файлами в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  
  // Экспортируем урок для использования в основном файле
  if (typeof window !== 'undefined') {
    window.pythonLesson8 = lesson8;
  }
/**
 * Улучшенный урок 9 для курса Python (часть 1)
 */

const lesson9= {
    title: "Урок 9: Объектно-ориентированное программирование",
    content: `
      <section class="theory">
        <h2>Объектно-ориентированное программирование</h2>
        <p>Объектно-ориентированное программирование (ООП) - это парадигма программирования, основанная на концепции "объектов", которые могут содержать данные и код. Данные в виде полей (атрибутов) и код в виде процедур (методов).</p>
        
        <div class="info-card">
          <h4>Что такое ООП?</h4>
          <p>Объектно-ориентированное программирование - это подход к программированию, при котором программа организуется как совокупность объектов, каждый из которых является экземпляром определенного класса, а классы образуют иерархию наследования.</p>
        </div>
        
        <h3>Основные принципы ООП</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Инкапсуляция</h4>
            <p>Инкапсуляция - это механизм, который объединяет данные и методы, которые работают с этими данными, и защищает их от внешнего вмешательства.</p>
            <div class="example">
              <pre><code>class BankAccount:
      def __init__(self, owner, balance=0):
          self.owner = owner
          self.__balance = balance  # Приватный атрибут
      
      def deposit(self, amount):
          self.__balance += amount
          return self.__balance
      
      def withdraw(self, amount):
          if amount <= self.__balance:
              self.__balance -= amount
              return self.__balance
          return "Недостаточно средств"</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Наследование</h4>
            <p>Наследование - это механизм, который позволяет создавать новый класс на основе существующего класса.</p>
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
            <p>Полиморфизм - это возможность использовать один и тот же интерфейс для разных типов данных.</p>
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
            <p>Абстракция - это выделение существенных характеристик объекта, которые отличают его от всех других видов объектов.</p>
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
        
        <h3>Классы и объекты</h3>
        <p>Класс - это шаблон для создания объектов. Он определяет атрибуты и методы, которые будут иметь все объекты, созданные на основе этого класса.</p>
        
        <div class="theory-card">
          <h4>Определение класса</h4>
          <p>Классы в Python определяются с помощью ключевого слова <code>class</code>.</p>
          <div class="example">
            <pre><code>class Person:
      # Атрибуты класса (общие для всех экземпляров)
      species = "Homo sapiens"
      
      # Инициализатор (конструктор)
      def __init__(self, name, age):
          # Атрибуты экземпляра (уникальные для каждого экземпляра)
          self.name = name
          self.age = age
      
      # Метод экземпляра
      def greet(self):
          return f"Привет, меня зовут {self.name}. Мне {self.age} лет."
      
      # Метод экземпляра
      def birthday(self):
          self.age += 1
          return f"С днем рождения, {self.name}! Теперь тебе {self.age} лет."</code></pre>
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gFRa6qVN980" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gFRa6qVN980" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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