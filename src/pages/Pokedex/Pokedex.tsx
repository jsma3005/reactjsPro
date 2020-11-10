import React from 'react';
import Header from '../../components/Header/Header';
import PokemonCard from './PokemonCard/PokemonCard';
import cls from './Pokedex.module.scss';


const PokedexPage = () => {
    return (
        <>
            <Header />
            <div className={cls.root}>     
                <PokemonCard />
            </div>
        </>
    );
};

export default PokedexPage;