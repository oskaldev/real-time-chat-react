import { Box, Button, Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AuthContext } from '..'

const Login = () => {

  const { auth } = useContext(AuthContext)

  const login = async () => {
    const provider = new GoogleAuthProvider()
    const { user } = await signInWithPopup(auth, provider)
    console.log(user)
  }
  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}>
        <Grid style={{ width: 400, background: 'lightgray' }}
          container
          alignItems={'center'}
          direction={'column'}>
          <Box p={5}>
            <Button onClick={login} style={{ color: 'black', borderColor: 'black', margin: '0px 3px' }} variant='outlined'>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login