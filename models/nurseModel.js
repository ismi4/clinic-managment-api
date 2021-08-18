const validator = require('validator');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const nurseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A nurse must have a name!'],
    trim: true,
    validate: {
      validator: validator.isAlpha,
      message: 'The name you entered should only contain letters!'
    }
  },
  surname: {
    type: String,
    required: [true, 'A nurse must have a surname!'],
    trim: true,
    validate: {
      validator: validator.isAlpha,
      message: 'The surname you entered should only contain letters!'
    }
  },
  email: {
    type: String,
    required: [true, 'A nurse must have an email!'],
    unique: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: 'The email you entered is invalid!'
    }
  }
});

nurseSchema.plugin(AutoIncrement, { inc_field: 'nurseID' });

const Nurse = mongoose.model('Nurse', nurseSchema);

module.exports = Nurse;
