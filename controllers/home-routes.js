const router = require("express").Router();
const { Experiment, Comment, User, Project } = require("../models");

router.get("/login", (req, res) => {
  console.log("==================/login=================");
  if (req.session.loggedIn) {
    console.log("already loggedin, redirecting to /");
    res.redirect("/");
    return;
  }
  console.log("not loggedin go to login page");
  res.render("login");
});

router.get("/signup", (req, res) => {
  console.log("===================/signup====================");
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  res.render("signup");
});

module.exports = router;
