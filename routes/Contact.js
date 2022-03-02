const express = require('express')
const User  = require('../models/Contact')
const router = express.Router()

router.get('/Contact', (req,res) => {
    res.render('Contact');
})

router.post('/Contact', (req,res) => {
    console.log(req.body)
})



    



module.exports = router;