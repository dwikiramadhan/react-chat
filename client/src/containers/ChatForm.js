import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class ChatForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            message: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleClickPost = (event) => {
        if (this.state.name && this.state.message) {
            this.props.addMessage(this.state.name, this.state.message)
            this.setState({ name: '', message: '' })
        }
        event.preventDefault();
    }
    render() {
        return (
            <li>
                <div className="timeline-icon">
                    <div className="status bg-warning"><h3><b>+</b></h3></div>
                </div>
                <div className="timeline-body">
                    <div className="timeline-content">
                        <div className="input">
                            <form onSubmit={this.handleClickPost}>
                                <div className="input-group mb-2">
                                    <input 
                                        type="text" 
                                        className="form-control rounded-corner" 
                                        placeholder="Your name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <textarea 
                                        type="text" 
                                        className="form-control rounded-corner" 
                                        placeholder="Write your chat here..."
                                        name="message"
                                        value={this.state.message}
                                        onChange={this.handleInputChange} />
                                </div>
                                <br />
                                <div className="input-group">
                                    <button className="btn btn-primary f-s-12 rounded-corner" type="submit">Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addMessage: (name, message) => dispatch(addMessage(name, message)),
})

export default connect(
    null,
    mapDispatchToProps
)(ChatForm)