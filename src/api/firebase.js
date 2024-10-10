import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { resetUser, setUser } from '../store/authSlice'
import store from '../store/store'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export async function login() {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log('user', user)
    return user
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function logout() {
  try {
    await signOut(auth)
    // return null
  } catch (error) {
    console.error(error)
    throw error
  }
}

export function monitorAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch(
        setUser({ displayName: user.displayName, email: user.email })
      )
    } else {
      store.dispatch(resetUser())
    }
  })
}
