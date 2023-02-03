// import React, { useState } from 'react'

function Alert(props) {

    const capatalize = (word) => {
        const low = word.toLowertCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }

    return (
        props.alretMessage && <div className={`alert alert-${props.alretMessage.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alretMessage.type}</strong>:{props.alretMessage.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
export default Alert;
