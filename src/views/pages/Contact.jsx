import React from "react";
import "./css/Contact.css";
import Input from "../../components/layouts/Input";

const Contact = () => {
    return (
        <section className="contact-page">
            <section className="title">
                <h2>ENTRE EM CONTATO COM A ASTA JR.</h2>
                <p>Marque uma reunião com a gente!</p>
            </section>
            <section className="contact-form">
                <form>
                    <Input isInput={true} label="Nome *" placeholder="Digite seu nome" type="text" obrigatorio={true} />
                    <Input isInput={true} label="E-mail *" placeholder="Digite seu endereço de e-mail" type="email" obrigatorio={true} />
                    <Input isInput={true} label="Assunto *" placeholder="Digite o assunto da mensagem" type="text" obrigatorio={true} />
                    <Input isInput={false} label="Mensagem *" placeholder="Digite o conteúdo da mensagem" type="text" obrigatorio={true} />
                    <div>
                        <button className="button-form">Enviar</button>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Contact;
