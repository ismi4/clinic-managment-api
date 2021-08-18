const validator = require('validator');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const medicalRecordSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Medical record must have a date!'],
    validate: {
      validator: validator.isDate,
      message: 'The date you entered is not in valid format!'
    }
  },
  patientID: {
    type: Number,
    required: [true, 'Medical record must have a patientID'],
    validate: {
      validator: validator.isInt,
      message: 'The patientID you entered should only contain integers!'
    }
  },
  doctorID: {
    type: Number,
    required: [true, 'Medical record must have a doctorID'],
    validate: {
      validator: validator.isInt,
      message: 'The doctorID you entered should only contain integers!'
    }
  },
  nurseID: {
    type: Number,
    required: [true, 'Medical record must have a nurseID'],
    validate: {
      validator: validator.isInt,
      message: 'The nurseID you entered should only contain integers!'
    }
  },
  relevantMedicalHistory: {
    type: String,
    trim: true
  },
  symptoms: {
    type: String,
    trim: true
  },
  physicalExamAndOtherInvestigation: {
    type: String,
    trim: true
  },
  diagnosis: {
    type: String,
    trim: true
  },
  therapyAndFurtherInvestigation: {
    type: String,
    trim: true
  }
});

medicalRecordSchema.plugin(AutoIncrement, { inc_field: 'medicalRecordID' });

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

module.exports = MedicalRecord;
