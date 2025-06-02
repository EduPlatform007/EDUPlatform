// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1pXuc81ah7pUN4ftBhlAwLBfjl0nE6Pw",
  authDomain: "eduplatform-73b3b.firebaseapp.com",
  projectId: "eduplatform-73b3b",
  storageBucket: "eduplatform-73b3b.firebasestorage.app",
  messagingSenderId: "1054270820126",
  appId: "1:1054270820126:web:9979a09746e9d92819830f",
  measurementId: "G-XNGPYSQ780"
};

// Инициализация Firebase
if (typeof firebase !== 'undefined') {
    // Инициализируем Firebase только если библиотека загружена
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase успешно инициализирован');
} else {
    console.error('Firebase SDK не загружен, проверьте порядок загрузки скриптов');
}

// Получение доступа к сервисам
const auth = firebase.auth();
const db = firebase.firestore();

// Функции для работы с аутентификацией
function registerUser(email, password, name, surname, nickname, phone, city, birthdate) {
  return auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Пользователь зарегистрирован, теперь сохраняем дополнительные данные
      const user = userCredential.user;
      return db.collection('users').doc(user.uid).set({
        name: name,
        surname: surname || '',
        nickname: nickname || name, // Если никнейм не указан, используем имя
        email: email,
        phone: phone || '',
        city: city || '',
        birthdate: birthdate || '',
        language: 'kk', // По умолчанию казахский
        completedLessons: [],
        completedHomeworks: [],
        pendingHomeworks: [],
        createdAt: new Date(),
        lastLogin: new Date()
      });
    });
}

function loginUser(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      // После успешного входа получаем данные пользователя
      const user = userCredential.user;
      
      // Обновляем дату последнего входа
      db.collection('users').doc(user.uid).update({
        lastLogin: new Date()
      });
      
      return db.collection('users').doc(user.uid).get();
    })
    .then(doc => {
      if (doc.exists) {
        // Сохраняем данные в localStorage для удобства
        const userData = doc.data();
        userData.uid = doc.id;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        return userData;
      } else {
        console.log('Данные пользователя не найдены!');
        return null;
      }
    });
}

function logoutUser() {
  localStorage.removeItem('currentUser');
  return auth.signOut();
}

// Функция для получения текущего пользователя
function getCurrentUser() {
  return auth.currentUser;
}

// Функция для получения данных пользователя из Firebase
function getUserData() {
  const user = auth.currentUser;
  if (!user) return Promise.resolve(null);
  
  return db.collection('users').doc(user.uid).get()
    .then(doc => {
      if (doc.exists) {
        const userData = doc.data();
        userData.uid = user.uid;
        return userData;
      }
      return null;
    });
}

// Функция для обновления данных пользователя
function updateUserData(userData) {
  return new Promise((resolve, reject) => {
    const user = firebase.auth().currentUser;
    if (!user) {
      console.error('Пользователь не авторизован');
      reject(new Error('Пользователь не авторизован'));
      return;
    }
    
    const db = firebase.firestore();
    const userRef = db.collection('users').doc(user.uid);
    
    // Проверяем существование документа перед обновлением
    userRef.get().then(doc => {
      if (doc.exists) {
        // Документ существует, обновляем его
        return userRef.update(userData);
      } else {
        // Документ не существует, создаем новый
        console.log('Документ пользователя не существует, создаем новый');
        return userRef.set({
          email: user.email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          completedLessons: [],
          completedHomeworks: [],
          pendingHomeworks: [],
          ...userData
        });
      }
    }).then(() => {
      console.log('Данные пользователя успешно обновлены');
      resolve();
    }).catch(error => {
      console.error('Ошибка при обновлении данных пользователя:', error);
      reject(error);
    });
  });
}

