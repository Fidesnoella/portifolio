const { string } = require("joi");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const { isEmail} = require(`validator`);


const userSchema = new Schema({
  full_name: {
    type: String,
    require: [true, `Please enter a name`],
    minlength: [4, `Name must be atleast 4 characters`]
  },
 email : {
    type: String,
    require: [true, `Please enter an email`],
    unique:true,
    lowercase:true,
    validate: [isEmail, `Please enter a valid email`]
  },
  password :{
    type: String,
    require: [true, `Please enter a password`],
    minlength: [6, `Minimum password length is 6 characters`]
    // validate: [(val) => {/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,}$/}, `Password can contain letters, number, symbol, uppercase and lower case`]
  },

}, { timestamps: true});

userSchema.post(`save`, function(next){
  console.log(`New user created`, doc);
  next();
})

const Users =  mongoose.model(`Users`, userSchema)
module.exports =  Users;
