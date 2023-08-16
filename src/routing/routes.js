import React from 'react'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../constans/consts'
import Chat from '@components/screens/chat/Chat'
import Login from '@components/screens/login/Login'


export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  }
]
export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  }
]