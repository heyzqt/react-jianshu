import styled from "styled-components";
import LogoPic from "../../statics/logo.png"

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

export const Logo = styled.a.attrs({
    href: '/' //也可以直接写在index.js，<Logo href="/"/>
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${LogoPic});
  background-size: cover;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`
