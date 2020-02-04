import React from 'react';

function NoteSidebar(props) {
    return (
        <div className="Sidebar">
            <button className="back" onClick={() => props.history.goBack()}>Go back</button>
            <h3>{props.folder.name}</h3>
        </div>
    );
}

export default NoteSidebar;