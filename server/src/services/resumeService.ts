import Resume from "../models/resume.schema";
import User from "../models/user.schema";

export class ResumeService {
    async uploadResume(userId: string, resumeData: any) {
        try {
            //Todo : Remove this check later when auth is done
            const user = await User.findOne({ userId });
            if (!user) {
                throw new Error(`User not found with userId: ${userId}`);
            }
            const mockFeedback = this.getMockFeedback();

            const newResume = new Resume({
                userId,
                resumeUrl: resumeData.resumeUrl,
                fileName: this.getMockFileName(),
                jobDescription: resumeData.jobDescription || "",
               ...mockFeedback
            });
            return await newResume.save();
        } catch (error: any) {
            throw new Error(`Error uploading resume: ${error?.message}`);
        }
    }

    // Mock file name
    private getMockFileName(): string {
        return `resume_${Date.now()}.pdf`;
    }

    // Mock data to be returned when processing is complete
    private getMockFeedback() {
        return {
            matchingSkills: ["React", "TypeScript", "Node.js", "MongoDB"],
            missingSkills: ["Docker", "AWS", "GraphQL"],
            overallMatchPercentage: 72,
            summary: "Good match for senior frontend role with strong React and TypeScript skills. Missing some backend and DevOps experience.",
            recommendations: [
                "Learn Docker for containerization",
                "Get hands-on experience with AWS or similar cloud platforms",
                "Explore GraphQL as an alternative to REST APIs",
                "Strengthen your backend knowledge with more complex Node.js projects",
            ],
        };
    }

    //Todo :follow single responsibility
    async getAllResumes(userId: string) {
        try {
            const resumes = await Resume.find({ userId }).sort({ createdAt: -1 });
            return resumes;
        } catch (error: any) {
            throw new Error(`Error fetching resumes: ${error?.message}`);
        }
    }

    async getResumeById(userId: string, resumeId: string) {
        try {
            const resume = await Resume.findOne({ _id: resumeId, userId });
            return resume;
        } catch (error: any) {
            throw new Error(`Error fetching resume: ${error?.message}`);
        }
    }

    async getLatestResume(userId: string) {
        try {
            const resume = await Resume.findOne({ userId }).sort({ createdAt: -1 });
            return resume;
        } catch (error: any) {
            throw new Error(`Error fetching latest resume: ${error?.message}`);
        }
    }
}