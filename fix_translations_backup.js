/**
 * РЈРЅРёРІРµСЂСЃР°Р»СЊРЅР°СЏ СЃРёСЃС‚РµРјР° РїРµСЂРµРІРѕРґРѕРІ РґР»СЏ РІСЃРµС… РєСѓСЂСЃРѕРІ
 * Р­С‚РѕС‚ С„Р°Р№Р» РґРѕР»Р¶РµРЅ РїРѕРґРєР»СЋС‡Р°С‚СЊСЃСЏ РїРѕСЃР»Рµ РґСЂСѓРіРёС… С„Р°Р№Р»РѕРІ РїРµСЂРµРІРѕРґРѕРІ
 */

// Р•РґРёРЅР°СЏ С‚РѕС‡РєР° РІС…РѕРґР° РґР»СЏ РїСЂРёРјРµРЅРµРЅРёСЏ РїРµСЂРµРІРѕРґРѕРІ
function applyUniversalTranslations(lang, courseType) {
    console.log(`РџСЂРёРјРµРЅСЏРµРј РїРµСЂРµРІРѕРґС‹ РґР»СЏ СЏР·С‹РєР°: ${lang}, С‚РёРї РєСѓСЂСЃР°: ${courseType}`);
    
    // РЎРЅР°С‡Р°Р»Р° РѕР±РЅРѕРІР»СЏРµРј СЏР·С‹Рє РІ localStorage РґР»СЏ РµРґРёРЅРѕРѕР±СЂР°Р·РёСЏ
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    userData.language = lang;
    localStorage.setItem('currentUser', JSON.stringify(userData));
    
    // РЎРѕС…СЂР°РЅСЏРµРј С‚РёРї РєСѓСЂСЃР° РґР»СЏ РїРѕСЃР»РµРґСѓСЋС‰РµРіРѕ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ
    if (courseType) {
        localStorage.setItem('lastOpenedCourse', courseType);
    } else {
        // Р•СЃР»Рё С‚РёРї РєСѓСЂСЃР° РЅРµ СѓРєР°Р·Р°РЅ, РѕРїСЂРµРґРµР»СЏРµРј РµРіРѕ РёР· URL РёР»Рё meta-С‚РµРіР°
        const metaCourseType = document.querySelector('meta[name="course-type"]');
        if (metaCourseType && metaCourseType.getAttribute('content')) {
            courseType = metaCourseType.getAttribute('content');
        } else {
            const currentPath = window.location.pathname;
            if (currentPath.includes('python_course')) {
                courseType = 'python';
            } else if (currentPath.includes('database_course')) {
                courseType = 'database';
            } else {
                courseType = 'html';
            }
        }
        localStorage.setItem('lastOpenedCourse', courseType);
    }
    
    // РћР±РЅРѕРІР»СЏРµРј РєР»Р°СЃСЃ РґРѕРєСѓРјРµРЅС‚Р° РґР»СЏ CSS СЃС‚РёР»РµР№
    document.documentElement.setAttribute('lang', lang);
    
    // РћРїСЂРµРґРµР»СЏРµРј С„СѓРЅРєС†РёСЋ РїРµСЂРµРІРѕРґР° РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ С‚РёРїР° РєСѓСЂСЃР°
    if (courseType === 'html' && typeof window.applyFullTranslationHtml === 'function') {
        // РћСЃРѕР±Р°СЏ РѕР±СЂР°Р±РѕС‚РєР° РґР»СЏ HTML РєСѓСЂСЃР°
        window.applyFullTranslationHtml(lang);
    } else if (courseType === 'database' && typeof window.applyFullTranslationDb === 'function') {
        window.applyFullTranslationDb(lang);
    } else if (courseType === 'python' && typeof window.applyFullTranslationPython === 'function') {
        window.applyFullTranslationPython(lang);
    } else {
        console.warn('РЎРїРµС†РёС„РёС‡РЅР°СЏ С„СѓРЅРєС†РёСЏ РїРµСЂРµРІРѕРґР° РЅРµ РЅР°Р№РґРµРЅР°, РїСЂРёРјРµРЅСЏРµРј Р±Р°Р·РѕРІС‹Р№ РїРµСЂРµРІРѕРґ');
        applyBaseTranslations(lang);
    }
    
    // Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ РїРµСЂРµРІРѕРґРёРј Р·Р°РіРѕР»РѕРІРєРё СѓСЂРѕРєРѕРІ РІ СЃР°Р№РґР±Р°СЂРµ РґР»СЏ РІСЃРµС… СѓСЂРѕРєРѕРІ
    const lessonItems = document.querySelectorAll('.lesson-list li a');
    lessonItems.forEach(item => {
        const lessonNum = parseInt(item.getAttribute('data-lesson'));
        if (lessonNum) {
            // РСЃРїРѕР»СЊР·СѓРµРј РїСЂР°РІРёР»СЊРЅСѓСЋ С„СѓРЅРєС†РёСЋ РїРѕР»СѓС‡РµРЅРёСЏ Р·Р°РіРѕР»РѕРІРєР° РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РєСѓСЂСЃР°
            if (courseType === 'database' && typeof window.getDbLessonTitle === 'function') {
                item.textContent = window.getDbLessonTitle(lessonNum, lang);
            } else if (courseType === 'python' && typeof window.getPythonLessonTitle === 'function') {
                item.textContent = window.getPythonLessonTitle(lessonNum, lang);
            } else if (typeof window.getTranslatedLessonTitle === 'function') {
                item.textContent = window.getTranslatedLessonTitle(lessonNum, lang, courseType);
            }
        }
    });
    
    // РћР±РЅРѕРІР»СЏРµРј РІРёРґРµРѕ Рё РёР·РѕР±СЂР°Р¶РµРЅРёСЏ РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ СЏР·С‹РєРѕРј
    setTimeout(() => {
        // РџРµСЂРµРІРѕРґРёРј С‚РµРѕСЂРµС‚РёС‡РµСЃРєРёР№ РјР°С‚РµСЂРёР°Р» РґР»СЏ РІСЃРµС… РєСѓСЂСЃРѕРІ
        translateTheoryContent(lang);
        
        // РћР±РЅРѕРІР»СЏРµРј РёР·РѕР±СЂР°Р¶РµРЅРёСЏ РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ СЏР·С‹РєРѕРј
        translateImages(lang);
        
        // РћР±РЅРѕРІР»СЏРµРј РІРёРґРµРѕ РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ СЏР·С‹РєРѕРј
        if (typeof updateVideos === 'function') {
            updateVideos(courseType);
        } else if (typeof window.updateVideos === 'function') {
            window.updateVideos(courseType);
        }
        
        // Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ РґР»СЏ РєСѓСЂСЃР° Python РІС‹Р·С‹РІР°РµРј СЃРїРµС†РёС„РёС‡РЅСѓСЋ С„СѓРЅРєС†РёСЋ РїРµСЂРµРІРѕРґР°
        if (courseType === 'python' && lang === 'ru' && typeof window.translatePythonTasks === 'function') {
            window.translatePythonTasks(lang);
        }
        
        // Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ РґР»СЏ РєСѓСЂСЃР° Р±Р°Р· РґР°РЅРЅС‹С… РІС‹Р·С‹РІР°РµРј СЃРїРµС†РёС„РёС‡РЅСѓСЋ С„СѓРЅРєС†РёСЋ РїРµСЂРµРІРѕРґР°
        if (courseType === 'database' && lang === 'ru' && typeof window.translateDatabaseTasks === 'function') {
            window.translateDatabaseTasks(lang);
        }
    }, 200);
    
    // РџСЂРёРЅСѓРґРёС‚РµР»СЊРЅРѕ РІС‹Р·С‹РІР°РµРј РѕР±РЅРѕРІР»РµРЅРёРµ РєРѕРЅС‚РµРЅС‚Р° СѓСЂРѕРєР° Рё Р·Р°РіРѕР»РѕРІРєРѕРІ
    const currentLessonNum = localStorage.getItem('lastOpenedLesson');
    if (currentLessonNum && typeof window.loadLesson === 'function') {
        console.log('РџСЂРёРЅСѓРґРёС‚РµР»СЊРЅРѕРµ РѕР±РЅРѕРІР»РµРЅРёРµ СѓСЂРѕРєР°:', currentLessonNum, 'РґР»СЏ РєСѓСЂСЃР°:', courseType);
        
        // РќРµР±РѕР»СЊС€Р°СЏ Р·Р°РґРµСЂР¶РєР° РґР»СЏ СѓРІРµСЂРµРЅРЅРѕСЃС‚Рё, С‡С‚Рѕ С„СѓРЅРєС†РёРё РїРµСЂРµРІРѕРґР° СѓСЃРїРµР»Рё СЃСЂР°Р±РѕС‚Р°С‚СЊ
        setTimeout(() => {
            // РџРµСЂРµР·Р°РіСЂСѓР¶Р°РµРј СѓСЂРѕРє, С‡С‚РѕР±С‹ РѕР±РЅРѕРІРёС‚СЊ РІРµСЃСЊ РєРѕРЅС‚РµРЅС‚
            window.loadLesson(parseInt(currentLessonNum), courseType);
            
            // РўР°РєР¶Рµ РѕР±РЅРѕРІР»СЏРµРј СЃРїРёСЃРѕРє СѓСЂРѕРєРѕРІ РІ СЃР°Р№РґР±Р°СЂРµ
            if (typeof window.initLessons === 'function') {
                window.initLessons(courseType);
            }
            
            // РџСЂРёРјРµРЅСЏРµРј РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РїРµСЂРµРІРѕРґС‹ РґР»СЏ С‚РµРѕСЂРµС‚РёС‡РµСЃРєРѕР№ С‡Р°СЃС‚Рё Рё Р·Р°РґР°РЅРёР№
            setTimeout(() => {
                // РџРµСЂРµРІРѕРґРёРј С‚РµРѕСЂРёСЋ РїРѕРІС‚РѕСЂРЅРѕ РїРѕСЃР»Рµ Р·Р°РіСЂСѓР·РєРё РЅРѕРІРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°
                translateTheoryContent(lang);
                
                // РџРµСЂРµРІРѕРґРёРј С‚РµСЃС‚С‹
                translateTestsAndQuizzes(lang);
                
                // РџРѕРІС‚РѕСЂРЅРѕ РїРµСЂРµРІРѕРґРёРј РїСЂР°РєС‚РёС‡РµСЃРєРёРµ Р·Р°РґР°РЅРёСЏ
                if (courseType === 'python' && lang === 'ru' && typeof window.translatePythonTasks === 'function') {
                    window.translatePythonTasks(lang);
                } else if (courseType === 'database' && lang === 'ru' && typeof window.translateDatabaseTasks === 'function') {
                    window.translateDatabaseTasks(lang);
                }
                
                console.log('РџРµСЂРµРІРѕРґ Р·Р°РІРµСЂС€РµРЅ РїРѕРІС‚РѕСЂРЅРѕ РїРѕСЃР»Рµ РѕР±РЅРѕРІР»РµРЅРёСЏ РєРѕРЅС‚РµРЅС‚Р°');
            }, 200);
        }, 300);
    } else {
        console.log('РўРµРєСѓС‰РёР№ СѓСЂРѕРє РЅРµ РЅР°Р№РґРµРЅ РёР»Рё С„СѓРЅРєС†РёСЏ loadLesson РЅРµРґРѕСЃС‚СѓРїРЅР°');
        
        // Р’СЃРµ СЂР°РІРЅРѕ РїСЂРёРјРµРЅСЏРµРј РїРµСЂРµРІРѕРґС‹ РґР»СЏ СЃС‚Р°С‚РёС‡РµСЃРєРёС… СЌР»РµРјРµРЅС‚РѕРІ
        setTimeout(() => {
            translateTheoryContent(lang);
            translateTestsAndQuizzes(lang);
        }, 200);
    }
}

