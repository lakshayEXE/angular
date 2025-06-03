const express = require("express");
const router = express().router();
const uc = require('../controller');

router.get("/lakshay", uc.getUser);

module.exports = router;