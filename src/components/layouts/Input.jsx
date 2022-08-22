import React from 'react'
import '../css/Input.css'


const Input = (props) => {
    const isInput = props.isInput;
    if (isInput) {
        return (
            <div className="input-text-section">
                <label>
                    {props.label}
                </label>
                <input type={props.type} required={props.obrigatorio} placeholder={props.placeholder} />
            </div>
        )
    } else {
        return (
            <div className="input-text-section">
                <label>
                    {props.label}
                </label>
                <textarea rows={props.rows} required={props.obrigatorio} placeholder={props.placeholder} />
            </div>
        )
    }


}

export default Input