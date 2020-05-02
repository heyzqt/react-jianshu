import axios from "axios";
import * as constants from "./constants";

const updateDetailData = (result) => ({
  type: constants.UPDATE_DETAIL_DATA,
  title: result.title,
  content: result.content
});

export const getDetailData = (id) => {
  return async (dispatch) => {
    const response = await axios.get("/api/detail.json?id=" + id);
    dispatch(updateDetailData(response.data.data));
  };
};