// Р‘Р°Р·РѕРІР°СЏ С„СѓРЅРєС†РёСЏ РїРµСЂРµРІРѕРґР° (РґР»СЏ РѕР±С‰РёС… СЌР»РµРјРµРЅС‚РѕРІ)
function applyBaseTranslations(lang) {
    // РЈСЃС‚Р°РЅР°РІР»РёРІР°РµРј СЏР·С‹Рє РґРѕРєСѓРјРµРЅС‚Р°
    document.documentElement.setAttribute('lang', lang);
    
    // РћР±РЅРѕРІР»СЏРµРј СЌР»РµРјРµРЅС‚С‹ СЃ Р°С‚СЂРёР±СѓС‚РѕРј data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // РџРµСЂРµРІРѕРґРёРј СЃС‚Р°С‚РёС‡РµСЃРєРёРµ СЌР»РµРјРµРЅС‚С‹ UI
    translateStaticUI(lang);
    
    // РџРµСЂРµРІРѕРґРёРј С‚РµРѕСЂРµС‚РёС‡РµСЃРєРёР№ РєРѕРЅС‚РµРЅС‚ РґР»СЏ РІСЃРµС… РєСѓСЂСЃРѕРІ
    translateTheoryContent(lang);
}

// РџРµСЂРµРІРѕРґ СЃС‚Р°С‚РёС‡РµСЃРєРёС… СЌР»РµРјРµРЅС‚РѕРІ РёРЅС‚РµСЂС„РµР№СЃР°
function translateStaticUI(lang) {
    // РџРµСЂРµРІРѕРґРёРј Р·Р°РіРѕР»РѕРІРѕРє СЃР°Р№РґР±Р°СЂР°
    const sidebarTitle = document.querySelector('.sidebar h2');
    if (sidebarTitle) {
        sidebarTitle.textContent = lang === 'ru' ? 'РЈСЂРѕРєРё' : 'РЎР°Р±Р°Т›С‚Р°СЂ';
    }
    
    // РџРµСЂРµРІРѕРґРёРј РєРЅРѕРїРєСѓ Р·Р°РІРµСЂС€РµРЅРёСЏ СѓСЂРѕРєР°
    const completeButton = document.querySelector('.complete-btn');
    if (completeButton) {
        if (completeButton.classList.contains('completed')) {
            completeButton.textContent = lang === 'ru' ? 'Р’С‹РїРѕР»РЅРµРЅРѕ' : 'РћСЂС‹РЅРґР°Р»РґС‹';
        } else {
            completeButton.textContent = lang === 'ru' ? 'РћС‚РјРµС‚РёС‚СЊ РєР°Рє РІС‹РїРѕР»РЅРµРЅРЅРѕРµ' : 'РћСЂС‹РЅРґР°Р»РґС‹ РґРµРї Р±РµР»РіС–Р»РµСѓ';
        }
    }
    
    // РџРµСЂРµРІРѕРґРёРј СЃРѕРѕР±С‰РµРЅРёРµ РїСѓСЃС‚РѕРіРѕ СѓСЂРѕРєР°
    const emptyMessage = document.getElementById('empty-message');
    if (emptyMessage) {
        const header = emptyMessage.querySelector('h2');
        if (header) {
            header.textContent = lang === 'ru' ? 'Р’С‹Р±РµСЂРёС‚Рµ СѓСЂРѕРє' : 'РЎР°Р±Р°Т› С‚Р°ТЈРґР°ТЈС‹Р·';
        }
          
        const paragraph = emptyMessage.querySelector('p');
        if (paragraph) {
            paragraph.textContent = lang === 'ru' 
                ? 'Р’С‹Р±РµСЂРёС‚Рµ СѓСЂРѕРє СЃР»РµРІР°, С‡С‚РѕР±С‹ РЅР°С‡Р°С‚СЊ РѕР±СѓС‡РµРЅРёРµ.' 
                : 'РЎРѕР» Р¶Р°Т›С‚Р°РЅ СЃР°Р±Р°Т› С‚Р°ТЈРґР°Рї, РѕТ›СѓРґС‹ Р±Р°СЃС‚Р°Р№ Р°Р»Р°СЃС‹Р·.';
        }
    }
    
    // РџРµСЂРµРІРѕРґРёРј Р·Р°РіРѕР»РѕРІРєРё Рё РјРµС‚РєРё РІ РїСЂР°РІРѕР№ С‡Р°СЃС‚Рё
    const lessonTitle = document.querySelector('.lesson-title');
    if (lessonTitle) {
        if (lessonTitle.textContent.includes('РЎР°Р±Р°Т›')) {
            const num = lessonTitle.textContent.match(/\d+/)[0];
            const titlePart = lessonTitle.textContent.split(':')[1] || '';
            lessonTitle.textContent = `РЈСЂРѕРє ${num}:${titlePart}`;
        }
    }
}

