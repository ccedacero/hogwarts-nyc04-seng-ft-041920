import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HelloWorld from "./HelloWorld";
import Hogs from "./Hogs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Hogs />
      </div>
    );
  }
}

export default App;
