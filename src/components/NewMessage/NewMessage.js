import React from "react";
import "./NewMessage.css";
import uuid from "uuid";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import cat from "../../assets/avatars/cat.png";
import dog from "../../assets/avatars/dog.png";
import lion from "../../assets/avatars/lion.png";
import monkey from "../../assets/avatars/monkey.png";
import zebra from "../../assets/avatars/zebra.png";
class NewMessage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      avatars: [],
      text: "",
      avatar: "",
      chosenAvatar: "",
      username: "",
      id: ""
    };
  }

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.text === "") {
      alert("text is empty!");
      return;
    } else if (this.state.chosenAvatar === "") {
      alert("please Select avatar");
    } else {
      this.props.createMessage({
        text: this.state.text,
        id: uuid.v4(),
        username: this.props.username,
        avatar: this.state.chosenAvatar
      });
      this.setState({ username: "", text: "", id: "" });
    }
  };

  onChangeAvatar = event => {
    this.setState({ chosenAvatar: event.target.src });
  };
  handleKeypress = event => {
    if (event.keyCode === 13) {
      this.onFormSubmit(event);
    }
  };

  render() {
    return (
      <div
        className="row justify-content-center text-center"
        onKeyDown={this.handleKeypress}
      >
        <form onSubmit={this.onFormSubmit}>
          <div className="row justify-content-center">
            <div className="col-4 icons text-center justify-content-center">
              <div className="row justify-content-center">
                {[cat, dog, lion, monkey, zebra].map(avatar => {
                  return (
                    <div
                      key={avatar}
                      className="col-4"
                      style={{ marginTop: "15px" }}
                    >
                      <img
                        src={avatar}
                        alt="avatar"
                        className="img-fluid avatar"
                        onClick={this.onChangeAvatar}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-5 justify-content-center textField">
              <TextField
                style={{ width: "90%", height: "100%" }}
                id="outlined-multiline-static"
                label="Enter Text Here"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })}
              />
            </div>
            <div className="col-2 iconDiv">
              <div className="row justify-content-center text-center">
                <img
                  src={this.state.chosenAvatar}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div className="row justify-content-center text-center">
                <button className="btn btn-light">Send</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

NewMessage.propTypes = {
  username: PropTypes.string.isRequired
};

export default NewMessage;
