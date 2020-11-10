import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button/Button';
import cls from './NotFound.module.scss';
import TeamRocket from './img/Team_Rocket_trio_OS 1.png';

const NotFound = () =>{
    return(
        <div className={cls.root}>
            <div className={cls.wrap}>
                <div className={cls.text}>
                    404
                </div>
                <div className={cls.layer}>
                    <img src={TeamRocket} alt="Team Rocket" />
                </div>
                <div className={cls.subTitle}>
                    <span>The rocket team</span> has won this time.
                </div>
                <Button
                    style={{width: '231px', backgroundColor: '#F2CB07', fontSize: '18px'}}
                    onClick={() => navigate('/')}
                >
                    Return
                </Button>
            </div>
        </div>
    )
}

export default NotFound;