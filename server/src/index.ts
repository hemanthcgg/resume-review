import express from "express";
import connectDB from "./config/db";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";
import resumeRouter from "./routes/resume.route";

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(authRouter);
app.use(userRouter);
app.use(resumeRouter);

app.get("/", (req, res) => {
  res.send("Hello, world..!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
