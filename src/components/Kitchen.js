import React, { Component } from "react";
import PlanDeTravail from '../images/PlanDeTravail.png';

class Kitchen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      recetteUser: "", 
      eggs: [] 
    };
  }

  componentWillMount() {
    fetch("http://easteregg.wildcodeschool.fr/api/eggs/")
      .then(response => response.json())
      .then(data => {
        const eggs = data;
        this.setState({
          eggs
        });
      });
  }

  addEgeID = EgeID => {
    this.setState({
        recetteUser: this.state.recetteUser + EgeID
    });
  };

  render() {
    const { eggs } = this.state;
    return (
        <div className="App">
            <div className="PlanDeTravail">
                <img src={PlanDeTravail} className="ResponsiveImg" alt="" />
                <button type="button" className="Button"> Cook ! </button>
            </div>
            
            <div className="Placard">
              {eggs.filter((item) =>
                  item.$loki === 1 ||
                  item.$loki === 4 ||
                  item.$loki === 16 ||
                  item.$loki === 23 ||
                  item.$loki === 32 ||
                  item.$loki === 38 ||
                  item.$loki === 53 ||
                  item.$loki === 54 ||
                  item.$loki === 58 ||
                  item.$loki === 66 ||
                  item.$loki === 76 || 
                  item.$loki === 79 ||
                  item.$loki === 80).map((egg, index) => 
                  <div className="EtagerePlacard">
                    <img className="Oeuf"  key={index} src={egg.image} alt="" />
                  </div>
                  )
                }
            </div>
        </div>
    );
  }
}

export default Kitchen;