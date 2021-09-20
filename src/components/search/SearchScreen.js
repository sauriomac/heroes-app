import React from 'react'
import { useLocation } from 'react-router-dom';
// import { heroes } from '../../data/Heroes'
import { useForm } from '../../hooks/useForm';
import HeroesCard from '../heroes/HeroesCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import queryString from 'query-string';


const SearchScreen = ({ history }) => {

    const location = useLocation();
    // console.log(location.search);
    const {q=''} = queryString.parse( location.search );
   
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
     
    
    const { searchText } = formValues;
    const heroesFiltered = getHeroesByName( searchText );
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
        
    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
        <div className="row">
            <div className="col-5">  
            <h4>Search Form</h4>
            <hr/>

            <form onSubmit={handleSearch}>
                <input 
                type="text" 
                placeholder="Find your hero"
                className="form-control"
                name="searchText"
                value={ searchText }
                onChange={ handleInputChange }
                autoComplete="off"
                />
                    <button
                    type="submit"
                    className="btn m-1 btn-block btn-outline-primary"
                     >
                        Search...
                    </button>
            </form>


            </div>

            <div className="col-7">

                <h4> Results </h4>

                {
                        heroesFiltered.map( hero =>(
                            <HeroesCard
                                key={hero.id}
                                {...hero}/>

                        ))
                }

            </div>
            </div>
        </div>
    )
}

export default SearchScreen
