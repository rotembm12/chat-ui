import React from 'react';
import './NewMessage.css';
import uuid from 'uuid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import cat from '../assets/avatars/cat.png';
import dog from '../assets/avatars/dog.png';
import lion from '../assets/avatars/lion.png';
import monkey from '../assets/avatars/monkey.png';
import zebra from '../assets/avatars/zebra.png';
class NewMessage extends React.PureComponent{
    
    constructor(props){
        super(props);
        this.state = {
            avatars: [],
            text: '',
            avatar: '',
            chosenAvatar: '',
            username: '',
            id: '',
            loggedUser: false
        }
    }

    

    onFormSubmit = event => {
        event.preventDefault();
        if(this.state.text === "" || this.state.username === ""){
            alert('field is empty!');
        } else{
            this.props.createMessage({text: this.state.text, id: uuid.v4(), username: this.state.username, currentAvatar: this.state.chosenAvatar});
            this.setState({username:'', chosenAvatar: '', text:'', id:''})
        }
    }
    
    onChangeAvatar = (event) => {
        this.setState({
            chosenAvatar: event.target.src
        }, () => {
            console.log(this.state.chosenAvatar)
        });
    }
    loginUser = (event) => {
        this.setState({loggedUser: !this.state.loggedUser})
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="row justify-content-center">
                    <div className="col-12 icons text-center justify-content-center">
                        <div className="row justify-content-center">
                            {[cat, dog, lion, monkey, zebra].map(avatar => {
                                return <div className="col-1">
                                    <img 
                                    src={avatar} 
                                    alt="avatar image" 
                                    className="img-fluid"
                                    onClick={this.onChangeAvatar}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-9 justify-content-between">
                        <TextField type="text"
                            style={{width: '70%'}}
                            margin="normal"
                            label="Username"
                            className="form-control"
                            variant="outlined"
                            value={this.state.username}
                            onChange={e => this.setState({username: e.target.value})}
                        />
                        {this.state.loggedUser ? <Button variant="outlined" color="primary" onClick={this.loginUser}>
                            Logout
                        </Button> : <Button variant="outlined" color="success" onClick={this.loginUser}>
                            Login
                        </Button>}
                    </div>
                    <div className="col-2">
                        <img src={this.state.chosenAvatar} alt="" style={{width: '50px', height: '50px'}}/>
                    </div>
                    {this.state.loggedUser && 
                    <div>
                        <div className="col-12 text justify-content-left">
                      
                      <TextField 
                      style={{width: '70%'}}
      
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows="4"
                      margin="normal"
                      variant="outlined"
                      value={this.state.text}
                      onChange={(e) => this.setState({ text: e.target.value }, )}
                  />
                     </div>
                     <div className="col-4 submit text-center">
                         <button className="btn btn-success" onClick={this.showMessage}>Send</button>
                     </div>
                     </div>
                    }

                </div>
            </form>
        );
    }
}

export default NewMessage;