const express = require('express')
const mariadb = require('mariadb')
const router = express.Router();

const usersRouter = require('./routes/user')

const PORT = 3001

const server = express()

/* Middlewares */
server.use(express.json())

/* Routes */
// server.('/users', usersRouter)


/* Server ON - PORT */
server.listen( PORT , () => {
    console.log(`Server Listening on port: ${PORT}`)
})