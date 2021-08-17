const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const medicalRecordSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Medical record must have a date!']
  },
  patientID: {
    type: Number,
    required: [true, 'Medical record must have a patientID']
  },
  doctorID: {
    type: Number,
    required: [true, 'Medical record must have a doctorID']
  },
  nurseID: {
    type: Number,
    required: [true, 'Medical record must have a nurseID']
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
