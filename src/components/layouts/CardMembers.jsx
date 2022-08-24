import React from 'react'
import '../css/CardMembers.css'


const CardMembers = (props) => {
    const depList = props.departamentos.join('; ');
    const dateFormated = props.aniversario.split('/').reverse().join('/');
    return (
        <div className="card-members-box">
            <div className='card-members-title'>
                <span id='person-icon' className="material-symbols-outlined">account_circle</span>
                <h2>
                      {props.name}
                </h2>
            </div>
            <div className='card-members-content'>
                <p>
                    E-mail: <span>{props.email}</span>
                </p>
                <p>
                    Aniversário: <span className='props-text'>{dateFormated}</span>
                </p>
                <p>
                    Departamentos: <span className='props-text'>{depList}</span>
                </p>
                <p>
                    Cargo: <span className='props-text'>{props.cargo}</span>
                </p>
            </div>
        </div>
    )
}

export default CardMembers