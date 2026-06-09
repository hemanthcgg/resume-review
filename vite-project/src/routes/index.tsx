import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/home-page/HomePage';

const routeConfig = [
  {
    path: '/',
    element: <HomePage />
  },
  // {
  //   path: '/login',
  //   element: <Login />
  // },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
];

export const AppRoutes: React.FC = () => {
  const routes = useRoutes(routeConfig);
  return routes;
};
