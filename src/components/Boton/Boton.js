import React from 'react'
import './Boton.css'
export default function Boton({
    title,
    onClick,
}) {
    return (
        <div className="container-btn">
            <button className="boton" onClick={()=>onClick()}>{title}</button>
        </div>
    )
}
