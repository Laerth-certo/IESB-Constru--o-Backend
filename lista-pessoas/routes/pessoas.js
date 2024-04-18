const express = require("express")
const router = express.Router()

const listaPessoas = [
    {
        "id" : 1,
        "nome" : "Laerth",
        "idade" : 28,
        "email" : "laerth@email.com",
        "telefone": 61999688955
    },
    {
        "id" : 2,
        "nome" : "Laerth Pires",
        "idade" : 27,
        "email" : "laerthpires@gmail.com",
        "telefone" : 61995654444
    }
]


router.get('/pessoas', (req, res) => {

    res.json(listaPessoas)
})

router.get("/pessoas/:id" , (req, res) =>{
        const id = req.params.id
        const cadastro = listaPessoas.find (cadastro => cadastro.id == id);
        res.json(cadastro)
})

router.post("/pessoas", (req,res) => {
    const dadosPessoas = req.body

    const novaPessoas = {
        id: listaPessoas.length + 1,
        nome: dadosPessoas.nome,
        idade: dadosPessoas.idade,
        email: dadosPessoas.email,
        telefone: dadosPessoas.telefone

    }

    listaPessoas.push(novaPessoas)
    res.json({mensagem: "cadastro atualizado com Sucesso"})
})

router.put("/pessoas/:id", (req, res) =>{
    const id = req.params.id
    const atualizarPessoas = req.body

    const index = listaPessoas.findIndex(pessoa => pessoa.id == id);

    const novaPessoas = {
        id:Number(id),
        nome: atualizarPessoas.nome,
        idade: atualizarPessoas.idade,
        email: atualizarPessoas.email,
        telefone: atualizarPessoas.telefone
    }

    listaPessoas[index] = novaPessoas

    res.json({mensagem: "Cadastro Atualizado com Sucesso!"})


})

router.delete("/pessoas/:id", (req,res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id);

    listaPessoas.splice(index, 1)
    res.json({mensagem:" Cadastro Excluido com Sucesso!"})
})



module.exports = router