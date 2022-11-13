
exports.queryGetUserByEmail = (email) => {
    const query = `SELECT * FROM railway.users where ??=?`
    const fields = ['email', email]
    return { query, fields }
}