import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';
import TextContainer from '../TextContainer/TextContainer';

import './Messages.css';

const Messages = ({ messages, name, users }) => (
  <div className="messageContainer">
    <div className="usersContainer">
      <TextContainer users={users} />
    </div>
    <div className="messagesContainer">
      <ScrollToBottom className="messages">
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        ))}
      </ScrollToBottom>
    </div>
  </div>
);

export default Messages;
