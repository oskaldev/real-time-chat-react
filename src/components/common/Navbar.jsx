import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material';
import React from 'react';
import { StyleMuiButton } from '../../styles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '@constans/consts';
import { handleSignOut } from '@helpers/authHelpers';
import useAuth from '@hooks/useAuth';

const Navbar = () => {
  const { auth } = useAuth() || {};
  const [user] = auth ? useAuthState(auth) : [null];

  const handleSignOutClick = () => {
    handleSignOut(auth);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={'secondary'}>
        <Toolbar variant='dense'>
          <Grid container justifyContent={'flex-end'}>
            {user ? (
              <StyleMuiButton onClick={handleSignOutClick}>Выйти</StyleMuiButton>
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
