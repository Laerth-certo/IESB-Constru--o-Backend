// configurando ambiente
const express = require('express')
const router = express.Router()

// Banco interno
const listaPessoas = [
  {
      id: 1,
      nome: "Lucas",
      idade: 28,
      email: "lucas@example.com",
      telefone: "(00) 1111-1111"
  },
  {
      id: 2,
      nome: "Ana",
      idade: 35,
      email: "ana@example.com",
      telefone: "(00) 2222-2222"
  },
  {
      id: 3,
      nome: "Carla",
      idade: 20,
      email: "carla@example.com",
      telefone: "(00) 3333-3333"
  }
]

// Criando Funções/Intermediários/Middlewares
// lógica para verificar se a pessoa está cadastrada no banco de dados
function pessoaExiste(req, res, next){

  console.log("A requisição validou se o cadastro existe!")

  const id = req.params.id
  const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
  const index = listaPessoas.findIndex(pessoa => pessoa.id == id)

  if(pessoa){
    res.pessoa = pessoa
    res.index = index
    return next()
  } 
  return res.status(404).json({mensagem:"Pessoa não encontrada!"}) 
}

// lógica para validar se todos os dados foram preenchidos
function validarAtributos(req, res, next){
  
  console.log("A requisição validou os atributos!")

  const dados = req.body

  if(!dados.nome || !dados.idade || !dados.email || !dados.telefone){
    return res.status(400).json("Todos os dados devem ser preenchidos!")
  }

  return next()
}

// Criando rotas
// rota para buscar todas as pessoas
router.get('/pessoas', (req, res)=>{
  res.json(listaPessoas)
})

// rota para buscar pessoa por id
router.get('/pessoas/:id', pessoaExiste, (req, res)=>{
  res.json(res.pessoa)
})

// Cadastrando nova pessoa
router.post('/pessoas', validarAtributos, (req, res, next)=>{

  const dados = req.body
  console.log(dados)

  const novaPessoa = {
    id: listaPessoas.length+1,
    nome: dados.nome,
    idade: dados.idade,
    email: dados.email,
    telefone: dados.telefone
  }

  listaPessoas.push(novaPessoa)

  res.status(201).json("Pessoa cadastrada com sucesso!")
})

// Atualizando cadastro
router.put('/pessoas/:id', pessoaExiste, validarAtributos, (req, res, next)=>{

  const dados = req.body

  const pessoaAtualizada = {
    id: req.params.id,
    nome: req.body.nome,
    idade: req.body.idade,
    email: req.body.email,
    telefone: req.body.telefone
  }

  listaPessoas[res.index]=pessoaAtualizada

  res.status(200).json("Cadastro atualizado!")
})

// Deletando um cadastro
router.delete('/pessoas/:id', pessoaExiste, (req, res, next)=>{
  listaPessoas.splice(res.index, 1)
  res.json({ mensagem: "Cadastro excluído com sucesso!" })
})

// exportando módulo para ser usado no index.js
module.exports = router 
