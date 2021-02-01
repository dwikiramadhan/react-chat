var express = require('express');
var router = express.Router();

var Message = require('../models/message')

router.post('/message', function (req, res, next) {
    var { id, name, message } = req.body;

    Message.create({ id, name, message, createdAt: Date.now() }, (err, data) => {
        res.status(201).json({
            success: true,
            message: "data have been added",
            data: data
        })
    })

});

router.get('/message', function (req, res, next) {
    Message.find(
        {})
        // .limit(3)
        // .sort({ 'id': -1 })
        .exec(function (err, data) {
            res.status(200).json({
                data
            })
        })

})

router.put('/message/:id', function (req, res, next) {
    var _id = req.params.id
    var { name, message } = req.body
    Message.findByIdAndUpdate(_id, { name, message }, { new: true }, (err, data) => {
        res.status(201).json({
            success: true,
            message: "data have been updated",
            data: data
        })
    })

})

router.delete('/message/:id', function (req, res, next) {
    var _id = req.params.id
    Message.findByIdAndRemove(_id, (err, data) => {
        res.status(201).json({
            success: true,
            message: "data have been deleted",
            data: data
        })
    })

})

module.exports = router;