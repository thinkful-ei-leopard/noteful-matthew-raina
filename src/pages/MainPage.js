import React from "react";
import Sidebar from "../components/Sidebar";
import NoteList from "../components/NoteList";

function MainPage(props) {
  return (
    <div className="Main-Page">
      <Sidebar folders={props.folders} />
      <NoteList notes={props.notes} />
    </div>
  );
}

export default MainPage;
