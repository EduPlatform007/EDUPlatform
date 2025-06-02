# Ответы на тесты и практические задания

## HTML Курс (Қазақша)

### Сабақ 1: HTML негіздері
**Тест жауаптары:**
1. a) Гипермәтіндік белгілеу тілі
2. b) &lt;!DOCTYPE html&gt;
3. c) &lt;body&gt;
4. a) &lt;h1&gt;Тақырып&lt;/h1&gt;
5. b) &lt;p&gt;

**Практикалық тапсырма:**
```html
<!DOCTYPE html>
<html lang="kk">
  <head>
    <title>Менің бетім</title>
  </head>
  <body>
    <h1>Сәлем, әлем!</h1>
    <p>Бұл менің алғашқы HTML бетім.</p>
  </body>
</html>
```

### Сабақ 2: HTML тегтері
**Тест жауаптары:**
1. c) &lt;img&gt;
2. b) &lt;a href="https://example.com"&gt;Сілтеме&lt;/a&gt;
3. a) &lt;ul&gt; және &lt;li&gt;
4. c) &lt;br&gt;
5. b) &lt;strong&gt;

**Практикалық тапсырма:**
```html
<!DOCTYPE html>
<html lang="kk">
  <head>
    <title>Менің профилім</title>
  </head>
  <body>
    <h1>Асан Әсенов</h1>
    <p>Мен веб-әзірлеумен айналысамын. Маған HTML, CSS және JavaScript ұнайды.</p>
    
    <h2>Менің сүйікті әуестіктерім:</h2>
    <ul>
      <li>Кітап оқу</li>
      <li>Бағдарламалау</li>
      <li>Саяхаттау</li>
    </ul>
    
    <h2>Білім</h2>
    <ol>
      <li>Назарбаев Университеті</li>
      <li>Қазақ Ұлттық Университеті</li>
    </ol>
    
    <p>Менің <strong>GitHub</strong> парақшам: <a href="https://github.com/asanov">GitHub</a></p>
  </body>
</html>
```

### Сабақ 3: CSS негіздері
**Тест жауаптары:**
1. b) Каскадты стиль кестелері
2. c) Inline, Internal және External
3. a) селектор { қасиет: мән; }
4. b) #header
5. c) color

**Практикалық тапсырма:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Менің блогым</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #e8f4f8;
        margin: 0;
        padding: 20px;
      }
      
      h1 {
        color: #2c3e50;
        font-size: 28px;
        margin-bottom: 20px;
        text-align: center;
      }
      
      h2 {
        color: #3498db;
        font-size: 22px;
      }
      
      p {
        font-size: 16px;
        line-height: 1.6;
        margin: 15px 0;
      }
      
      .blog-post {
        background-color: white;
        padding: 20px;
        margin-bottom: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      
      a {
        color: #3498db;
        text-decoration: none;
      }
      
      a:hover {
        color: #2980b9;
        text-decoration: underline;
      }
      
      li {
        margin: 10px 0;
        padding: 5px;
        background-color: #f8f9fa;
      }
    </style>
  </head>
  <body>
    <!-- Код тела документа без изменений -->
  </body>
</html>
```

### Сабақ 4: HTML формалары
**Тест жауаптары:**
1. b) &lt;form&gt;
2. c) &lt;input type="checkbox"&gt;
3. a) &lt;textarea&gt;
4. b) &lt;select&gt; және &lt;option&gt;
5. c) &lt;label&gt;

**Практикалық тапсырма:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Тіркелу формасы</title>
    <!-- Стили без изменений -->
  </head>
  <body>
    <h1>Тіркелу формасы</h1>
    
    <form action="submit.php" method="post">
      <div class="form-group">
        <label for="name">Аты-жөні:</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Электрондық пошта:</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div class="form-group">
        <label for="password">Құпия сөз:</label>
        <input type="password" id="password" name="password" required>
      </div>
      
      <div class="form-group">
        <label for="tel">Телефон:</label>
        <input type="tel" id="tel" name="tel" pattern="[0-9]{10,11}">
      </div>
      
      <div class="form-group">
        <label for="birthdate">Туған күні:</label>
        <input type="date" id="birthdate" name="birthdate">
      </div>
      
      <div class="form-group">
        <label>Жынысы:</label>
        <div>
          <label><input type="radio" name="gender" value="male"> Ер</label>
          <label><input type="radio" name="gender" value="female"> Әйел</label>
        </div>
      </div>
      
      <div class="form-group">
        <label>Қызығушылықтар:</label>
        <div>
          <label><input type="checkbox" name="interests[]" value="programming"> Бағдарламалау</label>
          <label><input type="checkbox" name="interests[]" value="design"> Дизайн</label>
          <label><input type="checkbox" name="interests[]" value="marketing"> Маркетинг</label>
        </div>
      </div>
      
      <div class="form-group">
        <label for="file">Құжат:</label>
        <input type="file" id="file" name="file">
      </div>
      
      <div class="form-group">
        <button type="submit">Тіркелу</button>
        <button type="reset">Тазалау</button>
      </div>
    </form>
  </body>
</html>
```

### Сабақ 9: Қорытынды тест және жоба
**Тест жауаптары:**
1. a) Гипермәтіндік белгілеу тілі
2. b) Каскадты стиль кестелері
3. b) &lt;title&gt;
4. a) &lt;img&gt;
5. c) color
6. a) Веб-беттің әртүрлі құрылғыларға бейімделуі
7. a) Әртүрлі құрылғыларға арналған стильдерді анықтау үшін
8. b) CSS орналасу моделі
9. a) GET және POST
10. a) Document Object Model - HTML құжатының программалық интерфейсі
11. b) div элементінің ішіндегі p элементтерін
12. c) Элементтердің қабаттасу ретін анықтау үшін
13. a) Мағыналы атаулары бар және мазмұнның құрылымын анықтайтын тегтер
14. b) Беттің толық қайта жүктелуінсіз серверден деректерді алуға мүмкіндік беретін технология
15. c) 'item' класы бар барлық элементтердің түсі көк болады

