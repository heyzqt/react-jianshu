import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
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

export const ListItem = styled.div`
  width: 100%;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  position: relative;

  .title {
    color: #333;
    font-size: 18px;
    font-weight: 700;
    margin: -7px 0 4px;
    line-height: 1.5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: #969696;
    }
  }

  .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }

  .meta {
    color: #b4b4b4;
    font-size: 12px;
  }

  .wrap-img {
    width: 150px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
  }
`
