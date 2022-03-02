const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let user1Schema = new Schema({
   email:{
      type: String,
      required: true
   },
   Number: {
      type: String,
      required: true
   },
   country: {
      type: String,
      required: true
   },

   city: {
    type: String,
    required: true
 },

 specialite: {
    type: String,
    required: true
 },

 message: {
    type: String,
    required: true
 },
   
}
  )
module.exports = mongoose.model('User2', user1Schema);