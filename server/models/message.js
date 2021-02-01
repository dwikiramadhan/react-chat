const mongoose = require('mongoose');

// const moment = require('moment-timezone');
// const dateThailand = moment.tz(Date.now(), "Asia/Bangkok");

// console.log(dateThailand);

const messageSchema = new mongoose.Schema({
    id: Number,
    name: String,
    message: String,
    createdAt: Number
});

module.exports = mongoose.model('Message', messageSchema)