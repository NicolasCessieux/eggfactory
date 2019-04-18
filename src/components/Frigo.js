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
        {eggs.map((egg, index) => <img key={index} src={egg.image} alt="" />)}
        {eggs.map((egg, index) => <div>{index}</div>)}
        <Casserole id={eggs.index}/>
      </div>
    );
  }
}

export default Frigo;