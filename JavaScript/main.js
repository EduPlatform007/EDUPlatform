document.addEventListener("DOMContentLoaded", function() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
    completedLessons: [],
    completedHomeworks: [],
    pendingHomeworks: [],
    homeworkFiles: {},
    currentLesson: null,
    practiceCodes: {},
    language: "kk",
    name: "",
    progress: {},
    testResults: {},
    homeworkComments: {}
  };

  let openLessonId = null;

  // Явно используем python-уроки, если есть
  window.lessons = window.lessons || window.pythonLessons;

  initLanguage();
  
  applyTranslations();

  initLessons();
  
  window.initLessons = initLessons;
  window.loadLesson = loadLesson;
  window.completeLesson = completeLesson;
  window.checkPractice = checkPractice;
  window.checkCode = checkCode;
  window.checkQuiz = checkQuiz;
  window.currentUser = currentUser;
  window.insertQuizPractice = insertQuizPractice;
  
  // Функция для завершения урока
  function completeLesson(lessonNum) {
    console.log(`Завершение урока ${lessonNum}`);
    
    // Если номер урока не передан, берем текущий урок
    if (!lessonNum) {
      lessonNum = currentUser.currentLesson;
    }
    
    if (!lessonNum) {
      console.error('Номер урока не указан');
      return;
    }
    
    // Проверяем, завершены ли все задания для этого урока
    let isCompleted = false;
    
    // Получаем текущий курс
    const currentCourse = localStorage.getItem('lastOpenedCourse') || 'html';
    
    // Если это 9-й урок, проверяем все тесты и практическое задание
    if (lessonNum === 9) {
      const easyCompleted = localStorage.getItem(`${currentCourse}_lesson${lessonNum}_quiz_easy`) === 'true';
      const mediumCompleted = localStorage.getItem(`${currentCourse}_lesson${lessonNum}_quiz_medium`) === 'true';
      const hardCompleted = localStorage.getItem(`${currentCourse}_lesson${lessonNum}_quiz_hard`) === 'true';
      const practiceCompleted = localStorage.getItem(`${currentCourse}_lesson${lessonNum}_practice`) === 'true';
      
      isCompleted = easyCompleted && mediumCompleted && hardCompleted && practiceCompleted;
    }
    // Если это четный урок (2, 4, 6, 8), проверяем тест
    else if (lessonNum % 2 === 0) {
      isCompleted = localStorage.getItem(`${currentCourse}_lesson${lessonNum}_quiz`) === 'true';
    }
    // Если это нечетный урок (1, 3, 5, 7), проверяем практическое задание
    else {
      isCompleted = localStorage.getItem(`${currentCourse}_lesson${lessonNum}_practice`) === 'true';
    }
    
    // Получаем текущий язык
    const lang = currentUser.language || 'kk';
    
    // Находим элемент для вывода результата
    const resultMessage = document.getElementById('result-message');
    
    // Если все задания выполнены, отмечаем урок как завершенный
    if (isCompleted) {
      // Добавляем урок в список завершенных, если его там еще нет
      if (!currentUser.completedLessons.includes(lessonNum)) {
        currentUser.completedLessons.push(lessonNum);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Если есть Firebase, сохраняем данные там
        if (window.firebaseAuth && typeof window.firebaseAuth.completeLesson === 'function') {
          window.firebaseAuth.completeLesson(lessonNum)
            .then(() => {
              console.log('Урок успешно отмечен как завершенный в Firebase');
            })
            .catch(error => {
              console.error('Ошибка при отметке урока как завершенного в Firebase:', error);
            });
        }
      }
      
      // Показываем сообщение об успешном завершении
      if (resultMessage) {
        resultMessage.innerHTML = `<p class="success-message">
          ✅ ${lang === 'kk' ? 'Сабақ сәтті аяқталды!' : 'Урок успешно завершен!'}</p>`;
      }
      
      // Обновляем UI
      const lessonItem = document.querySelector(`.lesson-item:nth-child(${lessonNum})`);
      if (lessonItem) {
        lessonItem.classList.add('completed');
      }
      
      // Обновляем интерфейс списка уроков
      if (typeof window.initLessons === 'function') {
        window.initLessons();
      }
    } else {
      // Показываем сообщение о необходимости выполнить все задания
      if (resultMessage) {
        resultMessage.innerHTML = `<p class="error-message">
          ❌ ${lang === 'kk' ? 'Сабақты аяқтау үшін барлық тапсырмаларды орындаңыз!' : 'Для завершения урока выполните все задания!'}</p>`;
      }
    }
  }

  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animated');
    const cardsContainers = document.querySelectorAll('.carts, .teachers-carts');
    
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
      );
    }
    
    function checkElements() {
      animatedElements.forEach(element => {
        if (isElementInViewport(element) && !element.classList.contains('visible')) {
          element.classList.add('visible');
        }
      });
      
      cardsContainers.forEach(container => {
        if (isElementInViewport(container) && !container.classList.contains('visible')) {
          container.classList.add('visible');
        }
      });
    }
    
    checkElements();
    
    window.addEventListener('scroll', checkElements);
  }
  
  initScrollAnimations();

  function initLessons() {
    const lessonList = document.getElementById('week-1-lessons');
    if (!lessonList) {
      console.error('Элемент для списка уроков не найден!');
      return;
    }
    
    lessonList.innerHTML = '';
    console.log('Загрузка уроков... Количество уроков:', Object.keys(lessons).length);

    for (let i = 1; i <= Object.keys(lessons).length; i++) {
      if (lessons[i]) {
        const lessonItem = document.createElement('li');
        lessonItem.className = 'lesson-item';
        
        if (currentUser.completedLessons.includes(i)) {
          lessonItem.classList.add('completed');
        }
        
        lessonItem.innerHTML = `
          <div class="lesson-title">${lessons[i].title}</div>
        `;
        
        lessonItem.onclick = function() {
          const wasOpen = openLessonId === i;
          
          document.querySelectorAll('.homework-sidebar').forEach(hw => hw.style.display = 'none');
          
          document.querySelectorAll('.lesson-item').forEach(item => {
            item.classList.remove('active');
          });
          
          if (wasOpen) {
            openLessonId = null;
          } else {
            openLessonId = i;
            lessonItem.classList.add('active');
            
            if (currentUser.completedLessons.includes(i)) {
              const hwElement = document.getElementById(`homework-${i}`);
              if (hwElement) hwElement.style.display = 'block';
            }
            
            loadLesson(i);
          }
        };
        
        lessonList.appendChild(lessonItem);
        
        if (currentUser.completedLessons.includes(i)) {
          const hwDiv = document.createElement('div');
          hwDiv.className = 'homework-sidebar';
          hwDiv.id = `homework-${i}`;
          hwDiv.style.display = 'none';
          hwDiv.textContent = currentUser.language === 'kk' ? 'Қосымша: Үй жұмысы' : 'Дополнительно: Домашнее задание';
          
          if (currentUser.completedHomeworks.includes(i)) {
            hwDiv.classList.add('hw-completed');
          } else if (currentUser.pendingHomeworks.includes(i)) {
            hwDiv.classList.add('hw-pending');
          } else {
            hwDiv.classList.add('hw-default');
          }
          
          hwDiv.onclick = function(e) {
            e.stopPropagation();
            
            document.querySelectorAll('.lesson-item, .homework-sidebar').forEach(item => {
              item.classList.remove('active');
            });
            
            hwDiv.classList.add('active');
            
            loadHomework(i);
          };
          
          lessonList.appendChild(hwDiv);
        }
      }
    }

    setTimeout(() => {
      const lessonToOpen = localStorage.getItem("openLessonAfterReload");
      if (lessonToOpen) {
        localStorage.removeItem("openLessonAfterReload");
        
        const lessonNum = parseInt(lessonToOpen);
        if (lessons[lessonNum]) {
          const lessonItems = document.querySelectorAll('.lesson-item');
          let lessonElement = null;
          
          lessonItems.forEach((item, index) => {
            if (index + 1 === lessonNum) {
              lessonElement = item;
            }
          });
          
          if (lessonElement) {
            lessonElement.click();
          }
        }
      } else if (document.querySelectorAll('.lesson-item').length > 0) {
        document.querySelector('.lesson-item').click();
      }
    }, 300);
  }

  function initLanguage() {
    const languageSelect = document.getElementById('select');
    if (languageSelect) {
      languageSelect.value = currentUser.language === 'kk' ? 'Қазақша' : 'Русский';
      
      languageSelect.addEventListener('change', function() {
        const newLanguage = this.value === 'Қазақша' ? 'kk' : 'ru';
        
        if (newLanguage !== currentUser.language) {
          const currentLesson = currentUser.currentLesson;
          if (currentLesson) {
            localStorage.setItem("openLessonAfterReload", currentLesson);
          }
          
          currentUser.language = newLanguage;
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          
          applyTranslations();
        }
      });
    }
  }

  function applyTranslations() {
    if (typeof translations === 'undefined') {
      console.error('Объект переводов не найден!');
      return;
    }
    
    const lang = currentUser.language;
    
    document.documentElement.setAttribute('lang', lang);

    // Переводим только header и footer
    const elements = document.querySelectorAll('header [data-lang-key], footer [data-lang-key]');

    elements.forEach(element => {
      const key = element.getAttribute('data-lang-key');
      
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' && element.type === 'placeholder') {
          element.placeholder = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      } else {
        console.warn(`Отсутствует перевод для ключа "${key}" в языке "${lang}"`);
      }
    });

    updatePageTexts();
    
    if (typeof updateVideos === 'function') {
      updateVideos(localStorage.getItem('lastOpenedCourse') || 'html');
    }
  }

  function updateVideos(courseType) {
    console.log('Обновление видео для курса:', courseType);
    
    // Получаем текущий язык пользователя из localStorage
    const userData = JSON.parse(localStorage.getItem("currentUser") || '{}');
    const lang = userData.language || 'kk'; // Используем kk как язык по умолчанию
    
    // Находим все контейнеры с видео различных типов
    const videoContainers = document.querySelectorAll('.video-container, .lecture-video, [data-video-container]');
    
    videoContainers.forEach(container => {
      // Скрываем все видео внутри контейнера
      container.querySelectorAll('.video-wrapper, .video-kk, .video-ru, [data-video-lang]').forEach(video => {
        video.style.display = 'none';
      });
      
      // Показываем только нужное видео в зависимости от языка
      let videoToShow = container.querySelector(`.video-${lang}, [data-video-lang="${lang}"]`);
      
      if (!videoToShow) {
        console.warn(`Видео для языка ${lang} не найдено, проверяем другие селекторы`);
        // Пробуем другие селекторы
        videoToShow = container.querySelector(`.${lang}-video, [lang="${lang}"]`);
      }
      
      if (videoToShow) {
        videoToShow.style.display = 'block';
        console.log(`Показываем видео для языка ${lang}:`, videoToShow);
      } else {
        console.warn(`Видео для языка ${lang} не найдено, показываем первое доступное`);
        const firstVideo = container.querySelector('.video-wrapper, .video-kk, .video-ru, [data-video-lang]');
        if (firstVideo) {
          firstVideo.style.display = 'block';
        }
      }
    });
  }

  function loadLesson(lessonId, courseType) {
    if (!lessonId || !window.lessons || !window.lessons[lessonId]) {
      return;
    }
    
    const lesson = window.lessons[lessonId];
    const lessonContent = document.getElementById('lesson-data');
    const emptyMessage = document.getElementById('empty-message');
    const loadedLesson = document.getElementById('loaded-lesson');
    
    emptyMessage.style.display = 'none';
    loadedLesson.style.display = 'block';
    
    lessonContent.innerHTML = lesson.content;
    
    currentUser.currentLesson = lessonId;
    localStorage.setItem('lastOpenedLesson', lessonId);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Определяем тип курса на основе URL или переданного параметра
    let currentCourseType = courseType || 'html_css_kz';
    
    // Если тип курса не передан, определяем его по URL
    if (!courseType) {
      if (window.location.pathname.includes('python_course')) {
        currentCourseType = 'python_kz';
      } else if (window.location.pathname.includes('database_course')) {
        currentCourseType = 'database_kz';
      }
    }
    
    console.log(`Загрузка урока ${lessonId} для курса ${currentCourseType}`);
    
    // Вызываем функцию для вставки тестов и практических заданий
    if (typeof window.insertQuizPractice === 'function') {
      window.insertQuizPractice(lessonId, currentCourseType);
    }
    
    // Обновляем активный урок в сайдбаре
    const lessonLinks = document.querySelectorAll('.lesson-link');
    lessonLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-lesson') == lessonId) {
        link.classList.add('active');
      }
    });
    
    // Инициализируем подсветку синтаксиса
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
    
    // Обновляем видео
    setTimeout(() => {
      if (typeof updateVideos === 'function') {
        updateVideos(lessonId);
      }
    }, 100);
    
    // Обновляем состояние кнопки завершения урока
    if (typeof window.updateCompleteButton === 'function') {
      window.updateCompleteButton(lessonId);
    }
    
    // Запускаем событие загрузки урока
    const lessonLoadedEvent = new Event('lessonLoaded');
    document.dispatchEvent(lessonLoadedEvent);
  }

  function loadHomework(lessonNum) {
    currentUser.currentLesson = lessonNum;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    const lesson = lessons[lessonNum];
    if (!lesson) return;

    document.getElementById('lesson-data').innerHTML = '';
    document.getElementById('loaded-lesson').style.display = 'block';
    document.querySelector('.empty-lesson').style.display = 'none';
    // Показываем домашнее задание только при завершении урока
    const isLessonCompleted = currentUser.completedLessons && currentUser.completedLessons.includes(parseInt(lessonNum));
    document.getElementById('homework-section').style.display = isLessonCompleted ? 'block' : 'none';
    
    // Важно: скрываем ВСЕ кнопки "Сабақ аяқталды" с родительскими элементами
    document.querySelectorAll('.lesson-actions').forEach(el => {
      el.style.display = 'none';
    });
    
    // Используем заголовок домашнего задания без перевода
    const homeworkTitle = document.getElementById('homework-title');
    
    // Проверяем мета-тег для определения языка курса
    const courseLangMeta = document.querySelector('meta[name="course-language"]');
    const courseLang = courseLangMeta ? courseLangMeta.getAttribute('content') : null;
    
    // Если это русская версия курса, используем русский заголовок
    if (courseLang === 'ru') {
      homeworkTitle.textContent = `Домашнее задание ${lessonNum}`;
    } else {
      homeworkTitle.textContent = `Үй тапсырмасы ${lessonNum}`;
    }
    
    // Проверяем, есть ли у урока собственное домашнее задание
    let homeworkText = '';
    
    // Если у урока есть свое домашнее задание, используем его
    if (lesson.practiceTask) {
      homeworkText = lesson.practiceTask;
    } else {
      // Иначе используем стандартное задание в зависимости от языка курса
      if (courseLang === 'ru') {
        homeworkText = `
        <div class="hw-instructions">
          <div class="hw-header">
            <div class="hw-icon">📄</div>
            <h3>ТЕХНИЧЕСКОЕ ЗАДАНИЕ ДЛЯ ПОДГОТОВКИ КОНСПЕКТА</h3>
          </div>
          
          <div class="hw-subtitle">Общие правила для всех курсов и уроков</div>
          
          <div class="hw-item">
            <div class="hw-item-number">1</div>
            <div class="hw-item-content">
              <strong>Полное ознакомление с уроком:</strong>
              <p>Начинать писать конспект следует только после полного просмотра материала урока и понимания темы.</p>
            </div>
          </div>
          
          <div class="hw-item">
            <div class="hw-item-number">2</div>
            <div class="hw-item-content">
              <strong>Изложение теории понятным языком:</strong>
              <p>Теорию, определения и формулы, представленные в уроке, нужно написать своими словами, ясно и кратко.</p>
            </div>
          </div>
          
          <div class="hw-item">
            <div class="hw-item-number">3</div>
            <div class="hw-item-content">
              <strong>Требования к объему:</strong>
              <p>Конспект должен быть не менее 1,5 страниц. Может быть рукописным или печатным текстом, главное — чистым и аккуратным.</p>
            </div>
          </div>
          
          <div class="hw-item">
            <div class="hw-item-number">4</div>
            <div class="hw-item-content">
              <strong>Форматирование:</strong>
              <p>Конспект должен быть отсканирован или сфотографирован и преобразован в формат PDF.</p>
            </div>
          </div>
          
          <div class="hw-item">
            <div class="hw-item-number">5</div>
            <div class="hw-item-content">
              <strong>Загрузка:</strong>
              <p>Готовый файл необходимо своевременно загрузить на страницу соответствующего урока (на платформе). Конспект, отправленный после дедлайна, не принимается.</p>
            </div>
          </div>
          
          <div class="hw-item">
            <div class="hw-item-number">6</div>
            <div class="hw-item-content">
              <strong>Последовательность:</strong>
              <p>Название каждого конспекта должно быть написано в следующем формате:<br>
              <code>Имя_Фамилия_Урок_${lessonNum}.pdf</code></p>
            </div>
          </div>
        </div>
        `;
      } else {
        homeworkText = `
        <div class="hw-instructions">
          <div class="hw-header">
            <div class="hw-icon">📄</div>
            <h3>КОНСПЕКТ ДАЙЫНДАУҒА АРНАЛҒАН ТЕХНИКАЛЫҚ ТАПСЫРМА</h3>
          </div>
          
          <div class="hw-subtitle">Барлық курстар мен сабақтар үшін ортақ ереже</div>
          
          <div class="hw-item">
            <div class="hw-item-number">1</div>
            <div class="hw-item-content">
              <strong>Сабақпен толық танысу:</strong>
              <p>Сабақ материалын толық қарап, тақырыпты толық түсінген соң ғана конспект жазуды бастау керек.</p>
            </div>
          </div>
          
          <div class="hw-item">
            <div class="hw-item-number">2</div>
            <div class="hw-item-content">
              <strong>Теорияны түсінікті етіп баяндау:</strong>
              <p>Сабақта берілген теорияны, анықтамаларды, формулаларды өз сөзіңмен, нақты әрі қысқаша жазу қажет.</p>
            </div>
          </div>
          
          <div class="hw-item">
            <div class="hw-item-number">3</div>
            <div class="hw-item-content">
              <strong>Көлем талабы:</strong>
              <p>Конспект ең аз дегенде 1,5 бет болуға тиіс. Қолжазба немесе терілген мәтін болуы мүмкін, бастысы – таза және ұқыпты болсын.</p>
            </div>
          </div>
          
          <div class="hw-item">
            <div class="hw-item-number">4</div>
            <div class="hw-item-content">
              <strong>Форматтау:</strong>
              <p>Конспект сканерленіп немесе фотоға түсіріліп, PDF форматына айналдырылуы керек.</p>
            </div>
          </div>
          
          <div class="hw-item">
            <div class="hw-item-number">5</div>
            <div class="hw-item-content">
              <strong>Жүктеу:</strong>
              <p>Дайын файлды тиісті сабақтың бетіне (платформада) уақтылы жүктеу қажет. Дедлайннан кеш тапсырылған конспект қабылданбайды.</p>
            </div>
          </div>
          
          <div class="hw-item">
            <div class="hw-item-number">6</div>
            <div class="hw-item-content">
              <strong>Бірізділік:</strong>
              <p>Әр конспектінің аты келесі форматта жазылуы тиіс:<br>
              <code>Аты_Тегі_Сабақ_${lessonNum}.pdf</code></p>
            </div>
          </div>
        </div>
        `;
      }
    }
    
    // Создаем div для загрузки файла
    const fileUploadHtml = `<div id="file-upload-container" class="file-upload-area"></div>`;
    
    const commentSectionHtml = `
    <div id="homework-comment-section" class="homework-comment-section">
      <h3>${currentUser.language === 'kk' ? 'Пікірлер' : 'Комментарии'}</h3>
      <p>${currentUser.language === 'kk' ? 'Курс туралы пікіріңізді немесе ұсыныстарыңызды қалдырыңыз:' : 
         'Оставьте свой отзыв или предложения по улучшению курса:'}</p>
      <textarea id="homework-comment-area" class="homework-comment-area" 
        placeholder="${currentUser.language === 'kk' ? 'Пікіріңізді жазыңыз...' : 'Напишите свой комментарий...'}"
        ${currentUser.homeworkComments && currentUser.homeworkComments[lessonNum] ? 'style="display:none;"' : ''}
      ></textarea>
      <button id="comment-submit-btn" class="upload-btn"
        ${currentUser.homeworkComments && currentUser.homeworkComments[lessonNum] ? 'style="display:none;"' : ''}
      >${currentUser.language === 'kk' ? 'Жіберу' : 'Отправить'}</button>
      <div id="saved-comment" class="saved-comment" 
        ${currentUser.homeworkComments && currentUser.homeworkComments[lessonNum] ? 
          'style="display:block;background-color:#e8f5e9;padding:15px;border-radius:8px;margin-top:15px;"' : 
          'style="display:none;"'}
      >
        ${currentUser.homeworkComments && currentUser.homeworkComments[lessonNum] ? 
          `<p>${currentUser.homeworkComments[lessonNum]}</p>` : ''}
      </div>
      ${currentUser.homeworkComments && currentUser.homeworkComments[lessonNum] ? 
        `<p class="success-message" style="color:green;">${currentUser.language === 'kk' ? 
          '✅ Пікіріңіз жіберілді' : 
          '✅ Ваш комментарий отправлен'}</p>` : 
        ''}
    </div>
    `;
    
    const homeworkContent = `
      ${homeworkText}
      ${fileUploadHtml}
      ${commentSectionHtml}
    `;
    
    document.getElementById('homework-task').innerHTML = homeworkContent;
    
    // Инициализируем область загрузки файла и комментарии
    initFileUpload(lessonNum);
    initComments(lessonNum);
  }

  // Добавляем функцию для инициализации комментариев
  function initComments(lessonNum) {
    const commentArea = document.getElementById('homework-comment-area');
    const submitButton = document.getElementById('comment-submit-btn');
    const savedComment = document.getElementById('saved-comment');
    
    if (!commentArea || !submitButton) return;
    
    // Если уже есть комментарий - показываем его
    if (currentUser.homeworkComments && currentUser.homeworkComments[lessonNum]) {
      commentArea.style.display = 'none';
      submitButton.style.display = 'none';
      
      if (savedComment) {
        savedComment.innerHTML = `<p>${currentUser.homeworkComments[lessonNum]}</p>`;
        savedComment.style.display = 'block';
      }
    }
    
    // Обработчик отправки комментария
    submitButton.onclick = function() {
      const text = commentArea.value.trim();
      if (!text) {
        alert(currentUser.language === 'kk' ? 
          'Пікір бос болмауы керек!' : 
          'Комментарий не может быть пустым!');
        return;
      }
      
      // Если объект комментариев не существует - создаем
      if (!currentUser.homeworkComments) {
        currentUser.homeworkComments = {};
      }
      
      // Сохраняем комментарий
      currentUser.homeworkComments[lessonNum] = text;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      
      // Показываем сохраненный комментарий
      if (savedComment) {
        savedComment.innerHTML = `<p>${text}</p>`;
        savedComment.style.display = 'block';
      }
      
      // Скрываем форму
      commentArea.style.display = 'none';
      submitButton.style.display = 'none';
      
      // Показываем подтверждение
      const commentSection = document.getElementById('homework-comment-section');
      if (commentSection) {
        const successMessage = document.createElement('p');
        successMessage.className = 'success-message';
        successMessage.textContent = currentUser.language === 'kk' ? 
          '✅ Пікіріңіз сәтті жіберілді!' : 
          '✅ Ваш комментарий успешно отправлен!';
        successMessage.style.color = 'green';
        commentSection.appendChild(successMessage);
      }
    };
  }

  function initFileUpload(lessonNum) {
    const container = document.getElementById('file-upload-container');
    if (!container) return;
    
    const lang = currentUser.language || 'kk';
    const chooseText = lang === 'kk' ? 'Файлды таңдау' : 'Выбрать файл';
    const sendText = lang === 'kk' ? 'Жіберу' : 'Отправить';
    
    // Проверяем, есть ли уже отправленный файл
    if (currentUser.completedHomeworks && currentUser.completedHomeworks.includes(lessonNum)) {
      // Показываем зеленое состояние завершения
      showCompletedState(container, lessonNum);
      return;
    }
    
    // Если файл уже выбран, но не отправлен
    if (currentUser.homeworkFiles && currentUser.homeworkFiles[lessonNum]) {
      showSelectedFileState(container, lessonNum);
      return;
    }
    
    // Начальное состояние - показываем кнопку выбора файла
    showInitialState(container);
  }

  // Начальное состояние - кнопка выбора файла
  function showInitialState(container) {
    const lang = currentUser.language || 'kk';
    const chooseText = lang === 'kk' ? 'Файлды таңдау' : 'Выбрать файл';
    
    container.innerHTML = `
      <style>
        .upload-btn {
          background: linear-gradient(90deg, #2646FA 0%, #E30BBF 100%);
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 20px;
          font-size: 16px;
          cursor: pointer;
          margin: 20px auto;
          display: block;
          transition: transform 0.3s;
        }
        .upload-btn:hover {
          transform: scale(1.05);
        }
      </style>
      <button class="upload-btn" id="upload-btn">${chooseText}</button>
      <input type="file" id="hw-file" style="display:none;" accept=".pdf">
    `;
    
    // Добавляем обработчик события выбора файла
    const fileInput = document.getElementById('hw-file');
    const uploadBtn = document.getElementById('upload-btn');
    
    uploadBtn.addEventListener('click', function() {
      fileInput.click();
    });
    
    fileInput.addEventListener('change', function() {
      if (this.files.length > 0) {
        const fileName = this.files[0].name;
        
        // Сохраняем файл
        if (!currentUser.homeworkFiles) {
          currentUser.homeworkFiles = {};
        }
        currentUser.homeworkFiles[currentUser.currentLesson] = fileName;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        
        // Показываем состояние с выбранным файлом
        showSelectedFileState(container, currentUser.currentLesson);
      }
    });
  }

  // Состояние с выбранным файлом - показываем имя файла и кнопку отправки
  function showSelectedFileState(container, lessonNum) {
    const lang = currentUser.language || 'kk';
    const sendText = lang === 'kk' ? 'Жіберу' : 'Отправить';
    const fileName = currentUser.homeworkFiles[lessonNum];
    
    container.innerHTML = `
      <style>
        .file-upload-area {
          border: 2px dashed #ccc;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          margin-top: 20px;
        }
        .file-selected {
          background-color: #f0f4ff;
          padding: 10px 15px;
          border-radius: 5px;
          display: inline-block;
          margin: 10px 0;
          word-break: break-all;
        }
        .upload-btn {
          background: linear-gradient(90deg, #2646FA 0%, #E30BBF 100%);
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 20px;
          font-size: 16px;
          cursor: pointer;
          margin: 15px auto;
          display: block;
          transition: transform 0.3s;
        }
        .upload-btn:hover {
          transform: scale(1.05);
        }
      </style>
      <div class="file-selected" id="file-name">${fileName}</div>
      <button class="upload-btn" id="submit-btn">${sendText}</button>
    `;
    
    // Добавляем обработчик отправки файла
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', function() {
      showLoadingState(container);
      
      // Через 6 секунд показываем завершение
      setTimeout(() => {
        showCompletedState(container, lessonNum);
        
        // Сохраняем файл как отправленный
        if (!currentUser.completedHomeworks) {
          currentUser.completedHomeworks = [];
        }
        
        if (!currentUser.completedHomeworks.includes(lessonNum)) {
          currentUser.completedHomeworks.push(lessonNum);
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
        }
        
        // Обновляем боковую панель
        const homeworkSidebar = document.getElementById(`homework-${lessonNum}`);
        if (homeworkSidebar) {
          homeworkSidebar.classList.remove('hw-default', 'hw-pending');
          homeworkSidebar.classList.add('hw-completed');
        }
      }, 6000);
    });
  }

  // Состояние загрузки/отправки - оранжевая анимация
  function showLoadingState(container) {
    const lang = currentUser.language || 'kk';
    const loadingText = lang === 'kk' ? 'Жіберілуде... Өтінемін, күте тұрыңыз' : 'Отправка... Пожалуйста, подождите';
    
    container.innerHTML = `
      <style>
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
        .file-upload-area {
          border: 2px solid #FFA000;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          margin-top: 20px;
          background-color: #fff3e0;
          transition: all 0.5s ease;
        }
        .loading-message {
          color: #FFA000;
          font-weight: bold;
          padding: 15px;
          margin-top: 10px;
          border-radius: 8px;
          background-color: rgba(255, 160, 0, 0.1);
          animation: pulse 1.5s infinite;
        }
        .loading-icon {
          font-size: 24px;
          margin-right: 10px;
          display: inline-block;
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
      <div class="loading-message">
        <span class="loading-icon">⏳</span> ${loadingText}
      </div>
    `;
  }

  // Состояние завершения - зеленая галочка
  function showCompletedState(container, lessonNum) {
    const lang = currentUser.language || 'kk';
    const completedText = lang === 'kk' ? 'Файл сәтті жіберілді!' : 'Файл успешно отправлен!';
    const fileName = currentUser.homeworkFiles && currentUser.homeworkFiles[lessonNum] ? 
                   currentUser.homeworkFiles[lessonNum] : '';
    
    container.innerHTML = `
      <style>
        .file-upload-area {
          border: 2px solid #4CAF50;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          margin-top: 20px;
          background-color: #f1f8e9;
          transition: all 0.5s ease;
        }
        .completed-message {
          color: #4CAF50;
          font-weight: bold;
          padding: 15px;
          margin-top: 10px;
          border-radius: 8px;
          background-color: rgba(76, 175, 80, 0.1);
        }
        .completed-icon {
          font-size: 24px;
          margin-right: 10px;
        }
        .file-name {
          background-color: rgba(76, 175, 80, 0.1);
          padding: 8px 15px;
          border-radius: 5px;
          display: inline-block;
          margin: 10px 0;
          word-break: break-all;
        }
      </style>
      ${fileName ? `<div class="file-name">${fileName}</div>` : ''}
      <div class="completed-message">
        <span class="completed-icon">✅</span> ${completedText}
      </div>
    `;
  }
  function checkCode(code, expectedOutput) {
    try {
        console.log('Функция checkCode вызвана, но не требуется на этой странице');
        return true;
    } catch (error) {
        console.error('Ошибка при проверке кода:', error);
        return false;
    }
  }
  window.showLockedWeek = function() {
    const message = currentUser.language === 'kk' ? 
      'Бұл аптаның сабақтарын ашу үшін курстың толық нұсқасын сатып алыңыз!' : 
      'Чтобы разблокировать уроки этой недели, приобретите полную версию курса!';
    
    alert(message);
  };

  function updatePageTexts() {
    const completeBtn = document.querySelector(".complete-btn");
    if (completeBtn) {
      completeBtn.textContent = currentUser.language === 'kk' ? 'Сабақ аяқталды' : 'Урок завершен';
    }
    
    const emptyLessonTitle = document.querySelector(".empty-lesson h2");
    const emptyLessonText = document.querySelector(".empty-lesson p");
    
    if (emptyLessonTitle && emptyLessonText) {
      emptyLessonTitle.textContent = currentUser.language === 'kk' ? 'Сабақ таңдаңыз' : 'Выберите урок';
      emptyLessonText.textContent = currentUser.language === 'kk' ? 
        'Сол жақтан сабақ таңдап, оқуды бастай аласыз.' : 
        'Выберите урок из списка слева, чтобы начать обучение.';
    }
    
    const sidebarTitle = document.querySelector(".sidebar h2");
    if (sidebarTitle) {
      sidebarTitle.textContent = currentUser.language === 'kk' ? 'Сабақтар' : 'Уроки';
    }
    
    const weekBtns = document.querySelectorAll(".week-btn");
    if (weekBtns.length > 0) {
      const weekNames = currentUser.language === 'kk' ? 
        ['1 апта', '2 апта🔒', '3 апта🔒', '4 апта🔒'] : 
        ['Неделя 1', 'Неделя 2🔒', 'Неделя 3🔒', 'Неделя 4🔒'];
      
      weekBtns.forEach((btn, index) => {
        if (index < weekNames.length) {
          btn.textContent = weekNames[index];
        }
      });
    }
    
    document.querySelectorAll('.homework-sidebar').forEach(hw => {
      if (!hw.hasAttribute('data-lang-key')) {
        hw.textContent = currentUser.language === 'kk' ? 'Қосымша: Үй жұмысы' : 'Дополнительно: Домашнее задание';
      }
    });
  }

  initLessons();
  updatePageTexts();

  const nameInput = document.getElementById("name");
  if (nameInput) {
    nameInput.value = currentUser.name;
    
    nameInput.addEventListener("input", function() {
      currentUser.name = this.value;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    });
  }
  
  const languageSelect = document.getElementById("select");
  if (languageSelect) {
    languageSelect.value = currentUser.language === "kk" ? "Қазақша" : "Русский";
    
    languageSelect.addEventListener("change", function() {
      const newLanguage = this.value === "Қазақша" ? "kk" : "ru";
      currentUser.language = newLanguage;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      
      applyTranslations();
    });
  }
  
  const lessonId = getUrlParameter("lesson");
  if (lessonId) {
    loadLesson(parseInt(lessonId));
  }
  
  updateProgress();
  updateUI();
  
  initAccordion();
  
  if (typeof updateVideos === 'function') {
    updateVideos();
  }

  function initFAQ() {
    const toggleButtons = document.querySelectorAll('.quest-link');
    
    toggleButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const question = this.closest('.question');
        const answer = question.querySelector('.answer');
        
        question.classList.toggle('active');
        
        if (question.classList.contains('active')) {
          answer.style.display = 'block';
          answer.style.animation = 'fadeIn 0.3s ease';
        } else {
          answer.style.animation = 'fadeOut 0.3s ease';
          setTimeout(() => {
            answer.style.display = 'none';
          }, 300);
        }
      });
    });
    
    const questOnlyUps = document.querySelectorAll('.quest-only-up');
    questOnlyUps.forEach(item => {
      item.addEventListener('click', function(e) {
        const button = this.querySelector('.quest-link');
        if (button) {
          button.click();
        }
      });
    });
  }

  if (document.querySelector('.questions-list')) {
    initFAQ();
  }
});