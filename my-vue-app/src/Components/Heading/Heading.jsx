import React from 'react'
import './Heading.css'

function Heading({text}) {
    return(
        <h1 className='main-title'>
            {text}
        </h1>
    )
}

export default Heading;