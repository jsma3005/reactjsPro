import React from 'react';
import cn from 'classnames';
import cls from './App.modules.scss';
import './custom.css'

const App = () =>{
    return (
        <div className={cn(cls.header, 'color')}>
            Hello, ReactJS!
        </div>
    )
}

export default App