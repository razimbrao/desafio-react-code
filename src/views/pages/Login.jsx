import React from "react";
import "./css/Login.css";
import Input from "../../components/layouts/Input";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="login-page">
            <section className="login-left">
                <img src="/img/ilustrations/asta-cat-login.svg" alt="ilustração de um gato" />
            </section>

            <section className="login-right">
                <div className="login-title">
                    <p id="lg-title">É um membro?</p>
                    <p id="lg-subtitle">Entre em nosso sistema!</p>
                </div>
                <form className="login-form">
                    <div className="input-group">
                        <Input isInput={true} label="E-mail" placeholder="exemplo@email.com" type="email" obrigatorio={false} />
                        <Input isInput={true} label="Senha" placeholder="Senha" type="password" obrigatorio={false} />
                    </div>
                    <div className="login-button-div">
                        <Link to={"/admin"}><button className="login-button">Login</button></Link>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Login;
