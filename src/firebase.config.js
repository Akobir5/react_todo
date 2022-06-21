import {initializeApp } from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyCb3qDXhvmC7vI3iwgh6pOwIDtNVQmVSAg",
    authDomain: "nam-nam-pizza.firebaseapp.com",
    databaseURL: "https://nam-nam-pizza-default-rtdb.firebaseio.com",
    projectId: "nam-nam-pizza",
    storageBucket: "nam-nam-pizza.appspot.com",
    messagingSenderId: "1031313298921",
    appId: "1:1031313298921:web:dfcc444101885dc35ca778",
    measurementId: "G-GQJBZ0KXNX"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db;