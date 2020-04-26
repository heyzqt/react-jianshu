import * as actionTypes from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

export const getInputFocusAction = () => ({
  type: actionTypes.INPUT_GET_FOCUS
});

export const loseInputFocusAction = () => ({
  type: actionTypes.INPUT_LOSE_FOCUS
});

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
});

export const getList = () => {
  return (dispatch) => {
    //create-react-app底层是node服务器，当向"/api/headerList.json"发送请求时，create-react-app会先在工程目录找找有没有对应路由，
    //如果没有对应路由，就会去public找对应的json文件，并输出，所以可以使用该特性模拟数据
    axios
      .get("/api/headerList.json")
      .then((res) => {
        dispatch(changeList(res.data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  //特别注意，这里接收的data数据是一个JS对象，但是store中的list是一个immutable数据
  //需要将data转换成immutable数据，再设置到store中，否则有问题
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});
