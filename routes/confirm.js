const express = require('express')
const router = express.Router()

router.get('/confirm', (req,res) => {
    res.render('confirm')
})

module.exports = router