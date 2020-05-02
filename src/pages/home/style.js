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
  width: 300px;
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
`;

export const LoadMore = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: #a5a5a5;
  height: 40px;
  margin: 30px auto 60px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  line-height: 40px;
  cursor: pointer;
`;

export const QRCodeWrapper = styled.a`
  width: 100%;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 30px;
  box-sizing: border-box;
  display: block;

  .qrcode {
    width: 60px;
    height: 60px;
    opacity: 0.85;
    vertical-align: middle;
  }

  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;

    .title {
      font-size: 15px;
      color: #333;
    }

    .description {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
  }
`;

export const BackTop = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-align: center;
  display: block;
  position: fixed;
  bottom: 40px;
  right: 120px;
  z-index: 1040;
  color: #777;
  font-size: 12px;
  border: 1px solid #dcdcdc;
  line-height: 50px;
  background-color: #fff;
`;

export const RecommendWrapper = styled.div`
  padding-top: 26px;
`;

export const RecommendItem = styled.div`
  .recommend-pic {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;

export const RecommendBgItem = styled.div`
  width: 100%;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  border-radius: 4px;
`;

export const WritterWrapper = styled.div`
  .list {
    a {
      text-decoration: none;
      color: #333;
    }
    li {
      margin-top: 15px;
      line-height: 20px;
    }
    p {
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
      margin: 0 0 10px;
    }
    .avatar {
      width: 48px;
      height: 48px;
      float: left;
      margin-right: 10px;
    }
    .writer-pic {
      width: 100%;
      heigth: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
    .follow {
      float: right;
      font-size: 13px;
      color: #42c02e;
      margin-top: 5px;
    }
    .name {
      padding-top: 5px;
      margin-right: 60px;
      font-size: 14px;
      display: block;
    }
  }
`;
