import React, { Component } from "react";
import "./Tabs.less";

class Tabs extends Component {
  render() {
    return (
      <div>
        <ul id="menu">
          <li className="selected">主页</li>
          <li>项目</li>
          <li>日志</li>
          <li>关于</li>
        </ul>
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Tabs;