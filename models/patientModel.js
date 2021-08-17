const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A patient must have a name!'],
    trim: true
  },
  surname: {
    type: String,
    required: [true, 'A patient must have a surname!'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'A patient must have an email!'],
    unique: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'A patient must have a date of birth!']
  },
  address: {
    type: String,
    required: [true, 'A patient must have an address!'],
    trim: true
  },
  personalID: {
    type: Number,
    required: [true, 'A patient must have a personalID!'],
    unique: true
  },
  phoneNumber: {
    type: Number,
    required: [true, 'A patient must have a phone number']
  },
  weight: {
    type: Number,
    required: [true, 'A patient must have a weight!']
  },
  height: {
    type: Number,
    required: [true, 'A patient must have a height!']
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
