let app_fireBase ={};

(() =>{
  const firebaseConfig = {
    apiKey: "AIzaSyDOlvMm2VN6viYiQcGPX7wEYkh3Wsx4YyQ",
    authDomain: "portifolio-f94f6.firebaseapp.com",
    databaseURL: "https://portifolio-f94f6-default-rtdb.firebaseio.com",
    projectId: "portifolio-f94f6",
    storageBucket: "portifolio-f94f6.appspot.com",
    messagingSenderId: "1005477449453",
    appId: "1:1005477449453:web:33ab9ac44d62cfd8b446e4"
  };
  
firebase.initializeApp(firebaseConfig)
app_fireBase = firebase;



app_fireBase.databaseApi.create(path, data, messageHandler)
})()