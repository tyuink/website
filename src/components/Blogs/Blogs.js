import React, { Component } from 'react';

class Blogs extends Component {
  render() {
    return (
      <div className={this.props.show ? "" : "hide"}>当前版块正在筹备，即将陆续开放</div>
    );
  }
}

export default Blogs;