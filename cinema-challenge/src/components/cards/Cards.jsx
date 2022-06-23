import React from "react";
// react router dom
import { Link } from 'react-router-dom';
// Material-UI 
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
// API's url connections
import { IMAGE_PATH } from '../../data/api-connection';
// styles
import './styles/cards-styles.css';


const Cards = ( movieRequest ) => {

    const { id, title, poster_path, overview } = movieRequest;

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    

    return (
        <Card sx={{ maxWidth: 345 }} className='card-container'>
            <Link to={ `/${ id }` }>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={ IMAGE_PATH + poster_path }
                    alt={ `img: ${ title }` }
                    className="card-img-container"
                    />
                    <CardContent className="card-title-container">
                            { title }
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};

export default Cards;