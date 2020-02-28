import React, { Component } from "react";
import "./LeftSide.css";

class LeftSide extends Component {
  render() {
    return (
      <aside>
        <div id="logo">
          <div>琪</div>
        </div>
        {this.props.children}
      </aside>
    );
  }
}

export default LeftSide;