// РџРµСЂРµРІРѕРґРёС‚ С‚РµРѕСЂРµС‚РёС‡РµСЃРєРёР№ РєРѕРЅС‚РµРЅС‚ РЅР° СЃС‚СЂР°РЅРёС†Рµ
function translateTheoryContent(lang) {
    if (lang !== 'ru') return; // РўРѕР»СЊРєРѕ РґР»СЏ СЂСѓСЃСЃРєРѕРіРѕ СЏР·С‹РєР°
    
    // РЎР»РѕРІР°СЂСЊ Р±Р°Р·РѕРІС‹С… РїРµСЂРµРІРѕРґРѕРІ РґР»СЏ РІСЃРµС… РєСѓСЂСЃРѕРІ
    const commonTranslations = {
        // РћР±С‰РёРµ Р·Р°РіРѕР»РѕРІРєРё Рё С‚РµСЂРјРёРЅС‹
        'РЎР°Р±Р°Т›': 'РЈСЂРѕРє',
        'РЎР°Р±Р°Т› 1: HTML РЅРµРіС–Р·РґРµСЂС–': 'РЈСЂРѕРє 1: РћСЃРЅРѕРІС‹ HTML',
        'РњС‹СЃР°Р»': 'РџСЂРёРјРµСЂ',
        'РўР°РїСЃС‹СЂРјР°': 'Р—Р°РґР°РЅРёРµ',
        'РўР°РїСЃС‹СЂРјР°Р»Р°СЂ': 'Р—Р°РґР°РЅРёСЏ',
        'РџСЂР°РєС‚РёРєР°Р»С‹Т› С‚Р°РїСЃС‹СЂРјР°': 'РџСЂР°РєС‚РёС‡РµСЃРєРѕРµ Р·Р°РґР°РЅРёРµ',
        'РўРµРєСЃРµСЂСѓ': 'РџСЂРѕРІРµСЂРёС‚СЊ',
        'РћСЂС‹РЅРґР°Р»РґС‹': 'Р’С‹РїРѕР»РЅРµРЅРѕ',
        'РћСЂС‹РЅРґР°Р»РґС‹ РґРµРї Р±РµР»РіС–Р»РµСѓ': 'РћС‚РјРµС‚РёС‚СЊ РєР°Рє РІС‹РїРѕР»РЅРµРЅРЅРѕРµ',
        'РќУ™С‚РёР¶Рµ': 'Р РµР·СѓР»СЊС‚Р°С‚',
        'РљРѕРґ Р¶Р°Р·Сѓ': 'РќР°РїРёСЃР°С‚СЊ РєРѕРґ',
        'РљРѕРґС‚С‹ С‚РµРєСЃРµСЂСѓ': 'РџСЂРѕРІРµСЂРёС‚СЊ РєРѕРґ',
        'РљС–СЂС–СЃРїРµ': 'Р’РІРµРґРµРЅРёРµ',
        'ТљРѕСЂС‹С‚С‹РЅРґС‹': 'Р—Р°РєР»СЋС‡РµРЅРёРµ',
        'Р‘РµР»РіС–Р»РµСЂ': 'РћР±РѕР·РЅР°С‡РµРЅРёСЏ',
        'РќРµРіС–Р·РіС– Р±У©Р»С–Рј': 'РћСЃРЅРѕРІРЅР°СЏ С‡Р°СЃС‚СЊ',
        'РџСЂР°РєС‚РёРєР°': 'РџСЂР°РєС‚РёРєР°',
        'Р”Т±СЂС‹СЃ': 'Р’РµСЂРЅРѕ',
        'ТљР°С‚Рµ': 'РќРµРІРµСЂРЅРѕ',
        'РўРµРѕСЂРёСЏ': 'РўРµРѕСЂРёСЏ',
        'Т®Р№ С‚Р°РїСЃС‹СЂРјР°СЃС‹': 'Р”РѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ',
        'ТљРѕСЃС‹РјС€Р° С‚Р°РїСЃС‹СЂРјР°': 'Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕРµ Р·Р°РґР°РЅРёРµ',
        'Р‘Р°Т›С‹Р»Р°Сѓ СЃТ±СЂР°Т›С‚Р°СЂС‹': 'РљРѕРЅС‚СЂРѕР»СЊРЅС‹Рµ РІРѕРїСЂРѕСЃС‹',
        'РўРµСЃС‚': 'РўРµСЃС‚',
        'Р–Р°С‚С‚С‹Т“Сѓ': 'РЈРїСЂР°Р¶РЅРµРЅРёРµ',
        
        // HTML Рё РІРµР± С‚РµСЂРјРёРЅС‹
        'РўРµРі': 'РўРµРі',
        'РђС‚СЂРёР±СѓС‚': 'РђС‚СЂРёР±СѓС‚',
        'Р­Р»РµРјРµРЅС‚': 'Р­Р»РµРјРµРЅС‚',
        'Р’РµР±-РїР°СЂР°Т›': 'Р’РµР±-СЃС‚СЂР°РЅРёС†Р°',
        'РІРµР±-РїР°СЂР°Т›': 'РІРµР±-СЃС‚СЂР°РЅРёС†Р°',
        'РІРµР±-РїР°СЂР°Т›С‚Р°СЂРґС‹ТЈ': 'РІРµР±-СЃС‚СЂР°РЅРёС†',
        'РІРµР±-СЃС‚СЂР°РЅРёС†Р°С‚Р°СЂРґС‹ТЈ': 'РІРµР±-СЃС‚СЂР°РЅРёС†',
        'Р‘СЂР°СѓР·РµСЂ': 'Р‘СЂР°СѓР·РµСЂ',
        'Р±СЂР°СѓР·РµСЂ': 'Р±СЂР°СѓР·РµСЂ',
        'CSS Т›Р°СЃРёРµС‚С‚РµСЂС–': 'РЎРІРѕР№СЃС‚РІР° CSS',
        'РЎС‚РёР»СЊРґРµСЂ': 'РЎС‚РёР»Рё',
        'СЃС‚РёР»СЊРґРµСЂ': 'СЃС‚РёР»Рё',
        'РЎС–Р»С‚РµРјРµ': 'РЎСЃС‹Р»РєР°',
        'СЃС–Р»С‚РµРјРµ': 'СЃСЃС‹Р»РєР°',
        'РЎСѓСЂРµС‚': 'РР·РѕР±СЂР°Р¶РµРЅРёРµ',
        'СЃСѓСЂРµС‚': 'РёР·РѕР±СЂР°Р¶РµРЅРёРµ',
        'РљРµСЃС‚Рµ': 'РўР°Р±Р»РёС†Р°',
        'РєРµСЃС‚Рµ': 'С‚Р°Р±Р»РёС†Р°',
        'РўС–Р·С–Рј': 'РЎРїРёСЃРѕРє',
        'С‚С–Р·С–Рј': 'СЃРїРёСЃРѕРє',
        'Р¤РѕСЂРјР°': 'Р¤РѕСЂРјР°',
        'С„РѕСЂРјР°': 'С„РѕСЂРјР°',
        
        // FIX: РљРѕРјРјРµРЅС‚Р°СЂРёРё РІ РєРѕРґРµ
        '<!-- РЎР°Р№С‚С‚С‹ТЈ РЅРµРіС–Р·РіС– РјР°Р·РјТ±РЅС‹ РѕСЃС‹РЅРґР° -->': '<!-- РћСЃРЅРѕРІРЅРѕРµ СЃРѕРґРµСЂР¶РёРјРѕРµ СЃР°Р№С‚Р° Р·РґРµСЃСЊ -->',
        '<!-- РњТ±РЅРґР° СЃС–Р·РґС–ТЈ РєРѕРЅС‚РµРЅС‚С–ТЈС–Р· -->': '<!-- Р—РґРµСЃСЊ РІР°С€ РєРѕРЅС‚РµРЅС‚ -->',
        '<!-- Р‘Т±Р» С‚ТЇСЃС–РЅС–РєС‚РµРјРµ -->': '<!-- Р­С‚Рѕ РєРѕРјРјРµРЅС‚Р°СЂРёР№ -->',
        '// Р‘Т±Р» JavaScript РєРѕРјРјРµРЅС‚Р°СЂРёР№': '// Р­С‚Рѕ JavaScript РєРѕРјРјРµРЅС‚Р°СЂРёР№',
        '/* РЎС‚РёР»СЊРґРµСЂ ТЇС€С–РЅ РєРѕРјРјРµРЅС‚Р°СЂРёР№ */': '/* РљРѕРјРјРµРЅС‚Р°СЂРёР№ РґР»СЏ СЃС‚РёР»РµР№ */',
        
        // HTML РЅРµРіС–Р·РґРµСЂС– Р¶У™РЅРµ С‚РµСЂРјРёРЅС‹
        'HTML РЅРµРіС–Р·РіС– Т±Т“С‹РјРґР°СЂС‹': 'РћСЃРЅРѕРІРЅС‹Рµ РїРѕРЅСЏС‚РёСЏ HTML',
        'HTML С„Р°Р№Р»С‹РЅС‹ТЈ РЅРµРіС–Р·РіС– Т›Т±СЂС‹Р»С‹РјС‹': 'РћСЃРЅРѕРІРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° HTML С„Р°Р№Р»Р°',
        'HTML СЌР»РµРјРµРЅС‚С‚РµСЂС–РЅС–ТЈ С‚ТЇСЂР»РµСЂС–': 'РўРёРїС‹ СЌР»РµРјРµРЅС‚РѕРІ HTML',
        'HTML СЌР»РµРјРµРЅС‚С‚РµСЂС–РЅС–ТЈ Р°С‚СЂРёР±СѓС‚С‚Р°СЂС‹': 'РђС‚СЂРёР±СѓС‚С‹ HTML СЌР»РµРјРµРЅС‚РѕРІ',
        'РљРµСЃС‚РµР»РµСЂРґС– Т›Т±СЂСѓ': 'РЎРѕР·РґР°РЅРёРµ С‚Р°Р±Р»РёС†',
        'CSS РЅРµРіС–Р·РіС– Т±Т“С‹РјРґР°СЂС‹': 'РћСЃРЅРѕРІРЅС‹Рµ РїРѕРЅСЏС‚РёСЏ CSS',
        
        // Python С‚РµСЂРјРёРЅС‹
        'РђР№РЅС‹РјР°Р»С‹': 'РџРµСЂРµРјРµРЅРЅР°СЏ',
        'РђР№РЅС‹РјР°Р»С‹Р»Р°СЂ': 'РџРµСЂРµРјРµРЅРЅС‹Рµ',
        'РЁР°СЂС‚': 'РЈСЃР»РѕРІРёРµ',
        'РЁР°СЂС‚С‚Р°СЂ': 'РЈСЃР»РѕРІРёСЏ',
        'Р¦РёРєР»': 'Р¦РёРєР»',
        'Р¦РёРєР»РґРµСЂ': 'Р¦РёРєР»С‹',
        'Р¤СѓРЅРєС†РёСЏ': 'Р¤СѓРЅРєС†РёСЏ',
        'Р¤СѓРЅРєС†РёСЏР»Р°СЂ': 'Р¤СѓРЅРєС†РёРё',
        'РњРѕРґСѓР»СЊ': 'РњРѕРґСѓР»СЊ',
        'РљР»Р°СЃСЃ': 'РљР»Р°СЃСЃ',
        'РћР±СЉРµРєС‚': 'РћР±СЉРµРєС‚',
        'РњУ™Р»С–РјРµС‚С‚РµСЂ С‚ТЇСЂР»РµСЂС–': 'РўРёРїС‹ РґР°РЅРЅС‹С…',
        'РўС–Р·С–Рј (list)': 'РЎРїРёСЃРѕРє (list)',
        'РЎУ©Р·РґС–Рє (dict)': 'РЎР»РѕРІР°СЂСЊ (dict)',
        'РљРѕСЂС‚РµР¶ (tuple)': 'РљРѕСЂС‚РµР¶ (tuple)',
        'Р–РёС‹РЅ (set)': 'РњРЅРѕР¶РµСЃС‚РІРѕ (set)',
        'Python-Т“Р° РєС–СЂС–СЃРїРµ': 'Р’РІРµРґРµРЅРёРµ РІ Python',
        'РђР№РЅС‹РјР°Р»С‹Р»Р°СЂ РјРµРЅ РґРµСЂРµРєС‚РµСЂ С‚ТЇСЂР»РµСЂС–': 'РџРµСЂРµРјРµРЅРЅС‹Рµ Рё С‚РёРїС‹ РґР°РЅРЅС‹С…',
        'РЁР°СЂС‚С‚С‹ РѕРїРµСЂР°С‚РѕСЂР»Р°СЂ': 'РЈСЃР»РѕРІРЅС‹Рµ РѕРїРµСЂР°С‚РѕСЂС‹',
        'Р¦РёРєР»РґР°СЂ': 'Р¦РёРєР»С‹',
        'Р¤СѓРЅРєС†РёСЏР»Р°СЂ РјРµРЅ РјРѕРґСѓР»СЊРґРµСЂ': 'Р¤СѓРЅРєС†РёРё Рё РјРѕРґСѓР»Рё',
        'РўС–Р·С–РјРґРµСЂ РјРµРЅ С†РёРєР»РґР°СЂ': 'РЎРїРёСЃРєРё Рё С†РёРєР»С‹',
        'РЎС‚Р°РЅРґР°СЂС‚С‚С‹ РєС–С‚Р°РїС…Р°РЅР°': 'РЎС‚Р°РЅРґР°СЂС‚РЅР°СЏ Р±РёР±Р»РёРѕС‚РµРєР°',
        'Р¤Р°Р№Р»РґР°СЂРјРµРЅ Р¶Т±РјС‹СЃ': 'Р Р°Р±РѕС‚Р° СЃ С„Р°Р№Р»Р°РјРё',
        'ТљР°С‚РµР»РµСЂРґС– У©ТЈРґРµСѓ': 'РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє',
        'РћР±СЉРµРєС‚С–РіРµ Р±Р°Т“С‹С‚С‚Р°Р»Т“Р°РЅ РїСЂРѕРіСЂР°РјРјР°Р»Р°Сѓ': 'РћР±СЉРµРєС‚РЅРѕ-РѕСЂРёРµРЅС‚РёСЂРѕРІР°РЅРЅРѕРµ РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёРµ',
        
        // Р‘Р°Р·Р° РґР°РЅРЅС‹С… С‚РµСЂРјРёРЅС‹
        'Р”РµСЂРµРєС‚РµСЂ Р±Р°Р·Р°СЃС‹': 'Р‘Р°Р·Р° РґР°РЅРЅС‹С…',
        'SQL СЃТ±СЂР°РЅС‹СЃ': 'SQL Р·Р°РїСЂРѕСЃ',
        'РЎТ±СЂР°РЅС‹СЃ': 'Р—Р°РїСЂРѕСЃ',
        'РљРµСЃС‚Рµ (С‚Р°Р±Р»РёС†Р°)': 'РўР°Р±Р»РёС†Р°',
        'Р–Р°Р·Р±Р°': 'Р—Р°РїРёСЃСЊ',
        'УЁСЂС–СЃ': 'РџРѕР»Рµ',
        'Р‘Р°СЃС‚Р°РїТ›С‹ РєС–Р»С‚': 'РџРµСЂРІРёС‡РЅС‹Р№ РєР»СЋС‡',
        'РЎС‹СЂС‚Т›С‹ РєС–Р»С‚': 'Р’РЅРµС€РЅРёР№ РєР»СЋС‡',
        'Р‘Р°Р№Р»Р°РЅС‹СЃ': 'РЎРІСЏР·СЊ',
        'РРЅРґРµРєСЃ': 'РРЅРґРµРєСЃ',
        'РЎТ±СЂС‹РїС‚Р°Сѓ': 'РЎРѕСЂС‚РёСЂРѕРІРєР°',
        'Р†Р·РґРµСѓ': 'РџРѕРёСЃРє',
        'РЎР°Т›С‚Р°Сѓ': 'РЎРѕС…СЂР°РЅРµРЅРёРµ',
        'УЁТЈРґРµСѓ': 'Р РµРґР°РєС‚РёСЂРѕРІР°РЅРёРµ',
        'Р–РѕСЋ': 'РЈРґР°Р»РµРЅРёРµ',
        'Р РµР»СЏС†РёСЏР»С‹Т› РґРµСЂРµРєС‚РµСЂ Р±Р°Р·Р°СЃС‹': 'Р РµР»СЏС†РёРѕРЅРЅР°СЏ Р±Р°Р·Р° РґР°РЅРЅС‹С…',
        'SQL РµРЅРіС–Р·Сѓ': 'Р’РІРµРґРµРЅРёРµ РІ SQL',
        'SELECT СЃТ±СЂР°РЅС‹СЃС‹': 'Р—Р°РїСЂРѕСЃ SELECT',
        'INSERT СЃТ±СЂР°РЅС‹СЃС‹': 'Р—Р°РїСЂРѕСЃ INSERT',
        'UPDATE СЃТ±СЂР°РЅС‹СЃС‹': 'Р—Р°РїСЂРѕСЃ UPDATE',
        'DELETE СЃТ±СЂР°РЅС‹СЃС‹': 'Р—Р°РїСЂРѕСЃ DELETE',
        'JOIN РѕРїРµСЂР°С†РёСЏСЃС‹': 'РћРїРµСЂР°С†РёСЏ JOIN',
        'РљРµСЃС‚РµР»РµСЂРґС– Т›Т±СЂСѓ': 'РЎРѕР·РґР°РЅРёРµ С‚Р°Р±Р»РёС†',
        'РљРµСЃС‚РµР»РµСЂРґС– У©Р·РіРµСЂС‚Сѓ': 'РР·РјРµРЅРµРЅРёРµ С‚Р°Р±Р»РёС†',
        'РљРµСЃС‚РµР»РµСЂРґС– Р¶РѕСЋ': 'РЈРґР°Р»РµРЅРёРµ С‚Р°Р±Р»РёС†',
        'Р”РµСЂРµРєС‚РµСЂ С‚ТЇСЂР»РµСЂС–': 'РўРёРїС‹ РґР°РЅРЅС‹С…',
        'РЁРµРєС‚РµСѓР»РµСЂ': 'РћРіСЂР°РЅРёС‡РµРЅРёСЏ',
        'РўСЂР°РЅР·Р°РєС†РёСЏР»Р°СЂ': 'РўСЂР°РЅР·Р°РєС†РёРё',
        
        // Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ С„СЂР°Р·С‹ РґР»СЏ HTML
        'HTML (HyperText Markup Language) - РІРµР±-РїР°СЂР°Т›С‚Р°СЂРґС‹ТЈ Т›Т±СЂС‹Р»С‹РјС‹РЅ Р°РЅС‹Т›С‚Р°Р№С‚С‹РЅ РЅРµРіС–Р·РіС– С‚С–Р»': 'HTML (HyperText Markup Language) - РѕСЃРЅРѕРІРЅРѕР№ СЏР·С‹Рє, РѕРїСЂРµРґРµР»СЏСЋС‰РёР№ СЃС‚СЂСѓРєС‚СѓСЂСѓ РІРµР±-СЃС‚СЂР°РЅРёС†',
        'HTML (HyperText Markup Language) - РІРµР±-СЃС‚СЂР°РЅРёС†Р°С‚Р°СЂРґС‹ТЈ Т›Т±СЂС‹Р»С‹РјС‹РЅ Р°РЅС‹Т›С‚Р°Р№С‚С‹РЅ РЅРµРіС–Р·РіС– С‚С–Р»': 'HTML (HyperText Markup Language) - РѕСЃРЅРѕРІРЅРѕР№ СЏР·С‹Рє, РѕРїСЂРµРґРµР»СЏСЋС‰РёР№ СЃС‚СЂСѓРєС‚СѓСЂСѓ РІРµР±-СЃС‚СЂР°РЅРёС†',
        'Т›Т±СЂС‹Р»С‹РјС‹РЅ Р°РЅС‹Т›С‚Р°Р№С‚С‹РЅ': 'РѕРїСЂРµРґРµР»СЏСЋС‰РёР№ СЃС‚СЂСѓРєС‚СѓСЂСѓ',
        'РЅРµРіС–Р·РіС– С‚С–Р»': 'РѕСЃРЅРѕРІРЅРѕР№ СЏР·С‹Рє',
        'Р‘Р°СЂР»С‹Т› Р·Р°РјР°РЅР°СѓРё РІРµР±-СЃР°Р№С‚С‚Р°СЂ HTML РєУ©РјРµРіС–РјРµРЅ Р¶Р°СЃР°Р»Р°РґС‹': 'Р’СЃРµ СЃРѕРІСЂРµРјРµРЅРЅС‹Рµ РІРµР±-СЃР°Р№С‚С‹ СЃРѕР·РґР°СЋС‚СЃСЏ СЃ РїРѕРјРѕС‰СЊСЋ HTML',
        'HTML С‚РµРіС‚РµСЂРґРµРЅ С‚Т±СЂР°РґС‹, РѕР»Р°СЂ РјР°Р·РјТ±РЅРЅС‹ТЈ Т›Т±СЂС‹Р»С‹РјС‹РЅ Р°РЅС‹Т›С‚Р°Р№РґС‹': 'HTML СЃРѕСЃС‚РѕРёС‚ РёР· С‚РµРіРѕРІ, РєРѕС‚РѕСЂС‹Рµ РѕРїСЂРµРґРµР»СЏСЋС‚ СЃС‚СЂСѓРєС‚СѓСЂСѓ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ',
        'УСЂР±С–СЂ С‚Рµg <С‚РµРі> Р¶Т±РїС‚Р°РЅ Р±Р°СЃС‚Р°Р»С‹Рї, </С‚РµРі> Р¶Т±Р±С‹РјРµРЅ Р°СЏТ›С‚Р°Р»Р°РґС‹': 'РљР°Р¶РґС‹Р№ С‚РµРі РЅР°С‡РёРЅР°РµС‚СЃСЏ СЃ РїР°СЂС‹ <С‚РµРі> Рё Р·Р°РєР°РЅС‡РёРІР°РµС‚СЃСЏ РїР°СЂРѕР№ </С‚РµРі>',
        'ТљТ±Р¶Р°С‚С‚С‹ТЈ HTML5 РЅТ±СЃТ›Р°СЃС‹РЅ РєУ©СЂСЃРµС‚РµРґС–': 'РЈРєР°Р·С‹РІР°РµС‚ РІРµСЂСЃРёСЋ HTML5 РґРѕРєСѓРјРµРЅС‚Р°',
        'Р‘ТЇРєС–Р» Т›Т±Р¶Р°С‚С‚С‹ Т›Р°РјС‚РёРґС‹': 'РЎРѕРґРµСЂР¶РёС‚ РІРµСЃСЊ РґРѕРєСѓРјРµРЅС‚',
        'lang Р°С‚СЂРёР±СѓС‚С‹ С‚С–Р»РґС– РєУ©СЂСЃРµС‚РµРґС–': 'Р°С‚СЂРёР±СѓС‚ lang СѓРєР°Р·С‹РІР°РµС‚ СЏР·С‹Рє',
        'РњРµС‚Р°Р°Т›РїР°СЂР°С‚ (С‚Р°Т›С‹СЂС‹Рї, СЃС‚РёР»СЊРґРµСЂ, СЃРєСЂРёРїС‚РµСЂ)': 'РњРµС‚Р°РёРЅС„РѕСЂРјР°С†РёСЏ (Р·Р°РіРѕР»РѕРІРѕРє, СЃС‚РёР»Рё, СЃРєСЂРёРїС‚С‹)',
        'С‚Р°Т›С‹СЂС‹Рї': 'Р·Р°РіРѕР»РѕРІРѕРє',
        'СЃРєСЂРёРїС‚РµСЂ': 'СЃРєСЂРёРїС‚С‹',
        'Р‘СЂР°СѓР·РµСЂРіРµ Р°СЂРЅР°Р»Т“Р°РЅ': 'РџСЂРµРґРЅР°Р·РЅР°С‡РµРЅ РґР»СЏ Р±СЂР°СѓР·РµСЂР°',
        'РџР°СЂР°Т›С‚С‹ТЈ РЅРµРіС–Р·РіС– РєУ©СЂС–РЅРµС‚С–РЅ РјР°Р·РјТ±РЅС‹РЅ Т›Р°РјС‚РёРґС‹': 'РЎРѕРґРµСЂР¶РёС‚ РѕСЃРЅРѕРІРЅРѕРµ РІРёРґРёРјРѕРµ СЃРѕРґРµСЂР¶РёРјРѕРµ СЃС‚СЂР°РЅРёС†С‹',
        'Р‘СЂР°СѓР·РµСЂ Т›РѕР№С‹РЅРґС‹СЃС‹РЅРґР° РєУ©СЂСЃРµС‚С–Р»РµС‚С–РЅ РїР°СЂР°Т› С‚Р°Т›С‹СЂС‹Р±С‹': 'Р—Р°РіРѕР»РѕРІРѕРє СЃС‚СЂР°РЅРёС†С‹, РѕС‚РѕР±СЂР°Р¶Р°РµРјС‹Р№ РІРѕ РІРєР»Р°РґРєРµ Р±СЂР°СѓР·РµСЂР°',
        'РџР°СЂР°Т› С‚СѓСЂР°Р»С‹ Т›РѕСЃС‹РјС€Р° Р°Т›РїР°СЂР°С‚': 'Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ СЃС‚СЂР°РЅРёС†Рµ',
        'РџР°СЂР°Т› С‚СѓСЂР°Р»С‹ Т›РѕСЃС‹РјС€Р° Р°Т›РїР°СЂР°С‚ (РєРѕРґРёСЂРѕРІРєР°, РєС–Р»С‚ СЃУ©Р·РґРµСЂ, С‚.Р±.)': 'Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ СЃС‚СЂР°РЅРёС†Рµ (РєРѕРґРёСЂРѕРІРєР°, РєР»СЋС‡РµРІС‹Рµ СЃР»РѕРІР° Рё С‚.Рґ.)',
        'РєС–Р»С‚ СЃУ©Р·РґРµСЂ': 'РєР»СЋС‡РµРІС‹Рµ СЃР»РѕРІР°',
        'С‚.Р±.': 'Рё С‚.Рґ.',
        'УСЂТ›Р°С€Р°РЅ Р±С–СЂС–РЅС€С– Р¶РѕР»РґР° Р±РѕР»СѓС‹ РєРµСЂРµРє!': 'Р”РѕР»Р¶РµРЅ РІСЃРµРіРґР° Р±С‹С‚СЊ РЅР° РїРµСЂРІРѕР№ СЃС‚СЂРѕРєРµ!',
        'РЎР°Р№С‚С‚С‹ТЈ РЅРµРіС–Р·РіС– РјР°Р·РјТ±РЅС‹ РѕСЃС‹РЅРґР°': 'РћСЃРЅРѕРІРЅРѕРµ СЃРѕРґРµСЂР¶РёРјРѕРµ СЃР°Р№С‚Р° Р·РґРµСЃСЊ',
        'РњРµРЅС–ТЈ Р°Р»Т“Р°С€Т›С‹ РІРµР±-РїР°СЂР°Т“С‹Рј': 'РњРѕСЏ РїРµСЂРІР°СЏ РІРµР±-СЃС‚СЂР°РЅРёС†Р°',
        'РњРµРЅС–ТЈ СЃР°Р№С‚С‹Рј': 'РњРѕР№ СЃР°Р№С‚',
        'Р‘Т±Р» РјРµРЅС–ТЈ Р°Р»Т“Р°С€Т›С‹ HTML РєРѕРґС‹Рј': 'Р­С‚Рѕ РјРѕР№ РїРµСЂРІС‹Р№ HTML РєРѕРґ',
        
        // РџСЂР°РєС‚РёС‡РµСЃРєРёРµ Р·Р°РґР°РЅРёСЏ
        'Р–РѕТ“Р°СЂС‹РґР°Т“С‹ С‚РµРѕСЂРёСЏРЅС‹ РїР°Р№РґР°Р»Р°РЅС‹Рї, РЅРµРіС–Р·РіС– HTML Т›Т±СЂС‹Р»С‹РјРґС‹ Р¶Р°СЃР°ТЈС‹Р·': 'РСЃРїРѕР»СЊР·СѓСЏ РїСЂРёРІРµРґРµРЅРЅСѓСЋ РІС‹С€Рµ С‚РµРѕСЂРёСЋ, СЃРѕР·РґР°Р№С‚Рµ РѕСЃРЅРѕРІРЅСѓСЋ СЃС‚СЂСѓРєС‚СѓСЂСѓ HTML',
        'DOCTYPE РґРµРєР»Р°СЂР°С†РёСЏСЃС‹РЅ Т›РѕСЃС‹ТЈС‹Р·': 'Р”РѕР±Р°РІСЊС‚Рµ РґРµРєР»Р°СЂР°С†РёСЋ DOCTYPE',
        'ТљР°Р·Р°Т› С‚С–Р»С–РЅ РєУ©СЂСЃРµС‚С–ТЈС–Р· (lang="kk")': 'РЈРєР°Р¶РёС‚Рµ СЂСѓСЃСЃРєРёР№ СЏР·С‹Рє (lang="ru")',
        'head Р±У©Р»С–РјС–РЅ Т›РѕСЃС‹ТЈС‹Р· (С–С€С–РЅРґРµРіС– РјР°Р·РјТ±РЅ Т›Р°Р·С–СЂРґС–ТЈ У©Р·С–РЅРґРµ Р±РµСЂС–Р»РіРµРЅ)': 'Р”РѕР±Р°РІСЊС‚Рµ СЂР°Р·РґРµР» head (СЃРѕРґРµСЂР¶РёРјРѕРµ СѓР¶Рµ РїСЂРµРґРѕСЃС‚Р°РІР»РµРЅРѕ)',
        'body С‚РµРіС–РЅ Т›РѕСЃС‹ТЈС‹Р· Р¶У™РЅРµ РѕТ“Р°РЅ h1 С‚Р°Т›С‹СЂС‹Р±С‹РЅ РµРЅРіС–Р·С–ТЈС–Р·': 'Р”РѕР±Р°РІСЊС‚Рµ С‚РµРі body Рё РІСЃС‚Р°РІСЊС‚Рµ РІ РЅРµРіРѕ Р·Р°РіРѕР»РѕРІРѕРє h1'
    };
    
    // РџРµСЂРµРІРѕРґРёРј РѕСЃРЅРѕРІРЅРѕР№ РєРѕРЅС‚РµРЅС‚ СѓСЂРѕРєР°
    const lessonContent = document.getElementById('lesson-data');
    if (lessonContent) {
        // РџРµСЂРµРІРѕРґРёРј РІСЃРµ РїР°СЂР°РіСЂР°С„С‹, Р·Р°РіРѕР»РѕРІРєРё, СЃРїРёСЃРєРё РІ СЃРѕРґРµСЂР¶РёРјРѕРј СѓСЂРѕРєР°
        const textElements = lessonContent.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, td, th, strong, em, span, div, figcaption');
        
        textElements.forEach(element => {
            // РџСЂРѕРїСѓСЃРєР°РµРј СЌР»РµРјРµРЅС‚С‹ СЃ РєРѕРґРѕРј
            if (element.closest('pre, code')) return;
            
            // РќРµ РїРµСЂРµРІРѕРґРёРј СЌР»РµРјРµРЅС‚С‹ СЃ СѓРєР°Р·Р°РЅРЅС‹Рј РєР»Р°СЃСЃРѕРј "no-translate"
            if (element.classList.contains('no-translate')) return;
            
            let text = element.innerHTML;
            
            // РџСЂРѕРІРµСЂСЏРµРј РєР°Р¶РґС‹Р№ РєР»СЋС‡ РїРµСЂРµРІРѕРґР°
            Object.keys(commonTranslations).forEach(key => {
                if (key.length > 3 && text.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё
                    // РСЃРїРѕР»СЊР·СѓРµРј СЂРµРіСѓР»СЏСЂРЅРѕРµ РІС‹СЂР°Р¶РµРЅРёРµ РґР»СЏ Р·Р°РјРµРЅС‹ СЃ СѓС‡РµС‚РѕРј СЃР»РѕРІР° С†РµР»РёРєРѕРј
                    const regex = new RegExp(`\\b${key}\\b`, 'g');
                    text = text.replace(regex, commonTranslations[key]);
                }
            });
            
            // РўР°РєР¶Рµ РѕР±СЂР°Р±Р°С‚С‹РІР°РµРј Р±РѕР»РµРµ СЃР»РѕР¶РЅС‹Рµ С„СЂР°Р·С‹ Р±РµР· СѓС‡РµС‚Р° РіСЂР°РЅРёС†С‹ СЃР»РѕРІР°
            const complexPhrases = [
                'РЎР°Р±Р°Т› 1: HTML РЅРµРіС–Р·РґРµСЂС–',
                'HTML (HyperText Markup Language) - РІРµР±-РїР°СЂР°Т›С‚Р°СЂРґС‹ТЈ Т›Т±СЂС‹Р»С‹РјС‹РЅ Р°РЅС‹Т›С‚Р°Р№С‚С‹РЅ РЅРµРіС–Р·РіС– С‚С–Р»',
                'HTML (HyperText Markup Language) - РІРµР±-СЃС‚СЂР°РЅРёС†Р°С‚Р°СЂРґС‹ТЈ Т›Т±СЂС‹Р»С‹РјС‹РЅ Р°РЅС‹Т›С‚Р°Р№С‚С‹РЅ РЅРµРіС–Р·РіС– С‚С–Р»',
                'УСЂР±С–СЂ С‚Рµg <С‚РµРі> Р¶Т±РїС‚Р°РЅ Р±Р°СЃС‚Р°Р»С‹Рї, </С‚РµРі> Р¶Т±Р±С‹РјРµРЅ Р°СЏТ›С‚Р°Р»Р°РґС‹',
                'lang Р°С‚СЂРёР±СѓС‚С‹ С‚С–Р»РґС– РєУ©СЂСЃРµС‚РµРґС–',
                'РњРµС‚Р°Р°Т›РїР°СЂР°С‚ (С‚Р°Т›С‹СЂС‹Рї, СЃС‚РёР»СЊРґРµСЂ, СЃРєСЂРёРїС‚РµСЂ)',
                'РџР°СЂР°Т› С‚СѓСЂР°Р»С‹ Т›РѕСЃС‹РјС€Р° Р°Т›РїР°СЂР°С‚ (РєРѕРґРёСЂРѕРІРєР°, РєС–Р»С‚ СЃУ©Р·РґРµСЂ, С‚.Р±.)'
            ];
            
            complexPhrases.forEach(phrase => {
                if (text.includes(phrase)) {
                    text = text.replace(new RegExp(phrase, 'g'), commonTranslations[phrase]);
                }
            });
            
            // Р•СЃР»Рё С‚РµРєСЃС‚ Р±С‹Р» РёР·РјРµРЅРµРЅ, РѕР±РЅРѕРІР»СЏРµРј РµРіРѕ
            if (text !== element.innerHTML) {
                element.innerHTML = text;
            }
        });
    }
    
    // РўР°РєР¶Рµ РїРµСЂРµРІРѕРґРёРј Р·Р°РіРѕР»РѕРІРєРё Рё РѕРїРёСЃР°РЅРёСЏ РІ РїСЂР°РєС‚РёС‡РµСЃРєРёС… Р·Р°РґР°РЅРёСЏС…
    const taskSections = document.querySelectorAll('.task, .quiz, .practical-task, .exercise, .homework, .practice');
    taskSections.forEach(section => {
        const headers = section.querySelectorAll('h1, h2, h3, h4, h5, h6, p, strong');
        headers.forEach(header => {
            let text = header.innerHTML;
            
            // РџСЂРѕРІРµСЂСЏРµРј РєР°Р¶РґС‹Р№ РєР»СЋС‡ РїРµСЂРµРІРѕРґР°
            Object.keys(commonTranslations).forEach(key => {
                if (key.length > 3 && text.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё
                    // РСЃРїРѕР»СЊР·СѓРµРј СЂРµРіСѓР»СЏСЂРЅРѕРµ РІС‹СЂР°Р¶РµРЅРёРµ РґР»СЏ Р·Р°РјРµРЅС‹ СЃ СѓС‡РµС‚РѕРј СЃР»РѕРІР° С†РµР»РёРєРѕРј
                    const regex = new RegExp(`\\b${key}\\b`, 'g');
                    text = text.replace(regex, commonTranslations[key]);
                }
            });
            
            // Р•СЃР»Рё С‚РµРєСЃС‚ Р±С‹Р» РёР·РјРµРЅРµРЅ, РѕР±РЅРѕРІР»СЏРµРј РµРіРѕ
            if (text !== header.innerHTML) {
                header.innerHTML = text;
            }
        });
        
        // РџРµСЂРµРІРѕРґРёРј РѕРїРёСЃР°РЅРёСЏ Рё РёРЅСЃС‚СЂСѓРєС†РёРё
        const paragraphs = section.querySelectorAll('p, li, div.description, span, em');
        paragraphs.forEach(paragraph => {
            let text = paragraph.innerHTML;
            
            // РџСЂРѕРІРµСЂСЏРµРј РєР°Р¶РґС‹Р№ РєР»СЋС‡ РїРµСЂРµРІРѕРґР°
            Object.keys(commonTranslations).forEach(key => {
                if (key.length > 3 && text.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё
                    // РСЃРїРѕР»СЊР·СѓРµРј СЂРµРіСѓР»СЏСЂРЅРѕРµ РІС‹СЂР°Р¶РµРЅРёРµ РґР»СЏ Р·Р°РјРµРЅС‹ СЃ СѓС‡РµС‚РѕРј СЃР»РѕРІР° С†РµР»РёРєРѕРј
                    const regex = new RegExp(`\\b${key}\\b`, 'g');
                    text = text.replace(regex, commonTranslations[key]);
                }
            });
            
            // Р•СЃР»Рё С‚РµРєСЃС‚ Р±С‹Р» РёР·РјРµРЅРµРЅ, РѕР±РЅРѕРІР»СЏРµРј РµРіРѕ
            if (text !== paragraph.innerHTML) {
                paragraph.innerHTML = text;
            }
        });
        
        // РџРµСЂРµРІРѕРґРёРј РїСЂРёРјРµСЂС‹ РєРѕРґР°, РµСЃР»Рё РѕРЅРё РЅРµ РІ Р±Р»РѕРєР°С… pre/code
        const codeElements = section.querySelectorAll('code:not(pre code)');
        codeElements.forEach(codeElem => {
            let text = codeElem.innerHTML;
            let hasKazakhContent = /[У™С–ТЈТ“ТЇТ±Т›У©Т»]|РЎР°Р±Р°Т›|РњС‹СЃР°Р»|РўР°РїСЃС‹СЂРјР°|РІРµР±-РїР°СЂР°Т›/i.test(text);
            
            if (hasKazakhContent) {
                // РџРµСЂРµРІРѕРґРёРј СЃС‚СЂРѕРєРё РІ РєР°РІС‹С‡РєР°С…
                text = text.replace(/(['"])([^'"<>]*(?:[У™С–ТЈТ“ТЇТ±Т›У©Т»]|РЎР°Р±Р°Т›|РњС‹СЃР°Р»)[^'"<>]*)(['"])/gi, (match, quoteStart, content, quoteEnd) => {
                    let translatedContent = content;
                    Object.keys(commonTranslations).forEach(key => {
                        if (key.length > 3 && translatedContent.includes(key)) {
                            translatedContent = translatedContent.replace(new RegExp(key, 'g'), commonTranslations[key]);
                        }
                    });
                    return quoteStart + translatedContent + quoteEnd;
                });
                
                if (text !== codeElem.innerHTML) {
                    codeElem.innerHTML = text;
                }
            }
        });
    });
    
    // Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ РїРµСЂРµРІРѕРґРёРј РґРѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ
    const homeworkSection = document.getElementById('homework-section');
    if (homeworkSection) {
        const homeworkContent = homeworkSection.querySelectorAll('p, li, h3, h4, div, strong, span, em');
        homeworkContent.forEach(element => {
            // РџСЂРѕРїСѓСЃРєР°РµРј СЌР»РµРјРµРЅС‚С‹ СЃ РєРѕРґРѕРј
            if (element.closest('pre, code')) return;
            
            let text = element.innerHTML;
            
            // РџСЂРѕРІРµСЂСЏРµРј РєР°Р¶РґС‹Р№ РєР»СЋС‡ РїРµСЂРµРІРѕРґР°
            Object.keys(commonTranslations).forEach(key => {
                if (key.length > 3 && text.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё
                    const regex = new RegExp(`\\b${key}\\b`, 'g');
                    text = text.replace(regex, commonTranslations[key]);
                }
            });
            
            // Р•СЃР»Рё С‚РµРєСЃС‚ Р±С‹Р» РёР·РјРµРЅРµРЅ, РѕР±РЅРѕРІР»СЏРµРј РµРіРѕ
            if (text !== element.innerHTML) {
                element.innerHTML = text;
            }
        });
    }
    
    // РџРµСЂРµРІРѕРґРёРј РїСЂРёРјРµСЂС‹ РєРѕРґР° РІ Р±Р»РѕРєР°С… code Рё pre
    const codeBlocks = document.querySelectorAll('code, pre');
    codeBlocks.forEach(codeBlock => {

        // РџСЂРѕРІРµСЂСЏРµРј, РµСЃС‚СЊ Р»Рё РІ РєРѕРґРµ РєР°Р·Р°С…СЃРєРёРµ Р±СѓРєРІС‹ РёР»Рё С‡Р°СЃС‚Рѕ РІСЃС‚СЂРµС‡Р°СЋС‰РёРµСЃСЏ РєР°Р·Р°С…СЃРєРёРµ СЃР»РѕРІР°
        const hasKazakhContent = /[У™С–ТЈТ“ТЇТ±Т›У©Т»]|РЎР°Р±Р°Т›|РњС‹СЃР°Р»|РўР°РїСЃС‹СЂРјР°|РњРµРЅС–ТЈ|РІРµР±-РїР°СЂР°Т›|СЃР°Р№С‚/i.test(codeBlock.textContent);
        
        if (hasKazakhContent) {
            // РџРµСЂРµРІРѕРґРёРј РєРѕРјРјРµРЅС‚Р°СЂРёРё // Рё /* */
            let codeText = codeBlock.innerHTML;
            
            // FIX: РЎРЅР°С‡Р°Р»Р° РѕР±СЂР°Р±Р°С‚С‹РІР°РµРј HTML-РєРѕРјРјРµРЅС‚Р°СЂРёРё
            Object.keys(commonTranslations).forEach(key => {
                if (key.includes('<!--') && codeText.includes(key)) {
                    // Р­РєСЂР°РЅРёСЂСѓРµРј СЂРµРіСѓР»СЏСЂРЅС‹Рµ РІС‹СЂР°Р¶РµРЅРёСЏ
                    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const regex = new RegExp(escapedKey, 'g');
                    codeText = codeText.replace(regex, commonTranslations[key]);
                }
            });
            
            // Р—Р°РјРµРЅСЏРµРј РєР°Р·Р°С…СЃРєРёРµ РєРѕРјРјРµРЅС‚Р°СЂРёРё РІ JavaScript
            codeText = codeText.replace(/(\/\/\s*)([^<>\n]*[У™С–ТЈТ“ТЇТ±Т›У©Т»][^<>\n]*)/gi, (match, commentStart, commentText) => {
                // РџРµСЂРµРІРѕРґРёРј С‚РµРєСЃС‚ РєРѕРјРјРµРЅС‚Р°СЂРёСЏ
                let translatedComment = commentText;
                Object.keys(commonTranslations).forEach(key => {
                    if (key.length > 3 && translatedComment.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё
                        translatedComment = translatedComment.replace(new RegExp(key, 'g'), commonTranslations[key]);
                    }
                });
                return commentStart + translatedComment;
            });
            
            // Р—Р°РјРµРЅСЏРµРј РјРЅРѕРіРѕСЃС‚СЂРѕС‡РЅС‹Рµ РєРѕРјРјРµРЅС‚Р°СЂРёРё
            codeText = codeText.replace(/(\/\*\s*)([^<>]*[У™С–ТЈТ“ТЇТ±Т›У©Т»][^<>]*)(\s*\*\/)/gi, (match, commentStart, commentText, commentEnd) => {
                // РџРµСЂРµРІРѕРґРёРј С‚РµРєСЃС‚ РєРѕРјРјРµРЅС‚Р°СЂРёСЏ
                let translatedComment = commentText;
                Object.keys(commonTranslations).forEach(key => {
                    if (key.length > 3 && translatedComment.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё
                        translatedComment = translatedComment.replace(new RegExp(key, 'g'), commonTranslations[key]);
                    }
                });
                return commentStart + translatedComment + commentEnd;
            });
            
            // Р—Р°РјРµРЅСЏРµРј СЃС‚СЂРѕРєРѕРІС‹Рµ Р»РёС‚РµСЂР°Р»С‹ СЃ РєР°Р·Р°С…СЃРєРёРјРё СЃР»РѕРІР°РјРё
            codeText = codeText.replace(/(['"])([^'"<>]*(?:[У™С–ТЈТ“ТЇТ±Т›У©Т»]|РЎР°Р±Р°Т›|РњС‹СЃР°Р»|РўР°РїСЃС‹СЂРјР°|РњРµРЅС–ТЈ)[^'"<>]*)(['"])/gi, (match, quoteStart, stringContent, quoteEnd) => {
                // РџРµСЂРµРІРѕРґРёРј СЃРѕРґРµСЂР¶РёРјРѕРµ СЃС‚СЂРѕРєРё
                let translatedString = stringContent;
                Object.keys(commonTranslations).forEach(key => {
                    if (key.length > 3 && translatedString.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё
                        translatedString = translatedString.replace(new RegExp(key, 'g'), commonTranslations[key]);
                    }
                });
                return quoteStart + translatedString + quoteEnd;
            });
            
            // FIX: Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅР°СЏ РѕР±СЂР°Р±РѕС‚РєР° РґР»СЏ HTML-СЌР»РµРјРµРЅС‚РѕРІ РІРЅСѓС‚СЂРё РєРѕРґР°
            codeText = codeText.replace(/(&lt;!--\s*)([^&]*[У™С–ТЈТ“ТЇТ±Т›У©Т»][^&]*)(\s*--&gt;)/gi, (match, commentStart, commentText, commentEnd) => {
                // РџРµСЂРµРІРѕРґРёРј С‚РµРєСЃС‚ РєРѕРјРјРµРЅС‚Р°СЂРёСЏ
                let translatedComment = commentText;
                Object.keys(commonTranslations).forEach(key => {
                    if (key.length > 3 && translatedComment.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё
                        translatedComment = translatedComment.replace(new RegExp(key, 'g'), commonTranslations[key]);
                    }
                });
                return commentStart + translatedComment + commentEnd;
            });
            
            if (codeText !== codeBlock.innerHTML) {
                codeBlock.innerHTML = codeText;
        // РџРµСЂРµРІРѕРґРёРј РїСЂРёРјРµСЂС‹ РєРѕРґР° РІ Р±Р»РѕРєР°С… code Рё pre    const codeBlocks = document.querySelectorAll('code, pre');    codeBlocks.forEach(codeBlock => {        // РџСЂРѕРІРµСЂСЏРµРј, РµСЃС‚СЊ Р»Рё РІ РєРѕРґРµ РєР°Р·Р°С…СЃРєРёРµ Р±СѓРєРІС‹ РёР»Рё С‡Р°СЃС‚Рѕ РІСЃС‚СЂРµС‡Р°СЋС‰РёРµСЃСЏ РєР°Р·Р°С…СЃРєРёРµ СЃР»РѕРІР°        const hasKazakhContent = /[У™С–ТЈТ“ТЇТ±Т›У©Т»]|РЎР°Р±Р°Т›|РњС‹СЃР°Р»|РўР°РїСЃС‹СЂРјР°|РњРµРЅС–ТЈ|РІРµР±-РїР°СЂР°Т›|СЃР°Р№С‚/i.test(codeBlock.textContent);                if (hasKazakhContent) {            // РџРµСЂРµРІРѕРґРёРј РєРѕРјРјРµРЅС‚Р°СЂРёРё // Рё /* */            let codeText = codeBlock.innerHTML;                        // FIX: РЎРЅР°С‡Р°Р»Р° РѕР±СЂР°Р±Р°С‚С‹РІР°РµРј HTML-РєРѕРјРјРµРЅС‚Р°СЂРёРё            Object.keys(commonTranslations).forEach(key => {                if (key.includes('<!--') && codeText.includes(key)) {                    // Р­РєСЂР°РЅРёСЂСѓРµРј СЂРµРіСѓР»СЏСЂРЅС‹Рµ РІС‹СЂР°Р¶РµРЅРёСЏ                    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');                    const regex = new RegExp(escapedKey, 'g');                    codeText = codeText.replace(regex, commonTranslations[key]);                }            });                        // Р—Р°РјРµРЅСЏРµРј РєР°Р·Р°С…СЃРєРёРµ РєРѕРјРјРµРЅС‚Р°СЂРёРё РІ JavaScript            codeText = codeText.replace(/(\/\/\s*)([^<>\n]*[У™С–ТЈТ“ТЇТ±Т›У©Т»][^<>\n]*)/gi, (match, commentStart, commentText) => {                // РџРµСЂРµРІРѕРґРёРј С‚РµРєСЃС‚ РєРѕРјРјРµРЅС‚Р°СЂРёСЏ                let translatedComment = commentText;                Object.keys(commonTranslations).forEach(key => {                    if (key.length > 3 && translatedComment.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё                        translatedComment = translatedComment.replace(new RegExp(key, 'g'), commonTranslations[key]);                    }                });                return commentStart + translatedComment;            });                        // Р—Р°РјРµРЅСЏРµРј РјРЅРѕРіРѕСЃС‚СЂРѕС‡РЅС‹Рµ РєРѕРјРјРµРЅС‚Р°СЂРёРё            codeText = codeText.replace(/(\/\*\s*)([^<>]*[У™С–ТЈТ“ТЇТ±Т›У©Т»][^<>]*)(\s*\*\/)/gi, (match, commentStart, commentText, commentEnd) => {                // РџРµСЂРµРІРѕРґРёРј С‚РµРєСЃС‚ РєРѕРјРјРµРЅС‚Р°СЂРёСЏ                let translatedComment = commentText;                Object.keys(commonTranslations).forEach(key => {                    if (key.length > 3 && translatedComment.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё                        translatedComment = translatedComment.replace(new RegExp(key, 'g'), commonTranslations[key]);                    }                });                return commentStart + translatedComment + commentEnd;            });                        // Р—Р°РјРµРЅСЏРµРј СЃС‚СЂРѕРєРѕРІС‹Рµ Р»РёС‚РµСЂР°Р»С‹ СЃ РєР°Р·Р°С…СЃРєРёРјРё СЃР»РѕРІР°РјРё            codeText = codeText.replace(/(['"])([^'"<>]*(?:[У™С–ТЈТ“ТЇТ±Т›У©Т»]|РЎР°Р±Р°Т›|РњС‹СЃР°Р»|РўР°РїСЃС‹СЂРјР°|РњРµРЅС–ТЈ)[^'"<>]*)(['"])/gi, (match, quoteStart, stringContent, quoteEnd) => {                // РџРµСЂРµРІРѕРґРёРј СЃРѕРґРµСЂР¶РёРјРѕРµ СЃС‚СЂРѕРєРё                let translatedString = stringContent;                Object.keys(commonTranslations).forEach(key => {                    if (key.length > 3 && translatedString.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё                        translatedString = translatedString.replace(new RegExp(key, 'g'), commonTranslations[key]);                    }                });                return quoteStart + translatedString + quoteEnd;            });                        // FIX: Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅР°СЏ РѕР±СЂР°Р±РѕС‚РєР° РґР»СЏ HTML-СЌР»РµРјРµРЅС‚РѕРІ РІРЅСѓС‚СЂРё РєРѕРґР°            codeText = codeText.replace(/(&lt;!--\s*)([^&]*[У™С–ТЈТ“ТЇТ±Т›У©Т»][^&]*)(\s*--&gt;)/gi, (match, commentStart, commentText, commentEnd) => {                // РџРµСЂРµРІРѕРґРёРј С‚РµРєСЃС‚ РєРѕРјРјРµРЅС‚Р°СЂРёСЏ                let translatedComment = commentText;                Object.keys(commonTranslations).forEach(key => {                    if (key.length > 3 && translatedComment.includes(key)) { // РСЃРєР»СЋС‡Р°РµРј СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёРµ РєР»СЋС‡Рё                        translatedComment = translatedComment.replace(new RegExp(key, 'g'), commonTranslations[key]);                    }                });                return commentStart + translatedComment + commentEnd;            });                        if (codeText !== codeBlock.innerHTML) {                codeBlock.innerHTML = codeText;            }        }    });
    
    // Р’С‹Р·С‹РІР°РµРј СЃРїРµС†РёС„РёС‡РЅС‹Рµ С„СѓРЅРєС†РёРё РїРµСЂРµРІРѕРґР° РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ С‚РёРїР° РєСѓСЂСЃР°
    const courseType = localStorage.getItem('lastOpenedCourse') || 'html';
    
    if (courseType === 'python' && typeof window.translatePythonTasks === 'function') {
        window.translatePythonTasks(lang);
    } else if (courseType === 'database' && typeof window.translateDatabaseTasks === 'function') {
        window.translateDatabaseTasks(lang);
    } else if (courseType === 'html' && typeof window.translatePracticalTasks === 'function') {
        window.translatePracticalTasks(lang);
    }
}

// Р¤СѓРЅРєС†РёСЏ РґР»СЏ РѕР±РЅРѕРІР»РµРЅРёСЏ РёР·РѕР±СЂР°Р¶РµРЅРёР№ СЃ СѓС‡РµС‚РѕРј СЏР·С‹РєР°
function translateImages(lang) {
    // РќР°С…РѕРґРёРј РІСЃРµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ СЃ Р°С‚СЂРёР±СѓС‚Р°РјРё data-src-kk Рё data-src-ru
    document.querySelectorAll('img[data-src-kk][data-src-ru]').forEach(img => {
        const kkSrc = img.getAttribute('data-src-kk');
        const ruSrc = img.getAttribute('data-src-ru');
        
        if (lang === 'ru' && ruSrc) {
            img.src = ruSrc;
        } else if (lang === 'kk' && kkSrc) {
            img.src = kkSrc;
        }
    });
}

// РЈР»СѓС‡С€РµРЅРЅР°СЏ С„СѓРЅРєС†РёСЏ РґР»СЏ РѕР±РЅРѕРІР»РµРЅРёСЏ РІРёРґРµРѕРєРѕРЅС‚РµР№РЅРµСЂРѕРІ
function updateVideos(courseType) {
    console.log('РћР±РЅРѕРІР»РµРЅРёРµ РІРёРґРµРѕ РґР»СЏ РєСѓСЂСЃР°:', courseType);
    
    // РџРѕР»СѓС‡Р°РµРј С‚РµРєСѓС‰РёР№ СЏР·С‹Рє РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const lang = userData.language || 'kk';
    
    // РќР°С…РѕРґРёРј РІСЃРµ РєРѕРЅС‚РµР№РЅРµСЂС‹ СЃ РІРёРґРµРѕ СЂР°Р·РЅС‹С… С‚РёРїРѕРІ
    const videoContainers = document.querySelectorAll('.video-container, .lecture-video, [data-video-container]');
    
    videoContainers.forEach(container => {
        // РЎРєСЂС‹РІР°РµРј РІСЃРµ РІРёРґРµРѕ РІРЅСѓС‚СЂРё
        container.querySelectorAll('.video-wrapper, .video-kk, .video-ru, [data-video-lang]').forEach(video => {
            video.style.display = 'none';
        });
        
        // РџРѕРєР°Р·С‹РІР°РµРј РЅСѓР¶РЅРѕРµ РІРёРґРµРѕ РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ СЏР·С‹РєР°
        let videoToShow = container.querySelector(`.video-${lang}, [data-video-lang="${lang}"]`);
        
        if (!videoToShow) {
            console.warn(`Р’РёРґРµРѕ РґР»СЏ СЏР·С‹РєР° ${lang} РЅРµ РЅР°Р№РґРµРЅРѕ, РїСЂРѕРІРµСЂСЏРµРј РґСЂСѓРіРёРµ СЃРµР»РµРєС‚РѕСЂС‹`);
            // РџСЂРѕР±СѓРµРј РґСЂСѓРіРёРµ СЃРµР»РµРєС‚РѕСЂС‹
            videoToShow = container.querySelector(`.${lang}-video, [lang="${lang}"]`);
        }
        
        if (videoToShow) {
            videoToShow.style.display = 'block';
            console.log(`РџРѕРєР°Р·С‹РІР°РµРј РІРёРґРµРѕ РґР»СЏ СЏР·С‹РєР° ${lang}:`, videoToShow);
        } else {
            console.warn(`Р’РёРґРµРѕ РґР»СЏ СЏР·С‹РєР° ${lang} РЅРµ РЅР°Р№РґРµРЅРѕ, РїРѕРєР°Р·С‹РІР°РµРј РїРµСЂРІРѕРµ РґРѕСЃС‚СѓРїРЅРѕРµ`);
            const firstVideo = container.querySelector('.video-wrapper, .video-kk, .video-ru, [data-video-lang]');
            if (firstVideo) {
                firstVideo.style.display = 'block';
            }
        }
    });
}

// Р¤СѓРЅРєС†РёСЏ РґР»СЏ РїРµСЂРµРІРѕРґР° РЅР° РєР°Р·Р°С…СЃРєРёР№ СЏР·С‹Рє
function applyKazakhTranslation() {
    // РџРѕР»СѓС‡Р°РµРј РЅР°С€ РѕР±СЉРµРєС‚ РїРµСЂРµРІРѕРґРѕРІ
    if (typeof translations === 'undefined' || !translations.kk) {
        console.error('РћР±СЉРµРєС‚ РїРµСЂРµРІРѕРґРѕРІ РЅРµ РЅР°Р№РґРµРЅ РґР»СЏ РєР°Р·Р°С…СЃРєРѕРіРѕ СЏР·С‹РєР°');
        return;
    }
    
    // РЈСЃС‚Р°РЅР°РІР»РёРІР°РµРј Р°С‚СЂРёР±СѓС‚ СЏР·С‹РєР°
    document.documentElement.setAttribute('lang', 'kk');
    
    // РќР°С…РѕРґРёРј РІСЃРµ СЌР»РµРјРµРЅС‚С‹ СЃ Р°С‚СЂРёР±СѓС‚РѕРј data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        if (translations.kk[key]) {
            element.innerHTML = translations.kk[key];
        }
    });
    
    // РћР±РЅРѕРІР»СЏРµРј РёРЅС‚РµСЂС„РµР№СЃ РґР»СЏ РєР°Р·Р°С…СЃРєРѕРіРѕ СЏР·С‹РєР°
    const sidebar_title = document.querySelector('.sidebar h2');
    if (sidebar_title) {
        sidebar_title.textContent = 'РЎР°Р±Р°Т›С‚Р°СЂ';
    }
    
    // РћР±РЅРѕРІР»СЏРµРј РєРЅРѕРїРєРё РґРµР№СЃС‚РІРёР№
    const completeButton = document.querySelector('.complete-btn');
    if (completeButton) {
        if (completeButton.classList.contains('completed')) {
            completeButton.textContent = 'РћСЂС‹РЅРґР°Р»РґС‹';
        } else {
            completeButton.textContent = 'РћСЂС‹РЅРґР°Р»РґС‹ РґРµРї Р±РµР»РіС–Р»РµСѓ';
        }
    }
    
    // РџРµСЂРµРІРѕРґРёРј РїР°РЅРµР»СЊ СѓРІРµРґРѕРјР»РµРЅРёР№ РґР»СЏ РїСѓСЃС‚РѕРіРѕ СѓСЂРѕРєР°
    const emptyMessage = document.getElementById('empty-message');
    if (emptyMessage) {
        const header = emptyMessage.querySelector('h2');
        if (header) {
            header.textContent = 'РЎР°Р±Р°Т› С‚Р°ТЈРґР°ТЈС‹Р·';
        }
        
        const paragraph = emptyMessage.querySelector('p');
        if (paragraph) {
            paragraph.textContent = 'РЎРѕР» Р¶Р°Т›С‚Р°РЅ СЃР°Р±Р°Т› С‚Р°ТЈРґР°Рї, РѕТ›СѓРґС‹ Р±Р°СЃС‚Р°Р№ Р°Р»Р°СЃС‹Р·.';
        }
    }
}

// Р”РѕР±Р°РІР»СЏРµРј С„СѓРЅРєС†РёСЋ РїРµСЂРµРІРѕРґР° С‚РµСЃС‚РѕРІ Рё РІРѕРїСЂРѕСЃРѕРІ
function translateTestsAndQuizzes(lang) {
    if (lang !== 'ru') return; // РўРѕР»СЊРєРѕ РґР»СЏ СЂСѓСЃСЃРєРѕРіРѕ СЏР·С‹РєР°
    
    // РџРµСЂРµРІРѕРґРёРј РІРѕРїСЂРѕСЃС‹ РІ С‚РµСЃС‚Р°С…
    const quizQuestions = document.querySelectorAll('.quiz-question, .test-question, .question p, .quiz p');
    quizQuestions.forEach(question => {
        // РџРѕР»СѓС‡Р°РµРј С‚РµРєСЃС‚ РІРѕРїСЂРѕСЃР°
        const originalText = question.textContent.trim();
        
        // РџС‹С‚Р°РµРјСЃСЏ РЅР°Р№С‚Рё РїРµСЂРµРІРѕРґ РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РµРј С„Р°Р№Р»Рµ РїРµСЂРµРІРѕРґР°
        let translated = false;
        
        // РџС‹С‚Р°РµРјСЃСЏ РїРµСЂРµРІРµСЃС‚Рё С‡РµСЂРµР· РІСЃРµ РґРѕСЃС‚СѓРїРЅС‹Рµ СЃР»РѕРІР°СЂРё
        const courseType = localStorage.getItem('lastOpenedCourse') || 'html';
        
        if (courseType === 'python' && typeof window.translatePythonTasks === 'function') {
            // РР·РІР»РµРєР°РµРј СЃР»РѕРІР°СЂСЊ РїРµСЂРµРІРѕРґРѕРІ РёР· С„СѓРЅРєС†РёРё Python
            if (typeof pythonTaskTranslations !== 'undefined') {
                Object.keys(pythonTaskTranslations).forEach(key => {
                    if (originalText.includes(key)) {
                        const newText = originalText.replace(new RegExp(key, 'g'), pythonTaskTranslations[key]);
                        if (newText !== originalText) {
                            question.textContent = newText;
                            translated = true;
                        }
                    }
                });
            }
        } else if (courseType === 'database' && typeof window.translateDatabaseTasks === 'function') {
            // РР·РІР»РµРєР°РµРј СЃР»РѕРІР°СЂСЊ РїРµСЂРµРІРѕРґРѕРІ РёР· С„СѓРЅРєС†РёРё Database
            if (typeof dbTaskTranslations !== 'undefined') {
                Object.keys(dbTaskTranslations).forEach(key => {
                    if (originalText.includes(key)) {
                        const newText = originalText.replace(new RegExp(key, 'g'), dbTaskTranslations[key]);
                        if (newText !== originalText) {
                            question.textContent = newText;
                            translated = true;
                        }
                    }
                });
            }
        }
        
        // Р•СЃР»Рё РЅРµ СѓРґР°Р»РѕСЃСЊ РїРµСЂРµРІРµСЃС‚Рё С‡РµСЂРµР· СЃР»РѕРІР°СЂРё РєСѓСЂСЃРѕРІ, РёСЃРїРѕР»СЊР·СѓРµРј РѕР±С‰РёР№ СЃР»РѕРІР°СЂСЊ
        if (!translated) {
            const commonTranslations = {
                'РўРµСЃС‚': 'РўРµСЃС‚',
                'РЎТ±СЂР°Т›': 'Р’РѕРїСЂРѕСЃ',
                'Р‘С–СЂРЅРµС€Рµ Р¶Р°СѓР°РїС‚С‹ С‚Р°ТЈРґР°СѓТ“Р° Р±РѕР»Р°РґС‹': 'РњРѕР¶РЅРѕ РІС‹Р±СЂР°С‚СЊ РЅРµСЃРєРѕР»СЊРєРѕ РѕС‚РІРµС‚РѕРІ',
                'Р‘С–СЂ Р¶Р°СѓР°РїС‚С‹ С‚Р°ТЈРґР°ТЈС‹Р·': 'Р’С‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РѕС‚РІРµС‚',
                'Р”Т±СЂС‹СЃ Р¶Р°СѓР°РїС‚С‹ С‚Р°ТЈРґР°ТЈС‹Р·': 'Р’С‹Р±РµСЂРёС‚Рµ РїСЂР°РІРёР»СЊРЅС‹Р№ РѕС‚РІРµС‚',
                'Р”Т±СЂС‹СЃ Р¶Р°СѓР°РїС‚Р°СЂРґС‹ С‚Р°ТЈРґР°ТЈС‹Р·': 'Р’С‹Р±РµСЂРёС‚Рµ РїСЂР°РІРёР»СЊРЅС‹Рµ РѕС‚РІРµС‚С‹'
            };
            
            Object.keys(commonTranslations).forEach(key => {
                if (originalText.includes(key)) {
                    const newText = originalText.replace(new RegExp(key, 'g'), commonTranslations[key]);
                    if (newText !== originalText) {
                        question.textContent = newText;
                    }
                }
            });
        }
    });
    
    // РџРµСЂРµРІРѕРґРёРј РІР°СЂРёР°РЅС‚С‹ РѕС‚РІРµС‚РѕРІ
    const quizOptions = document.querySelectorAll('.quiz-option, .test-option, .question label, .quiz label');
    quizOptions.forEach(option => {
        // РџСЂРѕРїСѓСЃРєР°РµРј РµСЃР»Рё СЌР»РµРјРµРЅС‚ СЃРѕРґРµСЂР¶РёС‚ С‚РѕР»СЊРєРѕ input
        if (option.childNodes.length === 1 && option.firstChild.nodeType === 1 && option.firstChild.nodeName === 'INPUT') {
            return;
        }
        
        // РџРѕР»СѓС‡Р°РµРј С‚РµРєСЃС‚РѕРІРѕРµ СЃРѕРґРµСЂР¶РёРјРѕРµ, СѓС‡РёС‚С‹РІР°СЏ С‡С‚Рѕ РІРЅСѓС‚СЂРё РјРѕР¶РµС‚ Р±С‹С‚СЊ input
        let textNodes = Array.from(option.childNodes)
            .filter(node => node.nodeType === 3) // РўРѕР»СЊРєРѕ С‚РµРєСЃС‚РѕРІС‹Рµ СѓР·Р»С‹
            .map(node => node.textContent.trim())
            .join(' ');
        
        // Р•СЃР»Рё РЅРµС‚ С‚РµРєСЃС‚РѕРІС‹С… СѓР·Р»РѕРІ, Р±РµСЂРµРј РІРµСЃСЊ textContent
        if (!textNodes) {
            textNodes = option.textContent.trim();
        }
        
        // РџС‹С‚Р°РµРјСЃСЏ РЅР°Р№С‚Рё РїРµСЂРµРІРѕРґ РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РµРј С„Р°Р№Р»Рµ РїРµСЂРµРІРѕРґР°
        const courseType = localStorage.getItem('lastOpenedCourse') || 'html';
        
        if (courseType === 'python' && typeof window.translatePythonTasks === 'function') {
            // РСЃРїРѕР»СЊР·СѓРµРј СЃР»РѕРІР°СЂСЊ РїРµСЂРµРІРѕРґРѕРІ Python
            if (typeof pythonTaskTranslations !== 'undefined') {
                let newText = textNodes;
                Object.keys(pythonTaskTranslations).forEach(key => {
                    if (newText.includes(key)) {
                        newText = newText.replace(new RegExp(key, 'g'), pythonTaskTranslations[key]);
                    }
                });
                
                if (newText !== textNodes) {
                    // РЎРѕС…СЂР°РЅСЏРµРј input, РµСЃР»Рё РѕРЅ РµСЃС‚СЊ
                    const input = option.querySelector('input');
                    option.textContent = newText;
                    if (input) option.prepend(input);
                }
            }
        } else if (courseType === 'database' && typeof window.translateDatabaseTasks === 'function') {
            // РСЃРїРѕР»СЊР·СѓРµРј СЃР»РѕРІР°СЂСЊ РїРµСЂРµРІРѕРґРѕРІ Database
            if (typeof dbTaskTranslations !== 'undefined') {
                let newText = textNodes;
                Object.keys(dbTaskTranslations).forEach(key => {
                    if (newText.includes(key)) {
                        newText = newText.replace(new RegExp(key, 'g'), dbTaskTranslations[key]);
                    }
                });
                
                if (newText !== textNodes) {
                    // РЎРѕС…СЂР°РЅСЏРµРј input, РµСЃР»Рё РѕРЅ РµСЃС‚СЊ
                    const input = option.querySelector('input');
                    option.textContent = newText;
                    if (input) option.prepend(input);
                }
            }
        }
    });
    
    // РџРµСЂРµРІРѕРґРёРј РєРЅРѕРїРєРё РІ С‚РµСЃС‚Р°С…
    const quizButtons = document.querySelectorAll('.quiz-submit, .test-submit, .quiz button, .test button');
    quizButtons.forEach(button => {
        const originalText = button.textContent.trim();
        
        if (originalText === 'РўРµРєСЃРµСЂСѓ') {
            button.textContent = 'РџСЂРѕРІРµСЂРёС‚СЊ';
        } else if (originalText === 'Р–С–Р±РµСЂСѓ') {
            button.textContent = 'РћС‚РїСЂР°РІРёС‚СЊ';
        } else if (originalText === 'РљРµР»РµСЃС–') {
            button.textContent = 'Р”Р°Р»РµРµ';
        } else if (originalText === 'ТљР°Р№С‚Р° Р±Р°СЃС‚Р°Сѓ') {
            button.textContent = 'РќР°С‡Р°С‚СЊ Р·Р°РЅРѕРІРѕ';
        }
    });
}
        }})}
// Р”РµР»Р°РµРј С„СѓРЅРєС†РёРё РґРѕСЃС‚СѓРїРЅС‹РјРё РіР»РѕР±Р°Р»СЊРЅРѕ
window.applyUniversalTranslations = applyUniversalTranslations;
window.applyBaseTranslations = applyBaseTranslations;
window.translateImages = translateImages;
        
window.updateVideos = updateVideos; 
