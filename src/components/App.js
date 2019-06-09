import React from "react";
import io from "socket.io-client";
import Chat from "./Chat/Chat";
import NewMessage from "./NewMessage/NewMessage";
import Login from "./Login/Login";
import "./App.css";

const socket = io("https://spotim-demo-chat-server.herokuapp.com");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userLogged: false
    };
  }

  createNewMessage = messageContent => {
    this.setState({ messages: messageContent });
  };

  componentDidMount() {
    this.socketConnection();
  }

  socketConnection = () => {
    socket.on("connect", () => {});
    socket.on("disconnect", () => {});
    socket.on("spotim/chat", msg => {
      this.setState({ messages: [...this.state.messages, msg] });
    });
  };

  createMessage = msg => {
    socket.emit("spotim/chat", msg);
  };

  userLogged = user => {
    this.setState({ user });
    this.setState({ userLogged: true });
  };

  userLoggedOut = () => {
    this.setState({ user: undefined, userLogged: false });
  };

  deleteMessage = id => {
    const filteredMessages = this.state.messages.filter(msg => msg.id !== id);
    this.setState({ messages: filteredMessages });
  };

  render() {
    return (
      <div className="container-fluid">
        <header className="text-center justify-content-center">
          <h1 className="title">Welcome to the Jungle Chat</h1>
        </header>
        <Login
          userLoggedOut={this.userLoggedOut}
          userLogged={this.userLogged}
          user={this.state.user}
        />
        {this.state.userLogged ? (
          <div className="row justify-content-center">
            <div className="col-8 text-center justify-content-center">
              <Chat
                deleteMessage={this.deleteMessage}
                username={this.state.user}
                messages={this.state.messages}
              />
            </div>
            <div className="col-8 text-center justify-content-center">
              <NewMessage
                username={this.state.user}
                createMessage={this.createMessage}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
