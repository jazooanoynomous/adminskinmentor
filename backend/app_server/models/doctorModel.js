var userModel = require('mongoose');
var varlidatorr = require('validator');



var schema = new userModel.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"]
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    // validate: varlidatorr.isEmail,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    // minLength: [6, "Password"]
  },
  role: {
    type: String,
    default: 'doctor'
  },
  specialty:{
    type : String,
    required: [true, "Please enter your specialty"]
  },
  startAvailability:{
    type : String,
  },
  endAvailability:{
    type : String,
  },
  cliniAddress:{
    type : String,
    required: [true, "Please enter your clinic address"]
  },
  phoneNumber:{
    type : String,
    required: [true, "Please enter your phone number"]
  },
  profileImage: {
    type: [{
      url: {
        type: String,
        required: true
      },
      cloudinaryId: {
        type: String,
        required: true
      },
      owner: {
        type: String,
        required: true
      },
    }],
    required: true,
    default: []
  },
});

module.exports = ModelUser = userModel.model("ModelUser", schema);
