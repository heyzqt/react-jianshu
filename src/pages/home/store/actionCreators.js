import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: fromJS(result.topicList),
  articleList: fromJS(result.articleList),
  recommendList: fromJS(result.recommendList),
  writerList: fromJS(result.writerList)
});

export const getHomeData = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/home.json");
    dispatch(changeHomeData(response.data.data));
  };
};

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
});

export const getMoreList = (page) => {
  return async (dispatch) => {
    const response = await axios.get("/api/homeList.json?page=" + page);
    dispatch(addHomeList(response.data.data, page + 1));
  };
};
