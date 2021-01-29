const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    id: Number,
    name: String,
    message: String,
});

module.exports = mongoose.model('Message', messageSchema)