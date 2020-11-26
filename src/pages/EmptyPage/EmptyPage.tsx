import React from 'react';
import cls from './EmptyPage.module.scss';

interface EmptyPageProps{
    title?: string
}

const EmptyPage: React.FC<EmptyPageProps> = ({title}) =>{
    return(
        <div className={cls.root}>
            <div>
                This is page for {title}
            </div>
        </div>
    )
}

export default EmptyPage;