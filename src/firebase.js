import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACXrZzGCdQcLV8AZCrOEHLDtvn2wGmyd4",
  authDomain: "calidad-ecommerce.firebaseapp.com",
  projectId: "calidad-ecommerce",
  storageBucket: "calidad-ecommerce.appspot.com",
  messagingSenderId: "782794406271",
  appId: "1:782794406271:web:4f9de1e4db36810036c24a",
  measurementId: "G-TSV5FX38NQ",
};

// inicializar el app de firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// objeto de autenticacion
const auth = firebase.auth();

// lo exportamos para usarlo en el login
export { auth, firebaseApp };
