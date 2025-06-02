/**
 * Улучшенная поддержка тёмной темы для всех страниц
 * Применяет тёмную тему ко всем элементам сайта
 * Версия 5.0 - Расширенная поддержка для домашних заданий и всех страниц
 */
let theme = localStorage.getItem('theme') || 'light';

// Добавляем CSS напрямую в страницу
const forceDarkModeStyles = `
    /* Принудительно удаляем темный фон для главной страницы */
    [data-theme="dark"] body,
    html[data-theme="dark"],
    body.dark-theme,
    html.dark-theme {
        background-color: transparent !important;
        background: none !important;
    }
    
    [data-theme="dark"] .main-frame,
    html[data-theme="dark"] .main-frame,
    body[data-theme="dark"] .main-frame {
        background-color: transparent !important;
        background: none !important;
    }
    
    [data-theme="dark"] .video-background,
    html[data-theme="dark"] .video-background,
    body[data-theme="dark"] .video-background {
        background-color: transparent !important;
        background: none !important;
        opacity: 1 !important;
    }
    
    /* Удаляем черный фон между фоновым изображением и контентом в главной секции */
    [data-theme="dark"] .content-container,
    html[data-theme="dark"] .content-container,
    body[data-theme="dark"] .content-container {
        background-color: transparent !important;
        background-image: none !important;
        background: none !important;
        position: relative;
        z-index: 2;
    }
    
    /* Делаем прозрачным фон для всех элементов внутри content-container */
    [data-theme="dark"] .content-container > *,
    html[data-theme="dark"] .content-container > *,
    body[data-theme="dark"] .content-container > * {
        background-color: transparent !important;
        background-image: none !important;
        background: none !important;
    }

    /* Стили для домашних заданий - максимальная специфичность */
    [data-theme="dark"] .ui-task, 
    html[data-theme="dark"] .ui-task,
    body[data-theme="dark"] .ui-task,
    [data-theme="dark"] .task-description, 
    html[data-theme="dark"] .task-description,
    body[data-theme="dark"] .task-description,
    [data-theme="dark"] .homework-container, 
    html[data-theme="dark"] .homework-container,
    body[data-theme="dark"] .homework-container,
    [data-theme="dark"] #homework-task, 
    html[data-theme="dark"] #homework-task,
    body[data-theme="dark"] #homework-task,
    [data-theme="dark"] .homework-section, 
    html[data-theme="dark"] .homework-section,
    body[data-theme="dark"] .homework-section,
    [data-theme="dark"] .homework-item, 
    html[data-theme="dark"] .homework-item,
    body[data-theme="dark"] .homework-item,
    [data-theme="dark"] .hw-instructions, 
    html[data-theme="dark"] .hw-instructions,
    body[data-theme="dark"] .hw-instructions,
    [data-theme="dark"] .task-step, 
    html[data-theme="dark"] .task-step,
    body[data-theme="dark"] .task-step,
    [data-theme="dark"] .task-item,
    html[data-theme="dark"] .task-item,
    body[data-theme="dark"] .task-item,
    [data-theme="dark"] .sidebar,
    html[data-theme="dark"] .sidebar,
    body[data-theme="dark"] .sidebar,
    [data-theme="dark"] .lesson-content,
    html[data-theme="dark"] .lesson-content,
    body[data-theme="dark"] .lesson-content,
    [data-theme="dark"] .lesson-container,
    html[data-theme="dark"] .lesson-container,
    body[data-theme="dark"] .lesson-container,
    [data-theme="dark"] .course-content,
    html[data-theme="dark"] .course-content,
    body[data-theme="dark"] .course-content,
    [data-theme="dark"] .task-container,
    html[data-theme="dark"] .task-container,
    body[data-theme="dark"] .task-container,
    [data-theme="dark"] .task-content,
    html[data-theme="dark"] .task-content,
    body[data-theme="dark"] .task-content {
        background-color: #121212 !important;
        color: #e2e8f0 !important;
    }
    
    /* Стили для полей ввода */
    [data-theme="dark"] input,
    [data-theme="dark"] textarea,
    [data-theme="dark"] select,
    [data-theme="dark"] .input-field,
    [data-theme="dark"] .textarea-field,
    [data-theme="dark"] .comment-input,
    [data-theme="dark"] .file-upload {
        background-color: #1e293b !important;
        color: #e2e8f0 !important;
        border: 1px solid #334155 !important;
    }

    /* Основные элементы страницы - максимальная специфичность */
    body[data-theme="dark"], 
    html[data-theme="dark"], 
    html[data-theme="dark"] body,
    [data-theme="dark"] body {
        background-color: #111827 !important;
        color: #f0f0f0 !important;
    }
    
    /* Все виды контейнеров и карточек */
    [data-theme="dark"] .course-card, 
    [data-theme="dark"] .card, 
    [data-theme="dark"] .auth-container, 
    [data-theme="dark"] .profile-container,
    [data-theme="dark"] .content-container,
    [data-theme="dark"] .container,
    [data-theme="dark"] .teacher-card,
    [data-theme="dark"] .faq-container,
    [data-theme="dark"] .accordion-item,
    [data-theme="dark"] .about-container {
        background-color: #1e1e3a !important;
        color: #ffffff !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35) !important;
    }
    
    /* Шапка - убираем box-shadow */
    [data-theme="dark"] .header-line,
    html[data-theme="dark"] .header-line,
    body[data-theme="dark"] .header-line {
        background-color: #111827 !important;
        box-shadow: none !important;
    }
    
    [data-theme="dark"] .header-line a,
    html[data-theme="dark"] .header-line a,
    body[data-theme="dark"] .header-line a {
        color: #ffffff !important;
    }
    
    /* Футер - точно как в светлой теме */
    [data-theme="dark"] .footer,
    html[data-theme="dark"] .footer,
    body[data-theme="dark"] .footer {
        background-color: #0f172a !important;
        color: #ffffff !important;
        box-shadow: none !important;
    }
    
    /* Выравнивание текста и соцсетей в футере */
    [data-theme="dark"] .footer .text-footer,
    html[data-theme="dark"] .footer .text-footer,
    body[data-theme="dark"] .footer .text-footer {
        color: #ffffff !important;
        margin-right: 300px !important; /* Увеличиваем расстояние на 100px */
    }
    
    [data-theme="dark"] .footer .social-links,
    html[data-theme="dark"] .footer .social-links,
    body[data-theme="dark"] .footer .social-links {
        color: #ffffff !important;
    }
    
    /* Иконки соцсетей в футере */
    [data-theme="dark"] .social-link i,
    html[data-theme="dark"] .social-link i,
    body[data-theme="dark"] .social-link i {
        color: #2d3748 !important; /* Более темный цвет */
        filter: brightness(0.5) !important; /* Уменьшаем яркость */
        opacity: 0.5 !important; /* Уменьшаем непрозрачность */
    }
    
    [data-theme="dark"] .social-link:hover i,
    html[data-theme="dark"] .social-link:hover i,
    body[data-theme="dark"] .social-link:hover i {
        color: #93c5fd !important;
        filter: brightness(1.2) !important;
        opacity: 1 !important;
    }
    
    /* Максимально специфичные стили для кнопок в FAQ */
    html[data-theme="dark"] .question .quest-only-up .quest-link,
    body[data-theme="dark"] .question .quest-only-up .quest-link,
    [data-theme="dark"] .question .quest-only-up .quest-link,
    html[data-theme="dark"] button.quest-link,
    body[data-theme="dark"] button.quest-link,
    [data-theme="dark"] button.quest-link,
    html[data-theme="dark"] .quest-link[type="button"],
    body[data-theme="dark"] .quest-link[type="button"],
    [data-theme="dark"] .quest-link[type="button"] {
        background: none !important;
        background-color: transparent !important;
        background-image: none !important;
        box-shadow: none !important;
        border: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        outline: none !important;
        text-shadow: none !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
    }
    
    /* Секция вопроса в FAQ */
    [data-theme="dark"] .question,
    html[data-theme="dark"] .question,
    body[data-theme="dark"] .question {
        background: linear-gradient(90deg, #2E3078 0%, #5C6BC0 100%) !important;
        color: #ffffff !important;
    }
    
    /* Стили для изображений в кнопках FAQ */
    html[data-theme="dark"] .question .quest-only-up .quest-link .img-down,
    body[data-theme="dark"] .question .quest-only-up .quest-link .img-down,
    [data-theme="dark"] .question .quest-only-up .quest-link .img-down,
    html[data-theme="dark"] .quest-link .img-down,
    body[data-theme="dark"] .quest-link .img-down,
    [data-theme="dark"] .quest-link .img-down,
    html[data-theme="dark"] .img-down,
    body[data-theme="dark"] .img-down,
    [data-theme="dark"] .img-down {
        filter: brightness(5) !important;
        background: none !important;
        background-color: transparent !important;
        background-image: none !important;
        box-shadow: none !important;
        border: none !important;
        border-radius: 0 !important;
    }
    
    /* Сайдбар и элементы уроков */
    [data-theme="dark"] .sidebar, 
    [data-theme="dark"] .lesson-item,
    [data-theme="dark"] .course-sidebar,
    html[data-theme="dark"] .sidebar, 
    html[data-theme="dark"] .lesson-item,
    html[data-theme="dark"] .course-sidebar {
        background-color: #1e293b !important;
        color: #ffffff !important;
    }
    
    /* Страница профиля - вкладки и контейнеры */
    [data-theme="dark"] .profile-tab,
    html[data-theme="dark"] .profile-tab,
    body[data-theme="dark"] .profile-tab {
        background-color: #1e293b !important;
        color: #ffffff !important;
        border-color: #334155 !important;
    }
    
    [data-theme="dark"] .profile-tab.active,
    html[data-theme="dark"] .profile-tab.active,
    body[data-theme="dark"] .profile-tab.active {
        background-color: #2d3a58 !important;
        border-bottom: 2px solid #4338ca !important;
    }
    
    [data-theme="dark"] .form-card,
    html[data-theme="dark"] .form-card,
    body[data-theme="dark"] .form-card {
        background-color: #1e293b !important;
        color: #ffffff !important;
        border-color: #334155 !important;
    }
    
    /* Основной контейнер профиля */
    [data-theme="dark"] .profile-container,
    html[data-theme="dark"] .profile-container,
    body[data-theme="dark"] .profile-container {
        background-color: #1e1e3a !important;
        color: #ffffff !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35) !important;
    }
    
    /* Формы и формуляры в профиле */
    [data-theme="dark"] .settings-form,
    [data-theme="dark"] .settings-form input,
    [data-theme="dark"] .settings-form select,
    html[data-theme="dark"] .settings-form,
    html[data-theme="dark"] .settings-form input,
    html[data-theme="dark"] .settings-form select,
    body[data-theme="dark"] .settings-form,
    body[data-theme="dark"] .settings-form input,
    body[data-theme="dark"] .settings-form select {
        background-color: #1a2234 !important;
        color: #ffffff !important;
        border-color: #2d3748 !important;
    }
    
    /* Кнопки в профиле */
    [data-theme="dark"] .settings-form button,
    html[data-theme="dark"] .settings-form button,
    body[data-theme="dark"] .settings-form button,
    [data-theme="dark"] .btn-save,
    html[data-theme="dark"] .btn-save,
    body[data-theme="dark"] .btn-save {
        background: linear-gradient(90deg, #2646FA 0%, #E30BBF 100%) !important;
        color: #ffffff !important;
        border: none !important;
    }
    
    /* Секция с преподавателями - исправляем все стили */
    [data-theme="dark"] .teachers-carts,
    html[data-theme="dark"] .teachers-carts,
    body[data-theme="dark"] .teachers-carts {
        background-color: #111827 !important;
        color: #ffffff !important;
    }
    
    [data-theme="dark"] .teachers-text,
    [data-theme="dark"] .four-frame,
    [data-theme="dark"] .four-frame.animated,
    html[data-theme="dark"] .teachers-text,
    html[data-theme="dark"] .four-frame,
    html[data-theme="dark"] .four-frame.animated,
    body[data-theme="dark"] .teachers-text,
    body[data-theme="dark"] .four-frame,
    body[data-theme="dark"] .four-frame.animated {
        background-color: #111827 !important;
        color: #ffffff !important;
    }
    
    /* Преподаватели в темной теме - исправляем белый фон */
    [data-theme="dark"] .teacher,
    html[data-theme="dark"] .teacher,
    body[data-theme="dark"] .teacher {
        background-color: #1e293b !important;
        color: #ffffff !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35) !important;
    }
    
    /* Имя и описание преподавателей */
    [data-theme="dark"] .bold-teach,
    [data-theme="dark"] .medium-teach,
    html[data-theme="dark"] .bold-teach,
    html[data-theme="dark"] .medium-teach,
    body[data-theme="dark"] .bold-teach,
    body[data-theme="dark"] .medium-teach {
        color: #ffffff !important;
    }
    
    /* Содержимое уроков и основные контейнеры */
    [data-theme="dark"] .lesson-content,
    [data-theme="dark"] main,
    [data-theme="dark"] .course-content,
    [data-theme="dark"] .courses-main,
    [data-theme="dark"] .courses-page {
        background-color: #111827 !important;
        color: #ffffff !important;
    }
    
    /* Все типы контейнеров */
    [data-theme="dark"] .main-container,
    [data-theme="dark"] .courses-container,
    [data-theme="dark"] .about-container,
    [data-theme="dark"] .contact-container,
    [data-theme="dark"] .teacher-container,
    [data-theme="dark"] .practical-task,
    [data-theme="dark"] .task-container,
    [data-theme="dark"] .theory-container,
    [data-theme="dark"] .quiz-container,
    [data-theme="dark"] .courses-container div {
        background-color: #111827 !important;
        color: #ffffff !important;
    }
    
    /* Практические задания и теория */
    [data-theme="dark"] .practical-container,
    [data-theme="dark"] .theory-section,
    [data-theme="dark"] .task-section,
    [data-theme="dark"] .code-editor,
    [data-theme="dark"] .exercise,
    [data-theme="dark"] .homework,
    [data-theme="dark"] .homework-section,
    [data-theme="dark"] .homework-item,
    [data-theme="dark"] .hw-instructions,
    [data-theme="dark"] .hw-header,
    [data-theme="dark"] .hw-item,
    [data-theme="dark"] .hw-item-content,
    [data-theme="dark"] .homework-comment-section,
    [data-theme="dark"] .info-block {
        background-color: #1e1e3a !important;
        color: #ffffff !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35) !important;
    }
    
    /* Стили форм и кнопок */
    [data-theme="dark"] input,
    [data-theme="dark"] select,
    [data-theme="dark"] textarea,
    [data-theme="dark"] button:not(.btn-primary):not(.accordion-button) {
        background-color: #1a2234 !important;
        color: #ffffff !important;
        border-color: #2d3748 !important;
    }
    
    /* Кнопки */
    [data-theme="dark"] .btn,
    [data-theme="dark"] .btn-primary,
    [data-theme="dark"] button.btn,
    [data-theme="dark"] a.btn,
    [data-theme="dark"] .main-btn,
    html[data-theme="dark"] .btn,
    html[data-theme="dark"] .btn-primary,
    html[data-theme="dark"] button.btn,
    html[data-theme="dark"] a.btn,
    html[data-theme="dark"] .main-btn,
    body[data-theme="dark"] .btn,
    body[data-theme="dark"] .btn-primary,
    body[data-theme="dark"] button.btn,
    body[data-theme="dark"] a.btn,
    body[data-theme="dark"] .main-btn {
        color: #ffffff !important; /* Исправляем текст кнопок с градиентом на белый */
    }
    
    /* Кнопки в карточках курсов в темной теме */
    [data-theme="dark"] .link-cart,
    html[data-theme="dark"] .link-cart,
    body[data-theme="dark"] .link-cart {
        color: #000000 !important; /* Делаем текст черным для лучшей читаемости */
    }
    
    /* Стили для элементов сайдбара в тёмной теме */
    [data-theme="dark"] .sidebar .lesson-item,
    html[data-theme="dark"] .sidebar .lesson-item,
    body[data-theme="dark"] .sidebar .lesson-item,
    [data-theme="dark"] .sidebar .lesson-list li,
    html[data-theme="dark"] .sidebar .lesson-list li,
    body[data-theme="dark"] .sidebar .lesson-list li,
    [data-theme="dark"] .homework-sidebar,
    html[data-theme="dark"] .homework-sidebar,
    body[data-theme="dark"] .homework-sidebar {
        background-color: #1e1e3a !important;
        color: #ffffff !important;
        border-color: #333 !important;
    }
    
    [data-theme="dark"] .sidebar .lesson-item:hover,
    html[data-theme="dark"] .sidebar .lesson-item:hover,
    body[data-theme="dark"] .sidebar .lesson-item:hover,
    [data-theme="dark"] .sidebar .lesson-list li:hover,
    html[data-theme="dark"] .sidebar .lesson-list li:hover,
    body[data-theme="dark"] .sidebar .lesson-list li:hover,
    [data-theme="dark"] .homework-sidebar:hover,
    html[data-theme="dark"] .homework-sidebar:hover,
    body[data-theme="dark"] .homework-sidebar:hover {
        background-color: #2d2d5a !important;
        transform: translateX(4px);
    }
    
    [data-theme="dark"] .sidebar .lesson-item.active,
    html[data-theme="dark"] .sidebar .lesson-item.active,
    body[data-theme="dark"] .sidebar .lesson-item.active,
    [data-theme="dark"] .sidebar .lesson-list li.active,
    html[data-theme="dark"] .sidebar .lesson-list li.active,
    body[data-theme="dark"] .sidebar .lesson-list li.active,
    [data-theme="dark"] .homework-sidebar.active,
    html[data-theme="dark"] .homework-sidebar.active,
    body[data-theme="dark"] .homework-sidebar.active {
        background-color: #2a2a6a !important;
        border-left-color: #4338ca !important;
    }
    
    /* Стили для домашних заданий в сайдбаре */
    [data-theme="dark"] .homework-sidebar.hw-default,
    html[data-theme="dark"] .homework-sidebar.hw-default,
    body[data-theme="dark"] .homework-sidebar.hw-default {
        background-color: #1e1e3a !important;
        color: #ffffff !important;
        border-left-color: #2196F3 !important;
    }
    
    [data-theme="dark"] .homework-sidebar.hw-pending,
    html[data-theme="dark"] .homework-sidebar.hw-pending,
    body[data-theme="dark"] .homework-sidebar.hw-pending {
        background-color: #2a2a3a !important;
        color: #ffa726 !important;
        border-left-color: #FFA000 !important;
    }
    
    [data-theme="dark"] .homework-sidebar.hw-completed,
    html[data-theme="dark"] .homework-sidebar.hw-completed,
    body[data-theme="dark"] .homework-sidebar.hw-completed {
        background-color: #1e2a1e !important;
        color: #81c784 !important;
        border-left-color: #4CAF50 !important;
    }
    
    /* Стили для компонентов домашних заданий */
    [data-theme="dark"] .hw-instructions,
    html[data-theme="dark"] .hw-instructions,
    body[data-theme="dark"] .hw-instructions {
        background-color: #1e1e3a !important;
        color: #ffffff !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35) !important;
    }
    
    [data-theme="dark"] .hw-header,
    html[data-theme="dark"] .hw-header,
    body[data-theme="dark"] .hw-header {
        border-bottom-color: #333 !important;
    }
    
    [data-theme="dark"] .hw-subtitle,
    html[data-theme="dark"] .hw-subtitle,
    body[data-theme="dark"] .hw-subtitle {
        color: #e0e0e0 !important;
    }
    
    [data-theme="dark"] .hw-item,
    html[data-theme="dark"] .hw-item,
    body[data-theme="dark"] .hw-item {
        border-bottom-color: #333 !important;
    }
    
    [data-theme="dark"] .hw-item-content strong,
    html[data-theme="dark"] .hw-item-content strong,
    body[data-theme="dark"] .hw-item-content strong {
        color: #e0e0e0 !important;
    }
    
    [data-theme="dark"] .hw-item-content p,
    html[data-theme="dark"] .hw-item-content p,
    body[data-theme="dark"] .hw-item-content p {
        color: #cccccc !important;
    }
    
    [data-theme="dark"] .hw-item-content code,
    html[data-theme="dark"] .hw-item-content code,
    body[data-theme="dark"] .hw-item-content code {
        background-color: #2d2d5a !important;
        color: #64b5f6 !important;
    }
    
    [data-theme="dark"] .homework-comment-section,
    html[data-theme="dark"] .homework-comment-section,
    body[data-theme="dark"] .homework-comment-section {
        background-color: #1e1e3a !important;
        color: #ffffff !important;
    }
    
    [data-theme="dark"] .homework-comment-area,
    html[data-theme="dark"] .homework-comment-area,
    body[data-theme="dark"] .homework-comment-area {
        background-color: #2d2d5a !important;
        color: #ffffff !important;
        border-color: #333 !important;
    }
    
    [data-theme="dark"] .saved-comment,
    html[data-theme="dark"] .saved-comment,
    body[data-theme="dark"] .saved-comment {
        background-color: #1e2a1e !important;
        color: #81c784 !important;
    }
    
    /* Кнопки в секции FAQ */
    [data-theme="dark"] .quest-only-up button,
    [data-theme="dark"] .quest-only-up button img,
    html[data-theme="dark"] .quest-only-up button,
    html[data-theme="dark"] .quest-only-up button img,
    body[data-theme="dark"] .quest-only-up button,
    body[data-theme="dark"] .quest-only-up button img {
        background: transparent !important;
        background-color: transparent !important;
        box-shadow: none !important;
    }
    
    /* Секция с вопросами и ответами */
    [data-theme="dark"] .question,
    html[data-theme="dark"] .question,
    body[data-theme="dark"] .question {
        background-color: #1e293b !important;
        color: #ffffff !important;
    }
    
    [data-theme="dark"] .quest-text,
    html[data-theme="dark"] .quest-text,
    body[data-theme="dark"] .quest-text {
        color: #ffffff !important;
        background-color: transparent !important;
        background: none !important;
    }
    
    [data-theme="dark"] .btn-primary {
        background-color: #4338ca !important;
        color: #ffffff !important;
        border-color: #4f46e5 !important;
    }
    
    [data-theme="dark"] .btn-secondary {
        background-color: #334155 !important;
        color: #ffffff !important;
        border-color: #475569 !important;
    }
    
    [data-theme="dark"] code,
    [data-theme="dark"] pre {
        background-color: #1e293b !important;
        color: #f8fafc !important;
        border: 1px solid #334155 !important;
    }
    
    [data-theme="dark"] .question,
    [data-theme="dark"] .quiz-container,
    [data-theme="dark"] .test-container {
        background-color: #1e293b !important;
        color: #ffffff !important;
        border-color: #334155 !important;
    }
    
    [data-theme="dark"] .course-title,
    [data-theme="dark"] .lesson-title,
    [data-theme="dark"] h1, [data-theme="dark"] h2, [data-theme="dark"] h3, 
    [data-theme="dark"] h4, [data-theme="dark"] h5, [data-theme="dark"] h6 {
        color: #ffffff !important;
    }
    
    [data-theme="dark"] .course-progress,
    [data-theme="dark"] .progress-bar,
    [data-theme="dark"] .progress {
        background-color: #1e293b !important;
        border-color: #334155 !important;
    }
    
    [data-theme="dark"] .course-progress .progress-fill {
        background-color: #4338ca !important;
    }
    
    [data-theme="dark"] .nav-pills .nav-link.active {
        background-color: #4338ca !important;
        color: #ffffff !important;
    }
    
    [data-theme="dark"] .nav-pills .nav-link:not(.active) {
        color: #cbd5e1 !important;
    }
    
    [data-theme="dark"] a:not(.btn) {
        color: #93c5fd !important;
    }
    
    [data-theme="dark"] .table,
    [data-theme="dark"] table {
        color: #f1f5f9 !important;
        border-color: #334155 !important;
    }
    
    [data-theme="dark"] .table th,
    [data-theme="dark"] .table td,
    [data-theme="dark"] table th,
    [data-theme="dark"] table td {
        border-color: #334155 !important;
        background-color: #1e293b !important;
    }
    
    [data-theme="dark"] .table-striped tbody tr:nth-of-type(odd) {
        background-color: #293548 !important;
    }
    
    [data-theme="dark"] .table-hover tbody tr:hover {
        background-color: #374151 !important;
    }
    
    [data-theme="dark"] hr {
        border-color: #334155 !important;
    }
    
    [data-theme="dark"] .text-muted,
    [data-theme="dark"] .text-secondary,
    [data-theme="dark"] .small,
    [data-theme="dark"] small {
        color: #cbd5e1 !important;
    }
    
    [data-theme="dark"] option {
        background-color: #1a2234 !important;
    }
    
    /* Карточки с информацией в курсах */
    [data-theme="dark"] .info-card,
    html[data-theme="dark"] .info-card,
    body[data-theme="dark"] .info-card,
    [data-theme="dark"] .feature-card,
    html[data-theme="dark"] .feature-card,
    body[data-theme="dark"] .feature-card {
        background-color: #1e293b !important;
        color: #e2e8f0 !important;
        border-color: #334155 !important;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3) !important;
    }
    
    /* Практические задания в курсах */
    [data-theme="dark"] .practice-task,
    html[data-theme="dark"] .practice-task,
    body[data-theme="dark"] .practice-task,
    [data-theme="dark"] .task-container,
    html[data-theme="dark"] .task-container,
    body[data-theme="dark"] .task-container,
    [data-theme="dark"] .practice-container,
    html[data-theme="dark"] .practice-container,
    body[data-theme="dark"] .practice-container,
    /* Специфичные классы для курса HTML */
    [data-theme="dark"] .test-section,
    html[data-theme="dark"] .test-section,
    body[data-theme="dark"] .test-section,
    [data-theme="dark"] .practice-section,
    html[data-theme="dark"] .practice-section,
    body[data-theme="dark"] .practice-section {
        background-color: #101022 !important; /* Ещё более тёмный цвет */
        color: #e2e8f0 !important;
        border-color: #334155 !important;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5) !important;
    }
    
    /* Вопросы тестов в HTML курсе */
    [data-theme="dark"] .test-question,
    html[data-theme="dark"] .test-question,
    body[data-theme="dark"] .test-question {
        background-color: #1a1a2e !important;
        color: #e2e8f0 !important;
        border-left: 3px solid #4338ca !important;
    }
    
    /* Блоки кода в курсах */
    [data-theme="dark"] pre,
    html[data-theme="dark"] pre,
    body[data-theme="dark"] pre,
    [data-theme="dark"] code,
    html[data-theme="dark"] code,
    body[data-theme="dark"] code,
    [data-theme="dark"] .code-editor,
    html[data-theme="dark"] .code-editor,
    body[data-theme="dark"] .code-editor {
        background-color: #1a1a2e !important;
        color: #e2e8f0 !important;
        border-color: #334155 !important;
    }
    
    /* Специфичные элементы курса */
    [data-theme="dark"] .lesson-content,
    html[data-theme="dark"] .lesson-content,
    body[data-theme="dark"] .lesson-content {
        background-color: #141428 !important;
        color: #ffffff !important;
    }
    
    /* Результаты проверки в курсах */
    [data-theme="dark"] .test-result, 
    [data-theme="dark"] .practice-result, 
    [data-theme="dark"] .hint-message,
    html[data-theme="dark"] .test-result, 
    html[data-theme="dark"] .practice-result, 
    html[data-theme="dark"] .hint-message,
    body[data-theme="dark"] .test-result, 
    body[data-theme="dark"] .practice-result, 
    body[data-theme="dark"] .hint-message {
        background-color: #1a1a2e !important;
        color: #e2e8f0 !important;
    }
    
    /* Информационные карточки в HTML курсе */
    [data-theme="dark"] .card, 
    [data-theme="dark"] .info-block, 
    [data-theme="dark"] .lesson-card,
    html[data-theme="dark"] .card, 
    html[data-theme="dark"] .info-block, 
    html[data-theme="dark"] .lesson-card,
    body[data-theme="dark"] .card, 
    body[data-theme="dark"] .info-block, 
    body[data-theme="dark"] .lesson-card {
        background-color: #1e293b !important;
        color: #e2e8f0 !important;
        border-color: #334155 !important;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3) !important;
    }
    
    /* Домашние задания - более стабильные стили */
    [data-theme="dark"] .homework-container,
    html[data-theme="dark"] .homework-container,
    body[data-theme="dark"] .homework-container {
        background-color: #141428 !important;
        color: #e2e8f0 !important;
        border-color: #334155 !important;
    }
    
    [data-theme="dark"] .task-description,
    html[data-theme="dark"] .task-description,
    body[data-theme="dark"] .task-description {
        background-color: #141428 !important;
        color: #e2e8f0 !important;
    }
    
    [data-theme="dark"] .homework-task,
    html[data-theme="dark"] .homework-task,
    body[data-theme="dark"] .homework-task {
        background-color: #1a1a2e !important;
        color: #e2e8f0 !important;
    }
    
    /* Специфичные элементы домашних заданий */
    [data-theme="dark"] .task-step,
    html[data-theme="dark"] .task-step,
    body[data-theme="dark"] .task-step,
    [data-theme="dark"] .task-item,
    html[data-theme="dark"] .task-item,
    body[data-theme="dark"] .task-item {
        background-color: #1a1a2e !important;
        color: #e2e8f0 !important;
        border-color: #334155 !important;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
    }
`;

