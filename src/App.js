import React from "react";
import MainWindow from "./components/MainWindow/MainWindow";
import LeftSide from "./components/MainWindow/LeftSide";
import RightSide from "./components/MainWindow/RightSide";
import Footer from "./components/Footer/Footer";
import Tabs from "./components/Tabs/Tabs";
import Introduction from "./components/Introduction/Introduction";
import Contacts from "./components/Contacts/Contacts";
import Photos from './components/Photos/Photos';
import Blogs from './components/Blogs/Blogs';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';

import "./App.css";

function App() {
  return (
    <div className="website">
      <MainWindow>
        <LeftSide>
          <Introduction />
          <Contacts />
        </LeftSide>
        <RightSide>
          <Tabs>
            <Photos show={true} />
            <Projects />
            <Blogs />
            <AboutMe />
          </Tabs>
        </RightSide>
      </MainWindow>
      <Footer cright="&copy;2020&nbsp;&nbsp;本人保留所有权利" icp="吉ICP备15004700号-1" />
    </div>
  );
}

export default App;