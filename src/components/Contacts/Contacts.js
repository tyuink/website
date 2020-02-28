import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    return (
      <ul>
        <li className="icon"><a href="https://github.com/tyuink" rel="noopener noreferrer" target="_blank">&#xe885;</a></li>
        <li className="icon"><a href="https://www.linkedin.com/in/weiqi-wang" rel="noopener noreferrer" target="_blank">&#xe890;</a></li>
        <li className="icon"><a href="https://www.instagram.com/sipingqiqi" rel="noopener noreferrer" target="_blank">&#xe88f;</a></li>
        <li className="icon"><a href="mailto:me@wangweiqi.com" rel="noopener noreferrer" target="_blank">&#xe86f;</a></li>
      </ul>
    );
  }
}

export default Contacts;