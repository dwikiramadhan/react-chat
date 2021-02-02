import { all, takeEvery, put, call } from 'redux-saga/effects';
import request from '../actions/connect';
import * as actions from '../actions';

import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const read = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const remove = async (path, params) =>
    await request.delete(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });



const PATH = '/api/message'

//add
function* loadMessage() {
    try {
        const data = yield call(read, PATH);
        yield put(actions.loadMessageSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.loadMessageFailure());
    }
}

function* postMessage(payload) {
    const { name, message } = payload;
    const id = Date.now();
    yield put(actions.addMessageView(id, name, message));
    try {
        const data = yield call(add, PATH, { id, name, message })
        socket.emit('chat', data)
        console.log('mengirim emit chat')
        yield put(actions.addMessageSuccess(data))
    } catch (error) {
        yield put(actions.addMessageFailure(id))
    }
}

function* deleteMessage(payload) {
    const { id } = payload;
    console.log(id)
    yield put(actions.deleteMessageView(id));
    try {
        const data = yield call(remove, `${PATH}/${id}`)
        socket.emit('chat', data)
        console.log('mengirim emit chat')
        yield put(actions.deleteMessageSuccess())
    } catch (error) {
        yield put(actions.deleteMessageFailure())
    }
}

function* resendMessage(payload) {
    const { id, name, message } = payload;
    try {
        const data = yield call(add, PATH, { id, name, message })
        socket.emit('chat', data)
        console.log('mengirim emit chat')
        yield put(actions.addMessageSuccess(data))
    } catch (error) {
        yield put(actions.addMessageFailure(id))
    }
}


export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_MESSAGE', loadMessage),
        takeEvery('POST_MESSAGE', postMessage),
        takeEvery('REMOVE_MESSAGE', deleteMessage),
        takeEvery('RESEND_MESSAGE', resendMessage),
    ])
}