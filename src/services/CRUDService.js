const connection = require('../config/database');

const getAllUsers = async () => {
    const [results, fields] = await connection.query(`SELECT * FROM hoidanit.Users`);
    return results;
};

const getUserById = async (id) => {
    const [results, fields] = await connection.query(`SELECT * FROM hoidanit.Users where id = ?`, [id]);
    return results && results.length > 0 ? results[0] : {};
};

const updateUser = async (data) => {
    const [results, fields] = await connection.query(`UPDATE Users SET email=?, name=?, city=? WHERE id=?`, [data.email, data.name, data.city, data.id]);
    return results && results.length > 0 ? results[0] : {};
};

module.exports = {
    getAllUsers, getUserById, updateUser
};