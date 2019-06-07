import React from 'react';
import io from 'socket.io-client';
import Chat from './Chat';
import NewMessage from './NewMessage';

let socket = io("https://spotim-demo-chat-server.herokuapp.com");

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            messages: []
        };
    }
    
    createNewMessage = (messageContent) => {
        this.setState({messages: messageContent});
    }

    componentDidMount() { //runs when component loads
        this.socketConnection()
    }

    socketConnection = () => {
        socket.on("connect", () => {});
        socket.on("disconnect", () => {});
        socket.on("spotim/chat", msg => {
            this.setState({messages: [...this.state.messages, msg]});
        });
    }

    createMessage = msg => {
        console.log(msg);
        //socket.emit('spotim/chat', "asd")
        this.setState( { messages: [...this.state.messages , msg] } );
        console.log(this.state.messages)
    }

    render() {
       return( 
            <div className="container-fluid">
                <header className="text-center justify-content-center">
                    <h1 className="title">Welcome to my Group Chat</h1>
                </header>
                <div className="row justify-content-between">
                    <div className="col-4 text-center justify-content-center">
                        <NewMessage createMessage={this.createMessage} />
                    </div>
                    <div className="col-8 text-center justify-content-center">
                        <Chat messages={this.state.messages} />
                    </div>  
                </div>
            </div>
       )
    };
};

export default App;