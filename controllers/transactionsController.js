//Dependencies
const express = require("express")
//Files
const transactionArr = require("../models/transactions")
//Create new controller to handle sub routes
const transactions = express.Router();

//Index
transactions.get("/", (request, response) => {
    response.status(200).json(transactionArr)
})
//Show
transactions.get("/:id", (request, response) => {
    if(transactionArr[request.params.id]) {
        response.send(transactionArr[request.params.id])
    } else {
        response.redirect("./logs/id")
    }
})
//Create
//Update
//Delete

module.exports = transactions;