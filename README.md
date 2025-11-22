# 🌟 **RedGold – Blood Bank Management & Donor-Recipient Matching System**

RedGold is a full-stack MERN application designed to simplify the blood donation process by connecting **donors**, **recipients**, and **blood banks** through a clean, modern, and efficient workflow.
It provides real-time donor matching, secure authentication, document uploads, admin controls, and a fully responsive UI.

The platform aims to make blood search **faster**, **safer**, and **organized**, especially during medical emergencies.

---

# 🚀 **What RedGold Does**

### 🔴 Donor Side

* Register as a verified donor
* Upload identity proof
* Update availability & recent donation status
* Get notified when nearby users need blood
* Maintain full donation history

### 🩸 Recipient Side

* Search blood donors by **group**, **city**, **pincode**
* Send emergency blood requests
* Track request status
* Communicate safely with matched donors

### 🏥 Admin / Blood Bank Side

* Verify donor profiles
* Manage approved donors
* View all incoming blood requests
* Broadcast urgent blood alerts
* Maintain a centralized donor database

---

# 🧩 **Project Architecture (Based on Your Actual Codebase)**

```
redgold-main/
 ├── client/                     # React Frontend
 │   ├── src/
 │   │   ├── components/         # UI Components
 │   │   ├── pages/              # Route Pages (Login, Dashboard, Admin, Donor, Recipient)
 │   │   ├── context/            # Auth & Global State
 │   │   ├── utils/              # Helper Functions
 │   │   ├── services/           # API Service Functions
 │   │   └── App.jsx
 │   └── package.json
 │
 ├── server/                     # Node + Express Backend
 │   ├── controllers/            # Business Logic (donor, auth, req)
 │   ├── models/                 # Mongoose Schemas
 │   ├── routes/                 # API Routes
 │   ├── middleware/             # Auth, Error Handling
 │   ├── utils/                  # S3, Token, Upload helper
 │   ├── config/                 # MongoDB Connection
 │   └── server.js               # App Entry Point
 │
 └── README.md                   # (This File)
```

Both **client** and **server** folders are cleanly structured, following industry standards.

---

# 🛠️ **Tech Stack**

### **Frontend**

* ⚛️ React.js
* 🎨 Tailwind CSS
* 🔄 React Router
* 🌐 Axios for API calls

### **Backend**

* 🟦 Node.js
* ⚡ Express.js
* 🔐 JWT Authentication
* 🖇️ Multer (file uploads)
* ☁️ AWS S3 (document storage)

### **Database**

* 🍃 MongoDB
* 🧬 Mongoose ODM models

---

# ⚙️ **Environment Variables**

### **Backend (`/server/.env`):**

```
MONGO_URI=
JWT_SECRET=
AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_BUCKET_NAME=
```

---

# 🧪 **How to Run the Application**

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/redgold.git
cd redgold
```

---

## 2️⃣ Setup Backend

```bash
cd server
npm install
npm start
```

---

## 3️⃣ Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

Frontend will run at
👉 **[http://localhost:5173](http://localhost:5173)**

Backend will run at
👉 **[http://localhost:5000](http://localhost:5000)**

---

# 🧠 **Core Functionalities Implemented by Me**

### 🔥 Backend Engineering

* Designed complete REST API architecture
* Built secure JWT auth + role-based access
* Constructed Mongoose schemas (Donor, Requests, Admin)
* Integrated AWS S3 for document/image uploads
* Added middleware: auth, error handler, file handling
* Optimized donor-search queries (geo + blood group based)

### 🎨 Frontend Development

* Developed reusable React components
* Implemented responsive UI using Tailwind
* Created user dashboards for Donor, Recipient & Admin
* Built protected routes with auth-context
* Integrated API services for all modules

### 🧩 Product Flow Designed

* Verified donor onboarding
* Emergency request lifecycle
* Admin approval workflow
* Donor → Recipient matching process

---

# 📈 **Future Enhancements**

* 📍 Live location-based donor search
* 🔔 Real-time notifications (Socket.io / Firebase)
* 📱 Mobile App (React Native)
* 🔬 AI matching for rare blood groups
* 🗺️ Heatmap of active donors

---

# 📸 **Screenshots Section (Optional)**

You can add UI images like:

* Login Screen
* Donor Dashboard
* Request Management
* Admin Panel

---

# 🤝 **Contributing**

Pull requests, improvements, and suggestions are welcome!

---

# 📬 **Contact**

**Developer – Dipanshu Mishra**
📧 [mdipanshu464@gmail.com](mailto:mdipanshu464@gmail.com)
🔗 GitHub: [https://github.com/dipcoderr](https://github.com/dipcoderr)
🔗 LinkedIn: https://www.linkedin.com/in/dipcoderr/

---

If you want, I can also:
✅ Automatically generate a **professional PDF version**
✅ Create a **beautiful banner image** for top of README
✅ Add **badges (Build, License, Stars)**
✅ Add **API Documentation**

Just tell me!
