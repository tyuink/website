import React, { Component } from 'react';

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