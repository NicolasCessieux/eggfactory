import React, { Component } from 'react';
import './Frigo.css';

class Casserole extends Component {
 
  render() {
    return(
      <div>
        {this.props.id}
      </div>
    );
  }
}

export default Casserole;