// Функции для работы с прогрессом
function saveUserProgress(lessonId) {
  const user = auth.currentUser;
  if (!user) return Promise.reject('Пользователь не авторизован');

  // Получаем текущего пользователя из localStorage
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  // Добавляем урок в список завершенных, если его там еще нет
  if (!userData.completedLessons) {
    userData.completedLessons = [];
  }
  if (!userData.completedLessons.includes(lessonId)) {
    userData.completedLessons.push(lessonId);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  }

  // Обновляем данные в Firestore
  return db.collection('users').doc(user.uid).update({
    completedLessons: firebase.firestore.FieldValue.arrayUnion(parseInt(lessonId))
  });
}

function submitHomework(lessonId, fileName) {
  const user = auth.currentUser;
  if (!user) return Promise.reject('Пользователь не авторизован');

  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  // Добавляем домашнее задание в список отправленных
  if (!userData.pendingHomeworks) {
    userData.pendingHomeworks = [];
  }
  if (!userData.pendingHomeworks.includes(lessonId)) {
    userData.pendingHomeworks.push(lessonId);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  }

  // Обновляем данные в Firestore
  return db.collection('users').doc(user.uid).update({
    pendingHomeworks: firebase.firestore.FieldValue.arrayUnion(parseInt(lessonId)),
    homeworkFiles: firebase.firestore.FieldValue.arrayUnion({
      lessonId: parseInt(lessonId),
      fileName: fileName,
      submittedAt: new Date()
    })
  });
}

// Функция для синхронизации локальных данных с Firebase при загрузке страницы
function syncUserData() {
  const user = auth.currentUser;
  if (!user) return Promise.resolve(null);

  return db.collection('users').doc(user.uid).get()
    .then(doc => {
      if (doc.exists) {
        const userData = doc.data();
        userData.uid = doc.id;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        return userData;
      }
      return null;
    });
}

// Проверка состояния авторизации при загрузке страницы
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Пользователь авторизован:', user.email);
    syncUserData();
  } else {
    console.log('Пользователь не авторизован');
  }
});

// Функции для работы с базой данных
function syncData() {
  return getUserData()
    .then(userData => {
      if (!userData) return Promise.resolve();
      
      // Получаем данные из localStorage
      const localUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      
      // Объединяем данные из Firebase и localStorage
      // Для списков: берем уникальные элементы из обоих источников
      const mergedUser = {
        ...localUser,
        ...userData,
        completedLessons: [...new Set([...(userData.completedLessons || []), ...(localUser.completedLessons || [])])],
        completedHomeworks: [...new Set([...(userData.completedHomeworks || []), ...(localUser.completedHomeworks || [])])],
        pendingHomeworks: [...new Set([...(userData.pendingHomeworks || []), ...(localUser.pendingHomeworks || [])])]
      };
      
      // Сохраняем аватар, если он есть
      if (userData.avatarURL) {
        mergedUser.avatarURL = userData.avatarURL;
      }
      
      // Сохраняем объединенные данные в localStorage
      localStorage.setItem('currentUser', JSON.stringify(mergedUser));
      
      // Обновляем данные в Firebase
      return updateUserData(mergedUser);
    });
}

// Функция для отметки урока как завершенного
function completeLesson(lessonNum) {
  return getUserData()
    .then(userData => {
      if (!userData) return Promise.reject(new Error('Пользователь не найден'));
      
      // Получаем текущий список завершенных уроков
      const completedLessons = userData.completedLessons || [];
      
      // Добавляем новый урок, если его еще нет в списке
      if (!completedLessons.includes(lessonNum)) {
        completedLessons.push(lessonNum);
      }
      
      // Обновляем данные в Firebase
      return db.collection('users').doc(auth.currentUser.uid).update({
        completedLessons: completedLessons,
        lastModified: new Date()
      });
    });
}

// Экспортируем функции для использования в других файлах
window.firebaseAuth = {
  register: registerUser,
  login: loginUser,
  logout: logoutUser,
  getCurrentUser: getCurrentUser,
  getUserData: getUserData,
  updateUserData: updateUserData,
  syncData: syncData,
  completeLesson: completeLesson,
  submitHomework: submitHomework,
  saveProgress: saveUserProgress
};