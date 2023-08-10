import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'

const Login = () => {
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
            <Button style={{ color: 'black', borderColor: 'black', margin: '0px 3px' }} variant='outlined'>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login