import React, { Component } from 'react';

class WebSite extends Component {
  render() {
    return (
      <div className="website">
        {this.props.children}
      </div>
    )
  }
}

export default WebSite;