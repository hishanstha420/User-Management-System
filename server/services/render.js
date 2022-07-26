const axios = require("axios").default;

exports.homeRoutes = async (req, res) => {
  //make get request to api/users

  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch(function (error) {
      res.send(error);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

// exports.update_user = (res, req) => {
//   axios
//     .get("http://localhost:3000/api/users", { params: req.query.id })
//     .then((userdata) => {
//       res.render("update_user", { user: userdata.data });
//     })
//     .catch((error) => {
//       res.send(error);
//     });

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};