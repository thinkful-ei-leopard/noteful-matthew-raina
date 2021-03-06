import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <ul>
        {props.folders.map(folder => (
            <li key={folder.id}><NavLink style={{textDecoration: 'none'}} to={`/folder/${folder.id}`}>{folder.name}</NavLink></li>
        ))}
        </ul>
      <button className="add-folder">Add folder</button>
    </div>
  );
}

export default Sidebar;
