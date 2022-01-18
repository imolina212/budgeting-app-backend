//Dependencies
const express = require("express")
//Files
const transactionsArr = require("../models/transactions")
//Create new controller to handle sub routes
const transactions = express.Router();

//Index
transactions.get("/", (request, response) => {
    response.status(200).json(transactionsArr)
})
//Show
transactions.get("/:id", (request, response) => {
    if(transactionsArr[request.params.id]) {
        response.send(transactionsArr[request.params.id])
    } else {
        response.redirect("./logs/id")
    }
})
//Create
transactions.post("/", (request, response) => {
    transactionsArr.push(request.body)
    response.json(transactionsArr[transactionsArr.length - 1])
})
//Update
transactions.put("/:id", (request, response) => {
    const { id } = request.params;
    if(transactionsArr[id]) {
        transactionsArr[id] = request.body
        response.status(200).json(transactionsArr[id])
    } else {
        response.status(404).json({error: "Not Found"})
    }
})
//Delete
transactions.delete("/:id", (request, response) => {
    const { id } = request.params;
    if(transactionsArr[id]) {
        const deletedTransaction = transactionsArr.splice(id, 1)
        response.status(200).json(deletedTransaction)
    } else {
        response.status(404).json({error: "Not Found"})
    }
})

module.exports = transactions;