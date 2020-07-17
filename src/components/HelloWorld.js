import React from "react";

class HelloWorld extends React.Component {

  
  render() {
    return (
      <div>
        <button onClick={this.props.filterByGrease}>Filter by Greasedness :P</button>
        <button onClick={this.props.sortByName}>Sort by Name :D</button>
        <button onClick={this.props.sortByWeight}>Sort by Weight :O</button>
        <br></br>
      </div>
    );
  }
}

export default HelloWorld;
