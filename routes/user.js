const express = require(`express`);
const userController = require(`../controlers/user`);
const router = express.Router();

router.post(`/register`, userController.userController);
router.post(`/login`, userController.userloginController)
router.get(`/users`, userController.getuser);



module.exports = router