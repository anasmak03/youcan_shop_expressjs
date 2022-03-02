const express = require('express')
const router = express.Router()
    router.get('/life', (req,res) => {
        res.render('life')
    })
module.exports = router