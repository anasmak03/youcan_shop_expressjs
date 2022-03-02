const express = require("express")
const router = express.Router()
const User  = require('../models/careers')

router.get('/careers', (req,res) => {
    res.render('careers')
})

router.post('/careers', (req,res) => {
    let mydata  = new User(req.body)
    mydata.save()

    .then(item => {
        res.redirect('/confirm2')
    
    }).catch(err => {
        res.status(400).send('database not working')
    })
})

module.exports = router