**Практикалық тапсырма:**
```html
<!DOCTYPE html>
<html lang="kk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Менің портфолиом</title>
  <style>
    /* Стили без изменений */
    
    /* Дополнительные стили для улучшения */
    .profile-img {
      border: 5px solid #2c3e50;
    }
    
    nav a:hover {
      transform: translateY(-3px);
      transition: transform 0.3s;
    }
    
    .project-card:nth-child(4) {
      background-color: #f1f8ff;
    }
  </style>
</head>
<body>
  <!-- Основная структура без изменений -->
  
  <!-- Добавленный четвертый проект -->
  <div class="project-card">
    <img src="https://via.placeholder.com/300x200" alt="Жоба 4" class="project-img">
    <div class="project-info">
      <h3>Мобильді қосымша</h3>
      <p>Жаңалықтар мен хабарламаларды оқуға арналған мобильді қосымша.</p>
      <a href="#" class="project-link">Толығырақ</a>
    </div>
  </div>
</body>
</html>
```

## Python Курс (Қазақша)

### Сабақ 1: Python негіздері
**Тест жауаптары:**
1. c) Гвидо ван Россум
2. a) Интерпретацияланатын
3. b) print("Сәлем, әлем!")
4. c) #
5. a) Айнымалы атауы сандардан басталмауы керек

**Практикалық тапсырма:**
```python
# Пайдаланушыдан аты-жөнін сұрау
name = input("Сіздің атыңыз кім? ")

# Сәлемдесу хабарламасын шығару
print(f"Сәлем, {name}!")

# Пайдаланушыдан жасын сұрау
age = int(input("Сіздің жасыңыз неде? "))

# Келесі жылы қанша жаста болатынын есептеу
next_year_age = age + 1

# Нәтижені шығару
print(f"Келесі жылы сіз {next_year_age} жаста боласыз.")
```

## Python Курс (Русский)

### Урок 1: Основы Python
**Ответы на тест:**
1. c) Гвидо ван Россум
2. a) Интерпретируемый
3. b) print("Привет, мир!")
4. c) #
5. a) Имя переменной не должно начинаться с цифры

**Практическое задание:**
```python
# Запросить имя пользователя
name = input("Как вас зовут? ")

# Вывести приветствие
print(f"Привет, {name}!")

# Запросить возраст пользователя
age = int(input("Сколько вам лет? "))

# Вычислить возраст в следующем году
next_year_age = age + 1

# Вывести результат
print(f"В следующем году вам будет {next_year_age} лет.")
```

### Урок 2: Переменные и типы данных
**Ответы на тест:**
1. b) int, float, str, bool
2. a) name = "Иван"
3. c) Преобразование одного типа данных в другой
4. b) "Привет" + "мир" = "Приветмир"
5. a) 10 + 5 * 2 = 20

**Практическое задание:**
```python
# Запросить данные у пользователя
name = input("Введите ваше имя: ")
age = int(input("Введите ваш возраст: "))
height = float(input("Введите ваш рост в метрах: "))
is_student = input("Вы студент? (да/нет): ").lower() == "да"

# Вывести информацию о типах данных
print(f"Имя: {name} (тип: {type(name)})")
print(f"Возраст: {age} (тип: {type(age)})")
print(f"Рост: {height} (тип: {type(height)})")
print(f"Студент: {is_student} (тип: {type(is_student)})")

# Выполнить преобразования типов
age_str = str(age)
height_int = int(height)

print(f"Возраст в виде строки: {age_str} (тип: {type(age_str)})")
print(f"Рост в виде целого числа: {height_int} (тип: {type(height_int)})")
```
