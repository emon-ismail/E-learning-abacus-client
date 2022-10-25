import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyD3gj9fvQ_MHNpyPanuivGZOY6EM3gMUqY",
  authDomain: "assignment-10-af771.firebaseapp.com",
  projectId: "assignment-10-af771",
  storageBucket: "assignment-10-af771.appspot.com",
  messagingSenderId: "887032439639",
  appId: "1:887032439639:web:3eccac5b025b331c0d1412"
}

const app = initializeApp(firebaseConfig)

export default app
