import React from 'react';
import './NewMessage.css';
import uuid from 'uuid';
class NewMessage extends React.PureComponent{
    
    constructor(props){
        super(props);
        this.state = {
            text: '',
            avatar: '',
            chosenAvatar: '',
            userName: '',
            password: '',
            id: ''
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
        if(this.state.text === ""){
            alert('Your text field is EMPTY!');
        } else{
            this.props.createMessage({text: this.state.text, id: uuid.v4()})
        }
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="row justify-content-center">
                    <div className="col-12 icons text-center">
                        
                    </div>
                    <div className="col-12 text text-center">
                        <textarea
                            className="myTextArea"
                            type="text" 
                            placeholder="Message content"
                            value={this.state.text}
                            onChange={(e) => this.setState({ text: e.target.value })}
                        />
                    </div>
                    <div className="col-4 submit text-center">
                        <button className="btn btn-success" onClick={this.showMessage}>Send</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default NewMessage;