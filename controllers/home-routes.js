const router = require("express").Router();
const { experiment, Comment, User, projecgt } = require("../models");

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

router.get("/molemasscal", (req, res) => {
  console.log("=============Molecuar Mass Calculator==============");
  res.render("MoleMassCal");
});

module.exports = router;
