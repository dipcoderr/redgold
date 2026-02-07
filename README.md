# 🩸 RedGold - Blood Bank Management System

<div align="center">

![RedGold Logo](https://img.shields.io/badge/RedGold-Blood%20Bank-E91E63?style=for-the-badge&logo=heart&logoColor=white)

**Saving Lives, One Donation at a Time** 💉

[![React](https://img.shields.io/badge/React-17.0.1-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Screenshots](#-screenshots) • [Contributing](#-contributing)

</div>

---

## 📖 About The Project

**RedGold** is a comprehensive blood bank management system designed to streamline the process of blood donation, inventory management, and appointment scheduling. Built with modern web technologies, it provides an intuitive interface for both donors and administrators to manage blood bank operations efficiently.

### 🎯 Mission

To bridge the gap between blood donors and those in need, making blood donation accessible, organized, and life-saving.

---

## ✨ Features

### 👥 For Donors

- 🔐 **Secure Authentication** - JWT-based login and registration
- 📝 **Profile Management** - Update personal information and donation history
- 🩸 **Blood Donation** - Easy appointment booking system
- 📊 **Dashboard** - Track your donation history and upcoming appointments
- 🔍 **Blood Availability** - Check available blood types in real-time

### 👨‍💼 For Administrators

- 🛡️ **Admin Panel** - Comprehensive management dashboard
- 📦 **Inventory Management** - Track blood stock levels
- 📅 **Appointment Management** - View and manage donation appointments
- 👤 **User Management** - Manage donor profiles and records
- 📈 **Analytics** - View donation statistics and trends

### 🌟 Key Highlights

- ⚡ **Real-time Updates** - Instant blood inventory updates
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🔒 **Secure** - Industry-standard security practices
- 🎨 **Modern UI** - Clean and intuitive user interface
- 🚀 **Fast Performance** - Optimized for speed and efficiency

---

## 🛠️ Tech Stack

### Frontend

```
⚛️  React 17.0.1
🎨  Bootstrap 5.0
🔄  React Router DOM 5.2
📦  React Toastify
⏰  Moment.js
```

### Backend

```
🟢  Node.js
⚡  Express.js
🍃  MongoDB Atlas
🔐  JWT Authentication
🔒  Bcrypt.js
```

### Development Tools

```
📦  npm
🔧  React Scripts
🐛  ESLint
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB Atlas Account** (or local MongoDB)

### Step 1: Clone the Repository

```bash
git clone https://github.com/dipcoderr/redgold.git
cd redgold
```

### Step 2: Install Dependencies

#### Backend Setup

```bash
cd server
npm install
```

#### Frontend Setup

```bash
cd client
npm install
```

### Step 3: Environment Configuration

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Step 4: Run the Application

#### Start Backend Server

```bash
cd server
npm start
```

Server will run on `http://localhost:5000`

#### Start Frontend Application

```bash
cd client
npm start
```

Application will open at `http://localhost:3000`

---

## 📱 Usage

### For Donors

1. **Register** - Create a new account with your details
2. **Login** - Access your dashboard
3. **Book Appointment** - Schedule a blood donation
4. **View Profile** - Check your donation history
5. **Browse Blood Bank** - See available blood types

### For Administrators

1. **Admin Registration** - Use admin secret key: `ADMIN_SECRET_2024`
2. **Login** - Access admin dashboard
3. **Manage Inventory** - Add/update blood stock
4. **View Appointments** - Manage donation schedules
5. **User Management** - Handle donor profiles

---

## 🎨 Screenshots

### 🏠 Home Page
*Beautiful landing page with call-to-action for blood donation*

### 📊 User Dashboard
*Personalized dashboard showing donation history and upcoming appointments*

### 🩸 Blood Bank Inventory
*Real-time blood availability across all blood types*

### 👨‍💼 Admin Panel
*Comprehensive admin dashboard for managing the entire system*

---

## 📂 Project Structure

```
redgold/
├── client/                 # React Frontend
│   ├── public/            # Static files
│   │   ├── favicon.svg    # App icon
│   │   └── index.html     # HTML template
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── screens/   # Page components
│   │   │   ├── Navbar.js  # Navigation bar
│   │   │   └── Footer.js  # Footer component
│   │   ├── reducers/      # Redux reducers
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
│
├── server/                # Node.js Backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Custom middlewares
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   ├── app.js            # Express app
│   └── package.json      # Backend dependencies
│
└── README.md             # Project documentation
```

---

## 🔐 Security Features

- 🔒 **Password Encryption** - Bcrypt hashing
- 🎫 **JWT Tokens** - Secure authentication
- 🛡️ **Protected Routes** - Middleware authentication
- 🔐 **Admin Authorization** - Secret key verification
- 🚫 **CORS Protection** - Configured CORS policy

---

## 🌐 API Endpoints

### Authentication

```
POST   /api/auth/register      # User registration
POST   /api/auth/login         # User login
POST   /api/auth/admin         # Admin registration
```

### Profile

```
GET    /api/profile            # Get user profile
PUT    /api/profile            # Update profile
```

### Blood Bank

```
GET    /api/blood              # Get all blood types
POST   /api/blood              # Add blood stock (Admin)
PUT    /api/blood/:id          # Update blood stock (Admin)
```

### Bookings

```
GET    /api/booking            # Get user bookings
POST   /api/booking            # Create new booking
GET    /api/booking/all        # Get all bookings (Admin)
```

### Appointments

```
GET    /api/appointment        # Get appointments
POST   /api/appointment        # Create appointment
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- 📝 Clear description of the bug
- 🔄 Steps to reproduce
- 💻 Expected vs actual behavior
- 📸 Screenshots (if applicable)

---

## 💡 Feature Requests

Have an idea? We'd love to hear it! Open an issue with:

- 🎯 Clear description of the feature
- 🤔 Why it would be useful
- 💭 Possible implementation approach

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Dipanshu Kumar Mishra**

- GitHub: [@dipcoderr](https://github.com/dipcoderr)
- Project Link: [https://github.com/dipcoderr/redgold](https://github.com/dipcoderr/redgold)

---

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- All the amazing contributors and blood donors! 🩸

---

## 📞 Support

Need help? Reach out:

- 📧 Email: support@redgold.com
- 💬 Issues: [GitHub Issues](https://github.com/dipcoderr/redgold/issues)
- 📖 Documentation: [Wiki](https://github.com/dipcoderr/redgold/wiki)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ for saving lives**

🩸 **Every drop counts. Every donation matters.** 🩸

---

© 2024 RedGold Blood Bank Management System. All Rights Reserved.

</div>
