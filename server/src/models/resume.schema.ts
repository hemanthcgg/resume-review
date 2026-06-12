import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    resumeUrl: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: false,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    matchingSkills: [String],
    missingSkills: [String],
    overallMatchPercentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    summary: String,
    recommendations: [String],
  },
  { timestamps: true }
);

// Index for faster queries
resumeSchema.index({ userId: 1, createdAt: -1 });

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
