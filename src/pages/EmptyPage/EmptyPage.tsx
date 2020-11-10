import React from 'react';
import Header from '../../components/Header/Header';
import cls from './EmptyPage.module.scss';

interface EmptyPageProps{
    title?: string
}

const EmptyPage: React.FC<EmptyPageProps> = ({title}) =>{
    return(
        <div className={cls.root}>
            <Header />
            <div>
                This is page for {title}
            </div>
        </div>
    )
}

export default EmptyPage;