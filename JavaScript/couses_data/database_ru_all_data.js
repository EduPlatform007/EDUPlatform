const lesson1 = {
    title: "Урок 1: Основы баз данных",
    content: `
      <section class="theory">
        <h2>Основы баз данных</h2>
        <p>База данных - это система, предназначенная для хранения, организации и управления данными. Она позволяет эффективно хранить, искать и обрабатывать данные.</p>
        
        <h3>Типы баз данных</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Реляционные базы данных</h4>
            <p>Реляционная база данных - это система, которая хранит данные в виде таблиц. Они используют язык SQL и сохраняют связи между данными.</p>
            <div class="example">
              <p>Примеры: MySQL, PostgreSQL, Oracle</p>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>NoSQL базы данных</h4>
            <p>NoSQL база данных - это нереляционная база данных. Они адаптированы для работы с большими объемами данных.</p>
            <div class="example">
              <p>Примеры: MongoDB, Redis, Cassandra</p>
            </div>
          </div>
        </div>
        
        <h3>Структура базы данных</h3>
        <ul>
          <li><strong>Таблицы</strong> - основная структура для хранения данных</li>
          <li><strong>Столбцы</strong> - типы данных в таблице</li>
          <li><strong>Строки</strong> - отдельные записи в таблице</li>
          <li><strong>Ключи</strong> - поля, уникально идентифицирующие записи</li>
        </ul>
      </section>
<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uGKIXTUjZbc" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uGKIXTUjZbc" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  
// Экспорт урока для использования в основном файле
if (typeof window !== 'undefined') {
  window.databaseLesson1 = lesson1;
}
const lesson2 = {
    title: "Урок 2: Основы SQL",
    content: `
      <section class="theory">
        <h2>Основы SQL</h2>
        <p>SQL (Structured Query Language) - это язык для работы с базами данных. Он используется для хранения, обработки и получения данных.</p>
        
        <h3>Типы SQL запросов</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>SELECT</h4>
            <p>SELECT - запрос, используемый для получения данных.</p>
            <div class="example">
              <pre><code>SELECT * FROM ученики;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>INSERT</h4>
            <p>INSERT - запрос для добавления новых данных в таблицу.</p>
            <div class="example">
              <pre><code>INSERT INTO ученики (имя, фамилия) VALUES ('Иван', 'Петров');</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>UPDATE</h4>
            <p>UPDATE - запрос для изменения существующих данных в таблице.</p>
            <div class="example">
              <pre><code>UPDATE ученики SET класс = '11А' WHERE класс = '10А';</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>DELETE</h4>
            <p>DELETE - запрос для удаления данных из таблицы.</p>
            <div class="example">
              <pre><code>DELETE FROM ученики WHERE имя = 'Иван';</code></pre>
            </div>
          </div>
        </div>
      </section>
<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7nD1e4m9Wgg" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7nD1e4m9Wgg" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  if (typeof window !== 'undefined') {
    window.databaseLesson2 = lesson2;
  }
  const lesson3 = {
    title: "Урок 3: Оператор фильтрации WHERE",
    content: `
      <section class="theory">
        <h2>Оператор WHERE</h2>
        <p>WHERE - это оператор SQL, который используется для фильтрации результатов запроса. Он позволяет выбирать только те строки, которые соответствуют определенным условиям.</p>
        
        <h3>Синтаксис WHERE</h3>
        <pre><code>SELECT * FROM таблица WHERE условие;</code></pre>
        <h3>Примеры использования WHERE</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Пример 1: Выбор учеников из 10-го класса</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики WHERE класс = '10А';</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Пример 2: Выбор учеников старше 15 лет</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики WHERE возраст > 15;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Пример 3: Использование логических операторов</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики WHERE класс = '10А' AND возраст > 15;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Пример 4: Использование BETWEEN</h4>
            <div class="example">
              <pre><code>SELECT * FROM оценки WHERE оценка BETWEEN 4 AND 5;</code></pre>
            </div>
          </div>
        </div>
        <h3>Случаи использования WHERE</h3>
        <ul>
          <li>Фильтрация студентов по определенному классу: <code>WHERE класс = 11</code></li>
          <li>Ученики с оценкой выше 4: <code>WHERE оценка > 4</code></li>
          <li>Поиск по имени: <code>WHERE имя LIKE 'И%'</code></li>
          <li>Несколько условий: <code>WHERE класс = '10А' OR класс = '10Б'</code></li>
        </ul>
        <p><strong>Примечание:</strong> В условии WHERE можно использовать операторы AND, OR, BETWEEN, LIKE, IN, NOT.</p>
      </section>
<div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Q8UmK7wC9Hk" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Q8UmK7wC9Hk" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  const lesson4 = {
    title: "Урок 4: Возможности оператора поиска SQL LIKE",
    content: `
      <section class="theory">
        <h2>Оператор LIKE</h2>
        <p>LIKE — оператор в SQL, предназначенный для поиска данных по шаблону. Он используется для сравнения последовательности символов и очень полезен при работе со строками.</p>
        <h3>Синтаксис LIKE</h3>
        <pre><code>SELECT * FROM таблица WHERE столбец LIKE 'шаблон';</code></pre>
        <h3>Специальные символы</h3>
        <ul>
          <li><strong>%</strong> - соответствует любой последовательности символов (0 или более символов)</li>
          <li><strong>_</strong> - соответствует только одному символу</li>
        </ul>
        <h3>Примеры использования LIKE</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Пример 1: Ученики, чьи имена начинаются на 'А'</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики WHERE имя LIKE 'А%';</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Пример 2: Ученики, чьи имена заканчиваются на 'н'</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики WHERE имя LIKE '%н';</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Пример 3: Ученики, в именах которых есть 'ай'</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики WHERE имя LIKE '%ай%';</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Пример 4: Ученики, чьи имена состоят только из 3 букв</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики WHERE имя LIKE '___';</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Пример 5: Ученики, у которых 'а' является второй буквой в имени</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики WHERE имя LIKE '_а%';</code></pre>
            </div>
          </div>
        </div>
        <h3>Случаи использования LIKE</h3>
        <ul>
          <li>Поиск электронной почты: <code>WHERE email LIKE '%@gmail.com'</code></li>
          <li>Поиск телефонных номеров: <code>WHERE phone LIKE '+7747%'</code></li>
          <li>Поиск по начальным буквам: <code>WHERE name LIKE 'A%'</code></li>
        </ul>
        <p><strong>Примечание:</strong> Оператор LIKE обычно чувствителен к регистру. Чтобы игнорировать регистр, в некоторых СУБД можно использовать ILIKE или функции LOWER/UPPER.</p>
      </section>
  <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NXF6pYYenV4" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NXF6pYYenV4" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  if (typeof window !== 'undefined') {
    window.databaseLesson4 = lesson4;
  }
  const lesson5 = {
    title: "Урок 5: Изменение данных",
    content: `
      <section class="theory">
        <h2>Изменение данных</h2>
        <p>В языке SQL для изменения данных используются запросы INSERT, UPDATE и DELETE. Эти запросы позволяют добавлять, изменять и удалять данные в базе данных.</p>
        
        <h3>Запрос INSERT</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Добавление одной строки</h4>
            <p>Для добавления одной строки используется запрос INSERT INTO.</p>
            <div class="example">
              <pre><code>INSERT INTO ученики (имя, возраст, класс)
  VALUES ('Арман', 20, '10А');</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Добавление нескольких строк</h4>
            <p>Для добавления нескольких строк используется несколько VALUES.</p>
            <div class="example">
              <pre><code>INSERT INTO ученики (имя, возраст, класс)
  VALUES 
    ('Арман', 20, '10А'),
    ('Айгерим', 19, '10Б'),
    ('Болат', 21, '11А');</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Запрос UPDATE</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Изменение одной строки</h4>
            <p>Для изменения одной строки используется запрос UPDATE.</p>
            <div class="example">
              <pre><code>UPDATE ученики
  SET возраст = 21
  WHERE имя = 'Арман';</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Изменение нескольких строк</h4>
            <p>Для изменения нескольких строк нужно использовать условие WHERE.</p>
            <div class="example">
              <pre><code>UPDATE ученики
  SET класс = '11А'
  WHERE класс = '10А';</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Запрос DELETE</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Удаление одной строки</h4>
            <p>Для удаления одной строки используется запрос DELETE.</p>
            <div class="example">
              <pre><code>DELETE FROM ученики
  WHERE имя = 'Арман';</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Удаление нескольких строк</h4>
            <p>Для удаления нескольких строк нужно использовать условие WHERE.</p>
            <div class="example">
              <pre><code>DELETE FROM ученики
  WHERE класс = '10А';</code></pre>
            </div>
          </div>
        </div>
      </section>
  
  <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eyWGkfBYmIY" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eyWGkfBYmIY" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  if (typeof window !== 'undefined') {
    window.databaseLesson5 = lesson5;
  }
  const lesson6 = {
    title: "Урок 6: Объединение таблиц",
    content: `
      <section class="theory">
        <h2>Объединение таблиц</h2>
        <p>Объединение таблиц в языке SQL - это мощная возможность, которая позволяет объединять данные из нескольких таблиц. Это позволяет создавать сложные запросы, используя связи между данными.</p>
        
        <h3>Типы объединений</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>INNER JOIN</h4>
            <p>INNER JOIN - объединяет строки, которые имеют совпадающие значения в обеих таблицах.</p>
            <div class="example">
              <pre><code>SELECT ученики.имя, классы.название
  FROM ученики
  INNER JOIN классы
  ON ученики.класс_id = классы.id;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>LEFT JOIN</h4>
            <p>LEFT JOIN - объединяет все строки из левой таблицы и совпадающие строки из правой таблицы.</p>
            <div class="example">
              <pre><code>SELECT ученики.имя, классы.название
  FROM ученики
  LEFT JOIN классы
  ON ученики.класс_id = классы.id;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>RIGHT JOIN</h4>
            <p>RIGHT JOIN - объединяет все строки из правой таблицы и совпадающие строки из левой таблицы.</p>
            <div class="example">
              <pre><code>SELECT ученики.имя, классы.название
  FROM ученики
  RIGHT JOIN классы
  ON ученики.класс_id = классы.id;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>FULL JOIN</h4>
            <p>FULL JOIN - объединяет все строки из обеих таблиц.</p>
            <div class="example">
              <pre><code>SELECT ученики.имя, классы.название
  FROM ученики
  FULL JOIN классы
  ON ученики.класс_id = классы.id;</code></pre>
            </div>
          </div>
        </div>
        
        <h3>Условия объединения</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Условие ON</h4>
            <p>Условие ON - это основное условие, используемое при объединении таблиц.</p>
            <div class="example">
              <pre><code>SELECT ученики.имя, предметы.название
  FROM ученики
  INNER JOIN ученик_предметы
  ON ученики.id = ученик_предметы.ученик_id
  INNER JOIN предметы
  ON ученик_предметы.предмет_id = предметы.id;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Условие WHERE</h4>
            <p>Условие WHERE - позволяет фильтровать объединенные данные.</p>
            <div class="example">
              <pre><code>SELECT ученики.имя, классы.название
  FROM ученики
  INNER JOIN классы
  ON ученики.класс_id = классы.id
  WHERE классы.название = '10А';</code></pre>
            </div>
          </div>
        </div>
      </section>
  <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SYJ1B2KrDCQ" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SYJ1B2KrDCQ" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  if (typeof window !== 'undefined') {
    window.databaseLesson6 = lesson6;
  }
  const lesson7 = {
    title: "Урок 7: Агрегация данных",
    content: `
      <section class="theory">
        <h2>Агрегация данных</h2>
        <p>Агрегация данных в языке SQL - это структуры, которые позволяют группировать данные и выполнять вычисления по ним. Они используются для анализа и расчета данных.</p>
        
        <h3>Агрегатные функции</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>COUNT()</h4>
            <p>Функция COUNT() - это функция, которая позволяет подсчитать количество строк.</p>
            <div class="example">
              <pre><code>SELECT COUNT(*) FROM ученики;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>SUM()</h4>
            <p>Функция SUM() - это функция, которая позволяет вычислить сумму числовых значений.</p>
            <div class="example">
              <pre><code>SELECT SUM(цена) FROM книги;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>AVG()</h4>
            <p>Функция AVG() - это функция, которая позволяет вычислить среднее значение числовых значений.</p>
            <div class="example">
              <pre><code>SELECT AVG(цена) FROM книги;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>MAX() и MIN()</h4>
            <p>Функции MAX() и MIN() - это функции, которые позволяют найти максимальные и минимальные значения.</p>
            <div class="example">
              <pre><code>SELECT MAX(цена), MIN(цена) FROM книги;</code></pre>
            </div>
          </div>
        </div>
        
      
        </div>
      </section>
  <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/q0nuhf7vzkE" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/q0nuhf7vzkE" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };  
  if (typeof window !== 'undefined') {
    window.databaseLesson7 = lesson7;
  }
  const lesson8 = {
    title: "Урок 8: GROUP BY и HAVING",
    content: `
      <section class="theory">
        <h2>GROUP BY и HAVING</h2>
        <p>GROUP BY и HAVING - это структуры SQL, которые позволяют группировать данные и устанавливать условия по группам. Они используются для анализа и расчета данных.</p>
        
        <h3>GROUP BY</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Основное применение</h4>
            <p>GROUP BY - структура, которая позволяет группировать данные.</p>
            <div class="example">
              <pre><code>SELECT класс, COUNT(*) as количество_учеников
  FROM ученики
  GROUP BY класс;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Группировка по нескольким столбцам</h4>
            <p>Можно группировать по нескольким столбцам.</p>
            <div class="example">
              <pre><code>SELECT класс, предмет, AVG(оценка) as средняя_оценка
  FROM оценки
  GROUP BY класс, предмет;</code></pre>
            </div>
          </div>
        </div>
        
        <h3>HAVING</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Установка условий для групп</h4>
            <p>HAVING - позволяет устанавливать условия по сгруппированным данным.</p>
            <div class="example">
              <pre><code>SELECT класс, COUNT(*) as количество_учеников
  FROM ученики
  GROUP BY класс
  HAVING COUNT(*) > 20;</code></pre>
            </div>
          </div>
          
          <div class="theory-card">
            <h4>Использование с агрегатными функциями</h4>
            <p>HAVING используется вместе с агрегатными функциями.</p>
            <div class="example">
              <pre><code>SELECT предмет, AVG(оценка) as средняя_оценка
  FROM оценки
  GROUP BY предмет
  HAVING AVG(оценка) > 4.0;</code></pre>
            </div>
          </div>
        </div>
      </section>
  <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ytfXUvCsNuo" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ytfXUvCsNuo" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `
  };
  if (typeof window !== 'undefined') {
    window.databaseLesson8 = lesson8;
  }
  const lesson9 = {
    title: "Урок 9: Оператор сортировки ORDER BY",
    content: `
      <section class="theory">
        <h2>Оператор ORDER BY</h2>
        <p>ORDER BY — оператор в SQL, предназначенный для сортировки результатов запроса по определенному столбцу. По умолчанию используется ASC (по возрастанию), DESC (по убыванию).</p>
        <h3>Синтаксис ORDER BY</h3>
        <pre><code>SELECT * FROM таблица ORDER BY столбец [ASC|DESC];</code></pre>
        <h3>Примеры использования ORDER BY</h3>
        <div class="theory-grid">
          <div class="theory-card">
            <h4>Пример 1: Сортировка учеников по имени в порядке возрастания</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики ORDER BY имя ASC;</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Пример 2: Сортировка учеников по классу в порядке убывания</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики ORDER BY класс DESC;</code></pre>
            </div>
          </div>
          <div class="theory-card">
            <h4>Пример 3: Сортировка по нескольким столбцам</h4>
            <div class="example">
              <pre><code>SELECT * FROM ученики ORDER BY класс ASC, имя DESC;</code></pre>
            </div>
          </div>
        </div>
        <h3>Случаи использования ORDER BY</h3>
        <ul>
          <li>Сортировка студентов по GPA в порядке убывания: <code>ORDER BY GPA DESC</code></li>
          <li>Сортировка товаров по цене в порядке возрастания: <code>ORDER BY price ASC</code></li>
        </ul>
        <p><strong>Примечание:</strong> ORDER BY всегда используется в конце при сортировке результатов.</p>
      </section>
  <div class="video-container">
        <div class="video-kk video-wrapper" style="display:none">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bYdjR6QexJY" title="Python ООП" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-ru video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bYdjR6QexJY" title="ООП в Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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