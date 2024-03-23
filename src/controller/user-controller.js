import Response from "../config/response.js";
import UserModel from "../models/user-model.js";

// GET ALL
const getAllUsers = async (req, res) => {
    try {
        const data = await UserModel.getAllUsers();
        Response.successRes(res, 'success', 200, data, 'Users retrieved successfully');
        data.forEach(user => {
            console.log(user.name);
            user.getCars.forEach(cars => {
                console.log([cars.cars_name, cars]);
            });
        });
    } catch (error) {
        Response.errorRes(res, 'error', null, 'Internal Server Error');
    }
};

// GET BY ID
const getUsersById = async (req, res) => {
    const idUser = req.params;
    try {
        const data = await UserModel.getUsersById(idUser);
        Response.successRes(res, 'success', 200, data, 'Users retrieved successfully');
    } catch (error) {
        Response.errorRes(res, 'error', null, 'Internal Server Error');
    }
};

// CREATE
const createUser =  async (req, res) => {
    const dataUser = req.body;
    try {
        const data = await UserModel.createUser(dataUser);
        Response.successRes(res, 'success', 201, data[0], 'Add Users successfully');
    } catch (error) {
        Response.errorRes(res, 'error', null, 'Internal Server Error');
    }
};

// UPDATE
const updateUser =  async (req, res) => {
    const dataUser = req.body;
    const idUser = req.params;
    try {
        const data = await UserModel.updateUser(dataUser, idUser);
        Response.successRes(res, 'success', 201, data, 'Edit Users successfully');
    } catch (error) {
        Response.errorRes(res, 'error', null, 'Internal Server Error');
    }
};

// DELETE USER
const deleteUser =  async (req, res) => {
    const idUser = req.params;
    try {
        const data = await UserModel.deleteUser(idUser);
        Response.successRes(res, 'success', 201, data, 'Delete Users successfully');
    } catch (error) {
        Response.errorRes(res, 'error', null, 'Internal Server Error');
    }
};

export default {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
};
