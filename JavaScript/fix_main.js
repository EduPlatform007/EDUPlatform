/**
 * Скрипт для корректной работы переводов на главной странице
 */

// Объект переводов для основной страницы
const translations = {
  kk: {
    main: "Басты",
    courses: "Курстар",
    contacts: "Байланыс",
    login: "Кіру",
    profile: "Профиль",
    main_title: "Білім <br> алудың <br>жаңа дәуірі!",
    main_subtitle: "Онлайн курстар арқылы қол жеткізіңіз",
    view_courses: "Курстарды қарау",
    top_courses: "Үздік курстар",
    html_title: "HTML ,CSS-тің негізгі түсініктері",
    html_desc: "Веб-сайттың құрылымын және <br>дизайнын жасауды <br> үйреніңіз.",
    learn_more: "Көбірек білу",
    python_title: "Python бағдарламалау",
    python_desc: "Айнымалылар, шарттар, циклдер <br>және функциялармен жұмыс <br>жасауды үйреніңіз.",
    db_title: "Деректер базасымен жұмыс",
    db_desc: "Деректерді сақтау, сұраныс жасау <br> және басқару әдістерін <br> меңгеріңіз.",
    online_course: "Онлайн курс",
    online_desc: "Білімді кез келген жерден <br> және құрылғыдан алу",
    schedule: "Сабақ кестесі",
    schedule_desc: "Апталық және күнделікті <br> оқу жоспары",
    achievements: "Жетістіктер <br> жүйесі",
    achievements_desc: "Оқудағы прогресті <br> бақылап, марапаттар <br> жина",
    interactive: "Интерактивті <br>жаттығу",
    interactive_desc: "Тапсырмалар арқылы <br> білімді бекіту",
    top_teachers: "Үздік мұғалімдер",
    
    // Информация об учителях
    teacher1_name: "Асқар Әлімов",
    teacher1_position: "HTML және CSS оқытушысы",
    teacher1_age: "Жасы: 28",
    teacher1_exp: "Тәжірибесі: 5 жыл",
    teacher2_name: "Айгүл Серікова",
    teacher2_position: "Python оқытушысы",
    teacher2_age: "Жасы: 32",
    teacher2_exp: "Тәжірибесі: 7 жыл",
    teacher3_name: "Дәулет Қасымов",
    teacher3_position: "Деректер базасы оқытушысы",
    teacher3_age: "Жасы: 35",
    teacher3_exp: "Тәжірибесі: 10 жыл",
    
    // Отзывы студентов
    reviews: "Пікірлер",
    student1_name: "Аружан Кенжебаева",
    student1_review: "Бұл курс арқылы мен веб-дизайнның негіздерін үйрендім. Практикалық тапсырмалар өте пайдалы болды, әрі оларды өзімше өзгертіп жасауға мүмкіндік берді. Оқытушылар әрқашан кері байланыс береді және күрделі сұрақтарға түсінікті түрде жауап береді. Қазір мен өз бетімше қарапайым сайттар жасай аламын. Курсты аяқтағаннан кейін портфолиомға бірнеше жобаны қостым!",
    student2_name: "Мадина Ермекова",
    student2_review: "Python бағдарламалауды нөлден бастап үйренгім келді, және бұл курс маған керекті нәрсені берді. Сабақтар анық және қадамдық түрде ұсынылған, сондықтан түсіну оңай болды. Практикалық тапсырмалар мен мини-жобалар арқылы білімімді бекітуге мүмкіндік туды. Қазір мен өзімнің қарапайым бағдарламалар мен скриптерлер жаза аламын. Курс маған IT-салаға қадам басуға көмеkтесті!",
    student3_name: "Арман Касымов",
    student3_review: "Дерекқорлар мен SQL туралы білім алғым келді, және бұл курс маған осы саланы тереңірек түсінуге көмеkтесті. Сабақтарда нақты мысалдар мен жұмыс кестелері қолданылды, сондықтан материалды түсіну оңай болды. Курс аясында мен өз бетімше сұраулар жазып, дерекқорларды басқара алдым. Бұл білім маған жұмыс іздеу кезінде айтарлықтай артықшылық берді!",
    
    // Новая система курса
    new_course_system: "Жаңа курс системасы",
    edu_platform: "EduPlatform",
    learning_system: "оқыту жүйесі:",
    course_system_p1: "1.Интерактивті сабақтар және видео лекциялар",
    course_system_p2: "2.Практикалық тапсырмалар мен жобалар",
    course_system_p3: "3.Автоматты тестілеу жүйесі",
    course_system_p4: "4.Жедел кері байланыс жүйесі",
    course_system_p5: "5.Топтық жобалар мен дискуссиялар",
    course_system_p6: "6.Оффлайн режимде жұмыс істеу мүмкіндігі",
    course_system_p7: "7.Жеке даму жоспары",
    course_system_p8: "8.Оқу процесін талдау панелі",
    course_system_p9: "9. Жеке куратордың қолдауы",
    course_system_p10: "10. Карьералық консультациялар",
    course_system_p11: "11. Оқу материалының қолжетімді форматы",
    course_system_p12: "12. Мобильді қосымша арқылы қол жеткізу",
    course_system_p13: "13. Білім деңгейін бақылау жүйесі",
    course_system_p14: "14. Сертификаттау бағдарламасы",
    course_system_p15: "15. Халықаралық стандарттарға сәйкестік",
    course_system_p16: "16. Ұйымдастырушылық қолдау қызметі",
    
    // Особенности
    features: "Ерекшеліктері:",
    features_p1: "1.Қазіргі заманғы технологияларға негізделген оқыту әдістері",
    features_p2: "2.Тәжірибелі оқытушылар мен сарапшылар командасы",
    features_p3: "3.Жеке тұлғаға бағытталған оқыту жүйесі",
    features_p4: "4.Икемді оқу графигі және қарқындылығы",
    features_p5: "5.Нарықтық сұранысқа сәйкес келетін бағдарламалар",
    features_p6: "6.Шынайы жобалар арқылы тәжірибе жинау мүмкіндігі",
    features_p7: "7.Білім алушылардың қауіпсіздігі мен құпиялылығы",
    features_p8: "8.Үздіксіз жаңартылатын оқу материалы",
    
    // FAQ
    faq: "Жиі қойылатын сұрақтар",
    faq1_q: "EduPlatform деген не?",
    faq1_a: "EduPlatform - бұл бастаушыларға арналған онлайн бағдарламалау мектебі. Біз HTML/CSS, Python және SQL бойынша курстар ұсынамыз. Біздің курстар интерактивті тапсырмалар, бейне сабақтар және практикалық жобалардан тұрады.",
    faq2_q: "Курстар кімдерге арналған?",
    faq2_a: "Біздің курстар бағдарламалауды үйренгісі келетін кез келген адамға арналған. Алдын ала дайындық қажет емес - барлығы негізгі деңгейден басталады. Курстар әртүрлі жас топтары үшін қолжетімді.",
    faq3_q: "Курстың артықшылықтары қандай?",
    faq3_a: "Біздің курстардың артықшылықтары: <br> 1.Интерактивті формат - теория мен практиканың тиімді үйлесімі. <br> 2.Тәжірибелі оқытушылар - өз саласының мамандары. <br> 3.Икемді оқу кестесі - өзіңізге ыңғайлы уақытта оқу. <br> 4.Қолдау қызметі - кез келген қиындықта тегін консультация алу. <br> 5.Сертификат - курсты аяқтағаннан кейін растайтын құжат алу.",
    faq4_q: "Курстың бағасы қанша?",
    faq4_a: "Біз барлық жаңа студенттерге арнайы ұсыныс жасаймыз: <br> 1.Бірінші апта тегін - курс бағдарламасымен танысу және оқыту стилін бағалау мүмкіндігі<br> 2.Одан кейін төлемдік бағдарлама: <br> •    HTML/CSS - 25 000 теңге/ай <br> •    Python - 35 000 теңге/ай <br> •    Дерекқорлар (SQL) - 30 000 теңге/ай",
    
    // Footer
    copyright: "© 2025 EduPlatform"
  },
  ru: {
    main: "Главная",
    courses: "Курсы",
    contacts: "Контакты",
    login: "Вход",
    profile: "Профиль",
    main_title: "Новая<br> эра<br>обучения!",
    main_subtitle: "Доступно через онлайн курсы",
    view_courses: "Просмотр курсов",
    top_courses: "Топовые курсы",
    html_title: "Основы HTML и CSS",
    html_desc: "Научитесь создавать структуру <br>и дизайн веб-сайтов.",
    learn_more: "Узнать больше",
    python_title: "Программирование на Python",
    python_desc: "Изучите работу с переменными, <br>условиями, циклами <br>и функциями.",
    db_title: "Работа с базами данных",
    db_desc: "Освойте методы хранения, <br>запроса и управления <br>данными.",
    online_course: "Онлайн курс",
    online_desc: "Получение знаний из любого <br>места и устройства",
    schedule: "Расписание занятий",
    schedule_desc: "Недельный и ежедневный <br>учебный план",
    achievements: "Система <br>достижений",
    achievements_desc: "Отслеживай прогресс <br>обучения и собирай <br>награды",
    interactive: "Интерактивные <br>упражнения",
    interactive_desc: "Закрепление знаний <br>через задания",
    top_teachers: "Лучшие преподаватели",
    
    // Информация об учителях
    teacher1_name: "Аскар Алимов",
    teacher1_position: "Преподаватель HTML и CSS",
    teacher1_age: "Возраст: 28",
    teacher1_exp: "Опыт: 5 лет",
    teacher2_name: "Айгуль Серикова",
    teacher2_position: "Преподаватель Python",
    teacher2_age: "Возраст: 32",
    teacher2_exp: "Опыт: 7 лет",
    teacher3_name: "Даулет Касымов",
    teacher3_position: "Преподаватель баз данных",
    teacher3_age: "Возраст: 35",
    teacher3_exp: "Опыт: 10 лет",
    
    // Новая система курса
    new_course_system: "Новая система курса",
    edu_platform: "EduPlatform",
    learning_system: "система обучения:",
    course_system_p1: "1.Интерактивные уроки и видеолекции",
    course_system_p2: "2.Практические задания и проекты",
    course_system_p3: "3.Система автоматического тестирования",
    course_system_p4: "4.Система оперативной обратной связи",
    course_system_p5: "5.Групповые проекты и дискуссии",
    course_system_p6: "6.Возможность работы в оффлайн режиме",
    course_system_p7: "7.Индивидуальный план развития",
    course_system_p8: "8.Панель анализа учебного процесса",
    course_system_p9: "9. Поддержка персонального куратора",
    course_system_p10: "10. Карьерные консультации",
    course_system_p11: "11. Доступный формат учебных материалов",
    course_system_p12: "12. Доступ через мобильное приложение",
    course_system_p13: "13. Система контроля уровня знаний",
    course_system_p14: "14. Программа сертификации",
    course_system_p15: "15. Соответствие международным стандартам",
    course_system_p16: "16. Служба организационной поддержки",
    
    // Особенности
    features: "Особенности:",
    features_p1: "1.Методы обучения, основанные на современных технологиях",
    features_p2: "2.Команда опытных преподавателей и экспертов",
    features_p3: "3.Персонализированная система обучения",
    features_p4: "4.Гибкий график и интенсивность обучения",
    features_p5: "5.Программы, соответствующие рыночному спросу",
    features_p6: "6.Возможность получения опыта через реальные проекты",
    features_p7: "7.Безопасность и конфиденциальность учащихся",
    features_p8: "8.Постоянно обновляемые учебные материалы",
    
    // Отзывы студентов
    reviews: "Отзывы",
    student1_name: "Аружан Кенжебаева",
    student1_review: "Благодаря этому курсу я изучила основы веб-дизайна. Практические задания были очень полезными и позволяли экспериментировать. Преподаватели всегда дают обратную связь и понятно отвечают на сложные вопросы. Сейчас я могу самостоятельно создавать простые сайты. После завершения курса я добавила несколько проектов в своё портфолио!",
    student2_name: "Мадина Ермекова",
    student2_review: "Я хотела изучить программирование на Python с нуля, и этот курс дал мне именно то, что нужно. Уроки представлены четко и пошагово, поэтому было легко понять. Благодаря практическим заданиям и мини-проектам я смогла закрепить свои знания. Сейчас я могу писать свои простые программы и скрипты. Курс помог мне сделать первый шаг в IT-сферу!",
    student3_name: "Арман Касымов",
    student3_review: "Я хотел получить знания о базах данных и SQL, и этот курс помог мне глубже понять эту область. На уроках использовались конкретные примеры и рабочие таблицы, поэтому материал было легко понять. В рамках курса я научился самостоятельно писать запросы и управлять базами данных. Эти знания дали мне значительное преимущество при поиске работы!",
    
    // FAQ
    faq: "Часто задаваемые вопросы",
    faq1_q: "Что такое EduPlatform?",
    faq1_a: "EduPlatform - это онлайн-школа программирования для начинающих. Мы предлагаем курсы по HTML/CSS, Python и SQL. Наши курсы состоят из интерактивных заданий, видеоуроков и практических проектов.",
    faq2_q: "Для кого предназначены курсы?",
    faq2_a: "Наши курсы предназначены для любого, кто хочет изучить программирование. Предварительная подготовка не требуется - всё начинается с базового уровня. Курсы доступны для разных возрастных групп.",
    faq3_q: "Какие преимущества курса?",
    faq3_a: "Преимущества наших курсов: <br> 1.Интерактивный формат - эффективное сочетание теории и практики. <br> 2.Опытные преподаватели - специалисты в своей области. <br> 3.Гибкий график обучения - учитесь в удобное для вас время. <br> 4.Служба поддержки - бесплатные консультации при любых трудностях. <br> 5.Сертификат - получение подтверждающего документа после завершения курса.",
    faq4_q: "Сколько стоит курс?",
    faq4_a: "Мы делаем специальное предложение для всех новых студентов: <br> 1.Первая неделя бесплатно - возможность ознакомиться с программой курса и оценить стиль обучения<br> 2.Затем платная программа: <br> •    HTML/CSS - 25 000 тенге/месяц <br> •    Python - 35 000 тенге/месяц <br> •    Базы данных (SQL) - 30 000 тенге/месяц",
    
    // Footer
    copyright: "© 2025 EduPlatform"
  }
};

