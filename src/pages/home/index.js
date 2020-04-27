import React from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

const Home = (props) => {
  return (
    <HomeWrapper>
      <HomeLeft>
        <img
          className="banner-img"
          src="https://upload-images.jianshu.io/upload_images/20504293-75a243a0e71285bc.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
        />
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Writer />
      </HomeRight>
    </HomeWrapper>
  );
};

export default Home;
