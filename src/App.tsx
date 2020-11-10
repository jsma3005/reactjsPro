import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFound from './pages/NotFound/NotFound';
// import cls from './App.module.scss';
import routes from './route';

const App = () => {
  const match = useRoutes(routes);

  return match || <NotFound />;
};

export default App;
