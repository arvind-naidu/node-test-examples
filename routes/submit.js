// Generated by CoffeeScript 1.5.0
(function() {
  var users;

  users = require("../lib/users");

  module.exports = function(req, res, next) {
    var error;
    error = "";
    return users.createOrUpdateUser(req.body, function(err) {
      if (err) {
        if (req.xhr) {
          return res.send(400, {
            meta: {
              status: 400,
              msg: err
            }
          });
        } else {
          return res.render("index", {
            title: "Oops!",
            error: err
          });
        }
      } else {
        if (req.xhr) {
          return res.send(200, {
            meta: {
              status: 200,
              msg: "ok"
            }
          });
        } else {
          return res.render("complete", {
            title: "Hello " + req.body.name + "!",
            error: "",
            user: req.body
          });
        }
      }
    });
  };

}).call(this);