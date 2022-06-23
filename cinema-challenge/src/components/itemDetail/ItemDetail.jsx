import React from 'react';
// Material ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
// API's url connections
import { IMAGE_PATH } from '../../data/api-connection';
// styles
import './styles/itemDetail-styles.css';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ItemDetail = ({ data }) => {

    const { backdrop_path, poster_path, title, genres, runtime, overview, tagline } = data;

    return (
        <Grid container spacing={2}>
            <Grid item xs={24} md={8}>
                <div className='backdrop-image-container' >
                    <img src={ IMAGE_PATH + backdrop_path } alt="poster" />
                </div>
            </Grid>
            <Grid item xs={6} md={4} className="detail-info-container">
                <div className='top-detail-container'>
                    <div>
                        <Typography 
                            gutterBottom 
                            variant="h5" 
                            component="div"
                            className="detail-text-title"
                        >
                            { title }
                        </Typography>
                        <Typography >Género:
                            { genres.map( ( genre ) => ` ${ genre.name }` ).join( ',' ) }.
                        </Typography>
                        <Typography >Duración: { runtime }m</Typography>
                    </div>
                    <div className='poster-image-container' >
                        <img src={ IMAGE_PATH + poster_path } alt="poster" />
                    </div>
                </div>
                <Typography className="tagline-text">{ tagline }</Typography>
            </Grid>
            <Grid item xs={6} md={8} className="overview">
                <Typography >{ overview }</Typography>
            </Grid>
            <Grid item xs={6} md={4} className="social-networks-container">
                <button>
                    <FacebookIcon />
                    <p>Compartir</p>
                </button>
                <button>
                    <TwitterIcon />
                    <p>Twittear</p>
                </button>
            </Grid>
        </Grid>
    )
}

export default ItemDetail;