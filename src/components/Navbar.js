import React from 'react'
import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
const user = false


const Navbar = () => {
  return (
    <AppBar color={'secondary'} position="static">
      <Toolbar variant='dense'>
        <Grid container justifyContent={'flex-end'}>
          {user ?
            <Button style={{ color: 'white', borderColor: 'white', margin: '0px 3px' }} variant='outlined'>Выйти</Button>
            :
            <NavLink to={LOGIN_ROUTE}>
              <Button style={{ color: 'white', borderColor: 'white', margin: '0px 3px' }} variant='outlined'>Логин</Button>
            </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar