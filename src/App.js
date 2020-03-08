import React from "react";
import WebSite from "./components/WebSite/WebSite";
import MainWindow from "./components/MainWindow/MainWindow";
import LeftSide from "./components/MainWindow/LeftSide";
import RightSide from "./components/MainWindow/RightSide";
import Footer from "./components/Footer/Footer";
import Tabs from "./components/Tabs/Tabs";
import TabPane from "./components/Tabs/TabPane";
import Introduction from "./components/Introduction/Introduction";
import Contacts from "./components/Contacts/Contacts";
import Photos from "./components/Photos/Photos";
import Blogs from "./components/Blogs/Blogs";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";

import "./App.less";

function App() {
  return (
    <WebSite>
      <MainWindow>
        <LeftSide>
          <Introduction />
          <Contacts />
        </LeftSide>
        <RightSide>
          <Tabs defaultActiveKey="1">
            <TabPane key="1" tab="主页"><Photos/></TabPane>
            <TabPane key="2" tab="项目"><Projects/></TabPane>
            <TabPane key="3" tab="日志"><Blogs/></TabPane>
            <TabPane key="4" tab="关于"><AboutMe/></TabPane>
          </Tabs>
        </RightSide>
      </MainWindow>
      <Footer cright="&copy;2020&nbsp;&nbsp;本人保留所有权利" icp="吉ICP备15004700号" />
    </WebSite>
  );
}

export default App;