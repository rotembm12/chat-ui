import React from 'react';

const Message = (props) => {
    return <React.Fragment >
        <div className="row justify-content-center msgRow">
                <div className="col-8 text-center">
                    {props.msg.text}
                </div>
            </div>
    </React.Fragment>
};

export default Message;
