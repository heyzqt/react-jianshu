import axios from "axios";
import * as constants from "./constants";

const changeLoginStatus = (login) => ({
  type: constants.CHANGE_LOGIN_ACCOUNT,
  login
});

export const checkLogin = (account, password) => {
  return (dispatch) => {
    axios.get("/api/login.json").then((res) => {
      let legalAccount = res.data.data;
      if (
        legalAccount.account === account &&
        legalAccount.password === password
      ) {
        alert("登录成功");
        dispatch(changeLoginStatus(true));
      } else {
        alert("登录失败，用户名或密码错误");
        dispatch(changeLoginStatus(false));
      }
    });
  };
};

export const logout = () => ({
  type: constants.LOGOUT
});
