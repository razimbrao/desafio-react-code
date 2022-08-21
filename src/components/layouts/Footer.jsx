import "../css/Footer.css";
import React from "react";

const Footer = () => {
    return(
        <footer>
            <div className="footer-content">
                <div className="logo">
                    <img src="/img/asta/asta-banner-main.png"/>
                </div>
                <div className="contact">
                    <p id="footer-title">
                        Asta Junior - Consultoria em Astronomia
                    </p>
                    <p>
                        rafael.zimbrao@codejr.com.br
                    </p>
                    <p>
                        Rua José Lourenço Kelmer, UFJF, <br/>
                        Instituto de Ciências Exatas <br/>
                        <a href="https://storyset.com/space">Space illustrations by Storyset</a>
                    </p>
                </div>
                <div className="social">
                    <a target="__blank" href="https://www.facebook.com">
                        <img src="/img/social/facebook.svg"/>
                    </a>
                    <a  target="__blank" href="https://www.instagram.com">
                        <img src="/img/social/instagram.svg"/>
                    </a>
                    <a  target="__blank" href="https://www.linkedin.com">
                        <img src="/img/social/linkedin.svg"/>
                    </a>
                </div> 
            </div>
        </footer>
    )
};
export default Footer;