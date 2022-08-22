import React from "react";
import "./css/Contact.css";

const Contact = () => {
    return (
        <section className="contact-page">
            <section className="title">
                <h2>ENTRE EM CONTATO COM A ASTA JR.</h2>
                <p>Faça um orçamento com a gente :)</p>
            </section>
            <section className="contact-form">
                <form>
                    <div className="text-section">
                        <label>Nome</label>
                        <input placeholder="Digite seu nome" type="text"/>
                    </div>
                    <div className="text-section">
                        <label>E-mail</label>
                        <input placeholder="Digite seu endereço de e-mail" type="email"/>
                    </div>
                    <div className="text-section">
                        <label>Assunto</label>
                        <input placeholder="Digite o assunto da mensagem" type="text"/>
                    </div>
                    <div className="text-section">
                        <label>Mensagem</label>
                        <textarea rows="3" placeholder="Escreva sua mensagem"></textarea>
                    </div>
                    <div >
                        <button className="button-form">Enviar</button>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Contact;
