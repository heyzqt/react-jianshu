import React from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

const Topic = (props) => {
  return (
    <TopicWrapper>
      {props.topicList.map((item) => {
        return (
          <TopicItem key={item.get("id")}>
            <img className="topic-pic" src={item.get("imgUrl")} alt=""/>
            {item.get("title")}
          </TopicItem>
        );
      })}
    </TopicWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    topicList: state.get("home").get("topicList")
  };
};

export default connect(mapStateToProps)(Topic);
