import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HelloWorld from "./HelloWorld";
import Hogs from "./Hogs";

class App extends Component {

    state = {
      greased: false,
      sortByName: false,
      sortByWeight: false,
    }

    filterByGrease = () => {
      this.setState((prevState) => {
        return {greased: !prevState.greased}
      })
    }

    sortByName = () => {
      this.setState((prevState) => {
        return {sortByName: !prevState.sortByName}
      })
    }

    sortByWeight = () => {
      this.setState((prevState) => {
        return {sortByName: false, sortByWeight:!prevState.sortByWeight}
      })
    }


  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld filterByGrease={this.filterByGrease} sortByName={this.sortByName}sortByWeight={this.sortByWeight}/>
        <Hogs greased={this.state.greased}  sortByName={this.state.sortByName} sortByWeight={this.state.sortByWeight}/>
      </div>
    );
  }
}


export default App;
