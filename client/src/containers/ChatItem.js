import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resendMessage, deleteMessage } from '../actions';
import ReactMarkdown from 'react-markdown';
import Swal from 'sweetalert2';

class ChatItem extends Component {
    handleBtnResend = () =>{
        this.props.resendMessage(this.props.id, this.props.name, this.props.message)
    }
    handleBtnDelete = () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Anda tidak akan dapat mengembalikan ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.deleteMessage(this.props.id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    render() {
        const createdAt = this.props.createdAt;
        const createdAtDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(createdAt);
        const createdAtTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(createdAt);

        return (
            <li>
                <div className="timeline-time">
                    <span className="date">{createdAtDate}</span>
                    <span className="time">{createdAtTime}</span>
                    <button className={this.props.sent ? "btn btn-outline-danger btn-sm":"d-none"} onClick={this.handleBtnDelete}><i className="fa fa-trash"></i> Delete</button>
                </div>
                <div className="timeline-icon">
                    <div className={"status bg-info"}><h3><b>-</b></h3></div>
                </div>
                <div className={this.props.sent ? "timeline-body":"timeline-body border border-danger text-danger"}>
                    <div className="timeline-header d-flex">
                        <div className="p-2"><span className={this.props.sent ? "username" : "username text-danger"}>{this.props.name}</span></div>
                        <div className={this.props.sent ? "d-none":"ml-auto p-2 "}><button className="btnResend text-danger" onClick={this.handleBtnResend}>Gagal | <i className="fa fa-repeat"></i></button></div>
                    </div>
                    <div className="timeline-content">
                        <div className="lead">
                            <ReactMarkdown source={this.props.message} />
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    resendMessage: (id, name, message) => dispatch(resendMessage(id, name, message)),
    deleteMessage: (id) => dispatch(deleteMessage(id))
})

export default connect(
    null,
    mapDispatchToProps
)(ChatItem)