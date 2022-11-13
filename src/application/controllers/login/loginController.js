const express = require('express')
const router = express.Router()
const _loginService = require('../../../service/loginService/loginService')
const validator = require('../../../crosscutting/validator/validator')
const { loginValidator } = require('../../../crosscutting/validator/loginValidator')
const authUser = require('../../../crosscutting/auth/authUsers')



router.post('/', loginValidator(), validator, _loginService.login)

module.exports = router
