import React, { Component } from 'react';
import './Frigo.css';
import '../App.css';

class Frigo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs: [],
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
  render() {
    const { eggs } = this.state;
    return (
      <div className="Placard">
        {eggs.map(
          (egg, index) =>
          <div className="EtagerePlacard">
            <img className="Oeuf" key={index} src={egg.image} alt="" />
          </div>
          )
        }
      </div>
    );
  }
}

export default Frigo;