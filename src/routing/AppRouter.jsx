import React from 'react';
import { privateRoutes, publicRoutes } from './routes';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import AuthRouteHandler from '@HOC/AuthRouteHandler';

const AppRouter = () => {
  const { routesToRender, fallbackRoute } = AuthRouteHandler({
    privateRoutes,
    publicRoutes,
  });

  return (
    <Routes>
      {routesToRender.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path='*' element={<Navigate to={fallbackRoute} replace />} />
    </Routes>
  );
};

export default AppRouter;
