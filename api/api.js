const express = require('express')
const api = express()
const database = require ('./database')

const PORT = 3000

/* For json posrt in the http body */
const { usersRouter } = require('./Routes')

api.use(express.json())

api.use('/api', usersRouter )


api.listen( PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})

// api.get('/user', async (req,res) => {
//     const result = await database.getUser() 
//     res.json(result)
// })

// api.post('/createUser', async (req,res) => {
//     const body = req.body
//     const result = await database.addUser(body)
//     res.json(result)
// })

// api.put('/updateUser/:id', async (req,res) => {
//     const id_user = req.params.id
//     const body = req.body
    
//     const result = await database.updateUser(id_user, body)

//     res.json(result)
// })

// api.delete('/deleteUser', async (req,res) => {
// })