import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAvbX-HGMAmNIeK_1tRWKuiviZPClqCn_k",
    authDomain: "chatty-6835d.firebaseapp.com",
    projectId: "chatty-6835d",
    storageBucket: "chatty-6835d.appspot.com",
    messagingSenderId: "696632456156",
    appId: "1:696632456156:web:1ce194105b74ef9dd7d519"
  }).auth();