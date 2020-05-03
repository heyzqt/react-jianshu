import React, { PureComponent } from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Redirect } from "react-router-dom";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.account = React.createRef();
    this.password = React.createRef();
  }

  render() {
    const { login } = this.props;
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账户" ref={this.account} />
            <Input placeholder="密码" type="password" ref={this.password} />
            <Button
              onClick={() =>
                this.props.handleClickLogin(this.account, this.password)
              }
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state) => ({
  login: state.getIn(["login", "login"])
});

const mapDispatchToProps = (dispatch) => ({
  handleClickLogin: (accountEle, pwdEle) => {
    dispatch(
      actionCreators.checkLogin(accountEle.current.value, pwdEle.current.value)
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
