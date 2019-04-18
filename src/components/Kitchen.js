import React, { Component } from "react";
import View from "./View";
import Egg from "./Egg";

class Kitchen extends Component {
  constructor(props) {
    super(props);
    this.state = { recetteUser: "" };
  }

  addEgeID = EgeID => {
    this.setState({
        recetteUser: this.state.recetteUser + EgeID
    });
  };

  render() {
    return (
        <div className="App">
          <View touch={this.state.recetteUser} />
          <Egg getNewState={this.addEgeID} />
        </div>
    );
  }
}

export default Kitchen;