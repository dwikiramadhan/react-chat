import request from './connect';

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

export const addMessage = (name, message) => {
    let id = Date.now()
    return dispatch => {
        dispatch(addMessageView(id, name, message))
        return request.post('/api/message', {
            id, name, message
        }).then(response => {
            dispatch(addMessageSuccess(response.data))
        }).catch(function (error) {
            console.log(error);
            dispatch(addMessageFailure(id))
        })
    }
};
//end create user