//Requirements
const express = require('express')
const path = require('path')
const bodyParser= require('body-parser')
const passport = require('passport')
const session = require('express-session')

//Initialize server and middleware
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//ROUTES
app.use(express.static(path.resolve(__dirname + '/../client/public/')))


module.exports = app

