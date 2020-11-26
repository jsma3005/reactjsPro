import React, { useState, useEffect } from 'react';
import Heading from '../../components/Heading/Heading';
import Layout from '../../components/Layout/Layout';
import PokemonCard from './PokemonCard/PokemonCard';
import cls from './Pokedex.module.scss';
import useData from '../../hook/getData';
import { IPokemons } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IQuery{
    name?: string
}

const PokedexPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [query, setQuery] = useState<IQuery>({});

    const debouncedValue = useDebounce(searchValue, 500);

    const {
        data,
        isLoading,
        isError
    } = useData<IPokemons>('getPokemons', query, [debouncedValue]);   

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchValue(e.target.value);
        setQuery((state: IQuery) => ({
            ...state,
            name: e.target.value
        }))
    }

    if(isError){
        return <div>Something wrong!</div>
    }

    return (
        <div className={cls.root}> 
            <Layout>
                <div className={cls.title}>
                    <Heading tag={1}>
                        {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favourite
                    </Heading>
                    <div>
                        <input placeholder="Encuentra tu pokémon..." className={cls.search} type="text" value={searchValue} onChange={handleSearchChange} />
                    </div>
                    <div className={cls.cards}>
                        {/* {data.pokemons.map(item => <div key={item.id}>{item.name}</div>)} */}
                        {
                            !isLoading && <PokemonCard data={data} />
                        }
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default PokedexPage;