import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { firebaseConfig } from './firebaseConfig'


const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export const firestore = app.firestore()

export default app
