import express from "express";
import { ResumeController } from "../controllers/resume.controller";

const basePath = "/resume";
const resumeRouter = express.Router();
const resumeController = new ResumeController();

resumeRouter.post(`${basePath}/:userId/upload`, (req, res) =>
  resumeController.uploadResume(req, res)
);
resumeRouter.get(`${basePath}/:userId/all`, (req, res) =>
  resumeController.getAllResumes(req, res)
);
resumeRouter.get(`${basePath}/:userId/latest`, (req, res) =>
  resumeController.getLatestResume(req, res)
);
resumeRouter.get(`${basePath}/:userId/:resumeId`, (req, res) =>
  resumeController.getResumeById(req, res)
);

export default resumeRouter;
