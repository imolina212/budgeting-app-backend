//Dependencies
const express = require("express")
const cors = require("cors")

//Create Express app
const app = express()

//Middleware
app.use(cors())
app.use(express.json())

//Controllers
const transactionsController = require("./controllers/transactionsController")
app.use("/transactions", transactionsController)

//Routes
app.get("/", (request, response) => {
    response.status(200).send("Welcome to Budget App")
})

app.get("*", (request, response) => {
    response.status(404).send("Page Not Found")
})

module.exports = app;