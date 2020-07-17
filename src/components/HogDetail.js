import React from "react";

export default class HogsDetails extends React.Component {
  
  render() {
    console.log(this.props.hog)
    return(
        <div>
            {/* <img src={this.props.img}/> */}
            <br></br>
            <hr></hr>
            <h1>Hog Deetz Y'all</h1>
            <h1>Name: {this.props.hog.name}</h1>
            <h1>Specialty: {this.props.hog.specialty}</h1> 
            <h1>Greased? {this.props.hog.greased.toString()}</h1> 
            <h1>Weight: {this.props.hog.weight}</h1> 
            <h1>Highest Medals Achieved: {this.props.hog["highest medal achieved"]}</h1> 
            <hr></hr>
            <br></br>
        </div>
    ) 
  }
}
