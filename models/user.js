const { string } = require("joi");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const userSchema = new Schema({
  full_name: {
    type: String,
    require: true,
    min: 4,
    max: 255
  },
 email : {
    type: String,
    require: true,
    unique:true,
    lowercase:true,
    min: 6,
    max: 255
  },
  password :{
    type: String,
    require: true,
    min: 6,
    max: 255
  },
  Confirm_password :{
    type: String,
    require: true,
    min: 6,
    max: 255
  }

}, { timestamps: true});

userSchema.post(`save`, function(doc, next){
  console.log(`New user created`, doc);
  next();
})

const Users =  mongoose.model(`Users`, userSchema)
module.exports =  Users;
