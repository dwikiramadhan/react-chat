//start create user 
export const addMessageSuccess = (message) => ({
    type: 'ADD_MESSAGE_SUCCESS',
    message
})

export const addMessageFailure = (id) => ({
    type: 'ADD_MESSAGE_FAILURE',
    id
})

export const addMessageView = (id, name, message) => ({
    type: 'ADD_MESSAGE',
    id, name, message
})

export const addMessage = (name, message) => ({
    type: 'POST_MESSAGE', name, message
    // let id = Date.now()
    // return dispatch => {
    //     dispatch(addMessageView(id, name, message))
    //     return request.post('/api/message', {
    //         id, name, message
    //     }).then(response => {
    //         socket.emit('chat', response.data.data)
    //         console.log('mengirim emit chat')
    //         dispatch(addMessageSuccess(response.data))
    //     }).catch(function (error) {
    //         console.log(error);
    //         dispatch(addMessageFailure(id))
    //     })
    // }
});
//end create user

//load data 
export const loadMessageSuccess = (data) => ({
    type: 'LOAD_MESSAGE_SUCCESS',
    data
})

export const loadMessageFailure = () => ({
    type: 'LOAD_MESSAGE_FAILURE'
})

export const loadMessage = () => ({
    type: 'LOAD_MESSAGE'
    // return dispatch => {
    //     return request.get('/api/message')
    //         .then(response => {
    //             dispatch(loadMessageSuccess(response.data))
    //         }).catch(function (error) {
    //             console.log(error);
    //             dispatch(loadMessageFailure())
    //         })
    // }
})
//end load data

//delete data 
export const deleteMessageSuccess = () => ({
    type: 'DELETE_MESSAGE_SUCCESS'
})

export const deleteMessageFailure = () => ({
    type: 'DELETE_MESSAGE_FAILURE'
})

export const deleteMessageView = (id) => ({
    type: 'DELETE_MESSAGE',
    id
})

export const deleteMessage = (id) => ({
    type: 'REMOVE_MESSAGE',
    id
    // return dispatch => {
    //     dispatch(deleteMessageView(id))
    //     return request.delete(`/api/message/${id}`)
    //         .then(response => {
    //             socket.emit('chat', response.data.data)
    //             console.log('mengirim emit chat')
    //             dispatch(deleteMessageSuccess(response.data.data))
    //         }).catch(function (error) {
    //             dispatch(deleteMessageFailure())
    //         })
    // }
})
//end delete data

//resend message 
export const resendMessage = (id, name, message) => ({
    type: 'RESEND_MESSAGE',
    id, name, message
    // return dispatch => {
    //     return request.post('/api/message', {
    //         id, name, message
    //     }).then(response => {
    //         socket.emit('chat', response.data.data)
    //         console.log('mengirim emit chat')
    //         dispatch(addMessageSuccess(response.data))
    //     }).catch(function (error) {
    //         console.log(error);
    //         dispatch(addMessageFailure(id))
    //     })
    // }
});
//end resend message