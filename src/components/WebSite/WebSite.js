import React, { Component } from "react";
import "./WebSite.less";

class WebSite extends Component {
  render() {
    return (
      <div id="page">
        {this.props.children}
      </div>
    )
  }
}

export default WebSite;