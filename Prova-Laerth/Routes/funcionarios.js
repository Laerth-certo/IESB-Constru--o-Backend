const express = require("express")
const router = express.Router()


const listaPessoas = [
    {
        "id" : 1,
        "nome" : Laerth,
        "email" : "LaerthPires@gmail.com",
        "telefone" : 88999679558,
        "cargo" : "Gerente de Redes",
        "salario": 15000
    },
    {
        "id" : 2,
        "nome" : Davi,
        "email" : "Davi@gmail.com",
        "telefone" : 87999678933,
        "cargo" : "Desenvolvedor",
        "salario": 16000


    },{
        "id" : 3,
        "nome" : Felipe,
        "email" : "Felipe@gmail.com",
        "telefone" :" 90999674444",
        "cargo" : "Analista de Sistemas",
        "salario": 17000


    }
]

router.get('/funcionarios', (req, res) => {

    res.json(listaFuncionarios)
})

router.get("/funcionarios/:id" , (req, res) =>{
        const id = req.params.id
        const cadastro = listaFuncionarios.find (cadastro => cadastro.id == id);
        res.json(cadastro)
})

router.post("/funcionarios", (req,res) => {
    const dadosFuncionarios = req.body

    const novaFuncionarios = {
        nome: listaFuncionarios.length + 1,
        email: dadosFuncionarios.email,
        telefone: dadosFuncionarios.telefone,
        cargo: dadosFuncionarios.cargo,
        salario: dadosFuncionarios.salario

    }

    listaFuncionarios.push(novaFuncionarios)
    res.json({mensagem: "cadastro atualizado com Sucesso"})
})

router.put("/funcionarios/:id", (req, res) =>{
    const id = req.params.id
    const atualizarFuncionarios = req.body

    const index = listaFuncionarios.findIndex(funcionario => funcionario.id == id);

    const novaFuncionarios = {
        nome:String(id),
        email: atualizarFuncionarios.email,
        telefone: atualizarFuncionarios.telefone,
        cargo: atualizarFuncionarios.cargo,
        salario: atualizarFuncionarios.salario
    }

    listaFuncionarios[index] = novaFuncionarios

    res.json({mensagem: "Cadastro Atualizado com Sucesso!"})


})

router.delete("/funcionarios/:id", (req,res) => {
    const id = req.params.id
    const index = listaFuncionarios.findIndex(funcionario => funcionario.id == id);

    listaFuncionarios.splice(index, 1)
    res.json({mensagem:" Cadastro Excluido com Sucesso!"})
})



module.exports = router

