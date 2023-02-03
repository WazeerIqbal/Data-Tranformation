import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



export default function Navbar(props) { //We pass the props
    const [enableDarkText, setEnableDarkMode] = useState('Enable Dark Mode')

    const changeTextFunction = () => {
        if (props.mode === 'dark')
            setEnableDarkMode('Enable Light Mode')
        else
            setEnableDarkMode('Enable Dark Mode')

    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.about}</Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></Link>
                    </li>



                </ul>

                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className='form-check-input' onClick={props.modeFunction} type="checkbox" id='flexSwitchCheckDefault' />
                    <label className='form-check-lable' htmlFor="flexSwitchCheckDefault">{props.text}</label>

                </div>
            </div>
        </nav>
    )
}

//We can tell fix the prope type by using prope type. e.g wheather the prope type is string or integer or any thing. This is a check. we can also use is "isRequired" means have to string

Navbar.prototype = {
    title: PropTypes.string,
    about: PropTypes.string
}
//Default props set default if we didn't set any thing. So it will pass these values.
Navbar.defaultProps = {
    title: "Set the title",
    about: "Set about first"
}

