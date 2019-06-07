import React from 'react';
import Message from './Message';
import './Chat.css';

class Chat extends React.Component{
    constructor(props){
        super(props);
    }

    messagesToShow = () => this.props.messages.map(msg => {
        return (
           <Message 
                avatar={msg.currentAvatar}
                key={msg.id}
                text = {msg.text}
                username = {msg.username}
           />
        )
    });
      
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 text-center">
                    {this.messagesToShow()}
                </div>
            </div>
        );
    }
}

export default Chat;