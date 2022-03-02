const express = require("express")
const router = express.Router()

router.get('/careers', (req,res) => {
    res.render('careers')
})

module.exports = router