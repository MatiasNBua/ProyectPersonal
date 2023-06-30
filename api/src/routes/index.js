const express = require('express')
const router = express.Router()
const { Router } = express


const { createUserHandler } = require('./user')



const usersRouter = Router()
usersRouter.post('/users', createUserHandler)

// const auctionRouter = Router()
// auctionRouter.post('/users', createUserHandler)


module.exports = router