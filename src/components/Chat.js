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
                key={msg.id}
                msg = {msg}
           />
        )
    });
      
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 text-center chatBox">
                    {this.messagesToShow()}
                </div>
            </div>
        );
    }
}

export default Chat;