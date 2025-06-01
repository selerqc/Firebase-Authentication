# Firebase Authentication Fullstack Project

This repository contains a fullstack authentication system using Firebase, Node.js (Express), and React.

## Features
- User registration and login with Firebase Authentication
- Secure backend API with Node.js and Express
- User profile management
- Role-based access control
- React frontend with protected routes
- Environment variable and secret management (no secrets in git)

## Project Structure
```
Firebase Authentication/
├── NodeJsAPI/           # Node.js backend API
│   ├── config/          # Database and Firebase config (private key not tracked)
│   ├── controller/      # Express controllers
│   ├── firebase/        # Firebase admin setup
│   ├── middleware/      # Express middleware
│   ├── model/           # Mongoose models
│   ├── routes/          # Express routes
│   ├── package.json     # Backend dependencies
│   └── server.js        # API entry point
├── React-Firebase/      # React frontend
│   ├── src/             # React source code
│   ├── public/          # Static assets
│   ├── package.json     # Frontend dependencies
│   └── vite.config.js   # Vite config
└── Readme.md            # This file
```

## Setup Instructions

### 1. Backend (NodeJsAPI)
1. Install dependencies:
   ```powershell
   cd NodeJsAPI
   npm install
   ```
2. Add your Firebase service account key as `config/firebase-private-key.json` (do NOT commit this file).
3. Configure your MongoDB connection in `config/connection.js`.
4. Start the server:
   ```powershell
   npm start
   ```

### 2. Frontend (React-Firebase)
1. Install dependencies:
   ```powershell
   cd React-Firebase
   npm install
   ```
2. Configure your Firebase web config in `src/config/firebase/Config.js`.
3. Start the development server:
   ```powershell
   npm run dev
   ```

## Security Notice
- **Never commit secrets or private keys to git.**
- The file `NodeJsAPI/config/firebase-private-key.json` is ignored by `.gitignore` and must be provided locally.
- If you accidentally commit a secret, follow [these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) to remove it from git history.

## License
MIT
