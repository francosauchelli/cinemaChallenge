import React, { useContext } from "react";
// Material-UI 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// local files - components
import SearcherContext from "../../context/SearcherContext";
// styles
import './styles/searcher-styles.css';


const Searcher = () => {

    // import the function from 'SearcherContext' to get the characters typed
    const { searchHandleChange } = useContext( SearcherContext );

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { m: 1 },
            }}
            className='input-searcher'
        >
            <TextField 
                id="demo-helper-text-misaligned-no-helper" 
                label="Buscar" 
                color="secondary" 
                onChange={ searchHandleChange }
            />
        </Box>
    )
};

export default Searcher;