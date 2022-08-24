import React from 'react'
import '../css/CardAbout.css'


const CardAbout = (props) => {
    return (
        <div className="card-about-box">
            <h3>{props.h3}</h3>
            <p>
                {props.text}
            </p>
        </div>
    )
}

export default CardAbout