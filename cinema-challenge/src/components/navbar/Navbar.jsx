import React from "react";
// react router dom
import { Link } from "react-router-dom";
// Material-UI 
import { ButtonGroup, Button, Box } from "@mui/material";
// local files - components
import Searcher from '../searcher/Searcher.jsx';
// styles
import './styles/navbar-styles.css';

const Navbar = () => {
    
    return (
        <header className="main-header" >
            <Link to={ '/' }>
                <div className="logo-container">
                    <img src="/assets/logo-cinema.jpg" alt="" />
                </div>
            </Link>
            <div className="buttons-navbar-container">
                <Searcher />
                <Box className="buttons-group-nav">
                    <ButtonGroup  color="secondary" variant="text" aria-label="text button group" className="buttons-group">
                            <Button className='single-button-group'>
                                Home
                            </Button>
                            <Button className='single-button-group'>
                                Estrenos
                            </Button>
                            <Button className='single-button-group'>
                                Favoritas
                            </Button>
                            <Button className='last-single-button-group'>
                                Películas
                            </Button>
                    </ButtonGroup>
                </Box>
            </div>
        </header>
    )
}

export default Navbar;