var express = require("express");
var router = express.Router();
var auth = require("../../modules/auth");
var Candidate = require("../../models/candidates");
var candidatesController = require("../../controllers/candidatesController");

//education post
router.post("/", candidatesController.addEducation);

module.exports = router;
