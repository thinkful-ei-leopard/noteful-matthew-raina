import React from "react";
import NoteSidebar from "../components/NoteSidebar";
import STORE from "../STORE";

function NotePage(props) {
  const { note } = props;
  return (
    <div className="Note-page">
      <NoteSidebar
        folder={STORE.folders.find(folder => folder.id === note.folderId)}
        history={props.history}
      />
      <div className="Note">
        <h2 className="Note_title">{note.name}</h2>
        <p>Modified on {new Date(note.modified).toLocaleDateString()} </p>
        <button className="delete-note">Delete Note</button>
      </div>
      <p className="Note-content">{note.content}</p>
    </div>
  );
}

export default NotePage;
