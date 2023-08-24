import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CHAT_ROUTE, LOGIN_ROUTE } from '@constans/consts';
import useAuth from '@hooks/useAuth';

const AuthRouteHandler = ({ privateRoutes, publicRoutes }) => {
  const { auth } = useAuth();
  const [user] = useAuthState(auth);
  const routesToRender = user ? privateRoutes : publicRoutes;
  const fallbackRoute = user ? CHAT_ROUTE : LOGIN_ROUTE;

  return { routesToRender, fallbackRoute };
};

export default AuthRouteHandler;
