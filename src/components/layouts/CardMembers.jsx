import React from 'react'
import '../css/CardMembers.css'


const CardMembers = (props) => {
    return (
        <div className="card-members-box">
            <div className='card-members-title'>
                <h2>{props.name}</h2>
            </div>
            <div className='card-members-content'>
                <p>
                    E-mail: <span>{props.email}</span>
                </p>
                <p>
                    Aniversário: <span className='props-text'>{props.aniversario}</span>
                </p>
                <p>
                    Departamentos: <span className='props-text'>{props.departamentos}</span>
                </p>
                <p>
                    Cargo: <span className='props-text'>{props.cargo}</span>
                </p>
            </div>
        </div>
    )
}

export default CardMembers