import React from 'react';

const MessageBox = ({children}) => {
    return (
        <div className="message-box">
           <h2>{children}</h2>
        </div>
    );
};

export default MessageBox;