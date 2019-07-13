const router = require('express').Router()
let Result = require('../models/result.model')

// Show Result
router.route('/result/:id').get((req, res) => {
    Result.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.staus(400).json('Error: ', +err))
})

module.exports = router