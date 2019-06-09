import React from "react";
import trash from "../../assets/avatars/garbage.png";
import "./Message.css";
import PropTypes from "prop-types";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteMe = () => {
    this.props.deleteMessage(this.props.id);
  };

  currentTime = new Date().toLocaleTimeString();

  render() {
    return (
      <div className={"row justify-content-center msgRow"}>
        <div className="col-2 text-center scale-up" style={{ height: "100%" }}>
          <img src={this.props.avatar} alt="avatar" className="msgAvatar" />
        </div>
        <div className="col-6 text-left scale-up textArea">
          <h6> {this.props.username}</h6>
          <h5> {this.props.text}</h5>
        </div>
        <div className="col-1 text-left scale-up">
          <h6>{this.currentTime}</h6>
        </div>
        {this.props.currentUsername === this.props.username ? (
          <div className="col-1 text-center scale-up" onClick={this.deleteMe}>
            <img src={trash} alt="trash" />
          </div>
        ) : (
          <div className="col-1"></div>
        )}
      </div>
    );
  }
}

Message.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Message;
