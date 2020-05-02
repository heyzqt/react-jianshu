import React from "react";
import { connect } from "react-redux";
import { ListItem, LoadMore } from "../style";
import "./style.scss";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const List = (props) => {
  const { page, list, loadMore } = props;
  return (
    <div>
      {list.map((item, index) => {
        return (
          <ListItem
            className={item.get("imgUrl") !== "" ? "have-img" : ""}
            key={index}
          >
            <div className="content">
              <Link className="title" to={"/detail/" + item.get("id")}>
                {item.get("title")}
              </Link>
              {/* <a
                className="title"
                href={item.get("linkUrl")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.get("title")}
              </a> */}
              <p className="abstract">{item.get("description")}</p>
              <div className="meta">{item.get("info")}</div>
            </div>
            {item.get("imgUrl") !== "" && (
              <div className="wrap-img">
                <img src={item.get("imgUrl")} alt="" />
              </div>
            )}
          </ListItem>
        );
      })}
      <LoadMore onClick={() => loadMore(page)}>阅读更多</LoadMore>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"])
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadMore(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
