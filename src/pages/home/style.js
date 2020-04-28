import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  height: 600px;
  overflow: hidden;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  width: 625px;
  padding-top: 30px;
  margin-left: 15px;
  float: left;

  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  background-color: red;
  overflow: hidden;
`;

export const TopicItem = styled.div`
  height: 32px;
  line-height: 32px;
  color: #000;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  float: left;
  padding-right: 10px;
  margin-right: 10px;
  margin-bottom: 18px;

  .topic-pic {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    float: left;
  }
`;
// TODO topic-pic中添加了float: left;文字就垂直居中了

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;
