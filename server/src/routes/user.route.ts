import { UserController } from "../controllers/user.controller";
import express from "express";

const basePath = "/user"
const userRouter = express.Router();
const userController = new UserController();

userRouter.post(`${basePath}/sign-up`, (req, res) => userController.createUser(req, res));
userRouter.get(`${basePath}/email`, (req, res) => userController.getUserByEmail(req, res));
userRouter.get(`${basePath}/id`, (req, res) => userController.getUserById(req, res));

export default userRouter;
