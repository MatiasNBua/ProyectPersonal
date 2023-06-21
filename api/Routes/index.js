const express = require('express')
const { Router , json } = express

// Importacion de las logicas
const { registerUserHandler } = require ('./users')
 
const usersRouter = Router()
usersRouter.post('/users', registerUserHandler.registerUser)


const auctionRouter = Router()


const bidRouter = Router()

module.exports = {
    usersRouter,
    auctionRouter,
    bidRouter
}