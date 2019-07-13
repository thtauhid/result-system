const mongoose = require('mongoose')

const Schema = mongoose.Schema

const resultSchema = new Schema({
    roll: {
        type: Number,
        required: true,
        unique: true
    },
    reg: {
        type: Number,
        required: true,
        unique: true
    },
    bengali: {
        type: Number,
        required: true,
    },
    english: {
        type: Number,
        required: true,
    },
    math: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

const Result = mongoose.model('Result', resultSchema)

module.exports = Result