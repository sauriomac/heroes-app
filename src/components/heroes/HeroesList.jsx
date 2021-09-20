import React, { useMemo } from 'react'
import getHeroByPublisher from '../../selectors/getHeroByPublisher'
import HeroesCard from './HeroesCard';

const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroByPublisher( publisher ), [ publisher ])

    // const heroes = getHeroByPublisher( publisher );
    return (
        <div className=" card-columns animate__animated animate__fadeIn ">
            <ul>
                {
                    heroes.map( hero => (
                        <HeroesCard 
                            key={ hero.id}
                            {...hero}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default HeroesList
