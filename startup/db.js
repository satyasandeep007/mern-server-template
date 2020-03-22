const winston = require('winston');
const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('mongodb://localhost/vidly')
    .then(() => winston.info('Connected to MongoDB...'));
}

module.exports = { db };