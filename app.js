// import modules
const express = require("express")
const router = require("./router/router")
const app = express()
const cors = require("cors")
app.use(cors({optionSuccessStatus: 200}))
//middlewares 
//*** routers */
app.use("/api/whoami",router)
module.exports = app