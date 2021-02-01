import React, { Component } from 'react';
import ChatItem from './ChatItem';

export default class ChatList extends Component {
    
    render() {
        const dataNode = this.props.data.map((item, index) =>
            <ChatItem
                key={index}
                id={item._id}
                name={item.name}
                message={item.message}
                sent={item.sent}
                createdAt={item.createdAt}
            />
        )
        return (
            dataNode
        )
    }
}