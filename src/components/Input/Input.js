import React from 'react'

export default function Input({
    title,
    value,
    onChange,
}) {
    return (
        <div>
            <input type="number" placeholder={title} value={value} onChange={(e)=> onChange(parseInt(e.target.value))}/>
        </div>
    )
}
