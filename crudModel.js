const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'A name is required'] },
  email: {
    type: String,
    required: [true, 'An email is required'],
    unique: true,
  },
  country: { type: String, required: [true, 'A country is required'] },
});

const Crud = mongoose.model('Crud', crudSchema);
module.exports = Crud;
