import React from 'react'
import {Link} from "react-router-dom"



const Goals = () => {
    return (
        <div>
            <h1>Hola</h1>
            <Link to="/"> {/*Para home*/}
                <button> Devolver</button>
            </Link>
        </div>
    )
}

export default Goals
