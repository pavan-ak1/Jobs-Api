const mongoose = require("mongoose");
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    require: [true, "Please provide a email"],
    minlength: 3,
    maxlength: 50,
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
    unique:true,
  },
  password:{
    type:String,
    required:true,
    minlength:6,
  },
});


module.exports = mongoose.model('User',UserSchema)