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



// router.get('/api', (req, res) => {
//     try {
//         const links = {
//             "home": "https://railwayusers-production.up.railway.app/api",
//             "login": "https://railwayusers-production.up.railway.app/api/login (método POST)",
//             "register": "https://railwayusers-production.up.railway.app/api/users (método POST)",
//             "auth": "https://railwayusers-production.up.railway.app/api/login/auth (método Get, com acesso após login e envio de token válido)",
//             "getAll": "https://railwayusers-production.up.railway.app/api/users?itensPerPage=XXX&page=XXX (Definir numero de itens e pagina para paginação)"
//         }
//         const autor = {
//             "desenvolvidoPor": "rcastilho",
//             "contato": "rcastilho@gmail.com",
//             "org": "CastWebDevelopments"
//         }
//         res.status(200).json({ 'message': 'Seja bem vindo. Informações sobre o sistema', links, autor })
//     } catch (error) {
//         return error

//     }
// })
// router.get('*', (req, res) => {
//     try {
//         res.status(404).json({ "message": "Página não encontrada" })

//     } catch (error) {
//         return error
//     }
// })

app.listen(port, () => {
    console.log(`app running at http://localhost:${port} - success!!`)
})

