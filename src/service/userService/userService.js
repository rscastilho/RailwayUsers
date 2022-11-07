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