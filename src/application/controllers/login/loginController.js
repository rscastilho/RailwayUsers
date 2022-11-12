const express = require('express')
const router = express.Router()
const _loginService = require('../../../service/loginService/loginService')

router.post('/', _loginService.login)

module.exports = router
