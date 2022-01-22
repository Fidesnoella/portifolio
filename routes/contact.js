const express = require(`express`);
const contactController = require(`../controlers/contact`);
const router = express.Router();

router.post(`/contactInfo`, contactController.contactInfoController);
router.get(`/contactInfo`, contactController.getcontactInfo);



module.exports = router