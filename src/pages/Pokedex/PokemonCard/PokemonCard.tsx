import React from 'react';
import Heading from '../../../components/Heading/Heading';
import cls from './PokemonCard.module.scss';
import './PokemonCard.css';
import { PokemonsRequest } from '../../../interface/pokemons';


const PokemonCard = (props: any) => {

    return (
        <>
            {
                props.data.pokemons.map((item: PokemonsRequest) => (
                    <div key={item.name_clean} className={cls.root}>
                        <div className={cls.infoWrap}>
                            <Heading tag={1}>
                                <p className={cls.titleName}>{item.name_clean}</p>
                            </Heading>
                            <div className={cls.statWrap}>
                                <div className={cls.statItem}>
                                    <div className={cls.statValue}>
                                        {item.stats.attack}
                                    </div>
                                    Attack
                                </div>
                                <div className={cls.statItem}>
                                    <div className={cls.statValue}>
                                        {item.stats.defense}
                                    </div>
                                    Defense
                                </div>
                            </div>
                            <div className={cls.labelWrap}>
                                {item.types.map((type: any, i: any) => (
                                    <span key={i} className={cls.label}>{type}</span>
                                ))}
                            </div>
                        </div>
                        <div className={cls.pictureWrap + ` ${item.types[0]}`}>
                            <img src={item.img} alt={item.name_clean} />
                        </div>
                    </div>
                ))
            }
        </>
    )
};

export default PokemonCard;