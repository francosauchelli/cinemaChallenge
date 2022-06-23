import React, { useState, useEffect, useContext } from "react";
// Material ui
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/400.css';
// local files - components
import Cards from '../cards/Cards';
import ClasificationFilter from "../clasificationFilter/ClasificationFilter";
import SearcherContext from "../../context/SearcherContext";
// API's url connections
import { API_DISCOVER, API_SEARCH } from '../../data/api-connection.js';
// styles
import './styles/itemsListContainer-styles.css';


const ItemsListContainer = () => {

    // =========== SearchContext =================
    const { query } = useContext( SearcherContext );

    const searchMovie = async ( query ) => {
        try {
            const url = `${ API_SEARCH }${ query }`;
            const res = await fetch( url );
            const data = await res.json();
            setMovies( data.results )
        }
        catch(e) {
            console.log(e);
        }
    }
    // =========== End SearchContext =================


    // =========== set ClasificationFilter =================

    const [ clasFilter, setClasFilter ] = useState( 0 );
    const [ startRange, setStartRange ] = useState( 0 );
    const [ endRange, setEndRange ] = useState( 0 );

    useEffect( () => {
        if ( clasFilter!==null && clasFilter!==0 ) {
            setStartRange( ( clasFilter*2 ) - 1);
            setEndRange( clasFilter*2 );
        }

    }, [ clasFilter ])
    // =========== End set ClasificationFilter =================


    const [ movies, setMovies ] = useState( [] );

    // shows the "discover's" movies 
    useEffect( () => {

        // if the user doesnt types, the app fetchs "API_DISCOVER", otherwise it fetchs API_SEARCH
        query.length === 0 ? 
            (   fetch( API_DISCOVER )
                    .then( (res)=>res.json())
                    .then( data=> {
                        setMovies( data.results );
                    })
            ) :
        ( searchMovie( query ) );

    }, [ query ]);

    
    return (
        <div className="items-container">
            <Typography color="#f3e5f5" variant="subtitle1" gutterBottom className='cards-container-title'>
                { query.length===0 ? ( 'Descubre' ) : (` Búsqueda: ${ query }` )}
            </Typography>
            <div className="clas-filter-container">
                <ClasificationFilter 
                    clasAverage={ clasFilter }
                    stateSetter={ setClasFilter }
                />
            </div>
            <div className="cards-container">
                { movies.map( ( movieRequest ) => {

                    if ( clasFilter===0 || clasFilter===null ) {
                        return (
                            <Cards key={ movieRequest.id } {...movieRequest} />
                        )
                    } else {
                        const { vote_average } = movieRequest;
                        if ( startRange<=vote_average && vote_average>=endRange ) {
                            return ( 
                                <Cards key={ movieRequest.id } {...movieRequest} />
                            )
                        }
                    }}
                )}
            </div>
        </div>
    )
};

export default ItemsListContainer;