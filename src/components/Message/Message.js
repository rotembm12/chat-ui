import React from "react";
import trash from "../../assets/avatars/garbage.png";
import "./Message.css";
import PropTypes from "prop-types";

const Message = props => {
  const deleteMe = () => {
    props.deleteMessage(props.id);
  };

  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className={"row justify-content-center msgRow"}>
      <div className="col-2 text-center scale-up" style={{ height: "100%" }}>
        <img src={props.avatar} alt="avatar" className="msgAvatar" />
      </div>
      <div
        className="col-6 text-left scale-up"
        style={{ maxHeight: "100% !important" }}
      >
        <h6> {props.username}</h6>
        <h5> {props.text}</h5>
      </div>
      <div className="col-1 text-left scale-up">
        <h6>{currentTime}</h6>
      </div>
      {props.currentUsername === props.username ? (
        <div className="col-1 text-center scale-up" onClick={deleteMe}>
          {""}
          <img src={trash} alt="trash" />
        </div>
      ) : (
        <div className="col-1"></div>
      )}
    </div>
  );
};

Message.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Message;
