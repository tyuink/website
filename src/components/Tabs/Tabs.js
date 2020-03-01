import React, { Component } from "react";
import "./Tabs.less";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: this.props.defaultActiveKey
    }
  }

  onMenuItemClicked(key) {
    this.setState({ activeKey: key });
  }

  render() {
    const panes = this.props.children;

    const menuItems = panes.map(
      item => (
        <li key={item.key} className={this.state.activeKey === item.key ? "selected" : null} onClick={this.onMenuItemClicked.bind(this, item.key)}>{item.props.tab}</li>
      )
    );

    const tabPanes = panes.map(
      pane => (
        <div key={pane.key} className={this.state.activeKey !== pane.key ? "hide" : null}>{pane.props.children}</div>
      )
    );

    return (
      <div>
        <ul id="menu">{menuItems}</ul>
        <div id="content">{tabPanes}</div>
      </div>
    );
  }
}

export default Tabs;