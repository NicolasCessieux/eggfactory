import React, { Component } from "react";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <div>{this.props.touch}</div>;
  }
}

export default View;
