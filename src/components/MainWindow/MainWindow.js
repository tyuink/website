import React, { Component } from "react";
import "./MainWindow.less";

class MainWindow extends Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}

export default MainWindow;