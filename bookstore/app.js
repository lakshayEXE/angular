const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const userRouter = require("./routes/app.routes.js")

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Welcome to book store !!')
})

app.use("/library" ,userRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
