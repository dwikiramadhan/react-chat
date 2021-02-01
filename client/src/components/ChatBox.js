import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMessage } from '../actions';
import ChatList from '../containers/ChatList';
import ChatForm from '../containers/ChatForm';

import { io } from 'socket.io-client';

const socket = io("http://localhost:3000");

class ChatBox extends Component {
    
    componentDidMount() {
        this.props.loadMessage();
        socket.on('loadChat', () => {
            console.log('loadchat trigger')
            this.props.loadMessage();
        });
    }

    render() {
        // console.log(this.props.data)
        return (
            <div className="container">
                <div className="alert alert-info mt-3" role="alert">
                    <h1 className="text-center">React Chat</h1>
                </div>
                <ul className="timeline">
                    <ChatList data={this.props.data} />
                    <ChatForm />
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.message
})

const mapDispatchToProps = (dispatch) => ({
    loadMessage: () => dispatch(loadMessage())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatBox)