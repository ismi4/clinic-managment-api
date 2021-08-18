exports.getAllAdmins = (req, res) => {
  console.log(req.query);
  res.status(200).json({ status: 'success' });
};

exports.createAdmin = (req, res) => {
  console.log('I work!');
  res.status(200).json({ status: 'success' });
};
