import React from "react";
// import images from "../hog-imgs";

export default class Tile extends React.Component {
  matchImg = (name) => {
    let convertedName = name.toLowerCase().split(" ").join("_");
    let img = `../hog-img/${convertedName}.jpg`;
    return img;
  };
  render() {
    return (
      <div>
        <img src={this.matchImg(this.props.hog.name)} />
      </div>
    );
  }
}
