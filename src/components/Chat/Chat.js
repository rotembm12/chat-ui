import React from "react";
import Message from "../Message/Message";
import "./Chat.css";
import cry from "../../assets/avatars/crying.png";
import PropTypes from "prop-types";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  messagesToShow = () =>
    this.props.messages.map(msg => {
      return (
        <div
          key={msg.id}
          className={
            msg.username === this.props.username ? "currentUser" : "otherUser"
          }
        >
          <Message
            avatar={msg.avatar}
            text={msg.text}
            username={msg.username}
            currentUsername={this.props.username}
            deleteMessage={this.props.deleteMessage}
            id={msg.id}
          />
        </div>
      );
    });
  showDefault = () => {
    return (
      <div className={"row justify-content-center msgRow"}>
        <Message
          avatar={cry}
          text="No Messages - Be the first one to write"
          username="empty"
        />
      </div>
    );
  };

  render() {
    return (
      <div className="row justify-content-center chatBox">
        <div className="col-12 text-center">
          {this.props.messages[0] ? this.messagesToShow() : this.showDefault()}
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired
};

export default Chat;
