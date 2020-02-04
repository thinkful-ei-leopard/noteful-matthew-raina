import React from 'react'
import { Link } from 'react-router-dom'


function Note(props) {
    return (
        <div>
        <div className='Note'>
            <h2 className='Note_title'>
                <Link to=''>
                    {props.name}
                </Link>
            </h2>
            <button type='button' className='Note_delete'>Delete Note</button>
        </div>

        <div className='Note_dateModified'>
            <p>Date Modified on {props.date} </p>
        </div>
        </div>
    )
}

export default Note