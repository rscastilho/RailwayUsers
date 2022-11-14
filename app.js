require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

const router = require('./src/application/routes/router')
app.use(router)

app.use((req, res)=>{
    res.status(404).json('Erro 404 - Página não encontrada!')
})

app.listen(port, () => {
    console.log(`app running at http://localhost:${port} - success!!`)
})

