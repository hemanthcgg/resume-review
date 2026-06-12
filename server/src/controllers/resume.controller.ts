import { ResumeService } from "../services/resumeService";

export class ResumeController {
  private resumeService: ResumeService;

  constructor() {
    this.resumeService = new ResumeService();
  }

  async getAllResumes(req: any, res: any) {
    try {
      const userId = req.params.userId;
      const resumes = await this.resumeService.getAllResumes(userId);
      res.status(200).json(resumes);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error?.message || "Internal Server Error" });
    }
  }

  async getResumeById(req: any, res: any) {
    try {
      const { userId, resumeId } = req.params;
      const resume = await this.resumeService.getResumeById(userId, resumeId);
      if (!resume) {
        return res.status(404).json({ error: "Resume not found" });
      }
      res.status(200).json(resume);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error?.message || "Internal Server Error" });
    }
  }

  async getLatestResume(req: any, res: any) {
    try {
      const userId = req.params.userId;
      const resume = await this.resumeService.getLatestResume(userId);
      res.status(200).json(resume);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: error?.message || "Internal Server Error" });
    }
  }

  async uploadResume(req: any, res: any) {
    try {
      const userId = req.params.userId;
      const resumeData = req.body;
      const newResume = await this.resumeService.uploadResume(userId, resumeData);
      res.status(201).json(newResume);
    } catch (error: any) {
      const statusCode = error?.message?.includes("User not found") ? 400 : 500;
      res
        .status(statusCode)
        .json({ error: error?.message || "Internal Server Error" });
    }
  }
}
