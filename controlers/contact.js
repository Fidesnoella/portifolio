const contactInfo = require(`../models/contact`);

const contactInfoController = async (req, res) =>{
  const {full_name, email, message} = req.body;
  try {
      const newInfo = new contactInfo ({
          full_name,
          email,
          message
      })
     const saveInfo = await newInfo.save()
     res.status(201).json({message:`Thank you for your feedback`, saveInfo});
  } catch(err){
res.status(500).json({message:err});
  }
}

const getcontactInfo = async (req, res) =>{
  try {
      const allInformation = await contactInfo.find()
      res.status(200).json({message: `All contactInformation`, allInformation});
  }catch(err){
res.status(500).json({message: err})
  }
}

module.exports = {
  contactInfoController,
  getcontactInfo
}