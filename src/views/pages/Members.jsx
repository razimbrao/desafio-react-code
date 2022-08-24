import React, {useEffect, useState} from "react";
import CardMembers from "../../components/layouts/CardMembers";
import "./css/Members.css";

const Members = () => {
    const [members, setMembers] = useState([]);


    useEffect(() => {
        const url = "http://localhost:5000/members";
        async function getMembers() {
            const response = await fetch(url);
            const data = await response.json();
            setMembers(data);
        }
        getMembers();
    }, []);


    return (
        <section className="members-page">
            <section className="members-title">
                <h2>Membros</h2>
                <p>Conheça os membros da nossa Empresa Júnior!</p>
            </section>
            <section className="members-content">
                <div className="members-list">
                {
                    members.map((member, index) => (
                        <CardMembers 
                        key={index} 
                        name={member.name} 
                        email={member.email} 
                        aniversario={member.aniversario} 
                        departamentos={member.departamentos} 
                        cargo={member.cargo} />
                    ))
                }     
                </div>
            </section>
        </section>
    )
}

export default Members;