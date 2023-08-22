import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material';
import React, { useContext } from 'react';
import { StyleMuiButton } from '../../styles';
import { AuthContext } from '@providers/AuthProvider';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '@constans/consts';

const Navbar = () => {
  const { auth } = useContext(AuthContext) || {};
  const [user] = auth ? useAuthState(auth) : [null];
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      // Обработка ошибки, если не удалось выйти
      console.error('Ошибка при выходе:', error);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={'secondary'}>
        <Toolbar variant='dense'>
          <Grid container justifyContent={'flex-end'}>
            {user ? (
              <StyleMuiButton onClick={handleSignOut}>Выйти</StyleMuiButton>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <StyleMuiButton>Логин</StyleMuiButton>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
