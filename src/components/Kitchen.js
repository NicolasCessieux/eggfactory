import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import View from "./View";
import Egg from "./Egg";
import PlanDeTravail from '../images/PlanDeTravail.png';
import Placard from '../images/Placard.png';

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
            <div className="PlanDeTravail">
                <img src={PlanDeTravail} className="ResponsiveImg" alt="" />
                <NavLink to="/result">
                    <button type="button" className="Button"> Cook ! </button>
                </NavLink>
                <View touch={this.state.recetteUser} />
                <Egg getNewState={this.addEgeID} />
            </div>
            <div className="Placard">
                <img src={Placard} className="ResponsiveImg" alt="" />
            </div>
        </div>
    );
  }
}

export default Kitchen;