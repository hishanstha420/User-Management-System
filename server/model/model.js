const mongoose = require("mongoose");
const Joi = require("joi");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("userdb", schema);

validateUserdb = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(3).required(),
    gender: Joi.string().min(3),
    status: Joi.string().min(3),
  });
  return schema.validate(user);
};

exports.Userdb = Userdb;
exports.validate = validateUserdb;
