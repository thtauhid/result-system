const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    roll: {
        type: Number,
        require: true,
        unique: true
    },
    reg: {
        type: Number,
        require: true,
        unique: true
    },
    year: {
        type: Number,
        require: true,
    }

}, {
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student