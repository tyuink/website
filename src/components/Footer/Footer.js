import React, { Component } from "react";
import "./Footer.less";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>{this.props.cright}</div><div>{this.props.icp}</div>
      </footer>
    );
  }
}

export default Footer;