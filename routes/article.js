
    const express = require(`express`);
    const articleController = require(`../controlers/article`);
    const verify = require(`../routes/verifyToken`);
    const router = express.Router();
    
    router.post(`/article`,verify, articleController.articleController);
    router.get(`/article`,verify, articleController.getArticles);
    router.get(`/:_id`, verify, articleController.getArticle);
    router.put(`/:_id`, verify, articleController.updateArticle);
    router.delete(`/:_id`,verify, articleController.deleteArticle)
    
    
    module.exports = router