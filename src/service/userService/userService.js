const _userRepository = require('../../data/repository/userRepository/userRepository')
const sql = require('../../data/db/db')


exports.getAllUsers = async (req, res) => {
    try {
        const itensPerPage = parseInt(req.query.itensPerPage)
        const page = parseInt(req.query.page)
        console.log(itensPerPage, page)
        const result = await _userRepository.getAll(itensPerPage, page)
        sql.query(result.query, result.fields, (err, data) => {
            err && res.json({ err })
            res.status(200).json({ 'registros': data.length, data })
        })
    } catch (error) {
        return error
    }
}

exports.postAddUser = async (req, res, next) => {
    try {
        const { name, lastName, email, password, cpf } = req.body;

        // const pegaUserByCPF = await _userRepository.getUserByCpf(cpf)
        // sql.query(pegaUserByCPF.query, pegaUserByCPF.fields, (err, data) => {
        //     err && res.status(404).json({ 'Erro encontrado': err })
        //     if (data) {
        //         if (data[0].cpf === cpf) {
        //             res.status(400).json({ "message": "CPF ja cadastrado" }).end()
        //             return
        //         }
        //         return
        //     }
        //     return
        // })
        const createAt = new Date();
        const result = await _userRepository.postUser(name, lastName, email, password, cpf, createAt);
        sql.query(result.query, result.fields, (err, data) => {
            err && res.status(404).json({ 'Erro encontrado': err })
            _userRepository.getUserByid(data.insertId).then((result) => {
                sql.query(result.query, result.fields, (err, data) => {
                    err && res.status(404).json({ 'Erro encontrado': err })
                    res.status(200).json({ 'message': 'Usuário cadastrado com sucesso!', data })
                })
            })
        })
    } catch (error) {

    }
}