const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const nurseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A nurse must have a name!'],
    trim: true
  },
  surname: {
    type: String,
    required: [true, 'A nurse must have a surname!'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'A nurse must have an email!'],
    unique: true,
    trim: true
  }
});

nurseSchema.plugin(AutoIncrement, { inc_field: 'nurseID' });

const Nurse = mongoose.model('Nurse', nurseSchema);

module.exports = Nurse;
