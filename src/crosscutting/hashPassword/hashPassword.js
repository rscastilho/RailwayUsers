const bcrypt = require('bcrypt')

exports.hashPassword = async (password) => {
    try {
        const salt = bcrypt.genSaltSync();
        const passwordHash = await bcrypt.hashSync(password, salt)
        return passwordHash

    } catch (error) {
        console.log("erro hashPassword", error)
        return error
    }
}