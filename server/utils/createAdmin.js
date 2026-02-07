const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

async function createAdmin() {
  try {
    // Admin details - CHANGE THESE VALUES
    const adminData = {
      name: 'Admin User',
      phone: '+91-9999999999',
      address: 'Admin Office, Blood Bank HQ',
      email: 'admin@redgold.com',
      password: 'admin123',
      isAdmin: true
    };

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminData.email });
    if (existingAdmin) {
      console.log('❌ Admin with this email already exists!');
      process.exit(1);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(adminData.password, 10);
    
    // Create admin user
    const admin = new User({
      ...adminData,
      password: hashedPassword
    });

    const savedAdmin = await admin.save();
    
    console.log('✅ Admin created successfully!');
    console.log('📧 Email:', adminData.email);
    console.log('🔑 Password:', adminData.password);
    console.log('👤 User ID:', savedAdmin._id);
    console.log('🛡️ Admin Status:', savedAdmin.isAdmin);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin:', error);
    process.exit(1);
  }
}

createAdmin();