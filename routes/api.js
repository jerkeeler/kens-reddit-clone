// =============================================================================
// This is a routing file that deals with everything related to the API
// =============================================================================
var router = require("express").Router();

// Import all models
var User = require("../models/User");
    Post = require("../models/Post");
    Group = require("../models/Group");

// ==========================================================
//                            GET
// ==========================================================
// GET /api/user return all users
// Note that this is probably not a good thing to call
router.get("/m", function(req, res, next) {
  User.find(function(err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

// GET /api/users/username/:username gets the requested user
router.get("/m/username/:username", function(req, res, next) {
  console.log(req.params);
  User.findOne({username: req.params.username}, function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

// GET /api/users/id/:id return the user with the specified id
router.get("/m/id/:id", function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

// GET /m/groupname/:groupname returns users of a given groupname
router.get("/m/groupname/:groupname", function(req, res, next) {
  User.findByGroup(req.params.groupname, function(err, users){
    if (err) return next(err);
    res.json(users);
  });
});

// GET /g returns all groups
router.get("/g", function(req, res, next) {
  Group.find(function(err, groups){
    if (err) return next(err);
    res.json(groups);
  });
});

// GET /g/groupname/:groupname returns group of a given groupname
router.get("/g/groupname/:groupname", function(req, res, next) {
  Group.findByGroup(req.params.groupname, function(err, group){
    if (err) return next(err);
    res.json(groups);
  });
});

// GET /g/id/:id returns group of a given id
router.get("/g/id/:id", function(req, res, next) {
  Group.findByGroup(req.params.id, function(err, group){
    if (err) return next(err);
    res.json(groups);
  });
});

// ==========================================================
//                          POST
// ==========================================================

// POST /api/users create a new user in the database
router.post("/users", function(req, res, next) {
  User.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// ==========================================================
//                        DELETE
// ==========================================================

// DELETE /api/user/:id delete the user with the specified id
router.delete("/users/:id", function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
