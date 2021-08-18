const express = require('express');
const morgan = require('morgan');

const adminRouter = require('./routes/adminRoutes');
/* const doctorRouter = require('./routes/doctorRoutes');
const medicalRecordRouter = require('./routes/medicalRecordRoutes');
const nurseRouter = require('./routes/nurseRoutes');
const patientRouter = require('./routes/patientRoutes');
 */
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/admins', adminRouter);
/* app.use('/api/doctors', doctorRouter);
app.use('/api/medicalRecords', medicalRecordRouter);
app.use('/api/nurses', nurseRouter);
app.use('/api/patients', patientRouter); */

module.exports = app;
