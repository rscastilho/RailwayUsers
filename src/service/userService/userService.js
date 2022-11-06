const _userRepository = require('../../data/repository/userRepository/userRepository')
const sql  = require('../../data/db/db')


exports.getAllUsers = async (req, res) => {
    try {
        const result = await _userRepository.getAll()
        sql.query(result.query, (err, data)=>{
            err && res.json({err})
            res.status(200).json({data})
        })
      

    } catch (error) {
        return error
    }
}