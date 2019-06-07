import React from 'react';


import './Message.css';
const Message = (props) => {
    return (
        <div className="row justify-content-center msgRow">
                <div className="col-2 text-center">
                    <img src={props.avatar} alt="avatar" className="msgAvatar"/>
                </div>
                <div className="col-8 text-left">
                    <h6> {props.username}</h6>
                    <h5> {props.text}</h5>
                </div>
            </div>
    )
};

export default Message;
