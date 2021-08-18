const validator = require('validator');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A patient must have a name!'],
    trim: true,
    validate: {
      validator: validator.isAlpha,
      message: 'The name you entered should only contain letters!'
    }
  },
  surname: {
    type: String,
    required: [true, 'A patient must have a surname!'],
    trim: true,
    validate: {
      validator: validator.isAlpha,
      message: 'The surname you entered should only contain letters!'
    }
  },
  email: {
    type: String,
    required: [true, 'A patient must have an email!'],
    unique: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: 'The email you entered is invalid!'
    }
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'A patient must have a date of birth!'],
    validate: {
      validator: validator.isDate,
      message: 'The date you entered is not in valid format!'
    }
  },
  address: {
    type: String,
    required: [true, 'A patient must have an address!'],
    trim: true
  },
  personalID: {
    type: Number,
    required: [true, 'A patient must have a personalID!'],
    unique: true,
    validate: {
      validator: validator.isInt,
      message: 'The personalID you entered should only contain integers!'
    }
  },
  phoneNumber: {
    type: Number,
    required: [true, 'A patient must have a phone number'],
    validate: {
      validator: validator.isInt,
      message: 'The phone number you entered should only contain integers!'
    }
  },
  weight: {
    type: Number,
    required: [true, 'A patient must have a weight!'],
    validate: {
      validator: validator.isFloat,
      message: 'The weight you entered should be a number!'
    }
  },
  height: {
    type: Number,
    required: [true, 'A patient must have a height!'],
    validate: {
      validator: validator.isFloat,
      message: 'The height you entered should be a number!'
    }
  },
  gender: {
    type: String,
    enum: ['M', 'F'],
    required: [true, 'A patient must have a gender!']
  },
  medicalRecords: [],
  appointments: []
});

patientSchema.plugin(AutoIncrement, { inc_field: 'patientID' });

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
