import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogged: false,
      isMissing: false
    };
  }

  loginUser = () => {
    if (this.state.user) {
      this.props.userLogged(this.state.user);
      this.setState({ userLogged: true, isMissing: false });
    } else {
      this.setState({ isMissing: true });
    }
  };

  logoutUser = () => {
    this.props.userLoggedOut();
    this.setState({ user: undefined, userLogged: false });
  };

  handleKeypress = event => {
    if (event.keyCode === 13) {
      this.loginUser();
    }
  };

  onTextFieldChange = event => {
    this.setState({ user: event.target.value });
  };

  render() {
    return (
      <div
        className="row justify-content-center loginForm"
        onKeyDown={this.handleKeypress}
      >
        {this.state.userLogged ? (
          <div className="row justify-content-center text-center">
            <h3>Hello {this.state.user}</h3>
            <div className="row text-center justify-content-center">
              <input
                className="btn btn-light"
                type="button"
                value="logout"
                onClick={this.logoutUser}
              />
            </div>
          </div>
        ) : (
          <div className="col-5 justify-content-center">
            <div className="row text-center justify-content-center">
              <TextField
                type="text"
                style={{ width: "70%" }}
                id={this.state.isMissing ? "outlined-name" : "outlined-error"}
                margin="normal"
                label={
                  this.state.isMissing
                    ? "Error - Required Username"
                    : "Username"
                }
                className="form-control"
                variant="outlined"
                value={this.state.user}
                onChange={this.onTextFieldChange}
              />
            </div>
            <div className="row text-center justify-content-center">
              <input
                type="button"
                value="Login"
                className="btn btn-light"
                onClick={this.loginUser}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
