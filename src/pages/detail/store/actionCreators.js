import axios from "axios";
import * as constants from "./constants";

const updateDetailData = (result) => ({
  type: constants.UPDATE_DETAIL_DATA,
  title: result.title,
  content: result.content
});

export const getDetailData = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/detail.json");
    dispatch(updateDetailData(response.data.data));
  };
};
