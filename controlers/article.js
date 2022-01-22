
const Article = require(`../models/article`);




const articleController = async (req, res) =>{
    const {title, description} = req.body;
    try {
        const newArticle = new Article ({
            title,
            description
        })
       const savedArticle = await newArticle.save()
       res.status(201).json({message:`Article saved`, savedArticle});
    } catch(err){
  res.status(500).json({message:err});
    }
  }
  
  const getArticle = async (req, res) =>{
    try {
        const allArticle= await Article.find()
        res.status(200).json({message: `All articles`, allArticle});
    }catch(err){
  res.status(500).json({message: err})
    }
  }
  
  module.exports = {
    articleController,
    getArticle
  }





