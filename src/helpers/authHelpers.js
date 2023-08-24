import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

export const handleSignOut = async (auth) => {
  try {
    await auth.signOut()
  } catch (error) {
    console.error('Ошибка при выходе:', error)
  }
}

export const loginWithGoogle = async (auth) => {
  const provider = new GoogleAuthProvider()
  await signInWithRedirect(auth, provider)
}

