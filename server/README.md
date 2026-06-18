https://www.figma.com/make/S1Ozsa7Jv76Jg0zgv0Pagr/Job-Matching-Application-Design?t=2FCWKOSFYnwKNlNQ-1&preview-route=%2Fdashboard


# Recommended Database Collections

---

# User Collection

```js
{
  userId,
  userName,
  userEmail,
  password,
  jobTitle,
  description,
  accountStatus,
  lastActiveSession
}
```

---

# Interview Collection

```js
{
  userId,
  role,
  techStack,
  questions,
  answers,
  feedback,
  score
}
```

---

# Resume Collection

```js
{
  userId,
  resumeUrl,
  extractedText,
  aiFeedback
}
```

---

## Todos
- jwt validation (auth complete)
- 3rd part jobs api
- resume pdf data exctration and storing
- ai model api call
- schema validation, logging middlewars
- ci/cd and deployment