// Добавляем стили на страницу
function injectStyles() {
    // Удаляем старые стили, если они есть
    const existingStyles = document.getElementById('forced-dark-theme-styles');
    if (existingStyles) {
        existingStyles.remove();
    }
    
    const existingHomeworkStyles = document.getElementById('dark-theme-homework-styles');
    if (existingHomeworkStyles) {
        existingHomeworkStyles.remove();
    }
    
    // Добавляем новые стили
    const styleElement = document.createElement('style');
    styleElement.id = 'forced-dark-theme-styles';
    styleElement.innerHTML = forceDarkModeStyles;
    document.head.appendChild(styleElement);
    
    // Добавляем дополнительные стили для домашних заданий
    const homeworkStyles = document.createElement('style');
    homeworkStyles.id = 'dark-theme-homework-styles';
    homeworkStyles.innerHTML = `
        /* Стили для конкретных элементов в темной теме */
        [data-theme="dark"] .sidebar,
        [data-theme="dark"] .lesson-content,
        [data-theme="dark"] .lesson-container,
        [data-theme="dark"] .content-container,
        [data-theme="dark"] .course-content,
        [data-theme="dark"] .lesson-section,
        [data-theme="dark"] .lesson-block,
        [data-theme="dark"] .homework-container,
        [data-theme="dark"] .task-container,
        [data-theme="dark"] .task-content,
        [data-theme="dark"] .task-description,
        [data-theme="dark"] .assignment-container {
            background-color: #121212 !important;
            color: #e2e8f0 !important;
        }
        
        /* Стили для всех основных контейнеров */
        [data-theme="dark"] .ui-task, 
        [data-theme="dark"] .task-description, 
        [data-theme="dark"] .homework-container, 
        [data-theme="dark"] .task-step, 
        [data-theme="dark"] .task-item,
        [data-theme="dark"] .sidebar,
        [data-theme="dark"] .lesson-content,
        [data-theme="dark"] .lesson-container,
        [data-theme="dark"] .content-container,
        [data-theme="dark"] .course-content,
        [data-theme="dark"] .lesson-section,
        [data-theme="dark"] .lesson-block,
        [data-theme="dark"] .assignment-container,
        [data-theme="dark"] .assignment-content,
        [data-theme="dark"] .assignment-header,
        [data-theme="dark"] .assignment-body,
        [data-theme="dark"] .practice-container,
        [data-theme="dark"] .quiz-container,
        [data-theme="dark"] .quiz-question,
        [data-theme="dark"] .quiz-options,
        [data-theme="dark"] .task-list,
        [data-theme="dark"] .task-list-item,
        [data-theme="dark"] .task-description,
        [data-theme="dark"] .task-content,
        [data-theme="dark"] .task-header,
        [data-theme="dark"] .task-body,
        [data-theme="dark"] .task-footer,
        [data-theme="dark"] .task-actions,
        [data-theme="dark"] .task-submit,
        [data-theme="dark"] .task-result,
        [data-theme="dark"] .task-feedback,
        [data-theme="dark"] .task-comments,
        [data-theme="dark"] .task-attachments,
        [data-theme="dark"] .task-files,
        [data-theme="dark"] .task-file,
        [data-theme="dark"] .task-file-name,
        [data-theme="dark"] .task-file-size,
        [data-theme="dark"] .task-file-type,
        [data-theme="dark"] .task-file-actions,
        [data-theme="dark"] .task-file-download,
        [data-theme="dark"] .task-file-delete,
        [data-theme="dark"] .task-file-preview,
        [data-theme="dark"] .task-file-upload,
        [data-theme="dark"] .task-file-upload-button,
        [data-theme="dark"] .task-file-upload-progress,
        [data-theme="dark"] .task-file-upload-error,
        [data-theme="dark"] .task-file-upload-success,
        [data-theme="dark"] .task-file-upload-cancel,
        [data-theme="dark"] .task-file-upload-retry,
        [data-theme="dark"] .task-file-upload-container,
        [data-theme="dark"] .task-file-upload-area,
        [data-theme="dark"] .task-file-upload-text,
        [data-theme="dark"] .task-file-upload-icon,
        [data-theme="dark"] .task-file-upload-input,
        [data-theme="dark"] .task-comment,
        [data-theme="dark"] .task-comment-author,
        [data-theme="dark"] .task-comment-date,
        [data-theme="dark"] .task-comment-text,
        [data-theme="dark"] .task-comment-actions,
        [data-theme="dark"] .task-comment-reply,
        [data-theme="dark"] .task-comment-edit,
        [data-theme="dark"] .task-comment-delete,
        [data-theme="dark"] .task-comment-form,
        [data-theme="dark"] .task-comment-input,
        [data-theme="dark"] .task-comment-submit,
        [data-theme="dark"] .task-comment-cancel,
        [data-theme="dark"] .task-comment-error,
        [data-theme="dark"] .task-comment-success,
        [data-theme="dark"] .task-comment-container,
        [data-theme="dark"] .task-comment-list,
        [data-theme="dark"] .task-comment-item,
        [data-theme="dark"] .task-comment-replies,
        [data-theme="dark"] .task-comment-reply-item,
        [data-theme="dark"] .task-comment-reply-form,
        [data-theme="dark"] .task-comment-reply-input,
        [data-theme="dark"] .task-comment-reply-submit,
        [data-theme="dark"] .task-comment-reply-cancel,
        [data-theme="dark"] .task-comment-reply-error,
        [data-theme="dark"] .task-comment-reply-success,
        [data-theme="dark"] .task-comment-reply-container,
        [data-theme="dark"] .task-comment-reply-list,
        [data-theme="dark"] .task-comment-reply-item,
        [data-theme="dark"] .task-comment-reply-author,
        [data-theme="dark"] .task-comment-reply-date,
        [data-theme="dark"] .task-comment-reply-text,
        [data-theme="dark"] .task-comment-reply-actions,
        [data-theme="dark"] .task-comment-reply-edit,
        [data-theme="dark"] .task-comment-reply-delete,
        [data-theme="dark"] .task-comment-reply-form,
        [data-theme="dark"] .task-comment-reply-input,
        [data-theme="dark"] .task-comment-reply-submit,
        [data-theme="dark"] .task-comment-reply-cancel,
        [data-theme="dark"] .task-comment-reply-error,
        [data-theme="dark"] .task-comment-reply-success,
        [data-theme="dark"] .task-comment-reply-container,
        [data-theme="dark"] .task-comment-reply-list,
        [data-theme="dark"] .task-comment-reply-item,
        [data-theme="dark"] .task-comment-reply-author,
        [data-theme="dark"] .task-comment-reply-date,
        [data-theme="dark"] .task-comment-reply-text,
        [data-theme="dark"] .task-comment-reply-actions,
        [data-theme="dark"] .task-comment-reply-edit,
        [data-theme="dark"] .task-comment-reply-delete,
        [data-theme="dark"] .task-comment-reply-form,
        [data-theme="dark"] .task-comment-reply-input,
        [data-theme="dark"] .task-comment-reply-submit,
        [data-theme="dark"] .task-comment-reply-cancel,
        [data-theme="dark"] .task-comment-reply-error,
        [data-theme="dark"] .task-comment-reply-success,
        [data-theme="dark"] .task-comment-reply-container,
        [data-theme="dark"] .task-comment-reply-list,
        [data-theme="dark"] .task-comment-reply-item,
        [data-theme="dark"] .task-comment-reply-author,
        [data-theme="dark"] .task-comment-reply-date,
        [data-theme="dark"] .task-comment-reply-text,
        [data-theme="dark"] .task-comment-reply-actions,
        [data-theme="dark"] .task-comment-reply-edit,
        [data-theme="dark"] .task-comment-reply-delete {
            background-color: #1a1a2e !important;
            color: #e2e8f0 !important;
            border-color: #334155 !important;
        }
        
        /* Стили для сайдбара */
        [data-theme="dark"] .sidebar,
        [data-theme="dark"] .sidebar-nav,
        [data-theme="dark"] .sidebar-menu,
        [data-theme="dark"] .sidebar-item,
        [data-theme="dark"] .sidebar-link,
        [data-theme="dark"] .sidebar-header,
        [data-theme="dark"] .sidebar-footer,
        [data-theme="dark"] .sidebar-brand {
            background-color: #0f172a !important;
            color: #e2e8f0 !important;
            border-color: #334155 !important;
        }
        
        /* Стили для конспекта задач */
        [data-theme="dark"] .task-container,
        [data-theme="dark"] .task-content,
        [data-theme="dark"] .task-header,
        [data-theme="dark"] .task-body {
            background-color: #141428 !important;
            color: #e2e8f0 !important;
        }
        
        /* Стили для полей ввода */
        [data-theme="dark"] input,
        [data-theme="dark"] textarea,
        [data-theme="dark"] select,
        [data-theme="dark"] .input-field,
        [data-theme="dark"] .textarea-field,
        [data-theme="dark"] .comment-input,
        [data-theme="dark"] .file-upload {
            background-color: #1e293b !important;
            color: #e2e8f0 !important;
            border: 1px solid #334155 !important;
        }
        
        /* Стили для кнопок в домашних заданиях */
        [data-theme="dark"] .btn,
        [data-theme="dark"] button:not(.course-btn):not(.course-btn1) {
            background-color: #2d3748 !important;
            color: #e2e8f0 !important;
            border: 1px solid #4a5568 !important;
        }
        
        /* Стили для заголовков в домашних заданиях */
        [data-theme="dark"] h1, 
        [data-theme="dark"] h2, 
        [data-theme="dark"] h3, 
        [data-theme="dark"] h4, 
        [data-theme="dark"] h5, 
        [data-theme="dark"] h6 {
            color: #e2e8f0 !important;
        }
    `;
    document.head.appendChild(homeworkStyles);
}

