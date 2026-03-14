# 🏠 Hostel Room Maintenance Tracker

A full stack web application that digitizes and streamlines the hostel room maintenance complaint process — replacing informal WhatsApp messages and manual registers with a structured, trackable system.

---

## 📌 Problem Statement

In most college hostels, students report maintenance issues (broken fans, water leaks, electrical faults, etc.) verbally or through WhatsApp messages to wardens. This leads to:

- Complaints getting lost or forgotten
- No accountability or tracking
- Students unaware of complaint status
- Wardens having no organized view of pending issues

There is no centralized system to **submit, track, and resolve** hostel maintenance complaints efficiently.

---

## 💡 Solution

**Hostel Room Maintenance Tracker** is a role-based full stack web application where:

- **Students** can submit maintenance complaints, track their status in real time, and manage their own requests.
- **Wardens (Admin)** get a centralized dashboard to view, filter, and update the status of all complaints across the hostel.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| State Management | Context API |
| Routing | React Router DOM |
| Auth | JWT + LocalStorage |

---

## 👥 User Roles

### 🎓 Student
- Register and log in to their account
- Submit a new maintenance complaint with title, description, category, and room number
- View and track all their submitted complaints
- Edit or delete their own complaints
- See real-time status updates from the warden

### 🛡️ Warden (Admin)
- View all complaints from all students in a centralized dashboard
- Filter complaints by status, category, hostel block, and date
- Search complaints by keyword with debounced search
- Update complaint status: `Pending → In Progress → Resolved`
- View stats (total complaints, resolved, pending, in-progress)

---

## ✨ Features

### Core Features
- 🔐 **Authentication System** — Signup, Login, protected routes, role-based access
- 📋 **Complaint Management** — Full CRUD operations on complaints
- 📊 **Admin Dashboard** — Stats cards showing complaint counts by status
- 🔄 **Status Timeline** — Visual progress tracker (Pending → In Progress → Resolved)
- 🌓 **Dark / Light Mode** — Theme toggle with localStorage persistence

### Technical Features
- ⚡ **Debounced Search** — Optimized search bar to reduce unnecessary API calls
- 📄 **Pagination** — Complaints displayed 10 per page (backend + frontend)
- 🔍 **Filter & Sort** — Filter by status, category, block; sort by date or priority
- 📱 **Responsive UI** — Fully mobile-friendly with Tailwind CSS
- ⚠️ **Error Handling** — Try-catch blocks, loading states, toast notifications
- ✅ **Form Validation** — Input validation with real-time error messages

---

## 📁 Project Structure

```
hostel-maintenance/
├── client/                  # React Frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route-level pages
│   │   ├── context/         # Auth + Theme context
│   │   ├── hooks/           # Custom hooks
│   │   └── utils/           # Helper functions
│   └── ...
│
└── server/                  # Node.js Backend
    ├── models/              # MongoDB schemas (User, Complaint)
    ├── routes/              # Express API routes
    ├── middleware/          # Auth middleware
    └── ...
```

---

## 🗺️ Application Pages

| Page | Route | Access |
|---|---|---|
| Home / Landing | `/` | Public |
| Login | `/login` | Public |
| Signup | `/signup` | Public |
| Student Dashboard | `/dashboard` | Student |
| New Complaint | `/new-complaint` | Student |
| Complaint Detail | `/complaint/:id` | Student |
| Admin Dashboard | `/admin/dashboard` | Admin |
| Manage Complaints | `/admin/complaints` | Admin |

---

## 🗃️ Database Schema

### User
```json
{
  "name": "String",
  "email": "String (unique)",
  "password": "String (hashed)",
  "role": "student | admin",
  "roomNumber": "String",
  "hostelBlock": "String"
}
```

### Complaint
```json
{
  "title": "String",
  "description": "String",
  "category": "Electrical | Plumbing | Furniture | Other",
  "status": "Pending | In Progress | Resolved",
  "studentId": "ObjectId (ref: User)",
  "roomNumber": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js installed
- MongoDB running locally or MongoDB Atlas URI

### Steps

```bash
# Clone the repository
git clone https://github.com/your-username/hostel-maintenance-tracker.git

# Setup Backend
cd server
npm install
# Create .env file with MONGO_URI and JWT_SECRET
npm start

# Setup Frontend
cd ../client
npm install
npm start
```

The app will run at `http://localhost:3000`

---

## 📋 Assignment Requirements Coverage

| # | Requirement | Implementation |
|---|---|---|
| 1 | Routing & Navigation | React Router DOM with all pages |
| 2 | React Hooks | useState, useEffect, useRef, useContext |
| 3 | State Management | Context API for auth and theme |
| 4 | Authentication | JWT login/signup with protected routes |
| 5 | Theme Support | Dark/Light mode with localStorage |
| 6 | Search, Filter, Sort | Admin complaint management panel |
| 7 | Debouncing | Search bar debounced at 400ms |
| 8 | Pagination | Backend limit/skip + frontend UI |
| 9 | CRUD Operations | Full complaint lifecycle |
| 10 | API Integration | REST APIs with loading + error states |
| 11 | Form Handling | Controlled forms with validation |
| 12 | Responsive UI | Tailwind CSS responsive design |
| 13 | Error Handling | try/catch, error messages, toast alerts |

---

## 👨‍💻 Developed By Sai Janjirala

**Sai**
Full Stack Hackathon — College Project
