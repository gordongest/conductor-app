const Schema = require('../models/Schema');
const mongoose = require('mongoose');
const db = mongoose.connection;

const getTeachers = () => {
  return Schema.Teacher.find({})
}

module.exports = {
  getTeachers
};