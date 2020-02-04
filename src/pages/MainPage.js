import React from 'react';
import Sidebar from '../Components/Sidebar'
import NoteList from '../Components/NoteList'

class MainPage extends React.Component {
    render() {
        return (
            <div className="Main-Page">
                <Sidebar folders={this.props.folders} />
                <NoteList notes={this.props.notes}/>
            </div>
        );
    }
}

export default MainPage;