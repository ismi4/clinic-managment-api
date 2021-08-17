const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A admin must have a name!'],
    trim: true
  },
  surname: {
    type: String,
    required: [true, 'A admin must have a surname!'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'A admin must have an email!'],
    unique: true,
    trim: true
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
