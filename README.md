# 💬 ChatHub.io — Real-time Messaging Platform

**Fast, secure, and real-time private chat for modern users.**

![Last Commit](https://img.shields.io/github/last-commit/hritikjaiswall/chatHub.io)
![Top Language](https://img.shields.io/github/languages/top/hritikjaiswall/chatHub.io)
![Frontend Deployed](https://img.shields.io/badge/Frontend-Vercel-blue)
![Backend Deployed](https://img.shields.io/badge/Backend-Render-green)

---

## 🚀 Built With

- **React.js** (Frontend)
- **Redux Toolkit**
- **Node.js** & **Express.js** (Backend)
- **Socket.io** (WebSockets)
- **MongoDB** & **Mongoose**
- **TailwindCSS** & **DaisyUI**
- **JWT Authentication**
- **Vercel** & **Render Deployment**

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Frontend Setup](#-frontend-setup)
  - [Backend Setup](#-backend-setup)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Roadmap](#-roadmap)
- [Contribution](#-contribution)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🔍 Overview

**ChatHub.io** is a scalable, real-time messaging platform enabling private conversations with online status indicators. Built using modern web technologies to deliver fast, secure, and responsive chat functionality.

---

## ✨ Features

✅ Real-time 1-on-1 messaging via WebSocket  
✅ Live user status (online/offline)  
✅ Secure JWT token-based authentication with cookies  
✅ Responsive, modern UI (TailwindCSS & DaisyUI)  
✅ Redux-powered state management  
✅ Fully modular backend with Express.js  
✅ Deployed frontend on **Vercel**  
✅ Backend with WebSocket support on **Render**

---

## 🏗️ Project Structure

```bash
chatHub.io/
├── frontend/ # React Frontend
│ ├── public/
│ └── src/
│ ├── components/ # UI Components
│ ├── hooks/ # Custom React hooks
│ ├── redux/ # Redux slices & store
│ └── index.js, App.js
│
└── backend/ # Node.js Backend
├── config/ # DB Connection
├── controllers/ # Route logic
├── middleware/ # Auth, CORS, Error handling
├── models/ # Mongoose schemas
├── routes/ # API Endpoints
├── socket/ # WebSocket server setup
├── utils/ # Helper functions
└── index.js
```


---

## ⚡ Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

### 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm start
