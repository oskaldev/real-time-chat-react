import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import loginStyles from './loginStyles';
import useAuth from '@hooks/useAuth';
import { loginWithGoogle } from '@helpers/authHelpers';

const Login = () => {
  const { auth } = useAuth();
  const handleLoginWithGoogle = async () => {
    await loginWithGoogle(auth);
  };
  return (
    <Container>
      <Grid container style={loginStyles.mainGrid} alignItems='center' justifyContent='center'>
        <Grid style={loginStyles.buttonGrid} container alignItems='center' direction='column'>
          <Box p={5}>
            <Button onClick={handleLoginWithGoogle} style={loginStyles.button} variant='outlined'>
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
