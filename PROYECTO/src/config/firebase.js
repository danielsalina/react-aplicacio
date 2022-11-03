import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// RECUERDEN COLOCAR SU CONFIGURACIÓN EN LA SIGUIENTE CONSTANTE
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(firebaseConfig)
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()

export default firebase
