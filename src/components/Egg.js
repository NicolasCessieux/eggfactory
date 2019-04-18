import React, { Component } from "react";

class Egg extends Component {
  generateEgg() {
    const buttons = [];
    for (let i = 0; i < 10; i++) {
      buttons.push(
        <button onClick={() => this.props.getNewState(i)}>{i}</button>
      );
    }
    return buttons;
  }

  render() {
    return <div>{this.generateEgg()}</div>;
  }
}

export default Egg;