document.addEventListener('DOMContentLoaded', function() {
  console.log('Fix main.js загружен - исправление проблем с языком');
  
  // Получаем текущий язык пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const currentLang = currentUser.language || 'kk';
  
  // Устанавливаем язык страницы
  document.documentElement.setAttribute('lang', currentLang);
  
  // Функция для обновления языка на странице
  function updatePageLanguage(lang) {
    console.log('Обновление языка страницы на:', lang);
    
    document.documentElement.setAttribute('lang', lang);
    
    // Обновляем все элементы с data-lang-key
    if (typeof translations !== 'undefined') {
      document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
          element.innerHTML = translations[lang][key];
        }
      });
    }
    
    // Обновляем заголовки курсов
    const courseHeaders = document.querySelectorAll('.course-header');
    courseHeaders.forEach(header => {
      // Получаем тип курса из атрибута
      const courseType = header.getAttribute('data-course-type') || 'html';
      
      // Устанавливаем правильный заголовок в зависимости от языка
      if (lang === 'ru') {
        switch(courseType) {
          case 'html':
            header.textContent = 'HTML и CSS курс';
            break;
          case 'python':
            header.textContent = 'Python курс';
            break;
          case 'database':
            header.textContent = 'Базы данных SQL';
            break;
          default:
            header.textContent = courseType.charAt(0).toUpperCase() + courseType.slice(1) + ' курс';
        }
      } else {
        // Казахский язык
        switch(courseType) {
          case 'html':
            header.textContent = 'HTML және CSS курсы';
            break;
          case 'python':
            header.textContent = 'Python курсы';
            break;
          case 'database':
            header.textContent = 'SQL деректер базасы';
            break;
          default:
            header.textContent = courseType.charAt(0).toUpperCase() + courseType.slice(1) + ' курсы';
        }
      }
    });
    
    // Обновляем видео
    if (typeof updateVideos === 'function') {
      updateVideos();
    }
    
    // Обновляем кнопки и другие интерфейсные элементы
    const switchLangBtn = document.querySelector('.switch-lang');
    if (switchLangBtn) {
      switchLangBtn.textContent = lang === 'kk' ? 'Русский' : 'Қазақша';
    }
    
    // Обновляем описания курсов
    updateCoursesDescriptions(lang);
  }
  
  // Функция для обновления описания курсов
  function updateCoursesDescriptions(lang) {
    const courseDescriptions = document.querySelectorAll('.course-description');
    
    courseDescriptions.forEach(description => {
      const courseType = description.closest('.course-card')?.getAttribute('data-course-type') || 'html';
      
      if (lang === 'ru') {
        switch(courseType) {
          case 'html':
            description.innerHTML = 'Базовый курс по веб-разработке. Научитесь создавать сайты с помощью HTML и CSS.';
            break;
          case 'python':
            description.innerHTML = 'Изучите язык программирования Python и освойте базовые алгоритмы.';
            break;
          case 'database':
            description.innerHTML = 'Научитесь работать с базами данных и языком запросов SQL.';
            break;
        }
      } else {
        // Казахский язык
        switch(courseType) {
          case 'html':
            description.innerHTML = 'Веб-әзірлеу бойынша негізгі курс. HTML және CSS көмегімен веб-сайттар жасауды үйреніңіз.';
            break;
          case 'python':
            description.innerHTML = 'Python бағдарламалау тілін үйреніп, негізгі алгоритмдерді меңгеріңіз.';
            break;
          case 'database':
            description.innerHTML = 'Деректер базасымен және SQL сұраныс тілімен жұмыс істеуді үйреніңіз.';
            break;
        }
      }
    });
  }
  
  // Функция для обновления видео и текстового содержимого
  function updateMainPageContent() {
    const currentLang = document.documentElement.getAttribute('lang') || 'kk';
    console.log('Обновление контента главной страницы для языка:', currentLang);
    
    // Обновляем заголовки и описания курсов
    updateCoursesDescriptions(currentLang);
    
    // Обновляем видео на странице
    const mainPageVideos = document.querySelectorAll('.main-video-container, .video-container');
    mainPageVideos.forEach(container => {
      // Скрываем все видео контейнеры
      container.querySelectorAll('.video-kk, .video-ru, [data-video-lang]').forEach(video => {
        video.style.display = 'none';
      });
      
      // Показываем видео для текущего языка
      const videoForLang = container.querySelector(`.video-${currentLang}, [data-video-lang="${currentLang}"]`);
      if (videoForLang) {
        videoForLang.style.display = 'block';
      } else {
        // Если видео для текущего языка не найдено, показываем первое доступное
        const firstVideo = container.querySelector('.video-kk, .video-ru, [data-video-lang]');
        if (firstVideo) {
          firstVideo.style.display = 'block';
        }
      }
    });
    
    // Обновляем главный заголовок
    const mainHeader = document.querySelector('.main-header');
    if (mainHeader) {
      mainHeader.innerHTML = currentLang === 'kk' 
        ? 'Кодтауды үйрен<br>өзіңді дамыт'
        : 'Учись кодить<br>развивайся';
    }
    
    // Обновляем подзаголовок
    const mainSubheader = document.querySelector('.main-subheader');
    if (mainSubheader) {
      mainSubheader.innerHTML = currentLang === 'kk'
        ? 'Бастаушыларға арналған бағдарламалау курстары'
        : 'Курсы программирования для начинающих';
    }
  }
  
  // Добавляем слушатель событий на кнопку переключения языка
  const switchLangBtn = document.querySelector('.switch-lang');
  if (switchLangBtn) {
    switchLangBtn.addEventListener('click', function() {
      // Получаем текущий язык и меняем его
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const newLang = currentUser.language === 'ru' ? 'kk' : 'ru';
      
      // Обновляем язык в объекте пользователя
      currentUser.language = newLang;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      
      // Обновляем интерфейс
      updatePageLanguage(newLang);
      
      // Обновляем содержимое страницы
      updateMainPageContent();
    });
  }
  
  // Добавляем слушатель событий на селектор языка
  const languageSelector = document.querySelector('select[name="language"]');
  if (languageSelector) {
    languageSelector.addEventListener('change', function() {
      // Получаем выбранный язык
      const selectedOption = this.value;
      const newLang = selectedOption === 'Қазақша' ? 'kk' : 'ru';
      
      // Обновляем язык в объекте пользователя
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      currentUser.language = newLang;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      
      // Обновляем интерфейс
      updatePageLanguage(newLang);
      
      // Обновляем содержимое страницы
      updateMainPageContent();
      
      console.log('Язык изменен на:', newLang);
    });
  }
  
  // Инициализация языка
  updatePageLanguage(currentLang);
  
  // Обновляем содержимое сразу после загрузки страницы
  updateMainPageContent();
  
  // Добавляем обновление контента через 500мс для корректной загрузки видео
  setTimeout(updateMainPageContent, 500);
}); 