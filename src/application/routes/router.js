const express = require('express')
const router = express.Router()

router.use('/api/users', require('../controllers/users/usersController'))
router.use('/api/login', require('../controllers/login/loginController'))

//pagina home
router.get('/api', (req, res) => {
    try {
        const links = {
            "home": "https://user-auth-api.up.railway.app/api",
            "details": "",
            "login": "https://user-auth-api.up.railway.app/api/login",
            "details": "(método POST)",
            "register": "https://user-auth-api.up.railway.app/api/users",
            "details": "(método POST)",
            "auth": "https://user-auth-api.up.railway.app/api/login/auth",
            "details": " (método Get, com acesso após login e envio de token válido)",
            "getAll": "https://user-auth-api.up.railway.app/api/users?itensPerPage=5&page=0",
            "details": "(Definir numero de itens e pagina para paginação)"
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