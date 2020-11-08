import React from 'react';
// import cn from 'classnames';
import cls from './App.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  console.log('Some log');

  return (
        // <div className={cn(cls.header, 'color')}>Hello, ReactJS!</div>
        <>
            <Header />
                <div className={cls.mainContent}>
                    <h1>MAIN</h1>
                </div>
            <Footer />
        </>
    );
};

export default App;
