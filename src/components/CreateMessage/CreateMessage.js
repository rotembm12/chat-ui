import React from "react";
import "./CreateMessage.css";
import uuid from "uuid";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import cat from "../../assets/avatars/cat.png";
import dog from "../../assets/avatars/dog.png";
import lion from "../../assets/avatars/lion.png";
import monkey from "../../assets/avatars/monkey.png";
import zebra from "../../assets/avatars/zebra.png";

class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatars: [cat, dog, lion, monkey, zebra],
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
    } else if (this.state.chosenAvatar === "") {
      alert("please Select avatar");
    } else {
      const msg = {
        avatar: this.state.chosenAvatar,
        text: this.state.text,
        id: uuid.v4(),
        username: this.props.username
      };
      this.props.createMessage({
        text: msg.text,
        id: msg.id,
        username: msg.username,
        avatar: msg.avatar
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

  onTextFieldChange = event => {
    this.setState({ text: event.target.value });
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
              <div className="row justify-content-center avatarsDiv">
                {this.state.avatars.map(avatar => {
                  return (
                    <div key={avatar} className="col-4">
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
                onChange={this.onTextFieldChange}
              />
            </div>
            <div className="col-2 iconDiv">
              <div className="row justify-content-center text-center chosenAvatarDiv">
                {this.state.chosenAvatar ? (
                  <img src={this.state.chosenAvatar} alt="chosenAvatar" />
                ) : null}
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

CreateMessage.propTypes = {
  username: PropTypes.string.isRequired
};

export default CreateMessage;
