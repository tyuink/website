import React from 'react';
import './App.css';

function App() {
  return (
    <div className="website">
      <div id="app">
        <aside>
            <div id="logo">
                <div>琪</div>
            </div>
            <h2>Hi，</h2>
            <h1>我是<strong>王伟琪</strong>，</h1>
            <h3>前端开发工程师</h3>
            <ul>
                <li className="icon"><a href="https://github.com/sipingqiqi" rel="noopener noreferrer" target="_blank">&#xe885;</a></li>
                <li className="icon"><a href="https://www.linkedin.com/in/weiqi-wang" rel="noopener noreferrer" target="_blank">&#xe890;</a></li>
                <li className="icon"><a href="https://www.instagram.com/sipingqiqi" rel="noopener noreferrer" target="_blank">&#xe88f;</a></li>
                <li className="icon"><a href="mailto:me@wangweiqi.com" rel="noopener noreferrer" target="_blank">&#xe86f;</a></li>
            </ul>
        </aside>
        <article>
            <ul id="menu">
              <li className="selected">主页</li>
              <li>项目</li>
              <li>日志</li>
              <li>关于</li>            
            </ul>
            <div id="content">
              <div>
                当前版块正在筹备，即将陆续开放
              </div>
            </div>
        </article>
      </div>
      <footer>
        <div>Copyright&nbsp;&copy;&nbsp;本人保留所有权利</div><div>吉ICP备15004700号-1</div>
      </footer>
    </div>
  );
}

export default App;
