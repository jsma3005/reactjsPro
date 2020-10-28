import React from 'react';
import cn from 'classnames';
import cls from './App.modules.scss';
import './custom.css'

const App = () =>{
    return (
        <div className={cn(cls.header, 'color')}>
            This is App Component!
        </div>
    )
}

export default App