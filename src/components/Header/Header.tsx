import React from 'react';
import cls from './Header.module.scss';
import {ReactComponent as PokemonLogo} from './assets/Group.svg';
import { A, usePath } from 'hookrouter';
import { GENERAL_MENU } from '../../route';
import cn from 'classnames';

// interface IMenu {
//     id: number,
//     value: string,
//     link: string
// }



const Header = () =>{
    const path = usePath();
    console.log(path);
    

    return(
        <div className={cls.root}>
            <div className={cls.wrap}>
                <div className={cls.pokemonLogo}>
                    <PokemonLogo />
                </div>
                <div className={cls.menuWrap}>
                    {
                        GENERAL_MENU.map(({title, link}) =>(
                            <A key={title} href={link} className={cn(cls.menuLink, {
                                [cls.activeLink]: link === path,
                            })}>{title}</A>
                        ))
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Header;