import React, { Component } from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

class App extends Component {
  render() {
    return (
      <div id="root">
        <Header />
        <main className="App">
          <Route path="/" component={MainPage} />
        </main>
      </div>
    );
  }
}

export default App;
