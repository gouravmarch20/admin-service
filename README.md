# LeetCode Problem Setting service

## routing

- /api/v1/problems/ping
  - because the route starts with /api
    /api -> /v1 -> /problems -> /ping
    apiRouter -> v1Router -> problemRouter -> problemController -> service layer

## avoid npm

- nodemon :: node --watch -- index.js
- avoid dotenv :: process.loadEnvFile() via process.env.X
