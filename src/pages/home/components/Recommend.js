import React from "react";
import { RecommendWrapper, RecommendItem } from "../style";
import { connect } from "react-redux";

const Recommend = (props) => {
  return (
    <RecommendWrapper>
      {props.list.map((item) => {
        return (
          <RecommendItem key={item.get("id")}>
            <a href={item.get("href")}>
              <img className="recommend-pic" src={item.get("imgUrl")} alt="" />
            </a>
          </RecommendItem>
        );
      })}
    </RecommendWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "recommendList"])
  };
};

export default connect(mapStateToProps, null)(Recommend);
