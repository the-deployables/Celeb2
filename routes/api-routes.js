var db = require("../models");
var passport = require('passport');

module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Celebrity.findAll({})
    .then(function(dbCeleb) {
      res.json(dbCeleb);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Celebrity.create({
      name: req.body.name,
      causeofdeath: req.body.causeofdeath,
      deathdate: req.body.deathdate,
      username: req.body.username
    })
    .then(function(dbCeleb) {
      res.json(dbCeleb);
    });
  });

};
