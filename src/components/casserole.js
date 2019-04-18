import React, { Component } from 'react';
import './Frigo.css';

class Casserole extends Component {
 
  render() {
    return(
      <div>
        <h1>{this.props.index}</h1>
      </div>
    );
  }
}

export default Casserole;