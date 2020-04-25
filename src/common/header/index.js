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

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span class="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <span class="iconfont">&#xe848;</span>
          </SearchWrapper>
          <Addition>
            <Button className="write-btn">
              <span class="iconfont">&#xe61d;</span>写文章
            </Button>
            <Button className="reg-btn">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;
