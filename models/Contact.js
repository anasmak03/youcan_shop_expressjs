const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
   email:{
      type: String,
      required: true
   },
   lien: {
      type: String,
      required: true
   },
   message: {
      type: String,
      required: true
   }
},{
   timestamps: true,
  
})
module.exports = mongoose.model('User', userSchema);