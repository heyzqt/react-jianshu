import React, { useEffect } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

const Detail = (props) => {
  useEffect(() => {
    props.getDetailData(props.match.params.id);
  }, []);

  const { title, content } = props;
  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
    </DetailWrapper>
  );
};

const mapStateToProps = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailData: (id) => {
      dispatch(actionCreators.getDetailData(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
