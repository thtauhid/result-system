const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    roll: {
        type: Number,
        required: true,
        unique: true
    },
    reg: {
        type: Number,
        required: true,
        unique: true
    }

}, {
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student