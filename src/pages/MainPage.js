import React from 'react';
import Sidebar from '../components/Sidebar'
import NoteList from '../components/NoteList'
import STORE from '../STORE'

class MainPage extends React.Component {
    render() {
        return (
            <div className="Main-Page">
                <Sidebar folders={STORE.folders} />
                <NoteList notes={STORE.notes}/>
            </div>
        );
    }
}

export default MainPage;