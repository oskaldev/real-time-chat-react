import React, { useContext } from 'react'
import { AuthContext } from '..'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, Container, Grid, TextField } from '@mui/material'

const Chat = () => {
  const { auth, firestore } = useContext(AuthContext)
  const [ user, loading, error ] = useAuthState(auth)
  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 50, marginTop: 2 }}
        justifyContent={'center'}
        alignItems={'center'}>
        <div style={{ width: '80%', height: '70vh', border: '1px solid gray', overFlowY: 'auto' }}>
        </div>
        <Grid container direction='column' alignItems='flex-end'
          style={{ width: '80%' }}
        >
          <TextField variant='outlined' fullWidth maxRows={2} />
          <Button style={{ color: 'black' }}>Отправить</Button>

        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat