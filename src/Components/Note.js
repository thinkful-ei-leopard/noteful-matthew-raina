import React from "react";
import { Link } from "react-router-dom";
import './Note.css'

function Note(props) {
  return (
    <div>
      <div className="Note">
        <h2 className="Note_title">
          <Link to={`/note/${props.id}`}>{props.name}</Link>
        </h2>
        <p>Modified on {new Date(props.modified).toLocaleDateString()} </p>
        <button className="delete-note">
          Delete Note
        </button>
      </div>
    </div>
  );
}

export default Note;