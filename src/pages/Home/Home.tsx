import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Layout from '../../components/Layout/Layout';
import Parallax from '../../components/Parallax/Parallax';
import { LinkEnum } from '../../route';
import cls from './Home.module.scss';

const HomePage = () =>{
    return(
        <div className={cls.root}>
            <Layout className={cls.contentWrap}>
                <div className={cls.contentText}>
                    <Heading tag={1}>
                        <b>Find</b> all your favourite <b>Pokemon</b>
                    </Heading>
                    <p>You can know what the type Pokemon, its strengths, disadvantages and abilities</p>
                    <Button style={{width: '50%', backgroundColor: '#73D677', fontSize: '18px'}} onClick={() => navigate(LinkEnum.POKEDEX)}>
                        See pokemons
                    </Button>
                </div>
                <div className={cls.contentParallax}>
                    <Parallax />
                </div>
            </Layout>
        </div>
    )
}

export default HomePage;