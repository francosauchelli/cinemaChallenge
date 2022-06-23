import React, { useEffect, useState } from 'react';
// react router dom
import { useParams } from 'react-router-dom';
// Material ui
import Container from '@mui/material/Container';
// local files - components
import ItemDetail from '../itemDetail/ItemDetail';
// API's url connections
import { API_MOVIE_DETAIL } from '../../data/api-connection.js';
// styles
import './styles/detailContainer-styles.css'


const DetailContainer = () => {

    const [ movieData , setMovieData ] = useState();
    const [ loading, setLoading ] = useState( true );
    
    const getMovieDetail = async ( movieID ) => {
        try {
            const url = API_MOVIE_DETAIL.replace( 'movie_id', movieID );
            const res = await fetch( url );
            const data = await res.json();
            return data;
        }
        catch (e) {
            console.log(e)
        }
    }

    // get the id
    const { id } = useParams();

    useEffect( () => {

        getMovieDetail( id ).then(( data ) => {
            setMovieData( data );
            setLoading( false );
        });

    }, [ id ]);

    return (
        <Container fixed className="detail-container">
            { !loading ?
                ( <ItemDetail data={ movieData } /> )
                : ( <h1>CAMPERA</h1> ) 
            }
        </Container>
    )
}

export default DetailContainer;