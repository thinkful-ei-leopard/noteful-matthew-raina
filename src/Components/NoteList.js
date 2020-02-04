/* eslint-disable no-unused-expressions */
import React from 'react'
import Note from './Note'


function NoteList(props) {

    return (
        <div className='NoteList'>
        <ul className='NoteList_lists'>
            <li>
                <Note />
            </li>
        </ul>

        <div className="NoteList_addNote">
            <button type='button' className='addNote'>Add Note</button>
        </div>
    </div>
    )
    

}

export default NoteList