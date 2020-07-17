import React from "react";
import HogDetail from './HogDetail'


export default class Tile extends React.Component {
  constructor(){
    super()
    this.state = {
      displayDetails: false,
      hide: "initial"
    }
  }
  
  // i am trashhhh
  // i love baby shark
  // fuck yeah 
  // fucccckkkk right there!!!

  matchImg = (name) => {
 
    let convertedName = name.toLowerCase().split(" ").join("_");
    const img = require(`../hog-imgs/${convertedName}.jpg`);
    return img;
  };
//onClick={() => <HogDetail details={this.props.hog} img={this.matchImg(this.props.hog.name)}/>}
  displayDetails = () => {
    this.setState({
      displayDetails: !this.state.displayDetails
    })
  }

  hideTile = () => {
    this.setState({
      hide: "none"
    })
  }

  render() {

// <div><h1>{this.props.hog.name}
//         </h1><img src={this.matchImg(this.props.hog.name)} alt="" /></div>

    return (
      <div  style={{paddingBottom: "20px", display: this.state.hide}} >
        {this.state.displayDetails ? <HogDetail hog={this.props.hog} img={this.matchImg(this.props.hog.name)}/> : (
        <div className="ui card centered" >
            <a className="image" href="#">
              <img src={this.matchImg(this.props.hog.name)} alt="" />
            </a>
            <div className="content" onClick={this.displayDetails}>
              <a className="header" href="#">{this.props.hog.name}</a>
            </div>
            <button onClick={this.hideTile} className="ui inverted primary button">Hide Me</button>
          </div>

        )}
      </div>
    
  
    )
  }
}
