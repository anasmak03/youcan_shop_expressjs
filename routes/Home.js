const express = require('express')
const router = express.Router()
const User  = require("../models/Email")

router.get('/', (req,res) => {
    res.render('Home')
})

router.post('/' , (req,res) => {
    let myemail  = new User(req.body)
   myemail.save()

    .then(item => {
        res.redirect('/')
    
    }).catch(err => {
        res.status(400).send('database not working')
    })
})
module.exports = router