import React, { useContext, useState } from 'react'
import { AuthContext } from '..'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Avatar, Button, Container, Grid, TextField } from '@mui/material'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from './Loader'
import firebase from 'firebase/compat/app'


const Chat = () => {
  const { auth, firestore } = useContext(AuthContext)
  const [ user ] = useAuthState(auth)
  const [ value, setValue ] = useState('')
  const [ message, loading ] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('')

  }
  if (loading) {
    return <Loader />
  }
  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 50, marginTop: 2 }}
        justifyContent={'center'}
        alignItems={'center'}>
        <div style={{ width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto' }}>
          {message.map(message =>
            <div style={{
              padding: 5,
              margin: 10,
              border: user.uid === message.uid ? '2px solid #9c27b0' : '2px dashed red',
              marginLeft: user.uid === message.uid ? 'auto' : '10px',
              width: 'fit-content'
            }}>
              <Grid container >
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          )}
        </div>
        <Grid container direction='column' alignItems='flex-end'
          style={{ width: '80%' }}
        >
          <TextField variant='outlined' fullWidth maxRows={2} value={value}
            onChange={e => setValue(e.target.value)} />
          <Button onClick={sendMessage} variant='outlined' style={{ color: 'black', marginTop: 10 }}>Отправить</Button>

        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat