import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import getHeroByid from '../../selectors/getHeroByid';

const HeroesScreen = () => {
    const { heroeId }= useParams();

    const hero = useMemo(() => getHeroByid( heroeId ), [ heroeId ])

    // const hero = getHeroByid( heroeId );
        if ( !hero){
            return <Redirect to="/" />
        }

    const {
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters,
    } = hero;
    return (
        <div className="row mt-5">
            <div className=" col-4">
                <img src={`../asset/heroes/${heroeId}.jpg`} alt={superhero} 
                className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">alter ego: { alter_ego}</li>
                    <li className="list-group-item"> publisher : { publisher }</li>
                    <li className="list-group-item"> first appearance { first_appearance }</li>
                </ul>
                <h5> characters </h5>
                <p> { characters }</p>
            </div>
        </div>
    )
}

export default HeroesScreen