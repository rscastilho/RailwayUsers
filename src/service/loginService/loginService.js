const _loginRepository = require('../../data/repository/loginRepository/loginRepository')
const sql = require('../../data/db/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let validaSenha = ''
        let token = ''
        const result = await _loginRepository.getUserByEmail(email.trim().toLowerCase());
        sql.query(result.query, result.fields, (err, data) => {
            err && res.status(400).json({ 'message': 'erro', err })
            if (!data.length) {
                res.status(400).json({ 'message': 'Usuário não encontrado' })
                return
            }
            validaSenha = bcrypt.compareSync(password, data[0].password)
            if (validaSenha) {
                delete data[0].password
                delete data[0].lastName
                delete data[0].cpf
                delete data[0].createAt
                delete data[0].lastAccess
                token = jwt.sign({data}, jwtSecret, { expiresIn: 60 * 60 })
                res.status(200).json({ 'message': 'Usuário logado com sucesso!', data, token })
                return
            } else {
                res.status(400).json({ 'message': 'Senha incorreta' })
                return
            }
        })
    } catch (error) {
        return error
    }
}

exports.getValidarAuth = async (req, res) => {
    try {
        res.status(200).json({ 'message': 'usuario autenticado' })
    } catch (error) {
        return error
    }
}