// Функция сброса всех инлайновых стилей
function resetAllInlineStyles() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        if (element.hasAttribute('style')) {
            element.removeAttribute('style');
        }
    });
    console.log('🔄 Сброшены все инлайновые стили');
}

// Функция сброса стилей элементов
function resetElementStyles(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.removeAttribute('style');
        element.setAttribute('data-theme', 'light');
        element.classList.remove('dark-theme');
        element.classList.remove('dark-mode');
    });
}

// Функция полного сброса всех стилей темной темы
function forceResetAllDarkStyles() {
    console.log('💡 Сбрасываю все стили тёмной темы');
    
    // Важно! Сначала сохраняем светлую тему в localStorage
    localStorage.setItem('theme', 'light');
    
    // Сбрасываем все инлайн стили
    resetAllInlineStyles();
    
    // Сбрасываем стили для ключевых элементов
    resetElementStyles('.question .quest-only-up .quest-link');
    resetElementStyles('.question .quest-link');
    resetElementStyles('.auth-container');
    resetElementStyles('.teachers-carts');
    resetElementStyles('.teacher-cart');
    resetElementStyles('.course-card');
    resetElementStyles('.footer');
    resetElementStyles('.footer .text-footer');
    resetElementStyles('.footer .social-links');
    resetElementStyles('.profile-container');
    resetElementStyles('.profile-tab');
    resetElementStyles('.form-card');
    resetElementStyles('.settings-form');
    resetElementStyles('.settings-form input');
    resetElementStyles('.settings-form select');
    resetElementStyles('.social-link i');
    resetElementStyles('.test-section');
    resetElementStyles('.practice-section');
    resetElementStyles('.test-question');
    
    // Сбрасываем все data-theme атрибуты
    document.querySelectorAll('[data-theme="dark"]').forEach(element => {
        element.setAttribute('data-theme', 'light');
        
        // Удаляем все inline стили
        if (element.hasAttribute('style')) {
            element.removeAttribute('style');
        }
        
        // Удаляем все классы, связанные с темной темой
        element.classList.remove('dark-theme');
        element.classList.remove('dark-mode');
    });
    
    // Обновляем атрибуты для всего документа
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.setAttribute('data-theme', 'light');
    document.body.classList.remove('dark-theme');
    document.body.classList.remove('dark-mode');
    
    // Перезагружаем страницу для полного сброса
    setTimeout(() => {
        console.log('↻ Перезагружаю страницу');
        location.reload();
    }, 300); // Увеличиваем задержку для гарантии сохранения настроек
    
    console.log('💡 Принудительно сброшены все стили темной темы');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌙 Инициализация улучшенной тёмной темы 4.0');
    
    // Добавляем CSS стили на страницу
    injectStyles();
    
    // Находим переключатель темы и добавляем слушатель для сброса стилей
    const themeSwitcher = document.getElementById('theme-switch');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', function() {
            // Проверяем текущую тему
            setTimeout(function() {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                if (currentTheme === 'light') {
                    // Если переключились на светлую тему, сбрасываем все стили темной темы
                    forceResetAllDarkStyles();
                    console.log('💡 Переключение на светлую тему - сброс всех стилей');
                }
            }, 100); // Даем время на переключение темы
        });
    }
    
    // Сначала проверим и исправим дублирующиеся футеры
    fixDuplicateFooters();
    
    // Убираем иконки книг в казахской версии
    removeBookIcons();
    
    // Проверяем текущую тему
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Применяем тему к элементам
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.body.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    
    // Применяем тему ко всем элементам
    applyThemeToAllElements(currentTheme);
    
    // Добавляем обработчик на кнопку переключения темы
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        themeSwitch.addEventListener('click', function() {
            // Определяем новую тему
            let newTheme = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
            
            // Применяем новую тему
            document.documentElement.setAttribute('data-theme', newTheme);
            document.body.setAttribute('data-theme', newTheme);
            
            if (newTheme === 'dark') {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
                // При возврате к светлой теме очищаем все инлайновые стили
                resetAllInlineStyles();
            }
            
            // Сохраняем в localStorage
            localStorage.setItem('theme', newTheme);
            
            // Применяем тему ко всем элементам
            applyThemeToAllElements(newTheme);
        });
    }
    
    // Добавляем обработчик для динамического контента
    const observer = new MutationObserver(function(mutations) {
        // Запускаем применение темы с небольшой задержкой для новых элементов
        setTimeout(function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            if (currentTheme === 'dark') {
                fixDuplicateFooters(); // Проверяем футеры при динамической загрузке
                removeBookIcons(); // Убираем иконки книг при динамической загрузке
                applyThemeToAllElements(currentTheme);
            }
        }, 200);
    });
    
    // Следим за изменениями в DOM
    observer.observe(document.body, { childList: true, subtree: true });
});

