import React, { Component } from 'react';
import Casserole from './casserole';
import './Frigo.css';

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
      <div className="frigostyle">
        {eggs.filter((item) => item.$loki === 1 || item.$loki === 4 || item.$loki === 16 || item.$loki === 23 || item.$loki === 32 || item.$loki === 38 || 
          item.$loki === 53 || item.$loki === 54 || item.$loki === 58 || item.$loki === 66 ||
           item.$loki === 76 || item.$loki === 79 || item.$loki === 80).map((egg, index) => <img key={index} src={egg.image} alt="" />)}
        <Casserole />
      </div>
    );
  }
}

export default Frigo;