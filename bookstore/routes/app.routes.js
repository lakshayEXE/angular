const express = require("express")
const router = express.Router();
const bookController = require('..//controller/app.controller');

router.get("/addBooks" ,(req,res)=>{
    res.send("You are making GET request make Post req to add book");
})
router.post("/list", (req,res)=>{
    res.send("you are sending POST request for a GET function")
})


router.post("/addBooks" ,bookController.addBooks)
router.get("/list", bookController.getAllBooks)
router.delete("/delete/:id" , bookController.deleteBook)
router.put("/update/:id" , bookController.updateBooktitle)
module.exports = router;
