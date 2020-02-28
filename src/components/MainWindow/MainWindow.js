import React, { Component } from "react";
import "./MainWindow.css";

class MainWindow extends Component {
  render() {
    return (
      <div id="app">
        {this.props.children}
      </div>
    );
  }
}

export default MainWindow;