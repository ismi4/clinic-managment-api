const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A doctor must have a name!'],
    trim: true
  },
  surname: {
    type: String,
    required: [true, 'A doctor must have a surname!'],
    trim: true
  },
  specialty: {
    type: String,
    required: [true, 'A doctor must have a specialty!'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'A doctor must have an email!'],
    unique: true,
    trim: true
  }
});

doctorSchema.plugin(AutoIncrement, { inc_field: 'doctorID' });

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
