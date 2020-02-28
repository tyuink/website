import React, { Component } from 'react';

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