exports.queryGetAll = (itensPerPage, page) => {
    const query = `SELECT * FROM railway.users
                    LIMIT ? OFFSET ?`;
    const fields = [itensPerPage, page]
    return { query, fields }
}

exports.queryGetUserById = (id) => {
    const query = `SELECT name, lastName, email, cpf FROM railway.users where ??=?`;
    const fields = ['id', id];
    return { query, fields }
}

exports.queryGetUserBycpf = (cpf) => {
    const query = `SELECT name, lastName, email, cpf FROM railway.users where ??=?`;
    const fields = ['cpf', cpf];
    return { query, fields }
}

exports.queryAddUser = (name, lastName, email, password, cpf, createAt) => {
    const query = `INSERT INTO railway.users (??, ??, ??, ??, ??,??)
                    VALUES (?,?,?,?,?,?);`
    const fields = ['name', 'lastName', 'email', 'password', 'cpf', 'createAt', name, lastName, email, password, cpf, createAt]
    return { query, fields }
}

exports.queryCountUsers = ()=>{
    const query = `SELECT COUNT(ID) as quantidade FROM railway.users`
    return {query}
}

