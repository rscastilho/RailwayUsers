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


const router = require('../src/application/routes/router')
app.use(router)

// app.get('/', (req, res) => {
//     res.status(200).json(`Bem vindo ao nodeJs - porta ${port}`)
// })

app.listen(port, () => {
    console.log(`app running at http://localhost:${port} - success!!`)
})

