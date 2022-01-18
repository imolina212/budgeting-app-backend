//Dependencies
const express = require("express")
const cors = require("cors")

//Create Express app
const app = express()

//Middleware
app.use(cors())
app.use(express.json())

//Controllers
const transactionController = require("./controllers/transactionController")
app.use("/transactions", transactionController)

//Routes
app.get("/", (response, request) => {
    response.status(200).send("Welcome to Budget App")
})

app.get("*", (response, request) => {
    response.status(404).send("Page Not Found")
})

module.exports = app;