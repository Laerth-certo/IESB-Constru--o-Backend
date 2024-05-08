// Exercício Crud - Lista de Pessoas - Validação com Middlewares

// Configurando dependencias
const express = require('express')
const app = express()
const port = 3000
const routePessoas = require('./routes/pessoas')

//Middlewares
app.use(express.json())
app.use(routePessoas)

// configurando listen
app.listen(port, ()=>{
  console.log({mensagem: `API rodando em http://localhost:${port}`})
})