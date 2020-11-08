import React from 'react';
import cls from './Header.module.scss';
import {ReactComponent as PokemonLogo} from './assets/Group.svg';

interface IMenu {
    id: number,
    value: string,
    link: string
}

const Header = () =>{

    const MENU: IMenu[] = [
        {
            id: 1,
            value: 'Home',
            link: '/'
        },
        {
            id: 2,
            value: 'Pokedex',
            link: '/pokedes'
        },
        {
            id: 3,
            value: 'Legendaries',
            link: '#'
        },
        {
            id: 4,
            value: 'Documentation',
            link: '#'
        }
    ]

    return(
        <div className={cls.root}>
            <div className={cls.wrap}>
                <div className={cls.pokemonLogo}>
                    <PokemonLogo />
                </div>
                <div className={cls.menuWrap}>
                    {
                        MENU.map(({value, link, id}) =>(
                            <a key={id} href={link} className={cls.menuLink}>{value}</a>
                        ))
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Header;