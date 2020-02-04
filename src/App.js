import React, { Component } from "react";
import Header from "./Components/Header";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotePage from './pages/NotePage';
import STORE from './STORE'

class App extends Component {

  filterNotes(folderId) {
    if(folderId) {
       return STORE.notes.filter(note => 
        note.folderId === folderId ); 
    } else {
      return STORE.notes;
    }
  }


  render() {
    return (
      <div id="root">
        <Header />
        <main className="App">
          <Switch>
            <Route path="/" render={
              (routerProps) => 
                <MainPage notes={this.filterNotes()} folders={STORE.folders} />
            }/>
            <Route path="/folder/:folderID" render={
              (routerProps) =>
                <MainPage notes={this.filterNotes(routerProps.match.params.folderID)} folders={STORE.folders}/>
            } />
            <Route path="/note/:noteID" render={
              (routerProps) =>
                <NotePage />
            }/>
          </Switch>   
        </main>
      </div>
    );
  }
}

export default App;