// Функция удаления иконок книг в казахской версии
function removeBookIcons() {
    // Проверяем язык страницы
    const lang = document.documentElement.getAttribute('lang') || 'ru';
    
    // Если это казахская версия или включена темная тема
    if (lang === 'kk' || document.documentElement.getAttribute('data-theme') === 'dark') {
        const bookIcons = document.querySelectorAll('.lesson-item i.book-icon, .sidebar i.fas.fa-book');
        bookIcons.forEach(function(icon) {
            icon.style.display = 'none';
        });
    }
}

// Функция сброса всех инлайновых стилей при возврате к светлой теме
function resetAllInlineStyles() {
    // Сбрасываем все инлайновые стили для всех элементов
    const allElements = document.querySelectorAll('*');
    allElements.forEach(function(element) {
        if (element.style.backgroundColor || element.style.color || element.style.borderColor) {
            element.style.backgroundColor = '';
            element.style.color = '';
            element.style.borderColor = '';
            element.style.boxShadow = '';
        }
    });
}

// Функция для исправления дублирующихся футеров
function fixDuplicateFooters() {
    const footers = document.querySelectorAll('.footer');
    if (footers.length > 1) {
        console.log(`Обнаружены дублирующиеся футеры: ${footers.length}`);
        // Оставляем только первый футер, удаляем остальные
        for (let i = 1; i < footers.length; i++) {
            footers[i].remove();
        }
        
        // Стилизуем оставшийся футер
        const footer = footers[0];
        footer.style.display = 'flex';
        footer.style.flexDirection = 'row';
        footer.style.justifyContent = 'center';
        footer.style.alignItems = 'center';
        footer.style.padding = '20px';
        footer.style.width = '100%';
        footer.style.marginTop = '40px';
        
        // Исправляем социальные иконки
        const socialLinks = footer.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.style.display = 'flex';
            socialLinks.style.flexDirection = 'row';
            socialLinks.style.gap = '15px';
        }
        
        // Центрируем копирайт
        const copyright = footer.querySelector('.copyright');
        if (copyright) {
            copyright.style.marginRight = '30px';
            copyright.style.display = 'flex';
            copyright.style.alignItems = 'center';
            copyright.style.justifyContent = 'center';
        }
    } else if (footers.length === 1) {
        // Если футер только один, всё равно стилизуем его
        const footer = footers[0];
        footer.style.display = 'flex';
        footer.style.flexDirection = 'row';
        footer.style.justifyContent = 'center';
        footer.style.alignItems = 'center';
        footer.style.padding = '20px';
        footer.style.width = '100%';
        footer.style.marginTop = '40px';
        
        const socialLinks = footer.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.style.display = 'flex';
            socialLinks.style.flexDirection = 'row';
            socialLinks.style.gap = '15px';
        }
        
        const copyright = footer.querySelector('.copyright');
        if (copyright) {
            copyright.style.marginRight = '30px';
            copyright.style.display = 'flex';
            copyright.style.alignItems = 'center';
            copyright.style.justifyContent = 'center';
        }
    }
}

