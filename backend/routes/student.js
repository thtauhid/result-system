const router = require('express').Router()
let Student = require('../models/student.model')

// List all student
router.route('/list').get((req, res) => {
    Student.find()
        .then(result => res.json(result))
        .catch(err => res.staus(400).json('Error: ', +err))
})


// Add New Student
router.route('/add').post((req, res) => {
    const roll = req.body.roll
    const reg = req.body.reg
    const newStudent = new Student({
        roll,
        reg
    })

    // Save to DB
    newStudent.save()
        .then(res.json('Student Added!'))
        .catch(err => res.status(400).json('Error: ', +err))
})

module.exports = router