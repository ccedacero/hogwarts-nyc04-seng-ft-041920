import React from "react";
import { hogs } from "../porkers_data.js";
import Tile from "./Tile";

export default class Hogs extends React.Component {
  allHogs = () => {
    return hogs.map((hog) => {
      return (
        <div>
          <Tile hog={hog} />
        </div>
      );
    });
  };
  render() {
    return <div>{this.allHogs()}</div>;
  }
}
