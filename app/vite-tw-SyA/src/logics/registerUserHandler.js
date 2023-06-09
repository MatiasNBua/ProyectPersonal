// import { EMAIL_REGEX } from './constants'

// const { FormatError } = require('errors')
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

// function validateEmail(email) {
//     if (typeof email !== 'string') throw new TypeError('email is not a string')
//     if (email.trim().length === 0) throw new FormatError('email is empty or blank')
//     if (email.length < 6) throw new FormatError('email length is not valid')
//     if (!EMAIL_REGEX.test(email)) throw new FormatError('email is not valid')
// }

// module.exports = validateEmail


const API_URL = "localhost:3000/api/createUser"

function registerUser(name, lastname, email, password, birth, phonenumber, callback) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (name.trim().length === 0) throw new Error('name is empty or blank')

    if (typeof lastname !== 'string') throw new TypeError('last name is not a string')
    if (lastname.trim().length === 0) throw new Error('last name is empty or blank')

    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid')
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')
    if (password.length < 8) throw new Error('password length is less than 8 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')


    const data = { name, lastname, email, password, birth ,phonenumber, }


}
//     const xhr = new XMLHttpRequest();

//     debugger
//     xhr.onload = function() {
//         const status = xhr.status

//         if (status >= 500)
//             callback(new Error(`server error (${status})`))
//         else if (status >= 400)
//             callback(new Error(`client error (${status})`))
//         else if (status === 201) 
//             callback(null)            
//     }

//     // request
    
//     xhr.open('POST', `${API_URL}/users`)

//     xhr.setRequestHeader('Content-type', 'application/json')

//     const json = JSON.stringify({name,lastname,email,password,birth,phonenumber})

//     xhr.send(json)
//     // xhr.send(`{"name": "${name}", "lastname": "${lastname}", "email": ${email}, "password": ${password}, "birth": ${birth}, "phonenumber": ${phonenumber}}`)
// }

export default registerUser