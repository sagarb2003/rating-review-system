
# ⭐ Rating & Review System

A full-stack application where users can post and view ratings and reviews. The project is split into a **frontend** built with Vite + React, and a **backend** powered by Node.js and Express with PostgresSql as the database.

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sagarb2003/rating-review-system.git
cd rating-review-system
````



## ⚙️ Backend Setup

### Install Dependencies

```bash
cd backend
npm install
```

### Configure Environment Variables

Create a `.env` file in the `backend/` directory:

```env
DATABASE_URL=your_PostgresSql_connection_string
```

### Run the Server

```bash
node index.js
```

The backend will start on `http://localhost:8000`

---

## 🌐 Frontend Setup

### Install Dependencies

```bash
cd ../frontend
npm install
```

### Configure Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:8000
```

### Start the Frontend

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## 📸 Demo Video

https://github.com/user-attachments/assets/93f3dc6c-7b5c-41c8-b4f1-da692ac209e1



