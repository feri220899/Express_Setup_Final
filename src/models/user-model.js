import pool from "../config/db.js";

// MODEL GET ALL
const getAllUsers = async () => {
    try {
        const [ userRows ] = await pool.query('SELECT id, name, password, phone FROM user');
        const userList = await Promise.all(userRows.map(async (user) => {
            const carsRows = await pool.query(`SELECT * FROM cars WHERE id_user = '${user.id}'`);
            user.getCars = carsRows[ 0 ];
            return user;
        }));
        return userList;
    } catch (error) {
        throw error;
    }
};

// MODEL GET BY ID
const getUsersById = async (idUser) => {
    const {id} = idUser;
    try {
        const [ rows ] = await pool.query(`SELECT * FROM user WHERE id = '${id}'`);
        return rows;
    } catch (error) {
        throw error;
    }
};

// MODEL CREATE USER
const createUser = async (dataUser) => {
    try {
        const { name, password, phone } = dataUser;
        const createUser = await pool.query('INSERT INTO user (name, password, phone) VALUES (?, ?, ?)',
            [ name, password, phone ]
        );
        return createUser;
    } catch (error) {
        throw error;
    }
};
 
// MODEL UPDATE
const updateUser = async (dataUser, idUser) => {
    try {
        const { name, password, phone } = dataUser;
        const {id}  = idUser;                             
        const updateUser = await pool.query(`UPDATE user SET name = ?, password = ?, phone = ? WHERE id = ?`, [name, password, phone, id]);
        return updateUser;
    } catch (error) {
        throw error;   
    }
};

// DELETE USER
const deleteUser = async (idUser) => {
    try {
        const {id}  = idUser;                        
        const deleteUser = await pool.query(`DELETE FROM user WHERE id = ?`, [id]);
        return deleteUser;
    } catch (error) {
        throw error;   
    }
};


export default {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
};

