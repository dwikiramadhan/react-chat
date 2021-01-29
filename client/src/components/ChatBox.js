import React, { Component } from 'react';

import ChatList from '../containers/ChatList';
import ChatForm from '../containers/ChatForm';

export default class ChatBox extends Component {
    render() {
        return (
            <div className="container">
                <div className="alert alert-info mt-3" role="alert">
                    <h1 className="text-center">React Chat</h1>
                </div>
                <ul className="timeline">
                    <ChatList />
                    <ChatForm />
                </ul>
            </div>
        )
    }
}