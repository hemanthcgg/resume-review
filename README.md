## AI-Powered Interview Preparation Platform

This project covers:

* complex React flows,
* strong backend architecture,
* AI integration,
* authentication,
* payments/subscriptions later,
* deployment challenges,
* scalability concepts.

---

# App Features

## Authentication

* Signup/Login
* JWT auth
* Protected routes

---

## Dashboard

* User profile
* Interview history
* Resume upload status

---

## AI Mock Interview

User selects:

* role
* experience level
* tech stack

Then:

* backend generates interview questions,
* frontend displays chat-like interview UI,
* user submits answers,
* AI gives feedback.

---

## Resume Analyzer

Upload PDF:

* backend extracts text,
* AI gives:

  * strengths,
  * weaknesses,
  * ATS suggestions.

---

## Admin/Analytics (Simple)

* interview count
* user stats

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Query / TanStack Query
* Tailwind CSS
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Auth
* Redis
* S3
* Socket.IO

---

# Overall Project Structure

```txt id="9lz4fi"
ai-interview-platform/
│
├── client/                # React Frontend
├── server/                # Node Backend
├── README.md
├── .gitignore
├── package.json           # Optional root package.json
```

---

# FRONTEND STRUCTURE (React + Vite)

```txt id="n8m9rw"
client/
│
├── public/
│
├── src/
│   │
│   ├── api/
│   │   ├── axios.js
│   │   └── interviewApi.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Button.jsx
│   │   │   └── Modal.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── StatsCard.jsx
│   │   │   └── InterviewHistory.jsx
│   │   │
│   │   ├── interview/
│   │   │   ├── InterviewChat.jsx
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── AnswerInput.jsx
│   │   │   └── FeedbackCard.jsx
│   │   │
│   │   └── resume/
│   │       ├── ResumeUpload.jsx
│   │       └── ResumeFeedback.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useInterview.js
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   └── AuthLayout.jsx
│   │
│   ├── pages/
│   │   │
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── interview/
│   │   │   ├── StartInterview.jsx
│   │   │   └── InterviewSession.jsx
│   │   │
│   │   ├── resume/
│   │   │   └── ResumeAnalyzer.jsx
│   │   │
│   │   └── Home.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── interviewService.js
│   │   └── resumeService.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── utils/
│   │   ├── tokenHelper.js
│   │   └── formatDate.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

# BACKEND STRUCTURE (Node + Express)

```txt id="e8x4jw"
server/
│
├── src/
│   │
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── interviewController.js
│   │   └── resumeController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Interview.js
│   │   └── Resume.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── interviewRoutes.js
│   │   └── resumeRoutes.js
│   │
│   ├── services/
│   │   ├── aiService.js
│   │   ├── authService.js
│   │   └── resumeService.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   ├── extractPdfText.js
│   │   └── apiResponse.js
│   │
│   ├── validations/
│   │   └── authValidation.js
│   │
│   ├── app.js
│   └── server.js
│
├── uploads/
│
├── .env
├── package.json
└── nodemon.json
```

---


## Stretch Features

Later you can add:

* AI mock interviewer
* Live coding interview room
* Voice interview
* Team interview mode
* Recruiter dashboard
* AI feedback scoring

---