const Joi = require('joi');

const validation = () => {
  Joi.objectId = require('joi-objectid')(Joi);
}
module.exports = { validation };