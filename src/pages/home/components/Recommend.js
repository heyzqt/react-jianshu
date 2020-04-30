import React, { Fragment } from "react";
import { RecommendWrapper, RecommendItem, RecommendBgItem } from "../style";
import { connect } from "react-redux";

const Recommend = (props) => {
  return (
    <RecommendWrapper>
      {props.list.map((item) => {
        return (
          <Fragment>
            <RecommendItem key={item.get("id")}>
              <a href={item.get("href")}>
                <img
                  className="recommend-pic"
                  src={item.get("imgUrl")}
                  alt=""
                />
              </a>
            </RecommendItem>
            {/* 第二种方法，给background传递imgUrl参数显示图片 */}
            <RecommendBgItem imgUrl={item.get("imgUrl")}></RecommendBgItem>
          </Fragment>
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
