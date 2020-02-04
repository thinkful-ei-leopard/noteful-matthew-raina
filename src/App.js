import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom';
import MainPage from './Components/MainPage'

class App extends Component {
  render() {
    return (
      <main className='App'>
        <MainPage />
      </main>
    );
  }
  
}

export default App;