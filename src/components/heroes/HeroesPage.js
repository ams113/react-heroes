import React, { useMemo } from 'react'
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from '../../selectors/getHeroById';

export const HeroesPage = ( {history} ) => {

    const { id } = useParams();

    // const hero = getHeroById(id);
    const hero = useMemo(() => getHeroById(id), [id]);


    if ( !hero ) {

        return <Redirect to="/" />
    }

    const handleReturn = () => {

        
        ( history.length < 3 ) 
            ? history.push('/') 
            : history.goBack();
    };
    

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            
            <div className="col-4">
                <img 
                    src={`../assets/${ id }.jpg` }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__zoomInDown"
                />
            </div>

            <div className="col-8 mt-2 animate__animated animate__fadeIn">

                <h3>{ superhero }</h3>

                <ul className="list-group list-group-flush">

                    <li className="list-group-item">
                        <b>Alter ego: </b> { alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b> { first_appearance}
                    </li>
                </ul>

                <h5> Characters </h5>
                <p> {characters} </p>
                
                <button 
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={ handleReturn }
                >
                    Back
                </button>
            </div>
        </div>
    )
}
