import React from "react";
import "./css/Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home">
            <section className="banner">
                <img src="/img/asta/asta-banner-main.png" alt="banner da empresa" />
            </section>
            <section className="home-content">
                <div className="home-left">
                    <img src="/img/ilustrations/asta-cat-home.svg" alt="ilustração de um gato no espaço" />
                </div>
                <div className="home-right">
                    <div className="home-maintxt">
                        <h2 className="home-title">Veja o universo com outros olhos.</h2>
                        <p className="home-text">Rebum dolor diam sadipscing ipsum amet elitr elitr. Rebum voluptua aliquyam at duo stet amet sea, takimata dolore et et.</p>
                        <p className="home-text">Aliquyam dolor dolor takimata justo stet dolor kasd diam ea ut. Diam sadipscing duo erat est. Sit ipsum amet duo consetetur erat, elitr stet sed tempor at justo tempor diam, dolor magna eos dolor nonumy at clita stet invidunt, voluptua.</p>
                    </div>
                    
                    <div className="home-sub">
                        <div className="home-sub-item">
                            <h2 className="home-subtitle">Ficou interessado? <br/> Agende uma reunião com a gente!</h2>
                            <Link to="/contact" className="home-button">Quero agendar uma reunião</Link>
                        </div>
                        <div>
                            <img src="img/ilustrations/asta-rocket.svg" className="home-rocket" alt="ilustração de um foguete no espaço"/>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home;
