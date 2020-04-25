import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  Addition,
  Button
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {
  getInputFocusAction,
  loseInputFocusAction
} from "../../store/actionCreators";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe848;
          </span>
        </SearchWrapper>
        <Addition>
          <Button className="write-btn">
            <span className="iconfont">&#xe61d;</span>写文章
          </Button>
          <Button className="reg-btn">注册</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = getInputFocusAction();
      dispatch(action);
    },
    handleInputBlur() {
      const action = loseInputFocusAction();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
