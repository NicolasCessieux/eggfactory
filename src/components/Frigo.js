import React, { Component } from 'react';
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
        {eggs.map((egg, index) => <img key={index} src={egg.image} />)}
      </div>
    );
  }
}

export default Frigo;