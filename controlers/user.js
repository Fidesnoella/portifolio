
const User = require(`../models/user`);
const mongoose =  require(`mongoose`);
const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);
const { object } = require("joi");
const { use } = require("chai");
const{registerValidation, loginValidation} = require(`../middlewares/auth`)

// // handle errors
// const handleErrors = (err) =>{
//   console.log(err.message, err.code);
//   let errors = {full_name : `` , email: ``, password: `` };

// if (err.code === 11000) {
//   errors.email = `email already exist`;
//   return errors;
// }

//   // validatin errors

//   if(err.message.includes(`user validation failed`)) {
//     Object.values(err.errors).forEach(({properties})=> {
//       errors[properties.path] = properties.message;
//     });
//   }
//   return errors;
// }

// const maxAge = 3 * 24 * 60 * 60 ;

// const createToken = (id) => {
//   return jwt.sign({ id }, `my secret`, {
//     expiresIn: maxAge
//   });
// }

module.exports.signup_get = (req, res) =>{
  res.render(`signup`);
}
module.exports.login_get = (req, res) =>{
  res.render(`login`);
}
module.exports.signup_post = async (req, res) =>{

//    //  Validate data before user
// const {error} = registerValidation(req.body);
// if (error) return res.status(400).send(error.details[0].message);

// // check if the user is already in the database
// const emailExist = await User.findOne({email: req.body.email});
// if(emailExist) return res.status(400).send(`Email already exists`);

// // Hash password
// const salt = await bcrypt.genSalt(10);
// const hashedPassword = await bcrypt.hash(req.body.password, salt);


// create new user
// const user = new User({
//     full_name: req.body.full_name,
//     email: req.body.email,
//     password: hashedPassword,
//     });
// const{ full_name,email, password} = req.body;
//     try{
//     // const savedUser = await  user.save();
//     const user = await User.create({full_name, email, password});
//     const token = createToken(user._id);
//     res.cookie(`jwt`, token, { httpOnly: true, maxAge: maxAge * 1000 });
//    res.status(201).json({user: user._id});
//     }catch(err){
//      const errors = handleErrors(err)
//       res.status(400).json({errors});
    // }
      //  Validate data before user
const {error} = registerValidation(req.body);
if (error) return res.status(400).send(error.details[0].message);

// check if the user is already in the database
const emailExist = await User.findOne({email: req.body.email});
if(emailExist) return res.status(400).send(`Email already exists`);

// Hash password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password, salt);

// create new user
const user = new User({
    full_name: req.body.full_name,
    email: req.body.email,
   s
    });
    try{
    const savedUser = await user.save();
    res.status(201).json({message: `user created`, savedUser});
    }catch(err){
        res.status(500).json({message: err})
    }

  }


module.exports.login_post = async (req, res) =>{
  // Validate data before user
   const {error} = loginValidation(req.body);
   if (error) return res.status(400).send(error.details[0].message);
   
   // check if the user is already in the database
   const user = await User.findOne({email: req.body.email});
   if(!user) return res.status(400).send(`Email is not found`);
   
   // password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send(`Invalid Password`);
   
  res.send(`user login`);
}


// const userController = async (req, res) =>{
//    //  Validate data before user
// const {error} = registerValidation(req.body);
// if (error) return res.status(400).send(error.details[0].message);

// // check if the user is already in the database
// const emailExist = await User.findOne({email: req.body.email});
// if(emailExist) return res.status(400).send(`Email already exists`);

// // Hash password
// const salt = await bcrypt.genSalt(10);
// const hashedPassword = await bcrypt.hash(req.body.password, salt);

// // create new user
// const user = new User({
//     full_name: req.body.full_name,
//     email: req.body.email,
//    s
//     });
//     try{
//     const savedUser = await user.save();
//     res.status(201).json({message: `user created`, savedUser});
//     }catch(err){
//         res.status(400).json({message: err})
//     }
//   }
  

//   const getusers = async (req, res) =>{
//     try {
//         const allUsers = await User.find()
//         res.status(200).json({message: `All Users`, allUsers});
//     }catch(err){
//   res.status(500).json({message: err})
//     }
//   }
//   const getuser = async (req, res) =>{
//     const{_id} = req.params
//     if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({err: `Invalid id`})
//     try {
//         const user= await User.findById({_id})
//         if(!user) return res.status(404).json({message: `User not found`})

//         res.status(200).json({user});
//     }catch(err){
//   res.status(500).json({message: err})
//     }
//   }

// const updateUser = async (req, res) =>{
//      //  Validate data before user
// const {error} = registerValidation(req.body);
// if (error) return res.status(400).send(error.details[0].message);
//   const {full_name, email, password} = req.body;
//   try{
//     const{_id} = req.params
//     if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({err: `Invalid id`})
  
//     const user= await User.findById({_id})
//     if(!user) return res.status(404).json({message: `User not found`})

//     const updatedUser = await User.updateOne({_id}, {$set: {full_name, email, password}}, {new:true})
//     res.status(200).json({msg: `User updated successfully`, updatedUser})
  
//   }catch (error){
//     res.status(500).json({message: error})
//   }
// }

// const deleteUser = async (req, res) =>{
//   const{_id} = req.params
//   if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({err: `Invalid id`})

//   try{
//   const deletedUser = await User.deleteOne({_id})
//   res.status(200).json({message: `User Deleted successfully`, deletedUser})
//   }catch(error){
//     res.status(500).json({message: error})
//   }
// }

// // Login
// const userloginController = async (req, res) =>{
//    //  Validate data before user
//    const {error} = loginValidation(req.body);
//    if (error) return res.status(400).send(error.details[0].message);
   
//    // check if the user is already in the database
//    const user = await User.findOne({email: req.body.email});
//    if(!user) return res.status(400).send(`Email is not found`);
   
//    // password is correct
//     const validPass = await bcrypt.compare(req.body.password, user.password);
//     if(!validPass) return res.status(400).send(`Invalid Password`);
   
//    //  create and assign token
//    const token  = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
//    res.header(`auth_token`, token).send(token);
   
//     res.send(`Logged In`);
//    }
   

    
//     module.exports = {
//         userController,
//         userloginController,
//         getusers,
//         getuser,
//         updateUser,
//         deleteUser
//       }