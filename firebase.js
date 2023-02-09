import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBfXpEt5qEHoPqWPOgfJz1IPXN5yfKNwdQ",
    authDomain: "chatbot-9ad34.firebaseapp.com",
    projectId: "chatbot-9ad34",
    storageBucket: "chatbot-9ad34.appspot.com",
    messagingSenderId: "449782847188",
    appId: "1:449782847188:web:7b416f568eb51db12e8d41"
}
  
  
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }