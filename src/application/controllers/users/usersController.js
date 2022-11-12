const express = require('express')
const router = express.Router()
const _userService = require('../../../service/userService/userService')
const validator = require('../../../crosscutting/validator/validator')
const { userValidator, userUpdate } = require('../../../crosscutting/validator/userValidator')

router.get('/', _userService.getAllUsers)
router.post('/', userValidator(), validator, _userService.postAddUser)
router.patch('/:id', userUpdate(), validator, _userService.updateUser)
router.delete('/:id', _userService.deleteUser)

module.exports = router