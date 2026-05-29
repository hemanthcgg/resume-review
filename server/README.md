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