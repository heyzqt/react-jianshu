import React, { useEffect } from "react";
import { HomeWrapper, HomeLeft, HomeRight, QRCodeWrapper } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";

const Home = (props) => {
  useEffect(() => {
    props.changeHomeData();
  }, []);

  return (
    <HomeWrapper>
      <HomeLeft>
        <img
          className="banner-img"
          src="https://upload-images.jianshu.io/upload_images/20504293-75a243a0e71285bc.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
          alt=""
        />
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <QRCodeWrapper>
          <img
            className="qrcode"
            alt=""
            src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
          />
          <div className="info">
            <div className="title">下载简书手机App</div>
            <div className="description">随时随地发现和创作内容</div>
          </div>
        </QRCodeWrapper>
        <Writer />
      </HomeRight>
    </HomeWrapper>
  );
};

const mapDispatchToState = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeData());
  }
});

export default connect(null, mapDispatchToState)(Home);
