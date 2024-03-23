import express from 'express';
import UserController from '../controller/user-controller.js';
import UserMiddleware from '../middleware/user-middleware.js';

const userRouter = express.Router();

// LIST ROUTER USER
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUsersById);
userRouter.post('/create-user', UserMiddleware.validateCreateUser, UserController.createUser);
userRouter.put('/update-user/:id', UserController.updateUser);
userRouter.delete('/delete-user/:id', UserController.deleteUser);

export default userRouter;
