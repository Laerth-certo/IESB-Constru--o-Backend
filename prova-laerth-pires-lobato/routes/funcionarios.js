const express = require('express')
    const router = express.Router()

 let listafuncionario = 
 [
    {
        id: 1,
        nome: "laerth",
        email: "laerth@gmail.com",
        telefone: 91984502566,
        cargos: "gerente",
        salario: 10000
    },{
        id: 2,
        nome: "wesley",
        email: "wesley@gmail.com",
        telefone: 91998896995,
        cargos: "manobrista",
        salario: 4000
    },
]

router.get('/funcionarios', (req, res) => {

    res.json(listafuncionario)
})

router.get('/funcionarios/:id', (req, res) => {

    const id = req.params.id

    const funcionarios = listafuncionario.find(funcionarios => funcionarios.id == id)
if (funcionarios) {
        return res.json(funcionarios)
    }return res.status(404).json({ mensagem: "funcionario não encontrado" })
})

router.post('/funcionarios', (req, res) => {

    const cadastros = req.body
    if (!cadastros.nome || !cadastros.email || !cadastros.telefone || !cadastros.cargos || !cadastros.salario) {
        return res.status(400).json({ mensagem: "todos os campos são obrigatórios" })
    }
    const funcionario = {
        id: Math.round(Math.random() * 1000),
        email: cadastros.email,
        nome: cadastros.nome,
        telefone: cadastros.telefone,
        cargos: cadastros.cargos,
        salario: cadastros.salario
    }
    listafuncionario.push(funcionario)

    res.json({
        mensagem: "funcionario cadastrado",
    })
})

router.put('/funcionarios/:id', (req, res) => {
    const id = req.params.id
    const atualizar = req.body
    if (!atualizar.nome || !atualizar.email || !atualizar.telefone || !atualizar.cargos || !atualizar.salario) {
        return res.status(400).json({ mensagem: "todos os campos são obrigatórios" })
    }
    const index = listafuncionario.findIndex(funcionario => funcionario.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "funcionario não encontrado" })
    }

    const funcionariosatualizado = {
        id: Number(id),
        email: atualizar.email,
        nome: atualizar.nome,
        telefone: atualizar.telefone,
        cargos: atualizar.cargos,
        salario: atualizar.salario
    }
    listafuncionario[index] = funcionariosatualizado
    res.json({
        mensagem: "funcionario atualizado",
    })
})

router.delete('/funcionarios/:id', (req, res) => {
    const id = req.params.id
    const index = listafuncionario.findIndex(funcionario => funcionario.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "nao encontrado" })
    }
    listafuncionario.splice(index, 1)
    res.json({ mensagem: "funcionario excluido" })
})

router.get('/funcionarios/cargos/:cargos', (req, res) => {
    const cargos = req.params.cargos
    const funcionario = listafuncionario.filter(funcionario => funcionario.cargos.toUpperCase() == cargos.toUpperCase())
    res.json(funcionario)
})

router.get('/funcionarios/salario/media', (req, res) => {
    if (listafuncionario.length === 0) {
        return res.status(404).json({ mensagem: "Nenhum funcionário encontrado." });
    }
    const totalFuncionarios = listafuncionario.length;
    const totalSalarios = listafuncionario.reduce((total, funcionario) => total + funcionario.salario, 0);
    const mediaSalarios = totalSalarios / totalFuncionarios;
    res.json
    ({ media: mediaSalarios.toFixed(2) });
});







module.exports = router