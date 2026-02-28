# MERN Dark Portfolio

A centered, aesthetic dark-themed portfolio template built with the MERN stack and Tailwind CSS.

## Project structure

- `client/` - React + Vite + Tailwind frontend
- `server/` - Express + Mongoose backend API

## Setup

### 1) Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 2) Run backend

```bash
cd server
npm run dev
```

### 3) Run frontend

```bash
cd client
npm run dev
```

Frontend runs on `http://localhost:5173` and backend on `http://localhost:5000`.

## Environment variables

Create `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
```

`MONGODB_URI` is optional. If missing, the API still runs without DB connection.
