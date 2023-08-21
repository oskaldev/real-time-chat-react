import React, { useContext } from 'react';
import { AuthContext } from '@providers/AuthProvider';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CHAT_ROUTE, LOGIN_ROUTE } from '@constans/consts';

const AuthRouteHandler = ({ privateRoutes, publicRoutes }) => {
  const { auth } = useContext(AuthContext);
  const [user] = useAuthState(auth);
  const routesToRender = user ? privateRoutes : publicRoutes;
  const fallbackRoute = user ? CHAT_ROUTE : LOGIN_ROUTE;

  return { routesToRender, fallbackRoute };
};

export default AuthRouteHandler;
