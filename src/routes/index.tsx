import React from 'react';
import Home from '../pages/Home';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
];

export const AppRouter: React.FC = () => {
  return <Home />;
};