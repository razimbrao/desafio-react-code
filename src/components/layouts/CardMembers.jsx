import React from 'react'
import '../css/CardMembers.css'


const CardMembers = (props) => {
    return (
        <div className="card-box">
            <h3>{props.h3}</h3>
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default CardMembers