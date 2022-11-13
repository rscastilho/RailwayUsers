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
                token = jwt.sign(` {id: ${data[0].id}, name: ${data[0].name}, email: ${data[0].email}}`, jwtSecret)
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