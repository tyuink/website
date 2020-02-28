import React, { Component } from "react";
import "./RightSide.css";

class RightSide extends Component {
  render() {
    return (
      <article>
        {this.props.children}
      </article>
    );
  }
}

export default RightSide;