const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let user7Schema = new Schema({
   email:{
      type: String,
      required: true
   },
},{
   timestamps: true,
  
})
module.exports = mongoose.model('Email1', user7Schema);