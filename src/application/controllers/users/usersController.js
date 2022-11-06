const { json } = require('body-parser')
const express = require('express')
const router = express.Router()
const sql = require('../../../data/db/db')
const _userController = require('../../../service/userService/userService')

router.get('/', _userController.getAllUsers)

module.exports = router