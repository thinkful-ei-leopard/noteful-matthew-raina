import React, { Component } from "react";
import Header from "./components/Header";
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
            <Route exact path="/" render={
              (routerProps) => 
                <MainPage notes={this.filterNotes()} folders={STORE.folders} {...routerProps} />
            }/>
            <Route exact path="/folder/:folderId" render={
              (routerProps) =>
                <MainPage notes={this.filterNotes(routerProps.match.params.folderId)} folders={STORE.folders} {...routerProps} />
            } />
            <Route exact path="/note/:noteId" render={
              (routerProps) =>
                <NotePage note={STORE.notes.find(note => note.id === routerProps.match.params.noteId)} {...routerProps} />
            }/>
          </Switch>   
        </main>
      </div>
    );
  }
}

export default App;
