import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';

const routeConfig = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
];

export const AppRoutes: React.FC = () => {
  const routes = useRoutes(routeConfig);
  return routes;
};
