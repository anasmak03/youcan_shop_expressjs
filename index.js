const express = require('express')
const colors = require('colors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))



const url = "mongodb+srv://anasMakhloufi:anas5313NN@cluster0.ocj5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });


// parse application/json
app.use(bodyParser.json())
PORT = 7000;

app.use(express.static('public'))

// import ejs
app.set('view engine', 'ejs')
const esj = require('ejs')

const home = require('./routes/Home')
const life = require('./routes/life')
const contact = require('./routes/Contact')
const careers = require('./routes/careers')
const training = require('./routes/training')
const confirm = require('./routes/confirm')
const confirm2 = require('./routes/confirm2')

app.use('', home)
app.use('', life)
app.use('',contact)
app.use('',careers)
app.use('',training)
app.use('',confirm)
app.use('',confirm2)
app.listen(PORT, (req,res) => {
    console.log(`server are good in ${PORT}`.green.underline)
})