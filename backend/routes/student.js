const router = require('express').Router()
let Student = require('../models/student.model')

// Add New Student
router.route('/add').post((req, res) => {
    const roll = req.body.roll
    const reg = req.body.reg
    const year = req.body.year
    const newStudent = new Student({
        roll,
        reg,
        year
    })

    newStudent.save()
        .then(res.json('Student Added!'))
        .catch(err => res.catch(400).json('Error: ', +err))
})

module.exports = router