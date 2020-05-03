import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background-color: #eee;
`;

export const LoginBox = styled.div`
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  display: block;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 4px 12px 4px 35px;
  vertical-align: middle;
  box-sizing: border-box;
`;

export const Button = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
  box-sizing: border-box;
  text-align: center;
  &:hover {
    background: #187cb7;
  }
`;
