//imports
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

//configurações
const Port = 3000 
const app = express()


//conexão com o banco
DB_USER=process.env.DB_USER
DB_PASS=process.env.DB_PASS
DB_HOST=process.env.DB_HOST
DB_NAME=process.env.DB_NAME

mongoose.connect('mongodb+srv://${DB_USER}:DB_PASS@tiebqz1.mongodb.net/?retryWrites=true&w=majority&appName=LaerthBancodeDados')

//middlewares

//rotas

//start

