import React from "react";
import "./css/Home.css";

const Home = () => {
    return (
        <section className="home">
            <section className="banner">
                <img src="/img/asta/asta-banner-main.png" alt="banner da empresa"/>
            </section>
            <section className="home-content">
                <section className="home-left">
                    <img src="/img/cat/asta-cat-home.svg" alt="ilustração"/>
                    <img src="/img/cat/asta-cat-home.svg" alt="ilustração"/>
                    <img src="/img/cat/asta-cat-home.svg" alt="ilustração"/>
                    <img src="/img/cat/asta-cat-home.svg" alt="ilustração"/>
                    <img src="/img/cat/asta-cat-home.svg" alt="ilustração"/>
                    <img src="/img/cat/asta-cat-home.svg" alt="ilustração"/>
                    <img src="/img/cat/asta-cat-home.svg" alt="ilustração"/>
                    <img src="/img/cat/asta-cat-home.svg" alt="ilustração"/>
                    <img src="/img/cat/asta-cat-home.svg" alt="ilustração"/>
                </section>
                <section className="home-right">
                    <h2>Bem vindo à Asta Jr.</h2>
                </section>
            </section>
        </section>
    )
}

export default Home;
