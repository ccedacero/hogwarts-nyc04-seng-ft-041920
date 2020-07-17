import React from "react";
import { hogs } from "../porkers_data.js";
import Tile from "./Tile";

export default class Hogs extends React.Component {
  // allHogs = () => {
  //   return hogs.map((hog) => {
  //     return (
  //       <div>
  //         <Tile hog={hog}/>
  //       </div>
  //     );
  //   });
  // };

  allHogs = () => {
    let arrOfHogs = hogs.filter((hog) => {
      if(this.props.greased){
       return hog.greased === true
      } else {
        return true
      }
    });

    let babyShark;
    if(this.props.sortByName){
      babyShark = arrOfHogs.sort((a, b) => {
        return a.name.localeCompare(b.name)
       })
       
      console.log("🦈BabyShark🦈");
    } else if(this.props.sortByWeight) {
      babyShark = arrOfHogs.sort((a, b) => {
        return  a.weight - b.weight 
       })
    } else {
      babyShark = arrOfHogs
    }

  return babyShark.map(hog => {
    return (
      <div >
        <Tile hog={hog}/>
      </div>
    );
   })

  };
  

  render() {
    return <div>{this.allHogs()}</div>;
  }
}
