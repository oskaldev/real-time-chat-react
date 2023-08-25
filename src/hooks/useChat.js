  import { useAuthState } from 'react-firebase-hooks/auth'
  import { useCollectionData } from 'react-firebase-hooks/firestore'
  import firebase from 'firebase/compat/app'
  import useAuth from '@hooks/useAuth'

  const useChat = () => {
    const { auth, firestore } = useAuth()
    const [ user ] = useAuthState(auth)
    const [ message, loading ] = useCollectionData(
      firestore.collection('messages').orderBy('createdAt'),
    )

    const sendMessage = async text => {
      firestore.collection('messages').add({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    }


    return { user, message, loading, sendMessage }
  }

  export default useChat
