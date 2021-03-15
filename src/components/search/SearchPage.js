import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchPage = ( { history } ) => {

    
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({ searchText: q });
    const { searchText } = formValues;

  
    
    // const heroesFitered = getHeroesByName( searchText );
    const heroesFitered = useMemo(() => getHeroesByName( q ), [q])
    const handleSearch = ( e ) => {
        e.preventDefault()

        history.push(`?q=${ searchText }`);
    };
    
    return (
        <div>
            <div className="d-none d-sm-block">
                <h1>Search heroes</h1>
                <hr />
            </div>

            <div className="row animate__animated animate__fadeIn">

                <div className="col-md-4">

                    <form onSubmit={ handleSearch }>

                    <div className="d-grid gap-2 mb-3">
                        <input 
                            type="text" 
                            name="searchText"
                            placeholder="Find you hero"
                            className="form-control"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button 
                            type="submit"
                            className="btn btn-outline-primary"
                        >
                            Search
                        </button>
  
                    </div>
                        
                    </form>

                </div>

                <div className="col-md-6 offset-lg-1">
                    
                    <h4>Results:</h4>
                    
                    {
                        ( q === '' ) &&
                        <div className="alert alert-secondary">
                            Search a hero
                        </div>
                    }
                    {
                        ( q !== ''  && heroesFitered.length === 0 ) &&
                        <div className="alert alert-danger">
                            There is not a hero with <strong>{ q }</strong>
                        </div>
                    }
                    {
                        heroesFitered.map( hero => (
                            <HeroCard   
                                key={ hero.id } 
                                { ...hero } 
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}
