import React from "react";
// styles
import './styles/footer-styles.css';

const Footer = () => {
    
    return (
        <footer className="main-footer" >
            <div className="logo-footer">
                <img src="/assets/logo-cinema.jpg" alt="" />
            </div>
            <div className="lists-links-footer">
                <div>
                    <h4>Cartelera</h4>
                </div>
                <div>  
                    <ul>
                        <li><h4>Cines</h4></li>
                        <li>CC Zona Norte</li>
                        <li>CC Zona Centro</li>
                        <li>CC Zona Sur</li>
                        <li>CC Shopping</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><h4>Comercial</h4></li>
                        <li>Bases Venta Online</li>
                        <li>Ventas Corporativas</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;