// Функция для применения темы ко всем элементам
function applyThemeToAllElements(theme) {
    console.log(`Применяем тему: ${theme}`);
    
    // Применяем атрибут data-theme к основным элементам
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    
    // Сначала проверим и исправим дублирующиеся футеры
    fixDuplicateFooters();
    
    // Применяем тему к контейнерам
    const containers = document.querySelectorAll('.container, .course-card, .card, .auth-container, .profile-container, .content-container');
    containers.forEach(function(container) {
        if (theme === 'dark') {
            container.style.backgroundColor = '#1e1e3a';
            container.style.color = '#ffffff';
            container.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.35)';
        } else {
            container.style.backgroundColor = '';
            container.style.color = '';
            container.style.boxShadow = '';
        }
    });
    
    // Применяем тему к сайдбару и элементам уроков
    const sidebarElements = document.querySelectorAll('.sidebar, .lesson-item');
    sidebarElements.forEach(function(element) {
        if (theme === 'dark') {
            element.style.backgroundColor = '#1e293b';
            element.style.color = '#ffffff';
        } else {
            element.style.backgroundColor = '';
            element.style.color = '';
        }
    });
    
    // Применяем тему к содержимому уроков и основному содержимому
    document.querySelectorAll('.lesson-content, main, .course-content, .courses-container, .course-container').forEach(function(content) {
        if (theme === 'dark') {
            content.style.backgroundColor = '#111827';
            content.style.color = '#ffffff';
        } else {
            content.style.backgroundColor = '';
            content.style.color = '';
        }
    });
    
    // Применяем тему к шапке
    const header = document.querySelector('.header-line');
    if (header) {
        if (theme === 'dark') {
            header.style.backgroundColor = '#0f172a';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.backgroundColor = '';
            header.style.boxShadow = '';
        }
        
        header.querySelectorAll('a').forEach(function(link) {
            if (theme === 'dark') {
                link.style.color = '#ffffff';
            } else {
                link.style.color = '';
            }
        });
    }
    
    // Применяем тему к футеру
    const footer = document.querySelector('.footer');
    if (footer) {
        if (theme === 'dark') {
            footer.style.backgroundColor = '#0f172a';
            footer.style.color = '#ffffff';
            footer.style.display = 'flex';
            footer.style.flexDirection = 'row';
            footer.style.justifyContent = 'center';
            footer.style.alignItems = 'center';
            footer.style.padding = '20px';
            
            // Стилизуем социальные иконки
            const socialLinks = footer.querySelector('.social-links');
            if (socialLinks) {
                socialLinks.style.display = 'flex';
                socialLinks.style.flexDirection = 'row';
                socialLinks.style.gap = '15px';
            }
        } else {
            footer.style.backgroundColor = '';
            footer.style.color = '';
            footer.style.display = '';
            footer.style.flexDirection = '';
            footer.style.justifyContent = '';
            footer.style.alignItems = '';
            footer.style.padding = '';
        }
    }
    
    // Применяем тему к полям ввода
    document.querySelectorAll('input, select, textarea, button:not(.btn-primary)').forEach(function(input) {
        if (theme === 'dark') {
            input.style.backgroundColor = '#1a2234';
            input.style.color = '#ffffff';
            input.style.borderColor = '#2d3748';
        } else {
            input.style.backgroundColor = '';
            input.style.color = '';
            input.style.borderColor = '';
        }
    });
    
    // Стилизуем кнопки
    document.querySelectorAll('.btn-primary').forEach(function(button) {
        if (theme === 'dark') {
            button.style.backgroundColor = '#4338ca';
            button.style.color = '#ffffff';
            button.style.borderColor = '#4f46e5';
        } else {
            button.style.backgroundColor = '';
            button.style.color = '';
            button.style.borderColor = '';
        }
    });
    
    document.querySelectorAll('.btn-secondary').forEach(function(button) {
        if (theme === 'dark') {
            button.style.backgroundColor = '#334155';
            button.style.color = '#ffffff';
            button.style.borderColor = '#475569';
        } else {
            button.style.backgroundColor = '';
            button.style.color = '';
            button.style.borderColor = '';
        }
    });
    
    // Применяем тему к кодовым блокам
    document.querySelectorAll('code, pre').forEach(function(codeBlock) {
        if (theme === 'dark') {
            codeBlock.style.backgroundColor = '#1e293b';
            codeBlock.style.color = '#f8fafc';
            codeBlock.style.border = '1px solid #334155';
        } else {
            codeBlock.style.backgroundColor = '';
            codeBlock.style.color = '';
            codeBlock.style.border = '';
        }
    });
    
    // Обрабатываем также динамически загружаемый контент
    document.querySelectorAll('.lesson-container, .course-container, .question, .quiz-container, .test-container').forEach(function(container) {
        if (theme === 'dark') {
            container.style.backgroundColor = '#1e293b';
            container.style.color = '#ffffff';
            container.style.borderColor = '#334155';
        } else {
            container.style.backgroundColor = '';
            container.style.color = '';
            container.style.borderColor = '';
        }
    });
    
    // Применяем тему к заголовкам
    document.querySelectorAll('.course-title, .lesson-title, h1, h2, h3, h4, h5, h6').forEach(function(heading) {
        if (theme === 'dark') {
            heading.style.color = '#ffffff';
        } else {
            heading.style.color = '';
        }
    });
    
    // Применяем тему к таблицам
    document.querySelectorAll('table, th, td').forEach(function(tableElement) {
        if (theme === 'dark') {
            tableElement.style.borderColor = '#334155';
            if (tableElement.tagName === 'TH') {
                tableElement.style.backgroundColor = '#1e293b';
            } else if (tableElement.tagName === 'TD') {
                tableElement.style.backgroundColor = '#1e293b';
            }
            tableElement.style.color = '#f1f5f9';
        } else {
            tableElement.style.borderColor = '';
            tableElement.style.backgroundColor = '';
            tableElement.style.color = '';
        }
    });
    
    // Улучшение стилей для прогресс-баров
    document.querySelectorAll('.course-progress, .progress-bar, .progress').forEach(function(bar) {
        if (theme === 'dark') {
            bar.style.backgroundColor = '#1e293b';
            bar.style.borderColor = '#334155';
        } else {
            bar.style.backgroundColor = '';
            bar.style.borderColor = '';
        }
    });
    
    document.querySelectorAll('.course-progress .progress-fill').forEach(function(fill) {
        if (theme === 'dark') {
            fill.style.backgroundColor = '#4338ca';
        } else {
            fill.style.backgroundColor = '';
        }
    });
    
    // Применяем тему к домашним заданиям и связанным элементам
    document.querySelectorAll('.homework-container, .task-description, .ui-task, .task-step, .task-item, #homework-task').forEach(el => {
        if (theme === 'dark') {
            el.style.backgroundColor = '#121212';
            el.style.color = '#e2e8f0';
            el.style.borderColor = '#2a2a2a';
        } else {
            el.style.backgroundColor = '';
            el.style.color = '';
            el.style.borderColor = '';
        }
    });
    
    // Применяем тему к контейнерам домашних заданий в сайдбаре
    document.querySelectorAll('#homework-task, .sidebar .task-item, .sidebar-item.task').forEach(el => {
        if (theme === 'dark') {
            el.style.backgroundColor = '#121212';
            el.style.color = '#e2e8f0';
            el.style.borderColor = '#2a2a2a';
        } else {
            el.style.backgroundColor = '';
            el.style.color = '';
            el.style.borderColor = '';
        }
    });
    
    // Применяем тему к сайдбару
    document.querySelectorAll('.sidebar').forEach(el => {
        if (theme === 'dark') {
            el.style.backgroundColor = '#1e1e1e';
            el.style.color = '#f5f5f5';
            el.style.borderRight = '1px solid #2a2a2a';
        } else {
            el.style.backgroundColor = '';
            el.style.color = '';
            el.style.borderRight = '';
        }
    });
    
    // Сканируем все текстовые элементы на странице и применяем к ним тему
    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, label, li, td, th, a').forEach(function(element) {
        if (theme === 'dark') {
            // Улучшаем читаемость текста на темном фоне
            const computedStyle = window.getComputedStyle(element);
            const color = computedStyle.color;
            const backgroundColor = getBackgroundColor(element);
            
            // Если цвет текста слишком темный или серый на темном фоне
            if (isColorTooSimilar(color, backgroundColor) || 
                color === 'rgb(0, 0, 0)' || 
                color === 'rgb(51, 51, 51)' || 
                color === 'rgb(85, 85, 85)' ||
                color === 'rgb(102, 102, 102)' ||
                color === 'rgb(136, 136, 136)' ||
                color === 'rgb(119, 119, 119)') {
                element.style.color = '#ffffff';
            }
            
            // Дополнительная проверка для текстовых элементов без дочерних элементов
            if (element.childElementCount === 0 && element.textContent.trim() !== '') {
                // Не переопределяем цвет для элементов, у которых он уже задан в CSS
                if (element.style.color === '') {
                    if (color === 'rgb(0, 0, 0)' || 
                        color === 'rgb(51, 51, 51)' || 
                        color === 'rgb(85, 85, 85)') {
                        element.style.color = '#ffffff';
                    }
                }
            }
        } else {
            // Возвращаем исходный цвет если мы ранее его изменили
            element.style.color = '';
        }
    });
    
    // Функция для определения фонового цвета элемента (с учетом наследования)
    function getBackgroundColor(element) {
        let currentElement = element;
        let bgColor = 'rgba(0, 0, 0, 0)';
        
        while (currentElement && bgColor === 'rgba(0, 0, 0, 0)') {
            bgColor = window.getComputedStyle(currentElement).backgroundColor;
            if (bgColor === 'rgba(0, 0, 0, 0)' && currentElement.parentElement) {
                currentElement = currentElement.parentElement;
            } else {
                break;
            }
        }
        
        return bgColor;
    }
    
    // Функция для проверки схожести цветов
    function isColorTooSimilar(color1, color2) {
        // Преобразуем цвета в RGB компоненты
        const rgb1 = parseRGB(color1);
        const rgb2 = parseRGB(color2);
        
        if (!rgb1 || !rgb2) return false;
        
        // Вычисляем яркость (brightness)
        const brightness1 = (rgb1.r * 299 + rgb1.g * 587 + rgb1.b * 114) / 1000;
        const brightness2 = (rgb2.r * 299 + rgb2.g * 587 + rgb2.b * 114) / 1000;
        
        // Разница яркости меньше 50 указывает на плохой контраст
        return Math.abs(brightness1 - brightness2) < 50;
    }
    
    // Парсинг RGB цвета
    function parseRGB(color) {
        if (!color) return null;
        
        const rgbMatch = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (rgbMatch) {
            return {
                r: parseInt(rgbMatch[1], 10),
                g: parseInt(rgbMatch[2], 10),
                b: parseInt(rgbMatch[3], 10)
            };
        }
        
        const rgbaMatch = color.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/);
        if (rgbaMatch) {
            return {
                r: parseInt(rgbaMatch[1], 10),
                g: parseInt(rgbaMatch[2], 10),
                b: parseInt(rgbaMatch[3], 10),
                a: parseFloat(rgbaMatch[4])
            };
        }
        
        return null;
    }
    
    // Добавляем обработчик для динамического контента
    const observer = new MutationObserver(function(mutations) {
        // Запускаем применение темы с небольшой задержкой для новых элементов
        setTimeout(function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            applyThemeToAllElements(currentTheme);
        }, 200);
    });
    
    // Следим за изменениями в DOM
    observer.observe(document.body, { childList: true, subtree: true });
    
    console.log('Тема применена ко всем элементам');
}
    console.log('🌙 Применяем тему:', theme);
    
    // Применяем атрибут data-theme к documentElement, безопасно
    document.documentElement.setAttribute('data-theme', theme);
    
    // Проверяем, что document.body существует
    if (document.body) {
        // Если DOM уже загружен, применяем стили сразу
        applyThemeToBody(theme);
    } else {
        // Если DOM еще не загружен, добавляем обработчик события
        document.addEventListener('DOMContentLoaded', function() {
            applyThemeToBody(theme);
        });
    }
    
    // Функция для применения темы к body
    function applyThemeToBody(theme) {
        document.body.setAttribute('data-theme', theme);
        
        // Применяем/удаляем класс dark-theme и устанавливаем data-theme атрибут
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.setAttribute('data-theme', 'light');
        }
    }
    
    // Применяем тему ко всем элементам с классами, к которым должна применяться тема
    const elementsToApplyTheme = document.querySelectorAll(
        '.header-line, .sidebar, .sidebar-header, .lesson-item, ' +
        '.auth-container, .profile-container, .course-card, ' + 
        '.footer, .profile-tab, .form-card, .benefit-card, ' +
        '.main-content, .lesson-content, .quiz-container, ' +
        '.practice-container, .code-container, .result-container, ' +
        '.card, .question, .answer, .course-info, .card-container, ' + 
        '.sidebar-item, .tab-content, .lesson, .lesson-container, ' + 
        '.text-content, .content-section, .ui-task, .task-description, ' +
        '.homework-container, .task-step, .task-item, .task-content, ' +
        '.first-carts, .second-carts, .third-carts, .teacher, ' +
        '.practical-task, .theory-container, .courses-container div, ' +
        '.practical-container, .progress-bar, .progress, .course-progress'
    );
    
    elementsToApplyTheme.forEach(element => {
        element.setAttribute('data-theme', theme);
    });
    
    // Применяем прямые стили к контейнерам
    if (theme === 'dark') {
        // Применяем стили напрямую к элементам
        document.querySelectorAll('.sidebar').forEach(el => {
            el.style.backgroundColor = '#1e1e1e';
            el.style.color = '#f5f5f5';
            el.style.borderRight = '1px solid #2a2a2a';
        });
        
        // Применяем стили к элементам домашних заданий
        document.querySelectorAll('.homework-container, #homework-task, .homework-section, .homework-item, .hw-instructions').forEach(el => {
            el.style.backgroundColor = '#1e1e3a';
            el.style.color = '#f5f5f5';
            el.style.borderColor = '#333';
            el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.35)';
        });
        
        // Применяем стили к элементам сайдбара с домашними заданиями
        document.querySelectorAll('.homework-sidebar').forEach(el => {
            el.style.backgroundColor = '#1e1e3a';
            el.style.color = '#f5f5f5';
            el.style.borderColor = '#333';
        });
        
        document.querySelectorAll('.lesson-content').forEach(el => {
            el.style.backgroundColor = '#121212';
            el.style.color = '#f5f5f5';
        });
        
        document.querySelectorAll('.header-line').forEach(el => {
            el.style.backgroundColor = '#171717';
            el.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        });
        
        document.querySelectorAll('.course-card, .card, .profile-container, .auth-container').forEach(el => {
            el.style.backgroundColor = '#1e1e2a';
            el.style.color = '#f5f5f5';
            el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        });
        
        document.querySelectorAll('.footer').forEach(el => {
            el.style.backgroundColor = '#161616';
            el.style.color = '#f5f5f5';
            el.style.borderTop = '1px solid #2a2a2a';
        });
        
        document.querySelectorAll('.lesson-item').forEach(el => {
            el.style.backgroundColor = '#1e1e1e';
            el.style.color = '#f5f5f5';
            el.style.borderBottom = '1px solid #2a2a2a';
        });
    } else {
        // Сбрасываем все стили для светлой темы
        document.querySelectorAll('.sidebar, .lesson-content, .header-line, .course-card, .card, .profile-container, .auth-container, .footer, .lesson-item').forEach(el => {
            el.style.backgroundColor = '';
            el.style.color = '';
            el.style.boxShadow = '';
            el.style.borderRight = '';
            el.style.borderBottom = '';
            el.style.borderTop = '';
        });
    }
    
    // Применяем стили для code блоков
    const codeBlocks = document.querySelectorAll('code, pre, .code-editor');
    codeBlocks.forEach(block => {
        if (theme === 'dark') {
            block.style.backgroundColor = '#2d2d2d';
            block.style.color = '#f8f8f2';
        } else {
            block.style.backgroundColor = '';
            block.style.color = '';
        }
    });
    
    // Применяем цвета к формам
    const formElements = document.querySelectorAll('input, select, textarea');
    formElements.forEach(element => {
        if (theme === 'dark') {
            element.style.backgroundColor = '#1e1e1e';
            element.style.color = '#f5f5f5';
            element.style.borderColor = '#2a2a2a';
        } else {
            element.style.backgroundColor = '';
            element.style.color = '';
            element.style.borderColor = '';
        }
    });

