import React from "react";
import Note from "./Note";
import './NoteList.css'

function NoteList(props) {
  return (
    <div className="NoteList">
      <ul className="NoteList_lists">
        <li>
          {props.notes.map(note => (
            <Note
              key={note.id}
              id={note.id}
              name={note.name}
              modified={note.modified}
              folderId={note.folderId}
            />
          ))}
        </li>
      </ul>

      <button className="add-note">Add Note</button>
    </div>
  );
}

export default NoteList;
