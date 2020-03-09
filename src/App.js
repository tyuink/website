import React from "react";
import Page from "./components/WebSite/WebSite";
import Window from "./components/MainWindow/MainWindow";
import LeftPane from "./components/MainWindow/LeftSide";
import RightPane from "./components/MainWindow/RightSide";
import Footer from "./components/Footer/Footer";
import MenuContainer from "./components/Tabs/Tabs";
import MenuContent from "./components/Tabs/TabPane";
import Introduction from "./components/Introduction/Introduction";
import Contacts from "./components/Contacts/Contacts";
import Photos from "./components/Photos/Photos";
import Blogs from "./components/Blogs/Blogs";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";

import "./App.less";

function App() {
  return (
    <Page>
      <Window>
        <LeftPane>
          <Introduction />
          <Contacts />
        </LeftPane>
        <RightPane>
          <MenuContainer defaultActiveKey="1">
            <MenuContent key="1" tab="主页">
              <Photos />
            </MenuContent>
            <MenuContent key="2" tab="项目">
              <Projects />
            </MenuContent>
            <MenuContent key="3" tab="日志">
              <Blogs />
            </MenuContent>
            <MenuContent key="4" tab="关于">
              <AboutMe />
            </MenuContent>
          </MenuContainer>
        </RightPane>
      </Window>
      <Footer cright="&copy;2020&nbsp;&nbsp;本人保留所有权利" icp="吉ICP备15004700号" />
    </Page>
  );
}

export default App;