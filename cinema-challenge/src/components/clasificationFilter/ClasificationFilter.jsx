import React, { useState } from 'react';
// Material ui
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
// styles
import './styles/clasificationFilter-styles.css';


function ClasificationFilter( { clasAverage, stateSetter }) {
    // childs received from 'ItemsListContainer

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography color="#f3e5f5" component="legend">Clasificación</Typography>
            <Rating
                name="simple-controlled"
                value={ clasAverage }
                onChange={(event, newValue) => {
                    stateSetter(newValue);
                }}
                className="rating-clas-filter"
            />
        </Box>
    );
}

export default ClasificationFilter;