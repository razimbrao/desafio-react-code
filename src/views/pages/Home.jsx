import React from "react";
import "./css/Home.css";

const Home = () => {
    return (
        <main className="home">
            <section className="banner">
                <img src="/img/asta/asta-banner-main.png" />
            </section>
            <section className="home-content">
                <div className="home-content-left">
                    <img src="/img/home/asta-cat.svg" />
                    <img src="/img/home/asta-cat.svg" />
                    <img src="/img/home/asta-cat.svg" />
                    <img src="/img/home/asta-cat.svg" />
                    <img src="/img/home/asta-cat.svg" />
                </div>
                <div className="home-content-right">
                    <h2>Bem vindo à Asta Jr.</h2>
                    <p>
                        Seja na forma de site, sistema ou aplicativo,
                         a tecnologia encurta caminhos e potencializa os resultados do seu negócio.
                    </p>
                    <p>
                        Por isso, criamos soluções personalizadas para ajudar a sua empresa.
                    </p>
                    <p>
                        Agende agora uma reunião de diagnóstico gratuita!
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home;
