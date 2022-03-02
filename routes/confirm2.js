const express = require('express')
const router = express.Router()

router.get('/confirm2', (req,res) => {
    res.render('confirm2')
})

module.exports = router