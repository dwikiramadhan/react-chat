import Swal from 'sweetalert2';
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const message = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    message: action.message
                }
            ]

        case 'ADD_MESSAGE_SUCCESS':
            return state.map(item => {
                // return console.log(item)
                Swal.fire({
                    icon: 'success',
                    title: 'Message has been Add!',
                    text: ''
                }).then(function () {
                    // history.push('/home')
                });
                item.sent = true
                return item
            });

        case 'ADD_MESSAGE_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false
                }
                return item
            });

        case 'LOAD_MESSAGE_SUCCESS':
            return action.data.data.map((item) => {
                item.sent = true;
                // socket.emit('chat', item);
                // console.log(item)
                return item
            })

        case 'LOAD_MESSAGE_FAILURE':
            return state;

        default:
            return state;
    }
}

export default message;