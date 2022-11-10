const { json } = require('body-parser')
const express = require('express')
const router = express.Router()
const sql = require('../../../data/db/db')
const _userController = require('../../../service/userService/userService')
const validator = require('../../../crosscutting/validator/validator')
const { userValidator, userUpdate } = require('../../../crosscutting/validator/userValidator')

router.get('/', _userController.getAllUsers)
router.post('/', userValidator(), validator, _userController.postAddUser)
router.patch('/:id', userUpdate(), validator, _userController.updateUser)

module.exports = router