const express = require(`express`);
const userController = require(`../controlers/user`);
const router = express.Router();

router.post(`/register`, userController.userController);
router.post(`/login`, userController.userloginController)
router.get(`/users`, userController.getusers);
router.get(`/:_id`, userController.getuser);
router.put(`/:_id`, userController.updateUser);
router.delete(`/:_id`, userController.deleteUser);


module.exports = router