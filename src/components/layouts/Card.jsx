import React from 'react'
import '../css/Card.css'


const Card = (props) => {
        return (
            <div className="card-box">
                <h3>{props.h3}</h3>
                <p>
                    {props.text}
                </p>
            </div>
        )
}

export default Card