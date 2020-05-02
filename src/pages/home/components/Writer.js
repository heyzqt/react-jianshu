import React from "react";
import { WritterWrapper } from "../style";
import { connect } from "react-redux";

const Writer = (props) => {
  return (
    <WritterWrapper>
      <ul className="list">
        {props.list.map((item) => {
          return (
            <li key={item.get("id")}>
              <a className="avatar" href="/">
                <img className="writer-pic" src={item.get("imgUrl")} alt=""/>
              </a>
              <a className="follow" href="/">
                +关注
              </a>
              <a className="name" href="/">
                {item.get("name")}
              </a>
              <p className="">{item.get("description")}</p>
            </li>
          );
        })}
      </ul>
    </WritterWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "writerList"])
  };
};

export default connect(mapStateToProps, null)(Writer);
