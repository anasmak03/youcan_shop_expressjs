const express = require('express')
const User  = require('../models/Contact')
const router = express.Router()

router.get('/Contact', (req,res) => {
    res.render('Contact');
})

router.post('/Contact', (req,res) => {
    let data = new User(req.body)
    data.save()

    .then(item => {
        res.redirect('/confirm')
    
    }).catch(err => {
        res.status(400).send('database not working')
    })
})


module.exports = router;