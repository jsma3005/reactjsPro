import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFound from './pages/NotFound/NotFound';
// import cls from './App.module.scss';
import routes from './route';
import Header from './components/Header/Header';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : <NotFound />;
};

export default App;
