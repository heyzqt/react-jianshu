import styled from "styled-components";
import LogoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

export const Logo = styled.a.attrs({
  href: "/" //也可以直接写在index.js，<Logo href="/"/>
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${LogoPic});
  background-size: cover;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  display: inline-block;
  line-height: 26px;
  padding: 15px;
  color: #333;

  &.active {
    color: #ea6f5a;
  }

  &.left {
    float: left;
  }

  &.right {
    float: right;
    color: #969696;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;

  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;

    &.focused {
      background-color: #777;
      color: #fff;
    }
  }

  .slide-enter {
    transition: all .2s ease-out;
  }

  .slide-enter-active {
    width: 240px;
  }

  .slide-exit {
    transition: all .2s ease-out;
  }

  .slide-exit-active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  width: 250px;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  left: 0;
  top: 56px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 9px;
  padding: 0 20px;
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`

export const SearchInfoItem = styled.a`
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  padding: 0 40px 0 20px;
  border: none;
  outline: none;
  border: 1px solid #eee;
  border-radius:  40px;
  box-sizing: border-box;
  margin-top: 9px;
  background-color: #eee;
  font-size: 14px;
  margin-left: 20px;
  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 240px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`

export const Button = styled.div`
  line-height: 38px;
  border-radius: 20px;
  font-size: 15px;
  float: right;
  margin-right: 20px;
  padding: 0 20px;
  box-sizing: border-box;

  &.reg-btn {
    width: 80px;
    height: 38px;
    color: #ea6f5a;
    border: 1px solid rgba(236,97,73,.7);
    background-color: transparent;
    text-align: center;
    margin: 9px 5px 0 15px;
  }

  &.write-btn {
    width: 110px;
    height: 40px;
    margin: 8px 12px 0;
    color: #fff;
    background-color: #ea6f5a;
    text-align: center;
  }
`
