// models/Computer.js

const mongoose = require('mongoose');

const ComputerSchema = new mongoose.Schema({
  model_name: {
    type: String,
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  manufacture_date: {
    type: Date
  },
  warrenty_period: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Computer = mongoose.model('computer', ComputerSchema);