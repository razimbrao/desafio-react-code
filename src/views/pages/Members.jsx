import React from "react";
import CardMembers from "../../components/layouts/CardMembers";
import "./css/Members.css";

const Members = () => {
    return (
        <section className="members-page">
            <section className="members-title">
                <h2>Membros</h2>
                <p>Conheça os membros da nossa Empresa Júnior!</p>
            </section>
            <section className="members-content">
                <div className="members-list">
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                    <CardMembers name="Rafael de Oliveira Zimbrão" email="rafael.zimbrao@codejr.com.br" departamentos="marketing" aniversario="06/22" cargo="assessor"/>
                </div>
            </section>
        </section>
    )
}

export default Members;