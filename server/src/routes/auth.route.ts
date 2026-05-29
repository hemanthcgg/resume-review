import { AuthController } from "../controllers/auth.controller";
import { Router } from "express";

const authRouter = Router();
const authController = new AuthController();

authRouter.post("/login", (req, res) => authController.login(req, res));

export default authRouter;
