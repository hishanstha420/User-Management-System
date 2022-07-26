const { Userdb, validate } = require("../model/model");

//create and save new user
exports.create = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  await user.save();
  res.send(user);
  res.redirect("/add_user");
  if (error) return res.status(500).send(error.details[0].message);
};
//retrieve  all users
exports.find = async (req, res) => {
  const user = await Userdb.find().sort({ name: 1 });
  res.send(user);
};

//retrive single user
exports.findOne = async (req, res) => {
  const user = await Userdb.findById(req.params.id);
  if (!user) return res.status(404).send("The user with ID isnot available!!!");
  res.send(user);
};

//update user
exports.update = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await Userdb.findByIdAndUpdate(req.params.id, {
    $set: {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status,
      new: true,
    },
  });
  if (!user) return res.status(404).send("The user with id not found!!");
  res.send(user);
};

//delete user

exports.delete = async (req, res) => {
  const user = await Userdb.findByIdAndRemove(req.params.id);
  if (!user) return res.status(404).send("The user with id not found!!");
  res.send(user);
};
