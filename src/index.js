import React, { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

firebase.initializeApp(
  {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  }
)
export const AuthContext = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

const root = createRoot(document.getElementById('root'))
root.render(
  <AuthContext.Provider value={{
    firebase,
    firestore,
    auth
  }}>
    <App />
  </AuthContext.Provider>
)
const devMode = process.env.NODE_ENV === 'development'
if (devMode && module && module.hot) {
  module.hot.accept()
}