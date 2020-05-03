import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Write = (props) => {
  return props.login ? <div>写文章页面</div> : <Redirect to="/login" />;
};

const mapStateToProps = (state) => ({
  login: state.getIn(["login", "login"])
});

export default connect(mapStateToProps, null)(Write);
