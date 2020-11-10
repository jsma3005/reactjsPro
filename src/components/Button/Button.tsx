import React from 'react';
import cls from './Button.module.scss';

interface ButtonProps{
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    style: {
        width: string,
        backgroundColor: string,
        fontSize: string
    }
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style }) =>{
    return(
        <button
            type="button"
            className={cls.root}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    )
}

export default Button;