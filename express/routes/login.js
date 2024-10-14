const express = require('express')

const routerLogin = express.Router()

routerLogin.post('/', (req,res) => {
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`<h1>Welcome ${name}</h1>`)
    }
    res.status(401).send('<h1>Please Provide Credentials...</h1>')
})

module.exports = routerLogin