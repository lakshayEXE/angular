const express = require("express")
const router = express.Router();
const userController = require('../controller/user.controller');

router.get("/" ,userController.getUser)
router.post("/:id", userController.createUser)
router.get("/:id", userController.getUserByid)
router.put("/:id", userController.UpdateUser)
router.delete("/:id" , userController.deleteUser)
module.exports = router;