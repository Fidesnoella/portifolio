
const User = require(`../models/user`);
const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);
const{registerValidation, loginValidation} = require(`../validation`)



const userController = async (req, res) =>{
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
    password: hashedPassword
    });
    try{
    // const savedUser = await user.save();
    // res.send(savedUser);
    const savedUser = await user.save();
    res.status(201).json({message: `user created`, savedUser});
    // {user: user._id}ated
    }catch(err){
        // res.status(400).send(err);
        res.status(500).json({message: err})
    }
  }
  

  const getuser = async (req, res) =>{
    try {
        const allUsers = await User.find()
        res.status(200).json({message: `All contactInformation`, allUsers});
    }catch(err){
  res.status(500).json({message: err})
    }
  }


// Login
const userloginController = async (req, res) =>{
   //  Validate data before user
   const {error} = loginValidation(req.body);
   if (error) return res.status(400).send(error.details[0].message);
   
   // check if the user is already in the database
   const user = await User.findOne({email: req.body.email});
   if(!user) return res.status(400).send(`Email is not found`);
   
   // password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send(`Invalid Password`);
   
   //  create and assign token
   const token  = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
   res.header(`auth_token`, token).send(token);
   
    res.send(`Logged In`);
   }
   

    
    module.exports = {
        userController,
        userloginController,
        getuser
      }