const router = require('express').Router()
let Result = require('../models/result.model')

// Show Result
router.route('/').get((req, res) => {
    Result.find({
            "roll": req.body.roll,
            "reg": req.body.reg
        })
        .then(result => res.json(result))
        .catch(err => res.staus(400).json('Error: ', +err))
})

// Add Result
router.route('/').post((req, res) => {
    const roll = req.body.roll
    const reg = req.body.reg
    const bengali = req.body.bengali
    const english = req.body.english
    const math = req.body.math

    const newResult = new Result({
        roll,
        reg,
        bengali,
        english,
        math
    })

    newResult.save()
        .then(res.json('Result Added!'))
        .catch(err => res.status(400).json('Error: ', +err))
})



module.exports = router