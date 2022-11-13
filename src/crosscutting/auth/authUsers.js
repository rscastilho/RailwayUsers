const jwt = require('jsonwebtoken')
const _loginRepository = require('../../data/repository/loginRepository/loginRepository')
const sql = require('../../data/db/db')

const authUser = async (req, res, next) => {
    try {
        const carregaToken = req.headers.authorization
        const token = carregaToken.split(' ')[1]
        if (!carregaToken) {
            res.json({ 'message': 'não autorizado' })
            return
        } else {
            const validaToken = jwt.verify(token, process.env.JWT_SECRET)
            console.log(validaToken.data)
            const result = await _loginRepository.getUserByEmail(validaToken.data[0].email)
            sql.query(result.query, result.fields, (err, data) => {
                err && res.json({ err })
                if (!data.length) {
                    res.status(400).json({ 'message': 'erro ao autenticar' })
                } else {
                    next()
                }
            })
        }
    } catch (error) {
        res.status(400).json({ 'message': 'token inválido'})
        return error

    }
}

module.exports = authUser