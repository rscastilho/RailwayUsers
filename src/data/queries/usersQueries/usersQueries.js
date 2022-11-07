exports.queryGetAll = (itensPerPage, page) => {
    const query = `SELECT * FROM railway.users
                    LIMIT ? OFFSET ?`;
    const fields = [itensPerPage, page]
    return { query, fields }

}

