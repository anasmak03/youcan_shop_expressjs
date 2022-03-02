const express = require('express')
const router = express.Router()


router.get('/training', (req,res) => {
    res.render('training')
})
module.exports = router;