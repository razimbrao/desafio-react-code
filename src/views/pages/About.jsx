import "./css/About.css";
import React from "react";
import Navbar from '../../components/layouts/Navbar';
import CardAbout from "../../components/layouts/CardAbout";

const About = () => {
    return (
        <div>
            <Navbar />
            <section className="About">
                <section className="about-content">
                    <div className="about-title">
                        <h1>SOBRE NÓS</h1>
                    </div>
                    <div className="about-content-text">
                        <h2>A principal Empresa Junior de astronomia do Brasil</h2>
                        <p>Fundada em 2014, a Astra é uma empresa júnior que trabalha com soluções nas áreas de Astronomia, Geofísica e Meteorologia.
                            Como filosofia interna, buscamos sempre melhorar tudo o que estiver a nosso alcance,
                            visando sempre oferecer serviços de melhor qualidade a quem merece o melhor.<br />
                            A empresa é constituída e gerida por alunos do Instituto de Ciências Exatas da Universidade Federal de Juiz de Fora
                            (ICE-UFJF), sendo especialista na área.</p>
                    </div>
                    <div className="about-cards">
                        <CardAbout
                            h3="Missão"
                            text="Contribuir para o sucesso dos nossos clientes, promovendo o desenvolvimento profissional e pessoal dos membros."
                        />
                        <CardAbout
                            h3="Visão"
                            text="Ser referência no Brasil por meio de produtos escaláveis de impacto nacional."
                        />
                        <CardAbout
                            h3="Valores"
                            text="Crescer juntos, orgulho de ser Astra, desenvolvedora de talentos, empatia."
                        />
                    </div>
                    <div className="about-mej">
                        <h2>SOBRE O MEJ</h2>
                        <p>O MEJ tem como principal missão formar por meio da vivência
                            empresarial, empreendedores comprometidos e capazes de mudar o
                            Brasil. Diante da necessidade constante por mais inovação e impacto na
                            sociedade, aceitamos grandes desafios a fim de proporcionar um maior
                            crescimento na economia do país, buscando gerar valor em nossos
                            serviços e projetos, sempre cientes de nossa responsabilidade e
                            comprometimento, tendo nossas ações baseadas em princípios éticos e
                            morais. <br />
                            Somos uma rede de empresas conectadas, que juntas,
                            compartilhamos propósitos e causas comuns, na esperança de que toda
                            essa sinergia, proporcione um futuro melhor a todos.
                        </p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default About;
