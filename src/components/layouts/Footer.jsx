import "../css/Footer.css";
import React from "react";

const Footer = () => {
    return(
        <footer>
            <div className="footer-content">
                <div className="logo">
                    <img src="/img/astra/logo.png"/>
                </div>
                <div className="contact">
                    <p>
                        rafael.zimbrao@codejr.com.br
                    </p>
                    <p>
                        Rua José Lourenço Kelmer, UFJF, <br/>
                        Instituto de Ciências Exatas
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