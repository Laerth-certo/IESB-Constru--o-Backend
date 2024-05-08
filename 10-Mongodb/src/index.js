const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = 3000

//Middlewares
app.use(express.json())


//Conexão com o MongoDB
mongoose.connect(`mongodb+srv://laerthlobato:G74UmYPa6G94MvlS@laerthbancodedados.tiebqz1.mongodb.net/?retryWrites=true&w=majority&appName=LaerthBancodeDados`)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log("Erro ao conectar no MongoDB: ", err))
// Schemas
const Tarefas = mongoose.model( 'tarefa', { nome: String } )

// Rotas
app.post('/tarefas', async (req, res ) => {
    const tarefa  = new Tarefas({nome: req.body.nome})
    const tarefaCriada = await tarefa.save()
    res.json(tarefaCriada)
})

app.listen(PORT, () => {
    console.log('Aplicação rodando na porta ${PORT}')

})