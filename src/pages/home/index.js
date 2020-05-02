import React, { useEffect } from "react";
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  QRCodeWrapper,
  BackTop
} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";

const Home = (props) => {
  useEffect(() => {
    bindEvents();
    props.changeHomeData();

    return function cleanup() {
      unbindEvents();
    };
  }, []);

  const bindEvents = () => {
    window.addEventListener("scroll", props.handleScrollEvent);
  };

  const unbindEvents = () => {
    console.log("unbindEvents");
    window.removeEventListener("scroll", props.handleScrollEvent);
  };

  const handleBackTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
  };

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
      {props.showScroll ? (
        <BackTop onClick={handleBackTop}>返回顶部</BackTop>
      ) : null}
    </HomeWrapper>
  );
};

// 现代浏览器获取scrollTop的方法如下，参考网址：https://github.com/nuxt/nuxt.js/issues/2512
// 兼容Safari获取scrollTop为0的情况
const getBodyScrollTop = () => {
  const el = document.scrollingElement || document.documentElement;
  return el.scrollTop;
};

//方法2
const getBodyScrollTop2 = () => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeData());
  },
  handleScrollEvent() {
    if (getBodyScrollTop2() > 200) {
      dispatch(actionCreators.toggleShowScroll(true));
    } else {
      dispatch(actionCreators.toggleShowScroll(false));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
