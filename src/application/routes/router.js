const express = require('express')
const router = express.Router()

router.use('/api/users', require('../controllers/users/usersController'))
router.use('/api/login', require('../controllers/login/loginController'))

//pagina home
router.get('/api',  (req, res) => {
    try {
        const links = {
            "home": "https://user-auth-api.up.railway.app/api",
            "login": "https://user-auth-api.up.railway.app/api/login (método POST)",
            "register": "https://user-auth-api.up.railway.app/api/users (método POST)",
            "auth": "https://user-auth-api.up.railway.app/api/login/auth (método Get, com acesso após login e envio de token válido)",
            "getAll": "https://user-auth-api.up.railway.app/api/users?itensPerPage=XXX&page=XXX (Definir numero de itens e pagina para paginação)"
        }
        const autor = {
            "desenvolvidoPor": "rcastilho",
            "contato": "rcastilho@gmail.com",
            "org": "CastWebDevelopments"
        }
        res.status(200).json({ 'message': 'Seja bem vindo. Informações sobre o sistema', links, autor })
    } catch (error) {
        return error

    }
})



module.exports = router