import React from "react";
import { connect } from "react-redux";
import { ListItem } from "../style";
import "./style.scss";

const List = (props) => {
  return (
    <div>
      {props.list.map((item) => {
        return (
          <ListItem
            className={item.get("imgUrl") !== "" ? "have-img" : ""}
            key={item.get("id")}
          >
            <div className="content">
              <a className="title" href={item.get("linkUrl")} target="_blank" rel="noopener noreferrer">
                {item.get("title")}
              </a>
              <p className="abstract">{item.get("description")}</p>
              <div className="meta">{item.get("info")}</div>
            </div>
            {item.get("imgUrl") !== "" && (
              <div className="wrap-img">
                <img src={item.get("imgUrl")} alt=""/>
              </div>
            )}
          </ListItem>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "articleList"])
  };
};

export default connect(mapStateToProps, null)(List);
