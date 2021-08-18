const validator = require('validator');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A doctor must have a name!'],
    trim: true,
    validate: {
      validator: validator.isAlpha,
      message: 'The name you entered should only contain letters!'
    }
  },
  surname: {
    type: String,
    required: [true, 'A doctor must have a surname!'],
    trim: true,
    validate: {
      validator: validator.isAlpha,
      message: 'The surname you entered should only contain letters!'
    }
  },
  specialty: {
    type: String,
    required: [true, 'A doctor must have a specialty!'],
    trim: true,
    validate: {
      validator: validator.isAlpha,
      message: 'The specialty you entered should only contain letters!'
    }
  },
  email: {
    type: String,
    required: [true, 'A doctor must have an email!'],
    unique: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: 'The email you entered is invalid!'
    }
  }
});

doctorSchema.plugin(AutoIncrement, { inc_field: 'doctorID' });

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
