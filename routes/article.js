
    const express = require(`express`);
    const articleController = require(`../controlers/article`);
    const router = express.Router();
    
    router.post(`/article`, articleController.articleController);
    router.get(`/article`, articleController.getArticle);
    
    
    module.exports = router